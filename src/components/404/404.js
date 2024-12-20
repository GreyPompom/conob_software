import image404 from '../../assets/404-amico.png';
function page404() {
    return (
        <div class="container vh-100 d-flex justify-content-center align-items-center">
            <div class="row">
                <div class="col-md-12 text-center">
                    <img src={image404} alt="404" width={300}loading='lazy'/>
                    <h2>UH OH! You're lost.</h2>
                    <p>The page you are looking for does not exist.
                        How you got here is a mystery. But you can click the button below
                        to go back to the homepage.
                    </p>
                    <a href='/'>
                         <button class="btn btn-primary" >HOME</button>
                    </a>
                   
                </div>
            </div>
        </div>
    )
}

export default page404;