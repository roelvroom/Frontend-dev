import {FunctionComponent, ReactNode} from 'react'
import Star from './Star.tsx'
import Label from './Label.tsx'

interface RaterProps {
    rating: number
    max: number
}

const Rater: FunctionComponent<RaterProps> = ({rating, max}) => {
    const output:ReactNode[] = []
    for (let i=1;i<=max;i++){
        output.push(<Star full={i<=rating}/>)
    }
    return (
        <div className={'rater'}>
            <Label score={rating/max}/>
            {output}
        </div>
    )
}

export default Rater
