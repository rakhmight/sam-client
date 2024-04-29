import { FC, PropsWithChildren } from 'react'

const BlockLayout : FC<PropsWithChildren<unknown>> = ({ children }) => {
    return(
        <div className={`w-full h-full flex items-center justify-center bg-slate-300`}>
            { children }
        </div>
    )
}

export default BlockLayout