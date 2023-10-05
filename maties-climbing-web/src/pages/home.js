import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
    const background={
        backgroundImage: `url(${require("../docs/homeBG.png")})`,
         backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        maxWidth: '100%',
        height: '1000px',
        maxHeight: '100%',
        position: 'middle',
        opacity: '1'
    }
  return (
    <div
      className="container"
      style={background}
    >
      <div className="row">
        <div className="col">
          <h1>Home Page</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
