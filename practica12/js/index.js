document.addEventListener('DOMContentLoaded', () => {
  const listaEmpleados = document.getElementById('listaCanciones');
  if (!listaEmpleados) {
    console.warn('Elemento #listaCanciones no encontrado en el DOM.');
    return;
  }

  // 🎵 Canciones (usa tus archivos dentro de /audio/)
  const canciones = [
    { 
      title: 'Lucid Dreams', 
      artist: 'Juice WRLD', 
      album: 'Goodbye & Good Riddance', 
      image: 'img/lucid-dreams.png', 
      spotifyUrl: 'https://open.spotify.com/track/285pBltuF7vW8TeWk8hdRR', 
      playCount: 2921471990, 
      preview: 'audio/luciddreams-30s.mp3' 
    },
    { 
      title: 'All Girls Are The Same', 
      artist: 'Juice WRLD', 
      album: 'Goodbye & Good Riddance', 
      image: 'img/allgirlsarethesame.png', 
      spotifyUrl: 'https://open.spotify.com/track/4VXIryQMWpIdGgYR4TrjT1', 
      playCount: 1975296866, 
      preview: 'audio/allgirls-30s.mp3' 
    },
    { 
      title: 'Wasted', 
      artist: 'Juice WRLD ft. Lil Uzi Vert', 
      album: 'Goodbye & Good Riddance (Deluxe)', 
      image: 'img/wasted.png', 
      spotifyUrl: 'https://open.spotify.com/track/4XJmDLMqM2QF8Jd5R2f2YJ', 
      playCount: 748352930, 
      preview: 'audio/wasted-30s.mp3' 
    },
    { 
      title: 'In My Head', 
      artist: 'Juice WRLD', 
      album: 'In My Head (Single)', 
      image: 'img/inmyhead.png', 
      spotifyUrl: 'https://open.spotify.com/track/3RiPr603aXAoi4GHyXx0uy', 
      playCount: 264000000, 
      preview: 'audio/inmyhead-30s.mp3' 
    },
    { 
      title: 'Legends', 
      artist: 'Juice WRLD', 
      album: 'Too Soon.. (EP)', 
      image: 'img/legends.png', 
      spotifyUrl: 'https://open.spotify.com/track/1bDbXMyjaUIooNwFE9wn0N', 
      playCount: 777044026, 
      preview: 'audio/legends-30s.mp3' 
    },
    { 
      title: 'face2face', 
      artist: 'Juice WRLD', 
      album: 'Single', 
      image: 'img/face2face.png', 
      spotifyUrl: 'https://open.spotify.com/track/5hY3Y0qxJxjYfJzFJ2yH0H', 
      playCount: 190000000, 
      preview: 'audio/face2face-30s.mp3' 
    },
    { 
      title: 'Righteous', 
      artist: 'Juice WRLD', 
      album: 'Legends Never Die', 
      image: 'img/righteous.png', 
      spotifyUrl: 'https://open.spotify.com/track/6LqNN22kT4Wc8m6c8xkI4e', 
      playCount: 622185149, 
      preview: 'audio/righteous-30s.mp3' 
    },
    { 
      title: 'Cigarettes', 
      artist: 'Juice WRLD', 
      album: 'Single', 
      image: 'img/cigarettes.png', 
      spotifyUrl: 'https://open.spotify.com/track/3Ih3c2N1aX4YkF4x7S3vT1', 
      playCount: 292433974, 
      preview: 'audio/cigarettes-30s.mp3' 
    }
  ];

  function showMessage(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    listaEmpleados.parentElement.insertBefore(alert, listaEmpleados);
    setTimeout(() => {
      try { bootstrap.Alert.getOrCreateInstance(alert).close(); }
      catch (e) { if (alert.parentElement) alert.parentElement.removeChild(alert); }
    }, 3000);
  }

  const formatNumber = n => (typeof n === 'number' ? n.toLocaleString('es-ES') : '0');

  // 🔊 Estado global
  let currentAudio = null;
  let currentBtn = null;

  // Temporizadores
  let countdownInterval = null; // para actualizar el número
  let stopTimeout = null;       // para cortar a los 15s
  let startedAt = 0;            // timestamp al iniciar/reanudar
  let remainingMs = 0;          // ms restantes para completar 15s

  function clearTimers() {
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    if (stopTimeout) { clearTimeout(stopTimeout); stopTimeout = null; }
  }

  // Actualiza el número centrado (si está visible)
  function updateCountdownUI() {
    if (!currentBtn) return;
    const cd = currentBtn.querySelector('.countdown');
    if (!cd) return;
    const secs = Math.max(0, Math.ceil(remainingMs / 1000));
    cd.textContent = String(secs);
  }

  // Pausar sin perder progreso
  function pausePlayback() {
    if (!currentAudio || !currentBtn) return;
    // resta el tiempo consumido desde el último start/resume
    remainingMs = Math.max(0, remainingMs - (Date.now() - startedAt));
    clearTimers();
    try { currentAudio.pause(); } catch {}
    currentBtn.classList.add('paused');          // pausa animaciones CSS
    currentBtn.querySelector('.icon')?.classList.remove('hidden');
    currentBtn.querySelector('.icon').textContent = '▶';
    // El número centrado se oculta en pausa (se puede cambiar en CSS si lo quieres visible)
    updateCountdownUI();
  }

  // Reanudar desde donde se quedó
  function resumePlayback() {
    if (!currentAudio || !currentBtn || remainingMs <= 0) return stopCurrentAudio();
    currentBtn.classList.remove('paused');
    currentBtn.querySelector('.icon')?.classList.add('hidden');
    startedAt = Date.now();
    // timers
    clearTimers();
    stopTimeout = setTimeout(() => stopCurrentAudio(), remainingMs);
    countdownInterval = setInterval(() => {
      remainingMs = Math.max(0, remainingMs - 200);
      updateCountdownUI();
      if (remainingMs <= 0) stopCurrentAudio();
    }, 200);
    // audio
    currentAudio.play().catch(() => {
      showMessage('No se pudo continuar la reproducción.', 'danger');
      pausePlayback();
    });
  }

  // Detener y limpiar todo
  function stopCurrentAudio() {
    clearTimers();
    if (currentAudio) {
      try { currentAudio.pause(); currentAudio.currentTime = 0; } catch {}
      currentAudio = null;
    }
    if (currentBtn) {
      currentBtn.style.removeProperty('--sample-duration');
      currentBtn.classList.remove('playing', 'paused');
      currentBtn.setAttribute('aria-pressed', 'false');
      const icon = currentBtn.querySelector('.icon');
      const cd = currentBtn.querySelector('.countdown');
      if (icon) { icon.textContent = '▶'; icon.classList.remove('hidden'); }
      if (cd) cd.textContent = '15';
      currentBtn = null;
    }
    remainingMs = 0;
    startedAt = 0;
  }

  // Iniciar una canción nueva
  function startNewPlayback(btn, song) {
    // corta cualquier cosa que estuviera sonando
    stopCurrentAudio();

    // crea audio
    const audio = new Audio(song.preview);
    currentAudio = audio;
    currentBtn = btn;

    // 15s totales
    remainingMs = 15000;
    startedAt = Date.now();

    // UI
    btn.style.setProperty('--sample-duration', `${Math.ceil(remainingMs/1000)}s`);
    btn.classList.add('playing');
    btn.setAttribute('aria-pressed', 'true');
    const icon = btn.querySelector('.icon');
    if (icon) icon.classList.add('hidden'); // oculto icono mientras se ve contador

    updateCountdownUI();

    // Si el audio termina antes de 15s (clip corto), limpiamos
    audio.addEventListener('ended', stopCurrentAudio, { once: true });

    // timers
    stopTimeout = setTimeout(() => stopCurrentAudio(), remainingMs);
    countdownInterval = setInterval(() => {
      remainingMs = Math.max(0, remainingMs - 200);
      updateCountdownUI();
      if (remainingMs <= 0) stopCurrentAudio();
    }, 200);

    // play
    audio.play().catch(() => {
      showMessage('Error al reproducir el sample.', 'danger');
      stopCurrentAudio();
    });
  }

  // Maneja clic/teclado en el botón
  function handlePlay(btn, song) {
    if (!song.preview) return showMessage('No hay sample para esta canción.', 'warning');

    // mismo botón que ya está en uso
    if (currentBtn === btn && btn.classList.contains('playing')) {
      // si estaba pausado -> reanudar
      if (btn.classList.contains('paused')) {
        resumePlayback();
      } else {
        // si estaba reproduciendo -> pausar
        pausePlayback();
      }
      return;
    }

    // otro botón o nada sonando -> iniciar nuevo
    startNewPlayback(btn, song);
  }

  function renderSongs(list) {
    if (!Array.isArray(list) || list.length === 0) {
      listaEmpleados.innerHTML = '<p class="text-muted">No hay canciones para mostrar.</p>';
      return;
    }

    const html = list.map((song, idx) => `
      <div class="row border py-4 align-items-center">
        <div class="col-12 col-md-2 text-center">
          <div class="cover-container">
            ${song.preview ? `
              <button
                class="play-sample-btn"
                data-index="${idx}"
                aria-label="Reproducir muestra de ${song.title}"
                aria-pressed="false"
                title="Escuchar 15s"
              >
                <span class="icon">▶</span>
                <span class="countdown">15</span>
              </button>` : ''}
            <img
              src="${song.image}"
              alt="Carátula de ${song.title}"
              class="img-fluid mb-2 perfil-img"
              onerror="this.onerror=null;this.src='https://via.placeholder.com/150'">
          </div>
        </div>

        <div class="col-12 col-md-6 song-info">
          <div class="fw-bold">${song.title}</div>
          <div class="text-muted small">${song.artist}</div>
          <div class="text-muted small">${song.album}</div>
          <div class="text-muted small">Reproducciones: ${formatNumber(song.playCount || 0)}</div>
        </div>

        <div class="col-12 col-md-4 text-md-end mt-2 mt-md-0">
          <div class="btn-group btn-group-sm ms-auto" role="group" aria-label="Acciones">
            <a href="${song.spotifyUrl}" target="_blank" rel="noopener" class="btn btn-success btn-liquid">Abrir en Spotify</a>
            <button type="button" class="btn btn-danger btn-liquid btn-delete-song" data-index="${idx}" title="Eliminar">✖</button>
          </div>
        </div>
      </div>
    `).join('');

    listaEmpleados.innerHTML = html;

    // Eliminar
    listaEmpleados.querySelectorAll('.btn-delete-song').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = Number(btn.getAttribute('data-index'));
        const song = list[index];
        const nombre = song ? song.title : 'esta canción';
        if (confirm(`¿Eliminar "${nombre}"?`)) {
          stopCurrentAudio();
          canciones.splice(index, 1);
          renderSongs(canciones);
          showMessage(`Canción "${nombre}" eliminada.`, 'success');
        }
      });
    });

    // Play / pausa / continuar
    listaEmpleados.querySelectorAll('.play-sample-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-index'));
        const song = canciones[idx];
        handlePlay(btn, song);
      });
      btn.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          const idx = Number(btn.getAttribute('data-index'));
          const song = canciones[idx];
          handlePlay(btn, song);
        }
      });
    });
  }

  renderSongs(canciones);
  console.log('🎶 Lista de canciones con pausa/continuar y contador centrado lista.');
});
