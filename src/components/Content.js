import React from 'react'

import CameraTwo from '../images/Camera-2.jpg'

const Content = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={CameraTwo} alt="" className="h-full rounded mb-20 " />
            <div className="flex flex-col justify-center items-center">
            <h3 className="tent-2xl mb-2">Выбор камер и Гарантия Производителя</h3>
            <p className='mb-2' >Надежно, качественно с гарантией!</p>
            <p className='mb-2' >Надежно, качественно с гарантией!</p>
            <span> </span>
            {/* <img src={CameraTwo} alt="" className="h-full rounded mb-20 shadow m-5" /> */}
            
                                
            </div>
            
            
        </div>
    )
}

export default Content
