import "bootstrap/dist/css/bootstrap.min.css";
import "./page.css";

function HomePage() {
  const background = {
    backgroundImage: `url(${require("../docs/homeBG.png")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    maxWidth: "100%",
    height: "800px",
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
    marginTop: "19rem",
    marginBottom: "1rem",
    fontweight: "bold",
  };

  return (
    <div>
      {/* LANDING PAGE */}
      <div className="container" style={background}>
        <div className="row">
            <h1 style={title} id="welcome">
              Welcome to Maties Climbing
            </h1>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "60%", marginLeft: "20%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
