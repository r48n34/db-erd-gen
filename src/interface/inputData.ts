export interface Table {
    name: string
    columns: Column[]
}

export type Relationship = "one-to-one" | "one-to-many" | "many-to-one" | "many-to-many"

export interface ForeignToObj {
    name: string
    column: string
}

export interface Column {
    name: string // name is unique
    dataType: string
    isPrimaryKey: boolean
    foreignTo?: ForeignToObj // IF object exist, means this is a foreign key 
    relationship?: Relationship
}