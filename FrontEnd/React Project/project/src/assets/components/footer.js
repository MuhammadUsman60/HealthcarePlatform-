import React from 'react'
import logo from './Img/logo.png';
import './css/Footer.css'
export default function footer() {
  return (
    <>
    <div className='fotertext' style={{backgroundColor:'#eee'}}>
    <div class="container text-center">
    <div class="row p-4">
      <div class="col">
        <h5 className='mb-3 headercolor'>DAWAAI</h5>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Careers</li>
            <li className='list-group-item'>Blog</li>
            <li className='list-group-item'>Covid19</li>
            <li className='list-group-item'>About us</li>
            <li className='list-group-item'>Contact us</li>
            <li className='list-group-item'>Delivery</li>
            <li className='list-group-item'>Privacy Policy</li>
            <li className='list-group-item'>FAQ's</li>
            <li className='list-group-item'>Refund Policy</li>
            <li className='list-group-item'>Offers</li>
        </ul>
      </div>
      <div class="col">
      <h5 className='mb-3 headercolor'>POPULAR CATEGORIES</h5>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Oral Care</li>
            <li className='list-group-item'>Baby Nutrition</li>
            <li className='list-group-item'>Herbal Care</li>
            <li className='list-group-item'>Men's Health</li>
            <li className='list-group-item'>Women's Health</li>
            <li className='list-group-item'>Support & Braces</li>
            <li className='list-group-item'>Privacy Policy</li>
        </ul>
      </div>
      <div class="col">
      <h5 className='mb-3 headercolor'>CONTACT US</h5>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Tel: 03167282313</li>
            <li className='list-group-item'>Email: info@onlinepharmacy.com</li>
            <li className='list-group-item'>505-A Abdal Cheema,Gujranwala,Punjab</li>
        </ul>
      </div>
      <div className='col mt-auto mb-auto d-none d-md-block'>
        <img src={logo} />
      </div>
    </div>
  </div>

  </div>
    <div style={{backgroundColor:'#166aa6'}}className='p-2 footercolor'>
    <h5 style={{fontWeight:'700'}}>© 2024 Dawaai.Pk, All Rights Reserved.</h5>
  </div>
  </>
  )
}
