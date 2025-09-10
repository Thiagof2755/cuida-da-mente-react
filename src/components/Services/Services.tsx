import React from 'react';
import { Brain, Heart, Check } from 'lucide-react';
import { services, clinicInfo } from '../../utils/data';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.scss';

const Services: React.FC = () => {
  const { ref: headerRef, animationClass: headerClass } = useScrollReveal({ 
    animation: 'fadeInUp', 
    duration: 'normal',
    easing: 'bounce'
  });
  
  const { ref: gridRef, animationClass: gridClass } = useScrollReveal({ 
    animation: 'zoomIn', 
    duration: 'slow',
    easing: 'elastic'
  });
  

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os serviços da ${clinicInfo.name}.`
    );
    window.open(
      `https://wa.me/${clinicInfo.whatsapp}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section id="services" className="services section section--alternate">
      <div className="container">
        <div ref={headerRef} className={`services__header text-center ${headerClass}`}>
          <h2 className="services__title">
            Nossos Serviços
          </h2>
          <p className="services__subtitle">
            Atendimento especializado com foco em resultados e bem-estar
          </p>
        </div>

        <div ref={gridRef} className={`services__grid ${gridClass}`}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="services__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="services__card-accent"></div>
              <div className="services__card-header">
                <div className="services__card-icon">
                  {service.id === 'neuropsychological' && <Brain />}
                  {service.id === 'psychotherapy' && <Heart />}
                </div>
                <h3 className="services__card-title">{service.title}</h3>
              </div>
              
              <p className="services__card-description">
                {service.description}
              </p>
              
              <div className="services__card-details">
                <h4>O que inclui:</h4>
                <ul className="services__card-list">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="services__card-detail">
                      <Check className="services__card-check" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Services;
