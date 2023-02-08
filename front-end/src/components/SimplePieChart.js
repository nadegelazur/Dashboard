import React from 'react';
import PropTypes from "prop-types";
import { PieChart, Pie, Legend, ResponsiveContainer, Cell } from 'recharts';
import '../styles/SimplePieChart.css'

/**
 * It takes a data object as an argument, and returns a RadialBarChart component
 *
 * @param   {object}  data  Contain datas from the API about user score.
 *
 * @return  {JSX.Element}
 */
  
const SimplePieChart = ({data}) => {
    // console.log(data.todayScore)
    // console.log(data)
    const pieData = [ 
        {
          name: 'completed',
          value: data.todayScore || data.score,
          fill: 'red',
        },
        {
          name: 'not-completed',
          value: 1 - data.todayScore,
          fill: 'transparent',
        },
    ]; 
    // console.log(pieData)
    return (
      <div className='pieChart__container'>
          <h3>Score</h3>
          <div className='pieChart__legend'>
                <p>
                  <strong>{100 * (data.todayScore || data.score)}% </strong>
                  <br />
                  de votre
                  <br />
                  objectif
                </p>
            </div>
          <ResponsiveContainer className="pie-content">     
              <PieChart title='score'>
                  <circle className='pieChart__circle' 
                          fill="#fff"
                          r="75"
                          cx="50%" cy="50%" >  
                  </circle> 
              <Pie  data={pieData}
                    dataKey="value" 
                    cx="50%" cy="50%" 
                    innerRadius={75} 
                    outerRadius={85} 
                    startAngle={90} 
                    endAngle={360 + 90} >

                  {pieData.map((entry, index) => (
                      
                      <Cell key={`cell-${index}`}
                            fill={entry.fill}
                            cornerRadius="50%"
                            strokeWidth={0} 
                      />

                  ))}
              </Pie>
              </PieChart>
            </ResponsiveContainer>
      </div>   
    )
}

SimplePieChart.propTypes = { 
  data: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object]),
};

export default SimplePieChart
  

   

   