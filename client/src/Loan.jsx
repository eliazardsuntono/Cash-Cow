const LoanHeader = () => {
  return (
    <div className="mt-10vh">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">
        Before we get started,
        <br /> <span className="text-hmix">let's get your numbers sorted</span>
      </h1>
    </div>
  );
};

const LoanAmount = () => {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="loan-amount" className="block">
        Loan Amount
      </label>
      <input
        className="p-2"
        type="number"
        name="loan-amount"
        id="loan-amount"
        placeholder="10000"
      />
    </div>
  );
};

const DueDate = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="due-date" className="block">
        Due Date
      </label>
      <input type="date" name="due-date" id="due-date" className="p-2" />
    </div>
  );
};

const InterestRate = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="interest-rate" className="block">
        Interest Rate
      </label>
      <input
        type="number"
        name="interest-rate"
        id="interest-rate"
        className="p-2"
      />
    </div>
  );
};

const MonthlyDueDate = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="montly-due" className="block">
        Monthly Due Date
      </label>
      <input type="date" name="monthly-due" id="monthly-due" className="p-2" />
    </div>
  );
};

const LoanType = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="loan-type" className="block">
        Loan Type
      </label>
      <select name="loan-type" id="loan-type" className="p-2">
        <option value="student-loans">Student Loans</option>
        <option value="credit-card-loans">Credit Card Loans</option>
      </select>
    </div>
  );
};

const SubmitButton = () => {
  return (
    <button type="submit" className="mt-7 bg-black">
      Continue
    </button>
  );
};

const LoanForm = () => {
  return (
    <form
      action="#"
      className="bg-customGray rounded-xl pr-7 pl-7 pt-3 pb-6 w-86 h-max"
    >
      <fieldset>
        <legend className="mb-2.5">
          <h2 className="text-2xl ">Add loan</h2>
        </legend>
        <div className="flex flex-col gap-1.5">
          <LoanAmount />
          <DueDate />
          <InterestRate />
          <MonthlyDueDate />
          <LoanType />
          <SubmitButton />
        </div>
      </fieldset>
    </form>
  );
};

export default function LoanPage() {
  return (
    <div className="flex flex-col items-center justify-start h-screen gap-12">
      <LoanHeader />
      <LoanForm />
    </div>
  );
}
