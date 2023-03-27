import Card from './components/Card';
import Navbar from './components/Navbar';
import images from './data/images';
function App() {
  return (
    <>
      <Navbar />
      <div className='container text-center mt-5'>
        <h1>Gallery</h1>
        <div className='row mt-5'>
          {images.map((img) => {
            return (
              <Card
                image={img}
                alt='book cover'
                url='https://www.google.com'
                title='my book'
                description='hello the world, this is a great book'
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
