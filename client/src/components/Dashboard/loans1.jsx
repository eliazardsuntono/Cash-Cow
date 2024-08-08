import styles from "./loans1.module.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const barHeight = 400;

export default function CollegeLoans() {
    const [income, setIncome] = useState(0);
    const [credit, setCredit] = useState(0);
    const [savings, setSavings] = useState(0);
    const [spendings, setSpendings] = useState(0);
    const [college, setCollege] = useState(0);

    useEffect(() => {
        getUserInfo();
    }, []);

    function getUserInfo() {
        axios.get("http://localhost:8000/")
            .then(response => {
                setIncome(response.data.income);
                setCredit(response.data.creditLoans);
                setSavings(response.data.savings);
                setSpendings(response.data.extraSpendings);
                setCollege(response.data.monthlyCollege);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const total = credit + savings + spendings + college;

    const getBarHeight = (value) => {
        return total > 0 ? (value / total) * barHeight : 0;
    };

    const handleSliderChange = (category, value) => {
        const newValue = Number(value);
        const maxValue = income - (credit + savings + spendings + college - (category === 'credit' ? credit : 0) - (category === 'savings' ? savings : 0) - (category === 'spendings' ? spendings : 0) - (category === 'college' ? college : 0));
        
        switch (category) {
            case 'credit':
                setCredit(Math.min(newValue, maxValue));
                break;
            case 'savings':
                setSavings(Math.min(newValue, maxValue));
                break;
            case 'spendings':
                setSpendings(Math.min(newValue, maxValue));
                break;
            case 'college':
                setCollege(Math.min(newValue, maxValue));
                break;
            default:
                break;
        }
    };

    const Bar = () => {
        return (
            <div className={styles.bar}>
                <span className={styles.savingsAmount} style={{ height: `${getBarHeight(savings)}px` }}>${savings}</span>
                <span className={styles.spendingsAmount} style={{ height: `${getBarHeight(spendings)}px` }}>${spendings}</span>
                <span className={styles.collegeAmount} style={{ height: `${getBarHeight(college)}px` }}>${college}</span>
                <span className={styles.creditAmount} style={{ height: `${getBarHeight(credit)}px` }}>${credit}</span>
            </div>
        );
    };
    return (
        <div className={styles.container}>
            <Bar />
            <div className={styles.subcontainer}>
                <fieldset className={styles.legend}>
                    <legend className={styles.budgetLegend}>Adjust Budget</legend>
                    <p className={styles.t1}>Income</p>
                    <h3 className={styles.t2}>${income}</h3>
                    <div className={styles.c1}>
                        <h5 className={styles.t3}>Savings</h5>
                        <input
                            type="range"
                            min="0"
                            max={income}
                            value={savings}
                            onChange={(e) => handleSliderChange('savings', e.target.value)}
                        />
                        <span className={styles.t4}>${savings}</span>
                    </div>
                    <div className={styles.c1}>
                        <h5 className={styles.t3}>Extra Spendings</h5>
                        <input
                            type="range"
                            min="0"
                            max={income}
                            value={spendings}
                            onChange={(e) => handleSliderChange('spendings', e.target.value)}
                        />
                        <span className={styles.t4}>${spendings}</span>
                    </div>
                    <div className={styles.c1}>
                        <h5 className={styles.t3}>College Loans</h5>
                        <input
                            className={styles.slider}
                            type="range"
                            min="0"
                            max={income}
                            value={college}
                            onChange={(e) => handleSliderChange('college', e.target.value)}
                        />
                        <span className={styles.t4}>${college}</span>
                    </div>
                    <div className={styles.c1}>
                        <h5 className={styles.t3}>Credit Loans</h5>
                        <input
                            type="range"
                            min="0"
                            max={income}
                            value={credit}
                            onChange={(e) => handleSliderChange('credit', e.target.value)}
                        />
                        <span className={styles.t4}>${credit}</span>
                    </div>
                </fieldset>
                <button className={styles.confirm}>Submit Budget</button>
            </div>
        </div>);
}