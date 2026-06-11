/* ============================================================
   deck.js — engine slide untuk halaman materi.
   Mengaktifkan: navigasi panah/spasi, tombol prev/next,
   progress bar, fullscreen (F), dan kembali ke hub (Esc).
   Halaman materi cukup menyertakan elemen .slide di dalam #deck.
   ============================================================ */
(function(){
  const deck = document.getElementById('deck');
  if(!deck) return;
  const slides = Array.from(deck.querySelectorAll('.slide'));
  const counter = document.getElementById('deckCounter');
  const prog = document.getElementById('deckProg');
  const hubUrl = deck.getAttribute('data-hub') || '../index.html';
  let idx = 0;

  function show(n){
    idx = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s,k) => s.classList.toggle('shown', k === idx));
    if(counter) counter.textContent = (idx + 1) + ' / ' + slides.length;
    if(prog) prog.style.width = ((idx + 1) / slides.length * 100) + '%';
  }
  function toHub(){
    if(document.fullscreenElement) document.exitFullscreen();
    window.location.href = hubUrl;
  }

  const next = document.getElementById('deckNext');
  const prev = document.getElementById('deckPrev');
  if(next) next.onclick = () => show(idx + 1);
  if(prev) prev.onclick = () => show(idx - 1);

  document.addEventListener('keydown', e => {
    if(e.key === 'ArrowRight' || e.key === ' '){ e.preventDefault(); show(idx + 1); }
    else if(e.key === 'ArrowLeft') show(idx - 1);
    else if(e.key === 'Escape') toHub();
    else if(e.key === 'f' || e.key === 'F'){
      if(!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  });

  show(0);
})();
