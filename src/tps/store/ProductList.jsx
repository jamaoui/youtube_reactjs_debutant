import {useEffect, useState} from "react";
import Product from "./Product";

export default function ProductList() {

    const [productList, setProductList] = useState([])
    const [categories, setCategoryList] = useState([])
    const [searchInput, setSearchInput] = useState()
    const [currentCategory, setCurrentCategory] = useState()

    const displayCategories = () => {
        return categories.map((category, key) =>
            <button key={key}
                    className={'btn ' + (currentCategory === category ? 'btn-dark' : 'btn-secondary')}
                    onClick={(e) => {
                        e.preventDefault()
                        setCurrentCategory(category)
                    }}>
                {category}
            </button>
        )
    }
    const displayProducts = () => {
        let productsTemp = productList
        if (searchInput !== undefined) {
            productsTemp = productList.filter(product =>
                product.title.includes(searchInput)
                || product.id.toString().includes(searchInput)
                || product.description.includes(searchInput)
            )
        }
        console.log(productsTemp)
        if (currentCategory !== undefined) {
            productsTemp = productsTemp.filter(product => {
                return product.category === currentCategory
            })
        }

        if (productsTemp.length > 0) {
            return productsTemp.map((product, key) => {
                return <Product product={product} key={key}/>
            })
        }
        return <tr>
            <td colSpan={7}> No Items</td>
        </tr>
    }
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => setProductList(response))
    }

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(response => setCategoryList(response))
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, []);

    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = document.querySelector('#search').value
        setSearchInput(searchValue)
    };

    return <div className='container-fluix mx-auto w-75 my-3'>
        <h2>Search:</h2>
        <form>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Search</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="search" className="form-control"/>
                </div>
                <div className="col-auto">
                    <input className='btn btn-dark mx-2' type="submit" value='Search' onClick={handleSearch}/>
                    <input className='btn btn-secondary' type="reset" value='Reset' onClick={() => {
                        setSearchInput(undefined)
                    }}/>
                </div>
            </div>
            <hr/>
            <h5>Categories: </h5>
            <div className="row g-3 align-items-center">
                <div className="btn-group">
                    {displayCategories()}
                </div>
            </div>
        </form>
        <hr/>
        <h1>Products : </h1>
        <table className="table">
            <thead>
            <tr>
                <th>#ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            {displayProducts()}
            </tbody>
        </table>
    </div>
}