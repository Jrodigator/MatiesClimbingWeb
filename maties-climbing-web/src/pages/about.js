import "bootstrap/dist/css/bootstrap.min.css";
import "./page.css";

function AboutPage() {
  const background = {
    backgroundImage: `url(${require("../docs/DSCF8141.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    maxWidth: "100%",
    height: "400px",
    maxHeight: "40%",
    position: "middle",
    opacity: "1",
  };
  const title = {
    width: "60%",
    marginLeft: "20%",
    color: "white",
    textAlign: "center",
    textSize: "5rem",
    marginTop: "12rem",
    marginBottom: "1rem",
    fontweight: "bold",
  };
  const paragraph = {
    color: "Black",
    textSize: "3rem"
  };

  const subHeading = {
   // width: "40%",
    marginLeft: "2%",
    marginBottom: "0.1rem",
    //textDecoration: "underline",
    color: "Blue",
    textAlign: "center",
    textSize: "4rem",
    fontweight: "bold",
  };

  return (
    <div>
      <div className="container" style={background}>
        <div className="row">
            <h1 style={title} id="welcome">
              Maties climbing: The home of rock climbing in Stellenbosch
            </h1>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "60%", marginLeft: "20%", marginBottom: "10%" }}
            ></div>
          </div>
          <div>
          <list style={paragraph}>
                <ul>
                        <li>Maties climbing is open to anyone interested in Rock Climbing</li>
                        <li>We are a registered sport at the University and cater for beginners as wel as experienced climbers</li>
                        <li>The climbing wall has 24/7 access for members</li>
                        <li>Guests are also welcome to try it out - committee members will be present between 16:30-19:00 (Mon-Thurs) </li>
                        <li>Climbers under 18 to be supervised and spotted by guardians </li>
                        
                </ul>
          </list>
          <h2 style={subHeading}> Fees: </h2>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "40%", marginLeft: "30%", marginBottom: "2%" }}
            ></div>
          </div>
            <ul>
             <li>Memberships costs are R500 per year for STUDENTS and R650 for NON-STUDENTS</li>
             <li>Day passes are R45 per day, shoes included!</li>
             <li>Payments cna be done via EFT</li>
            </ul>


          <h2 style={subHeading}> Getting there: </h2>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "60%", marginLeft: "20%", marginBottom: "10%" }}
            ></div>
          </div>
          <ul>
            <li> The bouldering cave (climbing wall) can be found at the far eastern ide of the coetzenberg sports grounds (Past the underwater club and the last cricket field). </li>
          <li> <a href="https://maps.google.com">Directions</a></li>
          </ul>
          <h2 style={subHeading}> Gym Rules: </h2>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "60%", marginLeft: "20%", marginBottom: "10%" }}
            ></div>
          </div>
          <img 
          src="https://lh4.googleusercontent.com/AnT4DcDm9OU8KLBGv-cMK5fmcHbblAedpZiZeEbW4F5_pb-AcBSfo4oSqQAbxc0h_YGNsTuHKIDh_aGoAJIZHj0kIpfoESU3XGeFbT1JQZZB5nxgm8AHSaJjw4R0hDOT3w=w1280" marginLeft="20%" width="80%" height="60%"/>
          <h2 style={subHeading}> Gear Rental: </h2>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "60%", marginLeft: "20%", marginBottom: "10%" }}
            ></div>
          <ul>
          <li>Rent gaer through this <a href="https://">link</a></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutPage;
