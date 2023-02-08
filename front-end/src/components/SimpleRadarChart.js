import React from 'react';
import '../styles/SimpleRadarChart.css';
import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/**
 * It takes a prop called perf, which is an object with a bunch of properties, and returns a div   with a RadarChart inside of it
 *
 * @prop   {Object}  perf  Contain datas from the API about user performances
 *
 * @return  {React.ReactElement}
 */

const SimpleRadarChart = ({perf}) => {

  const performancesArray = perf
  //console.log(performancesArray)
  //console.log(performancesArray.data)
  //console.log(performancesArray.kind)
  const axisCustom = (tick) => {
      if(tick === 1) {
        return "cardio"
      }
      if(tick === 2) {
        return "energy"
      }
      if(tick === 3) {
        return "endurance"
      }
      if(tick === 4) {
        return "strength"
      }
      if(tick === 5) {
        return "speed"
      }
      if(tick === 6) {
        return "intensity"
      }
  }    
  return (
    <div className="radarchart__container">
        <ResponsiveContainer >
            <RadarChart cx="50%" cy="50%" 
            width={100}
                        outerRadius="80%" 
                        data={performancesArray.data}
            >
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind"
                fill=''
                tickFormatter={axisCustom} />
                <Radar  dataKey="value"

                        width={100}
                        stroke="#8884d8" 
                        fill="#FF0101" 
                        fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default SimpleRadarChart

// SimpleRadarChart.propTypes = {
//   perf: PropTypes.shape({
//     userId: PropTypes.number.isRequired,
//     kind: PropTypes.object,
//     data: PropTypes.arrayOf(PropTypes.object),
//   }),
// };