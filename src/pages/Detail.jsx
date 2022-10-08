import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogsPosts from '../components/BlogsPosts'

const Detail = () => {
    const params = useParams()
    const [post, setPost] = useState()

    const getSinglePost = async () => {
        const res = await fetch(`https://crypto-news-live11.p.rapidapi.com/article/${params.slug}`, {
            headers: {
                'X-RapidAPI-Key': '5446a9197cmshb6b26fe7b44b4c7p1e3a01jsn163ec0f90826',
                'X-RapidAPI-Host': 'crypto-news-live11.p.rapidapi.com'
            },
            method: "GET"

        }
        )
        const data = await res.json()
        setPost(data)
        console.log(data)

    }

    useEffect(() => {
        getSinglePost()
    }, [params.slug])

    console.log(post)

    return (
        <section className='section container'>
            {post ? (
                <>
                    <div className="detail">
                        <div className="post__body">
                            <h2>{post.title}</h2>
                            {post.images.map((img, index) => (

                                <img src={img.img} key={index} alt="" />
                            ))}

                            <div className="post__content">
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>

                    <BlogsPosts posts={post.similar_articles} />
                </>
            ) : (
                <h2>Loading</h2>
            )}
        </section>
    )
}

export default Detail
