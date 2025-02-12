const CardImage = () => { 
    return (

<img 
                  src={`${image}`} 
                  alt="Frame" 
                  className="w-full" 
                  style={{ height: index === 0 ? '300px' : index === 1 ? '250px' : '200px', objectFit: 'cover' }} 
                />

)};

export default CardImage;