import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Drawer, Burger, NavLink, Tooltip, Text, Group } from '@mantine/core';

import DeleteAllData from './DeleteAllData';

import ImportJsonFormat from './ImportJsonFormat';
import ImportTemplateBtn from './ImportTemplateBtn';

import ExportJsonFormatView from './ExportJsonFormatView';

import { IconArchive, IconFileArrowRight, IconAlertTriangle, IconClipboardData, IconDeviceFloppy, IconList, IconBrandGithub } from '@tabler/icons';
import SavedSchemeList from './SavedSchemeList';
import DeleteAllSchemeBtn from './DeleteAllSchemeBtn';
import TableDataToBtnView from './TableDataToBtnView';

import { tableDataToKnexScheme } from '../../utilis/dataBase/tableDataToKnex';
import { tableDataToPostgresScheme } from '../../utilis/dataBase/tableDataToPostgres';
import { tableDataToKyselyScheme, tableDataToKyselyTypescriptScheme } from '../../utilis/dataBase/tableDataToKysely';
import { tableDataToMySQLScheme } from '../../utilis/dataBase/tableDataToMySQL';
// import { tableDataToPrismaScheme } from '../../utilis/dataBase/tableDataToPrisma';
import { tableDataToSQLiteScheme } from '../../utilis/dataBase/tableDataToSQLite';
import { tableDataToTsTypeScheme } from '../../utilis/dataBase/tableDataToTsType';
import { tableDataToZodTypeScheme } from '../../utilis/dataBase/tableDataToZodType';
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
                <GoUrlBtn title={'Github'} url={'https://github.com/r48n34/db-erd-gen'} icon={<IconBrandGithub/>}/>
                <Text>DB graphers (Beta)</Text>
                <ThemeToggleBtn/>
            </Group>
            <Text c="dimmed" size={"sm"}>Still in beta, please be patients</Text>
            </>
            }
            padding="xl"
            size="xl"
        >
            <NavLink label="Generate" icon={<IconArchive size={16} stroke={1.5} />} childrenOffset={28}>

                <TableDataToBtnView 
                    title='Typescript Type'
                    schemeFunc={tableDataToTsTypeScheme}
                    downloadFileName="types.ts"
                />

                <TableDataToBtnView 
                    title='Ts Zod Scheme'
                    schemeFunc={tableDataToZodTypeScheme}
                    downloadFileName="zodScheme.ts"
                />

                <TableDataToBtnView 
                    title='Postgres'
                    types="postgresql"
                    schemeFunc={tableDataToPostgresScheme}
                    downloadFileName="tables.sql"
                />

                <TableDataToBtnView 
                    title='MySQL'
                    types="mySQL"
                    schemeFunc={tableDataToMySQLScheme}
                    downloadFileName={`mySqlTables.sql`}
                />

                <TableDataToBtnView 
                    title='Knex'
                    schemeFunc={tableDataToKnexScheme}
                    downloadFileName={`${new Date().getTime()}_migrations.ts`}
                />

                <TableDataToBtnView 
                    title='SQLite'
                    schemeFunc={tableDataToSQLiteScheme}
                    downloadFileName={`${new Date().getTime()}_migrations.db`}
                />

                {/* <TableDataToBtnView 
                    title='Prisma'
                    schemeFunc={tableDataToPrismaScheme}
                    downloadFileName={`${new Date().getTime()}_migra.prisma`}
                /> */}

                <TableDataToBtnView
                    title="Kysely Types"
                    schemeFunc={tableDataToKyselyTypescriptScheme}
                    downloadFileName={`types.ts`}
                />

                <TableDataToBtnView
                    title="Kysely Postgres"
                    types='postgresql'
                    schemeFunc={tableDataToKyselyScheme}
                    downloadFileName={`${new Date().getTime()}_migrations.ts`}
                />

                <TableDataToBtnView
                    title="Kysely SQLite"
                    types="sqlite"
                    schemeFunc={tableDataToKyselyScheme}
                    downloadFileName={`${new Date().getTime()}_migrations.ts`}
                />

               
            </NavLink>

            <NavLink label="Import / Export" icon={<IconFileArrowRight size={16} stroke={1.5} />} childrenOffset={28}>
                <ExportJsonFormatView/> 
                <ImportJsonFormat/>
            </NavLink>

            <NavLink label="Template" icon={<IconClipboardData size={16} stroke={1.5} />} childrenOffset={28}>
                <ImportTemplateBtn/>
            </NavLink>

            <NavLink 
                label="Scheme"
                icon={<IconDeviceFloppy size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                <SavedScheme types="list" />

                <NavLink 
                    label="Saved Scheme List"
                    icon={<IconList size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <SavedSchemeList closeModal={ () => setOpened(false) }/>
                </NavLink>


            </NavLink>

            <NavLink 
                label="Dangerous zone"
                icon={<IconAlertTriangle size={16} stroke={1.5} />}
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
