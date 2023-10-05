import {FunctionComponent, ReactNode} from 'react'

interface NumberGridProps {
    n: number
}

const NumberGrid: FunctionComponent<NumberGridProps> = ({n}) => {
    const output:ReactNode[] = []
    for (let i=0;i<n;i++){
        const row: ReactNode[] = []
        for (let j=0;j<n;j++){
            row.push(<button className={'square'}>{i * n + j + 1}</button>)
        }
        output.push(<div className={"grid-row"}>{row}</div>)
    }

    return (
        <div className={'grid'}>
            {output}
        </div>
    )
}

export default NumberGrid
