import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 
        'grid grid-rows-4 text-center item-center bg-yellow-500' : 'hidden'}
        onClick={toggle}>
            <Link className="p-4" to='/'>Главная</Link>
            <Link className="p-4" to='/catalog'>Камеры</Link>
            <Link className="p-4" to='/about'>О нас</Link>
            <Link className="p-4" to='/contact'>Контакты</Link>
        </div>
    )
}

export default DropDown