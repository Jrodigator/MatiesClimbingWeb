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
    height: "900px",
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
            <h1 style={title} id="error">
              404: Page Not Found 
            </h1>
            <div
              className="custom-separator"
              style={{title, width: "60%", marginLeft: "20%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="vr"></div>
      {/* SCROLL SEC 1 PAGE */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 style={title}>TEST Page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
