import {FunctionComponent} from 'react'
import Bar from './Bar.tsx'
import Label from './Label.tsx'

interface ProgressBarProps {
    percentage: number
    color: string
}



const ProgressBar: FunctionComponent<ProgressBarProps> = ({percentage,color}) => {

    const Element25 = (
        <svg height="80" width="400">
            <Bar percentage={100} color={'lightgray'}/>
            <Bar percentage={percentage} color={color}/>
            <Label percentage={percentage} color={color}/>
        </svg>
    )

    return (
        <>
            {Element25}
        </>
    )
}

export default ProgressBar
