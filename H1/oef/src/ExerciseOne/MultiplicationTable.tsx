import {FunctionComponent} from 'react'
import Row from './Row.tsx'
import Header from './Header.tsx'

interface MultiplicationTableProps {
    table: number
}

const MultiplicationTable: FunctionComponent<MultiplicationTableProps> = ({table}) => {
    const output = []
    for (let i=1; i<11;i++){
        output.push(<Row factor1={i} factor2={table}/>)
    }

    return (
        <div className={'table'}>
            <Header table={table}/>
            {output}
        </div>
    )
}

export default MultiplicationTable
