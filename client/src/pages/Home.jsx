 import "./Home.css";
 import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Last-Minute_Notes</h1>
              <p>
                Are you ready to get to the next step?Join us. We provide various services
              </p>
              {/* <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div> */}
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/assets/hi.jpg" 
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
          <img
  src={process.env.PUBLIC_URL + '/assets/hi.jpg'}
  alt="coding together"
  width="400"
  height="500"
/>
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient roadmap for placement.
            </p>
            <div className="btn btn-group">
            <NavLink to="/service">
                <button className="btn secondary-btn">Get Started</button>
                </NavLink>
              <NavLink to="/contact">
                <button className="btn">Connect now</button>
                </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};