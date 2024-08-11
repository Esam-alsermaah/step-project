export default function StepHeader({ isActive, step, title }) {
  return (
    <div className="step">
      <div className={`step-num ${isActive ? "active" : ""}`}>{step}</div>

      <div className="step-info">
        <p>STEP {step}</p>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
