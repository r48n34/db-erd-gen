import { dummyScheme } from './dummyDataTest';
import { expect, test, describe } from 'vitest'

import { 
    tableDataToCRUDPostgresql,
    tableDataToCRUDKnex,
    tableDataToCRUDKysely,
    tableDataToCRUDPrisma
} from '../../src/utilis/dataBase/tableDataToCRUD'

describe('For CRUD generate string', () => {
    // PSQL raw string CRUD
    test('Postgresql CRUD functions test', () => {
        const crudStr = tableDataToCRUDPostgresql(dummyScheme[1]);
    
        expect(crudStr).toContain(`SELECT * FROM teams;`); // C
        expect(crudStr).toContain(`INSERT INTO teams (id, name, event_id) VALUES ("", "", "");`); // R
        expect(crudStr).toContain(`UPDATE teams SET ? WHERE ?;`); // U
        expect(crudStr).toContain(`DELETE FROM teams WHERE ?;`); // D
    })
    
    // Knex CRUD
    test('Knex CRUD functions test', () => {
        const crudStr = tableDataToCRUDKnex(dummyScheme[0]);
    
        expect(crudStr).toContain(`const data = await knex.column("id", "event_uid", "status", "title", "is_random", "description").select().from("event");`); // C
        expect(crudStr).toContain(`await knex("event").insert([{ id: '', event_uid: '', status: '', title: '', is_random: '', description: '', }]);`); // R
        expect(crudStr).toContain(`await knex("event").where("col", "target_values").update({});`); // U
        expect(crudStr).toContain(`await knex("event").where("col", "target_values").del();`); // D
    })
    
    // Kysely CRUD
    test('Kysely CRUD functions test', () => {
        const crudStr = tableDataToCRUDKysely(dummyScheme[0]);
    
        expect(crudStr).toContain(`const data = await db.selectFrom("event").select(['id', 'event_uid', 'status', 'title', 'is_random', 'description']).execute();`); // C
        expect(crudStr).toContain(`await db.insertInto("event").values([{ id: '', event_uid: '', status: '', title: '', is_random: '', description: '', }]).execute();`); // R
        expect(crudStr).toContain(`await db.updateTable("event").set({}).where("col", "=". "target_values").executeTakeFirst();`); // U
        expect(crudStr).toContain(`await db.deleteFrom("event").where("col", "=". "target_values").executeTakeFirst();`); // D
    })
    
    // Kysely CRUD
    test('Prisma CRUD functions test', () => {
        const crudStr = tableDataToCRUDPrisma(dummyScheme[3]);
    
        expect(crudStr).toContain(`const data = await prisma.task.findMany();`); // C
        expect(crudStr).toContain(`await await prisma.task.create({ data:{ id: '', event_id: '', question: '', answer: '', access_passcode: '', selectable_choice: '', description: '', reward: '', status: '', title: '', title_desc: '', hins: '', } });`); // R
        expect(crudStr).toContain(`await await prisma.task.update({ where: {}, data: {} });`); // U
        expect(crudStr).toContain(`await await prisma.task.delete({ where: {} });`); // D
    })
})