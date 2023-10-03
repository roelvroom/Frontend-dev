import {FunctionComponent} from 'react'
import MultiplicationTable from './MultiplicationTable.tsx'

interface ExerciseTwoProps {

}

const ExerciseOne: FunctionComponent<ExerciseTwoProps> = () => {
    return (
        <div className={'exercise'}>
            <MultiplicationTable table={3}/>
            <MultiplicationTable table={9}/>
        </div>
    )
}

export default ExerciseOne
