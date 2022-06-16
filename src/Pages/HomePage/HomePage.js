import "./HomePage.scss";
import me from "../../assets/me.JPG";
import nyc from "../../assets/nyc-skyline.jpg";
import CustomizedAccordions from "../../Components/CustomizedAccordions/CustomizedAccordions";
import AboutPage from "../AboutPage/AboutPage";

function HomePage() {
  return (
    <div className="home">
      <div className="home__intro">
        <div className="home__info-container">
          <p className="home__info-subcontainer">
            Software developer, book lover, gamer and fitness ethusiast.
          </p>
        </div>

        <img className="home__photo-self" src={me} alt="me" />
      </div>
      <p className="home__about">
        Born and raised outside of Boston, now lighting up New York City. I love
        to bring applications, websites and even games to life. Looking to
        support an innovative team by increasing user experience with
        pixel-perfect designs and cutting edge functionality. Want to reach out?
        Check my links at the bottom of the page or feel free to email me at
        brianbsstt@gmail.com.
      </p>
      <div className="home__photo-container">
        <img className="home__photo-landscape" src={nyc} alt="me" />
      </div>
      <div className="home__work">
        <h2 className="home__work-title">Work</h2>
        <CustomizedAccordions />
      </div>
      <div className="home__books">
        <h2 className="home__books-title">Book Recommendations</h2>
        <AboutPage />
      </div>
    </div>
  );
}

export default HomePage;
