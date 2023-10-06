import "bootstrap/dist/css/bootstrap.min.css";
import "./page.css";
import InstagramFeed from "../components/instaFeed";

function HomePage() {
  const background = {
    backgroundImage: `url(${require("../docs/homeBG.png")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    maxWidth: "100%",
    height: "1000px",
    maxHeight: "100%",
    position: "middle",
    opacity: "1",
  };
  const bg2 = {
    backgroundImage: `url(${require("../docs/bg3.jpg")})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "repeat-y",
    resizeMode: "repeat",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "100%",
    position: "middle",
    opacity: "1",
  };

  const title = {
    width: "60%",
    marginLeft: "20%",
    color: "white",
    textAlign: "center",
    textSize: "5rem",
    marginTop: "20rem",
    marginBottom: "1rem",
    fontweight: "bold",
  };

  return (
    <div>
      {/* LANDING PAGE */}
      <div className="container" style={background}>
        <div className="row">
          <div className="col">
            <h1 style={title} id="welcome">
              Welcome to Maties Climbing
            </h1>
            <div
              className="custom-separator"
              style={{ title, width: "60%", marginLeft: "20%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="vr"></div>
      {/* SCROLL SEC 1 PAGE */}
      <h1
        style={{
          color: "black",
          textAlign: "center",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Recent Feed{" "}
      </h1>
      <div
        className="custom-separator"
        style={{ title, width: "30%", marginLeft: "35%", marginBottom: "1rem" }}
      ></div>
      <div className="container" style={bg2}>
        <div className="row">
          <div className="col" style={{ marginTop: "3rem" }}>
            <InstagramFeed></InstagramFeed> {/* INSTAGRAM FEED COMPONENT */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
