import React from 'react';
import './Footer.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";



function Footer() {
  return (
    <div className='footer'>
      <div className="copyright-section">
        <p className="copyright-sentence">Copyright © 2025 Bman Productions, Inc. </p>
      </div>
      <div className="icons-section">
      <a href="https://twitter.com/Bman_ike" className="link">
            <FaXTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/bman_ike/" className="link">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.twitch.tv/bman_ike" className="link">
            <FaTwitch className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFPUIrBzUWq5CLVmZmc2CHQ?view_as=subscriber"
            className="link"
          >
            <GrYoutube className="icon" />
          </a>
      </div>
    </div>
  )
}

export default Footer