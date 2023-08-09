import { FC } from 'react'
import { Icon } from '@chakra-ui/react'
import { MdPhone, MdOutlineVideocam, MdPlaylistAdd } from 'react-icons/md'
import { BsLightningCharge } from 'react-icons/bs'
import UserActionBtn from '@/components/ui/buttons/user-action-btn/UserActionBtn'
import { ActionsType } from './types'

const UserActions : FC = () => {
    const actions:ActionsType = [
        { icon: <MdPhone />, fs: '18px', aLabel: 'Call' },
        { icon: <MdOutlineVideocam />, fs: '22px', aLabel: 'Video call' },
        { icon: <MdPlaylistAdd/>, fs: '18px', aLabel: 'Add to favorite' },
    ]

    return(
        <div className="actions px-4 w-full flex flex-row gap-5 items-center">
        <div>
            <Icon as={BsLightningCharge} fontSize='20px' color='var(--special-color)' />
        </div>

        <div className='flex gap-2.5'>

            {
                actions.map(action=>(
                    <UserActionBtn {...action} />
                ))
            }

        </div>
    </div>
    )
}

export default UserActions