import { RefObject } from "react"

export interface MsgTextareaProps {
    msgCtx: string,
    textareaRef: RefObject<HTMLTextAreaElement>
    setMsg: (a : string) => void
}