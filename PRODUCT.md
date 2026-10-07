# Vitor Ferreira Vendas — site institucional

## O que é
Site institucional de uma página (one-page) para Vitor Ferreira, palestrante, treinador, consultor e mentor de vendas. Apresenta os serviços, os benefícios de investir em treinamento, depoimentos em vídeo e um formulário/CTA de contato. HTML estático, sem backend — rascunho/novo projeto, ainda não publicado no domínio em produção (vitorferreiravendas.com.br, hoje em WordPress).

## Para quem
Donos e gestores de pequenas e médias empresas que querem melhorar a performance comercial do próprio time (produtividade, motivação, engajamento) e estão decidindo se contratam uma palestra, treinamento, consultoria ou mentoria.

## O que o visitante faz aqui
Objetivo único: gerar contato. O visitante lê a proposta, entende os formatos de serviço, se convence pela autoridade e pelos depoimentos, e entra em contato via WhatsApp flutuante ou formulário na seção de contato.

## Diferencial / prova
- Vitor atua em vendas há 28+ anos, formado em Marketing, MBA em gestão empresarial.
- +3000 pessoas treinadas (contador na seção Sobre).
- Mentorado por referências do mercado; método descrito como "leve e simples".
- Depoimentos em vídeo (3 clientes, embed do YouTube).

## Serviços oferecidos
1. Palestra — tema específico, formato pontual para evento/reunião.
2. Treinamento — conteúdo mais profundo, exercícios e dinâmicas.
3. Consultoria — diagnóstico e otimização de marketing/vendas.
4. Mentoria — individual ou em grupo.
5. Workshop — imersão prática.
6. Assessoria — estruturação contínua do setor comercial.

## Conteúdo fixo (não é para reescrever sem avisar)
- Texto da seção Sobre (primeira pessoa, Vitor).
- Descrições dos 6 serviços.
- Lista de 6 benefícios de treinar o time.
- Dados de contato: telefone (21) 99058-7160, email contato@vitorferreiraoficial.com, WhatsApp 5521990587160.
- Redes sociais: Instagram, Facebook, YouTube, TikTok, Twitter, LinkedIn (links reais no footer atual).

## Marca — o que fica fixo
- Logo: `assets/images/logo1-1.png` / `logo1-2.png` (versão mobile).
- Cor primária: laranja (token real do CSS é `#FD562A`; o hero usa inconsistentemente `#ff6600` — ver `DESIGN.md`). Preto/branco como base neutra.
- Redesenho de layout, componentes e estilo visual é livre ao redor desses dois pontos fixos (logo + paleta).

## Assets disponíveis
- Fotos do Vitor: `img-vitor-1.jpg`, `img-vitor-2.jpg`, `IMG7.png` (WhatsApp widget).
- Ilustrações/elementos gráficos do slide (vetorv, circulo1, setas, IMG3–6) — podem ser substituídos ou descartados no redesign.
- Thumbnails de depoimento: `video1.jpg`, `video2.jpg`, `video3.jpg` + IDs do YouTube (VKZHtUhqjYE, lVGJk97Dmfk, pUxbovxDMVc).
- Fontes já embutidas: Poppins (400/600/700), Open Sans, Roboto/Roboto Condensed, Nunito Sans — mais ícones (Bootstrap Icons, Font Awesome, Pe-icon-7-stroke, Eicons).

## Stack
HTML + CSS + JS puros (sem framework/build). `assets/js/main.js` controla slider, menu mobile, carrossel de depoimentos, lightbox de vídeo e widget de WhatsApp.

## Modo
**Persuade** — o site inteiro existe para convencer e converter em contato; design é parte do produto.

## Fora de escopo por ora
- Blog, área de membros, pagamento online.
- Multilíngue.
- CMS/backend — permanece estático.
