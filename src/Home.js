import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img alt="" className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg" />
      </div>

      <div className="home__row">
        <Product id="326831823219679" title="The Lean Start Up" price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5} />
        <Product id="32683182321987685" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl" price={239.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71oQMOaoWAL._AC_SL1500_.jpg" />
      </div>
      <div className="home__row">
        <Product id="326831823219785" title="Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Mystic Black (US Version)" price={129.99} image="https://images-na.ssl-images-amazon.com/images/I/71LcAql4%2BaL._AC_SL1500_.jpg" rating={4} />
        <Product id="32683182321954356" title="Apple AirPods with Charging Case (Wired)
" price={119.99} image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg
" rating={5} />
        <Product id="32683182321911" title="New Apple AirPods Max - Space Gray
" price={549.99} image="https://images-na.ssl-images-amazon.com/images/I/81jqUPkIVRL._AC_SL1500_.jpg" rating={5} />
        <Product id="3268318232192312" title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth
" price={135.85} image="https://images-na.ssl-images-amazon.com/images/I/51QxA-98Q%2BL._AC_SL1000_.jpg" rating={3} />

      </div>
      <div className="home__row">
      <Product id="326831823219" title="Cracking the coding interview" price={26.99} image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg" rating={5} />
      <Product id="3268318232321319" title="Brave New World" price={9.99} image="https://m.media-amazon.com/images/I/81zE42gT3xL._AC_UY327_FMwebp_QL65_.jpg" rating={5} />

      </div>
    </div>
  );
}

export default Home