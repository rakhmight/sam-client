import { FC } from 'react'
import AppInfo from './app-info/AppInfo'
import ActionsBtn from './action-btn/ActionsBtn'
import styles from './Titlebar.module.css'

const Titlebar : FC = () => {

    const actions = ['min','close']

    return (
        <div data-tauri-drag-region className={styles.titlebar}>
            <AppInfo/>

            <div className='flex flex-row'>
            {
                actions.map((act, i)=>(
                        <ActionsBtn act={act} key={i} />
                    ))
            }
            </div>
        </div>
    )
}

export default Titlebar