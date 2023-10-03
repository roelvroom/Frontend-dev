import {FunctionComponent} from 'react'

interface LabelProps {
    score: number
}

const Label: FunctionComponent<LabelProps> = ({score}) => {
    if (score < 0.1) {
        return <div>Disaster</div>
    } else if (score <= 0.3) {
        return <div>Insufficient</div>
    } else if (score <= 0.5) {
        return <div>Sufficient</div>
    } else if (score <= 0.6) {
        return <div>Average</div>
    } else if (score <= 0.7) {
        return <div>Good</div>
    } else if (score <= 0.8) {
        return <div>Very good</div>
    } else if (score <= 0.9) {
        return <div>Excellent</div>
    } else {
        return <div>Excellent</div>
    }
}

export default Label
