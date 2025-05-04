import React from "react";
import "./Clients.css";
import tilogo from "../images/ti-logo.png";
import tividsample from "../videos/tiwz-clip.mp4";
import ticlaymore from "../videos/claymore.mp4";
import xaphora1 from "../videos/xaphora1.mp4";
import xaphora2 from "../videos/xaphora2.mp4";
import xaphora3 from "../videos/xaphora3.mp4";
import zuno1 from "../videos/zuno1.mp4";
import zuno2 from "../videos/zuno2.mp4";
import zuno3 from "../videos/zuno3.mp4";
import brooke1 from "../videos/brooke1.mp4";
import brooke2 from "../videos/brooke2.mp4";
import brooke3 from "../videos/brooke3.mp4";
import queen1 from "../videos/queendee1.mp4";
import queen2 from "../videos/queendee2.mp4";
import queen3 from "../videos/queendee3.mp4";
import kea1 from "../videos/kea1.mp4";
import kea2 from "../videos/kea2.mp4";
import tiunboxing from "../videos/cod-unboxing.mp4";
import xaphoralogo from "../images/xaphora-logo.png";
import zunologo from "../images/zuno-logo.jpg";
import dequeenlogo from "../images/deequeenlogo.png";
import brookelogo from "../images/brooke-logo.png";
import kealogo from "../images/kea-logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

