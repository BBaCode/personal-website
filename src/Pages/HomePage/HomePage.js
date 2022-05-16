import "./HomePage.scss";
import propic from "../../assets/propic.png";

function HomePage() {
  return (
    <div className="home">
      <div className="home__photo-container">
        <img className="home__photo" src={propic} alt="me" />
      </div>
      <div className="home__info-container">
        <p className="home__info-small">Hello and welcome. My name is</p>
        <p className="home__info-name">Brian Bassett.</p>
        <p className="home__info-small">
          Software developer, book lover, gamer and fitness ethusiast. Thanks
          for checking me out.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
