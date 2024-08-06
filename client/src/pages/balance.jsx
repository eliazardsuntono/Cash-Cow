import styles from './balance.module.css';
import DashboardHeader from '../components/Dashboard/Dashboardheader';
import * as React from 'react';

const BalanceHeader = () => {
    return(
        <legend>
            <h2 className={styles.title}>Balance</h2>
        </legend>
    )
}

const Icon = ({ size = 20, color = '#D9D9D9' }) => {
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

const BalanceCard = () => {
    return (
        <fieldset className={styles.cardContainer}>
            <BalanceHeader />
            <div className={styles.balanceInfoContainer}>
                <p className={styles.description}>Your current balance (all accounts)</p>
                <h3 className={styles.currentBalance}>$5,320</h3>
                <div className={styles.remainingContainer}>
                    <p className={styles.remainingStatement}>Left to spend this month</p>
                    <span className={styles.amountLeft}>$650</span>
                </div>
            </div>
        </fieldset>
    )
}

const Dropdown = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuOne = () => {
        setOpen(false);
    };

    const handleMenuTwo = () => {
        setOpen(false);
    };

    return (
        <div className={styles.accountButton}>
            <button className={styles.dropDown} onClick={handleOpen}>Checkings v</button>
            {open ? (
                <ul className={styles.menu}>
                    <li className="menu-item">
                        <button onClick={handleMenuOne}>Checkings</button>
                    </li>
                </ul>
            ) : null}
        </div>
    );
};

const Breakdown = () => {
    return (
        <fieldset className={styles.breakdownContainer}>
            <legend className={styles.select}>
                <Dropdown />
            </legend>
            <div className={styles.headerContainer}>
                    <h2 className={styles.t1}>Transactions</h2>
                    <h2 className={styles.t2}>$3,204</h2>
            </div>
            <p className={styles.date}>This Week</p>
            <div className={styles.transactions}>
                <div className={styles.expContainer}>
                    <Icon size={45} color={'#D9D9D9'} />
                    <div className={styles.subcategory}>
                        <h4 className={styles.t5}>Asad's Hot Chicken</h4>
                        <p className={styles.p1}>Food & Dining</p>
                    </div>
                    <div className={styles.cost}>
                        <h4 className={styles.t6}>-$20.00</h4>
                        <p className={styles.p2}>$650</p>
                    </div>
                </div>
                <div className={styles.expContainer}>
                    <Icon size={45} color={'#D9D9D9'} />
                    <div className={styles.subcategory}>
                        <h4 className={styles.t5}>Asad's Hot Chicken</h4>
                        <p className={styles.p1}>Food & Dining</p>
                    </div>
                    <div className={styles.cost}>
                        <h4 className={styles.t6}>-$20.00</h4>
                        <p className={styles.p2}>$670</p>
                    </div>
                </div>
                <div className={styles.expContainer}>
                    <Icon size={45} color={'#D9D9D9'} />
                    <div className={styles.subcategory}>
                        <h4 className={styles.t5}>Asad's Hot Chicken</h4>
                        <p className={styles.p1}>Food & Dining</p>
                    </div>
                    <div className={styles.cost}>
                        <h4 className={styles.t6}>-$20.00</h4>
                        <p className={styles.p2}>$690</p>
                    </div>
                </div>
                <div className={styles.expContainer}>
                    <Icon size={45} color={'#D9D9D9'} />
                    <div className={styles.subcategory}>
                        <h4 className={styles.t5}>Asad's Hot Chicken</h4>
                        <p className={styles.p1}>Food & Dining</p>
                    </div>
                    <div className={styles.cost}>
                        <h4 className={styles.t6}>-$20.00</h4>
                        <p className={styles.p2}>$710</p>
                    </div>
                </div>
            </div>
        </fieldset>
    )
}

export default function Balance(){
    return(
        <div>
            <DashboardHeader />
            <div className={styles.container}>
                <BalanceCard />
                <Breakdown />
            </div>
        </div>
    )
}