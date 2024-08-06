import styles from './Modal1.module.css';
import { X } from "lucide-react";
import React, { useRef } from "react";
import { Chart } from 'react-google-charts';

const data = [
  ['Type', 'Amount'],
  ['Expenses', 1800],
  ['Savings', 650],
];

const data2 = [
    ['Type', 'Amount'],
    ['College Loans', 250],
    ['Credit Loans', 250],
    ['Etc.', 1300],
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

const option2 ={
    pieHole: 0.6,
    legend: 'none',
    pieSliceText: 'none',
    slices: {
        0: { color: '#1A5329' },
        1: { color: '#7DB68C' },
        2: { color: '#33914C' },
    },
}

const CashflowDonutChart = () => {
    return (
        <div className={styles.donutChartContainer}>
            <div
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', flexDirection: 'column', marginBlockStart: '3em', marginRight: '16px' ,backgroundColor: 'transparent',}}>
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

const CashflowDonutChart2 = () => {
    return (
        <div className={styles.donutChartContainer2}>
            <div
             style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', flexDirection: 'column', marginBlockStart: '5em', marginRight: '10px' ,backgroundColor: 'transparent',}}>
                <Chart
                chartType='PieChart'
                width='150px'
                height='150px'
                data={data2}
                options={option2}
                />
             </div>
        </div>
    )
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
        <div className={styles.outerContainer}>
            <div className={styles.cashflowContainer}>
                <div className={styles.incomeContainer}>
                    <h4 className={styles.incomeTitle}>Income</h4>
                    <span className={styles.incomeAmount}>$2,450</span>    
                </div>
                <div className={styles.expensesContainer}>
                    <div className={styles.lcontainer1}>
                        <h4 className={styles.expensesTitle}>Expenses  <Dot size={6} color={'#33914C'} /></h4>
                    </div>
                    <span className={styles.expensesAmount}>$1,800</span>
                </div>
                <div className={styles.savingsContainer}>
                    <div className={styles.lcontainer2}>
                        <h4 className={styles.savingsTitle}>Savings   <Dot size={6} color={'#959595'} /></h4>
                    </div>
                    <span className={styles.savingsAmount}>$650</span>
                </div>
            </div>
        </div>
    )
}

const Modal1 = ({ onClose }) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
          onClose();
        }
    };

  return (
    <div ref={modalRef} onClick={closeModal} className={styles.modal}>
        <div className={styles.innerModal}>
            <div className={styles.container}>
                <div className={styles.c1}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.t1}>Cash Flow</h1>
                        <button onClick={onClose} className={styles.modalButton}>
                            <X size={20}></X>
                        </button>
                    </div>
                    <div className={styles.subC1}>
                        <div className={styles.subC12}>
                            <p className={styles.d1}>Your current cashflow</p>
                            <CashflowInfo />
                        </div>
                        <CashflowDonutChart />
                    </div>
                </div>
                <div className={styles.c2}>
                    <h1 className={styles.t2}>Spendings</h1>
                    <p className={styles.d2}>How much you spend</p>
                    <h4 className={styles.exSpendTitle}>Extra Spendings Limit</h4>
                    <span className={styles.exSpendAmount}>$1,300</span>
                    <h4 className={styles.exSpendTitle}>Spendings</h4>
                    <span className={styles.exSpendAmount}>$650</span>
                    <div className={styles.paymentBar}>
                        <span className={styles.total}>$650</span>
                        <span className={styles.total2}>$650</span>
                    </div>
                </div>
                <div className={styles.c3}>
                    <div className={styles.subC3}>
                        <h1 className={styles.t3}>Budget</h1>
                        <p className={styles.d3}>Expense breakdown</p>
                        <h4 className={styles.exSpendTitle2}>Expenses</h4>
                        <span className={styles.exSpendAmount2}>$1,800</span>
                        <div className={styles.legend}>
                            <h4 className={styles.collegeLoansTitle}>College Loans   <Dot size={6} color={'#1A5329'} /></h4>
                        </div>
                        <span className={styles.collegeLoansAmount}>$250</span>
                        <div className={styles.legend}>
                            <h4 className={styles.creditLoansTitle}>Credit Loans   <Dot size={6} color={'#7DB68C'} /></h4>
                        </div>
                        <span className={styles.creditLoansAmount}>$250</span>
                        <div className={styles.legend}>
                            <h4 className={styles.etcTitle}>Etc.   <Dot size={6} color={'#33914C'} /></h4>
                        </div>
                        <span className={styles.etcAmount}>$1,300</span>
                    </div>
                    <div className={styles.container2}>
                        <CashflowDonutChart2 />
                        <div className={styles.buttonContainer}>
                            <button className={styles.editButton}>Edit Budget</button>
                            <button className={styles.viewButton}>View Transactions</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Modal1;