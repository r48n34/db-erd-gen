import { Menu, Button } from '@mantine/core';
import {
    IconBrandTypescript,
    IconDatabase,
} from '@tabler/icons';
import { tableDataToTsTypeScheme } from '../../utilis/dataBase/tableDataToTsType';
import { tableDataToZodTypeScheme } from '../../utilis/dataBase/tableDataToZodType';
import TableDataToBtnView from '../debug/TableDataToBtnView';
import { tableDataToMySQLScheme } from '../../utilis/dataBase/tableDataToMySQL';
import { tableDataToPostgresScheme } from '../../utilis/dataBase/tableDataToPostgres';
import { tableDataToSQLiteScheme } from '../../utilis/dataBase/tableDataToSQLite';
import { tableDataToKnexScheme } from '../../utilis/dataBase/tableDataToKnex';
import { tableDataToKyselyScheme, tableDataToKyselyTypescriptScheme } from '../../utilis/dataBase/tableDataToKysely';

function GenerateMenu() {

    return (
        <>
            <Menu
                shadow="md" width={250}
                position="bottom-start"
                trigger="hover"
                loop={false}
                withinPortal={false}
                trapFocus={false}
                menuItemTabIndex={0}
            >
                <Menu.Target>
                    <Button variant="subtle" size="xs">
                        Generation
                    </Button>
                </Menu.Target>

                <Menu.Dropdown>

                    <Menu.Label>
                        Typescript
                    </Menu.Label>

                    <TableDataToBtnView
                        showsFormat="Menu"
                        title='Typescript Type'
                        generatedDataList={[
                            {
                                title: 'Typescript Type',
                                schemeFunc: tableDataToTsTypeScheme,
                                downloadFileName: "types.ts",
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            }
                        ]}
                    />

                    <TableDataToBtnView
                        showsFormat="Menu"
                        title='Typescript Zod Scheme'
                        generatedDataList={[
                            {
                                title: 'Typescript Zod Scheme',
                                schemeFunc: tableDataToZodTypeScheme,
                                downloadFileName: "zodScheme.ts",
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            }
                        ]}
                    />

                    <Menu.Divider />

                    <Menu.Label>
                        Raw Database
                    </Menu.Label>

                    <TableDataToBtnView
                        showsFormat="Menu"
                        title='Postgres'
                        generatedDataList={[
                            {
                                title: 'Postgres',
                                schemeFunc: tableDataToPostgresScheme,
                                downloadFileName: "tables.sql",
                                codeLanguages: 'sql',
                                icon: <IconDatabase size={18} />
                            }
                        ]}
                    />

                    <TableDataToBtnView
                        showsFormat="Menu"
                        title='MySQL'
                        generatedDataList={[
                            {
                                title: 'mySQL',
                                schemeFunc: tableDataToMySQLScheme,
                                downloadFileName: "mySqlTables.sql",
                                codeLanguages: 'sql',
                                icon: <IconDatabase size={18} />
                            }
                        ]}
                    />


                    <TableDataToBtnView
                        showsFormat="Menu"
                        title='SQLite'
                        generatedDataList={[
                            {
                                title: 'SQLite',
                                schemeFunc: tableDataToSQLiteScheme,
                                downloadFileName: `${new Date().getTime()}_migrations.db`,
                                codeLanguages: 'sql',
                                icon: <IconDatabase size={18} />
                            }
                        ]}
                    />

                    <Menu.Divider />

                    <Menu.Label>
                        Knex
                    </Menu.Label>

                    <TableDataToBtnView
                        showsFormat="Menu"
                        title='knex migrations'
                        generatedDataList={[
                            {
                                title: 'knex',
                                schemeFunc: tableDataToKnexScheme,
                                downloadFileName: `${new Date().getTime()}_migrations.ts`,
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            }
                        ]}
                    />

                    <Menu.Divider />

                    <Menu.Label>
                        Kysely
                    </Menu.Label>

                    <TableDataToBtnView
                        showsFormat="Menu"
                        title="Kysely Postgres"
                        generatedDataList={[
                            {
                                title: 'postgresql',
                                schemeFunc: tableDataToKyselyScheme,
                                downloadFileName: `${new Date().getTime()}_migrations.ts`,
                                types: "postgresql",
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            },
                            {
                                title: 'Kysely Types',
                                schemeFunc: tableDataToKyselyTypescriptScheme,
                                downloadFileName: `types.ts`,
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            },
                        ]}
                    />

                    <TableDataToBtnView
                        showsFormat="Menu"
                        title="Kysely MySQL"
                        generatedDataList={[
                            {
                                title: 'MYSQL',
                                schemeFunc: tableDataToKyselyScheme,
                                downloadFileName: `${new Date().getTime()}_migrations.ts`,
                                types: "mySQL",
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            },
                            {
                                title: 'Kysely Types',
                                schemeFunc: tableDataToKyselyTypescriptScheme,
                                downloadFileName: `types.ts`,
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            },
                        ]}
                    />

                    <TableDataToBtnView
                        showsFormat="Menu"
                        title="Kysely SQLite"
                        generatedDataList={[
                            {
                                title: 'sqlite',
                                schemeFunc: tableDataToKyselyScheme,
                                types: "sqlite",
                                downloadFileName: `${new Date().getTime()}_migrations.ts`,
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            },
                            {
                                title: 'Kysely Types',
                                schemeFunc: tableDataToKyselyTypescriptScheme,
                                downloadFileName: `types.ts`,
                                codeLanguages: 'ts',
                                icon: <IconBrandTypescript size={18} />
                            },
                        ]}
                    />



                </Menu.Dropdown>
            </Menu>
        </>
    );
}

export default GenerateMenu
