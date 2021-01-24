import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from './images/car1.jpeg';
import Img2 from './images/car2.jpeg';
import Img3 from './images/car3.jpeg';
import Img4 from './images/car4.jpeg';
import Img5 from './images/car5.jpeg';
import Img6 from './images/car6.jpeg';
import Img7 from './images/cars.jpeg';
import Img8 from './images/car8.jpeg';

function App() {

  const [index, setIndex]= useState(4)

  const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
  }
  return (
    <div>
      <Carousel fade="true" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Img1}  alt="First" style={{height:"100vh"}}/>
          <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Scenery 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/*     */}
        <Carousel.Item>
          <img className="d-block w-100" src={Img2}  alt="Second" style={{height:"100vh"}}/>
          <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Scenery 2</p>
          </Carousel.Caption>
        </Carousel.Item>
         {/*     */}
        <Carousel.Item>
          <img className="d-block w-100" src={Img3}  alt="Third" style={{height:"100vh"}}/>
          <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Scenery 3</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/*     */}
        <Carousel.Item>
          <img className="d-block w-100" src={Img4}  alt="First" style={{height:"100vh"}}/>
          <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Scenery 4</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/*     */}
        <Carousel.Item>
          <img className="d-block w-100" src={Img5}  alt="Second" style={{height:"100vh"}}/>
          <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Scenery 5</p>
          </Carousel.Caption>
        </Carousel.Item>
         {/*     */}
        <Carousel.Item>
          <img className="d-block w-100" src={Img6}  alt="Third" style={{height:"100vh"}}/>
          <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Scenery 6</p>
          </Carousel.Caption>
        </Carousel.Item>
         {/*     */}
         <Carousel.Item>
          <img className="d-block w-100" src={Img7}  alt="Third" style={{height:"100vh"}}/>
          <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Scenery 7</p>
          </Carousel.Caption>
        </Carousel.Item>
         {/*     */}
         <Carousel.Item>
          <img className="d-block w-100" src={Img8}  alt="Third" style={{height:"100vh"}}/>
          <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Scenery 8</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
