export interface InputTable {
    tableName: string
    tableItems: InputItem[]
}

export type Relationship = "one-to-one" | "one-to-many" | "many-to-one" | "many-to-many"

export interface ForeignToObj {
    tableName: string
    column: string
}

export interface InputItem {
    name: string
    dataType: string
    isPrimaryKey: boolean
    foreignTo?: ForeignToObj // IF object exist, means this is a foreign key 
    relationship?: Relationship
}