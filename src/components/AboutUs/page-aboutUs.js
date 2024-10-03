import ContructionImage from '../../assets/Contruction-amico.png';

function PageAbouUs () {
    return (

        <div class="container vh-100 d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col-md-12 text-center">
            <img src={ContructionImage} alt="Imagem de exemplo" width={200}/>
           <h2>Pagina em construção</h2>
            
                <p>A pagina sobre nos está em construção.
                    Clique no botão abaixo para voltar á home
                </p>
                <a href='/'>
                     <button class="btn btn-primary" >HOME</button>
                </a>
               
            </div>
        </div>
    </div>
    )
}

export default PageAbouUs;