import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { BiSolidLockOpenAlt } from 'react-icons/bi'
import { IconButton } from '@chakra-ui/react'

export default function SearchCom(){
    return (
        <div className='flex flex-row gap-1 px-2.5'>
            <div>
                <InputGroup size='sm' colorScheme='facebook'>
                    <InputLeftElement pointerEvents='none'>
                        <Icon color='grey' as={BsSearch} />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Search' size='sm' />
                </InputGroup>
            </div>
            <div>
                <IconButton
                isRound={true}
                variant='ghost'
                colorScheme='blackAlpha'
                aria-label='Reference'
                size="sm"
                fontSize='16px'
                icon={<Icon as={BiSolidLockOpenAlt} color='var(--special-color)' />}
                />
            </div>
        </div>
    )
}