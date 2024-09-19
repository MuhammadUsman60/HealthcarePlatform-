import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavbarCom from './assets/components/navbarCom';
import Footer from './assets/components/footer';
import Home from './assets/home';
import Login from './assets/components/Login';
import ProductDetails from './assets/productDetails';
import CardForAll from './assets/components/cart/cardForAll';
import DoctorConsultation from './assets/components/Doctor/DoctorConsultation';
import AppointmentForDoctor from './assets/components/Doctor/appointmentForDoctor';
import CartPage from './assets/components/cart/CartPage';
import LabTest from './assets/components/Services/LabTest';
import CheckoutPage from './assets/components/cart/CheckoutPage';
import LabCategoriesPage from './assets/components/lab/labCategoriesPage';
import LabTestDetails from './assets/components/lab/TestDetailsPage';
import H_Services from './assets/components/Services/H_Services';

const Layout = ({ children }) => (
  <>
    <NavbarCom />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/Medicines',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/productDetails/:id',
    element: <Layout><ProductDetails /></Layout>,
  },
  {
    path: '/cardForAll/:categories',
    element: <Layout><CardForAll /></Layout>,
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>,
  },
  {
    path: '/LabTest',
    element: <Layout><LabTest /></Layout>,
  },
  {
    path: '/DoctorConsultation',
    element: <Layout><DoctorConsultation /></Layout>,
  },
  {
    path: '/appointmentForDoctor',
    element: <Layout><AppointmentForDoctor /></Layout>,
  },
  {
    path: '/CartPage',
    element: <Layout><CartPage /></Layout>,
  },
  {
    path: '/CheckoutPage',
    element: <Layout><CheckoutPage /></Layout>,
  },
  {
    path: '/labCategoriesPage',
    element: <Layout><LabCategoriesPage /></Layout>,
  },
  {
    path: '/H_Services',
    element: <Layout><H_Services /></Layout>,
  },
  {
    path: '/labTestdetails/:categoryName',
    element: <Layout><LabTestDetails /></Layout>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
