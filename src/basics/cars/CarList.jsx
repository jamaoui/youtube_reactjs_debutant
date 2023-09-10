import React, {useState} from 'react';

let cars = [
    {
        "brand": "Mercedes-Benz",
        "model": "Citan",
        "body": "van",
        "color": "red",
        "price": "10000$",
        "year": 2010
    },
    {
        "brand": "Lexus",
        "model": "GX",
        "body": "4WD",
        "color": "black",
        "price": "50000$",
        "year": 2020
    },
    {
        "brand": "Toyota",
        "model": "RAV4",
        "body": "crossover",
        "color": "gray",
        "price": "15000$",
        "year": 2015
    },
    {
        "brand": "Hyundai",
        "model": "Grand i10 Nios",
        "body": "hatchback",
        "color": "yellow",
        "price": "30000$",
        "year": 2018
    },
    {
        "brand": "Honda",
        "model": "Civic",
        "body": "sedan",
        "color": "blue",
        "price": "25000$",
        "year": 2010
    }
]
function Car({brand, model, body, color, price, year}) {
    return <tr>
        <td>{brand}</td>
        <td>{model}</td>
        <td>{body}</td>
        <td>{color}</td>
        <td>{price}</td>
        <td>{year}</td>
    </tr>
}

export default function CarList() {
    const [isLoggedIn,setIsLoggedIn] = useState(true)
    const displayCars = () => {

        return cars.map((car,key) => {
            console.log(key)
            const {brand, model, body, color, price, year} = car
            return <Car brand={brand} year={year} body={body} color={color} model={model} price={price} key={key}/>
        })
    }

    /*
    * if (cars.length>0) {
        return <table className="table">
            <thead>
            <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Car body</th>
                <th>Color</th>
                <th>Price</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
            {displayCars()}
            </tbody>
        </table>
    }else {
        return <h2>Empty car list</h2>
    }
    * */
    return (
        <div>
            { (isLoggedIn && cars.length > 0) ?
                <table className="table">
                    <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Car body</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayCars()}
                    </tbody>
                </table>
                :
                <h2><a className={'btn btn-primary'} href="#">Connexion</a></h2>

            }

            {/* cars.length > 0 &&
                <table className="table">
                    <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Car body</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayCars()}
                    </tbody>
                </table>
            */}

        </div>
    );
}
