import { FC } from 'react'
import { LayoutProps } from '../types'

const BlockLayout : FC<LayoutProps> = ({ children }) => {
    return(
        <div className={`w-full h-full flex items-center justify-center bg-slate-300`}>
            { children }
        </div>
    )
}

export default BlockLayout