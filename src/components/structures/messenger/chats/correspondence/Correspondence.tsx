import { FC } from 'react'
import { Avatar, AvatarBadge, Text, Badge } from '@chakra-ui/react'
// import { Icon } from '@chakra-ui/react'
// import { BsCheck2 } from 'react-icons/bs'
// import { BsCheck2All } from 'react-icons/bs'

const Correspondence : FC = () => {
    return (
        <div className='w-full hover:bg-slate-200'>
            <div className="flex flex-row w-full justify-between py-1.5 px-2.5 cursor-pointer">

                <div className='flex w-full flex-row gap-1.5 items-center'>
                    <div>
                        <Avatar size='md' name='Rakhimov Diyor'>
                            <AvatarBadge boxSize='0.8em' bg='var(--special-color)' />
                        </Avatar>
                    </div>

                    <div className='w-full'>
                        <div className='flex flex-row w-full justify-between'>
                            <Text fontSize='sm' as='b' className='lim-txt w-[110px]'>Rakhimov Diyor</Text>
                            <Text fontSize='smaller' color='grey' align='end'>04.08.2023</Text>
                        </div>

                        <div className='flex flex-row align-start justify-between items-center'>
                            <div>
                                {/* <Text fontSize='sm' color='grey' className='lim-txt w-[150px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text> */}
                                <div className='flex gap-1'>
                                    <Badge colorScheme='facebook'>jpeg</Badge>
                                    <Text fontSize='sm' color='grey' className='lim-txt w-[120px]' as='i'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error expedita placeat, soluta adipisci aut repellendus dignissimos odit? Blanditiis eaque debitis aperiam tempore ab inventore quae qui asperiores maiores doloremque.</Text>
                                </div>
                            </div>
                            <div>
                                {/* <Badge colorScheme='facebook'>1</Badge> */}
                                {/* <Icon as={BsCheck2} fontSize='lg' color='var(--special-color)' /> */}
                                {/* <Icon as={BsCheck2All} fontSize='lg' color='blue.800' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Correspondence