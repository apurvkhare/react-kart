import React, { useState, useEffect } from 'react'
import Categories from './Categories'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Footer from './Footer'
import LoginPrompt from '../../common/LoginPrompt'
import { useAuth } from '../../../context/AuthContext'
import { useCustomer } from '../../../context/CustomerContext'
import { CUSTOMER_SET_CART_ITEMS } from '../../../reducers/ActionTypes'

const HomePage = () => {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { currentUser } = useAuth()
    const { dispatch } = useCustomer()

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        if(cartData && currentUser && cartData.customerId === currentUser.uid){
            dispatch({
                type: CUSTOMER_SET_CART_ITEMS,
                payload:{
                    cart: JSON.parse(localStorage.getItem('cart'))
                }
            })
        }
    }, [])

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
