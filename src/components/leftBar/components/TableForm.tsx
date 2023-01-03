import { useState } from "react";
import { Table } from "../../../interface/inputData";

import { useForm } from '@mantine/form';
import { Tooltip, ActionIcon, Modal, Group, Button, TextInput, Grid, Switch, Text, Autocomplete, Select } from "@mantine/core";

import { IconSquarePlus, IconEdit, IconTrash } from '@tabler/icons';
import { uuidGen } from "../../../utilis/uuidGen";

type TableFormProps = {
  mode: "create" | "edit"
  allTableData: Table[]
  editData?: Table // Optional if creating table 
};

function TableForm({ mode = "create", allTableData, editData }: TableFormProps) {
    const [ opened, setOpened ] = useState(false);

    const form = useForm({
        initialValues: {
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
        },
        validate: {
            tableName: (v) => (v.length <= 1 ? "Table name should be larger than one" : null),
        }
    });

    const tablesField = form.values.columns.map((v, index) => (
       
            <Grid key={"col_" + v.id}>
                <Grid.Col span={2}>
                    <TextInput
                        withAsterisk
                        label="Column name"
                        placeholder="id"
                        {...form.getInputProps(`columns.${index}.name`)}
                    />
                </Grid.Col>

                <Grid.Col span={2}>
                    <Autocomplete
                        label="Column type"
                        placeholder="integer"
                        withAsterisk
                        data={['inetger', 'varchar', 'char', 'boolean', 'double', "float", "timespamps", "date"]}
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

                <Grid.Col span={2}>
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

    return (
        <>
        <Modal
            size="75%"
            opened={opened}
            onClose={() => setOpened(false)}
            title={ mode === "create" ? "Create table" : "Edit table"}
        >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>

            <TextInput
                withAsterisk
                label="Table name"
                placeholder="users"
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
                { mode === "create" ? <IconSquarePlus size={36} /> : <IconEdit size={36} />}
            </ActionIcon>
            </Tooltip>
        </Group>
        </>
    );
}

export default TableForm;
