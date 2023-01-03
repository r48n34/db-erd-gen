import create from 'zustand'

import { devtools, persist } from 'zustand/middleware'
import { grandData } from '../data/testInputData';
import { Table } from '../interface/inputData';
import { failedDelete } from '../utilis/notificationUtilis';

interface DataState {
  tableArray: Table[]
  addTableObj: (obj: Table) => void // Get all data from db
  deleteOneTable: (tableName: string) => void // Get all data from db
}

const useTableStore = create<DataState>()(
  devtools(
    persist( (set) => ({
        tableArray: grandData,
        addTableObj: async (obj: Table) => {
            set((state) => {
                return { 
                  tableArray: [...state.tableArray, obj],
                }
            })
        },
        deleteOneTable: async (tableName: string) => {
            set((state) => {
                const newTableArr = state.tableArray.filter( v => v.name !== tableName);

                const isBeingReferences = state.tableArray.map( v => v.columns)
                  .flat()
                  .filter( v => v.foreignTo && v.foreignTo.name === tableName);
                
                console.log(isBeingReferences);
                
                if(isBeingReferences.length >= 1){
                    failedDelete();

                    return { 
                        tableArray: state.tableArray,
                    }
                }

                return { 
                  tableArray: newTableArr,
                }
            })
        }
    }), { name: 'table-data-storage' })
  )
);


export default useTableStore;