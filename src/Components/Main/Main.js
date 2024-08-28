import React from "react";
import "./main.css";
const Main = () => {
  return (
    <div  id="partner-page">
      <div className="container-fluid bg-light text-center  ">
      <div>
              <h4>
                <b title="This is new" >HOME </b> &gt;  PARTNER WITH US{" "}
              </h4>
          <h1 id="partnerWalah1">Partner With Us</h1>
        </div>
      </div>

      <div className="container-fluid  ">
        <div className="row">
          <div className="col-lg-6">
            <div className="headerTwo">
              <h2>Become a Partner with FastAccounts</h2>
            </div>
            <div id="paragraph" className="class">
              <p>
                Join our Accountants and Bookkeepers Program, where we provide
                extended support to accountants and bookkeepers across the
                globe.
              </p>
            </div>
            <div className="btn">
              <button className="btn btn-primary">Join Our Network</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="partner01.jpg" id="fifth" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-4">
            <div className="headerInSecondParent">
              <h2>Free Training Program</h2>
            </div>
            <div id="padRight" className="class">
              <p>
                Accountants and Bookkeepers can join our free training program
                and explore all the opportunities available for your practice{" "}
                <a href="#Free Training Program">[…]</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="headerInSecondParent">
              <h2>Certification Program</h2>
            </div>
            <div className="padRight">
              <p id="strong">
                <strong>Fast</strong>
                <span class="text-primary" >Accounts </span>
                offers a certification program to help accountants and
                bookkeepers take their skills and expertise to the next level{" "}
                <a href="#Free Training Program">[…]</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="headerInSecondParent">
              <h2>How it Works</h2>
            </div>
            <div>
              <p id="padRight" className="class">
                Our business philosophy is straightforward and helps accountants
                and bookkeepers establish themselves while growing{" "}
                <a href="#Free Training Program">[…]</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div id="hr"></div>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6">
            <img src="partner02.jpg" id="fifth" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="heading">
              <h2>Free Training Program</h2>
            </div>
            <div id="programBelow" className="class">
              Accountants and Bookkeepers can join our free training program and
              explore all the opportunities available for your practice and
              clients.
              <p></p>
              <ul>
                <li className="class">
                  For informed learners, our free training program will be
                  sufficient, or for a quick start, you can use our
                  help/tutorial videos, after which you will be good to go.
                </li>
                <li className="class">
                  Enjoy zero joining costs and explore all the benefits
                  available to accountants and bookkeepers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6">
            <div className="heading">
              <h2>Certification Program</h2>
            </div>
            <div id="programBelow" className="class">
              <strong>Fast</strong>
              <span class="text-primary">Accounts </span>offers a certification program to help
              accountants and bookkeepers take their skills and expertise to the
              next level. You can provide both a better experience and broader
              service to your client, while also being able to grow faster than
              ever before:
              <p></p>
              <ul>
                <li className="class">
                  Our certification program will give you a competitive
                  advantage, enabling you to stand out from your competitors and
                  win more work.
                </li>
                <li className="class">
                  Use our certification to excel in your expertise and become a
                  part of our professional network.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="partner03.jpg" id="fifth" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6">
            <img src="partner04.jpg" id="fifth" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="heading">
              <h2>Business Model and How it Works</h2>
            </div>
            <div className="class" id="programBelow">
              Our business philosophy is straightforward and helps accountants
              and bookkeepers establish themselves while growing their practice
              and client base. Joining the FastAccounts family is quick and
              easy, just fill in the form (Join our Network) and our expert will
              contact you soon.
              <p></p>
              <ul className="model">
                <li>Apply</li>
              </ul>
              <p className="class">
                Apply online, and one of our expert team members will get in
                contact with you to complete the process.
              </p>
              <ul className="model">
                <li>Ready, Steady, Go</li>
              </ul>
              <p className="class">
                Once the process is complete and you are listed as an approved
                partner, you will receive an instruction email on how the
                referral system works.
              </p>
              <ul className="model">
                <li>Start Referring</li>
              </ul>
              <p className="class">
                Congratulations, you can now market your practice or business as
                an approved partner and start referring. Your unique referral ID
                will help you to keep track of your referrals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid " id="lastPicture">
        <div className="row">
          <div className="col-lg-6 mb-40px">
            <div className="heading">
              <h2>Perks and Benefits</h2>
            </div>
            <div className="class" id="programBelow">
              FastAccounts maintains a simple business philosophy: let the
              accountants, bookkeepers, and overall accounting practice grow.
              <br />
              <p className="class">
                As such, we have multiple perks and discount models which we
                offer, just choose the one that you like best.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="partner05.jpg"
              id="fifthOne"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
