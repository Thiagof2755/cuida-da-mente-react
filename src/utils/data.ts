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
        description: 'Investigação de funções cognitivas (atenção, memória, linguagem, funções executivas e comportamento) com identificação ou refutação de transtornos e potencialização de áreas preservadas.',
        icon: '🧠',
        details: [
            'Triagem inicial',
            'Entrevistas ampliadas com pais ou cuidadores',
            'Testagens padronizadas',
            'Laudos e recomendações',
            'Devolutiva e entrega dos exames'
        ]
    },
    {
        id: 'psychotherapy',
        title: 'Psicoterapia Individual',
        description: 'Apoio emocional para lidar com dificuldades escolares, relacionamento, autoestima e outros',
        icon: '💙',
        details: [
            'Modalidade presencial e online (a depender da idade e necessidade)',
            'Abordagem baseada em evidências',
            'Acompanhamento contínuo',
            'Orientação para pais, cuidadores e/ou educadores'
        ]
    }
];

export const faqItems: FAQItem[] = [
    {
        id: 'duration',
        question: 'Quanto tempo dura uma avaliação neuropsicológica?',
        answer: 'Uma avaliação completa pode levar de de 8 a 12 sessões, dependendo da complexidade do caso.  '
    },
    {
        id: 'duratio',
        question: 'Quanto tempo dura uma sessão terapêutica? ',
        answer: 'Cada sessão dura aproximadamente 50 minutos. '
    },
    {
        id: 'online',
        question: 'O atendimento online é eficaz?',
        answer: 'Sim! A psicoterapia online tem se mostrado tão eficaz quanto o atendimento presencial, oferecendo maior flexibilidade e conforto.'
    },
    {
        id: 'confidentiality',
        question: 'Como é garantido o sigilo profissional?',
        answer: 'O sigilo é garantido pelo Código de Ética Profissional do Psicólogo. As informações são confidenciais, exceto em situações específicas previstas pela legislação brasileira. ',
    },
    {
        id: 'first-session',
        question: 'Como é a primeira sessão?',
        answer: 'A primeira sessão é uma entrevista inicial para conhecer o paciente e sua história, esclarecer dúvidas e estabelecer os objetivos do tratamento.'
    },
    {
        id: 'insurance',
        question: 'Aceitam convênios médicos?',
        answer: 'O atendimento é particular, mas os clientes podem buscar reembolso com seus planos de saúde apresentado as notas fiscais. '
    }
];

export const clinicInfo = {
    name: 'Cuida da Mente',
    psychologist: 'Ivanice Barros',
    address: 'Rua Antonio Salvia, 30 - São Paulo, SP',
    phone: '(11) 96548-6611',
    whatsapp: '11965486611',
    email: 'contato@cuidadamente.com.br',
    hours: 'Segunda a Sexta: 8h às 19h | Sábado: 8h às 13h',
    formation: {
        graduation: 'Psicologia - UNISA',
        specialization: 'Neuropsicologia - Centro de Estudos de Neurologia do HC-USP'
    }
};
