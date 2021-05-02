import React from 'react'
import Categories from './Categories'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Footer from './Footer'

const HomePage = () => {

    return (
        <div>
            <Navbar/>
            <Categories/>
            <ProductList/>
            <Footer/>
        </div>
    )
}

export default HomePage
