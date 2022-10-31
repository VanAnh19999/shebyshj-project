import { Carousel } from 'antd'
import React from 'react'

const Slider = () => {
  return (
    <div>
         <div className="main__slider">
          <Carousel className="hero_slider" autoplay>
            <div>
              <img
                src="https://theme.hstatic.net/1000370235/1000472578/14/slideshow_3.jpg?v=870"
                alt="pic1"
              />
            </div>
            <div>
              <img
                src="https://theme.hstatic.net/1000370235/1000472578/14/slideshow_2.jpg?v=870"
                alt="pic2"
              />
            </div>
            <div>
              <img
                src="https://theme.hstatic.net/1000370235/1000472578/14/slideshow_3.jpg?v=870"
                alt="pic3"
              />
            </div>
          </Carousel>
        </div>
    </div>
  )
}

export default Slider