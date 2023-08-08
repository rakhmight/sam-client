import { FC } from 'react'
import { Textarea } from '@chakra-ui/react'
import ResizeTextarea from "react-textarea-autosize"
import { MsgTextareaProps } from './MsgTextarea.types'

const MsgTextarea : FC<MsgTextareaProps> = ({msgCtx, textareaRef, setMsg}) => {
    return(
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
    )
}

export default MsgTextarea