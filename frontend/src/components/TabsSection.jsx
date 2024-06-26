import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Hero1 from "../assets/images/hero/1.jpg";
import user from "../assets/images/user.jpg";
import { FaRegComment } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";

const TabsSection = () => {
  return (
    <section className="section tabsection">
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>Enterteniment</Tab>
            <Tab>World</Tab>
            <Tab>Life Style</Tab>
            <Tab>Technology</Tab>
            <Tab>Travel</Tab>
          </TabList>

          <TabPanel>
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <div className="image-profile d-flex align-items-center mb-1">
                      <div className="img">
                        <img src={user} alt="" />
                      </div>
                      <div className="text-pr">
                        <h4>
                          <span>By</span> Manisha
                        </h4>
                        <p className="comment">
                          <IoTimerOutline /> 07 April 2024
                        </p>
                      </div>
                    </div>
                    <h2 className="mb-1">Any content 1</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam quis quos rerum nisi deserunt esse laboriosam,
                      dolorem illo itaque, nobis modi.
                    </p>

                    <span className="comment mt-1">
                      <FaRegComment /> 2 comments
                    </span>
                    <div className="mt-2">
                      <a href="#" className="button">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <div className="image-profile d-flex align-items-center mb-1">
                      <div className="img">
                        <img src={user} alt="" />
                      </div>
                      <div className="text-pr">
                        <h4>
                          <span>By</span> Manisha
                        </h4>
                        <p className="comment">
                          <IoTimerOutline /> 07 April 2024
                        </p>
                      </div>
                    </div>
                    <h2 className="mb-1">Any content 1</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam quis quos rerum nisi deserunt esse laboriosam,
                      dolorem illo itaque, nobis modi.
                    </p>

                    <span className="comment mt-1">
                      <FaRegComment /> 2 comments
                    </span>
                    <div className="mt-2">
                      <a href="#" className="button">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <div className="d-flex justify-content-between">
                      <span className="comment">
                        <FaRegComment /> 2 comments
                      </span>
                      <span className="comment">
                        <IoTimerOutline /> 08 April 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <div className="d-flex justify-content-between">
                      <span className="comment">
                        <FaRegComment /> 2 comments
                      </span>
                      <span className="comment">
                        <IoTimerOutline /> 08 April 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <div className="d-flex justify-content-between">
                      <span className="comment">
                        <FaRegComment /> 2 comments
                      </span>
                      <span className="comment">
                        <IoTimerOutline /> 08 April 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <div className="image-profile d-flex align-items-center mb-1">
                      <div className="img">
                        <img src={user} alt="" />
                      </div>
                      <div className="text-pr">
                        <h4>
                          <span>By</span> Manisha
                        </h4>
                        <p className="comment">
                          <IoTimerOutline /> 07 April 2024
                        </p>
                      </div>
                    </div>
                    <h2 className="mb-1">Any content 1</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam quis quos rerum nisi deserunt esse laboriosam,
                      dolorem illo itaque, nobis modi et.
                    </p>

                    <span className="comment mt-1">
                      <FaRegComment /> 2 comments
                    </span>
                    <div className="mt-2">
                      <a href="#" className="button">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <div className="image-profile d-flex align-items-center mb-1">
                      <div className="img">
                        <img src={user} alt="" />
                      </div>
                      <div className="text-pr">
                        <h4>
                          <span>By</span> Manisha
                        </h4>
                        <p className="comment">
                          <IoTimerOutline /> 07 April 2024
                        </p>
                      </div>
                    </div>
                    <h2 className="mb-1">Any content 1</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam quis quos rerum nisi deserunt esse laboriosam,
                      dolorem illo itaque, nobis modi.
                    </p>

                    <span className="comment mt-1">
                      <FaRegComment /> 2 comments
                    </span>
                    <div className="mt-2">
                      <a href="#" className="button">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <div className="image-profile d-flex align-items-center mb-1">
                      <div className="img">
                        <img src={user} alt="" />
                      </div>
                      <div className="text-pr">
                        <h4>
                          <span>By</span> Manisha
                        </h4>
                        <p className="comment">
                          <IoTimerOutline /> 07 April 2024
                        </p>
                      </div>
                    </div>
                    <h2 className="mb-1">Any content 1</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam quis quos rerum nisi deserunt esse laboriosam,
                      dolorem illo itaque, nobis modi.
                    </p>

                    <span className="comment mt-1">
                      <FaRegComment /> 2 comments
                    </span>
                    <div className="mt-2">
                      <a href="#" className="button">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
                <div className="side-card mt-2 bg-dark-alt d-flex align-items-center">
                  <div className="image">
                    <img src={Hero1} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="mb-1">Any content 1</h2>
                    <span className="comment">
                      <FaRegComment /> 2 comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default TabsSection;
