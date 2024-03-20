import { Fragment, useEffect, useState } from "react";
import ServicePopup from "./popup/ServicePopup";
import useFetch from "../hooks/useFetch";

const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const [serviceData, setServiceData] = useState([]);

  const { data } = useFetch();

  useEffect(() => {
    if (data && data.user.services) {
      setServiceData(
        data.user.services.map((service, i) => ({
          name: service.name,
          icon: service.image.url,
          img: `img/service/${i + 1}.jpg`,
          description: [service.desc],
          price: service.charge,
        }))
      );
    }
  }, [data]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.slice(0, 4).map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">{service.description[0].substring(0, 138)}</p>
                      <p className="text">{service.price}</p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
