import "./AboutPage.scss";
import me from "../../assets/me.JPG";
import comp from "../../assets/tech.jpg";

function AboutPage() {
  return (
    <div className="about">
      <div className="about__books">
        <div className="about__book-container">
          <p className="about__book-titles">Top 5 NonFiction:</p>
          <p className="about__book-list-items">
            1. Good to Great - Jim Collins
          </p>

          <p className="about__book-list-items">
            2. Atomic Habits - James Clear
          </p>

          <p className="about__book-list-items">3. Free Will - Sam Harris</p>

          <p className="about__book-list-items">
            4. Outliers - Malcolm Gladwell
          </p>

          <p className="about__book-list-items about__book-list-items--border">
            5. Greenlights - Matthew McConaughey
          </p>
        </div>

        <div className="about__book-container about__book-container--margin-left">
          <p className="about__book-titles">Top 5 Fantasy/Science Fiction:</p>

          <p className="about__book-list-items">
            1. Lord of the Rings Triology - JRR Tolkien
          </p>

          <p className="about__book-list-items">
            2. Ender's Game - Orson Scott Card
          </p>

          <p className="about__book-list-items">
            {" "}
            3. Licanius Trilogy - James Islington
          </p>

          <p className="about__book-list-items">
            {" "}
            4. Foundations - Isaac Asimov
          </p>

          <p className="about__book-list-items about__book-list-items--border">
            {" "}
            5. LightBringer Series - Brent Weeks
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
