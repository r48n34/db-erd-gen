import { ActionIcon, Tooltip } from "@mantine/core";

import { IconDatabase, IconInfoCircle } from '@tabler/icons-react';
import { CodeHighlightTabs } from '@mantine/code-highlight';

import { Table } from "../../interface/inputData";
import { modals } from '@mantine/modals';
import { tableDataToCRUDKnex, tableDataToCRUDKysely, tableDataToCRUDPostgresql, tableDataToCRUDPrisma } from "../../utilis/dataBase/tableDataToCRUD";

interface TableDataCRUDProps {
    dataTable: Table
}

function TableDataCRUD({ dataTable }: TableDataCRUDProps) {

    const openGenerateModal = (dataTable: Table) => modals.open({
        title: dataTable.name + " CRUD Code",
        size: "85%",
        children: (
            <>
                <CodeHighlightTabs
                    withExpandButton
                    defaultExpanded
                    code={[
                        {
                            fileName: "PostgreSQL / MySQL",
                            code: tableDataToCRUDPostgresql(dataTable),
                            language: "sql",
                            icon: <IconDatabase size={14}/>
                        },
                        {
                            fileName: "Knex",
                            code: tableDataToCRUDKnex(dataTable),
                            language: "ts",
                            icon: <IconDatabase size={14}/>
                        },
                        {
                            fileName: "Kysely",
                            code: tableDataToCRUDKysely(dataTable),
                            language: "ts",
                            icon: <IconDatabase size={14}/>
                        },
                        {
                            fileName: "Prisma",
                            code: tableDataToCRUDPrisma(dataTable),
                            language: "ts",
                            icon: <IconDatabase size={14}/>
                        }
                    ]}
                />
            </>
        ),
    });

    return (
        <>
            <Tooltip label="CRUD string">
                <ActionIcon
                    size="md" variant="light" 
                    onClick={() => {
                        openGenerateModal(dataTable);
                    }}
                >
                   <IconInfoCircle size={18} />
                </ActionIcon>
            </Tooltip>
        </>
    )
}

export default TableDataCRUD
