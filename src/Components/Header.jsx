import React from 'react'

function Header() {
  return (
    <>
    <header className="header">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="./images/Group 19321.svg" alt="" className="img-fluid" />
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img
          src="./images/hamburger_icon.svg"
          alt=""
          className="img-fluid hamburger_icon"
        />
        <img
          src="./images/close_icon.svg"
          alt=""
          className="img-fluid close_icon"
        />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="header_right header_right_top">
          <div className="btn-group d-flex d-md-none" role="group">
            <a className="btn btn-blue" href="#">
              <img src="./images/Vector.svg" alt="" className="img-fluid" />{" "}
              online
            </a>
            <a className="btn btn-outline-secondary" href="#">
              <img src="./images/Vector (1).svg" alt="" className="img-fluid" />{" "}
              london
            </a>
          </div>
        </div>
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              SPONSORS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Presenters
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Schedule
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
        <div className="header_right">
          <div className="btn-group d-none d-md-flex" role="group">
            <a className="btn btn-blue" href="#">
              <img src="./images/Vector.svg" alt="" className="img-fluid" />{" "}
              online
            </a>
            <a className="btn btn-outline-secondary" href="#">
              <img src="./images/Vector (1).svg" alt="" className="img-fluid" />{" "}
              london
            </a>
          </div>
          <div className="button_wrapper">
            <a className="btn btn-primary" href="#">
              buy tickets
            </a>
          </div>
          <div className="social_media d-flex d-md-none">
            <a href="#">
              <img src="./images/social01.svg" alt="" className="img-fluid" />
            </a>
            <a href="#">
              <img src="./images/social02.svg" alt="" className="img-fluid" />
            </a>
            <a href="#">
              <img src="./images/social03.svg" alt="" className="img-fluid" />
            </a>
            <a href="#">
              <img src="./images/social04.svg" alt="" className="img-fluid" />
            </a>
            <a href="#">
              <img src="./images/social05.svg" alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div className="banner_content">
    <div className="container-fluid">
      <h1 className="heading_1">
        The Global
        <br /> <strong>NFT</strong> Summit is back in
        <strong>online</strong>.
      </h1>
      <h6>Understanding Non Fungibles</h6>
      <p>27th - 28th July 2022</p>
      <div className="counter">
        <div className="counter_box">
          <strong>62</strong>
          <span>days</span>
        </div>
        <div className="counter_box">
          <strong>13</strong>
          <span>hours</span>
        </div>
        <div className="counter_box">
          <strong>34</strong>
          <span>
            min<span>utes</span>
          </span>
        </div>
        <div className="counter_box">
          <strong>54</strong>
          <span>
            sec<span>onds</span>
          </span>
        </div>
      </div>
      <div className="button_wrapper">
        <a className="btn btn-primary" href="#">
          buy tickets
        </a>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Header
