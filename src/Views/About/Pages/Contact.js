import '../about.css';

export const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h4>Telephone</h4>
                        <h6>(949) 851-8933</h6>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-sm-12">
                        <h4>Address</h4>
                        <h6>17840 Sky Park Circle
                            Irvine, CA 92614
                        </h6>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-sm-12">
                        <h4>Email</h4>
                        <a href="mailto:FrGeorgeKatrib@gmail.com">FrGeorgeKatrib@gmail.com</a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row text-center">
                <div className="col-12">++++++++++++++++++++++++++++++++++++++++++++++++++</div>
            </div>
            <br></br>
            <div className="row justify-content-center text-center">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h2>Visit us</h2>
                    <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" title="gmap_canvas" src="https://maps.google.com/maps?q=17840%20Sky%20Park%20Circle%20Irvine,%20CA%2092614&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                </div>
            </div>
        </>
    )
}