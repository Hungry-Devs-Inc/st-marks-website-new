import { default as Hero } from "../../components/Hero";
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import "./home.css"
import saint from "../../assets/Subject.png";
import patronSaintJesus from "../../assets/patron-jesus-christ.png";

export const Home = () => {
    // const { ref: scrollRef, inView: imgInView } = useInView();
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
    const [currentData, setCurrentData] = useState([]);
    const [imgInView, setImgInView] = useState();
    const scrollRef = useRef();
    // create logic to ping JSON file with relational date to scheduled services for the week
    // check currentDate against data
    // if currentData.date !== currentDate // swap out currentData
    useEffect(() => {
         const observer = new IntersectionObserver((entries) => {
             const entry = entries[0];
             setImgInView(entry.isIntersecting);
         })
         observer.observe(scrollRef.current);
    }, [])

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
                    <div ref={scrollRef} className="col-sm-12 col-md-4">
                        <img className={`img-fluid home-body-image ${imgInView ? 'home-body-image-animation' : 'hidden'}`} src={saint} alt="saint"/>
                    </div>
                    <div className="divider d-none d-md-block col-md-2"></div>
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
            <div className="mt-4 container d-flex justify-content-center">
                <div className="container-fluid d-flex justify-content-center row">
                    {/* image that displays on top same as image below  */}
                    <div className="topRender-img-on-mobile col-sm-12 col-md-4 d-sm-block d-md-none">
                        <img className={`img-fluid home-body-image `} src={patronSaintJesus} alt="patron-saint-jesus" />
                    </div>
                    <div className="col-sm-12 col-md-4">
                            this is filler content should appear on the left
                    </div>
                    <div className="divider d-none d-md-block col-md-2"></div>
                    <div className="col-sm-12 col-md-4 d-none d-md-block">
                        <img className={`img-fluid home-body-image`} src={patronSaintJesus} alt="patron-saint-jesus" />
                    </div>
                </div>
            </div>
        </>
    )
}