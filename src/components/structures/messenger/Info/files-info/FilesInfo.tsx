import { FC } from 'react'
import File from "./file/File"

const FileInfo : FC = () => {
    return (
        <div className="h-full py-2.5 flex flex-col items-start gap-3 w-full overflow-y-auto overflow-x-hidden max-h-[622px]">

            <File />
            <File />

        </div>
    )
}

export default FileInfo