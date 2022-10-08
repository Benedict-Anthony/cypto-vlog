import React, { useState, useEffect } from 'react'
import BlogsPosts from '../components/BlogsPosts'


const Home = ({ handleSearch }) => {
    const [posts, setPosts] = useState([])

    const getAllPost = async () => {
        const res = await fetch('https://crypto-news-live11.p.rapidapi.com/all', {
            // params: { page: '3', per_page: '200' },
            headers: {
                'X-RapidAPI-Key': '5446a9197cmshb6b26fe7b44b4c7p1e3a01jsn163ec0f90826',
                'X-RapidAPI-Host': 'crypto-news-live11.p.rapidapi.com'
            },
            method: "GET"

        })
        const data = await res.json()
        console.log(data)
        setPosts(data.news)
    }

    useEffect(() => {
        getAllPost()
    }, [])

    return (
        <>
            <BlogsPosts posts={posts} />
        </>
    )
}

export default Home
