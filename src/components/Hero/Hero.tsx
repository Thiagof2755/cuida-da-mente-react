import React from 'react';
import { MessageCircle } from 'lucide-react';
import { clinicInfo } from '../../utils/data';
import LogoBranco from '../../assets/Logo.png';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Hero.scss';

const Hero: React.FC = () => {
  const { ref: brandingRef, animationClass: brandingClass } = useScrollReveal({ 
    animation: 'zoomIn', 
    duration: 'slow',
    easing: 'elastic'
  });
  
  const { ref: titleRef, animationClass: titleClass } = useScrollReveal({ 
    animation: 'fadeInUp', 
    duration: 'normal',
    easing: 'bounce'
  });
  
  const { ref: ctaRef, animationClass: ctaClass } = useScrollReveal({ 
    animation: 'slideInUp', 
    duration: 'fast',
    easing: 'default'
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
    <section id="home" className="hero section section--full-height">
      <div className="hero__background">
        <div className="hero__radial-gradient"></div>
        <div className="hero__background-lines"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          {/* Branding Cuida da Mente */}
          <div ref={brandingRef} className={`hero__branding ${brandingClass}`}>
            <img src={LogoBranco} alt="Cuida da Mente" className="hero__logo" />
            <h2 className="hero__brand-name">Cuida da Mente</h2>
            <p className="hero__brand-tagline">Cultive seu bem-estar mental</p>
          </div>

          <div className="hero__text">
            <h1 ref={titleRef} className={`hero__title ${titleClass}`}>
              Psicologia e Neuropsicologia para{' '}
              <span className="hero__highlight">crianças, adolescentes e adultos</span>
            </h1>
            
            <div ref={ctaRef} className={`hero__cta ${ctaClass}`}>
              <button 
                className="btn btn--primary hero__cta-button"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="hero__cta-icon" />
                Fale no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
