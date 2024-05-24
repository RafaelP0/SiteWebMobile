import "./checkbox.css";

const Checkbox = ({ label, alsuu }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>{label}</span>
          <span style={{ fontSize: "0.5em" }}>{alsuu}</span>
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
