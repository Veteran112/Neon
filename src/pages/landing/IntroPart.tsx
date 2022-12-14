// import { useContext } from "react";
// import InputMask from "react-input-mask";
import React, { useState } from "react";
import logo_ from "assets/image/logo_.png";
import Container from "components/Container";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SignUpForm from './SignUpForm';
import Modal from 'react-modal';
import hamburger from "assets/image/hamburger.png"
Modal.setAppElement('#root');

const IntroPart = () => {

  if (window.performance) {
    if (performance.navigation.type == 1) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  window.onscroll = function() { scrollWatcher() };

  function controlNavVisibility (state: boolean) {

    // Control visibility
    if (!state) {

      document.getElementsByTagName("nav")[0].classList.add('-top-80');
    } else {

      document.getElementsByTagName("nav")[0].classList.remove('-top-80');
    }
  }

  function scrollWatcher () {

    // Control background color
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

      document.getElementsByTagName("nav")[0].classList.add('nav-scroll');
    } else {

      document.getElementsByTagName("nav")[0].classList.remove('nav-scroll');
    }
  }
  
  const [modalState, setModalState] = useState(false);

  function openModal() {

    controlNavVisibility(false);
    document.body.style.overflow = 'hidden';
    setModalState(true);
  }

  function closeModal() {

      controlNavVisibility(true);
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
      setModalState(false);
  }


  return (
    <div className="landing-intro pt-36 md:pt-24 relative">
      <Modal
        isOpen={modalState}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(0 0 0 / .66)',
            padding: 0
          },
          content: {
            position: 'absolute',
            display: 'grid',
            placeItems: 'center',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            width: '100%',
            height: '100%',
            margin: 'auto',
            padding: 0,
            background: 'transparent',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            border: 'none'
          }
        }}
      >
        <SignUpForm
          onClose={() => {

            closeModal();
          }}
        />
      </Modal>
      <nav className="left-0 right-0 fixed top-0 pt-3 sm:pt-6 pb-3 md:pb-4 z-80 block z-[100]">
        <div className="lg:flex-row flex landing-header mb-4 m-auto constrain">
          <div className="text-center w-full flex sm:block sm:w-auto md:text-left pb-4 sm:pb-2 md:pb-0">
            <p className="text-2xl text-white"> NEON-L </p>
            {/* <p className="text-blue-500">.</p> */}
            <p className="text-2xl text-white language">Languages</p>
            {/* <div className="flex-grow text-right">
              <div onClick={openModal} className="block sm:hidden scale-90 origin-right	mt-0.5" >
                <div className="text-blue-500 inline-block btn bg-white -mt-[4px]">
                  Apply
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex-grow sm:pt-2 lg:pb-0 pb-2.5 navbar my-auto">
            <ul className="flex flex-row text-right pr-3 sm:pr-0 ml-auto mx-none sm:mx-auto max-w-xs md:max-w-xs font-bold text-white text-base">
              <li className="flex-grow opacity-90 hover:opacity-100 text-2xl">
                <a href="#about">About</a>
              </li>
              <li className="flex-grow opacity-90 hover:opacity-100 text-2xl">
                <a href="#services">Services</a>
              </li>
              <li className="flex-grow opacity-90 hover:opacity-100 text-2xl">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="text-center sm: ml-auto my-auto">
            <div onClick={openModal} className="" id="getStarted" >
              <div className="text-black inline-block btn bg-white">
                Apply
              </div>
            </div>
        </div>
      </div>
      </nav>
      <Container>
        {/* <p className="text-5xl text-center mt-20 text-red-500">Welcome to visit our company</p> */}
        <ScrollAnimation animateOnce={false} animateIn="animate__animated animate__fadeInLeft" animatePreScroll={true} delay={400}>
          <div className="flex items-center w-[full] justify-center text-white pb-24 md:pb-16 pt-[6.5rem]">
          {/* <ScrollAnimation animateOnce={true} animateIn="animate__animated animate__fadeInLeft" animatePreScroll={true} delay={400}>
            <div>
              <h1 style={{textShadow: '3px 3px 10px rgba(0,0,0,0.2)'}} className="leading-[1.13] text-[3rem] sm:text-[3.75rem] md:text-[4.5rem] ">
                Welcome to visit our company
                <sup className="text-[13px] -top-[3em]">1</sup>
              </h1>
              <div className="max-w-md">
                <div
                  onClick={openModal}
                  className="btn btn-large bg-white text-blue-600 w-full max-w-xs text-center mt-8"
                >
                  Apply
                </div>
              </div>
            </div>
          </ScrollAnimation> */}
            {/* <video width="300" height="200" autoPlay muted loop style={{ marginTop: '50px', marginLeft: '30px' }}>
              <source src="/1.webm" type="video/webm" id="logo_video"/>
            </video> */}
              <img src={logo_} alt="logo" width="75%" />
          </div>
        </ScrollAnimation>
      </Container>
      <div className="w-full block">
        <svg
          className="relative w-full"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 170"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgb(0 0 0 / 1)" offset="0%"></stop>
              <stop stopColor="rgb(0 0 0 / 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,0L48,5.7C96,11,192,23,288,25.5C384,28,480,23,576,19.8C672,17,768,17,864,39.7C960,62,1056,108,1152,110.5C1248,113,1344,74,1440,56.7C1536,40,1632,45,1728,53.8C1824,62,1920,74,2016,65.2C2112,57,2208,28,2304,28.3C2400,28,2496,57,2592,70.8C2688,85,2784,85,2880,79.3C2976,74,3072,62,3168,59.5C3264,57,3360,62,3456,53.8C3552,45,3648,23,3744,11.3C3840,0,3936,0,4032,11.3C4128,23,4224,45,4320,51C4416,57,4512,45,4608,36.8C4704,28,4800,23,4896,31.2C4992,40,5088,62,5184,76.5C5280,91,5376,96,5472,99.2C5568,102,5664,102,5760,110.5C5856,119,5952,136,6048,130.3C6144,125,6240,96,6336,87.8C6432,79,6528,91,6624,79.3C6720,68,6816,34,6864,17L6912,0L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default IntroPart;
