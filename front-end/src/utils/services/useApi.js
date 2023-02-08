import { useState, useEffect } from 'react';
import Activity from '../../Models/Activity';
import User from '../../Models/User';
import Perf from '../../Models/Perf';
import Average from '../../Models/Average';


const converData = (data, url) => {
    //console.log(url)
    if(url.includes('/activity')) {
        //console.log('activity')
        return (
            new Activity(data)
        );
    }
    if(url.includes('/performance')) {
        //console.log('perf')
        return (
            new Perf(data)
        );
    }
    if(url.includes('/average-sessions')) {
        //console.log('average')
        return (
            new Average(data)
        );
    }
    //console.log('user')
    
    return new User(data)
}

/**
 * 
 * @param { string } url 
 * @returns {  Object } return un Object des données correspondant...
 */

function useApi(url) {
    const [data, setData] = useState(undefined)
    // console.log(url)
    useEffect(() => {
        fetch(url).then(
            response => response.json()
        ).then((data) => {
            // console.log(data)
            setData(converData(data, url))
        })
    }, [])
    // console.log(data)
    // console.log(`${url}/activity`)
    // console.log(`${url}/average-sessions`)
    // console.log(`${url}/performance`)
    return data 
    
}
export default useApi
