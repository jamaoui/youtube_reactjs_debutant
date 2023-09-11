import WithCounter from "./WithCounter";

function CounterHover({increment, count,title,color}) {
    return <>
        <div className={'container text-center my-5'}>
            <h1 className={'display-4 text-primary'}>{title}</h1>

            <div className="btn-group" role="group" aria-label="Basic example">
                <button className={`btn btn-primary ${color}`} onMouseOver={increment}>Hover to increment !!
                </button>
                <button className={`btn btn-primary disabled ${color}`}> ==> {count}</button>
            </div>
        </div>
    </>
}
export default WithCounter(CounterHover)