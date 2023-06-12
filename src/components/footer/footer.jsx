import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer_box">
          <div className="footer_txt_icon">
            <div className="footer_icon">
              <img
                src="images/logo 7.png"
                alt="image not found"
                // style={{ width: "200px" }}
              />
            </div>
            <div className="footer_txt">
              <div className="footer_media">
                <div className="footer_media_txt">
                  <h3>THE CAMEROON</h3>
                  <div className="footer_media_txt_desc">
                    <h5>Association for the Advancement of Women</h5>
                    <p>
                      @2023<span>THEY CAMEROON</span>
                    </p>
                  </div>
                </div>
                <div className="footer_media_icon">
                  <h4>follow us</h4>
                  <div className="footer_media_facebook_linkedIn">
                    <span>
                      <FaFacebookSquare className="footer_linkedIn footer_gen_faceB_linIn" />
                    </span>
                    <span>
                      <ImLinkedin2 className="footer_linkedIn footer_gen_faceB_linIn" />
                    </span>
                    {/* <FaFacebookSquare className="footer_linkedIn footer_gen_faceB_linIn"/>
                    <ImLinkedin2 className="footer_linkedIn footer_gen_faceB_linIn"/> */}
                  </div>
                </div>
              </div>
              <div className="footer_middle">
                <div className="footer_associstion">
                  <h3>Our association</h3>
                  <div className="footer_associstion_txt">
                    <p>In regards to</p>
                    <p>Become a volunteer</p>
                    <p>Make a donation</p>
                    <p>Partner</p>
                  </div>
                </div>
                <div className="footer_utilities">
                  <h3>utilities</h3>
                  <div className="footer_utilities_txt">
                    <p>Our Blog</p>
                    <p>Our campaigns</p>
                    <p>Our projects</p>
                    <p>Our photos</p>
                  </div>
                </div>
                <div className="footer_Confidentialities">
                  <h3>Confidentialities</h3>
                  <div className="footer_utilities_txt">
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                    <p>Legal Notice</p>
                  </div>
                </div>
              </div>
              <div className="footer_last">
                <div className="footer_newsletter">
                  <h3>newsletter</h3>
                  <div className="footer_newsletter_box">
                    <input type="search" placeholder="your email" />
                    <button>send</button>
                  </div>
                </div>
                <div className="footer_contact_info">
                  <h3>contact information</h3>
                  <div className="footer_contact_info_logo">
                    <div className="footer_contact_info_logo_address footer_gen_logo">
                      <MdOutlineLocationOn className="footer_social_logo_border" />
                      <div className="footer_contact_info_logo_address_txt footer_gen_txt">
                        <h4>address :</h4>
                        <p>Bepanda</p>
                      </div>
                    </div>
                    <div className="footer_contact_info_logo_time footer_gen_logo">
                      <BiTimeFive className="footer_social_logo_border" />
                      <div className="footer_contact_info_logo_address_txt footer_gen_txt">
                        <h4>e-mail :</h4>
                        <p>secretariat@ellescameroun.org</p>
                      </div>
                    </div>
                    <div className="footer_contact_info_logo_phone footer_gen_logo">
                      <BsTelephone className="footer_social_logo_border" />
                      <div className="footer_contact_info_logo_phone_txt footer_gen_txt">
                        <h4>phone :</h4>
                        <p>690-210-207</p>
                      </div>
                    </div>
                    <div className="footer_contact_info_logo_mobile footer_gen_logo">
                      <CiMobile3 className="footer_social_logo_border" />
                      <div className="footer_contact_info_logo_mobile_txt footer_gen_txt">
                        <h4>mobile :</h4>
                        <p>693-404-077</p>
                      </div>
                    </div>
                    <div className="footer_contact_info_logo_mobile footer_gen_logo">
                      <MdAlternateEmail className="footer_social_logo_border" />
                      <div className="footer_contact_info_logo_mobile_txt footer_gen_txt">
                        <h4 className="hours_operation">hours of operation :</h4>
                        <p>9 a.m - 5 p.m</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
