import { Menu, Button } from '@mantine/core';
import {
    IconBrandPrisma,
    IconBrandTypescript,
    IconCloudRain,
    IconDatabase,
    IconPlayCardK,
    IconWheel,
} from '@tabler/icons-react';
import { tableDataToTsTypeScheme } from '../../utilis/dataBase/tableDataToTsType';
import { tableDataToZodTypeScheme } from '../../utilis/dataBase/tableDataToZodType';
import TableDataToBtnView from '../debug/TableDataToBtnView';
import { tableDataToMySQLScheme } from '../../utilis/dataBase/tableDataToMySQL';
import { tableDataToPostgresScheme } from '../../utilis/dataBase/tableDataToPostgres';
import { tableDataToSQLiteScheme } from '../../utilis/dataBase/tableDataToSQLite';
import { tableDataToKnexScheme } from '../../utilis/dataBase/tableDataToKnex';
import { tableDataToKyselyScheme, tableDataToKyselyTypescriptScheme } from '../../utilis/dataBase/tableDataToKysely';
import { tableDataToPrismaScheme } from '../../utilis/dataBase/tableDataToPrisma';
import { tableDataToYupTypeScheme } from '../../utilis/dataBase/tableDataToYupType';
import { tableDataToValibotTypeScheme } from '../../utilis/dataBase/tableDataToValibotType';
import { tableDataToDrizzleScheme } from '../../utilis/dataBase/tableDataToDrizzle';
import { tableDataToSequelizeScheme } from '../../utilis/dataBase/tableDataToSequelize';

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
                        Generations Menu
                    </Menu.Label>

                    <Menu.Sub>
                        <Menu.Sub.Target>
                            <Menu.Sub.Item leftSection={<IconBrandTypescript size={16} />}>
                                Typescript
                            </Menu.Sub.Item>
                        </Menu.Sub.Target>

                        <Menu.Sub.Dropdown>
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
                                title='Zod Scheme'
                                generatedDataList={[
                                    {
                                        title: 'Zod Scheme',
                                        schemeFunc: tableDataToZodTypeScheme,
                                        downloadFileName: "zodScheme.ts",
                                        codeLanguages: 'ts',
                                        icon: <IconBrandTypescript size={18} />
                                    }
                                ]}
                            />

                            <TableDataToBtnView
                                showsFormat="Menu"
                                title='Yup Scheme'
                                generatedDataList={[
                                    {
                                        title: 'Yup Scheme',
                                        schemeFunc: tableDataToYupTypeScheme,
                                        downloadFileName: "yupScheme.ts",
                                        codeLanguages: 'ts',
                                        icon: <IconBrandTypescript size={18} />
                                    }
                                ]}
                            />

                            <TableDataToBtnView
                                showsFormat="Menu"
                                title='Valibot Scheme'
                                generatedDataList={[
                                    {
                                        title: 'Valibot Scheme',
                                        schemeFunc: tableDataToValibotTypeScheme,
                                        downloadFileName: "valibotScheme.ts",
                                        codeLanguages: 'ts',
                                        icon: <IconBrandTypescript size={18} />
                                    }
                                ]}
                            />
                        </Menu.Sub.Dropdown>
                    </Menu.Sub>

                    <Menu.Divider />

                    <Menu.Sub>
                        <Menu.Sub.Target>
                            <Menu.Sub.Item leftSection={<IconDatabase size={16} />}>
                                Raw Database
                            </Menu.Sub.Item>
                        </Menu.Sub.Target>

                        <Menu.Sub.Dropdown>
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
                        </Menu.Sub.Dropdown>
                    </Menu.Sub>

                    <Menu.Divider />

                    <Menu.Sub>
                        <Menu.Sub.Target>
                            <Menu.Sub.Item leftSection={<IconWheel size={16} />}>
                                Knex
                            </Menu.Sub.Item>
                        </Menu.Sub.Target>

                        <Menu.Sub.Dropdown>
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
                        </Menu.Sub.Dropdown>
                    </Menu.Sub>

                    <Menu.Divider />

                    <Menu.Sub>
                        <Menu.Sub.Target>
                            <Menu.Sub.Item leftSection={<IconPlayCardK size={16} />}>
                                Kysely
                            </Menu.Sub.Item>
                        </Menu.Sub.Target>

                        <Menu.Sub.Dropdown>
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
                        </Menu.Sub.Dropdown>
                    </Menu.Sub>

                    <Menu.Divider />

                    <Menu.Sub>
                        <Menu.Sub.Target>
                            <Menu.Sub.Item leftSection={<IconBrandPrisma size={16} />}>
                                Prisma
                            </Menu.Sub.Item>
                        </Menu.Sub.Target>

                        <Menu.Sub.Dropdown>
                            <TableDataToBtnView
                                showsFormat="Menu"
                                title="Prisma Scheme"
                                generatedDataList={[
                                    {
                                        title: 'PostgreSQL',
                                        schemeFunc: tableDataToPrismaScheme,
                                        types: "postgresql",
                                        downloadFileName: `${new Date().getTime()}_schema_psql.prisma`,
                                        codeLanguages: 'ts',
                                        icon: <IconDatabase size={18} />
                                    },
                                    {
                                        title: 'MySQL',
                                        schemeFunc: tableDataToPrismaScheme,
                                        types: "mySQL",
                                        downloadFileName: `${new Date().getTime()}_schema_mysql.prisma`,
                                        codeLanguages: 'ts',
                                        icon: <IconDatabase size={18} />
                                    },
                                    {
                                        title: 'Default others',
                                        schemeFunc: tableDataToPrismaScheme,
                                        types: "sqlite",
                                        downloadFileName: `${new Date().getTime()}_schema.prisma`,
                                        codeLanguages: 'ts',
                                        icon: <IconDatabase size={18} />
                                    },
                                ]}
                            />
                        </Menu.Sub.Dropdown>
                    </Menu.Sub>

                    <Menu.Divider />

                    <Menu.Sub>
                        <Menu.Sub.Target >
                            <Menu.Sub.Item leftSection={<IconCloudRain size={16} />}>
                                Drizzle ORM
                            </Menu.Sub.Item>
                        </Menu.Sub.Target>

                        <Menu.Sub.Dropdown>
                            <TableDataToBtnView
                                showsFormat="Menu"
                                title="Drizzle Scheme"
                                generatedDataList={[
                                    {
                                        title: 'PostgreSQL',
                                        schemeFunc: tableDataToDrizzleScheme,
                                        types: "postgresql",
                                        downloadFileName: `${new Date().getTime()}_schema_pg.ts`,
                                        codeLanguages: 'ts',
                                        icon: <IconDatabase size={18} />
                                    },
                                    {
                                        title: 'MySQL',
                                        schemeFunc: tableDataToDrizzleScheme,
                                        types: "mySQL",
                                        downloadFileName: `${new Date().getTime()}_schema_sql.ts`,
                                        codeLanguages: 'ts',
                                        icon: <IconDatabase size={18} />
                                    },
                                    {
                                        title: 'Sqlite',
                                        schemeFunc: tableDataToDrizzleScheme,
                                        types: "sqlite",
                                        downloadFileName: `${new Date().getTime()}_schema_sqlite.ts`,
                                        codeLanguages: 'ts',
                                        icon: <IconDatabase size={18} />
                                    },
                                ]}
                            />
                        </Menu.Sub.Dropdown>
                    </Menu.Sub>

                    <Menu.Divider />

                    <Menu.Sub>
                        <Menu.Sub.Target>
                            <Menu.Sub.Item leftSection={<IconDatabase size={16} />}>
                                Sequelize ORM
                            </Menu.Sub.Item>
                        </Menu.Sub.Target>

                        <Menu.Sub.Dropdown>
                            <TableDataToBtnView
                                showsFormat="Menu"
                                title="Sequelize Scheme"
                                generatedDataList={[
                                    {
                                        title: 'PostgreSQL',
                                        schemeFunc: tableDataToSequelizeScheme,
                                        types: "postgresql",
                                        downloadFileName: `${new Date().getTime()}_schema_pg.js`,
                                        codeLanguages: 'javascript',
                                        icon: <IconDatabase size={18} />
                                    },
                                    {
                                        title: 'MySQL',
                                        schemeFunc: tableDataToSequelizeScheme,
                                        types: "mySQL",
                                        downloadFileName: `${new Date().getTime()}_schema_mysql.js`,
                                        codeLanguages: 'javascript',
                                        icon: <IconDatabase size={18} />
                                    },
                                    {
                                        title: 'Sqlite',
                                        schemeFunc: tableDataToSequelizeScheme,
                                        types: "sqlite",
                                        downloadFileName: `${new Date().getTime()}_schema_sqlite.js`,
                                        codeLanguages: 'javascript',
                                        icon: <IconDatabase size={18} />
                                    },
                                ]}
                            />
                        </Menu.Sub.Dropdown>
                    </Menu.Sub>

                </Menu.Dropdown>
            </Menu>
        </>
    );
}

export default GenerateMenu
