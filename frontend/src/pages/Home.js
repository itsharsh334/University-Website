import React from "react";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
function Home() {
  console.log("working");

  return (
    <div className="home">
      <h1 className="mainHeading">BITS Pilani</h1>
      <div className="pad3 row">
        <div className="col-md-6">
          <img
            src="https://www.financialexpress.com/wp-content/uploads/2019/06/BITS-PILANI-620x400.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h1>About BITS Pilani</h1>
          <p>
            BITS mission is to advance knowledge and educate students in
            science, technology, and other areas of scholarship that will best
            serve the nation and the world in the 21st century. The Institute is
            committed to generating, disseminating, and preserving knowledge,
            and to working with others to bring this knowledge to bear on the
            world's great challenges. BITS is dedicated to providing its
            students with an education that combines rigorous academic study and
            the excitement of discovery with the support and intellectual
            stimulation of a diverse campus community. We seek to develop in
            each member of the BITS community the ability and passion to work
            wisely, creatively, and effectively for the betterment of humankind.
          </p>
        </div>
      </div>
      <div className="homec">
        <div className="">
          <section id="testimonials" className="pad3">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <img className="pebbles" src={pic2} alt="" />
                    </div>
                    <div className="col-md-6">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis laudantium, sequi cumque nemo sint aliquid
                        sed eos fuga quas ea, temporibus quam ducimus tenetur
                        aperiam rerum veritatis velit nisi voluptas!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <img className="pebbles" src={pic3} alt="" />
                    </div>
                    <div className="col-md-6">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis laudantium, sequi cumque nemo sint aliquid
                        sed eos fuga quas ea, temporibus quam ducimus tenetur
                        aperiam rerum veritatis velit nisi voluptas!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev carbutton"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next carbutton"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Home;
