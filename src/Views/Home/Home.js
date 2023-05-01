import { default as Hero } from "../Hero";
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import "./home.css"
import saint from "../../assets/Subject.png";

export const Home = () => {
    const { ref: scrollRef, inView: imgInView } = useInView({triggerOnce: true});
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
    const [currentData, setCurrentData] = useState([]);
    // create logic to ping JSON file with relational date to scheduled services for the week
    // check currentDate against data
    // if currentData.date !== currentDate // swap out currentData
    // useEffect(() => {
    //     // const observer = new IntersectionObserver((entries) => {
    //     //     const entry = entries[0];
    //     //     imgInView(entry.isIntersecting);
    //     // })
    //     // observer.observe(scrollRef.current);
    // }, [])

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
            <div className="d-flex pt-5 top-container bg-light bg-gradient">
                <div className="container-fluid d-flex justify-content-center row">
                    <div className="col-sm-12 col-md-4">
                        <img ref={scrollRef} className={`img-fluid home-body-image ${imgInView ? 'home-body-image-animation' : ''}`} src={saint} alt="saint"/>
                    </div>
                    <div className="divider d-none d-md-block col-md-2">
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h3 className="d-none d-md-block">Services</h3>
                        <h3>This Week at St. Mark</h3>
                        {dummyData.map(m => {
                            return (
                                <>
                                    {m.data.map(data => {
                                        return (
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-start"
                                                key={data.Title}>
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">{data.Title}</div>
                                                        {data.Day} ( {data.TimeStart} - {data.TimeEnd} )
                                                    </div>
                                                    <span className="badge bg-primary rounded-pill">{data.Date}</span>
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
            {/* new container */}
            <div className="container d-flex justify-content-center"></div>
        </>
    )
}