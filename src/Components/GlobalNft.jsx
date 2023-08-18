import React from 'react'

function GlobalNft() {
  return (
    <>
    <section className="global_nft">
  <div className="container-lg">
    <h1 className="heading_1">
      Buy tickets to The
      <br /> Global NFT Summit
    </h1>
    <div className="global_nft_inner">
      <p className="week">
        Every two weeks, 250 tickets unlock. Once 250 tickets are purchased,
        registration closes and you'll have to wait until the new release.
      </p>
      <p>
        The next release is on <a href="#">February 15th</a> and prices increase
        by <a href="#">£5</a>.
      </p>
      <div className="progress_bar d-none d-sm-block">
        <div className="lineParent">
          <div className="connecting-line" />
        </div>
        <div className="step_wrapper">
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Nov 1</div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Nov 15</div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Dec 1</div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Jan 1</div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Jan 15</div>
          </div>
          <div className="stepTab active">
            <div className="square-tab" />
            <div className="month">
              February 1 <span>+£5</span>
            </div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Feb 15</div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Mar 1</div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Mar 15</div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Apr 1 1</div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Apr 15</div>
          </div>
        </div>
      </div>
      <div className="progress_bar d-sm-none">
        <div className="lineParent">
          <div className="connecting-line" />
        </div>
        <div className="step_wrapper">
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Jan 15</div>
          </div>
          <div className="stepTab active">
            <div className="square-tab" />
            <div className="month">
              February 1 <span>+£5</span>
            </div>
          </div>
          <div className="stepTab">
            <div className="square-tab" />
            <div className="month">Feb 15</div>
          </div>
        </div>
      </div>
      <h3 className="heading_3">Current ticket prices</h3>
      <div className="ticket_prices">
        <div className="row g-4">
          <div className="col-md-3 col-6">
            <div className="prices_box">
              <h4>Early bird ticket</h4>
              <img
                src="./images/price_divider.png"
                alt=""
                className="img-fluid prices_image"
              />
              <p className="old_price">£45 each</p>
              <p className="new_price">£50 each</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="prices_box">
              <h4>Final release ticket</h4>
              <img
                src="./images/price_divider.png"
                alt=""
                className="img-fluid prices_image"
              />
              <p className="old_price">£84 each</p>
              <p className="new_price">£79 each</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="prices_box">
              <h4>Final release team ticket</h4>
              <img
                src="./images/price_divider.png"
                alt=""
                className="img-fluid prices_image"
              />
              <p className="old_price">£310 each</p>
              <p className="new_price">£315 each</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="prices_box">
              <h4>Final release + workshop </h4>
              <img
                src="./images/price_divider.png"
                alt=""
                className="img-fluid prices_image"
              />
              <p className="old_price">£124 each</p>
              <p className="new_price">£129 each</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buy_tickets">
        <div className="buy_tickets_content">
          <h2 className="heading_2">Buy tickets</h2>
          <h5 className="heading_5">28TH + 29TH JULY 2021</h5>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </p>
          <div className="button_wrapper">
            <a className="btn btn-primary" href="#">
              buy tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default GlobalNft
