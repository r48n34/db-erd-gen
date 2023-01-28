import create from 'zustand'

import { devtools, persist } from 'zustand/middleware'
import { grandData } from '../data/testInputData';
import { Table } from '../interface/inputData';
import { failedDelete } from '../utilis/notificationUtilis';

interface DataState {
  tableArray: Table[]
  update: number
  
  addTableObj: (obj: Table) => void // Get all data from db
  updateTableObj: (obj: Table) => void // Update specific table content by name
  deleteOneTable: (tableName: string) => void // Delete single data from db
  deleteAllRecord: () => void // Delete all data in db

  importTableObj: (newTableArr: Table[]) => void // Update specific table content by name
}

const useTableStore = create<DataState>()(
  devtools(
    persist( (set) => ({
        tableArray: grandData,
        update: 0,
        addTableObj: async (obj: Table) => {
            set((state) => {
                return { 
                  tableArray: [...state.tableArray, obj],
                  update: state.update + 1
                }
            })
        },
        updateTableObj: async (obj: Table) => {
            set((state) => {
                const targetTableObjIndex = state.tableArray.findIndex( v => v.name === obj.name)

                let newTable = state.tableArray;
                newTable[targetTableObjIndex] = obj;

                console.log("NEW DATA", );
                

                return { 
                  tableArray: newTable,
                  update: state.update + 1
                }
            })
        },
        deleteOneTable: async (tableName: string) => {
            set((state) => {
                const newTableArr = state.tableArray.filter( v => v.name !== tableName);

                const isBeingReferences = state.tableArray.map( v => v.columns )
                  .flat()
                  .filter( v => v.foreignTo && v.foreignTo.name === tableName);
                
                console.log(isBeingReferences);
                
                if(isBeingReferences.length >= 1){
                    failedDelete(isBeingReferences.map( v => v.name));

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
        importTableObj: async (newTableArr: Table[]) => {
            set((state) => {
                return { 
                  tableArray: newTableArr,
                  update: state.update + 1
                }
            })
        },
        deleteAllRecord: async () => {
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