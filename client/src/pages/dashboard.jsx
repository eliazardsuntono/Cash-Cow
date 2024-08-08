import styles from "./dashboard.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboardheader from '../components/Dashboard/Dashboardheader';
import Balancecard from '../components/Dashboard/Balancecard';
import Cashflow from '../components/Dashboard/Cashflow';
import CollegeLoans from "../components/Dashboard/CollegeLoans";
import CreditLoans from "../components/Dashboard/Credit";
import { useNavigate } from "react-router-dom";

export default function Dashboard (){
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [creditLoans, setCreditLoans] = useState();
    const [studentLoansLeft, setStudentLoansLeft] = useState();
    const [totalStudentLoans, setTotalStudentLoans] = useState();
    const[income, setIncome] = useState();
    const [studentLoanInterest, setStudentLoanInterest] = useState();
    const [creditLoanInterest, setCreditLoanInterest] = useState();

    useEffect(() => {
        getUserInfo();
    }, []);

    function getUserInfo(){

        axios.get("http://localhost:8000/", {crossdomain: true}).then(response => {
            setUser(response.data.user);
            setCreditLoans(response.data.creditLoans);
            setStudentLoansLeft(response.data.studentLoansLeft);
            setTotalStudentLoans(response.data.totalStudentLoans);
            setIncome(response.data.income);
            setStudentLoanInterest(response.data.studentLoanInterest);
            setCreditLoanInterest(response.data.creditCardLoanInterest);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <Dashboardheader />
            <div className={styles.container}>
                <Balancecard />
                <Cashflow />
                <div>
                    <button onClick={() => navigate('Loans')}className={styles.editLoansButton}>Edit Loans</button>
                </div>
                <CollegeLoans />
                <CreditLoans />
            </div>
        </div>
    );
}