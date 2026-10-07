# DESIGN SYSTEM — Vitor Ferreira

> **Versão Oficial:** 3.0.0 (High Impact Living System)  
> **Metodologia:** [Pé Direito AI System](file:///C:/Users/jferr/OneDrive/Second-Brain/Pe%20Direito/AI%20SYSTEM/00%20-%20System%20Router.md) / [Impeccable Design Engineering](file:///C:/Users/jferr/OneDrive/Second-Brain/Pe%20Direito/AI%20SYSTEM/05%20-%20Impeccable/commands-map.md)  
> **Status:** Ativo / Consolidado  
> **Showcase Visual Interativo:** [`assets/design_system_vitor.html`](file:///c:/Users/jferr/OneDrive/Second-Brain/Clientes/Vitor%20Ferreira/site/assets/design_system_vitor.html)  
> **Escopo:** Site Institucional One-Page & Landing Pages de Alta Conversão

---

## 1. Visão Geral e Princípios de Design

O Design System de **Vitor Ferreira** foi arquitetado para comunicar **autoridade executiva máxima, dinamismo comercial persuasivo e sofisticação visual cinematográfica**.

Inspirado em padrões de engenharia de design de classe mundial (incorporando superfícies em vidro fosco, cards sobrepostos em cascata interativa, painéis de impacto esculpidos e microinterações de alto feedback tátil), o sistema traduz a essência da marca:

> **"Desenvolva pessoas. Transforme comportamentos. Gere resultados."**  
> *Treinador • Mentor • Especialista em Vendas e Desenvolvimento de Pessoas com mais de 30 anos no campo de batalha comercial.*

### Princípios Nucleares

1. **Autoridade com Energia (Executive Punch):** Fusão de neutros profundos nobres (`#060412`, `#0D0A22`) com a luminosidade do Laranja Oficial (`#FD562A`, `#FF7552`) e toques de champanhe/ouro (`#FFE2B3`), gerando contraste eletrizante sem poluição visual.
2. **Profundidade Táctil & Superfícies Vivas:** Substituição de caixas rígidas e chapadas por vidros translúcidos com desfoque de fundo (`backdrop-filter: blur(14px - 28px)`), gradientes angulares calculados e auras luminosas suaves (`--shadow-glow`).
3. **Componentes com Interação Orgânica:** Componentes reagem ao usuário com propósito cognitivo:
   - *Cards de Processo que expandem sob o mouse*;
   - *Acordeões que aplicam dimming aos itens não focados*;
   - *Formulários em vidro com checkmarks reativos instantâneos*;
   - *Marquee infinito de marcas com ativação cromática no hover*.
4. **Single Source of Truth Absoluto:** Toda dimensão — cor, escala modular, raio de borda, entrelinha e curva de aceleração — deriva exclusivamente de design tokens semânticos declarados em `:root`.

---

## 2. Design Tokens Oficiais (v3.0.0)

### 2.1. Cores e Superfícies (Color & Surface System)

#### Primitivos de Marca — Laranja Oficial Vitor Ferreira
- `--color-orange-50`: `#FFF5F2` (Fundos sutis de tags e chips)
- `--color-orange-100`: `#FFE6DF`
- `--color-orange-200`: `#FFC5B5`
- `--color-orange-300`: `#FFA086` (Acentos luminosos e gradientes)
- `--color-orange-400`: `#FF7552` (Destaque tipográfico e bordas ativas)
- `--color-orange-500`: `#FD562A` **[Cor Primária Oficial da Marca]**
- `--color-orange-600`: `#DF3D12`
- `--color-orange-700`: `#BF2902` **[Hover Primário]**
- `--color-orange-800`: `#932002` **[Active Primário]**
- `--color-orange-900`: `#6B1701`

#### Primitivos de Ouro e Destaque Nobre
- `--color-gold-300`: `#FFE2B3` (Bordas douradas de cards em destaque)
- `--color-gold-400`: `#FFD285`
- `--color-gold-glow`: `rgba(253, 86, 42, 0.35)`

#### Neutros e Profundidade Noturna
- `--color-neutral-0`: `#FFFFFF` (Branco puro / Texto primário on-dark)
- `--color-neutral-50`: `#F8F9FA`
- `--color-neutral-100`: `#F1F3F5`
- `--color-neutral-200`: `#E9ECEF`
- `--color-neutral-300`: `#DEE2E6` (Bordas padrão)
- `--color-neutral-700`: `#495057`
- `--color-neutral-900`: `#212529`
- `--color-neutral-950`: `#111111`

#### Superfícies Noturnas Executivas (Navy & Noir)
- `--color-navy-950`: `#060412` (Fundo Canvas Ultra Profundo / Noir)
- `--color-navy-900`: `#0D0A22` (Superfície Primária de Seções)
- `--color-navy-850`: `#120F2E` (Superfície Intermediária)
- `--color-navy-800`: `#19153D` (Cards e Módulos Elevados)
- `--color-navy-750`: `#221D52` (Cards Hover)

#### Papéis Semânticos de Superfície e Vidro (Glassmorphism)

```css
:root {
  /* Brand & Actions */
  --color-brand-primary:         var(--color-orange-500);
  --color-brand-primary-hover:   var(--color-orange-700);
  --color-brand-primary-active:  var(--color-orange-800);
  --color-brand-primary-subtle:  rgba(253, 86, 42, 0.12);
  --color-brand-primary-border:  rgba(253, 86, 42, 0.35);

  /* Text Roles */
  --color-text-primary:          #FFFFFF;
  --color-text-secondary:        #D1CFE2;
  --color-text-muted:            #9B97B8;
  --color-text-subtle:           #6F6B8A;
  --color-text-on-dark:          #FFFFFF;

  /* Surfaces & Glass */
  --surface-glass-dark:          rgba(13, 10, 34, 0.85);
  --surface-glass-card:          rgba(255, 255, 255, 0.04);
  --surface-glass-card-hover:    rgba(255, 255, 255, 0.08);
  --surface-glass-border:        rgba(255, 255, 255, 0.10);
  --surface-glass-border-glow:   rgba(253, 86, 42, 0.45);
  --surface-glass-blur:          blur(16px);

  /* Signature Gradients */
  --grad-brand:            linear-gradient(135deg, #FD562A 0%, #FFA086 100%);
  --grad-brand-glow:       linear-gradient(90deg, #FD562A 0%, #FF7552 50%, #FFA086 100%);
  --grad-dark-pill:        linear-gradient(270deg, rgba(6, 4, 18, 0.95) 0%, rgba(22, 19, 65, 0.92) 100%);
  --grad-dark-card:        linear-gradient(90deg, rgba(8, 6, 22, 0.98) 0%, rgba(25, 21, 61, 0.95) 100%);
  --grad-impact-panel:     linear-gradient(1.86deg, rgba(6, 4, 18, 0.98) 15%, rgba(34, 29, 82, 0.90) 100%);
  --grad-process-card:     linear-gradient(180deg, rgba(16, 12, 42, 0.95) 0%, rgba(8, 6, 24, 0.98) 100%);

  /* Status & Social */
  --color-status-success:        #198754;
  --color-status-error:          #DC3545;
  --color-status-warning:        #F59E0B;
  --color-social-whatsapp:       #25D366;
  --color-social-whatsapp-dark:  #1EBE5D;
}
```

---

### 2.2. Tipografia (Typography System)

#### Famílias Oficiais
- **Display, Títulos, Subtítulos, CTAs e Badges:** `"Poppins", sans-serif`
  - Pesos Autorizados: `300` (Light para contraste elegante), `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Corpo de Texto, Descrições, Listas e Formulários:** `"Open Sans", sans-serif`
  - Pesos Autorizados: `400` (Regular), `600` (SemiBold).
- **Métricas, Código e Valores de Tokens:** `"JetBrains Mono", monospace`
  - Pesos Autorizados: `500` (Medium), `700` (Bold).

#### Escala Tipográfica Fluida

| Token | Tamanho Calculado | Line Height | Peso | Uso Obrigatório |
| :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(2.5rem, 5vw + 1rem, 4.25rem)` *(40px a 68px)* | `1.12` | `700/800` | Headline Principal do Hero |
| `--text-h1` | `clamp(2.0rem, 3.5vw + 0.5rem, 3.125rem)` *(32px a 50px)* | `1.15` | `700` | Títulos Principais de Seção |
| `--text-h2` | `clamp(1.5rem, 2.5vw + 0.5rem, 2.375rem)` *(24px a 38px)* | `1.28` | `700` | Títulos Secundários e Dores |
| `--text-h3` | `clamp(1.25rem, 1.5vw + 0.5rem, 1.625rem)` *(20px a 26px)* | `1.30` | `600/700` | Títulos de Cards de Serviço e Formatos |
| `--text-lead` | `1.25rem` *(20px)* | `1.60` | `300/400` | Parágrafos de Abertura / Lead Bio |
| `--text-body` | `1.125rem` *(18px)* | `1.60` | `400` | Texto Corrido Principal |
| `--text-body-sm`| `1.0rem` *(16px)* | `1.50` | `400` | Descrições de Cards e Formulários |
| `--text-caption`| `0.875rem` *(14px)* | `1.40` | `500` | Legendas, Microcópia de Botão |
| `--text-eyebrow`| `0.8125rem` *(13px)* | `1.20` | `700` | Overlines de Seção em Uppercase |

---

### 2.3. Espaçamento, Raios de Borda e Sombras

```css
:root {
  /* Espaçamento Modular (Grade 4px / 8px) */
  --space-1:  0.25rem;  /*  4px */
  --space-2:  0.5rem;   /*  8px */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1.0rem;   /* 16px */
  --space-5:  1.25rem;  /* 20px */
  --space-6:  1.5rem;   /* 24px */
  --space-8:  2.0rem;   /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3.0rem;   /* 48px */
  --space-16: 4.0rem;   /* 64px */
  --space-20: 5.0rem;   /* 80px */
  --space-24: 6.0rem;   /* 96px */

  /* Raios de Borda */
  --radius-xs:   4px;
  --radius-sm:   6px;
  --radius-md:   8px;    /* Inputs & Botões */
  --radius-lg:   14px;   /* Cards de Serviço & Processo */
  --radius-xl:   20px;   /* Modais & Glass Cards */
  --radius-2xl:  32px;   /* Painéis Destacados */
  --radius-pill: 9999px; /* Nav Flutuante, Pílulas & Botões */
  --radius-sculpted-top: clamp(3rem, 7vw, 6.5rem) clamp(3rem, 7vw, 6.5rem) 0 0; /* Painel de Impacto */

  /* Elevação e Glows */
  --shadow-sm:      0 2px 6px rgba(0, 0, 0, 0.35);
  --shadow-md:      0 8px 24px -4px rgba(0, 0, 0, 0.45);
  --shadow-lg:      0 16px 36px -6px rgba(0, 0, 0, 0.60);
  --shadow-xl:      0 24px 56px -8px rgba(0, 0, 0, 0.75);
  --shadow-glow:    0 0 35px rgba(253, 86, 42, 0.45);
  --shadow-glow-sm: 0 0 16px rgba(253, 86, 42, 0.30);
  --shadow-glow-gold: 0 0 24px rgba(255, 210, 133, 0.35);
  --border-focus-ring: 0 0 0 3px rgba(253, 86, 42, 0.40);

  /* Motion Tokens */
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   500ms;
  --ease-standard:   cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-out:        cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 3. Catálogo de Componentes de Assinatura

### 3.1. Floating Pill Navigation (`.ds-nav-pill` / `.vf-pill-nav`)
- **Inspiração:** O icônico header em pílula translúcida do Conquer In Company (`.JShPa`).
- **Anatomia:**
  - Container fixo no topo (`top: 1rem; left: 50%; transform: translateX(-50%)`), largura máxima 1220px (92% de tela).
  - Fundo em vidro com gradiente 270° (`--grad-dark-pill`), `backdrop-filter: blur(14px)`, borda fina translúcida e raio `--radius-pill`.
  - Links em pílula com microindicador e transição suave para `--color-orange-300`.
  - Botão hambúrguer acessível (`.vf-burger`) cujas 3 barras animam e rotacionam ±45° transformando-se dinamicamente em um "X" no clique.

### 3.2. Stack de Processo Comercial (Cards Sobrepostos / `.vf-process-stack`)
- **Inspiração:** A clássica seção de processo do Conquer In Company (`.bEDgpd`), adaptada para os 6 passos da metodologia Vitor Ferreira:
  1. **01 · Conversamos:** Entendimento do momento, equipe e desafios reais.
  2. **02 · Diagnosticamos:** Mapeamento comportamental, atitudes e pontos prioritários.
  3. **03 · Desenhamos:** Arquitetura do formato, conteúdo e dinâmicas sob medida.
  4. **04 · Desenvolvemos:** Execução com alta energia e imersão participativa.
  5. **05 · Aplicamos:** Prática em campo com scripts, ferramentas e simulações reais.
  6. **06 · Evoluímos:** Acompanhamento de métricas e continuidade sustentável.
- **Mecânica Interativa:**
  - Em telas largas, os 6 cards ficam em linha com margem negativa (`margin-left: -70px`) e `z-index` decrescente (6 a 1).
  - O card ativo (`.active` ou `:hover`) **expande sua largura de 12.5rem para 17rem**, eleva seu `z-index` para 10, ilumina sua borda com halo dourado-laranja, acende o número da etapa em laranja forte e revela a descrição e a badge da etapa.
  - Em mobile/tablet, degrada graciosamente para pilha vertical focada.

### 3.3. Painel Esculpido de Impacto & Autoridade (`.vf-impact-panel`)
- **Inspiração:** O bloco curvado de impacto do Conquer In Company (`.eAjFkZ`).
- **Anatomia:**
  - Painel com raio superior escultural (`border-radius: clamp(3rem, 7vw, 6.5rem) clamp(3rem, 7vw, 6.5rem) 0 0`).
  - Fundo com gradiente nobre de 1.86° (`--grad-impact-panel`).
  - **4 Pilares de Impacto e Autoridade (Regra Anti-Claim do copy.md):**
    - `+30 ANOS` (Vivência prática em vendas e desenvolvimento de pessoas)
    - `100% PRÁTICO` (Exercícios e ferramentas aplicáveis na semana seguinte)
    - `SOB MEDIDA` (Diagnóstico real da empresa, sem treinamento de prateleira)
    - `4 PILARES` (Direção, Conhecimento, Prática e Evolução Contínua)
  - **Grid de 3 Selos de Autoridade:** Cards com ícone circular em destaque, validando "Palestrante Homologado", "Metodologia Validada" e "Formato Sob Medida".

### 3.4. Logo Marquee Contínuo (`.vf-marquee`)
- **Inspiração:** A faixa de logos fluida do Conquer In Company (`.epSyjt` / `.lfBAhO`).
- **Mecânica:**
  - Loop contínuo infinito com `@keyframes vfMarqueeScroll 40s linear infinite`.
  - Pistas duplicadas sem emenda visual.
  - Logos em escala de cinza e opacidade reduzida por padrão (`filter: grayscale(1) opacity(0.65)`).
  - Ao passar o mouse, o logo individual ascende a 100% de cor e ganha escala 1.05x.
  - Suporte a pausa interativa ao passar o mouse ou via botão de controle.

### 3.5. Card de Formato Personalizado (`.vf-format-card`)
- **Inspiração:** Cartão de destaque de formato do Conquer In Company (`.eMlFsy`).
- **Anatomia:**
  - Fundo em gradiente escuro de 180° com borda de ouro/laranja suave (`rgba(255, 226, 179, 0.25)`).
  - Badge superior de solução em Poppins Bold.
  - Lista de benefícios com ícones SVG de checkmark em laranja elétrico (`#FD562A`).
  - Botão CTA full-width em pílula integrado à base do cartão.

### 3.6. Formulário Qualificador WhatsApp em Vidro (`.vf-glass-card`)
- **Inspiração:** O formulário de vidro fosco do Conquer In Company (`.TYfxn`), adaptado para conversão instantânea em WhatsApp.
- **Anatomia:**
  - Cartão em vidro escuro fosco com `backdrop-filter: blur(28px)` e borda suave em laranja translúcido (`rgba(253, 86, 42, 0.35)`).
  - Seletor de público em chips (`Para Minha Empresa` vs. `Para Mim / Mentoria`).
  - Inputs para Nome, Empresa e Select dinâmico de Desafio/Tema.
  - **Integração WhatsApp:** Ao clicar no CTA, valida os dados e gera a mensagem formatada para a API do WhatsApp (`wa.me`), garantindo atendimento qualificado imediato sem necessidade de backend.
  - **Card de Dúvida Rápida:** Bloco adjacente para dúvidas pontuais com link direto de suporte.

### 3.7. Accordion FAQ com Dimming de Foco (`.vf-accordion-group`)
- **Inspiração:** O comportamento refinado do Conquer In Company (`.itYuIB`).
- **Comportamento Cognitivo:**
  - Quando um item é aberto ou o usuário interage com o grupo, **os itens fechados diminuem a opacidade para 0.45**, garantindo foco visual total na pergunta/resposta ativa.
  - Seta em chevron rotaciona 180° com física de mola suave (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
  - Transição de altura fluida e padding calculado.

### 3.8. Botões Pílula e Matriz de Estados Forçados
- **Anatomia:** Formato pílula (`border-radius: 9999px`), Poppins 600/700 em uppercase com tracking alargado.
- **Variantes:**
  - `btn--primary`: Fundo Laranja Brand (`#FD562A`), texto branco. No hover, torna-se transparente mantendo borda branca luminosa e sombra projetada (estilo assinatura Conquer).
  - `btn--secondary`: Fundo Navy Escuro (`#060412`), borda cinza. No hover, ganha fundo laranja brand.
  - `btn--outline`: Borda branca translúcida. No hover, preenche com branco puro e texto escuro.
  - `btn--whatsapp`: Fundo Verde Oficial WhatsApp (`#25D366`), sombra de 16px verde, elevando 2px no hover.
- **Estados Documentados:** `Default`, `Hover Forçado` (`.is-hover`), `Focus Visible` (`.is-focus`), `Active Forçado` (`.is-active`), `Disabled` e `Loading`.

### 3.9. Lightbox Modal de Vídeo & Botão Play com Halo
- Thumbnails com proporção 16:9 e overlay gradiente escuro.
- Botão centralizado de Play (círculo 64px com sombra de 25px laranja). No hover: escala 1.15x e halo expansivo de 45px.
- Lightbox modal com `role="dialog"`, captura de tecla Escape, backdrop em desfoque de 16px e embed responsivo do YouTube.

### 3.10. Widget Flutuante de WhatsApp Canônico
- Pílula verde no canto inferior direito com pulso de atenção sutil (`bottom: 24px; right: 24px`).
- Balão retrátil com foto oficial do Vitor (`IMG7.png`), indicador de status online em verde e link direto para conversa pré-formatada.

---

## 4. Matriz de Movimento e Microinterações (Motion Tokens)

| Efeito | Duração | Curva de Aceleração | Onde Aplicar |
| :--- | :--- | :--- | :--- |
| **Micro-hover** | `150ms` | `var(--ease-out)` | Links do menu, chips, ícones de redes sociais |
| **Transição de Botão** | `300ms` | `var(--ease-out)` | Preenchimento/borda de botões, elevação de sombra |
| **Expansão de Processo** | `300ms` | `var(--ease-out)` | Largura do card (12.5rem → 17rem), revelação de texto |
| **Giro de Hambúrguer** | `300ms` | `var(--ease-bounce)` | Barras que morpham para "X" no clique |
| **Giro de Chevron** | `300ms` | `var(--ease-bounce)` | Rotação de 180° em dropdowns e acordions |
| **Abertura de Accordion** | `300ms` | `var(--ease-out)` | `max-height` e padding da resposta do FAQ |
| **Loop do Marquee** | `40s` | `linear infinite` | Faixa contínua de marcas parceiras |
| **Modal Entrada** | `300ms` | `var(--ease-bounce)` | Escala 0.95 → 1.0 com fade-in |
| **Toast Notification** | `300ms` | `var(--ease-bounce)` | Entrada a partir do rodapé com auto-dismiss 2.6s |

---

## 5. Anti-Padrões e Regras de Higiene Visual

1. ❌ **Nunca utilizar `#ff6600` ou laranjas arbitrários:** Toda referência laranja deve apontar para `--color-brand-primary` (`#FD562A`) ou seus primitivos oficiais.
2. ❌ **Nunca utilizar cartões chapados sem profundidade:** Sempre combinar borda translúcida sutil (`rgba(255,255,255,0.08)`), textura de gradiente suave e, quando aplicável, `backdrop-filter`.
3. ❌ **Nunca omitir feedback de foco em elementos clicáveis:** Todo botão, link ou input deve conter anel de foco visível (`:focus-visible`).
4. ❌ **Nunca forçar animações em usuários com `prefers-reduced-motion`:** Respeitar rigorosamente a media query desativando loops e transições longas.
5. ❌ **Nunca utilizar fontes não autorizadas:** Apenas *Poppins*, *Open Sans* e *JetBrains Mono* fazem parte do ecossistema oficial.

---

## 6. Checklist de Qualidade do Design System (Definition of Done)

- [x] Estudo comparativo e absorção dos pontos fortes do benchmark Conquer In Company.
- [x] Criação do componente de **Stack de Processo Sobreposto** com expansão viva.
- [x] Criação do **Painel Esculpido de Impacto & Autoridade** com métricas e selos corporativos.
- [x] Criação da **Faixa Contínua de Logos (Marquee Infinito)** com grayscale-to-color hover.
- [x] Criação do **Header Flutuante em Pílula** com hambúrguer animado que vira 'X'.
- [x] Criação do **Formulário em Vidro Fosco** com validação visual instantânea em campo.
- [x] Implementação do **Accordion com Dimming de Foco** nos itens não selecionados.
- [x] Matriz de estados forçados (Default, Hover, Focus, Active, Disabled) lado a lado.
- [x] Playground interativo **Motion Sandbox** com disparos de teste em tempo real.
- [x] Tokens semânticos e medição tipográfica calculada pelo navegador em tempo real.
- [x] Sincronização e atualização completa de `DESIGN.md` para a versão 3.0.0.
