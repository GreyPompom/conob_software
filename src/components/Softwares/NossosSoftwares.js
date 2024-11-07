import './NossosSoftware.css' ;

function NossosSoftwares() {
  return (
    <div className="nossos-softwares gradient-blue py-5"  >
      <div class="container text-center py-5 d-grid" data-aos="fade-up">
        <h1>Nossos <span class="highlight">Softwares</span></h1>
        <div class="software-section row bg-white rounded shadow overflow-hidden mt-4 ">
            <div class="menu col-lg-3 bg-light p-3 border-end">
                <button class="menu-item btn btn-outline-primary w-100 mb-2 active">Financeiro</button>
                <button class="menu-item btn btn-outline-primary w-100 mb-2">Estoque</button>
                <button class="menu-item btn btn-outline-primary w-100 mb-2">Ecommerce</button>
                <button class="menu-item btn btn-outline-primary w-100 mb-2">Vendas</button>
            </div>
            <div class="content col-lg-9 d-flex p-4">
                <div class="details pe-4">
                    <h2>Sistema Financeiro</h2>
                    <p>QA engineers conduct various types of testing, including functional testing, regression testing, performance testing, and security testing.</p>
                    <ul class="list-unstyled">
                        <li>QA engineers</li>
                        <li>QA engineers</li>
                        <li>QA engineers</li>
                    </ul>
                    <button class="btn btn-primary mt-3">Mais informações</button>
                </div>
                <div class="image ms-auto">
                    <img src="https://via.placeholder.com/400" alt="Software Image" class="img-fluid rounded"/>
                </div>
            </div>
        </div>
    </div>
    </div>

  )};

  export default NossosSoftwares;