/* Vitor Ferreira Vendas — comportamento da página (JS puro, sem dependências) */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- Preloader */
  function hidePreloader() {
    var p = $('#preloader');
    if (p) p.classList.add('is-done');
  }
  if (document.readyState === 'complete') hidePreloader();
  else window.addEventListener('load', hidePreloader);
  setTimeout(hidePreloader, 4000);

  /* ------------------------------------------------- Header fixo + voltar ao topo */
  var header = $('#header');
  var headerMobile = $('#header-mobile');
  var goTop = $('.go-top');
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-sticky', y > 79);
    if (headerMobile) headerMobile.classList.toggle('is-sticky', y > 0);
    if (goTop) goTop.classList.toggle('show', y > 300);
    spy(y);
  }

  /* --------------------------------------------------------------- Scrollspy */
  var spyIds = ['about-us', 'service', 'beneficios', 'testimonials', 'contact'];
  var spyLinks = $$('[data-spy]');
  var currentSpy = null;
  function spy(y) {
    var active = null;
    spyIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top + y <= y + 80) active = id;
    });
    if (active === currentSpy) return;
    currentSpy = active;
    spyLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-spy') === active); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ------------------------------------------------------------- Menu mobile */
  var canvas = $('.canvas-nav-wrap');
  var burger = $('.btn-menu');
  function toggleMenu(open) {
    if (!canvas) return;
    canvas.classList.toggle('active', open);
    if (burger) burger.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () { toggleMenu(true); });
  if (canvas) {
    $('.overlay-canvas-nav', canvas).addEventListener('click', function () { toggleMenu(false); });
    $('.canvas-menu-close', canvas).addEventListener('click', function () { toggleMenu(false); });
    $$('#mainnav_canvas a').forEach(function (a) { a.addEventListener('click', function () { toggleMenu(false); }); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { toggleMenu(false); closeLightbox(); }
  });

  /* ------------------------------------------------------------ Slider do hero */
  (function heroSlider() {
    var rs = $('#hero-slider');
    if (!rs) return;
    var slides = $$('.rs-slide', rs);
    var bulletsWrap = $('.rs-bullets', rs);
    var idx = 0, timer = null, DELAY = 9000;

    // níveis responsivos do slider original: grade 1240 / 1024 / 778 / 480
    function layout() {
      var W = window.innerWidth;
      var level = W > 1024 ? 1 : W > 778 ? 2 : W > 480 ? 3 : 4;
      var gw = [1240, 1024, 778, 480][level - 1];
      var gh = [500, 768, 768, 800][level - 1];
      var s = Math.min(1, W / gw);
      rs.setAttribute('data-level', level);
      rs.style.setProperty('--gw', gw + 'px');
      rs.style.setProperty('--gh', gh + 'px');
      rs.style.setProperty('--s', s);
      rs.style.setProperty('--rs-h', (gh * s) + 'px');
    }
    layout();
    window.addEventListener('resize', layout);

    var bullets = slides.map(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'rs-bullet' + (i === 0 ? ' is-active' : '');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      b.addEventListener('click', function () { go(i, true); });
      bulletsWrap.appendChild(b);
      return b;
    });

    function go(n, user) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
      bullets.forEach(function (b, i) { b.classList.toggle('is-active', i === idx); });
      if (user) restart();
    }
    function restart() {
      clearInterval(timer);
      if (reduceMotion) return;
      timer = setInterval(function () { go(idx + 1); }, DELAY);
    }
    $('.rs-prev', rs).addEventListener('click', function () { go(idx - 1, true); });
    $('.rs-next', rs).addEventListener('click', function () { go(idx + 1, true); });
    restart();
  })();

  /* --------------------------------------------- Animações de entrada (AOS) */
  (function aos() {
    var els = $$('[data-aos]');
    els.forEach(function (el) {
      el.style.transitionDuration = (el.getAttribute('data-aos-duration') || 400) + 'ms';
      el.style.transitionDelay = (el.getAttribute('data-aos-delay') || 0) + 'ms';
    });
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('aos-animate'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('aos-animate'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -120px 0px', threshold: 0 });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* ---------------------------------------------- Imagem que entra pela esquerda */
  $$('[data-reveal="left"]').forEach(function (el) {
    el.style.opacity = '0';
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        el.style.opacity = '';
        el.animate(
          [{ opacity: 0, transform: 'translate3d(-100%,0,0)' }, { opacity: 1, transform: 'none' }],
          { duration: 1250, easing: 'ease', fill: 'both' }
        );
        io.unobserve(el);
      });
    }, { threshold: 0.1 });
    io.observe(el);
  });

  /* ----------------------------------------------------------- Contador */
  $$('.counter .num').forEach(function (el) {
    var to = parseInt(el.getAttribute('data-to'), 10) || 0;
    var dur = parseInt(el.getAttribute('data-duration'), 10) || 2000;
    var fmt = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
    var started = false;
    function run() {
      if (started) return;
      started = true;
      if (reduceMotion) { el.textContent = fmt(to); return; }
      var t0 = null;
      (function step(t) {
        if (t0 === null) t0 = t;
        var p = Math.min(1, (t - t0) / dur);
        el.textContent = fmt(Math.round(to * p));
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(el);
  });

  /* ---------------------------------------------- Efeito tilt (mouse) */
  (function tilt() {
    if (reduceMotion || !window.matchMedia('(hover:hover)').matches) return;
    $$('[data-tilt]').forEach(function (el) {
      var max = parseFloat(el.getAttribute('data-tilt')) || 15;
      function move(e) {
        var r = el.getBoundingClientRect();
        var x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        var y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
        var tx = (max / 2 - x * max).toFixed(2);
        var ty = (y * max - max / 2).toFixed(2);
        el.style.transition = 'transform 100ms cubic-bezier(.03,.98,.52,.99)';
        el.style.transform = 'perspective(1000px) rotateX(' + (-ty) + 'deg) rotateY(' + (-tx) + 'deg) scale3d(1,1,1)';
      }
      el.addEventListener('mouseenter', function () { el.style.willChange = 'transform'; });
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', function () {
        el.style.transition = 'transform 300ms cubic-bezier(.03,.98,.52,.99)';
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      });
    });
  })();

  /* ---------------------------------------------------- Carrossel de vídeos */
  (function carousel() {
    var root = $('.carousel');
    if (!root) return;
    var viewport = $('.viewport', root);
    var track = $('.track', root);
    var dotsWrap = $('.carousel-dots', root);
    var originals = $$('.slide', track).map(function (s) { return s.cloneNode(true); });
    var n = originals.length;
    var GAP = 10, AUTOPLAY = parseInt(root.getAttribute('data-autoplay'), 10) || 5000;
    var SPEED = parseInt(root.getAttribute('data-speed'), 10) || 500;
    var spv = 1, pos = 0, step = 0, timer = null, stopped = false, hover = false, busy = false;

    function perView() { var w = window.innerWidth; return w >= 1024 ? 3 : w >= 767 ? 2 : 1; }

    function build() {
      spv = Math.min(perView(), n);
      var w = viewport.clientWidth;
      var sw = (w - GAP * (spv - 1)) / spv;
      step = sw + GAP;
      track.innerHTML = '';
      var list = originals.slice(-spv).concat(originals, originals.slice(0, spv));
      list.forEach(function (s) {
        var c = s.cloneNode(true);
        c.style.width = sw + 'px';
        c.style.marginRight = GAP + 'px';
        track.appendChild(c);
      });
      place(false);
    }
    function place(animate) {
      track.style.transition = animate ? 'transform ' + SPEED + 'ms ease' : 'none';
      track.style.transform = 'translate3d(' + (-(pos + spv) * step) + 'px,0,0)';
      var cur = ((pos % n) + n) % n;
      $$('button', dotsWrap).forEach(function (b, i) { b.classList.toggle('is-active', i === cur); });
    }
    function move(d, user) {
      if (busy) return;
      busy = true;
      if (user) stopped = true;
      pos += d;
      place(true);
      setTimeout(function () {
        if (pos >= n) pos = 0;
        if (pos < 0) pos = n - 1;
        place(false);
        busy = false;
      }, SPEED + 20);
    }
    function goTo(i) {
      if (busy) return;
      stopped = true;
      pos = i;
      place(true);
    }
    for (var i = 0; i < n; i++) {
      (function (i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Ir para o slide ' + (i + 1));
        b.addEventListener('click', function () { goTo(i); });
        dotsWrap.appendChild(b);
      })(i);
    }
    $('.carousel-prev', root).addEventListener('click', function () { move(-1, true); });
    $('.carousel-next', root).addEventListener('click', function () { move(1, true); });
    root.addEventListener('mouseenter', function () { hover = true; });
    root.addEventListener('mouseleave', function () { hover = false; });

    build();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(build, 120); });
    if (!reduceMotion) {
      timer = setInterval(function () { if (!stopped && !hover && !document.hidden) move(1); }, AUTOPLAY);
    }

    // abre o vídeo no lightbox
    track.addEventListener('click', function (e) {
      var a = e.target.closest('a[data-video]');
      if (!a) return;
      e.preventDefault();
      stopped = true;
      openLightbox(a.getAttribute('data-video'));
    });
  })();

  /* ---------------------------------------------------------------- Lightbox */
  var lb = $('#lightbox');
  var lbFrame = lb && $('.lightbox-frame', lb);
  function openLightbox(id) {
    if (!lb) return;
    lbFrame.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id +
      '?feature=oembed&autoplay=1&rel=0&controls=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="Depoimento"></iframe>';
    lb.classList.add('open');
  }
  function closeLightbox() {
    if (!lb || !lb.classList.contains('open')) return;
    lb.classList.remove('open');
    lbFrame.innerHTML = '';
  }
  if (lb) {
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
    $('.lightbox-close', lb).addEventListener('click', closeLightbox);
  }

  /* ---------------------------------------------------------------- Formulário */
  (function form() {
    var f = $('#contact-form');
    if (!f) return;
    var status = $('.form-status', f);
    var TO = 'contato@vitorferreiraoficial.com';
    // Para enviar de verdade, aponte ENDPOINT para um serviço de formulários
    // (Formspree, Web3Forms, etc.) ou para um script PHP/API própria.
    var ENDPOINT = '';
    function say(msg, err) {
      status.textContent = msg;
      status.classList.toggle('err', !!err);
      status.classList.add('show');
    }
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = { nome: f.nome.value.trim(), email: f.email.value.trim(), mensagem: f.mensagem.value.trim() };
      if (!d.nome || !/^\S+@\S+\.\S+$/.test(d.email)) {
        say('Preencha seu nome e um e-mail válido.', true);
        (d.nome ? f.email : f.nome).focus();
        return;
      }
      if (ENDPOINT) {
        fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
          .then(function (r) { if (!r.ok) throw new Error(r.status); say('Mensagem enviada com sucesso. Obrigado!'); f.reset(); })
          .catch(function () { say('Não foi possível enviar agora. Tente novamente em instantes.', true); });
        return;
      }
      var body = 'Nome: ' + d.nome + '\nEmail: ' + d.email + '\n\n' + d.mensagem;
      window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent('Contato pelo site – ' + d.nome) + '&body=' + encodeURIComponent(body);
      say('Abrindo seu aplicativo de e-mail para enviar a mensagem…');
    });
  })();

  /* ------------------------------------------------------- WhatsApp flutuante */
  (function whatsapp() {
    var w = $('#wptwa');
    if (!w) return;
    var toggle = $('.wptwa-toggle', w);
    function set(v) { w.classList.toggle('wptwa-show', v); }
    toggle.addEventListener('click', function () { set(!w.classList.contains('wptwa-show')); });
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(!w.classList.contains('wptwa-show')); }
    });
    $('.wptwa-close', w).addEventListener('click', function () { set(false); });
    setTimeout(function () { set(true); }, 2000);
  })();

  onScroll();
})();
