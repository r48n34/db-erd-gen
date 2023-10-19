import { z } from "zod";

export const RELATIONSHIP = ["one-to-one" , "one-to-many" , "many-to-one" , "many-to-many"] as const
export type Relationship = keyof typeof RELATIONSHIP

export const foreignToObjScheme = z.object({
    name: z.string(),
    column: z.string()
})

const tableTypesScheme = z.object({
    id: z.string(),
    name: z.string(),
    dataType: z.string(),
    isPrimaryKey: z.boolean(),
    notNull: z.boolean(),
    unique: z.optional(z.boolean()),
    foreignTo: z.optional(foreignToObjScheme), // IF object exist, means this is a foreign key 
    relationship: z.optional(z.enum(RELATIONSHIP))
})

export const tablePositionScheme = z.object({
    x: z.number(), 
    y: z.number(), 
})

export const tableDataScheme = z.object({
    name: z.string(),
    columns: z.array(tableTypesScheme),
    position: z.optional(tablePositionScheme)
})

export const JsonImportScheme = z.array(tableDataScheme);

export type Table = z.infer<typeof tableDataScheme>;
export type TablePosition = z.infer<typeof tablePositionScheme>;
export type ForeignToObj = z.infer<typeof foreignToObjScheme>;
export type Column = z.infer<typeof tableTypesScheme>;

// export interface Table {
//     name: string
//     columns: Column[]
//     position?: TablePosition // Newly added
// }

// export type TablePosition = { 
//     x: number,
//     y: number
// }

// export type Relationship = "one-to-one" | "one-to-many" | "many-to-one" | "many-to-many" // not in used now

// export interface ForeignToObj {
//     name: string
//     column: string
// }

// export interface Column {
//     id: string
//     name: string // name is unique
//     dataType: string
//     isPrimaryKey: boolean
//     notNull: boolean
//     unique?: boolean // Newly added
//     foreignTo?: ForeignToObj // IF object exist, means this is a foreign key 
//     relationship?: Relationship
// }

