import {FunctionComponent} from 'react'
import CommentCard from './CommentCard.tsx'
import './ExerciseFiveStyle.css'
import {IComment} from '../Models/IComment.ts'

const comment1: IComment = {
    id: 'ebba06aa-649c-40b8-ad38-d517f45fc843',
    firstName: 'Evangeline',
    lastName: 'Mcintyre',
    avatar: 'https://via.placeholder.com/150',
    content: 'Nisi ipsum anim reprehenderit ex id laboris sunt deserunt quis. Id velit aliqua commodo reprehenderit nostrud sit elit exercitation mollit proident amet et amet. Do reprehenderit tempor tempor excepteur fugiat irure anim deserunt elit incididunt ut cillum dolore.',
}

const comment2: IComment = {
    id: 'e3c21e32-df68-4d77-b594-18a2d4ee18f9',
    firstName: 'Dudley',
    lastName: 'Gates',
    avatar: 'https://via.placeholder.com/150',
    content: 'Reprehenderit sunt enim dolore cillum. Proident Lorem commodo ea duis tempor ipsum dolore in magna aliquip reprehenderit esse. Consequat do fugiat veniam esse anim ullamco eu pariatur laboris ullamco velit excepteur ipsum. Ea consectetur quis anim fugiat fugiat veniam Lorem exercitation Lorem aliqua do.',
}


interface ExerciseFiveProps {

}

const ExerciseFive: FunctionComponent<ExerciseFiveProps> = () => {
    return (
        <>
            <CommentCard {... comment1}/>
            <hr/>
            <CommentCard {... comment2}/>
        </>
    )
}

export default ExerciseFive
