import { Textarea } from '@chakra-ui/react'
import ResizeTextarea from "react-textarea-autosize";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Icon, IconButton } from '@chakra-ui/react'
import { HiOutlinePaperClip } from 'react-icons/hi'
import { IoSendSharp } from 'react-icons/io5'
import { RiEmojiStickerLine } from 'react-icons/ri'
import useStore from '../../../../hooks/useStore';
import { useState, useRef } from 'react';

export default function(){
    const showEmoji = useStore((state:any)=>state.showEmoji)
    const setShowEmoji = useStore((state:any)=>state.setShowEmoji)

    const [ msgCtx, setMsg ] = useState('')

    const textareaRef = useRef<HTMLTextAreaElement | null | any>()

    function onEmojiSelect( emoji:{ native:string } ) {        
        setMsg((msgCtx) => msgCtx + emoji.native)
        textareaRef.current.focus()
    }

    return (
        <div className="chat__tools bg-slate-100 px-1.5 flex flex-row gap-1.5">
            <div className='mb-1.5'>
                <IconButton
                isRound={true}
                variant='ghost'
                colorScheme='facebook'
                aria-label='Contacts'
                size="sm"
                fontSize='24px'
                icon={<Icon as={HiOutlinePaperClip} />}
                />
            </div>
            <div className="chat__textarea">
                <Textarea
                minH="20px"
                overflow="auto"
                w="100%"
                resize="none"
                minRows={1}
                maxRows={10}
                as={ResizeTextarea}
                variant={'unstyled'}
                placeholder="Write a message here"
                fontSize='15px'
                value={msgCtx}
                onChange={(e) => setMsg(e.target.value)}
                ref={textareaRef}
                />
            </div>
            <div className='flex gap-2.5'>
                <div className='mb-1.5 emoji'>

                    {showEmoji && (
                        <div id='emojiPicker' className='emoji__picker' onMouseOut={() => setShowEmoji(false)}>
                            <Picker
                            onEmojiSelect={onEmojiSelect}
                            data={data}
                            searchPosition='none'
                            previewPosition='none'
                            skin='1'
                            theme='light'
                            emojiButtonSize='28'
                            emojiSize='16'
                            />
                        </div>
                    )}
                    
                    <IconButton
                    isRound={true}
                    variant='ghost'
                    colorScheme='facebook'
                    aria-label='Contacts'
                    size="sm"
                    fontSize='24px'
                    icon={<Icon as={RiEmojiStickerLine} />}
                    onClick={() => setShowEmoji(!showEmoji)}
                    />
                </div>
                <div className='mb-3'>
                    <Icon as={IoSendSharp} color='var(--special-color)' size='md' w={6} h={6} className="hover:cursor-pointer" />
                </div>
            </div>
        </div>
    )
}