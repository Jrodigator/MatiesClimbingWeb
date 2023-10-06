import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../components/Card.js";
import "./page.css";

function NewsPage() {
  const background = {
    backgroundImage: `url(${require("../docs/GO2.jpg")})`,
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
  const title = {
    width: "20%",
    marginLeft: "40%",
    color: "white",
    textAlign: "center",
    textSize: "5%",
    marginTop: "5%",
    marginBottom: "5%",
    fontweight: "bold",
  };
  return (
    <div className="container" style={background}>
      <div className="row">
        <h2 className="d-flex justify-content-center" style={title}>
          Our News Letters{" "}
        </h2>
        <div className="row">
          <Card
            imgSrc={require("../docs/4octimg.png")}
            imgAlt="Image"
            title="Oct 4th"
            description="News Letter for the week 04/10/2023"
            buttonText="View Newsletter"
            link={require("../docs/4octnews.pdf")}
          ></Card>
          <Card
            imgSrc={require("../docs/4octimg.png")}
            title="Sept 27th"
            description="News Letter for the week 27/09/2023"
            buttonText="View Newsletter"
            link={require("../docs/4octnews.pdf")}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
