/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData,useNavigation} from 'react-router-dom';
import ShowBooks from './Showbooks/ShowBooks';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const navigation = useNavigation()
  console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <LoadingSpinner />
  }


    const {books} =useLoaderData();
    return (
        <div className='my-container'>
            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    books.map(books => <ShowBooks 
                        key={books.isbn13}
                        books={books}
                    ></ShowBooks>)
                }
            </div>
            
        </div>
    );
};

export default Books;