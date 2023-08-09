import { FC } from 'react'
import styles from './MessagesGroup.module.css'
import { MessagesGroupProps } from './types'

const MessagesGroup : FC<MessagesGroupProps> = ({ children }) => {
    return(
        <div className={styles['msg-out-group']}> {/* msg-inc-group */}
            {children}
        </div>
    )
}

export default MessagesGroup