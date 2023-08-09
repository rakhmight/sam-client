import { create } from 'zustand'

export interface InfoPanelValue {
    mode: string,
    des: string | null,
    title: string
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

    infoPanel: { mode: 'contact', des: null, title: 'User info' },
    changeInfoPanel: (infoPanel:InfoPanelValue) => set({ infoPanel })
}))

export default useStore