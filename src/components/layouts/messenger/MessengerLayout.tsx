import { FC } from 'react'
import { LayoutProps } from '../types'
import styles from './Messenger.module.css'

const MessengerLayout : FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.messenger}>
            { children }
        </div>
    )
}

export default MessengerLayout