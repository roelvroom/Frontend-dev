import {FunctionComponent} from 'react'
import Avatar from './Avatar.tsx'
import CommentSection from './CommentSection.tsx'
import {IComment} from '../Models/IComment.ts'

import './ExerciseEightStyle.css'


interface CommentCardProps extends IComment{
    isOpen: boolean
    toggleOpen: () => void
}

const CommentCard: FunctionComponent<CommentCardProps> = ({avatar, ...rest}) => {
    return (
        <div className={'card'}>
            <Avatar avatarURL={avatar}/>
            <CommentSection {...rest}/>

        </div>
    )
}

export default CommentCard