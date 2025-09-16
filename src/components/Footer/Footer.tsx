import React from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { clinicInfo } from '../../utils/data';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <h3 className="footer__logo">{clinicInfo.name}</h3>
              <p className="footer__tagline">
                Psicologia e Neuropsicologia para crianças, adolescentes e jovens adultos
              </p>
              <p className="footer__description">
                Atendimento especializado com base em evidências científicas, 
                oferecendo acolhimento e cuidado para o desenvolvimento saudável da mente.
              </p>
            </div>

            <div className="footer__contact">
              <h4>Contato</h4>
              <div className="footer__contact-item">
                <MapPin className="footer__contact-icon" />
                <p>{clinicInfo.address}</p>
              </div>
              <div className="footer__contact-item">
                <Phone className="footer__contact-icon" />
                <p>{clinicInfo.phone}</p>
              </div>
              <div className="footer__contact-item">
                <Mail className="footer__contact-icon" />
                <p>{clinicInfo.email}</p>
              </div>
              <div className="footer__contact-item">
                <Instagram className="footer__contact-icon" />
                <a 
                  href="https://www.instagram.com/ivanice.psi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  @ivanice.psi
                </a>
              </div>
            </div>

            <div className="footer__services">
              <h4>Serviços</h4>
              <ul className="footer__services-list">
                <li>Avaliação Neuropsicológica</li>
                <li>Psicoterapia Individual</li>
                <li>Orientação para Pais</li>
                <li>Atendimento Online</li>
              </ul>
            </div>

            <div className="footer__formation">
              <h4>Formação</h4>
              <div className="footer__formation-item">
                <strong>Graduação:</strong>
                <p>{clinicInfo.formation.graduation}</p>
              </div>
              <div className="footer__formation-item">
                <strong>Especialização:</strong>
                <p>{clinicInfo.formation.specialization}</p>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copyright">
              <p>&copy; {currentYear} {clinicInfo.name}. Todos os direitos reservados.</p>
            </div>
            
            <div className="footer__links">
              <button className="footer__link">Política de Privacidade</button>
              <button className="footer__link">Termos de Uso</button>
              <button className="footer__link">LGPD</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
