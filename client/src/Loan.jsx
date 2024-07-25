import "./Loan.css";

const LoanHeader = () => {
  return (
    <h1 className="font-bold">
      Before we get started, let's get your numbers sorted
    </h1>
  );
};

const LoanAmount = () => {
  return (
    <div>
      <label htmlFor="loan-amount">Loan Amount</label>
      <span>$</span>
      <input
        type="number"
        name="loan-amount"
        id="loan-amount"
        placeholder="Amount"
      />
    </div>
  );
};

const DueDate = () => {
  return (
    <div>
      <label htmlFor="due-date">Due Date</label>
      <input type="date" name="due-date" id="due-date" placeholder="Due Date" />
    </div>
  );
};

const InterestRate = () => {
  return (
    <div>
      <label htmlFor="interest-rate">Interest Rate</label>
      <input
        type="number"
        name="interest-rate"
        id="interest-rate"
        placeholder="Interest Rate"
      />
    </div>
  );
};

const MonthlyDueDate = () => {
  return (
    <div>
      <label htmlFor="montly-due">Monthly Due Date</label>
      <input
        type="date"
        name="monthly-due"
        id="monthly-due"
        placeholder="Monthly Due Date"
      />
    </div>
  );
};

const LoanType = () => {
  <div>
    <label htmlFor="loan-type">
      <select name="loan-type" id="loan-type">
        <option value="student-loans">Student Loans</option>
        <option value="credit-card-loans">Credit Card Loans</option>
      </select>
    </label>
  </div>;
};

export default function LoanForm() {
  return (
    <form action="#">
      <LoanHeader />
      <fieldset>
        <legend>Add loan</legend>
        <LoanAmount />
        <DueDate />
        <InterestRate />
        <MonthlyDueDate />
        <LoanType />
      </fieldset>
    </form>
  );
}
