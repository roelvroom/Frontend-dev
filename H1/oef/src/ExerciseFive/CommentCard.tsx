import {FunctionComponent} from 'react'
import Avatar from './Avatar.tsx'
import CommentSection from './CommentSection.tsx'
import {IComment} from '../Models/IComment.ts'


const CommentCard: FunctionComponent<IComment> = ({avatar, ...rest}) => {
    return (
        <div className={'card'}>
            <Avatar avatarURL={avatar}/>
            <CommentSection {...rest}/>

        </div>
    )
}

export default CommentCard
