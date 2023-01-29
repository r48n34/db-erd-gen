import { Table } from "../interface/inputData";

export const importString = `[{"name":"users","columns":[{"name":"id","dataType":"serial","isPrimaryKey":true},{"name":"name","dataType":"varchar","isPrimaryKey":false}]},{"name":"yolo","columns":[{"name":"id","dataType":"serial","isPrimaryKey":true},{"name":"name","dataType":"integer","isPrimaryKey":false,"foreignTo":{"name":"users","column":"id"}},{"name":"date","dataType":"date","isPrimaryKey":false}]}]`
// test data
export let grandData: Table[] = JSON.parse(importString);