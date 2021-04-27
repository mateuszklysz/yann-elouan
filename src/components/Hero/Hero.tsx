import { useContext } from "react";
import { LoadedContext } from "../../App";
import "./Hero.scss";

const Hero = () => {
  const { setLoaded } = useContext(LoadedContext);

  return (
    <section className="hero">
      <h1 className="hero__name">
        Yann
        <br /> Elouan
      </h1>
      <video
        className="hero__video"
        onLoadedData={(e) => setLoaded(true)}
        autoPlay
        playsInline
        loop
      >
        <source src="videos/1.WEBM" type="video/webm" />
      </video>
    </section>
  );
};

export default Hero;
