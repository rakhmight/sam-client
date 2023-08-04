import { Avatar, AvatarBadge } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
// import { Badge } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsCheck2 } from 'react-icons/bs'
// import { BsCheck2All } from 'react-icons/bs'

export default function(){
return (
    <div className='w-full hover:bg-slate-200'>
        <div className='messenger__correspondence-box flex flex-row w-full justify-between py-1.5 px-2.5'>

            <div className='flex w-full flex-row gap-1.5 items-center'>
                <div>
                    <Avatar size='md' name='Rakhimov Diyor'>
                        <AvatarBadge boxSize='0.8em' bg='blue.800' />
                    </Avatar>
                </div>

                <div className='w-full'>
                    <div className='flex flex-row w-full justify-between'>
                        <Text fontSize='sm' as='b' className='lim-txt lim-txt-110'>Rakhimov Diyor</Text>
                        <Text fontSize='smaller' color='grey' align='end'>29.12.2020</Text>
                    </div>

                    <div className='flex flex-row align-start justify-between'>
                        <div>
                            <Text fontSize='sm' color='grey' className='lim-txt lim-txt-150'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                        </div>
                        <div>
                            {/* <Badge colorScheme='facebook'>122М</Badge> */}
                            <Icon as={BsCheck2} fontSize='lg' color='blue.800' />
                            {/* <Icon as={BsCheck2All} fontSize='lg' color='blue.800' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}