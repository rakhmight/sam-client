import { Icon } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { VscChromeMinimize } from 'react-icons/vsc'
import { TfiClose } from 'react-icons/tfi'
import { appWindow } from '@tauri-apps/api/window'

interface Act {
    type: string
}

interface ComProps{
    acts: Array<Act>
}

export default function(props:ComProps){
    
    function minimizeWindow():any{
        appWindow.minimize()
    }
    function closeWindow():any{
        appWindow.close()
    }
    
    const Actions= props.acts

    return(
        <div className='flex flex-row'>
            {
                Actions.map((act, i)=>(
                    <div
                    key={i}
                    >
                        <IconButton
                        variant='ghost'
                        colorScheme='whiteAlpha'
                        aria-label={act.type=='min' ? 'Minimize' : 'Close app' }
                        size="sm"
                        fontSize={ act.type=='min' ? '18px' : '14px' }
                        icon={ act.type=='min' ? <Icon as={VscChromeMinimize} /> : <Icon as={TfiClose} color="var(--red-color)" /> }
                        onClick={act.type=='min' ?  minimizeWindow : closeWindow }
                        />
                    </div>
                ))
            }
        </div>
    )

}