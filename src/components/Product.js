import React from 'react';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import './Product.css';

const product = () => {
  return (
    <section id="product" className="product-section">
      <h2>Products</h2>
      <div className="product-container">
        <div className="product">
          <img src={product1} alt="Boldfit Weight Machine" />
          <h3>Boldfit Weight Machine</h3>
          <p>Body Weight Weighing Machine Digital Bathroom Scale for Human Body Weight Measurement Extra Thick Weighing Scale for Home with Large LCD Display 36Months Warranty-BlackGold</p>
          <a class="link-opacity-75" href="https://www.amazon.in/Boldfit-Weighing-Bathroom-Measurement-Warranty/dp/B0BTDLWH5X/ref=lp_1374593031_1_10?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=RV6FF4CZVPQB7P4MFYD4&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D">Boldfit Weight Machine</a>
        </div>
        <div className="product">
          <img src={product2} alt="Gesto Star Master Projector" />
          <h3>Gesto Star Master Projector</h3>
          <p>USB Wire Colorful Romantic LED Star Master Sky Night Projector & Bed Light Lamp. LED Light Projector Lamp for Home Decoration, Diwali & Christmas (Assorted Color)</p>
          <a class="link-opacity-75" href="https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3ODM5OTAzMTA4MTMyMTkzOjE3MjA3NjU3NjI6c3BfbXRmOjMwMDA3ODUxNTQyMjQzMjo6MDo6&url=%2FGesto-Projector-Colorful-Decoration-Christmas%2Fdp%2FB0B6VMGGPV%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3MY9ZHVBQMH71%26dib%3DeyJ2IjoiMSJ9.dii7MbiZcGSzJ4PBDSKYyQ.KIK2fx-xfEHSEBi0kE2MW3MMFxO0uewRTcj9gOWAwj0%26dib_tag%3Dse%26keywords%3Dsmartroom%2Bcontroller%26qid%3D1720765762%26rnid%3D976442031%26s%3Dkitchen%26sprefix%3Dsmartroom%2Bcontrolle%252Caps%252C184%26sr%3D1-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1">Gesto Star Master Projector</a>
        </div>
        <div className="product">
          <img src={product3} alt="Smart Digital Notebook" />
          <h3>Smart Digital Notebook</h3>
          <p>HUION Note X10 Smart Digital Notebook | (A5 Size), 50 Sheet | 9.5x7inch | Digital Notebook Drawing Tablet with Battery-free Pen Scribo 2 | Supports Windows, Mac, Android, IOS | Brown</p>
          <a class="link-opacity-75" href="https://www.amazon.in/HUION-Notebook-9-5x7inch-Battery-free-Supports/dp/B0CV55122L/ref=sr_1_2?crid=3JDWEQPBLL6LY&dib=eyJ2IjoiMSJ9.hFUKLlT_I1jthg38JkpsYg_U7ziqb8sBVgIVB4CicG5YyR7WnAf3mrEGW60S4PwydLVRjEZe6J9-QhqHkl1PzD5Rl75qonw8Ojqt9-i1iGUboUCmsOcpkIQKObudVI3q95vNMiTSaumBLXJTJkPOR0Xdd5Zsjm_0U1Q2pEzItiTHBUTvV1_Fk4Wua3awJwVEV5O3FWxntL5dVJdCHdf_rQsil3NJAc9MojAqkyJqJ4c.0nJ3SqUqRdg8xUvosVeOYNCdDyVUAzwXx1rEjmmWrw8&dib_tag=se&keywords=personal+digital+assistant&qid=1720765991&sprefix=personal+assistants%2Caps%2C206&sr=8-2">Smart Digital Notebook</a>
        </div>
      </div>
    </section>
  );
};

export default product;
