import { Tooltip, IconButton, Icon } from "@chakra-ui/react"
import { NavBtnProps } from "./NavBtn.types"

function NavBtn({ tLabel, aLabel, fs, icon, callback, iColor } : NavBtnProps){
    return (        
        <Tooltip label={tLabel} bg='#0b2638' placement='right' closeDelay={50}>
            <IconButton
            isRound={true}
            variant='ghost'
            colorScheme='whiteAlpha'
            aria-label={aLabel}
            size='sm'
            fontSize={fs}
            icon={<Icon as={icon} color={iColor} />}
            onFocus={e => e.preventDefault()}
            onClick={callback}
            />
        </Tooltip>
    )
}

export default NavBtn