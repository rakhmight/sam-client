import { FC } from 'react'
import { ImFilePlay, ImFileMusic, ImFileEmpty, ImFilePicture } from 'react-icons/im'
import FileTypeBtn from '@/components/ui/buttons/file-type-btn/FileTypeBtn'
import { UserFilesProps, FilesTypes } from './types'

const UserFiles : FC<UserFilesProps> = () => {

    const files : FilesTypes = [
        { icon: ImFileEmpty, count: 1, title: 'files', panelData: {des: 'files', title: 'Files'} },
        { icon: ImFilePicture, count: 2, title: 'images', panelData: {des: 'images', title: 'Images'} },
        { icon: ImFilePlay, count: 1, title: 'videos', panelData: {des: 'videos', title: 'Videos'} },
        { icon: ImFileMusic, count: 1, title: 'audios', panelData: {des: 'audios', title: 'Audios'} },
    ]
    
    return(
        <div className="media w-full">

            {
                files.map(file=>(
                    <FileTypeBtn { ...file } />
                ))
            }

        </div>
    )
}

export default UserFiles