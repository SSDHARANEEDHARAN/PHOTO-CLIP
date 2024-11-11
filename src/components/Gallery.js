import './Gallery.css';

function Gallery() {
  const images = [
    { src: require('../asset/pic (8).jpg'), name: 'Image 1', description: 'A national flag represents a countrys identity, pride, and values.' },
    { src: require('../asset/pic (2).jpg'), name: 'Image 2', description: 'A king is a male ruler who leads and protects his people.'},
    { src: require('../asset/pic (3).jpg'), name: 'Image 3', description: 'A truck load is the amount of goods a truck can carry.' },
    { src: require('../asset/pic (4).jpg'), name: 'Image 4', description: 'Craft is the skill of making things by hand with creativity and precision.' },
    { src: require('../asset/pic (5).jpg'), name: 'Image 5', description: 'Craft design is the art of creating handmade items with creative patterns and details.' },
    { src: require('../asset/pic (6).jpg'), name: 'Image 6', description: 'Electronics are devices that use electricity to perform functions like communication or automation.' },
    { src: require('../asset/pic (7).jpg'), name: 'Image 7', description: 'A carton is a strong, lightweight container used for packaging and storing items.' },
    { src: require('../asset/pic (1).jpg'), name: 'Image 8', description: 'A queen is a female ruler who leads and represents her country.' }
  ];
  
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="image-card" key={index}>
          <img src={image.src} alt={image.name} className="gallery-image" />
          <div className="image-info">
            <p className="image-description">{image.description}</p>
            <a href={image.src} download={image.name} className="download-button">
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
