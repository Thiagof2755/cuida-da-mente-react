import React from 'react';
import Lottie from 'lottie-react';
import { clinicInfo } from '../../utils/data';
import whatsappAnimation from '../../assets/JsonAnimate/whatsapp.json';
import './WhatsAppButton.scss';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    const url = `https://wa.me/${clinicInfo.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      className="whatsapp-button" 
      onClick={handleWhatsAppClick}
      aria-label="Abrir WhatsApp"
      title="Abrir WhatsApp"
    >
      <Lottie 
        animationData={whatsappAnimation}
        loop={true}
        autoplay={true}
        style={{ width: 40, height: 40 }}
      />
    </button>
  );
};

export default WhatsAppButton;
