import { Fragment, useState, useEffect } from "react";
import DetailsPopup from "./popup/DetailsPopup";
import useFetch from "../hooks/useFetch";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);

  const [portfolioData, setPortfolioData] = useState([]);

  const { data } = useFetch();

  useEffect(() => {
    if (data && data.user.projects) {
      const projects = data.user.projects
        .filter((skill) => skill.enabled)
        .map((project) => ({
          img: project.image.url,
          name: project.title,
          seq: project.sequence,
          description: project.description,
          githuburl: project.githuburl,
          liveurl: project.liveurl,
          techstack: project.techStack,
        }));

      const sortedProjects = projects.sort((a, b) => a.seq - b.seq);
      setPortfolioData(sortedProjects);
    }
  }, [data]);

  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
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
                {portfolioData &&
                  portfolioData.map((Portfolio, i) => (
                    <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                      <div className="list_inner">
                        <div
                          className="background_image"
                          data-img-url={Portfolio.img}
                        />
                        <div className="content">
                          <div className="details">
                            <span className="category">
                              <a href="#">Youtube</a>
                            </span>
                            <h3 className="title">
                              <a href="#">{Portfolio.name}</a>
                            </h3>
                            <span className="view_project btn">
                              <a href={Portfolio.liveurl}>
                                View Project <i className="icon-right-big" />
                              </a>
                            </span>
                            <span className="view_project btn">
                              <a href={Portfolio.githuburl}>
                                Github <i className="icon-right-big" />
                              </a>
                            </span>
                            ac
                          </div>
                        </div>
                        <div className="overlay" />
                        <a
                          className="devman_tm_full_link portfolio_popup c-pointer"
                          onClick={() => setPopup(true)}
                        />
                      </div>
                    </li>
                  ))}
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
