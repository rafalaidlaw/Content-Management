import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Allow me to introduce myself, I am Rafael; front-end developer,
            graphic designer, animator and small time business owner.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Rafael Splash Image" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
