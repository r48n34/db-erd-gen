export interface TableItem { // for node only
    title: string
    type: string
    nodeType?: 'source' | 'target'
    linkTo?: {
        table: string
        column: string
    }
}

export interface TableData {
    tableName: string
    tableItems: TableItem[];
}