import create from 'zustand'

import { Table } from '../interface/inputData';
import { grandData } from '../data/testInputData';
import { devtools, persist } from 'zustand/middleware'
// import { failedDelete } from '../utilis/notificationUtilis';

interface TemplateDataState {
  templateArray: Table[][]
  update: number

  addTemplate: (obj: Table[]) => void // Get all data from db
  deleteAllRecord: () => void // Delete all data in db

}

const useTemplateStoreStore = create<TemplateDataState>()(
  devtools(
    persist( (set) => ({
        templateArray: [],
        update: 0,
        addTemplate: (obj: Table[]) => {
            set((state) => {
                return { 
                    templateArray: [...state.templateArray, obj],
                    update: state.update + 1
                }
            })
        },
        deleteAllRecord: () => {
            set((state) => {
                return { 
                    templateArray: [],
                    update: state.update + 1
                }
            })
        },
    }), { name: 'template-data-storage' })
  )
);


export default useTemplateStoreStore;