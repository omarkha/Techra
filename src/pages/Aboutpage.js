import React from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import mypicture from "../media/mypicture2.jpg";
import scrolldown from "../media/scroll-icon.png";
const Aboutpage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section>
          <div className="techra">
            <Fade>
              <h1 className="text-dark">Techra</h1>
              <h2>Software Solutions LLC.</h2>
            </Fade>
            <Bounce>
              <h3 className="mt-5 text-dark"> Scroll Down For More</h3>
              <div
                style={{ backgroundImage: `url(${scrolldown})` }}
                className="scroll-icon"
              />
            </Bounce>
          </div>

          <Fade bottom>
            <div className="companymission">
              <h3 className="text-primary my-5">Our Mission</h3>
              <p className="h4">
                Techra Software Solutions aims to help new entrepreneurs build
                high-quality software applications and reach their lifelong
                dreams.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="companymission">
              <h3 className="text-primary my-5">Our Vision</h3>
              <p className="h4">
                We work steadily to promote an all encompassing package of
                solutions for benevelonet entrepreneurs so that they grow fast
                and grow big.
              </p>
            </div>
          </Fade>
          <Zoom>
            <div className="mystory">
              <h3 className="text-primary my-5">Our Story</h3>
              <p className="subhead">
                <img
                  style={{
                    width: "233px",
                    borderRadius: "50%",
                    boxShadow: " 0 0 21px #000",
                    float: "right",
                    margin: "21px",
                    transform: "rotate(-5deg)",
                  }}
                  src={mypicture}
                  alt="A picture of Omar Khalil, CEO of Techra"
                />{" "}
                <br />
                Hi There. Thanks for your interest!
                <br />
                <br />
                I’m Omar Khalil, the CEO of Techra Software Solutions.
                <br />
                <br />
                When I was an 8 year old child, my mother used to bring me and
                my brother to Internet Cafes in the country of Jordan. There she
                communicated with her friends in America.
                <br />
                <br />
                Ever since then I was hooked on how websites were built. I
                didn’t know how they were made, but I was determined to find
                out. So I would try to make websites with Word documents and I
                had some pretty good attempts.
                <br />
                <br />
                Then we arrived in the US in 2009, I was 12 years old at the
                time. I finished Middle School and began High School.
                <br />
                <br />
                At ninth grade I started to take my interest in Software
                Engineering more seriously. So I started learning HTML,
                JavaScript, and CSS. I started to be able to make web
                applications. It was a great feeling and a boost of confidence
                for me in the new country I was living in.
                <br />
                <br />
                After learning web development, I took interest in how desktop
                software was made. I didn’t know what GUIs were, but I knew
                there was a programming language called Java that I could use to
                make Graphical User Interfaces which are basically desktop
                programs. I searched YouTube to find a channel called
                ‘thenewboston’ and I would like to thank Bucky, the owner, for
                his fantastic way of teaching.
                <br />
                <br />
                By learning Java, I made multiple applications. Such as a GUI
                (Desktop Application) that assessed the performance of soccer
                players during soccer matches. The purpose of the app was to
                show players how they did, their progress from game to game, and
                to motivate them to improve their quality.
                <br />
                <br />
                Step by step, I started to become a Software Engineer. I took
                classes in Computer Science and Graphics Design in high school.
                And in the year 2022 I completed General Assembly’s Software
                Engineering Bootcamp.
                <br />
                <br />
                I met many cool like-minded people there, and I started to
                network with many other developers on Linkedin. I met many
                talented and experienced software engineers who I worked with
                and they taught me many things.
                <br />
                <br />
                As an extroverted person, networking is a delightful experience
                for me and I built a big network of professionals from various
                backgrounds and professions.
                <br />
                <br />
                I guess I have an entrepreneurial spirit. I went to college for
                entrepreneurship after high school but I decided to drop out.
                The reason being was that I heard many people say that a degree
                in entrepreneurship is basically useless. To be an entrepreneur
                you don’t need to go to college. Most successful entrepreneurs
                are self-taught and self-made.
                <br />
                <br />
                With an entrepreneurial spirit, a passion for Software
                Engineering and a great network, I decided to launch Techra.
              </p>
            </div>
          </Zoom>
        </section>
      </div>
    </div>
  );
};

export default Aboutpage;
