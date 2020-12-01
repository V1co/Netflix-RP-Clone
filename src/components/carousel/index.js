import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Car({ children }) {
    const responsive = {
        desktopLarge: {
          breakpoint: { max: 3000, min: 1400 },
          items: 6,
          slidesToSlide: 1 // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 1399, min: 991 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 990, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return <Carousel responsive={responsive}>
                {children}
            </Carousel>
}