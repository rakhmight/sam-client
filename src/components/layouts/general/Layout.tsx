import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.css'

const Layout : FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={styles.layout}>
            { children }
        </div>
    )
}

export default Layout