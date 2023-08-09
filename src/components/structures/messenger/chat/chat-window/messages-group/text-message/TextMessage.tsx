import { FC } from 'react'
import { Text, Icon } from '@chakra-ui/react'
import { BsCheck2, BsCheck2All } from 'react-icons/bs'
import styles from './TextMessage.module.css'

interface TextMessageProps {
    
}

const TextMessage : FC<TextMessageProps> = () => {
    return(
        <div className={styles["msg-out"]}> {/* msg-inc */}
            <div>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nihil voluptatum</Text>
            </div>
            <div>
                <Text color='grey' fontSize='small'>12:40</Text>
            </div>
            <div>
                <Icon as={BsCheck2All} fontSize='lg' color='blue.800' />
        </div>
        </div>
    )
}

export default TextMessage