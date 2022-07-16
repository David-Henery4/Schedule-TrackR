import React from "react";
import { mockMonths } from "../data/mockDates";
import { Link } from "react-router-dom";

export const Month = () => {
  return (
    <section className="month">
      {mockMonths.map((month) => {
        const { id, monthName, url } = month;
        const year = new Date().getFullYear()
        return (
          <Link to={"/weeks"} state={{monthNumber: id, monthName, year}} key={id} className="month__link">
            <div
              className="month__tab"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${url})`,
              }}
            >
              <h4>{monthName}</h4>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Month;
