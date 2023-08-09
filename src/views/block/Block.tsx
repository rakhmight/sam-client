import { FC } from 'react'
import BlockLayout from '@/components/layouts/block/BlockLayout'
import BlockForm from '@/components/structures/block/block-form/BlockForm'

const Block : FC = () => {
    return (
        <BlockLayout>
            <BlockForm />
        </BlockLayout>
    )
}

export default Block