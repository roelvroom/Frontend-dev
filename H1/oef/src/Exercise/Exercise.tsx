import {CSSProperties, FunctionComponent, PropsWithChildren} from 'react'
import ExerciseTitle from './ExerciseTitle.tsx'

interface ExerciseOneProps extends PropsWithChildren{
    title: string
    background?: string
}

const Exercise: FunctionComponent<ExerciseOneProps> = ({title, background, children}) => {
    const style: CSSProperties = {
        boxShadow: '7px 2px 8px 1px rgba(18,89,46,0.67)',
        background: background ?? '#EEEEEE',
        minHeight: '7em',
        padding: '.5em',
        margin: '1.5em .5em',
}

    return (
        <div style={style}>
            <ExerciseTitle title={title}/>
            {children}
        </div>
    )
}

export default Exercise
