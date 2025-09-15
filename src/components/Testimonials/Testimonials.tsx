import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.scss';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { ref: headerRef, animationClass: headerClass } = useScrollReveal({ 
    animation: 'fadeInUp', 
    duration: 'normal',
    easing: 'bounce'
  });
  
  const { ref: carouselRef, animationClass: carouselClass } = useScrollReveal({ 
    animation: 'fadeInUp', 
    duration: 'slow',
    easing: 'default'
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Antes de começar a terapia me encontrava tendo crises de ansiedade recorrente, cada vez com espaço de tempo menor. Até que em uma semana tive mais de uma crise e resolvi procurar ajuda, antes que eu ficasse pior. Sentia muito palpitação no coração, falta de ar, tremia quando ficava nervosa/ansiosa, e quando crise ficava muito forte eram todas essas sensações de uma vez só. Após as sessões de terapia, consegui controlar mais as minhas emoções, entender as minhas prioridades, para assim, conseguir ter dias mais tranquilos e calmos. A cada sessão que passava eu olhava mais para mim, para o que sinto. Entendi que não posso controlar o que está ao meu redor, e sim, o que eu sinto.",
      author: "Y. S. Rodrigues"
    },
    {
      id: 2,
      text: "Ótima profissional! Estar com ela é sentir respeito pelo ser que você é. Ela nos transmite confiança, segurança. Através de suas técnicas nos dá suporte para superar nossos temores, bloqueios, desenvolvendo nossa capacidade de pensar, agir, refletir, se questionar. Em cada sessão, saio mais leve, bem melhor!",
      author: "S. Prado"
    },
    {
      id: 3,
      text: "Sempre atenciosa, sensata, houve com atenção e sabe nos repassar oq devemos pensar, sobre o equilíbrio da vida! Excelente profissional. Me ajudou bastante em fases da vida.",
      author: "S. S. Teixeira"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      console.log('Next:', prevIndex, '->', nextIndex); // Debug log
      return nextIndex;
    });
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      console.log('Prev:', prevIndex, '->', nextIndex); // Debug log
      return nextIndex;
    });
  }, [testimonials.length]);

  const goToTestimonial = useCallback((index: number) => {
    if (index >= 0 && index < testimonials.length) {
      console.log('GoTo:', currentIndex, '->', index); // Debug log
      setCurrentIndex(index);
    }
  }, [currentIndex, testimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Calcular a posição correta do transform
  const getTransformValue = () => {
    // Cada slide ocupa 33.333% da largura do track
    // Para mostrar o slide correto, multiplicamos o índice por 33.333%
    const translateX = currentIndex * (100 / testimonials.length);
    console.log('Transform:', `translateX(-${translateX}%)`); // Debug log
    return `translateX(-${translateX}%)`;
  };

  return (
    <section id="testimonials" className="testimonials section section--alternate">
      <div className="container">
        <div ref={headerRef} className={`testimonials__header text-center ${headerClass}`}>
          <h2 className="testimonials__title">
            Depoimentos
          </h2>
          <p className="testimonials__subtitle">
            Histórias reais de transformação e bem-estar
          </p>
        </div>

        <div 
          ref={carouselRef} 
          className={`testimonials__carousel ${carouselClass}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonials__wrapper">
            <div 
              className="testimonials__track"
              style={{ 
                transform: getTransformValue()
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonials__slide ${index === currentIndex ? 'testimonials__slide--active' : ''}`}
                >
                  <div className="testimonials__card">
                    <cite className="testimonials__author">
                      {testimonial.author}
                    </cite>
                    <blockquote className="testimonials__text">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="testimonials__controls">
            <button 
              className="testimonials__nav-btn testimonials__nav-btn--prev"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
              type="button"
            >
              <ChevronLeft />
            </button>
            
            <button 
              className="testimonials__nav-btn testimonials__nav-btn--next"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
              type="button"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Debug Info - Remover em produção */}
            
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
