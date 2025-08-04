import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <section className="page_section">
      <h1>{err.data}</h1>
      <h1>Oops...</h1>
      <h2>You Entered Somewhere Else</h2>
      <h4>
        {err.status} : {err.statusText}
      </h4>
      <img src="../../src/assets/images/logo/logo_1.png" alt="logo" />
      <Link to="/">
        <button>Go To Home Safely !</button>
      </Link>
    </section>
  );
};

export default Error;
