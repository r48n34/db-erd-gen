import { create } from 'zustand'

import { devtools, persist } from 'zustand/middleware'

const defaultSetting = {
    defaultToNotNull: false
}

export type SettingData = typeof defaultSetting;
type DefaultSetting = keyof typeof defaultSetting;

interface SettingDataState {
    settings: SettingData
    
    adjustSingleSetting: (terms: DefaultSetting, value: any) => void 
}

const useSettingStoreStore = create<SettingDataState>()(
    devtools(
        persist((set) => ({
            settings: defaultSetting,
            adjustSingleSetting: (terms: DefaultSetting, value: any) => {
                set((state) => {
                    return {
                        settings: {
                            ...state.settings,
                            [terms]: value
                        }
                    }

                })
            },
            
        }), { name: 'setting-storage' })
    )
);


export default useSettingStoreStore