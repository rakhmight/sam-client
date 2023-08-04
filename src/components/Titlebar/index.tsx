import AppInfo from './AppInfo'
import ActionsBtn from './ActionsBtn'

export default function Titlebar(){

    const actions = [
        { type: 'min' },
        { type: 'close' }
    ]

    return (
        <div data-tauri-drag-region className="titlebar flex flex-row justify-between">
            <AppInfo/>

            <ActionsBtn acts={actions} />
        </div>
    )
}