/* ============================================================
   hub.js — merender grid kartu pertemuan di index.html.
   Bergantung pada MEETINGS (lihat meetings.js).
   ============================================================ */
(function(){
  const grid = document.getElementById('grid');
  if(!grid || typeof MEETINGS === 'undefined') return;

  MEETINGS.forEach(m => {
    const ready = m.ready;
    const el = document.createElement(ready ? 'a' : 'div');
    el.className = 'meet ' + (ready ? 'ready' : 'soon');
    if(ready){
      el.href = 'materi/pertemuan-' + m.n + '.html';
    }
    el.innerHTML =
      '<div class="pn">Pertemuan ' + m.n + '</div>' +
      '<h3>' + m.title + '</h3>' +
      '<p>' + m.blurb + '</p>' +
      '<span class="status">' + (ready ? 'Buka materi' : 'Segera hadir') + '</span>';
    grid.appendChild(el);
  });
})();
