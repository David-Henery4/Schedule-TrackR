import React from "react";
import { mockMonths } from "../data/mockDates";

export const Month = () => {
  return (
    <section className="month">
      {mockMonths.map((month) => {
        const { id, monthName, url } = month;
        return (
          <div
            key={id}
            className="month__tab"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${url})`
            }}
          >
            <h4>{monthName}</h4>
          </div>
        );
      })}
    </section>
  );
};

export default Month;
