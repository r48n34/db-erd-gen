import create from 'zustand'

import { devtools, persist } from 'zustand/middleware'
import { grandData } from '../data/testInputData';
import { Table } from '../interface/inputData';

interface DataState {
  tableArray: Table[]
  initDataFromDB: () => void // Get all data from db
}

const useTableStore = create<DataState>()(
  devtools(
    persist( (set) => ({
        tableArray: grandData,
        initDataFromDB: async () => {
            let data:Table[] = [];

            set((state) => {
                return { 
                    tableArray: data,
                }
            })
        }
    }), { name: 'table-data-storage' })
  )
);


export default useTableStore;