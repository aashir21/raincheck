import React from 'react'
import './Result.css'
import thermometer from '../svgs/icons8-thermometer-100.png'
import max_temp from '../svgs/icons8-thermometer-up-100.png'
import min_temp from '../svgs/icons8-thermometer-down-100.png'
import cloud from '../svgs/icons8-cloud-100.png'
import wind from '../svgs/icons8-wind-100.png'
import humidity from '../svgs/icons8-humidity-100.png'

function Result(props) {
    return (
        <>
            <div className='info-banner'>
                <div className='info-container'>
                    <div className='info' data-aos = 'fade-left'>
                        <div className='grid-item item-1'>
                            <div className='temps svg'>
                                <img src={thermometer} alt='/' className='svg'/>
                                <h2 className='info-subtitle'>Temperature : {props.temp}°C</h2>
                            </div>

                            <div className='temps'>
                                <h2 className='info-subtitle'>Feels Like : {props.feels_like}°C</h2>
                            </div>
                            
                        </div>
                        <div className='grid-item item-2'>
                            <div className='temps'>
                                    <img src={max_temp} alt='/' ></img>
                                    <h2 className='info-subtitle'>Max Temperature : {props.max_temp}°C</h2>
                            </div>
                            <div className='temps'>
                                <img src={min_temp} alt='/' ></img>
                                <h2 className='info-subtitle'>Min Temperature : {props.min_temp}°C</h2>
                            </div>
                        </div>
                        <div className='grid-item item-3'>
                            <div className='temps'>
                                <img src={cloud} alt='/' ></img>
                                <h2 className='info-subtitle'>Cloud : {props.cloud_pct} %</h2>
                            </div>

                            <div className='temps'>
                                <img src={humidity} alt="/"></img>
                                <h2 className='info-subtitle'>Humidity : {props.humidity} %</h2>
                            </div>
                        </div>
                        <div className='grid-item item-4'>
                            <div className='temps'>
                                <img src={wind} alt='/'></img>
                                <h2 className='info-subtitle'>Wind Speed : {props.wind_speed} KM/H</h2>
                            </div>
                            <div className='temps'>
                                <h2 className='info-subtitle'>Air Quality : {props.overall_aqi} AQI</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Result
