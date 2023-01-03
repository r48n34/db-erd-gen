import create from 'zustand'

import { devtools, persist } from 'zustand/middleware'
import { grandData } from '../data/testInputData';
import { Table } from '../interface/inputData';

interface DataState {
  tableArray: Table[]
  addTableObj: (obj: Table) => void // Get all data from db
}

const useTableStore = create<DataState>()(
  devtools(
    persist( (set) => ({
        tableArray: grandData,
        addTableObj: async (obj) => {
            set((state) => {
                return { 
                  tableArray: [...state.tableArray, obj],
                }
            })
        }
    }), { name: 'table-data-storage' })
  )
);


export default useTableStore;