import { Container } from 'lucide-react';
import styles from './Cashflow.module.css';
import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Type', 'Amount'],
  ['Expenses', 1800],
  ['Savings', 650],
];

const options = {
    pieHole: 0.6,
    legend: 'none',
    pieSliceText: 'none',
    slices: {
        0: { color: '#33914C' },
        1: { color: '#959595' },
    },
};

const DonutChart = () => {
    return (
        <div className={styles.donutChartContainer}>
            <div
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', flexDirection: 'column', marginBlockStart: '3em', backgroundColor: 'transparent',}}>
                <Chart
                    chartType="PieChart"
                    width="150px"
                    height="150px"
                    data={data}
                    options={options}
                />
                <p className={styles.pieChartExplanation}>You are in good standing</p>
            </div>
        </div>
    );
};


const Balanceheader = () => {
    return(
        <legend>
            <h2 className={styles.title}>Cashflow</h2>
        </legend>
    );
}

const Dot = ({ size = 5, color = 'black' }) => {
    const dotStyle = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: '50%',
      display: 'inline-block',
      marginBottom: '1px',
    };
  
    return <div style={dotStyle}></div>;
  };


const CashflowInfo = () => {
    return (
        <div className={styles.cashflowContainer}>
            <p className={styles.description}>Your current cash flow</p>
            <div className={styles.incomeContainer}>
                <h4 className={styles.incomeTitle}>Income</h4>
                <span className={styles.incomeAmount}>$2,450</span>    
            </div>
            <div className={styles.expensesContainer}>
                <div className={styles.lcontainer1}>
                    <h4 className={styles.expensesTitle}>Expenses  <Dot size={8} color={'#33914C'} /></h4>
                </div>
                <span className={styles.expensesAmount}>$1,800</span>
            </div>
            <div className={styles.savingsContainer}>
                <div className={styles.lcontainer2}>
                    <h4 className={styles.savingsTitle}>Savings   <Dot size={8} color={'#959595'} /></h4>
                </div>
                <span className={styles.savingsAmount}>$650</span>
            </div>
        </div>
    )
}

const CashflowChart = () => {
    return (
        <div className={styles.chartContainer}>
            placeholder for chart
        </div>
    )
}

export default function Cashflow(){
    return(
        <fieldset className={styles.container}>
            <Balanceheader />
            <CashflowInfo />
            <DonutChart />
        </fieldset>
    )
}