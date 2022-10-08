import React from 'react'
import Post from './Post';

const BlogsPosts = ({ posts }) => {
    return (
        <section className='home container section'>
            {posts.map((item) => (
                <Post key={item.id} item={item} to={`/detail/${item.slug}`} />
            ))}
        </section>
    )
}

export default BlogsPosts
