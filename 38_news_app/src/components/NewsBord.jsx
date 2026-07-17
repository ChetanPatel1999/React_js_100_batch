import React from 'react'
import NewsCard from './NewsCard'

const NewsBord = (props) => {
  let data = props.articles
  return (
    <div>
      <h1 className='text-center font-bold text-2xl mb-5'>Latest <span className='bg-red-500 text-white py-1 px-2 rounded text-lg'>News</span></h1>
      {data.map((article, index) => {
        return <NewsCard key={index} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} />
      })}

    </div>
  )
}

export default NewsBord
