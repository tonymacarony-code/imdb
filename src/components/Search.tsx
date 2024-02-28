'use client'

import { useRouter } from 'next/navigation'
import React, { ReactNode, useState } from 'react'

const Search = () => {
    const [value, setValue] = useState('')

    const onSearch = (e: string) => {
        setValue(e)
    }

    const router = useRouter();

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.push(`/search/${value}`);
    };


    return (
        <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
            <input className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' value={value} onChange={(e) => onSearch(e.target.value)} type="text" placeholder='Search movie..' />
            <button
                className='text-amber-600 disabled:text-gray-400'
                disabled={value === ''}
            >
                Search
            </button>
        </form>
    )
}

export default Search