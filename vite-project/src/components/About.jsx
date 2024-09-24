import React from "react";

function About() {
  return (
    <section id="about" className="min-h-[300px] p-[64px]">
      <h2>About</h2>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <div
          className="img-container rounded"
          style={{
            backgroundImage: "url(./electrician.avif)",
            backgroundSize:"cover"
          }}
        ></div>
        <div className="content max-w-[500px] text-xl">
          <p>
            We provide certified electricians for all your electrical needs.
          </p>
          <p>
            Our electricians are government license holders and are committed to
            providing safe and reliable electrical services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
