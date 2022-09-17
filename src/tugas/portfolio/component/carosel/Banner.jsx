import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className=" w-100 " src="boook.jpg" alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className=" w-100 " src="book.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
