const HeroSection = () => {
  return (
    <>
      <div
        className="hero "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1584592487914-a29c64f25887?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "400px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Empowering Lives, Building Communities{" "}
            </h1>
            <p className="mb-5">
              Join us in making a difference. Together, we can build a stronger,
              more compassionate community.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
