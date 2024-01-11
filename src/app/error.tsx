"use client";
const Error = ({ error, reset }) => {
  return (
    <div>
      {error.message}
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
};

export default Error;
