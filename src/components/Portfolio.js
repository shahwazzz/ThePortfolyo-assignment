import { Fragment, useState, useEffect } from "react";
import DetailsPopup from "./popup/DetailsPopup";
import useFetch from "../hooks/useFetch";

const Portfolio = () => {
  const [activeData, setActiveData] = useState({});
  const [popup, setPopup] = useState(false);

  const [portfolioData, setPortfolioData] = useState([]);

  const { data } = useFetch();

  useEffect(() => {
    if (data && data.user.projects) {
      const timelineData = data.user.timeline
        .filter((timeline) => timeline.enabled)
        .map((info) => ({
          companyName: info.company_name,
          jobTitle: info.jobTitle,
          seq: info.sequence,
          summary: info.summary,
          jobLocation: info.jobLocation,
          startDate: info.startDate,
          bulletPoints: info.bulletPoints,  
        }));

        setPortfolioData(timelineData)

    }
  }, [data]);

  console.log(data)

  return (
    <Fragment>
    <DetailsPopup open={popup} close={() => setPopup(false)} data={activeData} />
    <div className="devman_tm_section" id="portfolio">
      <div className="devman_tm_portfolio">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="portfolio_list">
            <ul>
              {
                portfolioData.map((info) => (
                  <li className="wow fadeInUp" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="background_image"
                    data-img-url="img/portfolio/1.jpg"
                  />
                  <div className="content">
                    <div className="details">
                      <span className="category">
                        <a href="#">Youtube</a>
                      </span>
                      <h3 className="title">
                        <a href="#">
                          {info.jobTitle} for
                          <br /> {info.companyName}
                        </a>
                      </h3>
                      <span className="view_project">
                        <a href="#">
                          View Project <i className="icon-right-big" />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="overlay" />
                  <a
                     className="devman_tm_full_link portfolio_popup c-pointer"
                     onClick={() => {
                      setActiveData(info);
                      setPopup(true)
                    }}
                  />
                </div>
              </li>
                ))
              }
              <div
                className="shape_1 moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <div
                className="shape_2 moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  );
};
export default Portfolio;
