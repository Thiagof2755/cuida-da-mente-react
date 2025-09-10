import React from 'react';
import { Brain, Award, CheckCircle, MapPin, Clock, Star, GraduationCap, Users, Heart } from 'lucide-react';
import { clinicInfo } from '../../utils/data'; // Certifique-se de que este caminho está correto
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.scss';

// Mapeamento de strings para componentes de ícone Lucide
const IconMap: { [key: string]: React.ElementType } = {
  Brain, Award, CheckCircle, MapPin, Clock, Star, GraduationCap, Users, Heart
};

const About: React.FC = () => {
  const { ref: headerRef, animationClass: headerClass } = useScrollReveal({ 
    animation: 'fadeInDown', 
    duration: 'normal',
    easing: 'bounce'
  });
  
  const { ref: introRef, animationClass: introClass } = useScrollReveal({ 
    animation: 'fadeInLeft', 
    duration: 'normal',
    easing: 'default'
  });
  
  const { ref: topicsRef, animationClass: topicsClass } = useScrollReveal({ 
    animation: 'fadeInRight', 
    duration: 'normal',
    easing: 'default'
  });
  
  const { ref: specialtiesRef, animationClass: specialtiesClass } = useScrollReveal({ 
    animation: 'zoomIn', 
    duration: 'slow',
    easing: 'elastic'
  });

  const psychologistName = clinicInfo.psychologist || 'Psicóloga'; // Garante um nome padrão

  // Dados do componente About, agora embutidos
  const aboutData = {
    badge: {
      icon: 'Brain',
      text: 'Psicologia Clínica e Neuropsicologia',
    },
    intro: [
      `Sou psicóloga (CRP 06/179065), com experiência no cuidado de crianças, adolescentes e jovens adultos. Sou pós-graduada em Neuropsicologia pelo Hospital das Clínicas – Faculdade de Medicina da USP (FMUSP), o que me permite compreender os aspectos cognitivos e emocionais que influenciam o desenvolvimento e o comportamento.`,
      `Realizo avaliações neuropsicológicas para investigar padrões cognitivos e emocionais, elaborando laudos claros, objetivos e fundamentados cientificamente, que orientam famílias e profissionais na definição das melhores estratégias de intervenção.`,
      `Além disso, atuo na psicoterapia baseada na Terapia Cognitivo-Comportamental (TCC), auxiliando meus pacientes a ressignificar pensamentos e emoções, promovendo mudanças reais e duradouras. Acredito no potencial único de cada pessoa e no poder de construir caminhos mais leves e equilibrados, com acolhimento e propósito.`,
    ],
    topics: [
      {
        icon: 'CheckCircle',
        title: 'Psicologia Clínica:',
        description: 'Atendimento personalizado para crianças, adolescentes e jovens adultos',
      },
      {
        icon: 'CheckCircle',
        title: 'Avaliação Neuropsicológica:',
        description: 'Diagnósticos de TEA, TDAH, Aprendizagem e outros',
      },
      {
        icon: 'CheckCircle',
        title: 'Orientação Familiar:',
        description: 'Suporte e estratégias para pais e cuidadores',
      },
      {
        icon: 'CheckCircle',
        title: 'Intervenções Terapêuticas:',
        description: 'Baseadas em evidências científicas',
      },
    ],
    specialtiesSummary: `Utiliza abordagens integrativas que combinam técnicas da Terapia Cognitivo-Comportamental (TCC), Psicologia Positiva e intervenções neuropsicológicas, sempre adaptadas às necessidades específicas de cada paciente.`,
    specialtyItems: [
      {
        icon: 'Brain',
        title: 'Avaliação Neuropsicológica',
        description: 'Identificação de TEA, TDAH, transtornos de aprendizagem e funcionamento cognitivo',
      },
      {
        icon: 'Users',
        title: 'Psicoterapia Individual',
        description: 'Atendimento personalizado para todas as idades',
      },
      {
        icon: 'Heart',
        title: 'Orientação de Pais',
        description: 'Estratégias e suporte para familiares',
      },
    ],
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__content">
          {/* Cabeçalho */}
          <div ref={headerRef} className={`about__header ${headerClass}`}>
            {aboutData.badge && (
              <div className="about__badge">
                {IconMap[aboutData.badge.icon] && React.createElement(IconMap[aboutData.badge.icon], { className: "about__badge-icon" })}
                <span>{aboutData.badge.text}</span>
              </div>
            )}
            <h2 className="about__title">Sobre {psychologistName}</h2>
          </div>

          {/* Conteúdo Principal */}
          <div className="about__main-content">
            {/* Informações da Psicóloga */}
            <div className="about__profile">
              <div ref={introRef} className={`about__intro ${introClass}`}>
                {aboutData.intro.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.replace('{psychologistName}', psychologistName)}
                  </p>
                ))}
              </div>
            </div>

            {/* Experiência e Especialidades */}
            <div className="about__details">
              <div ref={topicsRef} className={`about__experience ${topicsClass}`}>
                <ul className="about__topics">
                  {aboutData.topics.map((topic, index) => {
                    const IconComponent = IconMap[topic.icon];
                    return (
                      <li key={index} className="about__topic-card">
                        {IconComponent && <IconComponent className="about__topic-icon" />}
                        <div>
                          <h4>{topic.title}</h4>
                          <p>{topic.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
