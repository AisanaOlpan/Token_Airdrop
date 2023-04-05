import React, { useState } from "react";
import Loading from "react-loading";
import classes from "./Button.module.css";

function SpinnerButton({ onClick, loading, children }) {
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleClick = async () => {
    setButtonLoading(true);
    await onClick();
    setButtonLoading(false);
  };

  return (
    <button
      disabled={buttonLoading || loading}
      onClick={handleClick}
      className={classes.Button}
    >
      {buttonLoading || loading ? (
        <Loading
          type="balls"
          color="#fff"
          height={20}
          width={20}
          className={classes.classSpinner}
        />
      ) : (
        children
      )}
    </button>
  );
}

export default SpinnerButton;
