import { create } from 'zustand'

export interface InfoPanelValue {
    mode: string,
    des: string
}

const useStore = create((set) => ({
    showEmoji: false,
    setShowEmoji: (showEmoji:Boolean) => set({ showEmoji }),

    infoPanel: { mode: 'user-info', des: null },
    changeInfoPanel: (infoPanel:InfoPanelValue) => set({ infoPanel })
}))

export default useStore