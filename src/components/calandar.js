import React from 'react'

// CREATE DUMMY DATA TO LOOP OVER THE DATES
export const Calandar = () => {
  return (
    <div className="calandar-container">
      <div className="calandar">
        <div className="week-days grid-item-position">
          <h4>Mon</h4>
          <h4>Tues</h4>
          <h4>Weds</h4>
          <h4>Thurs</h4>
          <h4>Fri</h4>
          <h4>Sat</h4>
          <h4>Sun</h4>
        </div>
        <div className="week-1 grid-item-position">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
        </div>
        <div className="week-2 grid-item-position">
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
        </div>
        <div className="week-3 grid-item-position">
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
          <p>21</p>
        </div>
        <div className="week-4 grid-item-position">
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
          <p>27</p>
          <p>28</p>
        </div>
        <div className="week-5 grid-item-position">
          <p>29</p>
          <p>30</p>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Calandar