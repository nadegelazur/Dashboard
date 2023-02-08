import React from 'react';
import '../styles/InfoBtn.css'
import enegry from '../assets/energy.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import cheesebrg from '../assets/cheesbrg.svg'
import PropTypes from "prop-types";


/**
 * Component that displays a list of Nutrition values
 *
 * @param   {string}  type  url vers image Icon
 * @param   {number}  countValue  name of Nutrition values
 
 * @return {JSX.Element}
 */

const InfoBtn = ({ type, countValue }) => {
    // console.log(type)
    // console.log(countValue)
    let img,
        typeName = "g",
        name
    switch (type) {
        case "calorie":
            img = enegry;
            typeName = "kCal";
            name = "Calories";
            
            break;
        case "protein":
            img = chicken;
            name = "Proteins";
            break; 
        case "lipide":
            img = apple;
            name = "Glucides";
            break; 
        case "glucide":
            img = cheesebrg;
            name = "Lipides";
            break;            
    }    

    return (
            <div className='btn_info'>
                <div className='btn-square'>
                    <img src={img} className='btn_info-icon'alt='icon'/>
                </div>
                <div className='btn-bloc_value'>
                    <h2 className='btn-bloc_title'>{countValue + '' + typeName}</h2>
                    <p className='btn-bloc_subtitle'>{name}</p>
                </div>
            </div>   
    );
};

InfoBtn.propTypes = {
    type: PropTypes.string.isRequired,
    countValue: PropTypes.number.isRequired,
}
export default InfoBtn;