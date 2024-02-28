'use client'

import { useEffect } from "react"

const error = ({ error, reset }: any) => {


    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className="text-center mt-10">
            <h1>
                Something goes wrong...
            </h1>
            <button className="hover:text-amber-600" onClick={() => reset()}></button>
        </div>
    )
}

export default error