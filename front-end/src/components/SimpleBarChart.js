import React from 'react';
import '../styles/SimpleBarChart.css'
import PropTypes from "prop-types";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * It's a function that takes an array of objects as a prop and returns a bar chart
 * @prop   {Array}  sessions  Data from a user to BarChart
 *
 * @return  {JSX.Element}           Bar Chart
 */

const SimpleBarChart = ({activity}) => {
   // console.log(activity)
   function customTick(day) {
        return Number(day.slice(8));
      }
   const CustomTooltip = ({active, payload}) => {
        if(active && payload) {
            return (
                <div>           
                    <div className='cus_tooltip'>
                        <p>{`${payload[0].value} kg`}</p>
                        <p>{`${payload[1].value} cKal`}</p>
                    </div>
                </div>
                
            )    
        }    
   }  
        return (
                <article className='toto'>
                        <div className='barchart__container-title'>
                                <h4>Activité quotidienne</h4>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={activity.sessions} barGap={8} width={500}
                        height={300} >
                                <CartesianGrid strokeDasharray="2 2" vertical={false} />
                                <XAxis  dataKey="day" 
                                        axisLine={false}
                                        domain={["dataMin + 1", "dataMax + 3"]}
                                        interval="preserveStartEnd"
                                        tickLine={false}
                                        tickFormatter={customTick}
                                />
                                <YAxis  orientation='right'
                                        axisLine={false}
                                        interval="preserveStartEnd"
                                        dataKey="kilogram"
                                        yAxisId="kilogram"
                                        domain={['dataMin-7', 'dataMax+1']}
                                />
                                <YAxis  orientation='left'
                                        axisLine={false}
                                        interval="preserveStartEnd"
                                        hide dataKey="calories" 
                                        yAxisId="calories"
                                        domain={[0, 'dataMax + 20']}
                                />
                                <Tooltip content={<CustomTooltip />} />
                        
                                <Legend  iconType="circle"
                                        verticalAlign='top'
                                        align ='right'
                                        height={40}
                                        iconSize={7}
                                        style={{ margin: "0, 30px, 0, 0", width: "100px" }}
                                /> 
                                <Bar  barSize={10} 
                                radius={[5, 5, 0, 0]}
                                legendType="cercle"
                                dataKey="kilogram"  
                                yAxisId="kilogram"
                                name="Poids (kg)"
                                fill="#282D30" 
                                />
                                <Bar  barSize={10} 
                                legendType="cercle"
                                radius={[5, 5, 0, 0]} 
                                dataKey="calories" 
                                yAxisId="calories" 
                                fill="#E60000"
                                name={"Calories brûlées (kCal)"}
                                />
                                </BarChart>
                        </ResponsiveContainer>
                </article>
        );     
} 

SimpleBarChart.propTypes = {
        sessions: PropTypes.arrayOf(
          PropTypes.shape({
            day: PropTypes.string,
            kilogram: PropTypes.number,
            calories: PropTypes.number,
          }),
        ),
      };
 
export default SimpleBarChart;