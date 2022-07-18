import React from 'react'
import gif from './default.gif'
export default function Spinner() {
    return (
        <div className='d-flex justify-content-center'>
            <div className=" position-absolute top-50 start-50 translate-middle">
                <img src={gif} alt="spinner" />
            </div>
        </div>

    )
}
