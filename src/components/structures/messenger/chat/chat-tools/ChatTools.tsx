import { useState, useRef, FC } from 'react';
import FileUploadBtn from './file-upload-btn/FileUploadBtn';
import MsgTextarea from './msg-textarea/MsgTexarea'
import MsgSendBtn from './msg-send-btn/MsgSendBtn'
import EmojiPicker from './emoji-picker/EmojiPicker';
import styles from './ChatTools.module.css'

const ChatTools : FC = () => {
    const [ msgCtx, setMsg ] = useState('')

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    return (
        <div className={`${styles["chat-tools"]} bg-slate-100 px-1.5 flex flex-row gap-1.5`}>
            <div className='mb-1.5'>
                <FileUploadBtn />
            </div>
            
            <div className={styles["chat-textarea"]}>
                <MsgTextarea msgCtx={msgCtx} textareaRef={textareaRef} setMsg={setMsg} />
            </div>

            <div className='flex gap-2.5'>
                <div className={`mb-1.5 ${styles.emoji}`}>
                    <EmojiPicker setMsg={setMsg} textareaRef={textareaRef} msgCtx={msgCtx} />
                </div>

                <div className='mb-3'>
                    <MsgSendBtn />
                </div>
            </div>
        </div>
    )
}

export default ChatTools