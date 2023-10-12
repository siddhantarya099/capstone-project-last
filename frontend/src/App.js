import './App.css';

import { Fragment, useState } from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import FAQ from "./Components/Pages/FAQ";
import EmiCalculator from "./Components/Pages/EmiCalculator";
import CustomerSupport from "./Components/Pages/CustomerSupport";
import Payment from "./Components/Pages/Payment";
import Register from './Components/Pages/Register';
import DashboardLayout from './Components/Pages/DashboardLayout';
import LoanTypes from './Components/Pages/LoanTypes';
import LoanQueries from './Components/Pages/LoanQueries';
import LoanApplicationForm from './Components/Pages/LoanApplicationForm';
import LoanHistory from './Components/Pages/LoanHistory';
import Login from './Components/Login/login';
import About from './Components/About/about';
import Password from './Components/Login/password';
import AdminDashboard from './Components/Admin/AdminDashboard';
import MyAccount from './Components/Admin/MyAccount';
import LoanApplications from './Components/Admin/LoanApplications';
import ApprovedApplications from './Components/Admin/ApprovedApplications';
import {toast} from 'react-toastify'; 



function App() {

  return (
    <Fragment>

      <Routes>

        <Route path="natwestlogo" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="/apply-for-loan" element={<LoanApplicationForm />} />
        <Route path="/loan-history" element={<LoanHistory />} />
        <Route path="/emiCalculator" element={<EmiCalculator />} />
        <Route path="/register" element={<Register />} />
        <Route path="customerSupport" element={<CustomerSupport />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/userdashboard" element={<DashboardLayout />} />
        <Route path="/userdashboard/loantypes" element={<LoanTypes />} />
        <Route path="/loanqueriesfaq" element={<LoanQueries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} /> {/* Add this route */}
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/my-account" component={<MyAccount />} />
        <Route path="/loan-applications" component={<LoanApplications />} />
        <Route path="/approved-applications" component={<ApprovedApplications />} />

        <Route path="*" element={<div className="text-center text-danger">Page Not Found!!</div>} />
      </Routes>
    </Fragment>
  );
}

export default App;
