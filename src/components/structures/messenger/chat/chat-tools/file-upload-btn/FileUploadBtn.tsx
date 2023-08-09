import { FC } from 'react'
import { IconButton, Icon } from '@chakra-ui/react'
import { HiOutlinePaperClip } from 'react-icons/hi'

const FileUploadBtn : FC = () => {
    return(
        <IconButton
        isRound={true}
        variant='ghost'
        colorScheme='facebook'
        aria-label='Attach file'
        size="sm"
        fontSize='24px'
        icon={<Icon as={HiOutlinePaperClip} />}
        />
    )
}

export default FileUploadBtn