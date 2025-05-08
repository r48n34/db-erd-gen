import { create } from 'zustand'

import { Table, TablePosition } from '../interface/inputData';
import { grandData } from '../data/testInputData';
import { devtools, persist } from 'zustand/middleware'
import { failedDelete } from '../utilis/notificationUtilis';

interface DataState {
    tableArray: Table[]
    update: number

    forceUpdate: boolean

    addTableObj: (obj: Table) => void // Get all data from db
    updateTableObj: (obj: Table) => void // Update specific table content by name
    deleteOneTable: (tableName: string) => void // Delete single data from db
    deleteAllRecord: () => void // Delete all data in db

    forceUpdateToggle: () => void // Force Update data

    updateTablePositions: (tableName: string, position: TablePosition) => void // Update 

    importTableObj: (newTableArr: Table[]) => void // Update specific table content by name
}

const useTableStore = create<DataState>()(
    devtools(
        persist((set) => ({
            tableArray: grandData,
            update: 0,
            forceUpdate: false,
            addTableObj: (obj: Table) => {
                set((state) => {
                    return {
                        tableArray: [...state.tableArray, obj],
                        update: state.update + 1
                    }
                })
            },
            forceUpdateToggle: () => {
                set((state) => {
                    return {
                        tableArray: state.tableArray,
                        update: state.update + 1,
                        forceUpdate: true
                    }
                })

                setTimeout(() => {
                    set((state) => {
                        return {
                            tableArray: state.tableArray,
                            update: state.update + 1,
                            forceUpdate: false
                        }
                    });
                }, 150);
            },
            updateTableObj: (obj: Table) => {
                set((state) => {
                    const targetTableObjIndex = state.tableArray.findIndex(v => v.name === obj.name);

                    if (targetTableObjIndex <= -1) {
                        return {
                            tableArray: state.tableArray,
                            update: state.update + 1
                        }
                    }

                    let newTable = state.tableArray;
                    newTable[targetTableObjIndex]["columns"] = obj["columns"];

                    return {
                        tableArray: newTable,
                        update: state.update + 1
                    }
                })

                
            },
            deleteOneTable: (tableName: string) => {
                set((state) => {
                    const newTableArr = state.tableArray.filter(v => v.name !== tableName);

                    const isBeingReferences = state.tableArray.map(v => v.columns)
                        .flat()
                        .filter(v => v.foreignTo && v.foreignTo.name === tableName);

                    // In References By Other Table Currently, not allow to delete
                    if (isBeingReferences.length >= 1) {
                        failedDelete(isBeingReferences.map(v => v.name));

                        return {
                            tableArray: state.tableArray,
                            update: state.update + 1
                        }
                    }

                    return {
                        tableArray: newTableArr,
                        update: state.update + 1
                    }
                })
            },
            updateTablePositions: (tableName: string, position: TablePosition) => {
                set((state) => {

                    const targetTableObjIndex = state.tableArray.findIndex(v => v.name === tableName);

                    if (targetTableObjIndex === -1) {
                        return {
                            tableArray: state.tableArray,
                            update: state.update + 1
                        }
                    }

                    // console.log(targetTableObjIndex);

                    let newTable = state.tableArray;
                    newTable[targetTableObjIndex].position = position

                    return {
                        tableArray: newTable,
                        update: state.update + 1
                    }
                })
            },
            importTableObj: (newTableArr: Table[]) => {
                set((state) => {
                    return {
                        tableArray: newTableArr,
                        update: state.update + 1
                    }
                })
            },
            deleteAllRecord: () => {
                set((state) => {
                    return {
                        tableArray: [],
                        update: state.update + 1
                    }
                })
            },
        }), { name: 'table-data-storage' })
    )
);

export default useTableStore;