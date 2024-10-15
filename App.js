import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

const images = [
  "https://koruna.ua/en/wp-content/uploads/sites/3/2018/04/bukovel.jpg",
  "https://ukrainetrek.com/blog/wp-content/uploads/2011/12/ukrainian-carpathians-landscape-1.jpg",
  "https://starapravda.com.ua/wp-content/uploads/2022/08/scenic-mountains-landscape-after-rain-carpathians-of-ukraine_146671-18431.webp",
  "https://www.mountainiq.com/wp-content/uploads/2019/02/Ladovy-stit.jpg?x83495",
  "https://www.uncover-romania.com/wp-content/uploads/2018/02/taul-tapului-retezat-mountains-1.jpg"
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="box">
      <Carousel
        selectedItem={currentSlide}
        showArrows={false} 
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt="sample_file" src={URL} />
          </div>
        ))}
      </Carousel>

      <div className="buttons">
        <button className="button" onClick={handlePrev}>Вліво</button>
        <button className="button" onClick={handleNext}>Вправо</button>
      </div>
    </div>
  );
}

export default App;


