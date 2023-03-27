const Card = ({ image, alt, url, title, description }) => {
  return (
    <div className='col mb-4'>
      <div className='card text-start' style={{ width: '18rem' }}>
        <img src={image} className='card-img-top' alt={alt} />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <a href={url} className='btn btn-primary'>
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
