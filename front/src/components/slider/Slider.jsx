import { Fragment, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './mock.slider.data';
import './Slider.scss';

const lengthData = sliderData.length;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const showNextSlide = () =>
    setCurrentSlide(currentSlide < lengthData - 1 ? currentSlide + 1 : 0);
  const showPrevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? lengthData - 1 : currentSlide - 1);
  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={showPrevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={showNextSlide} />
      {sliderData.map(({ desc, heading, image }, index) => (
        <div
          className={index === currentSlide ? 'slide current' : 'slide'}
          key={index}
        >
          {index === currentSlide && (
            <Fragment>
              <img src={image} alt="image" />
              <div className="content">
                <h2>{heading}</h2>
                <p>{desc}</p>
                <hr />
                <a href="#product" className="--btn --btn-primary">
                  Shop Now
                </a>
              </div>
            </Fragment>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
