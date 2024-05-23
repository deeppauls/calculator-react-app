function ButtonsContainer({ onButtonClick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="button-container">
      {buttonNames.map((bName) => (
        <button className="button-op" onClick={() => onButtonClick(bName)}>
          {bName}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
