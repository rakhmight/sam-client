import { IconButton, Text, Icon } from '@chakra-ui/react'
import { SlMenu } from 'react-icons/sl'
import LogoutBtn from './LogoutBtn'
import ContactsList from './ContactsList'
import Guide from './Guide'
import Settings from './Settings'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'

export default function Navigation(){
    const [navMode, expendNav] = useState(false)
    const [showMenu, changeMenuVisible] = useState(false)

    const navHandler = () => {
        expendNav(navMode => !navMode)

        if(!navMode){
            setTimeout(()=>{
                changeMenuVisible(showMenu => showMenu = true)
            },150)
        } else {
            changeMenuVisible(showMenu => showMenu = false)
        }
    }

    return (
       <div className={!navMode ? 'nav-min navigation h-full py-2.5' : 'nav-full navigation h-full py-2.5'}>
            <div className='h-full w-full px-1'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <IconButton
                        isRound={true}
                        variant='ghost'
                        colorScheme='whiteAlpha'
                        aria-label='Menu'
                        fontSize='16px'
                        size="sm"
                        icon={<Icon as={SlMenu} />}
                        onClick={navHandler}
                        />
                
                        {
                            showMenu && (
                                <Text color='white' fontSize='14px' className='mb-0.5'>Menu</Text>
                            )
                        }
                    </div>
                    <div>
                        <IconButton
                        isRound={true}
                        variant='ghost'
                        colorScheme='whiteAlpha'
                        aria-label='Close'
                        fontSize='18px'
                        size="sm"
                        icon={<Icon as={MdClose} color="var(--red-color)" />}
                        onClick={navHandler}
                        />
                    </div>
                </div>

                <div className='flex gap-1.5 flex-col my-14'>
                    <div className='flex items-center gap-2'>
                        <ContactsList/>
                
                        {
                            showMenu && (
                                <Text color='white' fontSize='14px' className='mb-0.5'>Contacts list</Text>
                            )
                        }
                    </div>
                    <div className='flex items-center gap-2'>
                        <Guide/>
                
                        {
                            showMenu && (
                                <Text color='white' fontSize='14px' className='mb-0.5'>Informative guide</Text>
                            )
                        }
                    </div>
                    <div className='flex items-center gap-2'>
                        <Settings/>
                
                        {
                            showMenu && (
                                <Text color='white' fontSize='14px' className='mb-0.5'>Settings</Text>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className='px-1 flex items-center gap-2'>
                <LogoutBtn />
                
                {
                    showMenu && (
                        <Text color='white' fontSize='14px' className='mb-1'>Log out</Text>
                    )
                }
            </div>
       </div>
    )
}