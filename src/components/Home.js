import React,{useState,useRef} from 'react'
import './Home.css'
import Result from './Result'
import hero from '../images/neo-sakura-waiting.png'
import * as ReactBootStrap from 'react-bootstrap'


function Home() {

    const [city, setCity] = useState('')
    const[info,setInfo] = useState([])
    const[name,setName] = useState('')
    const[air,setAir] = useState([])
    const[submit,setSubmit] = useState(false)
    const[loading,setLoading] = useState(false)
    const resultRef = useRef(null)

    document.title = 'Check Weather'
    
    function gotoResult() {
        window.scrollTo({top:1000 , behavior: "smooth"})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value;
        setName(location)
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`,{
            method: "GET",
            headers: {
                "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
                "x-rapidapi-key": "2ec8d03355msha303cb89bb85fdfp1a42cejsn19e888854619"
            },
        })
        .then(res => res.json())
        .then((data)=> {
            (setInfo(data))
            setLoading(true)
        })
        .catch(err => console.log(err))

        fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${location}`,{
            method:'GET',
            headers: {
                "x-rapidapi-host": "air-quality-by-api-ninjas.p.rapidapi.com",
		        "x-rapidapi-key": "2ec8d03355msha303cb89bb85fdfp1a42cejsn19e888854619"
            },
            
        })
        .then(res=> res.json())
        .then(data=> setAir(data))
        setCity('')
        setSubmit(true)
    }

    

    return (
        <>
            <div className='banner'> 
                <div className='container'>
                
                    <div className='form-div'>
                        <form className='search-form' onSubmit = {handleSubmit}>
                            <h1 className='title'>raincheck.</h1>
                            <h3 className='sub-heading'>Check Temperature, Humidity, Air Quality and much more. </h3>
                            <input value ={city} onChange={(e)=>setCity(e.target.value)} type='text' className='city-input' id='location' placeholder='City Name'></input>
                            <br/>
                            <button type='submit' className='search-btn' onClick={gotoResult}> SEARCH </button>
                        </form>
                    </div>

                    <div className='img-container'>
                        <img src={hero} className='hero-img' alt='hero-img'></img>
                    </div>
                    
                </div>
            </div>

            <h1 className='result-title'>{name}</h1>
            
            {submit && <div className='result-container' ref={resultRef} >
                {loading? (<Result temp={info.temp} feels_like={info.feels_like} max_temp= {info.max_temp} min_temp={info.min_temp} wind_speed={info.wind_speed} humidity = {info.humidity} cloud_pct={info.cloud_pct} overall_aqi={air.overall_aqi} />):
                (<ReactBootStrap.Spinner animation="border" />)}
                
                </div>}
                
            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-text'>
                        <p className='footer-link'>Illustration by <a href="https://icons8.com/illustrations/author/5f4e7e2801d03600102f424b">Виолетта Барсук</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
                        <p className='footer-link'>Weather Icons by <a href='https://icons8.com/icon/set/weather/pastel-glyph'>Icons8</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home


