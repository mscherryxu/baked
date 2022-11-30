import React from "react";
import { Link } from "react-router-dom";

export class Contact extends React.Component {
  render() {
    return (
      <div className="members">
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img
                  src="https://avatars.githubusercontent.com/u/101421813?v=4"
                  alt="Picture of Nicky"
                />
              </div>
              <div className="contentBx">
                <h4>Nicole Hong</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <Link
                    to={{ pathname: "https://github.com/nickyjhong" }}
                    target="_blank"
                    className="github"
                  >
                    Github
                  </Link>
                </div>
                <div className="linkedin">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/nicolejhong/",
                    }}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img
                  src="https://avatars.githubusercontent.com/u/41312534?v=4"
                  alt="Picture of Cherry"
                />
              </div>
              <div className="contentBx">
                <h4>Cherry Xu</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <Link
                    to={{ pathname: "https://github.com/mscherryxu" }}
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
                <div className="linkedin">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/cherryxu-rdcdn/",
                    }}
                    target="_blank"
                    className="linkedin"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="../profilePics/amy.jpeg" alt="Picture of Amy" />
              </div>
              <div className="contentBx">
                <h4>Amy Wong</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <Link
                    to={{ pathname: "https://github.com/amyawong" }}
                    target="_blank"
                    className="github"
                  >
                    Github
                  </Link>
                </div>
                <div className="linkedin">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/amyawong/",
                    }}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="../profilePics/chris.jpeg" alt="Picture of Chris" />
              </div>
              <div className="contentBx">
                <h4>Chris Tomshack</h4>
              </div>
              <div className="sci">
                <div className="github">
                  <Link
                    to={{ pathname: "https://github.com/Ctomshack" }}
                    target="_blank"
                    className="github"
                  >
                    Github
                  </Link>
                </div>
                <div className="linkedin">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/christomshack/",
                    }}
                    target="_blank"
                    className="linkedin"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
