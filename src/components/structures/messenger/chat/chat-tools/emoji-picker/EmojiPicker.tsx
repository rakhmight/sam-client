import { FC } from 'react'
import Picker from '@emoji-mart/react'
import { IconButton, Icon } from '@chakra-ui/react'
import data from '@emoji-mart/data'
import { RiEmojiStickerLine } from 'react-icons/ri'
import useStore, { MessengerState } from '@/hooks/useStore'
import { EmojiPickerProps, EmojiProps } from './types'
import styles from './EmojiPicker.module.css'

const EmojiPicker : FC<EmojiPickerProps> = ({ setMsg, textareaRef, msgCtx }) => {
    const showEmoji = useStore((state:MessengerState)=>state.showEmoji)
    const setShowEmoji = useStore((state:MessengerState)=>state.setShowEmoji)
    
    function onEmojiSelect(emoji:EmojiProps) {        
        setMsg(msgCtx + emoji.native)
        textareaRef.current?.focus()
    }

    return(
        <>
            {showEmoji && (
                <div id='emojiPicker' className={styles["emoji-picker"]} onMouseOut={() => setShowEmoji(false)}>
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
        </>
    )
}

export default EmojiPicker