# Scroll Reveal - Documentação

## Visão Geral
O sistema de scroll reveal foi implementado usando `react-intersection-observer` para criar animações suaves quando os elementos entram na viewport.

## Como Usar

### 1. Importar o Hook
```tsx
import { useScrollReveal } from '../../hooks/useScrollReveal';
```

### 2. Usar o Hook no Componente
```tsx
const { ref, animationClass } = useScrollReveal({
  animation: 'fadeInUp',
  duration: 'normal',
  easing: 'bounce'
});
```

### 3. Aplicar as Classes no JSX
```tsx
<div ref={ref} className={`meu-componente ${animationClass}`}>
  Conteúdo que será animado
</div>
```

## Opções Disponíveis

### Animações (animation)
- `fadeIn` - Aparece com fade
- `fadeInUp` - Aparece com fade subindo
- `fadeInDown` - Aparece com fade descendo
- `fadeInLeft` - Aparece com fade da esquerda
- `fadeInRight` - Aparece com fade da direita
- `slideInUp` - Desliza de baixo para cima
- `slideInDown` - Desliza de cima para baixo
- `slideInLeft` - Desliza da esquerda
- `slideInRight` - Desliza da direita
- `zoomIn` - Aparece com zoom
- `zoomOut` - Aparece com zoom de fora
- `bounce` - Aparece com bounce
- `flip` - Aparece com flip 3D
- `rotate` - Aparece com rotação

### Duração (duration)
- `fast` - 0.4s
- `normal` - 0.8s (padrão)
- `slow` - 1.2s

### Easing (easing)
- `default` - Transição suave padrão
- `bounce` - Efeito bounce
- `elastic` - Efeito elástico

### Outras Opções
- `threshold` - Ponto de ativação (0.1 = 10% visível)
- `triggerOnce` - Se deve animar apenas uma vez (false = sempre)
- `rootMargin` - Margem para ativação (configurado automaticamente)

## Exemplos de Uso

### Animação Simples
```tsx
const { ref, animationClass } = useScrollReveal({ 
  animation: 'fadeInUp' 
});
```

### Animação com Duração e Easing
```tsx
const { ref, animationClass } = useScrollReveal({ 
  animation: 'zoomIn',
  duration: 'slow',
  easing: 'elastic'
});
```

### Animação com Threshold Personalizado
```tsx
const { ref, animationClass } = useScrollReveal({ 
  animation: 'slideInLeft',
  threshold: 0.5 // Ativa quando 50% visível
});
```

## Estrutura CSS

O sistema gera automaticamente as classes CSS necessárias:
- `.scroll-reveal` - Classe base
- `.scroll-reveal--{animation}` - Classe da animação específica
- `.scroll-reveal--duration-{duration}` - Classe da duração
- `.scroll-reveal--ease-{easing}` - Classe do easing
- `.scroll-reveal--active` - Classe quando ativo (visível)

## Notas Importantes

1. **Footer não usa scroll reveal** - Por ser sempre visível no final da página
2. **Animações são responsivas** - Funcionam em todos os dispositivos
3. **Performance otimizada** - Usa Intersection Observer nativo
4. **Fallback automático** - Se o Intersection Observer não estiver disponível, funciona normalmente

## Troubleshooting

### Animação não funciona
- Verifique se o elemento tem altura suficiente
- Confirme se as classes CSS estão sendo aplicadas
- Verifique o console para erros

### Animação muito rápida/lenta
- Ajuste a propriedade `duration`
- Use `easing` para controlar o tipo de transição

### Elemento não aparece
- Verifique se o `ref` está sendo aplicado corretamente
- Confirme se o elemento está sendo renderizado
