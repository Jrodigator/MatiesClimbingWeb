import { InstagramEmbed } from "react-social-media-embed";

const Insta = () => {
  const post = {
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "2%",
  };
  return (
    <div
      className="d-flex justify-content-center flex-wrap"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <InstagramEmbed
        url="https://www.instagram.com/p/CqVTV3mNUeR/"
        width={350}
        style={post}
      />

      <InstagramEmbed
        url="https://www.instagram.com/p/CyAnIS0NCIX/"
        width={350}
        style={post}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/Cx5Dln2NuI8/"
        width={350}
        style={post}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/Cxxl89zt-XC/"
        width={350}
        style={post}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/CwAhPNONyY2/"
        width={350}
        style={post}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/Cvb5JzPtllY/"
        width={350}
        style={post}
      />
    </div>
  );
};

export default Insta;
