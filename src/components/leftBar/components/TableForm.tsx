import { useEffect, useState } from "react";
import { Column, Table } from "../../../interface/inputData";

import { useForm } from '@mantine/form';
import { Tooltip, ActionIcon, Modal, Group, Button, TextInput, Grid, Switch, Text, Select, Box } from "@mantine/core";

import { IconSquarePlus, IconEdit, IconTrash, IconDeviceFloppy } from '@tabler/icons';
import useTableStore from "../../../store/zustandStore";

import { uuidGen } from "../../../utilis/uuidGen";
import { commonSuccessActions, failedDeleteMessage } from "../../../utilis/notificationUtilis";

import { postgresTypeArray } from "../../../data/database/postgresType";
import ColumnTypeList from "../../dataSample/ColumnTypeList";

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
    isForeignKey: boolean
    unique?: boolean
    foreignTo?: {
        name: null | string,
        column: null | string
    },
    notNull: boolean
    relationship: null | string
}

function initDataGenerator(mode: "create" | "edit", editData?:Table): FormObject{
    // console.log("NEW EDIT DATA", editData);
    
    if(mode === "edit" && !!editData){

        // console.log(editData.columns);
        
        return {
            tableName: editData.name,
            columns: editData.columns.map( v => {
                return {
                    ...v,
                    id: v.hasOwnProperty("id") ? v.id : uuidGen(),
                    isForeignKey: !!v.foreignTo,
                    relationship: null,
                    unique: v.hasOwnProperty("unique") ? v.unique : false,
                    foreignTo: v.hasOwnProperty("foreignTo") ? v.foreignTo : { name: null, column: null },
                }
            }) as FormColumns[]
        }
    }

    return {
        tableName: '',
        columns: [
            {
                id: uuidGen(),
                name: "id",
                dataType: "serial",
                isPrimaryKey: true,
                isForeignKey: false,
                notNull: false,
                unique: false,
                foreignTo: { 
                    name: null,
                    column: null
                },
                relationship: null
            }
        ],
    }
}

interface FormObject {
    tableName: string
    columns: FormColumns[]
}

