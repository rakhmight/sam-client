import { Divider } from '@chakra-ui/react'
import UserStatus from './user-status/UserStatus'
import AboutUser from './about-user/AboutUser'
import UserActions from './user-actions/UserActions'
import UserFiles from './user-files/UserFiles'

export default function(){ 
    return (
        <div className="w-full h-full bg-slate-100 py-2.5 flex flex-col items-start gap-3">
            <UserStatus />
            
            <Divider orientation='horizontal' borderTop='8px solid' color='#c4d0dfcf'/>
            
            <AboutUser />
            
            <Divider orientation='horizontal' borderTop='8px solid' color='#c4d0dfcf'/>
            
            <UserActions />
            
            <Divider orientation='horizontal' borderTop='8px solid' color='#c4d0dfcf'/>

            <UserFiles />
        </div>
    )
}