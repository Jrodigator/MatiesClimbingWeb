import "bootstrap/dist/css/bootstrap.min.css";
import "./page.css";
import rocklandsBoulderingPieter from "../docs/Rocklands-bouldering-Lumos-Photography.jpg";
import rocklandsBouldering from "../docs/Rocklands-bouldering-sky-Lumos-Photography.jpg";
import waterWorld from "../docs/Waterworld-Montagu-Lumos-Photography.jpg";
import wallShed from "../docs/wall-shed.jpg"
import wallComp from "../docs/DSCF8078-1.jpg"

function HomePage() {
  const title = {
    width: "60%",
    marginLeft: "20%",
    color: "black",
    textAlign: "center",
    textSize: "5rem",
    marginTop: "5rem",
    marginBottom: "1rem",
    fontweight: "bold",
  };

  const gallery = {
        width: "32%",
        height: "auto",
        margin: "3rem",
        border: "1px solid #777",
  };

  const gallery2 = {
        width: "30%",
        height: "auto",
        padding: "1px",
        border: "1px solid #777",
        marginLeft: "10%",
  };

  const space = {
        padding: "10px",
  };

  return (
    <div>
      <div className="container">
        <div className="row">
            <h1 style={title} id="welcome">
              Maties Photo Gallery
            </h1>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "60%", marginLeft: "20%" }}
            ></div>
          <gallery>
                <img style={gallery} src={wallShed} alt="The Wall"/>
                <space style={space}/>
                <img style={gallery} src={rocklandsBouldering} />
                <space style={space}/>
                <img style={gallery} src={waterWorld} alt="rocklands boludering"/>
          </gallery>
          <space>
                <p></p>
          </space>
          <gallery>
                <img style={gallery2} src={rocklandsBoulderingPieter} alt="rocklands boludering"/>
                <img style={gallery2} src={wallComp} alt="Comp at the wall"/>
          </gallery>
          <space>
                <p></p>
          </space>
          <gallery>
                <img style={gallery} src={wallShed} alt="The Wall"/>
                <space style={space}/>
                <img style={gallery} src={rocklandsBouldering} />
                <space style={space}/>
                <img style={gallery} src={waterWorld} alt="rocklands boludering"/>
          </gallery>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
