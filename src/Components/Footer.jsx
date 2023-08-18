import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer">
  <div className="container">
    <div className="footer_top">
      <div className="row gx-4">
        <div className="col-md-6">
          <div className="footer_widget">
            <h5 className="heading_5">Contact</h5>
            <p>info@techcircus.co.uk</p>
            <div className="social_media">
              <a href="/">
                <img src="./images/social01.svg" alt="" className="img-fluid" />
              </a>
              <a href="/">
                <img src="./images/social02.svg" alt="" className="img-fluid" />
              </a>
              <a href="/">
                <img src="./images/social03.svg" alt="" className="img-fluid" />
              </a>
              <a href="/">
                <img src="./images/social04.svg" alt="" className="img-fluid" />
              </a>
              <a href="/">
                <img src="./images/social05.svg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="footer_links">
            <div className="row g-0">
              <div className="col-6">
                <div className="footer_widget border_left">
                  <h5 className="heading_5">Pages</h5>
                  <ul>
                    <li>
                      <a href="/">SCHEDULE</a>
                    </li>
                    <li>
                      <a href="/">CONTACT</a>
                    </li>
                    <li>
                      <a href="/">BUY TICKETS</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="footer_widget border_left">
                  <h5 className="heading_5">Important</h5>
                  <ul>
                    <li>
                      <a href="/">PRIVACY POLICY</a>
                    </li>
                    <li>
                      <a href="/">TERMS &amp; CONDITIONS</a>
                    </li>
                    <li>
                      <a href="/">CODE OF CONDUCT</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_bottom">
      <div className="row gx-4">
        <div className="col-md-8 order-sm-last">
          <div className="footer_description">
            <p className="d-none d-sm-block">
              The Global NFT Summit is a Tech Circus event. We are an
              independent company that produces educational events for the
              community of digital design, product &amp; UX. We collaborate with
              global clients, agencies and organisations to bring together the
              leading experts in the digital market, and we then use these
              connections to guarantee high-quality educational events, training
              and content for professional growth.
              <br />
              Find out more by visiting our website <a href="/">here</a>.
            </p>
            <p className="d-sm-none">
              Defi Conference is a Tech Circus event. We are an independent
              company that produces educational events for the community of
              digital design, product &amp; UX. We collaborate with global
              clients, agencies and organisations to bring together the leading
              experts in the digital market, and we then use these connections
              to guarantee high-quality educational events, training and content
              for professional growth. Find out more by visiting our website
              here.
            </p>
          </div>
        </div>
        <div className="col-md-4 order-sm-first">
          <div className="footer_logo">
            <a href="/">
              <img
                src="./images/footer_logo.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
