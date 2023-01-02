import { ForeignToObj } from "./inputData"

export interface TableItem { // for node only
    title: string
    type: string
    nodeType?: 'source' | 'target'
    linkTo?: ForeignToObj
}

export interface TableData {
    tableName: string
    tableItems: TableItem[];
}