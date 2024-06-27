import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import logo from "../../Assets/ASTU.jpg"


import  './footer.css'
function Footer() {
  return (
    <div className="footer-top mt-1">
      <div className="container">
        <div className="footer-bottom-content clearfix">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo-footer">
                <a className="navbar-brand" href="/">
                <a className="navbar-brand logo py-3" href="/">
                  {/* <img className="evaLogo" src={logo} alt="evangadi-logo" /> */}
                  <div className="d-flex gap-5">
                    <h1 style={{color:"white"}}>ASTU FORUM </h1>
                    <img src={logo} className="evaLogo w-20" style={{width:"60px" , height:"60px" ,borderRadius:"50%"}} alt="" />
                  </div>
                </a>
                </a>
                
              </div>

              <ul className="footer-social-list list-social list-inline">
                <li>
                  <a href="https://www.facebook.com/EthiopiansNetwork">
                    <AiFillFacebook />
                    <i className="social_facebook "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/evangaditech/">
                    <TiSocialInstagram />
                    <i className="social_instagram "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/weareethiopians">
                    <AiFillYoutube />
                    <i className="social_youtube "></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 ">
              
              <ul className="list-menu">
              <h5>Useful Link</h5>
                <li>
                  <a className="text-decoration-none" href="/explained">How it works </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="https://www.astu.edu.et/">Terms of Service</a>
                </li>
                <li>
                  <a className="text-decoration-none" href="https://www.astu.edu.et/">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
             
              <ul className="list-menu contact-list">
              <h5 className="">Contact Info</h5>
                <li><a href="https://www.astu.edu.et/">ASTU Networks</a ></li>
                <li><a href="https://www.astu.edu.et/">support@ASTU.com</a ></li>
                <li><a href="https://www.astu.edu.et/">+1-202-386-2702</a ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;