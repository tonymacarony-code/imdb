import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (
        <div className="flex justify-center items-center">
            <img className='h-12' src='loader.svg' alt='loader' />
        </div>
    )
}

export default loading