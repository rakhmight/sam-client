export interface MsgTextareaProps {
    msgCtx: string,
    textareaRef: React.RefObject<HTMLTextAreaElement>
    setMsg: (a : string) => void
}