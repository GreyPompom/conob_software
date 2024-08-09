import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
    return (
        <div className="container-fluid bg-dark text-white py-5">
            <div className="container">
                <h2 className="text-center mb-5">Entre em Contato</h2>
                <div className="row">
                    {/* Contact Info */}
                    <div className="col-md-6 mb-4">
                        <h3>Com um clique</h3>
                        <p>
                            Lorem ipsum interdum dolor libero enim leo bibendum fringilla ultricies ut, 
                            nostra convallis ipsum quisque sed velit dictum class imperdiet fames, 
                            taciti gravida suspendisse metus conubia lacus taciti at consectetur.
                        </p>
                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-geo-alt-fill me-3 fs-4 text-primary"></i>
                                <span>Grande Florianopolis, SC, BR</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-telephone-fill me-3 fs-4 text-primary"></i>
                                <span>+55 48 9 9656-5563</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-envelope-fill me-3 fs-4 text-primary"></i>
                                <span>FabioAmaral@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <h5>Siga-nos nas redes sociais</h5>
                            <div className="d-flex gap-3">
                                <i className="bi bi-instagram fs-3"></i>
                                <i className="bi bi-facebook fs-3"></i>
                                <i className="bi bi-twitter fs-3"></i>
                                <i className="bi bi-youtube fs-3"></i>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-6">
                        <div className="card p-4 shadow-lg">
                            <h3 className="mb-4">Mande uma mensagem</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="name" placeholder="Nome" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Seu e-mail</label>
                                    <input type="email" className="form-control" id="email" placeholder="Seu e-mail" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Mensagem</label>
                                    <textarea className="form-control" id="message" rows="3" placeholder="Mensagem"></textarea>
                                </div>
                                <small className="form-text text-muted mb-3">
                                    Ao enviar a mensagem você concorda com nossa política de privacidade.
                                </small>
                                <button type="submit" className="btn btn-primary w-100">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
