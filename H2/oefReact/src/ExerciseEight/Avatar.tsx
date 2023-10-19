import {FunctionComponent} from 'react'
import './ExerciseEightStyle.css'

interface AvatarProps {
    avatarURL: string
}

const Avatar: FunctionComponent<AvatarProps> = ({avatarURL}) => {
    return (
        <img className={'avatar'} src={avatarURL} alt="user avatar"/>
    )
}

export default Avatar