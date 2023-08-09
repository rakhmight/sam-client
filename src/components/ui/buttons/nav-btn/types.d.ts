import { As } from "@chakra-ui/react";

export interface NavBtnProps {
    tLabel: string,
    aLabel: string,
    fs: string,
    icon: As,
    callback?: React.MouseEventHandler,
    iColor?: string
}