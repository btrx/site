/* ============================================================
   hub.js — merender tab kelas + grid kartu pertemuan di index.html.
   Bergantung pada GRADES (lihat meetings.js).
   Mengganti tab kelas hanya menukar isi grid — tanpa pindah halaman.
   ============================================================ */
(function(){
  const grid   = document.getElementById('grid');
  const tabsEl = document.getElementById('gradeTabs');
  const phaseEl = document.getElementById('phaseTag');
  if(!grid || !tabsEl || typeof GRADES === 'undefined') return;

  function renderGrid(grade){
    // Label fase di atas grid
    if(phaseEl){
      phaseEl.textContent = grade.phaseTag
        ? (grade.label + ' · ' + grade.phase + ' — ' + grade.phaseTag)
        : (grade.label + ' · ' + grade.phase);
    }

    grid.innerHTML = '';

    if(!grade.meetings.length){
      grid.innerHTML =
        '<div class="empty-state">' +
          '<div class="es-ico">&#9203;</div>' +
          '<h3>Materi ' + grade.label + ' segera hadir</h3>' +
          '<p>Rangkaian pertemuan untuk ' + grade.label + ' (' + grade.phase +
          ') sedang disiapkan dan akan tampil di sini.</p>' +
        '</div>';
      return;
    }

    grade.meetings.forEach(m => {
      const ready = m.ready;
      const el = document.createElement(ready ? 'a' : 'div');
      el.className = 'meet ' + (ready ? 'ready' : 'soon');
      if(ready){
        el.href = 'materi/' + (m.file || ('pertemuan-' + m.n + '.html'));
      }
      el.innerHTML =
        '<div class="pn">Pertemuan ' + m.n + '</div>' +
        '<h3>' + m.title + '</h3>' +
        '<p>' + m.blurb + '</p>' +
        '<span class="status">' + (ready ? 'Buka materi' : 'Segera hadir') + '</span>';
      grid.appendChild(el);
    });
  }

  function selectGrade(grade, tab){
    tabsEl.querySelectorAll('.grade-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // retrigger fade animasi grid
    grid.classList.remove('swap');
    void grid.offsetWidth;
    grid.classList.add('swap');
    renderGrid(grade);
  }

  GRADES.forEach((grade, i) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'grade-tab' + (i === 0 ? ' active' : '');
    tab.setAttribute('aria-label', grade.label + ' — ' + grade.phase);
    tab.innerHTML =
      '<span class="gt-main">' + grade.label + '</span>' +
      '<span class="gt-sub">' + grade.phase + '</span>';
    tab.addEventListener('click', () => selectGrade(grade, tab));
    tabsEl.appendChild(tab);
  });

  renderGrid(GRADES[0]);
})();
