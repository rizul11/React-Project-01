import React from 'react'
import Icons from '../assets/images/Index'

function Orator() {
  return (
    <>
    <section className="speakers">
  <div className="container-lg">
    <h1 className="heading_1">Speakers</h1>
    <div className="speakers_inner">
      <div className="row gx-4">
        <div className="col-md-4">
          <div className="speakers_box">
            <div className="speakers_image_wrapper bg1">
              <img
                src={Icons.unsplash_01}
                alt=""
                className="img-fluid speakers_imge"
              />
            </div>
            <div className="speakers_content">
              <h4 className="heading_4">Tamia Lees</h4>
              <h6>STASHAWAY</h6>
              <p>
                Aenean et velit odio orci ipsum salar lectus eget sed morbi
                lorem ipsum eget.
              </p>
              <a href="/" className="more_info">
                MORE INFO
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="speakers_box">
            <div className="speakers_image_wrapper bg2">
              <img
                src={Icons.unsplash_02}
                alt=""
                className="img-fluid speakers_imge"
              />
            </div>
            <div className="speakers_content">
              <h4 className="heading_4">Khadijah Villa</h4>
              <h6>STASHAWAY</h6>
              <p>
                Aenean et velit odio orci ipsum salar lectus eget sed morbi
                lorem ipsum eget.
              </p>
              <a href="/" className="more_info">
                MORE INFO
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="speakers_box">
            <div className="speakers_image_wrapper bg3">
              <img
                src={Icons.unsplash_03}
                alt=""
                className="img-fluid speakers_imge"
              />
            </div>
            <div className="speakers_content">
              <h4 className="heading_4">Julie Greene</h4>
              <h6>STASHAWAY</h6>
              <p>
                Aenean et velit odio orci ipsum salar lectus eget sed morbi
                lorem ipsum eget.
              </p>
              <a href="/" className="more_info">
                MORE INFO
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="speakers_box">
            <div className="speakers_image_wrapper bg4">
              <img
                src={Icons.unsplash_04}
                alt=""
                className="img-fluid speakers_imge"
              />
            </div>
            <div className="speakers_content">
              <h4 className="heading_4">Alan Fresco</h4>
              <h6>STASHAWAY</h6>
              <p>
                Aenean et velit odio orci ipsum salar lectus eget sed morbi
                lorem ipsum eget.
              </p>
              <a href="/" className="more_info">
                MORE INFO
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="speakers_box">
            <div className="speakers_image_wrapper bg5">
              <img
                src={Icons.unsplash_05}
                alt=""
                className="img-fluid speakers_imge"
              />
            </div>
            <div className="speakers_content">
              <h4 className="heading_4">Andreas Baldwin</h4>
              <h6>STASHAWAY</h6>
              <p>
                Aenean et velit odio orci ipsum salar lectus eget sed morbi
                lorem ipsum eget.
              </p>
              <a href="/" className="more_info">
                MORE INFO
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="speakers_box">
            <div className="speakers_image_wrapper bg6">
              <img
                src={Icons.unsplash_06}
                alt=""
                className="img-fluid speakers_imge"
              />
            </div>
            <div className="speakers_content">
              <h4 className="heading_4">Camilla Davey</h4>
              <h6>STASHAWAY</h6>
              <p>
                Aenean et velit odio orci ipsum salar lectus eget sed morbi
                lorem ipsum eget.
              </p>
              <a href="/" className="more_info">
                MORE INFO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="button_wrapper">
      <a className="btn btn-primary" href="/">
        SHOW ALL SPEAKERS
      </a>
    </div>
  </div>
</section>

    </>
  )
}

export default Orator
