import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link className="p-4" to='/'>Главная</Link>
                <Link className="p-4" to='/menu'>Камеры</Link>
                <Link className="p-4" to='/about'>О нас</Link>
                <Link className="p-4" to='/contact'>Контакты</Link>
        </div>
    )
}

export default Home