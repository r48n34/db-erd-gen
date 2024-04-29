import create from 'zustand'
import { Table } from '../interface/inputData';
import { devtools, persist } from 'zustand/middleware'

interface TemplateStoreData {
    name: string
    data: Table[]
    addedDate?: string // Date
}

// For each set of database table sets
interface TemplateDataState {
    templateArray: TemplateStoreData[]
    update: number

    addTemplate: (name: string, obj: Table[]) => void // Get all data from db
    deleteOneTemplate: (name: string) => void // Delete all data in db
    deleteAllTemplate: () => void // Delete all data in db
}

const useTemplateStoreStore = create<TemplateDataState>()(
    devtools(
        persist((set) => ({
            templateArray: [],
            update: 0,
            addTemplate: (name: string, obj: Table[]) => {
                set((state) => {

                    if (state.templateArray.findIndex(v => v.name === name) >= 0) {
                        return {
                            templateArray: state.templateArray,
                            update: state.update + 1
                        }
                    }

                    const templateStoreData = {
                        name: name,
                        data: obj,
                        addedDate: new Date().toISOString()
                    }

                    return {
                        templateArray: [...state.templateArray, templateStoreData],
                        update: state.update + 1
                    }

                })
            },
            deleteOneTemplate: (name: string) => {
                set((state) => {
                    const newList = state.templateArray.filter(v => v.name !== name);

                    return {
                        templateArray: newList,
                        update: state.update + 1
                    }
                })
            },
            deleteAllTemplate: () => {
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