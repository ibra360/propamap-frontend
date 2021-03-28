import React from "react";
import { Row, Col } from "antd";

import "./Footer.scss";
import Link from "next/link";
import { redirect } from "../../../utils/site";

const Footer = () => {
  return (
    <div className="cmp-footer">
      <div className="footer-item" onClick={() => redirect("/")}>
        <img
          src="/images/logo-grey.png"
          className="logo"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="footer-item">
        {/* <div className='footer-link'>
          <Link>
            <a>About Us</a>
          </Link>
        </div> */}
        <div className="footer-link">
          <Link href="/terms-and-conditions">
            <a>Terms & Conditions</a>
          </Link>
        </div>
        <div className="footer-link">
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </div>
        <div className="footer-link">
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </div>
        {/* <div className='footer-link'>
          <Link>
            <a>Careers</a>
          </Link>
        </div>
        <div className='footer-link'>
          <Link>
            <a>Advertise</a>
          </Link>
        </div> */}
      </div>
      <div className="footer-item download-links">
        <img src="/images/app-store.png" className="download-img" />

        <a href="https://play.google.com/store/apps/details?id=com.easyfinder.propamap">
          <img src="/images/google-play.png" className="download-img" />
        </a>
      </div>
    </div>
  );
};

export { Footer };
