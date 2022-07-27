import React from 'react'
import {Link} from "react-router-dom"

const ErrorPage = () => {
  return (
    <section className="error-page">
      <h4 className="error-page__text">Sorry this page doesn't exist.</h4>
      <button className="btn error-page__btn">
        <Link to="/" className="error-page__link">
          Return to main menu
        </Link>
      </button>
    </section>
  );
}

export default ErrorPage