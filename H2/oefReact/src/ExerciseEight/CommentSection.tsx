import {FunctionComponent} from 'react'
import Author from './Author.tsx'
import CommentContent from './CommentContent.tsx'
import './ExerciseEightStyle.css'

interface CommentSectionProps {
    firstName: string
    lastName: string
    content: string
    isOpen: boolean
    toggleOpen: () => void
}

const CommentSection: FunctionComponent<CommentSectionProps> = ({firstName,lastName,content, isOpen, toggleOpen}) => {
    return (
        <div className={'commentSection'}>
            <Author firstName={firstName} lastName={lastName}/>
            <CommentContent content={content} isOpen={isOpen} toggleOpen={toggleOpen}/>
        </div>
    )
}

export default CommentSection