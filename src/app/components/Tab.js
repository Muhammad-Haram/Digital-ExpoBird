import React from 'react'

const Tab = () => {
  return (
     <>
        <section id="tabs">
        <div class="buttons" data-aos="fade-up" data-aos-duration="1000">
            <buttons class="tab-btn" data-tab="tab1">Investigative Services</buttons>
            <buttons class="tab-btn" data-tab="tab2">Security Consultations</buttons>
            <buttons class="tab-btn" data-tab="tab3">Criminal Defense Investigations</buttons>
        </div>

        <div id="tab1" class="tabcontent" data-aos="fade-up" data-aos-duration="1000">
            <div class="tab-text">
                <h1 class="head1">Investigative Services</h1>
                <p class="para">A small river named Duden flows by their place and supplies it with the necessary
                    regelialia.</p>
                <button class="normal">Read More</button>
            </div>
            <div class="tab-img">
                <img src="https://preview.colorlib.com/theme/solicitor/images/hero_1.jpg.webp" alt=""/>
            </div>
        </div>

        <div id="tab2" class="tabcontent" data-aos="fade-up" data-aos-duration="1000">
            <div class="tab-text">
                <h1 class="head1">Security Consultations</h1>
                <p class="para">A small river named Duden flows by their place and supplies it with the necessary
                    regelialia.</p>
                <button class="normal">Read More</button>
            </div>
            <div class="tab-img">
                <img src="https://preview.colorlib.com/theme/solicitor/images/hero_2.jpg.webp" alt=""/>
            </div>
        </div>

        <div id="tab3" class="tabcontent" data-aos="fade-up" data-aos-duration="1000">
            <div class="tab-text">
                <h1 class="head1">Criminal Defense Investigations</h1>
                <p class="para">A small river named Duden flows by their place and supplies it with the necessary
                    regelialia.</p>
                <button class="normal">Read More</button>
            </div>
            <div class="tab-img">
                <img src="https://preview.colorlib.com/theme/solicitor/images/hero_3.jpg.webp" alt=""/>
            </div>
        </div>
    </section>
     </>
  )
}

export default Tab