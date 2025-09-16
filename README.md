# Cuida da Mente - Site Institucional

Site institucional da clínica **Cuida da Mente**, especializada em Psicologia e Neuropsicologia para crianças, adolescentes e jovens adultos.

## 🏥 Sobre a Clínica

A **Cuida da Mente** é uma clínica de Psicologia e Neuropsicologia localizada em São Paulo, com foco em:

- **Avaliações neuropsicológicas** (TEA, TDAH, Ansiedade, Dificuldades de Aprendizagem)
- **Psicoterapia individual** (presencial e online)
- **Orientação para pais e cuidadores**

### Psicóloga Responsável
**Drª Ivanice Barros**
- Graduação em Psicologia pela UNISA
- Pós-graduação em Neuropsicologia pelo Centro de Estudos de Neurologia do HC-USP

## 🚀 Tecnologias Utilizadas

- **React 19** com TypeScript
- **SASS/SCSS** para estilização
- **CSS Modules** para organização de estilos
- **Responsive Design** (mobile-first)
- **SEO otimizado** com meta tags e schema markup

## 🎨 Design System

### Paleta de Cores
- **Primária**: Deep Teal (#03383A)
- **Secundária**: Blue/Teal (#0F6B82)
- **Acentos**: Pink (#FF5EA8) e Cyan (#25C2B8)
- **Neutros**: Branco (#FFFFFF), Cinzas (#6B7A7B / #E9EFEF)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

## 📱 Funcionalidades

### Seções do Site
1. **Home** - Mensagem de boas-vindas e CTA para WhatsApp
2. **Sobre** - Informações sobre a psicóloga e formação
3. **Serviços** - Lista detalhada de atendimentos
4. **Metodologia** - Fluxo de atendimento e FAQ
5. **Contato** - Formulário e informações de contato

### Recursos Técnicos
- **Header fixo** com navegação responsiva
- **Botão flutuante** de WhatsApp sempre visível
- **Animações suaves** (fade, slide, scroll-in)
- **Formulário de contato** funcional
- **FAQ interativo** com accordion
- **Scroll suave** entre seções
- **Acessibilidade** com ARIA labels e contraste AA

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 19+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/cuida-da-mente.git
cd cuida-da-mente
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo desenvolvimento**
```bash
npm start
```

4. **Abra no navegador**
```
http://localhost:3000
```

### Scripts disponíveis

- `npm start` - Executa em modo desenvolvimento
- `npm run build` - Cria build de produção
- `npm test` - Executa testes
- `npm run eject` - Ejecta configurações (irreversível)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header/         # Cabeçalho fixo
│   ├── Hero/           # Seção inicial
│   ├── About/          # Sobre a psicóloga
│   ├── Services/       # Serviços oferecidos
│   ├── Methodology/    # Metodologia e FAQ
│   ├── Contact/        # Formulário de contato
│   ├── Footer/         # Rodapé
│   └── WhatsAppButton/ # Botão flutuante
├── styles/             # Estilos globais SASS
├── types/              # Tipos TypeScript
├── utils/              # Dados estáticos e utilitários
└── App.tsx             # Componente principal
```

## 🔧 Configurações

### SEO
- Meta tags otimizadas
- Open Graph para redes sociais
- Schema markup para negócio local
- Sitemap XML
- Robots.txt

### Acessibilidade
- Contraste AA
- ARIA labels
- Navegação por teclado
- Textos alternativos

### Performance
- Lazy loading de componentes
- Otimização de imagens
- Minificação de CSS/JS
- Compressão gzip

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌐 Deploy

### Build de Produção
```bash
npm run build
```

### Hospedagem Recomendada
- **Vercel** (recomendado para React)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📞 Contato

**Clínica Cuida da Mente**
- **Endereço**: Rua Antonio Salvia, 30 - São Paulo, SP
- **Telefone/WhatsApp**: (11) 96548-6611
- **E-mail**: contato@cuidadamente.com.br
- **Horários**: Segunda a Sexta: 8h às 19h | Sábado: 8h às 13h

## 📄 Licença

Este projeto é propriedade da Clínica Cuida da Mente. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para cuidar da saúde mental das famílias brasileiras.**
