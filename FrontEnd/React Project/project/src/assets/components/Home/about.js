import React from "react";
import '../css/About.css';
import Patner1 from '../Img/patner1.png'
import Patner2 from '../Img/patner2.png'
import Patner3 from '../Img/patner3.png'
import Patner4 from '../Img/patner4.png'
import Patner5 from '../Img/patner5.png'
import Patner6 from '../Img/patner6.png'
export default function about() {
  const partners = [
    Patner1,
    Patner2,
    Patner3,
    Patner4,
    Patner5,
    Patner6
  ];
  return (
    <>
    <div className="aboutBody p-5" style={{fontSize:'13px'}}>
   
      <h2 className="d-flex justify-content-center mb-3 abouth" style={{color: '#166aa6'}} >ABOUT</h2>
      <p className="container textp1 p-2 aboutp">
      Dawaii Pharmacy" is envisioned as a cornerstone of health and wellness within our community,
       dedicated to providing accessible and reliable pharmaceutical services.
       Our mission is to offer a personalized approach to healthcare,
       ensuring every customer receives expert guidance and support tailored to their needs.{" "}
       <br/>
       With a commitment to quality, safety, and convenience,
       Dawaii Pharmacy strives to foster a trusted relationship with our patrons, 
      promoting health through comprehensive medication management and educational initiatives..
      <br/>
      Through compassionate care and a focus on customer well-being, 
      Dawaii Pharmacy aims to be a beacon of health empowerment,
       helping individuals lead healthier lives with confidence and peace of mind
      </p>
      <p className="container textp1 p-2 aboutp">
      <h6 style={{color: '#166aa6'}} >Online Pharmacy</h6>
      Dawaai is an online pharmacy that sells genuine medicines at a discounted rate. 
      We offer the lowest medicine price in Pakistan while offering several bank discounts and promo codes with Dawaai discounts. 
      The process works by uploading a prescription that our pharmacists will verify, and create an order for you.
      We offer medicines from reputable brands , Pfizer, GSK, Getz Pharma, and more.
      </p>
      <p className="container textp1 p-2 aboutp">
      <h6 style={{color: '#166aa6'}} >DOCTOR CONSULTATION</h6>
      Dawaai’s Online Doctor consultation service is safe and easy. We offer free live chat with doctors and paid video 
      consultations with doctors through easy online appointments. We have a multi-disciplinary team of highly qualified doctors 
      from leading General Physicians, Gynaecologists,
      Chest Specialists, Dermatologists, Nutritionists to Cardiologists in Pakistan, etc that prioritize patient confidentiality.
      </p>
      <p className="container textp1 p-2 aboutp">
      <h6 style={{color: '#166aa6'}} >LAB TESTS & CHECK-UPS</h6>
      Book lab tests online at discounted rates anywhere in Pakistan on the Dawaai website and app. 
      Get your urgent health check-ups and popular health tests such as COVID-19 IgG Antibody test, Blood tests, 
      HbA1c test and more done right from your home. 
      We provide online patient reports and lab packages from  Chughtai Labs, Essa Lab and Pro-Lab.
      </p>
      <p className="container textp1 p-2 aboutp">
      <h6 style={{color: '#166aa6'}} >HEALTH PACKAGES & PROGRAMS</h6>
      Do you struggle to meet your health goals and maintain a healthy lifestyle? Worry not,
       Dawaai has introduced various health packages and programs with which you can stick to a healthier routine 
       and lifestyle along with earning medicine coverages, free doctor consultation vouchers, and rewards.
       Dawaai offers Diabetes Care Program and Obesity Care Program that you can subscribe to at nominal rates.
      </p>
    
    </div>
    <div className="container">
        <h3 className="container textp1 p-2 aboutp" style={{ color: '#166aa6' }}>OUR PARTNERS</h3>
        <div className="row" style={{ width: "90%" }}>
          {partners.map((img, index) => (
            <div className="col-lg-2 col-md-4 mt-auto mb-auto" key={index}>
              <img src={img} alt={`Partner ${index + 1}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
