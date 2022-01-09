import React from 'react'


const CardPost = ({post}) => {
    return (
        <div className='card'>
            <div className='card__block'>
                <div className='card__title'>
                    {post.title}
                </div>
                <div className='card__text'>
                    {post.text}
                </div>
                <div className='card__date'>{post.date}</div>
                <div className='card__author'>{post.author}</div>
                
            </div>
        </div>
    )
}

export default CardPost
