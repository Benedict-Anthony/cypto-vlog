import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import BlogsPosts from '../components/BlogsPosts'

const Filter = () => {
    const params = useParams()
    const [filter, setFilter] = useState([])



    const getFilterPost = async () => {
        const res = await fetch(`https://crypto-news-live11.p.rapidapi.com/news/${params.type.toLowerCase()}`, {
            // params: { page: '3', per_page: '200' },
            headers: {
                'X-RapidAPI-Key': '5446a9197cmshb6b26fe7b44b4c7p1e3a01jsn163ec0f90826',
                'X-RapidAPI-Host': 'crypto-news-live11.p.rapidapi.com'
            },
            method: "GET"

        })
        const data = await res.json()
        console.log(data)
        setFilter(data.news)
    }

    useEffect(() => {
        getFilterPost()
    }, [params.type])
    return (
        <section className='section container'>
            <BlogsPosts posts={filter} />
        </section>
    )
}

export default Filter