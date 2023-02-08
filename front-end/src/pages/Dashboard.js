import '../styles/Dashboard.css'

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ApiContext } from '../utils/contexts/ApiContext';
import { urlApi } from '../utils/const/urlApi';
import { urlMock } from '../utils/const/urlMock';
import useApi from '../utils/services/useApi';

import InfoBtn from '../components/InfoBtn';

import SimpleBarChart from '../components/SimpleBarChart';
import SimpleLineChart from '../components/SimpleLineChart';
import SimpleRadarChart from '../components/SimpleRadarChart';
import SimplePieChart from '../components/SimplePieChart';

/**
 * @file User Dashboard page
 */

const Dashboard = () => {
    
    const { userId } = useParams();
    
    // const ApiContext = 'api' // remplacer avec useContext id à travers l'url
    const apiContext = useContext(ApiContext) 
    // const url = apiContext.fetch === 'api'? urlApi: urlMock
    const url = apiContext.fetch === 'api'? urlMock: urlApi

    // console.log(useApi(url.userMainData(userId)))
    const dataMain = useApi(url.userMainData(userId))
    const dataActivity = useApi(url.userActivity(userId))
    const dataAverageSessions = useApi(url.userAverageSessions(userId))
    const dataPerformance = useApi(url.userPerformance(userId))
    
    
    if(!dataMain && !dataActivity && !dataAverageSessions && !dataPerformance) {
        return <div>Loading...</div>
    }
    // console.log(dataMain)
    // console.log(dataActivity)
    // console.log(dataAverageSessions)
    // console.log(dataPerformance)
    if(dataMain && dataActivity && dataAverageSessions && dataPerformance) {
        return (
            <div className='wrapper'>
                <div className='header'>
                    <h1>Hello <span className='colorName'>{dataMain.userInfos.firstName}</span>
                    </h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className='content'>
                    <div className='charts'>
                        <div className='top-charts'>
                            <SimpleBarChart activity={dataActivity}/>
                        </div>
                        <div className='bottom-charts'>
                            <SimpleLineChart average={dataAverageSessions}/>
                            <SimpleRadarChart perf={dataPerformance}/>
                            <SimplePieChart data={dataMain}/>  
                        </div>
                    </div>
                    <div className='btn_infos'>
                        <InfoBtn countValue={dataMain.keyData.calorieCount} type="calorie" />
                        <InfoBtn type="protein" countValue={dataMain.keyData.proteinCount} />
                        <InfoBtn type="glucide" countValue={dataMain.keyData.lipidCount}  />
                        <InfoBtn type="lipide" countValue={dataMain.keyData.carbohydrateCount} />
                    </div>
                </div>
            </div>
        );
    } 
};

export default Dashboard;