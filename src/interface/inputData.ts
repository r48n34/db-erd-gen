export interface InputTable {
    title: string
    items: InputItem[]
}

export type Relationship = "One-to-one" | "one-to-many" | "many-to-one" | "many-to-many"

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