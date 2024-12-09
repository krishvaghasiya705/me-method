import React, { useRef, useState } from "react";
import "./mefitnessdetailspage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nextixon from "../../assets/svg/slidersvg/nextixon";
import Previusicon from "../../assets/svg/slidersvg/perviusicon";
import Playicon from "../../assets/svg/playicon";
import Fullscreenicon from "../../assets/svg/fullscreenicon";
import { useLocation } from "react-router-dom";

import filteredData from "../../data/fitnessdata/fitnessdata";
import Thumbnail1 from "../../assets/image/thumbnailimages/thumbnail1.png";
import Usericon from "../../assets/svg/usericon";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slider-next-div" onClick={onClick}>
      <Nextixon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slider-previus-div" onClick={onClick}>
      <Previusicon />
    </div>
  );
}

const getRandomItems = (data, count) => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function Mefitnessdetailspage() {
  const location = useLocation();
  const { item } = location.state;

  // New state and ref for video control
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (e) => {
    const duration = videoRef.current.duration;
    if (duration > 0) {
      const seekTime = (e.target.value / 100) * duration;
      videoRef.current.currentTime = seekTime;
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { // Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  var VideoSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  console.log(filteredData);
  console.log("filteredData+++++++++++++++", "filteredData");

  return (
    <div className="Me-fitness-details-page-main">
      <div className="container1">
        <div className="me-fitness-details-video-slider-main">
          <Slider {...VideoSlider}>
            <div>
              <div className="me-fitness-details-video-slider-div">
                <video 
                  ref={videoRef} 
                  poster={item.thumbnail || Thumbnail1} 
                  onTimeUpdate={handleTimeUpdate}
                >
                  <source src={item.videoUrl} type="video/mp4" />
                  <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-controls-div-main">
                  <div className="play-icon" onClick={handlePlayPause}>
                    {isPlaying ? <Playicon /> : <Playicon />}
                  </div>
                  {/* <div className="video-duration-line" onClick={handleSeek}> */}
                  <div className="video-duration-line">
                    <div className="video-progress" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className="video-duration-time">
                    <span>00:12</span>
                  </div>
                  <div className="full-screen-icon" onClick={handleFullScreen}>
                    <Fullscreenicon />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="me-fitness-details-video-description-main">
          <div className="me-fitness-details-video-description-head">
            <div>
              <h1>{item.title}</h1>
              <span>{item.minititle}</span>
            </div>
            <div className="user-watched-count-div">
              <Usericon />
              <span>{item.count}</span>
            </div>
          </div>
          <div className="me-fitness-details-video-description-peragraph">
            <p>
              Start from within. This five-day yoga journey will connect you
              back to the heart of your practice with themed Vinyasa classes
              designed to transform your perspective through movement. Each 30-
              to 60-minute flow incorporates an inspirational talk and
              meditation to help you feel fully aligned and in tune with
              yourself. If you’re seeking more balance, connection, and ease in
              your daily life, this series will help you strengthen the bond
              between your inner and outer self so you can feel refreshed and at
              peace long after practice ends.
            </p>
          </div>
        </div>
        <div className="me-fitness-details-video-recommended-main">
          <div className="me-fitness-details-video-recommended-title">
            <h1>RECOMMENDED FOR YOU</h1>
          </div>
          <div className="me-fitness-cards-main-alignment">
            {getRandomItems(filteredData, 3).map((item) => (
              <div key={item.id} className="me-fitness-cards-main">
                <div className="me-fitness-cards-image-div">
                  <img src={item.image} alt={item.image} />
                </div>
                <div className="me-fitness-cards-details-div">
                  <div className="me-fitness-cards-details-head">
                    <h1>{item.title}</h1>
                    <span>{item.minititle}</span>
                  </div>
                  <div className="me-fitness-cards-details-body">
                    <p className={item.id}>
                      {item.paragraph}
                      <span>{item.readmore}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
