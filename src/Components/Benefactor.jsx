import React from 'react'
import Icons from '../assets/images/Index'
function Benefactor() {
  return (
    <>
    <section className="sponsors">
  <div className="container">
    <h1 className="heading_1 d-none d-sm-block">Sponsors</h1>
    <h4 className="heading_4 d-sm-none">Sponsored by</h4>
    <div className="sponsors_logo">
      <div className="row gx-4 align-items-center">
        <div className="col-md-4">
          <img src={Icons.dece} alt="" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={Icons.Alien} alt="" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={Icons.sandbox} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
    <a className="btn btn-primary" href="/">
      BECOME A SPONSOR
    </a>
  </div>
</section>

    </>
  )
}

export default Benefactor
