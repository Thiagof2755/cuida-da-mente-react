// Contact.tsx
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Lottie from 'lottie-react';
import { clinicInfo } from '../../utils/data';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import StressAnimation from '../../assets/JsonAnimate/Stress.json';
import './Contact.scss';


const Contact: React.FC = () => {
  const { ref: headerRef, animationClass: headerClass } = useScrollReveal({
    animation: 'fadeInUp',
    duration: 'normal',
    easing: 'bounce'
  });

  const { ref: animationRef, animationClass: animationClass } = useScrollReveal({
    animation: 'slideInLeft',
    duration: 'normal',
    easing: 'elastic'
  });

  const { ref: infoRef, animationClass: infoClass } = useScrollReveal({
    animation: 'slideInRight',
    duration: 'normal',
    easing: 'elastic'
  });


  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar uma consulta na ${clinicInfo.name}.`
    );
    window.open(
      `https://wa.me/${clinicInfo.whatsapp}?text=${message}`,
      '_blank'
    );
  };


  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div ref={headerRef} className={`contact__header text-center ${headerClass}`}>
          <h2 className="contact__title">
            Entre em Contato
          </h2>
          <p className="contact__subtitle">
            Estamos aqui para ajudar. Agende sua consulta ou tire suas dúvidas via WhatsApp.
          </p>
        </div>

        <div className="contact__content">
          <div ref={animationRef} className={`contact__animation-container ${animationClass}`}>
            <div className="contact__animation">
              {/* Bloco de agendamento via WhatsApp movido para o topo */}
              <div className="contact__whatsapp">
                <h4>Agende via WhatsApp</h4>
                <p>Resposta rápida e agendamento facilitado</p>
                <button
                  className="btn btn--whatsapp contact__whatsapp-button"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="contact__whatsapp-icon" />
                  Falar no WhatsApp
                </button>
              </div>
              <p>Cultive seu bem-estar mental</p>
              <div className="contact__lottie-container">
                <Lottie
                  animationData={StressAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: '60%', height: 'auto', maxWidth: '500px' }}
                />
              </div>
            </div>
          </div>

          <div ref={infoRef} className={`contact__info ${infoClass}`}>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <MapPin className="contact__info-icon" />
                <div>
                  <strong>Endereço</strong>
                  <p>{clinicInfo.address}</p>
                </div>
              </div>

              <div className="contact__info-item">
                <Phone className="contact__info-icon" />
                <div>
                  <strong>Telefone/WhatsApp</strong>
                  <p>{clinicInfo.phone}</p>
                </div>
              </div>

              <div className="contact__info-item">
                <Mail className="contact__info-icon" />
                <div>
                  <strong>E-mail</strong>
                  <p>{clinicInfo.email}</p>
                </div>
              </div>

              <div className="contact__info-item">
                <Clock className="contact__info-icon" />
                <div>
                  <strong>Horários de Atendimento</strong>
                  <p>{clinicInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
