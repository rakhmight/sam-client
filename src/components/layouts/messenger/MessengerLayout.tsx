import { FC, PropsWithChildren } from 'react'
import styles from './Messenger.module.css'

const MessengerLayout : FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={styles.messenger}>
            { children }
        </div>
    )
}

export default MessengerLayout