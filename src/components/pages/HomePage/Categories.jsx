import React from 'react'
import styled from 'styled-components'

const categories = ["Electronics", "Fashion", "Stationary", "Mobiles", "Kitchen"]

const CategoryItem = styled.div`
    font-size: 14px;
    width: 100px;
    cursor: pointer;
    border: 2.5px solid black;
    padding: 5px;
    border-radius: 5px;
    text-align: center;

    :hover{
        border: 2.5px solid white;
        color: whitesmoke
    }
`

const Categories = () => {

    const categoreisStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: '100%',
        height: 50,
        backgroundColor: '#98aaf5'
    }
    return (
        <div style={categoreisStyle}>
            {categories && categories.length !== 0 && categories.map((category, index) => <CategoryItem key={index}>{category}</CategoryItem>)}
        </div>
    )
}

export default Categories
