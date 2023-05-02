import React from "react";
import { Bounce, Fade, Flip, Zoom } from "react-reveal";
import introbg from "../media/bg3.jpg";
import storey from "../media/storey.png";
import getyournest from "../media/get-your-nest.png";
import scrybe from "../media/scrybe.jpg";
const Homepage = () => {
  return (
    <div className="home-page">
      <Fade>
        <div
          className="home-intro-wrapper"
          style={{ backgroundImage: `url(${introbg})` }}
        >
          <div className="container">
            <section className="home-intro">
              <div className="techra">
                <h1 className="display-1">Techra</h1>
                <h2>Software Solutions LLC.</h2>
              </div>
              <div className="valueprop">
                <h1 className="text-light">
                  Affordable Software Services From Experts
                </h1>
              </div>
            </section>
          </div>
        </div>
      </Fade>
      <div className="container">
        <Fade left>
          <section className="home-headline">
            <h1 className="display-4 text-dark">
              Startup Businesses, now, can get Senior Developers at a Cost You
              Can Afford
            </h1>
          </section>
        </Fade>
        <section className="home-copy">
          <Fade>
            <article>
              <h3 className="subhead h1 text-primary">
                Capture Your Share of Tech Fortune
              </h3>
              <p className=" text-dark">
                With over 4,900,000,000 people in the world having access to the
                internet, smart and confident entrepreneurs see gold mines in
                the technology sector.
                <br />
                <br />
                True entreprenurs know the potential wealth they can get from a
                quality application. <br />
                <br />
                The quality of your application can be the difference between a
                house and a mansion.
                <br />
                <br />
                And we know how to guide you to capitalize on your ideas.
                <br />
                <br />
                So are you looking to capture business opportunities?
                <br />
                <br /> At Techra, We can design, fix and improve your web,
                mobile and/or desktop apps. We’re here to make your product
                produce more money.
              </p>
            </article>
          </Fade>
          <Fade>
            <article>
              <h3 className="subhead h1 text-primary">
                With Senior Developers You Get Excellence
              </h3>
              <p className=" text-dark">
                Are you already worried about working with entry level or junior
                developers with a lack of professional experience because of a
                tight budget? <br />
                <br />
                What your product does for your customers is why they pay you
                money. So with poor quality products you can be losing lots of
                money, losing to your competitors and losing repeat business.
                <br />
                <br /> When you work with such companies, you rarely get the
                product that fits your business needs.
                <br />
                <br />
                <strong className="text-danger">
                  At Techra, the only developers working on your product are{" "}
                  <u>Senior Software Developers</u> who are{" "}
                  <u>University Graduates</u> with an average of{" "}
                  <u>11 years of work experience.</u>
                </strong>{" "}
                <br />
                <br />
                You can be sure that you are provided with high quality, fast
                and reliable solutions. The detail-oriented, caring
                professionals who work for you will prepare your product for the
                market. And you can feel relaxed, confident and comfortable.
              </p>
            </article>
          </Fade>
          <Fade>
            <article>
              <h3 className="subhead h1 text-primary">
                You Won't Get Bamboozled
              </h3>
              <p className=" text-dark">
                Imagine you hired a foreign company for its cheap prices. <br />
                <br />
                Aside from their cheap prices they provide you with cheap
                products.
                <br />
                <br /> Maybe they pull some tricks on you and play games to
                squeeze every dollar from your budget.
                <br />
                <br /> Maybe they deliver the product but after a while you find
                that they intentionally put a few bugs in it. That way they can
                take more money from you to fix the bugs they created. What can
                you do then but get demoralized?
                <br />
                <br />
                A few clients of ours went through such experiences previously.
                <br />
                <br /> It’s why many startups are starting to only work with
                companies based in the U.S. who take their reputation seriously.
                <br />
                <br />
                Based in <u>upstate New York, the Hudson Valley area,</u> Techra
                provides you with the safety and security of dealing with
                accountable professionals.
              </p>
            </article>
          </Fade>
          <Fade>
            <article>
              <h3 className="subhead h1 text-primary">
                We Count On Your Success For Our Success
              </h3>
              <p className=" text-dark">
                Money matters a lot in the beginning of a business.
                <br />
                <br /> To get quality software engineering services you usually
                need to pay large sums of money.
                <br />
                <br /> Aside from the product, you got marketing to worry about,
                legal things and so on. <br />
                <br />
                Startup businesses are risky, but we will do everything in our
                power to ensure that the software aspect of your business is not
                a worrying matter.
                <br />
                <br />
                Techra is a startup business ourselves.
                <br />
                <br /> We understand that your business needs to be effective in
                its spending.
                <br />
                <br /> Every penny matters. <br />
                <br />
                We also understand that for our own startup, the satisfaction of
                every client is valuable to our reputation. For that reason we
                are flexible with budget concerns. <br />
                <br />
                And what matters to us more than money is a mutually beneficial
                relationship with you and to satisfy your needs and monetary
                concerns.
              </p>
            </article>
          </Fade>
          <Fade>
            <article>
              <h3 className="subhead h1 text-primary">
                The Job You Need Will Be Done
              </h3>
              <p className=" text-dark">
                With web, mobile and even desktop development expertise, We can
                do the following for you:
                <br />
                <br />
                <ul>
                  <li>Build your app from scratch</li>
                  <li>Fix bugs and errors</li>
                  <li>and more.</li>
                </ul>
                <br />
                <br />
                Pricing depends on the complexity of your project. But we are
                easy-going, negotiable and we want YOU on our team.
              </p>
            </article>
          </Fade>
        </section>
        <Zoom left>
          <section className="home-offer">
            <div className="offer">
              <div className="offer-copy">
                <h3 className="text-light">
                  Get a <u>FREE Consultation</u>
                </h3>
                <h4 className="h5 text-dark">
                  We will talk about your project idea, review your existing
                  code if you need,
                  <br /> and we can negotiate to meet your needs.
                </h4>
                <h4 className="text-dark mb-4">
                  Don't wait too long on our waiting list.
                  <br /> Schedule your appointment ASAP!
                </h4>
              </div>
              <form>
                <input type="text" placeholder="Enter Your Full Name" />
                <input type="text" placeholder="Enter your Email Address" />
                <button type="submit">I Want a FREE Consultation</button>
              </form>
              <h6 className="text-dark mt-3">
                <strong>Your privacy is fully protected.</strong>
              </h6>
            </div>
          </section>
        </Zoom>
        <section className="end-copy">
          <article>
            <h3 className="mb-5">Some of Our Most Notable Clients are...</h3>
            <div className="clients">
              <Flip>
                <div>
                  <h5>Storey</h5>

                  <img src={storey} alt="storey company image" />
                </div>
              </Flip>
              <Flip>
                <div>
                  <h5>Get Your Nest</h5>

                  <img src={getyournest} alt="get your nest company image" />
                </div>
              </Flip>
              <Flip>
                <div>
                  <h5>Scrybe</h5>

                  <img src={scrybe} alt="scrybe company image" />
                </div>
              </Flip>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
