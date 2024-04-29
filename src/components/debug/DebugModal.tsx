import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Drawer, Burger, NavLink, Tooltip, Text, Group } from '@mantine/core';

import DeleteAllData from './DeleteAllData';

import ImportJsonFormat from './ImportJsonFormat';
import ImportTemplateBtn from './ImportTemplateBtn';

import ExportJsonFormatView from './ExportJsonFormatView';

import { IconArchive, IconFileArrowRight, IconAlertTriangle, IconClipboardData, IconDeviceFloppy, IconList, IconBrandGithub, IconFileDatabase, IconBrandTypescript, IconDatabase, IconSteeringWheel } from '@tabler/icons';
import SavedSchemeList from './SavedSchemeList';
import DeleteAllSchemeBtn from './DeleteAllSchemeBtn';
import TableDataToBtnView from './TableDataToBtnView';

import { tableDataToKnexScheme } from '../../utilis/dataBase/tableDataToKnex';
import { tableDataToMySQLScheme } from '../../utilis/dataBase/tableDataToMySQL';
import { tableDataToSQLiteScheme } from '../../utilis/dataBase/tableDataToSQLite';
import { tableDataToTsTypeScheme } from '../../utilis/dataBase/tableDataToTsType';
import { tableDataToZodTypeScheme } from '../../utilis/dataBase/tableDataToZodType';
import { tableDataToPostgresScheme } from '../../utilis/dataBase/tableDataToPostgres';
import { tableDataToKyselyScheme, tableDataToKyselyTypescriptScheme } from '../../utilis/dataBase/tableDataToKysely';
// import { tableDataToPrismaScheme } from '../../utilis/dataBase/tableDataToPrisma';

import SavedScheme from './SavedSchemeBtn';
import GoUrlBtn from '../common/GoUrlBtn';
import ThemeToggleBtn from '../common/ThemeToggleBtn';

function DebugModal() {
    const [opened, setOpened] = useState(false);

    useHotkeys([
        ['mod+D', () => setOpened(true)],
    ]);

    return (
        <>
        <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title={
            <>
            <Group>
                <GoUrlBtn
                    title={'Github'}
                    url={'https://github.com/r48n34/db-erd-gen'}
                    icon={<IconBrandGithub size={18}/>}
                />
                <Text fw={300} fz={22} >DB graphers (Beta)</Text>
                <ThemeToggleBtn/>
            </Group>
            <Text c="dimmed" fz={"sm"} mt={8}>Still in testing, bugs may occur</Text>
            </>
            }
            padding="xl"
            size="xl"
        >
            <NavLink label="Generate" leftSection={<IconArchive size={16} stroke={1.5} />} childrenOffset={28}>

                <NavLink
                    label="Typescript"
                    leftSection={<IconBrandTypescript size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <TableDataToBtnView 
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
                </NavLink>

                <NavLink
                    label="Raw Databases"
                    leftSection={<IconDatabase size={16} stroke={1.5} />}
                    childrenOffset={28}
                >

                    <TableDataToBtnView 
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

                </NavLink>

                <NavLink
                    label="Knex"
                    leftSection={<IconSteeringWheel size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <TableDataToBtnView 
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

                    
                </NavLink>

                {/* <TableDataToBtnView 
                    title='Prisma'
                    schemeFunc={tableDataToPrismaScheme}
                    downloadFileName={`${new Date().getTime()}_migra.prisma`}
                /> */}
                
                <NavLink
                    label="Kysely"
                    leftSection={<IconFileDatabase size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    {/* <TableDataToBtnView
                        title="Kysely Types"
                        schemeFunc={tableDataToKyselyTypescriptScheme}
                        downloadFileName={`types.ts`}
                        codeLanguages='ts'
                        icon={<IconBrandTypescript size={18} />}
                    /> */}

                    <TableDataToBtnView
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
                </NavLink>

            </NavLink>

            <NavLink 
                label="Import / Export"
                leftSection={<IconFileArrowRight size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                <ExportJsonFormatView/> 
                <ImportJsonFormat/>
            </NavLink>

            <NavLink 
                label="Scheme"
                leftSection={<IconDeviceFloppy size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                <SavedScheme types="list" />

                <NavLink 
                    label="Saved Scheme List"
                    leftSection={<IconList size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <SavedSchemeList closeModal={ () => setOpened(false) }/>
                </NavLink>


            </NavLink>

            <NavLink label="Load Templates" leftSection={<IconClipboardData size={16} stroke={1.5} />} childrenOffset={28}>
                <ImportTemplateBtn/>
            </NavLink>

            <NavLink 
                label="Dangerous zone"
                leftSection={<IconAlertTriangle size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                <DeleteAllData/>
                <DeleteAllSchemeBtn/>
            </NavLink>
        </Drawer>

        <Group>
        <Tooltip label="Menu">
            <Burger
                size={16}
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={"Control menu"}
            />
        </Tooltip>
        </Group>
        </>
    );
}

export default DebugModal
