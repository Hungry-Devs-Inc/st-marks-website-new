import { default as Hero } from "../../components/Hero";
import { PageTitle } from '../../components/PageTitle'
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import "./home.css"
import saint from "../../assets/Subject.png";
import patronSaintJesus from "../../assets/patron-jesus-christ.png";
import square from "../../assets/square.jpeg";

export const Home = () => {
    // const { ref: scrollRef, inView: imgInView } = useInView();
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
    const [currentData, setCurrentData] = useState([]);
    const [firstImage, firstImgInView] = useInView();
    const [secondImage, secondImgInView] = useInView();
    const [secondImageMobile, secondImgMobile] = useInView();
    const [thirdImage, thirdImgView] = useInView();
    // create logic to ping JSON file with relational date to scheduled services for the week
    // check currentDate against data
    // if currentData.date !== currentDate // swap out currentData

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
        <Hero />
            <div className="d-flex pt-5 pb-5 bg-light bg-gradient justify-content-center">
                <div className="container-fluid d-flex justify-content-center row">
                    <div ref={firstImage} className="col-sm-12 col-md-6 col-lg-4 pb-5">
                        <img className={`img-fluid home-body-image ${firstImgInView ? 'home-body-image-first' : 'hidden'}`} src={saint} alt="saint"/>
                    </div>
                    <div className="divider d-none d-lg-block col-lg-2"></div>
                    <div className="col-sm-12 col-md-6  col-lg-4 justify-content-center">
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
                        <p className="pt-5">this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left.</p>
                        <p className="pt-5">this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left.</p>
                    </div>
                </div>
            </div>
            {/* new container */}
            <div className="pt-5 container d-flex justify-content-center">
                <div className="container-fluid d-flex justify-content-center row">
                    {/* image that displays on top same as image below  */}
                    <div ref={secondImageMobile} className="topRender-img-on-mobile col-sm-12 col-md-4 d-sm-block d-md-none pb-5">
                        <img className={`img-fluid home-body-image  ${secondImgMobile ? 'home-body-image-second' : 'hidden'}`} src={patronSaintJesus} alt="patron-saint-jesus" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                            this is filler content should appear on the left. this is filler content should appear on the left.
                            this is filler content should appear on the left. this is filler content should appear on the left.
                            this is filler content should appear on the left. this is filler content should appear on the left.
                            this is filler content should appear on the left. this is filler content should appear on the left.
                        <p className="pt-5">this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left.</p>
                        <p className="pt-5">this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left. this is filler content should appear on the left.</p>

                    </div>
                    <div className="divider d-none d-lg-block col-lg-2"></div>
                    <div ref={secondImage} className="col-sm-12 col-md-4 d-none d-md-block">
                        <img className={`img-fluid home-body-image ${secondImgInView ? 'home-body-image-second' : 'hidden'}`} src={patronSaintJesus} alt="patron-saint-jesus" />
                    </div>
                </div>
            </div>
            <div className="pt-5 pb-5 container-fluid d-flex justify-content-center bg-light bg-gradient">
                <div className="row">
                    <div ref={thirdImage} className="col-sm-12 col-md-6 pb-3">
                        <img src={square} className={`img-fluid home-body-image  ${thirdImgView ? 'home-body-image-first' : 'hidden'}`} alt="christ"/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <h2 className="text-center">Faith</h2>
                        <p className="pb-2">The Orthodox Church throughout the ages has maintained a continuity of faith and love with the apostolic community which was founded by Christ and sustained by the Holy Spirit.
                         Orthodoxy believes that she has preserved and taught the historic Christian Faith, free from error and distortion, from the time of the Apostles.
                         She also believes that there is nothing in the body of her teachings which is contrary to truth or which inhibits real union with God. The air of antiquity and timelessness which often characterizes Eastern Christianity is an expression of her desire to remain loyal to the authentic Christian Faith.
                         Orthodoxy believes that the Christian Faith and the Church are inseparable. It is impossible to know Christ, to share in the life of the Holy Trinity, or to be considered a Christian apart from the Church. It is in the Church that the Christian Faith is proclaimed and maintained. It is through the Church that an individual is nurtured in the Faith.
                        </p>
                        <button className="button btn btn-primary">Read more</button>
                        <h2 className="text-center">Worship</h2>
                        <p className="pb-2">
                        Worship unites God and man once again.
                        </p>
                        <p>
                        Orthodox Christianity teaches that a clear distinction exists between the uncreated God and the created world. 
                        God is good, and because God created the world, the world is good; but it is also fallen, and as a result we face additional distinctions: between old and new, death and life, profane and sacred, all the degrees of shadow and the very Light Itself.
                         Salvation may be understood as the growth of the human person from the former categories to the latter – from the old, the dead, the profane, and the shadows, to the new, the life, the sacred, and the light.
                          This journey of salvation is presented to us in profound ways in the style and forms of ancient Christian worship.
                        </p>
                        <button className="button btn btn-primary">Read more</button>
                        <h2 className="text-center">Fellowship</h2>
                        <p className="pb-2">
                        By engaging our brothers and sisters, we grow closer to God!
                        </p>
                        <p>    
                        We are never totally aware of how God is moving in our lives, how He is active in our existence.
                         We do know that He is there, that “in Him we live, and move, and have our being” (Acts 17:28).
                          We are in Him and He is in us.
                           But we are never totally conscious of just how He is there, and what are His motivations for our lives.
                        </p>
                        <button className="button btn btn-primary">Read more</button>
                    </div>
                </div>
            </div>
        </>
    )
}