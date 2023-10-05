import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={imgAlt} className="card-image" />
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <a href={link} className="card-button">
        {buttonText}
      </a>
    </div>
  );
};
