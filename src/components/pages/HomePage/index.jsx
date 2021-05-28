import React, { useState } from 'react'
import Categories from './Categories'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Footer from './Footer'
import LoginPrompt from '../../common/LoginPrompt'

const HomePage = () => {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <Navbar setIsModalOpen={setIsModalOpen} setFilteredProducts={setFilteredProducts}/>
            <Categories/>
            <ProductList setIsModalOpen={setIsModalOpen} filteredProducts={filteredProducts}/>
            <LoginPrompt isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
            <Footer/>
        </div>
    )
}

export default HomePage
