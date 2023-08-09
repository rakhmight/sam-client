import { FC } from 'react'
import AuthLayout from '@/components/layouts/auth/AuthLayout'
import AuthForm from '@/components/structures/auth/auth-form/AuthForm'

const Auth : FC = () => {

    return (
        <AuthLayout>
            <AuthForm />
        </AuthLayout>
    )
}

export default Auth