import { useState } from "react";

export default function App() {
  return (
    <>
      <Steps />
      <Counter />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOPen] = useState(true);

  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOPen((st) => !st)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#3aaf6feb", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#3aaf6feb", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Counter() {
  function minusSteps() {
    if (step > 1) setStep((s) => s - 1);
  }
  function addSteps() {
    setStep((s) => s + 1);
  }
  function minusCount() {
    setCount((s) => s - step);
  }
  function addCount() {
    setCount((s) => s + step);
  }
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const timestamp = Date.now();
  const date = new Date("01 September 2024");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="buttons counter">
        <button
          style={{ backgroundColor: "#3aaf6feb", color: "#fff" }}
          onClick={minusSteps}
        >
          -
        </button>
        <span> Step: {step}</span>
        <button
          style={{ backgroundColor: "#3aaf6feb", color: "#fff" }}
          onClick={addSteps}
        >
          +
        </button>
      </div>
      <div className="buttons counter">
        <button
          style={{ backgroundColor: "#3aaf6feb", color: "#fff" }}
          onClick={minusCount}
        >
          -
        </button>
        <span> Count: {count}</span>
        <button
          style={{ backgroundColor: "#3aaf6feb", color: "#fff" }}
          onClick={addCount}
        >
          +
        </button>
      </div>
      <div className="counter">
        <span>
          {count === 0
            ? "Today is "
            : count === 1
            ? `${count} day from today is `
            : count === -1
            ? `${count} day ago was `
            : count > 1
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{`${date.toDateString()}`}</span>

        {/*<span>{`${date.getDay()} \/ ${date.getMonth()} \/ ${date.getFullYear()} `}</span>*/}
      </div>
    </>
  );
}

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