function Clients() {
  return (
    <div className="client-section">
      <h1 className="client-title">Clients</h1>
      <div className="testimonials-section">
        <div className="testimonial">
          <img src={tilogo} alt="ti-logo" className="testimonial-image"></img>
          <div className="creator-social-section">
            <a href="https://twitter.com/LegendofTi" className="link">
              <FaXTwitter className="client-icon" />
            </a>
            <a href="https://www.tiktok.com/@legendof_ti" className="link">
              <FaTiktok className="client-icon" />
            </a>
            <a href="https://www.twitch.tv/legendof_ti" className="link">
              <FaTwitch className="client-icon" />
            </a>
            <a href="https://www.instagram.com/legendof_ti/" className="link">
              <FaInstagram className="client-icon" />
            </a>

            <a href="https://www.youtube.com/c/legendof_ti" className="link">
              <GrYoutube className="client-icon" />
            </a>
          </div>
          <h3 className="creator-name">Legend Of Ti</h3>
          <p className="ti-testimonial-sentence">
            I've been working with Bman for 3 - 4 years now, and I can really
            say he is reliable and make good edits for short form and long form.
            If you're looking for an editor, especially if you're an upcoming
            content creator, I 100% recommend him. You can even ask him
            questions about editing and he's very knowledgeable about it as
            well. He communicates well and makes sure his clients are satisfied
            with the work he creates for them.{" "}
          </p>
          <div className="video-section">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="creator-vid"
            >
              <source src={tividsample} type="video/mp4"></source>
            </video>
            <div className="shortform-content">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="shortform-video"
              >
                <source src={ticlaymore} type="video/mp4"></source>
              </video>
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="shortform-video"
              >
                <source src={tiunboxing} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <img
            src={xaphoralogo}
            alt="xaphora-logo"
            className="testimonial-image"
          ></img>
          <div className="creator-social-section">
            <a href="https://twitter.com/xaphorattv" className="link">
              <FaXTwitter className="client-icon" />
            </a>
            <a href="https://www.tiktok.com/@Xaphora" className="link">
              <FaTiktok className="client-icon" />
            </a>
            <a href="https://www.twitch.tv/Xaphora" className="link">
              <FaTwitch className="client-icon" />
            </a>
            <a href="https://www.instagram.com/xaphorattv/" className="link">
              <FaInstagram className="client-icon" />
            </a>

            <a href="https://www.youtube.com/@xaphora" className="link">
              <GrYoutube className="client-icon" />
            </a>
          </div>
          <h3 className="creator-name">Xaphora</h3>
          <p className="testimonial-sentence">
            "You’re easy to communicate with, you know trendy memes for short
            form clips and make great intros. And you take fixes well and open
            to changing things with ease which helps a lot too!"
          </p>
          <div className="video-section">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="creator-vid"
            >
              <source src={xaphora3} type="video/mp4"></source>
            </video>
            <div className="shortform-content">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="shortform-video"
              >
                <source src={xaphora1} type="video/mp4"></source>
              </video>
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="shortform-video"
              >
                <source src={xaphora2} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <img
            src={zunologo}
            alt="zuno-logo"
            className="zuno-testimonial-image"
          ></img>
          <h3 className="creator-name">MissZuno</h3>
          <p className="testimonial-sentence">
            "Your editing is goated! It's also come a long way and you've
            improved a ton!"
          </p>
          <div className="shortform-content">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={zuno1} type="video/mp4"></source>
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={zuno2} type="video/mp4"></source>
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={zuno3} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="testimonial">
          <img
            src={dequeenlogo}
            alt="dequeen-logo"
            className="testimonial-image"
          ></img>
          <div className="creator-social-section">
            <a href="https://twitter.com/_ThatOneGirlDee" className="link">
              <FaXTwitter className="client-icon" />
            </a>
            <a
              href="https://www.tiktok.com/@queenndeettv?lang=en"
              className="link"
            >
              <FaTiktok className="client-icon" />
            </a>
            <a href="https://www.twitch.tv/queenndee" className="link">
              <FaTwitch className="client-icon" />
            </a>
            <a href="https://www.instagram.com/thequeenndee/" className="link">
              <FaInstagram className="client-icon" />
            </a>

            <a href="https://www.youtube.com/@DeeQueen" className="link">
              <GrYoutube className="client-icon" />
            </a>
          </div>
          <h3 className="creator-name">QueenDee</h3>
          <p className="queen-testimonial-sentence">
            "Bman's editing is a 10/10. Super friendly and always willing to
            make necessary changes based on the client. I’ve loved working with
            Bman and how the videos he edited for me turned out!"
          </p>
          <div className="shortform-content">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={queen1} type="video/mp4"></source>
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={queen2} type="video/mp4"></source>
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={queen3} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="testimonial">
          <img
            src={brookelogo}
            alt="brooke-logo"
            className="testimonial-image"
          ></img>
          <div className="creator-social-section">
            <a href="https://twitter.com/brookehboo?lang=en" className="link">
              <FaXTwitter className="client-icon" />
            </a>
            <a href="https://www.tiktok.com/@brookehboo" className="link">
              <FaTiktok className="client-icon" />
            </a>
            <a href="https://www.twitch.tv/brookehboo" className="link">
              <FaTwitch className="client-icon" />
            </a>
            <a href="https://www.instagram.com/brookehboo/" className="link">
              <FaInstagram className="client-icon" />
            </a>

            <a
              href="https://www.youtube.com/@BrookehbooGaming"
              className="link"
            >
              <GrYoutube className="client-icon" />
            </a>
          </div>
          <h3 className="creator-name">Brookehboo</h3>
          <p className="testimonial-sentence">
            "Bman does incredible work! Always creates exactly what I'm looking
            for and sends drafts along the way to ensure my vision is coming to
            life."
          </p>
          <div className="shortform-content">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={brooke1} type="video/mp4"></source>
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={brooke2} type="video/mp4"></source>
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={brooke3} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="testimonial">
          <img src={kealogo} alt="kea-logo" className="testimonial-image"></img>
          <div className="creator-social-section">
            <a href="https://twitter.com/BallinLilKea" className="link">
              <FaXTwitter className="client-icon" />
            </a>
            <a
              href="https://www.tiktok.com/@ballinlilkea?lang=en"
              className="link"
            >
              <FaTiktok className="client-icon" />
            </a>
            <a href="https://www.twitch.tv/ballinlilkea" className="link">
              <FaTwitch className="client-icon" />
            </a>
            <a href="https://www.instagram.com/ballinlilkea/" className="link">
              <FaInstagram className="client-icon" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCYq0nuf4zjinUx2nPBbNDeA"
              className="link"
            >
              <GrYoutube className="client-icon" />
            </a>
          </div>
          <h3 className="creator-name">BallinLilKea</h3>
          <p className="testimonial-sentence">
            "bmanike has given nothing but amazing edits to me. if you are
            looking for someone that can make your content fluid with some
            trendy memes ike is phenomenal with it. my go to video editor for
            shorter silly content!."
          </p>
          <div className="shortform-content">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={kea1} type="video/mp4"></source>
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="shortform-video"
            >
              <source src={kea2} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
