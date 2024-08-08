import styles from './loans.module.css';
import * as React from 'react';
import Arrow from '../assets/arrows.png';
import CollegeLoans from '../components/Dashboard/loans1';
import CreditLoans from '../components/Dashboard/credit1';

const LoansHeader = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Loans</h1>
        </header>
    );
};

const Dropdown = ({ onSelectMenu }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuOne = () => {
        onSelectMenu('college'); 
    };

    const handleMenuTwo = () => {
        onSelectMenu('credit'); 
    };

    return (
        <div className={styles.accountButton}>
            <button className={styles.dropDown} onClick={handleOpen}>
                Select Type
                <img className={styles.arrow} src={Arrow} alt="arrow" />
            </button>
            {open && (
                <ul className={styles.menu}>
                    <li className={styles.item}>
                        <button className={styles.menu1} onClick={handleMenuOne}>
                            <p className={styles.content}>College</p>
                        </button>
                        <button className={styles.menu2} onClick={handleMenuTwo}>
                            <p className={styles.content2}>Credit</p>
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default function Loans() {
    const [selectedMenu, setSelectedMenu] = React.useState(null);

    const handleSelectMenu = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <div className={styles.container}>
            <LoansHeader />
            <div className={styles.c1}>
                <div className={styles.c2}>
                    <fieldset className={styles.loanDropdown}>
                        <legend className={styles.dropDownTitle}>Loan Type</legend>
                        <Dropdown onSelectMenu={handleSelectMenu} />
                    </fieldset>
                </div>
                {selectedMenu === 'college' && <CollegeLoans />}
                {selectedMenu === 'credit' && <CreditLoans />}
            </div>
        </div>
    );
}
