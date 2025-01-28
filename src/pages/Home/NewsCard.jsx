import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    // console.log(news);
    // console.log(news);
    const { title, thumbnail_url, image_url, details, _id } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                    details.length > 200 ?
                        <p>{details.slice(200)} <Link
                            to={`/news/${_id}`}
                            className='text-blue-500 font-bold'
                        >Read More...</Link></p>
                        : <p>{details}</p>
                }

            </div>
        </div>
    );
};

export default NewsCard;