import { default as Hero } from "../Hero";
import { useState, useEffect } from 'react';
import "./home.css";
import saintPatron from "../../assets/Subject.png";

export const Home = () => {
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
    const [currentData, setCurrentData] = useState([]);
    // create logic to ping JSON file with relational date to scheduled services for the week
    // check currentDate against data
    // if currentData.date !== currentDate // swap out currentData
    useEffect(() => {

    }, [currentDate])

    const dummyData = [
        {
            "month": "Apr",
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

    return (
        <>
            <Hero pageState={"Home"} />
            <div className="bg-light top-container">
                <div className="container-fluid row bg-light bg-gradient">
                    <div className="col-sm-12 col-md-6">
                        <img className="img-fluid home-image" src={saintPatron} alt="saint holding baby" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h3 className="d-none d-md-block text-center">Services</h3>
                        <h3 className="text-center">This Week at St. Mark</h3>
                        {dummyData.map(m => {
                            return (
                                <>
                                    {m.data.map(data => {
                                        return (
                                            <ul className="list-group list-group-numbered">
                                                <li className="list-group-item d-flex justify-content-between align-items-start"
                                                key={data.Title}>
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">{data.Title}</div>
                                                        {data.Date} ( {data.TimeStart} - {data.TimeEnd} )
                                                    </div>
                                                    <span className="badge bg-primary rounded-pill">{data.Day}</span>
                                                </li>
                                            </ul>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}