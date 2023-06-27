/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const ShowBooks = ({books}) => {
    console.log(books)
    return (
        <Link to={`../books/${books.isbn13}`}>
            <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2'>
            <img src={books.image} alt=""  className='w-full h-70 md:h-64 xl:h-80 '/>

            <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded shadow-lg hover:shadow-2px  text-gray-300 absolute inset-0 w-[90%] p-3 flex flex-col'>
              
                <h1>{books.title}</h1>
                <br />
                <br />
                <p>{books.subtitle.substring(0,50)}......</p>
                <br />
                <p className='mt-auto'>Price : {books.price}</p>
                
            </div>
        </div>
        </Link>
    );
};

export default ShowBooks;