import { useState, useRef, FC } from 'react';
import FileUploadBtn from './file-upload-btn/FileUploadBtn';
import MsgTextarea from './msg-textarea/MsgTexarea'
import MsgSendBtn from './msg-send-btn/MsgSendBtn'
import EmojiPicker from './emoji-picker/EmojiPicker';

const ChatTools : FC = () => {
    const [ msgCtx, setMsg ] = useState('')

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    return (
        <div className="chat__tools bg-slate-100 px-1.5 flex flex-row gap-1.5">
            <div className='mb-1.5'>
                <FileUploadBtn />
            </div>
            
            <div className="chat__textarea">
                <MsgTextarea msgCtx={msgCtx} textareaRef={textareaRef} setMsg={setMsg} />
            </div>

            <div className='flex gap-2.5'>
                <div className='mb-1.5 emoji'>
                    <EmojiPicker setMsg={setMsg} textareaRef={textareaRef} />
                </div>

                <div className='mb-3'>
                    <MsgSendBtn />
                </div>
            </div>
        </div>
    )
}

export default ChatTools