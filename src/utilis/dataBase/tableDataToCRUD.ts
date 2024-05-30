import { Table } from "../../interface/inputData";

// postgresql / mySql
export function tableDataToCRUDPostgresql(table: Table){

    const tableName = table.name
    const tableColums = table.columns.map( v => v.name )

    const selectStr = `SELECT * FROM ${tableName};`
    const insertStr = `INSERT INTO ${tableName} (${tableColums.join(", ")}) VALUES (${tableColums.map( _ => `""`).join(", ")});`
    const updateStr = `UPDATE ${tableName} SET ? WHERE ?;`
    const deleteStr = `DELETE FROM ${tableName} WHERE ?;`

    return `-- Select \n`
        + selectStr + `\n\n`
        + `-- Insert \n`
        + insertStr + `\n\n`
        + `-- Update \n`
        + updateStr + `\n\n`
        + `-- Delete \n`
        + deleteStr + `\n\n`

}

// knex
export function tableDataToCRUDKnex(table: Table){

    const tableName = table.name
    const tableColums = table.columns.map( v => v.name )

    const selectStr = `const data = await knex.column(${tableColums.map( v => `"${v}"`).join(", ")}).select().from("${tableName}");`
    const insertStr = `await knex("${tableName}").insert([{ ${tableColums.map( v => v + ": '',").join(" ")} }]);`
    const updateStr = `await knex("${tableName}").where("col", "target_values").update({});`
    const deleteStr = `await knex("${tableName}").where("col", "target_values").del();`

    return `// Select \n`
        + selectStr + `\n\n`
        + `// Insert \n`
        + insertStr + `\n\n`
        + `// Update \n`
        + updateStr + `\n\n`
        + `// Delete \n`
        + deleteStr + `\n\n`

}

// Kysely
export function tableDataToCRUDKysely(table: Table){

    const tableName = table.name
    const tableColums = table.columns.map( v => v.name )

    const selectStr = `const data = await db.selectFrom("${tableName}").select([${tableColums.map( v => `'${v}'`).join(", ")}]).execute();`
    const insertStr = `await db.insertInto("${tableName}").values([{ ${tableColums.map( v => v + ": '',").join(" ")} }]).execute();`
    const updateStr = `await db.updateTable("${tableName}").set({}).where("col", "=". "target_values").executeTakeFirst();`
    const deleteStr = `await db.deleteFrom("${tableName}").where("col", "=". "target_values").executeTakeFirst();`

    return `// Select \n`
        + selectStr + `\n\n`
        + `// Insert \n`
        + insertStr + `\n\n`
        + `// Update \n`
        + updateStr + `\n\n`
        + `// Delete \n`
        + deleteStr + `\n\n`

}

// Prisma
export function tableDataToCRUDPrisma(table: Table){

    const tableName = table.name
    const tableColums = table.columns.map( v => v.name )

    const selectStr = `const data = await prisma.${tableName}.findMany();`
    const insertStr = `await await prisma.${tableName}.create({ data:{ ${tableColums.map( v => v + ": '',").join(" ")} } });`
    const updateStr = `await await prisma.${tableName}.update({ where: {}, data: {} });`
    const deleteStr = `await await prisma.${tableName}.delete({ where: {} });`

    return `// Select \n`
        + selectStr + `\n\n`
        + `// Insert \n`
        + insertStr + `\n\n`
        + `// Update \n`
        + updateStr + `\n\n`
        + `// Delete \n`
        + deleteStr + `\n\n`

}