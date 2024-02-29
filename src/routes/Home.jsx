import "./Home.css";

const Home = () => {
  return (
    <h1 className="home-page">
      Home Page
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
    </h1>
  );
};

export default Home;
