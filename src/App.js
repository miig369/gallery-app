import Card from './components/Card';
import Navbar from './components/Navbar';
import images from './data/images';
import UploadForm from './components/UploadForm';
import React, { useState } from 'react';
function App() {
  const [items, setItems] = useState(images);
  function handleClick() {
    setItems([
      'https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/9/7/9780141346847_1.jpg',
      ...items,
    ]);
  }
  return (
    <>
      <Navbar />
      <div className='container text-center mt-5'>
        <button className='btn btn-success float-end' onClick={handleClick}>
          + Add
        </button>
        <h1>Gallery</h1>

        <UploadForm />

        <div className='row mt-5'>
          {items.map((img, index) => {
            return (
              <Card
                key={index}
                image={img}
                alt='book cover'
                url='https://www.google.com'
                title='my book'
                description='hello the world, this is a great book'
                onClick={() => {
                  console.log(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
