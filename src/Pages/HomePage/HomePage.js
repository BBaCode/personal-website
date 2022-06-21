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
        to bring applications, websites and even games to life. Currently
        working on mobile applications, financial literacy and investment apps,
        and generally taking a deeper dive into Computer Science!
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
