import { default as Hero } from "../Hero";
import { useState, useEffect } from 'react';

export const Home = () => {
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
    const [currentData, setCurrentData] = useState([]);
    // create logic to ping JSON file with relational date to scheduled services for the week
    // check currentDate against data
    // if currentData.date !== currentDate // swap out currentData
    useEffect(() => {

    }, [currentDate])

    const dummyData = [
        { "month": "Apr",
        "data": [
            {
                "Date": "Apr 4, 2023",
                "Day": "Monday",
                "TimeStart": "10:30 AM",
                "TimeEnd": "12:00 PM",
                "Title": "Palm Sunday"
            },
            {
                "Date": "Apr 6, 2023",
                "Day": "Wednesday",
                "TimeStart": "10:30 AM",
                "TimeEnd": "12:00 PM",
                "Title": "Not Entirely Sure"
            },
            {
                "Date": "Apr 7, 2023",
                "Day": "Thursday",
                "TimeStart": "10:30 AM",
                "TimeEnd": "12:00 PM",
                "Title": "Dummy Title, Can't Think of Anything"
            },
            {
                "Date": "Apr 10, 2023",
                "Day": "Sunday",
                "TimeStart": "10:30 AM",
                "TimeEnd": "12:00 PM",
                "Title": "Easter Ceremony"
            }
        ]
        }
    ]
    console.log(currentDate);

    return (
        <>
            <Hero pageState={"Home"} />
            <h1 className="date">{currentDate}</h1>
            <p>Home Page</p>
            <div className="container-fluid row">
            <div className="col-sm-12 col-md-6">
                <img className="img-fluid" src="https://i.swncdn.com/media/630w/cms/CW/faith/31429-speaking-in-front-of-crowd-1200.webp" alt="Congregation"/>
            </div>
            <div className="col-sm-12 col-md-6">
            <h3 className="d-none d-md-block">Services</h3>
            <h2>This Week at St. Mark</h2>
            {dummyData.map(m => {
                return (
                    <>
                    {m.data.map(data => {
                        return (
                            <div className="card">
                                <h3>{data.Day} {data.Date}</h3>
                                <h4>{data.TimeStart} - {data.TimeEnd}</h4>
                                <h5>{data.Title}</h5>
                            </div>
                        )
                    })}
                    </>
                ) } ) }
            </div>
            </div>
        </>
    )
}