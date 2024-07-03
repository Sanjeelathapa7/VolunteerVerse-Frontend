import React from 'react';

const Event = () => {
  return (
    <>
          <div className="calendar-container">
            <div className="calendar-header">
              <button className="header-button">Today</button>
              <button className="header-button">Back</button>
              <button className="header-button">Next</button>
              <div className="header-title">May 2024</div>
              <div className="header-views">
                <button className="header-button">Months</button>
                <button className="header-button">Week</button>
                <button className="header-button">Day</button>
              </div>
            </div>
            <table className="calendar-table">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="prev-month">31</td>
                  <td>01</td>
                  <td>02</td>
                  <td>03</td>
                  <td>04</td>
                  <td>05</td>
                  <td>06</td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>08</td>
                  <td>09</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td className="event">
                    17<div className="event-label">Blood Donation</div>
                  </td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td className="event">
                    29<div className="event-label">Bagmati Clean</div>
                  </td>
                  <td>30</td>
                  <td className="next-month">01</td>
                  <td className="next-month">02</td>
                  <td className="next-month">03</td>
                  <td className="next-month">04</td>
                </tr>
              </tbody>
            </table>
          </div>
    </>
  );
};

export default Event;
