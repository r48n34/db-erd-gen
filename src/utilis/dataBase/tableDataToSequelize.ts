import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { firstStrUpper, tab } from "../generateTab";

interface ForeignKey {
    column: string;
    references: {
        table: string;
        field: string;
    };
}

export function tableDataToSequelizeScheme(tables: Table[], dbTypes: "postgresql" | "mySQL" | "sqlite" | "" = "postgresql") {
    let schemeArray: string[] = [];
    const importSet: Set<string> = new Set();

    // Add imports
    schemeArray.push(`const { DataTypes } = require('sequelize');\n`);

    // Create migration function
    schemeArray.push(`module.exports = {\n`);
    schemeArray.push(tab(1) + `async up(queryInterface, Sequelize) {\n`);

    // Create tables
    for (let table of tables) {
        let columns: string[] = [];
        let foreignKeys: ForeignKey[] = [];

        // Define columns
        for (let col of table.columns) {
            const targetTypeInd = postgresTypeArray.findIndex(v => v.value === col.dataType);
            const currentType = postgresTypeArray[targetTypeInd];

            let dataType = "STRING"; // Default type
            let options: string[] = [];

            // Map PostgreSQL types to Sequelize types
            switch (col.dataType) {
                case "integer":
                    dataType = "INTEGER";
                    break;
                case "bigint":
                    dataType = "BIGINT";
                    break;
                case "boolean":
                    dataType = "BOOLEAN";
                    break;
                case "date":
                    dataType = "DATEONLY";
                    break;
                case "timestamp":
                    dataType = "DATE";
                    break;
                case "text":
                    dataType = "TEXT";
                    break;
                case "json":
                case "jsonb":
                    dataType = "JSON";
                    break;
                case "uuid":
                    dataType = "UUID";
                    break;
                case "varchar":
                    dataType = "STRING";
                    break;
                case "numeric":
                case "decimal":
                    dataType = "DECIMAL";
                    break;
                case "double precision":
                    dataType = "DOUBLE";
                    break;
                case "real":
                    dataType = "FLOAT";
                    break;
            }

            // Add column options
            if (col.isPrimaryKey) {
                options.push("primaryKey: true");
                if (col.dataType === "integer" || col.dataType === "bigint") {
                    options.push("autoIncrement: true");
                }
            }
            if (col.notNull) {
                options.push("allowNull: false");
            }
            if (col.unique) {
                options.push("unique: true");
            }

            const optionsStr = options.length > 0 ? `, { ${options.join(", ")} }` : "";
            columns.push(tab(2) + `${col.name}: {\n`
                + tab(3) + `type: Sequelize.${dataType}${optionsStr}\n`
                + tab(2) + `}`);

            // Store foreign key information for later
            if (col.foreignTo) {
                foreignKeys.push({
                    column: col.name,
                    references: {
                        table: col.foreignTo.name,
                        field: col.foreignTo.column
                    }
                });
            }
        }

        // Create table
        schemeArray.push(tab(2) + `await queryInterface.createTable('${table.name}', {`);
        schemeArray.push(columns.join(",\n"));
        schemeArray.push(tab(2) + `});\n`);

        // Add foreign keys
        for (const fk of foreignKeys) {
            schemeArray.push(tab(2) + `await queryInterface.addConstraint('${table.name}', {`);
            schemeArray.push(tab(3) + `fields: ['${fk.column}'],`);
            schemeArray.push(tab(3) + `type: 'foreign key',`);
            schemeArray.push(tab(3) + `name: '${table.name}_${fk.column}_fkey',`);
            schemeArray.push(tab(3) + `references: {`);
            schemeArray.push(tab(4) + `table: '${fk.references.table}',`);
            schemeArray.push(tab(4) + `field: '${fk.references.field}'`);
            schemeArray.push(tab(3) + `},`);
            schemeArray.push(tab(3) + `onDelete: 'NO ACTION',`);
            schemeArray.push(tab(3) + `onUpdate: 'NO ACTION'`);
            schemeArray.push(tab(2) + `});\n`);
        }
    }

    // Add down migration
    schemeArray.push(tab(1) + `},\n\n`);
    schemeArray.push(tab(1) + `async down(queryInterface, Sequelize) {\n`);
    
    // Drop tables in reverse order to handle foreign key constraints
    for (let i = tables.length - 1; i >= 0; i--) {
        const table = tables[i];
        schemeArray.push(tab(2) + `await queryInterface.dropTable('${table.name}');\n`);
    }

    schemeArray.push(tab(1) + `}\n`);
    schemeArray.push(`};`);
    return schemeArray.join("\n");
} 