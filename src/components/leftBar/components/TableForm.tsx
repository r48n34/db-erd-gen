import { useState } from "react";
import { Column, Table } from "../../../interface/inputData";

import { useForm } from '@mantine/form';
import { Tooltip, ActionIcon, Modal, Group, Button, TextInput, Grid, Switch, Text, Select } from "@mantine/core";

import { IconSquarePlus, IconEdit, IconTrash } from '@tabler/icons';
import useTableStore from "../../../store/zustandStore";

import { uuidGen } from "../../../utilis/uuidGen";
import { commonSuccessActions } from "../../../utilis/notificationUtilis";

import { postgresTypeArray } from "../../../data/database/postgresType";

type TableFormProps = {
  mode: "create" | "edit"
  allTableData: Table[]
  editData?: Table // Optional if creating table 
};

interface FormColumns {
    id: string
    name: string,
    dataType: string
    isPrimaryKey: boolean
    isForeignKey: boolean,
    foreignTo: {
        name: null | string,
        column: null | string
    },
    relationship: null | string
}

interface FormObject {
    tableName: string
    columns: FormColumns[]
}

function initDataGenerator(mode: "create" | "edit", editData?:Table): FormObject{
    if(mode === "edit" && !!editData){
        console.log(editData);

        return {
            tableName: editData.name,
            columns: editData.columns.map( v => {
                return {
                    ...v,
                    isForeignKey: !!v.foreignTo
                }
            }) as FormColumns
        }
    }

    return {
        tableName: '',
        columns: [
            {
                id: uuidGen(),
                name: "id",
                dataType: "integer",
                isPrimaryKey: true,
                isForeignKey: false,
                foreignTo: {name: null, column: null},
                relationship: null
            }
        ],
    }
}

function TableForm({ mode = "create", allTableData, editData }: TableFormProps) {

    const [ opened, setOpened ] = useState(false);
    const addTableObjStore = useTableStore((state) => state.addTableObj);
    const updateTableObj = useTableStore((state) => state.updateTableObj);

    const form = useForm({
        initialValues: initDataGenerator(mode, editData),
        validate: {
            tableName: (v) => (v.length <= 1 ? "Table name should be larger than one" : null),
        }
    });

    const tablesField = form.values.columns.map((v, index) => (
       
            <Grid key={"col_" + v.id}>
                <Grid.Col span={3}>
                    <TextInput
                        withAsterisk
                        label="Column name"
                        placeholder="id"
                        {...form.getInputProps(`columns.${index}.name`)}
                    />
                </Grid.Col>

                <Grid.Col span={2}>
                    <Select
                        label="Column type"
                        placeholder="integer"
                        withAsterisk
                        searchable
                        data={postgresTypeArray}
                        {...form.getInputProps(`columns.${index}.dataType`)}
                    />
                </Grid.Col>

                <Grid.Col span={1}>
                    <Text align="left" size={14} weight={600} mt={3}>PK</Text>
                    <Switch
                        mt={10}
                        {...form.getInputProps(`columns.${index}.isPrimaryKey`, { type: 'checkbox' })}
                    />
                </Grid.Col>

                <Grid.Col span={1}>
                    <Text align="left" size={14} weight={600} mt={3}>FK</Text>
                    <Switch
                        mt={10}
                        {...form.getInputProps(`columns.${index}.isForeignKey`, { type: 'checkbox' })}
                    />
                </Grid.Col>

                { form.values.columns[index].isForeignKey 
                ? (
                <>
                    <Grid.Col span={2}>  
                        <Select
                            label="FK Table name"
                            placeholder="name"
                            withAsterisk
                            data={Array.isArray(allTableData) ? allTableData.map( v => v.name ) : []}
                            {...form.getInputProps(`columns.${index}.foreignTo.name`)}
                        />
                    </Grid.Col>

                    <Grid.Col span={2}>
                        <Select
                            label="FK Column"
                            placeholder="id"
                            withAsterisk
                            disabled={!form.values.columns[index].foreignTo.name}
                            data={
                                form.values.columns[index].foreignTo.name 
                                ?   allTableData.filter( v => v.name === form.values.columns[index].foreignTo.name )
                                    [0].columns.map( v => v.name )
                                : []
                            }
                            {...form.getInputProps(`columns.${index}.foreignTo.column`)}
                        />
                    </Grid.Col>
                </>
                )
                : (<Grid.Col span={4}></Grid.Col>) 
                }

                <Grid.Col span={1}>
                    <ActionIcon
                        mt={26}
                        color="red" 
                        onClick={() => form.removeListItem('columns', index)}
                    >
                        <IconTrash size={16} />
                    </ActionIcon>
                </Grid.Col>
            </Grid>
     
    ));

    function handleSubmit(values: FormObject){

        try {
            
            console.log(values);
    
            // TODO: check if table name exist
            // TODO2: check if columns is valid
    
            const storeObj = {
                name: values.tableName,
                columns: values.columns.map( v => {
                    let baseObj = {
                        name: v.name,
                        dataType: v.dataType,
                        isPrimaryKey: v.isPrimaryKey
                    } as Column
    
                    if(v.isForeignKey){
                        baseObj.foreignTo = {
                            name: v.foreignTo.name as string, 
                            column: v.foreignTo.column as string
                        }
                    }
    
                    return baseObj
                })
            } as Table
    
            // Create table
            if(mode === "create"){
                addTableObjStore(storeObj);
            }
    
            // Create table
            if(mode === "edit"){
                updateTableObj(storeObj)
            }

            setOpened(false);
            commonSuccessActions();

            form.reset()

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
        <Modal
            size="95%"
            opened={opened}
            onClose={() => setOpened(false)}
            title={ mode === "create" ? "Create table" : "Edit table"}
        >
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>

            <TextInput
                withAsterisk
                label="Table name"
                placeholder="some_table_name"
                {...form.getInputProps('tableName')}
            />

            <Group position="right" mt="md">
                <Button
                    onClick={() =>
                        form.insertListItem(
                            'columns', 
                            {
                                id: uuidGen(),
                                name: "id",
                                dataType: "integer",
                                isPrimaryKey: false,
                                isForeignKey: false,
                                foreignTo: {name: null, column: null},
                                relationship: null
                            }
                        )
                }>
                    Add column
                </Button>
            </Group>

            {tablesField}

            <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
            </Group>

        </form>
        </Modal>

        <Group position="center">
            <Tooltip label="Add table">
            <ActionIcon onClick={ () => setOpened(true) }>
                { mode === "create" ? <IconSquarePlus size={36} /> : <IconEdit size={18} />}
            </ActionIcon>
            </Tooltip>
        </Group>
        </>
    );
}

export default TableForm;
