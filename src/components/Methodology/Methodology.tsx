import React, { useState } from 'react';
import { Shield, Scale, Handshake, ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../../utils/data';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Methodology.scss';

const Methodology: React.FC = () => {
  const { ref: headerRef, animationClass: headerClass } = useScrollReveal({ 
    animation: 'fadeInUp', 
    duration: 'normal',
    easing: 'bounce'
  });
  
  const { ref: flowRef, animationClass: flowClass } = useScrollReveal({ 
    animation: 'slideInLeft', 
    duration: 'normal',
    easing: 'elastic'
  });
  
  const { ref: ethicsRef, animationClass: ethicsClass } = useScrollReveal({ 
    animation: 'slideInRight', 
    duration: 'normal',
    easing: 'elastic'
  });
  
  const { ref: faqRef, animationClass: faqClass } = useScrollReveal({ 
    animation: 'zoomIn', 
    duration: 'slow',
    easing: 'bounce'
  });

  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="methodology" className="methodology section">
      <div className="container">
        <div ref={headerRef} className={`methodology__header text-center ${headerClass}`}>
          <h2 className="methodology__title">
            Metodologia e Processos
          </h2>
          <p className="methodology__subtitle">
            Conheça como funciona nosso atendimento e tire suas dúvidas
          </p>
        </div>

        <div className="methodology__content">
          <div ref={flowRef} className={`methodology__flow ${flowClass}`}>
            <h3>Fluxo de Atendimento</h3>
            <div className="methodology__steps">
              <div className="methodology__step">
                <div className="methodology__step-number">1</div>
                <div className="methodology__step-content">
                  <h4>Triagem Inicial</h4>
                  <p>Primeira conversa para entender a necessidade e direcionar o melhor tratamento</p>
                </div>
              </div>
              
              <div className="methodology__step">
                <div className="methodology__step-number">2</div>
                <div className="methodology__step-content">
                  <h4>Avaliação</h4>
                  <p>Processo detalhado com testes padronizados e entrevistas quando necessário</p>
                </div>
              </div>
              
              <div className="methodology__step">
                <div className="methodology__step-number">3</div>
                <div className="methodology__step-content">
                  <h4>Devolutiva</h4>
                  <p>Apresentação dos resultados e discussão das recomendações</p>
                </div>
              </div>
              
              <div className="methodology__step">
                <div className="methodology__step-number">4</div>
                <div className="methodology__step-content">
                  <h4>Acompanhamento</h4>
                  <p>Sessões regulares para monitorar o progresso e ajustar o tratamento</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={ethicsRef} className={`methodology__ethics ${ethicsClass}`}>
            <h3>Ética e Sigilo</h3>
            <div className="methodology__ethics-content">
              <div className="methodology__ethics-item">
                <Shield className="methodology__ethics-icon" />
                <div>
                  <strong>Confidencialidade Total</strong>
                  <p>Todas as informações são protegidas pelo sigilo profissional</p>
                </div>
              </div>
              
              <div className="methodology__ethics-item">
                <Scale className="methodology__ethics-icon" />
                <div>
                  <strong>Código de Ética</strong>
                  <p>Seguimos rigorosamente o Código de Ética Profissional do Psicólogo</p>
                </div>
              </div>
              
              <div className="methodology__ethics-item">
                <Handshake className="methodology__ethics-icon" />
                <div>
                  <strong>Consentimento Informado</strong>
                  <p>Processo transparente com autorização dos responsáveis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={faqRef} className={`methodology__faq ${faqClass}`}>
          <h3 className="text-center">Perguntas Frequentes</h3>
          <div className="methodology__faq-list">
            {faqItems.map((item) => (
              <div key={item.id} className="methodology__faq-item">
                <button
                  className={`methodology__faq-question ${openFAQ === item.id ? 'methodology__faq-question--open' : ''}`}
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={openFAQ === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className="methodology__faq-icon">
                    {openFAQ === item.id ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </button>
                
                <div
                  id={`faq-answer-${item.id}`}
                  className={`methodology__faq-answer ${openFAQ === item.id ? 'methodology__faq-answer--open' : ''}`}
                  aria-hidden={openFAQ !== item.id}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
