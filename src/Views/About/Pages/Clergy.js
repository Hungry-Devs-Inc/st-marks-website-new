import clergy from './clergy.json';
import '../about.css';
import { default as Hero } from '../../Hero';

export const Clergy = () => {
    return (
        <>
            <Hero pageState={"Clergy"} />
            <ul className="container-fluid bg-light bg-gradient">
                {clergy.members.map((member, index) => {
                    return (
                        <li key={index} className="row clergy-member d-flex- justify-content-center">
                            <div className="left-column col-md-3 col-sm-12">
                                <img src={member.photo} alt={member.name}></img>
                                <h3>{member.title}</h3>
                                <h3>{member.name}</h3>
                                <h4>{member.subtitle ? member.subtitle : null}</h4>
                            </div>
                            <div className="right-column col-md-6 col-sm-12">
                                <p>{member.bio}</p>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}