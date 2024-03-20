import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";
import useFetch from "../hooks/useFetch";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const { data } = useFetch();

  useEffect(() => {
    dataImage();
    imgToSVG();
  }, [data]);

  useEffect(() => {
    if (data && data.user.testimonials) {
      const testimonials = data.user.testimonials
        .filter((testimonial) => testimonial.enabled)
        .map((testimonial) => ({
          image: testimonial.image.url,
          name: testimonial.name,
          position: testimonial.position,
          review: testimonial.review,
        }));

      setTestimonialsData(testimonials);
    }
  }, [data]);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              {testimonialsData &&
                testimonialsData.map((testimonial, i) => (
                  <SwiperSlide key={i}>
                    <div className="list_inner">
                      <img className="svg" src="img/svg/quote.svg" alt="" />
                      <p className="text">{testimonial.review}</p>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url={testimonial.image}
                          />
                        </div>
                        <div className="short">
                          <h3>{testimonial.name}</h3>
                          <span>{testimonial.position}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              <div className="owl-dots"></div>
            </Swiper>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
