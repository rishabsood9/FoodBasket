import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPs Something went wrong</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
