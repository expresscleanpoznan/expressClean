let currentLang = 'pl';

function t(key) {
  const dict = SITE_DATA.translations[currentLang] || SITE_DATA.translations.pl;
  return dict[key] || SITE_DATA.translations.pl[key] || key;
}

function formSubmitUrl(useAjax = false) {
  if (!SITE_DATA.formEmail) return '';
  const path = useAjax ? `ajax/${SITE_DATA.formEmail}` : SITE_DATA.formEmail;
  return `https://formsubmit.co/${path}`;
}

function setupSocialLinks() {
  const socials = SITE_DATA.socials || {};
  const socialWrap = document.querySelector('.header-socials-top');
  let visibleCount = 0;

  document.querySelectorAll('[data-social-link]').forEach((link) => {
    const key = link.getAttribute('data-social-link');
    const url = socials[key];

    if (url) {
      link.href = url;
      link.hidden = false;
      link.removeAttribute('aria-disabled');
      visibleCount += 1;
      return;
    }

    link.removeAttribute('href');
    link.hidden = true;
    link.setAttribute('aria-disabled', 'true');
  });

  if (socialWrap) socialWrap.hidden = visibleCount === 0;
}

function renderDynamicMedia() {
  const gallery = document.getElementById('gallery-grid');
  const videos = document.getElementById('video-grid');
  if (!gallery || !videos) return;

  gallery.innerHTML = '';
  SITE_DATA.media.gallery.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'media-card';

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt[currentLang] || item.alt.pl || '';

    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = item.title[currentLang] || item.title.pl || '';

    card.appendChild(img);
    card.appendChild(cap);
    gallery.appendChild(card);
  });

  videos.innerHTML = '';
  if (!SITE_DATA.media.videos.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-note';
    empty.textContent = t('video_empty');
    videos.appendChild(empty);
    return;
  }

  SITE_DATA.media.videos.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'media-card';

    const video = document.createElement('video');
    video.className = 'hero-video';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.controls = false;
    video.setAttribute('playsinline', '');
    video.preload = 'auto';

    if (item.poster) video.poster = item.poster;

    const source = document.createElement('source');
    source.src = item.src;
    source.type = 'video/mp4';
    video.appendChild(source);

    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = item.title[currentLang] || item.title.pl || '';

    card.appendChild(video);
    card.appendChild(cap);
    videos.appendChild(card);
  });
}

function setLang(lang) {
  currentLang = SITE_DATA.translations[lang] ? lang : 'pl';
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    node.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    const key = node.getAttribute('data-i18n-alt');
    node.setAttribute('alt', t(key));
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    const key = node.getAttribute('data-i18n-aria');
    const text = t(key);
    node.setAttribute('aria-label', text);
    if (node.tagName !== 'NAV') node.setAttribute('title', text);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  const options = document.querySelectorAll('select option[data-i18n]');
  options.forEach((opt) => {
    opt.textContent = t(opt.getAttribute('data-i18n'));
  });

  renderDynamicMedia();

  try {
    localStorage.setItem('expressclean_lang', currentLang);
  } catch (e) {}
}

function setupAjaxForm() {
  const form = document.querySelector('.order-form');
  if (!form) return;

  const defaultEndpoint = formSubmitUrl(false);
  const ajaxEndpoint = formSubmitUrl(true);
  if (defaultEndpoint) form.action = defaultEndpoint;

  let message = document.getElementById('form-message');
  if (!message) {
    message = document.createElement('div');
    message.id = 'form-message';
    message.style.display = 'none';
    message.style.marginTop = '16px';
    message.style.padding = '14px 16px';
    message.style.borderRadius = '14px';
    message.style.fontWeight = '700';
    message.style.textAlign = 'center';
    form.appendChild(message);
  }

  let isSending = false;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (isSending) return;

    isSending = true;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t('form_sending');
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';
    }

    message.style.display = 'none';
    message.textContent = '';

    const formData = new FormData(form);
    formData.set('_subject', 'Nowe zgłoszenie ze strony ExpressClean');
    formData.set('_captcha', 'false');

    try {
      if (!ajaxEndpoint) {
        throw new Error('Brak adresu e-mail formularza');
      }

      const response = await fetch(ajaxEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Błąd wysyłki formularza');
      }

      form.reset();

      message.textContent = currentLang === 'ua'
          ? 'Дякуємо! Ми скоро з вами зв’яжемося.'
          : currentLang === 'ru'
              ? 'Спасибо! Мы скоро с вами свяжемся.'
              : currentLang === 'en'
                  ? 'Thank you! We will contact you soon.'
                  : 'Dziękujemy! Skontaktujemy się z Tobą jak najszybciej.';

      message.style.display = 'block';
      message.style.background = '#ecfdf3';
      message.style.color = '#166534';
      message.style.border = '1px solid #bbf7d0';
    } catch (error) {
      message.textContent = currentLang === 'ua'
          ? 'Сталася помилка під час відправки. Спробуйте ще раз.'
          : currentLang === 'ru'
              ? 'Произошла ошибка при отправке. Попробуйте ещё раз.'
              : currentLang === 'en'
                  ? 'An error occurred while sending. Please try again.'
                  : 'Wystąpił błąd podczas wysyłki. Spróbuj ponownie.';

      message.style.display = 'block';
      message.style.background = '#fef2f2';
      message.style.color = '#991b1b';
      message.style.border = '1px solid #fecaca';
    } finally {
      isSending = false;

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('site-logo');
  const karcher = document.getElementById('karcher-logo');

  if (logo) logo.src = SITE_DATA.assets.logo;
  if (karcher) karcher.src = SITE_DATA.assets.karcherLogo;

  document.querySelectorAll('[data-phone-link]').forEach((link) => {
    link.href = `tel:${SITE_DATA.phone}`;
    if (link.dataset.phoneText === 'true') {
      link.textContent = SITE_DATA.displayPhone || SITE_DATA.phone;
    }
  });

  setupSocialLinks();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  let startLang = 'pl';
  try {
    const saved = localStorage.getItem('expressclean_lang');
    if (saved && SITE_DATA.translations[saved]) startLang = saved;
  } catch (e) {}

  setLang(startLang);
  setupAjaxForm();

  const backTop = document.getElementById('back-to-top');
  if (backTop) {
    const syncBackTop = () => {
      backTop.classList.toggle('back-to-top--visible', window.scrollY > 260);
    };
    window.addEventListener('scroll', syncBackTop, { passive: true });
    syncBackTop();
  }
});
