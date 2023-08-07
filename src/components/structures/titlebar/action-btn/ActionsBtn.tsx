import { appWindow } from '@tauri-apps/api/window'
import { IconButton, Icon } from '@chakra-ui/react'
import { VscChromeMinimize } from 'react-icons/vsc'
import { TfiClose } from 'react-icons/tfi'

interface Act {
    act: string
}

function ActionBtn({ act } : Act){
    
    function minimizeWindow():any{
        appWindow.minimize()
    }
    function closeWindow():any{
        appWindow.close()
    }

    return(
        <IconButton
        variant='ghost'
        colorScheme='whiteAlpha'
        aria-label={act=='min' ? 'Minimize' : 'Close app' }
        size="sm"
        fontSize={ act=='min' ? '18px' : '14px' }
        icon={ act=='min' ? <Icon as={VscChromeMinimize} /> : <Icon as={TfiClose} color="var(--red-color)" /> }
        onClick={act=='min' ?  minimizeWindow : closeWindow }
        />
    )

}

export default ActionBtn