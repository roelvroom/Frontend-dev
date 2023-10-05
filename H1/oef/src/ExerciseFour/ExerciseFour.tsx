import {FunctionComponent} from 'react'
import NumberGrid from './NumberGrid.tsx'
import './NumberStyle.css'

interface ExerciseFourProps {

}

const ExerciseFour: FunctionComponent<ExerciseFourProps> = () => {
    return (
        <div className={'exercise'}>
            <NumberGrid n={2}/>
            <NumberGrid n={3}/>
            <NumberGrid n={5}/>
        </div>
    )
}

export default ExerciseFour
