import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function DoctorConsultation() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = "http://localhost:8000/api/DoctorList";

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
  
    const isLoggedIn = localStorage.getItem('token'); 

    if (!isLoggedIn) {
      navigate('/login'); 
    } else {
      fetchData();
    }
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {error && <p>Error: {error}</p>}
      {data.map((item) => (
        <div className="card" style={{ width: '18rem', margin: '10px' }} key={item.id}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img
              className="card-img-top"
              src={item.photo || 'placeholder-image-url'} 
              alt={item.name}
              style={{
                backgroundColor: "black",
                width: '10rem',
                height: '10rem',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title parafonts">{item.doctor_name}</h5>
            <p className="card-text parafonts">{item.specialization || "Specialization not provided"}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item parafonts">Fees: {item.fees ? `Rs ${item.fees}` : "N/A"}</li>
          </ul>
          <div className="card-body text-center">
            <Link to='/appointmentForDoctor' className="card-link">Book an appointment</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
