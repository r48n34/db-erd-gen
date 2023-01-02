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
    isForeignKey: boolean
    foreignTo?: ForeignToObj
    relationship?: Relationship
}