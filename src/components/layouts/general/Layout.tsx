import { LayoutProps } from '../@types'
import styles from './Layout.module.css'

function Layout({ children } : LayoutProps): JSX.Element{
    return (
        <div className={styles.layout}>
            { children }
        </div>
    )
}

export default Layout