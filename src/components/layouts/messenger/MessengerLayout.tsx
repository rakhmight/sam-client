import { LayoutProps } from '../@types'
import styles from './Messenger.module.css'

function MessengerLayout({ children } : LayoutProps): JSX.Element{
    return (
        <div className={styles.messenger}>
            { children }
        </div>
    )
}

export default MessengerLayout