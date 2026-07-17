import React from 'react'

const NewsCard = ({ title, description, url, urlToImage }) => {

    return (
        <div className='rounded w-70 inline-block bg-gray-900 text-white m-3 p-3'>
            <img className='h-30 rounded w-64 object-cover'
                src={urlToImage || "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="}
                onError={(e) => {
                    e.target.src =
                        "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=";
                }}
                alt="News"
            />
            <div>
                <h1 id="my-id" className='font-bold h-15 overflow-auto text-lg text-gray-300 mb-1'>{title}</h1>
                <p className='text-sm font-light mb-2 h-15'>{description ? description.slice(0, 90) : "City park opens today; families enjoy music, food, and sunny weather together. near river."}</p>
                <a className='bg-blue-600 text-white py-1 px-2 font-mono rounded text-sm' href={url}>Read more</a>
            </div>
        </div>
    )
}

export default NewsCard
