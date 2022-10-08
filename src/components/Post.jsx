import React from 'react'
import img from "../assets/Phroneo.jpg";
import Button from './Button';
const Post = ({ item, to }) => {
    return (
        <article>
            <div className="image">
                <img src={item.img} alt="" />
            </div>

            <div className="info">
                <h2>{item.title}</h2>
                <Button to={to} text={"Read more..."} />
            </div>
        </article>
    )
}

export default Post
