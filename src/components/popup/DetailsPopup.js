import { formatDate } from "../../utilits";
import Popup from "./Popup";
const DetailsPopup = ({ data, open, close }) => {

  const startDate = new Date(data.startDate)

  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url="img/portfolio/4.jpg"
            style={{ backgroundImage: 'url("img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{data.jobTitle}</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              {data.summary}
            </p>
           {
            data && data.bulletPoints && data.bulletPoints.map((point) => (
              <p>
                {point}
              </p>
            ))
           }
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>Alvaro Morata</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">Detail</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>{formatDate(startDate)}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/1.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/2.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/3.jpg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;