import React from "react";
import "../Page/landing.css";
import bluelogo from "../assets/bluelogo.png";
import firstCircle from "../assets/circleimg1.jpg";
import secondCircle from "../assets/circleimg2.jpg";
import thirdCircle from "../assets/circleimg3.jpg";
import Locator from "../assets/locator.png";
import browntable from "../assets/browntable.jpg";
import blacktable from "../assets/blacktable.jpg";
import bathtub from "../assets/bathtub.jpg";
import fstagent from "../assets/agent1.jpg";
import secagent from "../assets/agent2.jpg";
import trdagent from "../assets/agent3.jpg";
import { Link } from "react-router-dom";
import whitelogo from "../assets/whitelogo.png";
import quote from "../assets/quote.png"
import quoteimg from "../assets/quoteimg.png"
import Aos from "aos";

function Landing() {
    Aos.init()

return (
    <div className="landing">

    <div className="first">
    <img src={bluelogo} alt="logo" className="mx-4 my-4"  data-aos="flip-left" data-aos-duration="700" data-aos-delay="400" />
        <div className="container">
        <div className="row justify-content-around align-items-center">
            <div className="col-md-6 col-12">
            <div className=" text-white my-5"  data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400">
                
                <h1 className="my-5">
                A rare minimalist concept in a quiet, peaceful and safe location.
                </h1>
                <p className="next">Next Open House: </p>
                <p className="date">
                Saturday, May 21<sup>ST</sup> 12:00 PM - 5:00PM
                </p>
            </div>
            </div>
            <div className="col-md-6 col-12">
            <div className="form my-5" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400">
                <h4 className="text-dark">
                Fill the form below to view breathtaking apartments.
                </h4>

                <form className="my-5" data-aos="fade-down">
                <div className="form-group my-3">
                    <label htmlFor="fname">
                    Name <sup>*</sup>
                    </label>
                    <input type="text" id="fname" className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="email">
                    Email <sup>*</sup>
                    </label>
                    <input type="email" id="email" className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="pn">
                    Phone Number <sup>*</sup>
                    </label>
                    <input type="text" id="pn" className="form-control" />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="state">
                    State <sup>*</sup>
                    </label>
                    <select name="" id="state" className="form-control">
                    <option defaultValue>Select a state...</option>
                    <option>Lagos</option>
                    <option>Delta</option>
                    <option>Bayelsa</option>
                    <option>Kaduna</option>
                    <option>Ogun</option>
                    <option>Kano</option>
                    <option>Jos</option>
                    <option>Kwara</option>
                    <option>Abia</option>
                    <option>Imo</option>
                    <option>Oyo</option>
                    <option>Edo</option>
                    <option>Benue</option>
                    <option>Kogi</option>
                    <option>Zamfara</option>
                    <option>Abuja</option>
                    <option>Adamawa</option>
                    <option>Akwa Ibom</option>
                    <option>Ekiti</option>
                    </select>
                </div>

                <button className="btn btn-md d-block m-auto my-5">
                    Request Showing
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>

    <div className="second" >
        <p data-aos="zoom-in-up" data-aos-duration="400" data-aos-delay="100">Your Key Benefits</p>
    </div>

    <div className="third p-5 flex-md-row flex-column">
        <div className="my-5 my-md-0" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
        <img src={firstCircle} alt="img" />
        <p>
            Use simple, accessible language for more conversions. Longer pages
            convert up to 33% less. Fear-inducing words (like "problem" and
            "risk) had a slight negative impact on conversion
        </p>
        </div>

        <div className="my-5 my-md-0" data-aos="fade-down" data-aos-duration="700" data-aos-delay="400">
        <img src={secondCircle} alt="img" />
        <p>
            Use simple, accessible language for more conversions. Longer pages
            convert up to 33% less. Fear-inducing words (like "problem" and
            "risk) had a slight negative impact on conversion
        </p>
        </div>

        <div className="my-5 my-md-0" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
        <img src={thirdCircle} alt="img" />
        <p>
            Use simple, accessible language for more conversions. Longer pages
            convert up to 33% less. Fear-inducing words (like "problem" and
            "risk) had a slight negative impact on conversion
        </p>
        </div>
    </div>

    <div className="fourth p-5">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 col-12">
            <div  data-aos="flip-left" data-aos-duration="700" data-aos-delay="400">
                <img src={Locator} alt="locator" />
                <span className="mx-4">3940 Gateway Rd. Brookefield, Vancouver 53045</span>
            </div>
            </div>

            <div className="col-md-6 col-12 d-md-block d-none">
            <div className="beautiful" data-aos="flip-left" data-aos-duration="500" data-aos-delay="800">
                <p className="title">Beautiful Location</p>
                <p>
                Located right off of Gateway Rd. at Drake Street, Allhër
                apartments are within a short walking distance to Yaletown,
                the West End, and English Bay. This central location situates
                Ahllër close to numerous restaurants, café's, retail shops and
                city parks such as George Wainborn Park, David Lam Park and
                even Sunset Beach Park.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>

    <div className="fifth">
        <div className="container">
            <div className="row">
                <div>
                <div className="browntable d-flex flex-md-row flex-column"  data-aos="fade-right" data-aos-duration="500" data-aos-delay="400">
        <img src={browntable} alt="browntable" className="mx-md-5 mx-0" />
        <p className=" mx-md-5 mx-0 my-5" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
            Now also renting a wide range of furnished and serviced apartments.
        </p>
        </div>

        <div className="blacktable w-70 d-flex flex-md-row flex-column">
        <div className="" data-aos="fade-right" data-aos-duration="500" data-aos-delay="400" >
            <h3>Details</h3>
            <ul>
            <li>Exotic hardwoods</li>
            <li>Seamless indoor–outdoor living</li>
            <li>Premium natural stone</li>
            <li>Amazing views</li>
            <li>Best of West Coast art and sculptures</li>
            <li>Expansive terraces for entertainment</li>
            <li>Custom Italian cabinetry</li>
            <li>Porcelain tile flooring</li>
            <li>
                <b>And much more…</b>
            </li>
            </ul>
        </div>

        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
            <img src={blacktable} alt="table"/>
        </div>
        </div>

        <div className="bathtub d-flex flex-md-row flex-column">
        <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="400">
            <img src={bathtub} alt="bathtub" />
        </div>

        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="400"> 
            <h3>Amenities</h3>
            <ul>
            <li>Bicycle room</li>
            <li>Cable ready</li>
            <li>City and water views</li>
            <li>Communal BBQ</li>
            <li>Fridge, stove, dishwasher, microwave, washer and dryer</li>
            <li>Individual thermostats</li>
            <li>Internet-ready</li>
            <li>Keyless entry</li>
            <li>Parks, schools, transit and shopping nearby</li>
            <li>Seawall nearby</li>
            <li>Security cameras</li>
            <li>Social room</li>
            <li>Underground parking</li>
            </ul>
        </div>
        </div>


                </div>
            </div>
        </div>
    </div>

    <div className="sixth text-white">
        <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
        <h2 className="text-center mt-4">So, what are you waiting for?</h2>
        <div>
        <button className="btn d-block m-auto my-5">
        Request Showing
        </button>
        </div>
        </div>
    </div>

    <div className="seventh">
        <h3 className="text-center my-3" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">Reach one of our trusted agents</h3>
        <div className="d-flex justify-content-evenly p-5 mt-4 flex-md-row flex-column align-items-center">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
            <img src={fstagent} alt="agent1" />
            <p>STEPHANIE SAKAKIBARA</p>
            <p>
            P- 887-767-9886 <br /> E-<Link>name@company.com</Link>
            </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
            <img src={secagent} alt="agent2" />
            <p>MICHAEL DILLEY</p>
            <p>
            P- 887-767-9887 <br /> E-<Link>name@company.com</Link>
            </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
            <img src={trdagent} alt="agent3" />
            <p>SAM RICHARDS</p>
            <p>
            P- 887-767-9886 <br /> E-<Link>name@company.com</Link>
            </p>
        </div>
        </div>
    </div>

    <div className="eighth">
    <div className="container">
        <div className="row">
        <div className=" col-12 col-md-6" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
                <div className="d-flex justify-content-center align-items-center p-md-5 p-4">
                <img src={quote} alt="quote" />
                    <p className="text-white">
                    We were so fortunate to have found Sam when we moved to Van. 
                    As our Realtor, he helped us find the right house in the right neighborhood for the right price.
                    <br />
                    <small className="text-info">Sylvie Aucoin</small>
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-4">
                <div className="d-flex justify-content-between mt-4 align-item-center">
                    <img src={quoteimg} alt="quoteimg" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="400"/>
                </div>
            </div>
        </div>
    </div>

    </div>

    <div className="footer text-center">
        <div>
        <img src={whitelogo} alt="logo" className="p-4" />
        </div>
        <div className="address my-4">
        <p>
            For properties managed by UNBOUNCE: ALLHËR Apartment Rentals Ltd.
        </p>
        <p>Suite 200, 578 West 8th Avenue Vancouver, B.C., Canada V0Z 1B1</p>
        <p>Phone: (604) 683-7690Email: ahller@aptrentals.com</p>
        </div>
    </div>
    </div>
);
}

export default Landing;


