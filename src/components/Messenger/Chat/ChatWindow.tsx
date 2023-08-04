import { Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsCheck2, BsCheck2All } from 'react-icons/bs'

export default function(){
    return (
        <div className="chat__window h-full w-full px-2.5">

            <div className="empty-chat"></div>

            <div className="chat__window-wrap">
                
                <div className="msg-out-group">
                    <div className="msg-out">
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
                </div>

                <div className="msg-inc-group">
                    <div className="msg-inc">
                        <div>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                        </div>
                        <div>
                            <Text color='grey' fontSize='small'>12:40</Text>
                        </div>
                    </div>
                </div>            

                <div className="msgs-date">
                    <div className="m-date"><Text fontSize='small' color={'white'}>21.10.2021</Text></div>
                </div>
                
                <div className="msg-out-group">
                    <div className="msg-out">
                        <div>
                            <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                        </div>
                        <div>
                            <Text color='grey' fontSize='small'>12:40</Text>
                        </div>
                        <div>
                            <Icon as={BsCheck2} fontSize='lg' color='blue.800' /> 
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}