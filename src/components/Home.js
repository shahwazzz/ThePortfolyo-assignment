import Counter from "./Counter";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Home = () => {
  const [homeData, setHomeData] = useState({});

  const { data } = useFetch();

  useEffect(() => {
    if (data) {
      setHomeData((prevData) => ({
        ...prevData,
        Name: data.user.about.name,
        designation: data.user.about.title,
        address: data.user.about.address,
        img: data.user.about.avatar.url,
        bio: data.user.about.description,
        numberOfProject: data.user.projects.length,
        numberofyear: data.user.about.exp_year,
      }));
    }
    dataImage();
  }, [data]);

  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/1.jpg" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name">{homeData.Name}</h3>
                <h3 className="job">
                  {homeData.designation} from {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Get a Quote
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.Name}</h3>
            </div>
            <div className="right">
              <div className="image">
                <img src="img/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={homeData.img} />
                <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                  <img src="img/hero/circle.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
