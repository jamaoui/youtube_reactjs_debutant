export default function Fruit({fruits}) {
    const displayFruits = () => fruits.map(fruit => <li>{fruit}</li>)
    return <>
        <h1 className='h1'>Fruits : </h1>
        <ul>
            {displayFruits()}
        </ul>
    </>
}