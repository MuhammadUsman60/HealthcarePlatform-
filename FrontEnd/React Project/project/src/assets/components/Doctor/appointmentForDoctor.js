import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const AppointmentForDoctor = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    appointmentDate: '',
    appointmentTime: '',
    amPm: 'AM',
    testType: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/DoctorConsultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Form Data Submitted:', result);
        alert('Consultation booked successfully');
        navigate('/');
      } else {
        console.error('Submission Error:', result);
        alert('Error booking consultation');
      }

    } catch (error) {
      console.error('Network Error:', error);
      alert('Network Error');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} className='mt-4 mb-4'>
      <h2 className='headerfonts'>Booking Form</h2>
      <p className='parafonts'>Please fill out the form below to book a Doctor Consultation.</p>
      
      <label className='parafonts'>Full Name</label>
      <div style={styles.row}>
        <div style={styles.col}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.col}>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <label className='parafonts'>Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="example@example.com"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />

      <label className='parafonts'>Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        placeholder="(000) 000-0000"
        value={formData.phoneNumber}
        onChange={handleChange}
        style={styles.input}
      />

      <label className='parafonts'>Preferred Appointment Date</label>
      <input
        type="date"
        name="appointmentDate"
        value={formData.appointmentDate}
        onChange={handleChange}
        style={styles.input}
      />

      <label className='parafonts'>Preferred Appointment Time</label>
      <div style={styles.row}>
        <div style={styles.col}>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.col}>
          <select
            name="amPm"
            value={formData.amPm}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <label className='parafonts'>Additional Comments</label>
      <textarea
        name="comments"
        placeholder="Additional comments or questions..."
        value={formData.comments}
        onChange={handleChange}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  col: {
    flex: '1',
    marginRight: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AppointmentForDoctor;
