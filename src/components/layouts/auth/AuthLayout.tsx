import { FC } from 'react'
import styles from './Auth.module.css'
import { LayoutProps } from '../types'

const AuthLayout : FC<LayoutProps> = ({ children }) => {
    return(
        <div className={`${styles.auth} h-full bg-slate-300`}>
            { children }
        </div>
    )
}

export default AuthLayout