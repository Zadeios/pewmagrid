fetch('socios.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('socios');
    data.forEach(socio => {
      const card = `
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img onerror="this.onerror=null;this.src='img/no-image.png'" src="${socio.logo}" class="card-img-top" alt="${socio.nombre}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${socio.nombre}</h5>
              <p class="card-text">${socio.descripcion}</p>
              <a href="${socio.url}" class="btn btn-primary mt-auto" target="_blank" rel="noopener">Visitar sitio</a>
            </div>
          </div>
        </div>`;
      container.innerHTML += card;
    });
  });