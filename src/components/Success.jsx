import React from "react";

export const Success = ({ count, onSuccessClick }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>
        All <b> {count} </b> choosed users are invited now!
      </p>
      <button onClick={onSuccessClick} className="send-invite-btn">
        Go Back
      </button>
    </div>
  );
};
