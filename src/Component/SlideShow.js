import React from 'react'
import HeroSlider, { Slide } from "hero-slider";
// import S1 from './images/s1.jpg'
// import S2 from './images/s2.jpg'
// import S3 from './images/s3.jpg'
// import S4 from './images/s4.jpg'

const S1 = 'https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg'
const S2 = 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/UNREC/CAT_PC-2_3000._CB598786201_.jpg'
const S3 = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Home_mela_july_3000x1200._CB598959250_.jpg"
const S4 = 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/GW/Groomingfest/Amazon_GRD_DesktopHero_3000x1200-REC._CB601139434_.jpg'
const S5 = 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg'
const S6 = 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/julyatf23/unrec/apay/MA_3000._CB600347170_.jpg'
const S7 = 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Drying_rack_2_Desk_3000x1200_Unrec_July._CB601155232_.jpg'

export default function SlideShow() {

  return (
    <>
      <HeroSlider
        height={"50vh"}
        top={'100px'}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide)
        }}
      >


        <Slide
          background={{
            backgroundImageSrc: S1
          }}
          style={{ height: '40rem' }}
        />

        <Slide
          background={{
            backgroundImageSrc: S2
          }}
          style={{ height: '40rem' }}
        />

        <Slide
          background={{
            backgroundImageSrc: S3
          }}
          style={{ height: '40rem' }}
        />

        <Slide
          background={{
            backgroundImageSrc: S4
          }}
          style={{ height: '40rem' }}
        />
        <Slide
          background={{
            backgroundImageSrc: S5
          }}
          style={{ height: '40rem' }}
        />
        <Slide
          background={{
            backgroundImageSrc: S6
          }}
          style={{ height: '40rem' }}
        />
        <Slide
          background={{
            backgroundImageSrc: S7
          }}
          style={{ height: '40rem' }}
        />

        {/* <MenuNav /> */}
      </HeroSlider>
    </>
  )
}
