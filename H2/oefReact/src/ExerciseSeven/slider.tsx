import { ChangeEventHandler, FunctionComponent } from "react"

interface sliderProps {
    value: number,
    min: number,
    max: number,
    changeHandler: ChangeEventHandler<HTMLInputElement>
}

const Slider: FunctionComponent<sliderProps> = ({min, max, value, changeHandler}) => {

    return ( 
        <>
            <input type="range" value={value} min={min} max={max} onChange={changeHandler}/>
        </>
     );
}

export default Slider;