import React from 'react';
import Card1Image from '../Img/card1.png'; 
import Consult from '../Img/consultation2.png';
import Lab from '../Img/home-labtest.png';
import Home from '../Img/homeservice2.png';
import '../css/carosel.css';
import { Link } from 'react-router-dom';

const Card1 = () => {
  const card = [
    {
      h: "Pharmacy",
      p: "Pharmacy is place where medicines are sold",
      button: "Order Now",
      backgroundColor: "#dcebfa",
      image1: Card1Image,
      buttonColor:"#2a579b",
      height:'22vh',
      link:'/Medicines'
    },
    {
      h: "Doctor Consultation",
      p: "Speak to doctor?",
      button: "Book Now",
      backgroundColor: "#def0ef",
      image1: Consult,
      buttonColor:"#32aa9e",
      height:'23vh',
      link:'/DoctorConsultation'
    },
    {
      h: "Home Services",
      p: "At home Services",
      button: "Book Now",
      backgroundColor: "#f2f2f0",
      image1: Home,
      buttonColor:"#2a579b",
      height:'26vh',
      link:'/H_Services'
    },
    {
      h: "Lab Test & Checkups",
      p: "Lab at home",
      button: "Book Now",
      backgroundColor: "#f7dedb",
      image1: Lab,
      buttonColor:"#2a579b",
      height:'26vh',
      link:'/labCategoriesPage'
    },
  ];

  return (
    <div className="card-container row mt-4 ms-2" style={{ width: '98%' }}>
      {card.map((item, index) => (
        <div key={index} className='col card1'>
          <div className="rounded rounded-3 pt-3 ps-3 pe-3" style={{
            backgroundColor: item.backgroundColor,
            height: '100%'
          }}>
            <div style={{ height: item.height, color: '#000000c7' }}>
              <h5>{item.h}</h5>
              <p>{item.p}</p>
            </div>
            <div className='d-flex justify-content-between pb-2'>
              <Link to={item.link} className='btn mt-auto btnstyle' style={{ backgroundColor: item.buttonColor, color: 'wheat' }}>
                {item.button}
              </Link>
              <img src={item.image1} alt='Card' className='card1pic' style={{ width: '100px', height: '100%' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card1;
