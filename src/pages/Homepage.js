import React from "react";

const Homepage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <section className="home-intro">
          <div className="techra">
            <h1 className="display-1">Techra</h1>
            <h2>Software Solutions LLC.</h2>
          </div>
          <div className="valueprop">
            <h1 className="display-4 text-warning">
              Affordable Software Services From Experts
            </h1>
          </div>
        </section>
        <section className="home-headline">
          <h1 className="display-4">
            Startup Businesses can now get Senior Developers at a Cost You Can
            Afford
          </h1>
        </section>
        <section className="home-copy">
          <article>
            <h3 className="subhead h1 text-warning">
              Capture Your Share of Tech Fortune
            </h3>
            <p className="h4 text-light">
              Real entreprenurs know the value of software. Because, one
              application can be the difference between a house and a mansion.
              With over 4.9 billion people in the world having access to the
              internet, smart, confident and entrepreneurial individuals see
              gold mines in the technology sector. And we know how to guide you
              to capitalize on your ideas. Are you looking to capture business
              opportunities? At Techra, We can design, fix and improve your web,
              mobile and/or desktop apps. We’re here to make your product
              produce more money.
            </p>
          </article>
          <article>
            <h3 className="subhead h1 text-warning">
              With Senior Developers You Get Excellence
            </h3>
            <p className="h4 text-light">
              Don’t worry anymore about working with entry level or junior
              developers with a lack of professional experience because of a
              tight budget. What your product does for your customers is why
              they pay you money. With poor quality products you can be losing
              lots of money, losing to your competitors and losing repeat
              business. When you work with such companies, you rarely get the
              product that fits your business needs.
              <br />
              <br />
              At Olive Solutions, the only developers working on your product
              are senior software developers with years of professional
              experience. You can be sure that you are provided with high
              quality, fast and reliable solutions. The detail-oriented, caring
              professionals who work for you will prepare your product for the
              market. And you can feel relaxed, confident and comfortable.
            </p>
          </article>
          <article>
            <h3 className="subhead h1 text-warning">Don't Get Bamboozled</h3>
            <p className="h4 text-light">
              Imagine you hired a foreign company for its cheap prices. Aside
              from their cheap prices they provide you with cheap products.
              Maybe they pull some tricks on you and play games to squeeze every
              dollar from your budget. Maybe they deliver the product but after
              a while you find that they intentionally put a few bugs in it.
              That way they can take more money from you to fix the bugs they
              created. What can you do then but get demoralized?
              <br />
              <br />
              That situation is very common. It’s why many startups are starting
              to only work with companies based in the U.S. who take their
              reputation seriously. Based in upstate New York, the Hudson Valley
              area, Techra provides you with the safety and security of dealing
              with accountable professionals.
            </p>
          </article>
          <article>
            <h3 className="subhead h1 text-warning">
              We Count On Your Success For Our Success
            </h3>
            <p className="h4 text-light">
              Money matters a lot in the beginning of a business. To get quality
              software engineering services you usually need to pay large sums
              of money. Aside from the product, you got marketing to worry
              about, legal things and so on. Startup businesses are risky, but
              we will do everything in our power to ensure that the software
              aspect of your business is not a worrying matter.
              <br />
              <br />
              Techra is a startup business ourselves. We understand that your
              business needs to be effective in its spending. Every penny
              matters. We also understand that for our own startup, the
              satisfaction of every client is valuable to our reputation. For
              that reason we are flexible with budget concerns. And what matters
              to us more than money is a mutually beneficial relationship with
              you and to satisfy your needs and monetary concerns.
            </p>
          </article>
          <article>
            <h3 className="subhead h1 text-warning">
              The Job You Need Will Be Done
            </h3>
            <p className="h4 text-light">
              With web, mobile and even desktop development expertise, We can do
              the following for you:
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
        </section>
        <section className="home-offer">
          <div className="offer">
            <div className="offer-copy">
              <h3 className="text-warning">Get a FREE Consultation</h3>
              <h4 className="h5 text-light">
                We will talk about your project idea, review your existing code
                if you need,
                <br /> and we can negotiate to meet your needs.
              </h4>
              <h4 className="text-light mb-4">
                Don't wait too long on our waiting list.
                <br /> Schedule your appointment ASAP!
              </h4>
            </div>
            <form>
              <input type="text" placeholder="Enter Your Full Name" />
              <input type="text" placeholder="Enter your Email Address" />
              <button type="submit">I Want a FREE Consultation</button>
            </form>
            <h6 className="text-warning mt-3">
              <u>Your privacy is fully protected.</u>
            </h6>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
