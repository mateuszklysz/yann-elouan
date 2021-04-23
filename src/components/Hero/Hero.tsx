import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__name">Yann Elouan</h1>
      <h2 className="hero__slogan">imagine more</h2>
      <video className="hero__video" autoPlay loop>
        <source src="videos/1.WEBM" type="video/webm" />
      </video>
    </section>
  );
};

export default Hero;
