import styles from "./dashboard.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Dashboard (){
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
            <h1>Dashboard</h1>
            <p>User: {user}</p>
            <p>Credit Loans: {creditLoans}</p>
            <p>Student Loans Left: {studentLoansLeft}</p>
            <p>Total Student Loans: {totalStudentLoans}</p>
            <p>Income: {income}</p>
            <p>Student Loan Interest: {studentLoanInterest}</p>
            <p>Credit Loan Interest: {creditLoanInterest}</p>
        </div>
    );
}