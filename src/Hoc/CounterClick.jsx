import WithCounter from "./WithCounter";

function CounterClick({increment, count,title,color}) {
    return <>
        <div className={'container text-center my-5'}>
            <h1 className={'display-4 text-primary'}>{title}</h1>
            <div className="btn-group" role="group">

                <button data-testid={'increment'} className={`btn btn-primary ${color}`} onClick={increment}>Click to increment !!
                </button>
                <button data-testid={'count'} className={`btn btn-primary disabled ${color}`}> ==> {count}</button>
            </div>
        </div>
    </>
}
export default WithCounter(CounterClick)