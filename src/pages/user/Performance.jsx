
import React from 'react';

function Performance() {
  return (
    <div>
      <style>
        {`
          .container {
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .chart-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          .bar {
            width: 30px;
            background-color: #6aa6e2;
            margin: 0 5px;
            position: relative;
          }

          .bar span {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            font-size: 12px;
            margin-bottom: 5px;
          }

          .sectors-container {
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin-top: 20px;
          }

          .sector {
            text-align: center;
          }

          .sector .circle {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: conic-gradient(#a7e5a7 0% 80%, #e5e5e5 80%);
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
          }

          .sector .circle span {
            font-size: 24px;
            font-weight: bold;
          }
        `}
      </style>
      <div className="container">
        <h2>Working Hours</h2>
        <div className="chart-container">
          <div className="bar" style={{ height: '100px' }}><span>4 hours</span></div>
          
        </div>

        <h2>Sectors that I have been involved</h2>
        <div className="sectors-container">
          <div className="sector">
            <div className="circle">
              <span>1%</span>
            </div>
            <p>Bagmati Clean</p>
          </div>
          <div className="sector">
            <div className="circle" style={{ background: 'conic-gradient(#a7e5a7 0% 68%, #e5e5e5 68%)' }}>
              <span>0%</span>
            </div>
            <p>Blood Donation</p>
          </div>
          <div className="sector">
            <div className="circle" style={{ background: 'conic-gradient(#a7e5a7 0% 89%, #e5e5e5 89%)' }}>
              <span>1%</span>
            </div>
            <p>Shelter Build up Donation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
