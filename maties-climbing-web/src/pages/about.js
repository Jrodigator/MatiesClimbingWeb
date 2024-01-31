import "bootstrap/dist/css/bootstrap.min.css";
import "./page.css";
import gymRules from "../docs/MatiesRulesPoster.png"; 

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
    marginTop: "5rem",
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
              style={{title, width: "60%", marginLeft: "20%", marginBottom: "20%" }}
            ></div>
          </div>
          <div>
          <list>
                <ul style={paragraph}>
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
            <ul style={paragraph}>
             <li>Memberships costs are R500 per year for STUDENTS and R650 for NON-STUDENTS</li>
             <li>Day passes are R45 per day, shoes included!</li>
             <li>Payments cna be done via EFT</li>
            </ul>


          <h2 style={subHeading}> Getting there: </h2>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "40%", marginLeft: "30%", marginBottom: "2%" }}
            ></div>
          </div>
           <ul style={paragraph}>
            <li> The bouldering cave (climbing wall) can be found at the far eastern ide of the coetzenberg sports grounds (Past the underwater club and the last cricket field). </li>
          <li> <a href="https://www.google.com/maps/place/Maties+Rock+Climbing+Wall/@-33.9390587,18.8795416,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcdb356f7d64ee9:0x9b190fbd784be7d4!8m2!3d-33.9390587!4d18.8821165!16s%2Fg%2F11j8m3gw4p?entry=ttu">Directions</a></li>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0804571921617!2d18.882116500000002!3d-33.9390587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb356f7d64ee9%3A0x9b190fbd784be7d4!2sMaties%20Rock%20Climbing%20Wall!5e0!3m2!1sen!2sza!4v1705846206758!5m2!1sen!2sza" style={{border: 0,width:"400", height:"300", marginLeft:"40%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </ul>

          <h2 style={subHeading}> Gear Rental: </h2>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "40%", marginLeft: "30%", marginBottom: "2%" }}
            ></div>
          </div>
          <ul style={paragraph}>
          <li>Rent gear through this <a href="https://forms.gle/Kxwq3JsuegHBv1iq5">link</a></li>
          </ul>

          <h2 style={subHeading}>Usefull websites </h2>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "40%", marginLeft: "30%", marginBottom: "2%" }}
            ></div>
          </div>
                <ul>
                        <li>Rocklands: <a href="https://www.rocklands.africa/">https://www.rocklands.africa/</a></li>
                        <li>ClimbingZA Stellenbosch: <a href="https://www.climbing.co.za/wiki/Stellenbosch">https://www.climbing.co.za/wiki/Stellenbosch</a></li>
                        <li>MSCA: <a href="https://stellenbosch.mcsa.org.za/">https://stellenbosch.mcsa.org.za/</a></li>
                        <li>The Crag: <a href="https://www.thecrag.com/en/home">https://www.thecrag.com/en/home</a></li>
                        <li>Stellenbosch Crew Climbing Whatsapp group: <a href="https://chat.whatsapp.com/0t2Bk40PjqO5rsbYWNRpNf">https://chat.whatsapp.com/0t2Bk40PjqO5rsbYWNRpNf</a></li>
                        
                </ul>
        </div>

          <h2 style={subHeading}> Gym Rules: </h2>
          <div className="row">
            <div
              className="custom-separator"
              style={{title, width: "40%", marginLeft: "30%", marginBottom: "2%" }}
            ></div>
          </div>
          <img src={gymRules} marginLeft="20%" width="80%" height="60%"/>
      </div>
    </div>
  </div>
  );
}

export default AboutPage;
