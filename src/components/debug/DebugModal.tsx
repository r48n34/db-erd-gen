import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Drawer, Burger, NavLink, Tooltip, Text, Group, Image } from '@mantine/core';

import DeleteAllData from './DeleteAllData';

import ImportJsonFormat from './ImportJsonFormat';
import ImportTemplateBtn from './ImportTemplateBtn';

import ExportJsonFormatView from './ExportJsonFormatView';

import {
    IconArchive,
    IconFileArrowRight,
    IconAlertTriangle,
    IconClipboardData,
    IconDeviceFloppy,
    IconList,
    IconFileDatabase,
    IconBrandTypescript,
    IconDatabase,
    IconSteeringWheel
} from '@tabler/icons-react';

import SavedSchemeList from './SavedSchemeList';
import DeleteAllSchemeBtn from './DeleteAllSchemeBtn';
import TableDataToBtnView from './TableDataToBtnView';

import { tableDataToKnexScheme } from '../../utilis/dataBase/tableDataToKnex';
import { tableDataToMySQLScheme } from '../../utilis/dataBase/tableDataToMySQL';
import { tableDataToSQLiteScheme } from '../../utilis/dataBase/tableDataToSQLite';
import { tableDataToTsTypeScheme } from '../../utilis/dataBase/tableDataToTsType';
import { tableDataToZodTypeScheme } from '../../utilis/dataBase/tableDataToZodType';
import { tableDataToPostgresScheme } from '../../utilis/dataBase/tableDataToPostgres';
import {
    tableDataToKyselyScheme,
    tableDataToKyselyTypescriptScheme
} from '../../utilis/dataBase/tableDataToKysely';

import { tableDataToPrismaScheme } from '../../utilis/dataBase/tableDataToPrisma';

import SavedScheme from './SavedSchemeBtn';
import GrandMenu from '../common/menu/GrandMenu';
import { tableDataToYupTypeScheme } from '../../utilis/dataBase/tableDataToYupType';
import { tableDataToValibotTypeScheme } from '../../utilis/dataBase/tableDataToValibotType';

function DebugModal() {
    const [opened, setOpened] = useState<boolean>(false);

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
                            <Image
                                radius="md"
                                src="/logo.ico"
                                h={35}
                                w={35}
                            />
                            <Text fw={300} fz={22} >
                                DB graphers
                            </Text>
                            <GrandMenu />
                        </Group>
                        <Text c="dimmed" fz={"sm"} mt={6}>
                            Beta Version
                        </Text>
                    </>
                }
                padding="xl"
                size="xl"
            >
                <NavLink
                    label="Generate"
                    leftSection={<IconArchive size={16} stroke={1.5} />}
                    childrenOffset={28}
                >

                    <NavLink
                        label="Typescript"
                        leftSection={<IconBrandTypescript size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >
                        <TableDataToBtnView
                            showsFormat="NavLink"
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
                            showsFormat="NavLink"
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

                        <TableDataToBtnView
                            showsFormat="NavLink"
                            title='Typescript Yup Scheme'
                            generatedDataList={[
                                {
                                    title: 'Typescript Yup Scheme',
                                    schemeFunc: tableDataToYupTypeScheme,
                                    downloadFileName: "yupScheme.ts",
                                    codeLanguages: 'ts',
                                    icon: <IconBrandTypescript size={18} />
                                }
                            ]}
                        />

                        <TableDataToBtnView
                            showsFormat="NavLink"
                            title='Typescript Valibot Scheme'
                            generatedDataList={[
                                {
                                    title: 'Typescript Valibot Scheme',
                                    schemeFunc: tableDataToValibotTypeScheme,
                                    downloadFileName: "valibotScheme.ts",
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
                            showsFormat="NavLink"
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
                            showsFormat="NavLink"
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
                            showsFormat="NavLink"
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
                            showsFormat="NavLink"
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

                    <NavLink
                        label="Kysely"
                        leftSection={<IconFileDatabase size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >
                        <TableDataToBtnView
                            showsFormat="NavLink"
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
                            showsFormat="NavLink"
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
                            showsFormat="NavLink"
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

                    <NavLink
                        label="Prisma"
                        leftSection={<IconFileDatabase size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >
                        <TableDataToBtnView
                            showsFormat="NavLink"
                            title="Prisma Scheme"
                            generatedDataList={[
                                {
                                    title: 'PostgreSQL',
                                    schemeFunc: tableDataToPrismaScheme,
                                    types: "postgresql",
                                    downloadFileName: `${new Date().getTime()}_schema.prisma`,
                                    codeLanguages: 'ts',
                                    icon: <IconBrandTypescript size={18} />
                                },
                                {
                                    title: 'MySQL',
                                    schemeFunc: tableDataToPrismaScheme,
                                    types: "mySQL",
                                    downloadFileName: `${new Date().getTime()}_schema.prisma`,
                                    codeLanguages: 'ts',
                                    icon: <IconBrandTypescript size={18} />
                                },
                            ]}
                        />


                    </NavLink>

                </NavLink>

                <NavLink
                    label="Import / Export Scheme"
                    leftSection={<IconFileArrowRight size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <ExportJsonFormatView showsFormat="NavLink" />
                    <ImportJsonFormat showsFormat="NavLink" />
                </NavLink>

                <NavLink
                    label="Saved Scheme"
                    leftSection={<IconDeviceFloppy size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <SavedScheme types="list" />

                    <NavLink
                        label="Saved Scheme List"
                        leftSection={<IconList size={16} stroke={1.5} />}
                        childrenOffset={28}
                    >
                        <SavedSchemeList closeModal={() => setOpened(false)} />
                    </NavLink>


                </NavLink>

                <NavLink
                    label="Templates"
                    leftSection={<IconClipboardData size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <ImportTemplateBtn />
                </NavLink>

                <NavLink
                    label="Dangerous zone"
                    leftSection={<IconAlertTriangle size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <DeleteAllData showsFormat="NavLink" />
                    <DeleteAllSchemeBtn showsFormat="NavLink" />
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
