import React, { PureComponent } from 'react';
import '../styles/SimpleLineChart.css';
import PropTypes from "prop-types";
import { ResponsiveContainer,
         AreaChart,
         XAxis, YAxis,
         LineChart, Line,
         Area,
         CartesianGrid,
         Tooltip, 
         Legend,
         Rectangle,
} from 'recharts';

/**
 * It's a function that returns a div with a title, a responsive container, a line chart, a line, a y
 * axis, an x axis, and a tooltip
 *
 * @prop {Object} average Data from a user to LineChart
 * @returns {JSX.Element} A graph line chart
 */

const SimpleLineChart = ({ average }) => {
  //console.log(average.sessions)
  
  // if(!average) {
  //     return <div>Loading...</div>
  // } else {
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <ul className="into">{placeLabelIntoTooltip(payload)}</ul>
          </div>
        );
      }
    };
    const CustomCursor = (prop) => {
      const { width, points } = prop;
      const X = points[0].x;
      const Y = points[0].y;
      const sum = width - X;
      return (
        <Rectangle
          width={sum}
          height={263}
          x={X}
          y={Y}
          style={{ background: "red", opacity: 0.1 }}
        />
      );
    };
    
    return (
      <div className="linechart__container">
          <p className="linechart__container-title">Durée moyenne des
          <br />sessions</p>
          <ResponsiveContainer margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <LineChart  data={average.sessions}
                        outerRadius="75%"
                        margin={{ top: 0, right: 12, bottom: 25, left: 12 }} >
              {/* This will allow to add color based on your need, so update it accordingly  */}
              <defs>
                  <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                    <stop offset="30%" stopColor="#F8F9F9" stopOpacity={1} />
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.3} />
                  </linearGradient>
              </defs>
             
                <Line   type="natural"                  
                        dataKey="sessionLength"
                        dot={false}
                        activeDot={{ stroke: 'rgba(255,255,255, 0.6)',  strokeWidth: 10, r: 5 }}
                        unit={"min"}
                        stroke="url(#colorUv)"
                        strokeWidth={2} />
                <YAxis  hide padding={{ top: 90, bottom: 45 }} /> 
                <XAxis  dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={handleFormatTick}
                        padding={{ right: 10, left: 10 }}
                        stroke={"#fff"}
                        interval={"preserveStartEnd"}
                        style={{opacity: 0.5}} /> 
                <Tooltip  wrapperStyle={{background: "#FFF",
                                        color: "#000",
                                        width: "39px",
                                        height: "25px",
                                        outline: "none",
                                       }}
                          labelStyle={{ display: "none", border: "none" }}
                          content={CustomTooltip}
                          cursor={CustomCursor} />
            </LineChart>  
          </ResponsiveContainer> 
      </div>
    );
  
  function fromLowerToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  }
  function handleFormatTick(numDay) {
    const days = ["l", "m", "m", "j", "v", "s", "d"];
  
    switch (numDay) {
      case 1:
        return fromLowerToUpperCase(days[0]);
      case 2:
        return fromLowerToUpperCase(days[1]);
      case 3:
        return fromLowerToUpperCase(days[2]);
      case 4:
        return fromLowerToUpperCase(days[3]);
      case 5:
        return fromLowerToUpperCase(days[4]);
      case 6:
        return fromLowerToUpperCase(days[5]);
      case 7:
        return fromLowerToUpperCase(days[6]);
    }
  }
  function placeLabelIntoTooltip(payload) {
    if (typeof payload[0].unit !== "undefined") {
      return (
        <p className="into__tooltip-para">
          {payload[0].value} {payload[0].unit}
        </p>
      );
    }
    if (payload && payload.length) {
      return payload.map((prop, id) => {
        return prop.dataKey === "calories" ? (
          <li className="into__tooltip-list" key={id}>
            {prop.value}kCal
          </li>
        ) : (
          <li className="into__tooltip-list" key={id}>
            {prop.value}Kg
          </li>
        );
      });
    }
    return " ";
  } 
  
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  }  
} 

SimpleLineChart.propTypes = {
  average: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      }).isRequired,
    ),
      }).isRequired, 
};

export default  SimpleLineChart;