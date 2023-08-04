import { create } from 'zustand'

const useStore = create((set) => ({
    showEmoji: false,

    setShowEmoji: (showEmoji:Boolean) => set({ showEmoji })
}))

export default useStore