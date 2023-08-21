import React from 'react'
import Icons from '../assets/images/Index'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Testimonial() {
  return (
    <>
     <section class="testimonial">
        <div class="container-lg">
            <div class="testimonial_inner">
                <OwlCarousel class="owl-carousel owl-theme">
                    <div class="testimonial_box">
                        <img src={Icons.quote} alt="" class="img-fluid quote_image" />
                        <p class="description">
                            Lectus vestibulum pharetra hendrerit imperdiet etiam fermentum
                            vel egestas. Sed ut nibh urna commodo vitae ut. Magna ultrices
                            aliquet vitae risus sit. Sem pretium gravida vitae ac.
                        </p>
                        <img src={Icons.plus} alt="" class="img-fluid divider_image" />
                        <div class="author_image">
                            <img src={Icons.unsplash_07} alt="" class="img-fluid" />
                        </div>
                        <p class="author">Wigmund Samuel</p>
                        <h6 class="job">JOB TITLE ROLE</h6>
                    </div>
                    <div class="testimonial_box">
                        <img src={Icons.quote} alt="" class="img-fluid quote_image" />
                        <p class="description">
                            Lectus vestibulum pharetra hendrerit imperdiet etiam fermentum
                            vel egestas. Sed ut nibh urna commodo vitae ut. Magna ultrices
                            aliquet vitae risus sit. Sem pretium gravida vitae ac.
                        </p>
                        <img src={Icons.plus} alt="" class="img-fluid divider_image" />
                        <div class="author_image">
                            <img src={Icons.unsplash_07} alt="" class="img-fluid" />
                        </div>
                        <p class="author">Wigmund Samuel</p>
                        <h6 class="job">JOB TITLE ROLE</h6>
                    </div>
                    <div class="testimonial_box">
                        <img src={Icons.quote} alt="" class="img-fluid quote_image" />
                        <p class="description">
                            Lectus vestibulum pharetra hendrerit imperdiet etiam fermentum
                            vel egestas. Sed ut nibh urna commodo vitae ut. Magna ultrices
                            aliquet vitae risus sit. Sem pretium gravida vitae ac.
                        </p>
                        <img src={Icons.plus} alt="" class="img-fluid divider_image" />
                        <div class="author_image">
                            <img src={Icons.unsplash_07} alt="" class="img-fluid" />
                        </div>
                        <p class="author">Wigmund Samuel</p>
                        <h6 class="job">JOB TITLE ROLE</h6>
                    </div>
                </OwlCarousel>

            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonial
