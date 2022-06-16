import "./AboutPage.scss";
import me from "../../assets/me.JPG";
import comp from "../../assets/tech.jpg";

function AboutPage() {
  return (
    <div className="about">
      {/* <h2 className="about__title">Brian Bassett</h2> */}
      {/* <div className="about__container">
        <div className="about__info">
          Hello! I am a fullstack engineer from Boston, now living in NYC. After
          graduating with a degree in Finance, I moved to Manhattan to join
          AlphaSights and work as an Associate for more than a year, where I was
          able to work hands on with incredible team members to support large
          management consulting clients. After finishing BrainStation's Web
          Development Bootcamp, I am now looking for my next opportunity to help
          out an engineering team create unique and powerful web applications.
        </div>
        <img className="about__photo" src={me} alt="me" />
      </div>
      <h2 className="about__title">My Background</h2>
      <div className="about__container about__container--reverse">
        <div className="about__info">
          After working in financial planning and moving to sales, I found that
          what I valued most about my experiences came down to two aspects:
          teamwork, and solving complex problems. I have always believed that
          you can achieve significantly more with a cohesive team than by
          yourself, and its a lot more fun! While AlphaSights was a great
          experience, something that I missed from other jobs was using
          analytical/technical skills to build solutions. This often came in the
          form of financial plans, piecing together a client's financial picture
          to build them a plan to achieve their goals.
        </div>
        <img className="about__photo" src={comp} alt="comp" />
      </div>
      <h2 className="about__title">Book Recommendations</h2> */}
      <div className="about__books">
        <div className="about__books-container">
          <span className="about__book-titles">Top 5 NonFiction:</span> <br />
          <span>1. Good to Great - Jim Collins</span>
          <br />
          2. Atomic Habits - James Clear (inspired this list)
          <br />
          <span>3. Free Will - Sam Harris</span>
          <br />
          4. Outliers - Malcolm Gladwell
          <br />
          <span>
            5. Greenlights - Matthew McConaughey (I recommend the audiobook)
          </span>
          <br />
        </div>
        <br />
        <div className="about__books-container about__books-container--margin-left">
          <span className="about__book-titles">
            Top 5 Fantasy/Science Fiction:
          </span>
          <br />
          <span>1. Lord of the Rings Triology - JRR Tolkien</span>
          <br />
          2. Ender's Game - Orson Scott Card
          <br />
          <span> 3. Licanius Trilogy - James Islington</span>
          <br />
          Foundations - Isaac Asimov
          <br />
          <span> 5. LightBringer Series - Brent Weeks</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
