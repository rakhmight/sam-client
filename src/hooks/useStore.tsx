import { create } from 'zustand'

export interface InfoPanelValue {
    mode: string,
    des: string | null
}

export interface MessengerState{
    showEmoji: boolean,
    setShowEmoji: (a:boolean) => void,
    infoPanel: InfoPanelValue,
    changeInfoPanel: (a: InfoPanelValue) => void
}

const useStore= create<MessengerState>((set) => ({
    showEmoji: false,
    setShowEmoji: (showEmoji:boolean) => set({ showEmoji }),

    infoPanel: { mode: 'user-info', des: null },
    changeInfoPanel: (infoPanel:InfoPanelValue) => set({ infoPanel })
}))

export default useStore