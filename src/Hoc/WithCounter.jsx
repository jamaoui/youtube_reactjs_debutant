import {useState} from "react";

export default function WithCounter(OriginalComponent) {
    const NewComponent  = (props) => {
        const [count, setCount] = useState(0)

        const newProps = {
            count,
            title:'?',
            color:'bg-dark',
            ...props
        }
        const increment = () => {
            setCount(prevState => {
                return prevState + 1
            })
        }

        return <>
            <OriginalComponent increment={increment} {...newProps} />
        </>
    }

    return NewComponent
}