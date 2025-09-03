import { Service, FAQItem, NavItem } from '../types';

export const navigationItems: NavItem[] = [
    { id: 'home', label: 'Início', href: '#home' },
    { id: 'about', label: 'Sobre', href: '#about' },
    { id: 'services', label: 'Serviços', href: '#services' },
    { id: 'methodology', label: 'Metodologia', href: '#methodology' },
    { id: 'contact', label: 'Contato', href: '#contact' }
];

export const services: Service[] = [
    {
        id: 'neuropsychological',
        title: 'Avaliação Neuropsicológica',
        description: 'Avaliações completas para diagnóstico de TEA, TDAH, ansiedade e dificuldades de aprendizagem',
        icon: '🧠',
        details: [
            'Testes padronizados e validados',
            'Entrevistas com pais e cuidadores',
            'Relatório detalhado com recomendações',
            'Encaminhamento para outros especialistas quando necessário'
        ]
    },
    {
        id: 'psychotherapy',
        title: 'Psicoterapia Individual',
        description: 'Atendimento personalizado para crianças, adolescentes e adultos',
        icon: '💙',
        details: [
            'Modalidade presencial e online',
            'Abordagem baseada em evidências',
            'Acompanhamento contínuo',
            'Orientação para pais e cuidadores'
        ]
    },
    {
        id: 'guidance',
        title: 'Orientação para Pais',
        description: 'Suporte especializado para cuidadores e familiares',
        icon: '👨‍👩‍👧‍👦',
        details: [
            'Identificação de sinais comportamentais',
            'Estratégias práticas para o dia a dia',
            'Comunicação com a escola',
            'Acompanhamento do desenvolvimento'
        ]
    }
];

export const faqItems: FAQItem[] = [
    {
        id: 'duration',
        question: 'Quanto tempo dura uma avaliação neuropsicológica?',
        answer: 'Uma avaliação completa pode levar de 4 a 6 sessões, dependendo da complexidade do caso e da idade do paciente.'
    },
    {
        id: 'online',
        question: 'O atendimento online é eficaz?',
        answer: 'Sim! A psicoterapia online tem se mostrado tão eficaz quanto o atendimento presencial, oferecendo maior flexibilidade e conforto.'
    },
    {
        id: 'confidentiality',
        question: 'Como é garantido o sigilo profissional?',
        answer: 'O sigilo é garantido pelo Código de Ética Profissional do Psicólogo. As informações são confidenciais, exceto em situações específicas previstas em lei.'
    },
    {
        id: 'first-session',
        question: 'Como é a primeira sessão?',
        answer: 'A primeira sessão é uma entrevista inicial para conhecer o paciente e sua história, esclarecer dúvidas e estabelecer os objetivos do tratamento.'
    },
    {
        id: 'insurance',
        question: 'Aceitam convênios médicos?',
        answer: 'Atualmente atendemos particular e alguns convênios. Entre em contato para verificar a cobertura do seu plano.'
    }
];

export const clinicInfo = {
    name: 'Cuida da Mente',
    psychologist: 'Drª Ivanice Barros',
    address: 'Rua Antonio Salvia, 30 - São Paulo, SP',
    phone: '(11) 98210-9964',
    whatsapp: '11982109964',
    email: 'contato@cuidadamente.com.br',
    hours: 'Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h',
    formation: {
        graduation: 'Psicologia - UNISA',
        specialization: 'Neuropsicologia - Centro de Estudos de Neurologia do HC-USP'
    }
};
