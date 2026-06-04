// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// FAQ Toggle
document.addEventListener('DOMContentLoaded', function () {

  const firstQuestion = document.querySelector('.faq-question');
  const firstAnswer = document.querySelector('.faq-answer');

  if (firstQuestion && firstAnswer) {
    firstQuestion.classList.add('open');
    firstAnswer.classList.add('open');
  }

});

function toggleFaq(btn) {

  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // Close all FAQs
  document.querySelectorAll('.faq-answer').forEach(item => {
    item.classList.remove('open');
  });

  document.querySelectorAll('.faq-question').forEach(item => {
    item.classList.remove('open');
  });

  // Open clicked FAQ
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }

}

// Form Submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Submitting...';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('leadForm').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
  }, 1800);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href="#lead-form"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Counter animation for metrics
function animateCounters() {
  document.querySelectorAll('.mb-val').forEach(el => {
    const text = el.textContent;
    const num = parseFloat(text);
    if (isNaN(num)) return;
    const suffix = text.replace(num.toString(), '').replace(num.toFixed(1), '');
    let start = 0;
    const duration = 1500;
    const step = num / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { start = num; clearInterval(timer); }
      el.textContent = (Number.isInteger(num) ? Math.floor(start) : start.toFixed(1)) + suffix;
    }, 16);
  });
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const metricsSection = document.querySelector('.metric-box');
if (metricsSection) counterObserver.observe(metricsSection);




    (function () {

      /* ── VIDEO MODAL ── */
      var modal = document.getElementById('videoModal');
      var video = document.getElementById('popupVideo');
      var thumb = document.getElementById('videoThumb');
      var closeBtn = document.getElementById('closeVideo');

      function openVideo() {
        modal.classList.add('open');
        video.play();
      }

      function closeVideo() {
        modal.classList.remove('open');
        video.pause();
        video.currentTime = 0;
      }

      if (thumb) thumb.addEventListener('click', openVideo);
      if (closeBtn) closeBtn.addEventListener('click', closeVideo);
      if (modal) modal.addEventListener('click', function (e) {
        if (e.target === modal) closeVideo();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeVideo();
      });


      /* ── SCROLL REVEAL ── */
      var items = document.querySelectorAll('.reveal');

      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry, i) {
            if (entry.isIntersecting) {
              setTimeout(function () {
                entry.target.classList.add('visible');
              }, i * 80);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });

        items.forEach(function (el) { observer.observe(el); });

      } else {
        items.forEach(function (el) { el.classList.add('visible'); });
      }

    })();


        /* -==LOGO== */
