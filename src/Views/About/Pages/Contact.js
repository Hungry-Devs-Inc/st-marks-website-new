import '../about.css';
import { default as Hero } from '../../Hero';

export const Contact = () => {
    return (
        <>
        <Hero pageState={"Contact"}/>
        <div className="container bg-light bg-gradient">
            <div className="container-fluid">
            <div className="row gap-3 justify-content-center pt-5">
                <div className="col-lg-3 col-md-4 col-sm-12 card">
                    <h4 className="card-header">Telephone</h4>
                    <h6 className="card-body">(949) 851-8933</h6>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 card">
                    <h4 className="card-header">Address</h4>
                    <h6 className="card-body">17840 Sky Park Circle
                        Irvine, CA 92614
                    </h6>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 card">
                    <h4 className="card-header">Email</h4>
                    <a href="mailto:FrGeorgeKatrib@gmail.com" className="card-body">FrGeorgeKatrib@gmail.com</a>
                </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row justify-content-center text-center">
                <div className="col-lg-4 col-md-12 col-sm-8 card">
                    <h2 className="card-header">Visit us</h2>
                    <div className="maprouter">
                        <div className="gmap_canvas">
                            <iframe width="660" title="church-location" height="650" id="gmap_canvas" src="https://maps.google.com/maps?q=17840%20Sky%20Park%20Circle%20Irvine,%20CA%2092614&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}