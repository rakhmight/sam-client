import { NavBtnProps } from "./types"
import { FC } from "react"
import { Tooltip, IconButton, Icon } from "@chakra-ui/react"

const NavBtn : FC<NavBtnProps> = ({ tLabel, aLabel, fs, icon, callback, iColor }) => {
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