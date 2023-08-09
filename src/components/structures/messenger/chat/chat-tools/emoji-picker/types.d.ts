import { RefObject } from "react"

export interface EmojiPickerProps {
    textareaRef: RefObject<HTMLTextAreaElement>
    setMsg: (a: string) => void,
    msgCtx: string
}

export interface EmojiProps {
    native: string 
}