function TableForm({ mode = "create", allTableData, editData }: TableFormProps) {

    const [ opened, setOpened ] = useState<boolean>(false);

    const addTableObjStore = useTableStore((state) => state.addTableObj);
    const updateTableObj = useTableStore((state) => state.updateTableObj);

    const form = useForm({
        initialValues: initDataGenerator(mode, editData),
        validate: {
            tableName: (v) => (v.length <= 1 ? "Table name should be larger than one" : null),
            columns: {
                name: (v) => (v.length === 0 ? 'Invalid names' : null)
            }
        }
    });

    useEffect(() => {
        // console.log("Hello")
        form.setValues(initDataGenerator(mode, editData))
    }, [editData])
    
    const tablesField = form.values.columns.map((v, index) => (
       
            <Grid key={"col_" + v.id} mb={8}>

                <Grid.Col span={2}>
                    <Group>
                        <Tooltip label="Delete column">
                        <ActionIcon
                            mt={26}
                            color="red" 
                            onClick={() => form.removeListItem('columns', index)}
                        >
                            <IconTrash size={16} />
                        </ActionIcon>
                        </Tooltip>

                        <TextInput
                            withAsterisk
                            label="Column name"
                            placeholder="id"
                            {...form.getInputProps(`columns.${index}.name`)}
                        />
                    </Group>
                </Grid.Col>

                <Grid.Col span={2}>
                    <Select
                        label={<div style={{ display: "inline-block" }}><ColumnTypeList/></div>}
                        placeholder="integer"
                        withAsterisk
                        searchable
                        data={postgresTypeArray}
                        {...form.getInputProps(`columns.${index}.dataType`)}
                    />
                </Grid.Col>

                <Grid.Col span={2}>
                    <Group>
                    <Box>
                    <Tooltip label="Primary Key">
                        <Text align="left" size={14} weight={600} mt={3}>PK</Text>
                    </Tooltip>

                    <Switch
                        mt={10}
                        {...form.getInputProps(`columns.${index}.isPrimaryKey`, { type: 'checkbox' })}
                    />
                    </Box>

                    <Box>
                    <Tooltip label="Column not nullable?">
                        <Text align="left" size={14} weight={600} mt={3}>not Null</Text>
                    </Tooltip>

                    <Switch
                        mt={10}
                        {...form.getInputProps(`columns.${index}.notNull`, { type: 'checkbox' })}
                    />
                    </Box>

                    <Box>
                    <Tooltip label="Unique">
                        <Text align="left" size={14} weight={600} mt={3}>Unique</Text>
                    </Tooltip>

                    <Switch
                        mt={10}
                        {...form.getInputProps(`columns.${index}.unique`, { type: 'checkbox' })}
                    />
                    </Box>

                    <Box>
                    <Tooltip label="Foreign Key">
                        <Text align="left" size={14} weight={600} mt={3}>FK</Text>
                    </Tooltip>

                    <Switch
                        mt={10}
                        disabled={allTableData.length <= 1 && mode === "edit"}
                        {...form.getInputProps(`columns.${index}.isForeignKey`, { type: 'checkbox' })}
                    />
                    </Box>
                    </Group>
                </Grid.Col>

                { form.values.columns[index].isForeignKey 
                ? (
                <>
                    <Grid.Col span={2}>  
                        <Select
                            label="FK Table name"
                            placeholder="name"
                            withAsterisk
                            disabled={allTableData.length <= 1 && mode === "edit"}
                            data={
                                Array.isArray(allTableData) 
                                ? allTableData.map( v => ({ value: v.name, label: v.name, disabled: v.name === form.values.tableName }) ) 
                                : []
                            }
                            {...form.getInputProps(`columns.${index}.foreignTo.name`)}
                        />
                    </Grid.Col>

                    <Grid.Col span={2}>
                        <Select
                            label="FK Column"
                            placeholder="id"
                            withAsterisk
                            disabled={!form.values.columns[index].foreignTo!.name}
                            data={
                                form.values.columns[index].foreignTo!.name 
                                ?   allTableData.filter( v => v.name === form.values.columns[index].foreignTo!.name )
                                    [0].columns.map( v => v.name )
                                : []
                            }
                            {...form.getInputProps(`columns.${index}.foreignTo.column`)}
                        />
                    </Grid.Col>
                </> )
                : (<Grid.Col span={3}></Grid.Col>) 
                }

                
            </Grid>
     
    ));

    function handleSubmit(values: FormObject){

        try {
            
            // console.log(values);

            // Empty table name
            if(values.columns.length === 0){
                failedDeleteMessage("Table can not be empty.")
                return
            }

            // PK more than one
            if(values.columns.filter( v => v.isPrimaryKey).length >= 2){
                failedDeleteMessage("More than one PK exist, please remove it.")
                return
            }

            // Duplicated column name
            if( Array.from(new Set(values.columns.map( v => v.name ))).length !== values.columns.length ){
                failedDeleteMessage("Duplicated column name")
                return
            }
    
            const storeObj = {
                name: values.tableName.trim().toLowerCase().split(" ").join("_"),
                columns: values.columns.map( v => {
                    let baseObj = {
                        id: v.id,
                        name: v.name.trim().toLowerCase().split(" ").join("_"),
                        dataType: v.dataType,
                        unique: v.unique,
                        isPrimaryKey: v.isPrimaryKey
                    } as Column
    
                    if(v.isForeignKey && !!v.foreignTo){
                        baseObj.foreignTo = {
                            name: v.foreignTo.name as string, 
                            column: v.foreignTo.column as string
                        }
                    }

                    baseObj.notNull = v.notNull
    
                    return baseObj
                })
            } as Table
    
            // Create table
            if(mode === "create"){

                // Table name already exist
                if(allTableData.map( v => v.name ).indexOf(values.tableName) >= 0){
                    failedDeleteMessage("Table name already exist")
                    return
                }

                addTableObjStore(storeObj);
            }
    
            // Edit table
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
        <form onSubmit={form.onSubmit( (values) => handleSubmit(values) )}>

            <TextInput
                withAsterisk
                label="Table name"
                placeholder="some_table_name"
                disabled={ mode === "edit" }
                {...form.getInputProps('tableName')}
            />

            <Group position="right" mt="md">
                <Button
                    variant="light"
                    onClick={() =>
                        form.insertListItem(
                            'columns', 
                            {
                                id: uuidGen(),
                                name: "name",
                                dataType: "varchar",
                                isPrimaryKey: false,
                                isForeignKey: false,
                                notNull: false,
                                unique: false,
                                foreignTo: {
                                    name: null,
                                    column: null
                                },
                                relationship: null
                            }
                        )
                }>
                    + column
                </Button>
            </Group>

            { tablesField }

            <Group position="right" mt="md">
                <Button type="submit" leftIcon={<IconDeviceFloppy size={18}/>}>
                    Save
                </Button>
            </Group>

        </form>
        </Modal>

        <Group position="center">
            <Tooltip label={ mode === "create" ? "Add table" : "Edit table" }>
            <ActionIcon onClick={ () => setOpened(true) }>
                { mode === "create" ? <IconSquarePlus size={20} /> : <IconEdit size={18} />}
            </ActionIcon>
            </Tooltip>
        </Group>
        </>
    );
}

export default TableForm;
