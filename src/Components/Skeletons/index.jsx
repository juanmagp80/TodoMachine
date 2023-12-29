import React from 'react'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';


const Skeletons = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 6000)
    }, [])

  return (
    <>
    </>
    )
}
     
     
    


        

export default Skeletons
