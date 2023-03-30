import create from 'zustand'

import { Table } from '../interface/inputData';
import { devtools, persist } from 'zustand/middleware'

interface TemplateStoreData {
    name: string
    data: Table[]
}

interface TemplateDataState {
  templateArray: TemplateStoreData[]
  update: number

  addTemplate: (name: string, obj: Table[]) => void // Get all data from db
  deleteAllRecord: () => void // Delete all data in db

}

const useTemplateStoreStore = create<TemplateDataState>()(
  devtools(
    persist( (set) => ({
        templateArray: [],
        update: 0,
        addTemplate: (name: string, obj: Table[]) => {
            set((state) => {

                const templateStoreData = {
                    name: name,
                    data: obj
                }

                return { 
                    templateArray: [...state.templateArray, templateStoreData],
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