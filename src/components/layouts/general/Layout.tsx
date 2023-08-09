import { FC } from 'react'
import { LayoutProps } from '../types'
import styles from './Layout.module.css'

const Layout : FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            { children }
        </div>
    )
}

export default Layout