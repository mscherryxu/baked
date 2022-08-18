import React from 'react';
import Contact from './Contact';

export class About extends React.Component {
  render() {
    return (
      <div>
        <article className="about">
          <p className="about-p">
            Thanks for stopping by! Here at Baked by Fullstack, we guarantee top
            quality products at affordable prices. Our products are freshly
            baked everyday with quality as our top priority. Each baked good is
            handcrafted with love that can be tasted in every bite. In attempts
            at reducing food waste, we've teamed up with local organizations to
            donate our unsold products. We can't wait for you to give us a try!
          </p>
          <img
            className="about-image"
            src="https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
        </article>
      </div>
    );
  }
}

export default About;
