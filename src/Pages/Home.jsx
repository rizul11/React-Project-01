import React from 'react'
import Icons from '../assets/images/Index'
import Orator from '../Components/Orator'
import Calendar from '../Components/Calendar'
import Testimonial from '../Components/Testimonial'
import GlobalNft from '../Components/GlobalNft'
import Benefactor from '../Components/Benefactor'

function Home() {
  return (
    <>
    <>
  <section className="features">
    <div className="features_inner">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="features_box">
              <h3 className="heading_3">The growth of NFT technology</h3>
              <h5 className="heading_5">STAGE ONE - 28TH JULY</h5>
              <p>
                Join us to revisit the growing market that is taking the
                internet by storm, that of the NFT. Delve into the exciting ways
                that blockchain technology is being utilized for digital content
                and ownership. Learn the difference between your fungibles and
                non-fungibles at this 2 day online event and glance ahead at
                what the future holds for this exciting technology.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="features_box">
              <h3 className="heading_3">The application and future of NFTs</h3>
              <h5 className="heading_5">STAGE TWO - 29TH JULY</h5>
              <p>
                Discover how NFTs are being implemented across traditional
                industries, such as entertainment, farming, banking and
                countless others.. The use cases, as ever with emerging
                technologies, are still being discovered. Join us, to explore
                the innovative applications unfolding today and understand how
                it might be applicable to your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md">
        <div className="up_to_date">
          <h3 className="heading_3">
            Keep up to date with the evolving technology and
            <br />1 use cases of NFTs. Stay ahead of the curve.
          </h3>
        </div>
      </div>
    </div>
  </section>
  <section className="tech_circus">
    <div className="tech_circus_inner">
      <div className="container-sm">
        <div className="video_wrapper">
          <div className="video_content">
            <img src={Icons.Bitmap} alt="" className="img-fluid mb-4" />
            <br />
            <img
              
              src={Icons.TheGlobalNFTSummi}
              alt=""
              className="img-fluid mb-3"
            />
            <br />
            
            <img src={Icons.nft} alt="" className="img-fluid" />
            <img
             
              src={Icons.TheGlobalNFTSummi1}
              alt=""
              className="img-fluid"
            />
          </div>
          <img
            
            src={Icons.icons8_play_copy}
            alt=""
            className="img-fluid button"
          />
        </div>
      </div>
    </div>
  </section>
  <section className="free_poap">
    <div className="free_poap_inner">
      <div className="container-sm">
        <div className="free_poap_box d-none d-sm-block">
          <h2 className="heading_2">Free POAP with every ticket</h2>
          <p>
            Eu sed malesuada pretium, nisi, tellus ultrices. Vitae pellentesque
            diam blandit pretium nec. Volutpat habitasse.Eu sed malesuada
            pretium, nisi, tellus ultrices.
          </p>
          <a className="btn btn-primary" href="/">
            GET YOUR POAP
          </a>
          <div className="row">
            <div className="col-md-4">
              <img
                
                src={Icons.free_poap_1}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                
                src={Icons.free_poap_2}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
               
                src={Icons.free_poap_3}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="free_poap_box d-md-none">
          <h2 className="heading_2">Buy tickets to BAD Conference</h2>
          <p>
            Eu sed malesuada pretium, nisi, tellus ultrices. Vitae pellentesque
            diam blandit pretium nec.
          </p>
          <a className="btn btn-primary" href="/">
            GET YOUR POAP
          </a>
          <img
            
            src={Icons.buy_tickets_bad}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="client_logo">
          <h2 className="heading_2">
            Listen to some of the biggest players in the NFT industry.
          </h2>
          <div className="row gx-4 align-items-center">
            <div className="col-4">
             
              <img src={Icons.wax} alt="" className="img-fluid" />
            </div>
            <div className="col-4">
             
              <img src={Icons.nba} alt="" className="img-fluid" />
            </div>
            <div className="col-4">
              
              <img src={Icons.br} alt="" className="img-fluid" />
            </div>
            <div className="col-6">
              
              <img src={Icons.dece} alt="" className="img-fluid" />
            </div>
            <div className="col-6">
              
              <img src={Icons.sandbox} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="services">
    <div className="container-lg">
      <div className="row gx-4">
        <div className="col-md-4">
          <div className="services_box">
            
            <img src={Icons.services_1} alt="" className="img-fluid" />
            <h4 className="heading_4">Immersive Experience</h4>
            <h6>
              Our powerful platform allows for a truly interactive global live
              event.
            </h6>
            <p className="d-none d-sm-block">
              Join speakers from around the world to explore the cutting edge of
              NFT technology and it's impact. Through interactive speaker
              engagement, including live, upvoted Q&amp;A, interactive polling
              and inter-attendee chat, you can explore all content in an
              authentically intimate way. Meet the many exciting projects
              exhibiting in virtual booths at the event, to learn more about
              their journey, talent drives, new business and more.
            </p>
            <p className="d-sm-none">
              Our powerful platform allows for a truly interactive global live
              event.
            </p>
            <a href="/" className="see_more d-sm-none">
              
              <img src={Icons.down_arrow} alt="" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services_box">
            
            <img src={Icons.services_2} alt="" className="img-fluid" />
            <h4 className="heading_4">Network With Everyone</h4>
            <h6>Become a part of the conversation and network at your pace.</h6>
            <p className="d-none d-sm-block">
              Engage directly with speakers, partners and other delegates via
              our industry leading networking platform. Featuring a range of
              interactive tools, including group roundtables for open forum
              discussions, as well as the popular speed networking and brand new
              fluid spaces, it truly is the networking event of the season.
              Discover new projects and make new friends from around the world,
              to help progress your career and/or portfolio.
            </p>
            <p className="d-sm-none">
              Our powerful platform allows for a truly interactive global live
              event.
            </p>
            <a href="/" className="see_more d-sm-none">
              
              <img src={Icons.down_arrow} alt="" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services_box">
            
            <img src={Icons.services_3} alt="" className="img-fluid" />
            <h4 className="heading_4">Never Miss a Thing</h4>
            <h6>
              An event that adapts to the pace of your learning style.
              On-demand.
            </h6>
            <p className="d-none d-sm-block">
              With our powerful scheduling feature, you can plan your live event
              experience way in advance, as well as book meetings with peers,
              partners and speakers both before and during the event. Talks are
              recorded and rendered immediately; available on-demand globally.
              If you're joining later, you can still rewind and re-watch all NFT
              Summit content for an entire year once it has aired. You can also
              collect any assets shared by speakers at the TC Booth!
            </p>
            <p className="d-sm-none">
              Our powerful platform allows for a truly interactive global live
              event.
            </p>
            <a href="/" className="see_more d-sm-none">
             
              <img src={Icons.down_arrow} alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Benefactor/>
  <section className="updates">
    <div className="container-lg">
      <h1 className="heading_1">Updates</h1>
      <div className="updates_inner">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="updates_box">
              <div className="updates_box_top">
                <img
                  src={Icons.Oval_Tech}
                  alt=""
                  className="img-fluid"
                />
                <strong>TechCircus</strong> <span>22 jul</span>
              </div>
              <p>
                Eu sed malesuada pretium, nisi, tellus ultrices. Vitae diam. Eu
                sed <a href="/">malesuada</a> pretium, nisi, tellus . Vitae
                diam.
              </p>
              <img
                src={Icons.Updates01}
                alt=""
                className="img-fluid updates_image"
              />
              <div className="social_updates">
                <a href="/">
                  <img src={Icons.Reply} alt="" className="img-fluid" />
                  19
                </a>
                <a href="/">
                  <img
                    src={Icons.Refresh}
                    alt=""
                    className="img-fluid"
                  />
                  19
                </a>
                <a href="/">
                  <img
                    src={Icons.Wishlist}
                    alt=""
                    className="img-fluid"
                  />
                  19
                </a>
                <a href="/">
                  <img src={Icons.Upload } alt="" className="img-fluid" />
                </a>
              </div>
              <div className="line" />
              <p>
                via <a href="/">Twitter</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="updates_box">
              <div className="updates_box_top">
                <img
                  src={Icons.Oval_Tech}
                  alt=""
                  className="img-fluid"
                />
                <strong>TechCircus</strong> <span>22 jul</span>
              </div>
              <p>
                Eu sed malesuada pretium, nisi, tellus ultrices. Vitae diam. Eu
                sed <a href="/">malesuada</a> pretium, nisi, tellus . Vitae
                diam.
              </p>
              <img
                src={Icons.Updates02}
                alt=""
                className="img-fluid updates_image"
              />
              <div className="social_updates">
                <a href="/">
                  <img src={Icons.Reply} alt="" className="img-fluid" />
                  19
                </a>
                <a href="/">
                  <img
                    src={Icons.Refresh}
                    alt=""
                    className="img-fluid"
                  />
                  19
                </a>
                <a href="/">
                  <img
                    src={Icons.Wishlist}
                    alt=""
                    className="img-fluid"
                  />
                  19
                </a>
                <a href="/">
                  <img src={Icons.Upload} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="line" />
              <p>
                via <a href="/">Twitter</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="updates_box">
              <div className="updates_box_top">
                <img
                  src={Icons.Oval_Tech}
                  alt=""
                  className="img-fluid"
                />
                <strong>TechCircus</strong> <span>22 jul</span>
              </div>
              <p>
                Eu sed malesuada pretium, nisi, tellus ultrices. Vitae diam. Eu
                sed <a href="/">malesuada</a> pretium, nisi, tellus . Vitae
                diam.
              </p>
              <img
                src={Icons.Updates03}
                alt=""
                className="img-fluid updates_image"
              />
              <div className="social_updates">
                <a href="/">
                  <img src={Icons.Reply} alt="" className="img-fluid" />
                  19
                </a>
                <a href="/">
                  <img
                    src={Icons.Refresh}
                    alt=""
                    className="img-fluid"
                  />
                  19
                </a>
                <a href="/">
                  <img
                    src={Icons.Wishlist}
                    alt=""
                    className="img-fluid"
                  />
                  19
                </a>
                <a href="/">
                  <img src={Icons.Upload} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="line" />
              <p>
                via <a href="/">Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="button_wrapper">
        <a className="btn btn-primary" href="/">
          show more updates
        </a>
      </div>
    </div>
  </section>
  <Orator/>
  <Calendar/>
  <Testimonial/>
  <GlobalNft/>
  <section className="questions">
    <div className="container-sm">
      <h1 className="heading_1">
        Questions? <span>Say hi.</span>
      </h1>
      <div className="questions_inner">
        <form>
          <div className="form_field">
            <div className="row gx-4">
              <div className="col-md-12 mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">phone</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">company</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">subject</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Enquiry</label>
                <textarea className="form-control" rows={4} defaultValue={""} />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="interested">
        <h5 className="heading_5">Interested in becoming a speaker?</h5>
        <p>
          We are always looking for new speakers on a variety of design &amp;
          technology disciplines. Please apply by filling in our{" "}
          <a href="/">typeform</a>.
        </p>
      </div>
    </div>
  </section>
  <section className="our_team">
    <div className="container-lg">
      <h1 className="heading_1">Our team</h1>
      <div className="our_team_inner">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="our_team_box">
              <img
                src={Icons.Our_team01}
                alt=""
                className="img-fluid team_image"
              />
              <h4 className="heading_4">Selina Peerbux</h4>
              <h5 className="heading_5">Content CURATOR</h5>
              <a href="/" className="more_info">
                say hello
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="our_team_box">
              <img
                src={Icons.Our_team02}
                alt=""
                className="img-fluid team_image"
              />
              <h4 className="heading_4">Ellie Burchett</h4>
              <h5 className="heading_5">Campaign Manager</h5>
              <a href="/" className="more_info">
                say hello
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="our_team_box">
              <img
                src={Icons.Our_team03}
                alt=""
                className="img-fluid team_image"
              />
              <h4 className="heading_4">James Davies</h4>
              <h5 className="heading_5">Partnerships</h5>
              <a href="/" className="more_info">
                say hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="buy_ticket">
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="ticker__item item_text">
          <strong>Buy Tickets</strong>
        </div>
        <div className="ticker__item">
          
          <img src={Icons.Tickets_Icon01} alt="" className="img-fluid" />
        </div>
        <div className="ticker__item item_text">The Global NFT Summit</div>
        <div className="ticker__item">
          
          <img src={Icons.Tickets_Icon02} alt="" className="img-fluid" />
        </div>
        <div className="ticker__item item_text">
          <strong>Buy Tickets</strong>
        </div>
        <div className="ticker__item">
          
          <img src={Icons.Tickets_Icon03} alt="" className="img-fluid" />
        </div>
        <div className="ticker__item item_text">27-28th July 2022</div>
        <div className="ticker__item">
          <img src="./images/Tickets_Icon01.svg" alt="" className="img-fluid" />
          <img src={Icons.Tickets_Icon01} alt="" className="img-fluid" />
        </div>
        <div className="ticker__item item_text">The Global NFT Summit</div>
        <div className="ticker__item">
          <img src={Icons.Tickets_Icon02} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default Home

    
    

  
  