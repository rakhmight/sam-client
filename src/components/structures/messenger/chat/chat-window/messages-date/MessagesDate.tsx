import { FC } from 'react'
import { Text } from '@chakra-ui/react'
import styles from './MessagesDate.module.css'

interface MessagesDateProps {
    
}

const MessagesDate : FC<MessagesDateProps> = () => {
    return(
        <div className={styles["msgs-date"]}>
            <div className={styles["m-date"]}><Text fontSize='small' color={'white'}>21.10.2021</Text></div>
        </div>
    )
}

export default MessagesDate