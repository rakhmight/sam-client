import { FC, PropsWithChildren } from 'react'
import styles from './Auth.module.css'

const AuthLayout : FC<PropsWithChildren<unknown>> = ({ children }) => {
    return(
        <div className={`${styles.auth} h-full bg-slate-300`}>
            { children }
        </div>
    )
}

export default AuthLayout