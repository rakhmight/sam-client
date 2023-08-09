import { FC } from 'react'
import MessagesDate from "./messages-date/MessagesDate"
import MessagesGroup from "./messages-group/MessagesGroup"
import TextMessage from "./messages-group/text-message/TextMessage"
import FileMessage from "./messages-group/file-message/FileMessage"
import styles from './ChatWindow.module.css'

const ChatWindow : FC = () => {
    return (
        <div className={`${styles["chat-window"]} h-full w-full px-2.5`}>

            <div className="empty-chat"></div>

            <div className={styles["messages-window"]}>

                <MessagesGroup>
                    <TextMessage/>
                </MessagesGroup>

                <MessagesDate />

                <MessagesGroup>
                    <FileMessage/>
                </MessagesGroup>

            </div>

        </div>
    )
}

export default ChatWindow