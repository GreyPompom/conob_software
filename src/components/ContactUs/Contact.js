import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Contact.css';

function ContactUs() {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [feedback, setFeedback] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div className="contact-us container-fluid bg-dark text-white py-4 rounded-top">
            <div className="container">
                <h2 className="title text-center mb-3">Entre em Contato</h2>
                <div className="row px-2 px-sm-5 justify-content-center">
                    {/* Contact Info */}
                    <div className="col-md-5 mb-4 text-start p-4">
                        <h3 className='mb-2 text-white'>Com um clique</h3>
                        <p class="text-white">
                            Tem interesse em saber mais sobre nossas soluções ou deseja discutir um projeto específico? Nossa equipe está pronta para ajudar! Entre em contato conosco preenchendo o formulário.
                        </p>
                        <div className="adress mb-4 border-bottom">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-geo-alt-fill me-3 fs-4 text-primary"></i>
                                <span>Rua Jair Hamms, 38, Pedra Branca, Palhoca 88.137-084</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-telephone-fill me-3 fs-4 text-primary"></i>
                                <span>+55 48 9 91810384</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-envelope-fill me-3 fs-4 text-primary"></i>
                                <span>contato@conob.com.br</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-instagram me-3 fs-4 text-primary"></i>
                                <span><a href='https://www.instagram.com/conob_software'>
                                    conob_software
                                </a> </span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="container-form-email col-md-5">
                        <div className="card p-4 shadow-lg">
                            <h3 className="mb-1 text-start text-black">Mande uma mensagem</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-1">
                                    <label htmlFor="name" className="form-label"></label>
                                    <input type="text" className="form-control p-2 shadow border-0" id="name" placeholder="Nome" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="email" className="form-label"></label>
                                    <input type="email" className="form-control p-2 shadow border-0" id="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="message" className="form-label"></label>
                                    <textarea className="form-control p-2 shadow border-0" id="message" rows="4" placeholder="Mensagem" value={formData.message} onChange={handleChange} ></textarea>
                                </div>
                                <small className="form-text text-muted mt-5">
                                    Ao enviar a mensagem você concorda com <a href='/politica'>nossa política de privacidade</a> .
                                </small>
                                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
                            </form>
                            {feedback && <div className="mt-3 alert alert-info">{feedback}</div>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
