import React, {useEffect, useState} from "react";

export default function Counter({initialValue = 0,step = 1}) {
    const [count, setCount] = useState(initialValue)
    const [time, setTime] = useState(new Date())
    let timer = null

    useEffect(() => {
        console.log('Component mounted ! ')
        timer = setInterval(()=> {
            console.log('tick')
            setTime(new Date())
        },1000)

        return () => {
            clearInterval(timer)
        }
    }, []);

    useEffect(() => {
        console.log('age changed ! ')

    }, [count]);

    return <div>
        Date: <span>{time.toLocaleString()}</span>
        <span>
            <button onClick={() => {
                setCount(prevState => {
                    return prevState + step
                })
            }}>Click to increment !! </button>
            <button onClick={() => {
                setCount(0)
            }}>Reset !! </button>

            Il y a {count} secondes
        </span>
    </div>
}
/*export default class Counter extends React.Component {
    state = {
        counter: this.props.initialValue,
        age: 25
    }
    constructor(props) {
        super(props);
        console.log('hi from constructor.')
    }

    handleClick = () => {
        console.log(this.state)
        this.setState(
            prevState => {
                return { counter: prevState.counter+1 }
            }
        )
        console.log(this.state)
    };
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState,this.state)
        if(nextState.age !== this.state.age) {
            return false
        }

        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {x: window.scrollX, y: window.scrollY}
    }

    static getDerivedStateFromProps(props, state) {
        if(props.age !== state.age) {
            return {
                ...state,
                ...{age: props.age}
            }
        }
      return null
    }

    componentDidMount() {
        // fetch api
        console.log('component mounted')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
        //window.scroll(snapshot.x+50,snapshot.y+50)
        console.log(snapshot)
    }

    handleReset = () => {
        this.setState({ counter: 0 })
    };



    render() {
        console.log('hi from render function.')
        return <div>
            <button onClick={this.handleClick}>Click to increment !! </button>
            <button onClick={this.handleReset}>Reset !! </button>
            Il y a {this.state.counter} secondes
        </div>
    }
}*/