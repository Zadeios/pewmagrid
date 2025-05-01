document.addEventListener("DOMContentLoaded", async function() {
  try {
    const response = await fetch('data/propiedades.json');
    const propiedades = await response.json();
    const row = document.querySelector('#propiedades .row');
    propiedades.forEach(prop => {
      const col = document.createElement('div');
      col.className = 'col';
      const card = document.createElement('div');
      card.className = 'card h-100';
      
      const img = document.createElement('img');
      img.src = prop.imagen;
      img.className = 'card-img-top';
      img.alt = prop.titulo;
      img.onerror = function() { this.onerror = null; this.src = 'img/no-image.png'; };
      card.appendChild(img);
      
      const body = document.createElement('div');
      body.className = 'card-body';
      const title = document.createElement('h5');
      title.className = 'card-title';
      title.textContent = prop.titulo;
      const text = document.createElement('p');
      text.className = 'card-text';
      text.textContent = prop.descripcion;
      body.append(title, text);
      card.appendChild(body);
      
      const footer = document.createElement('div');
      footer.className = 'card-footer text-muted';
      footer.textContent = prop.precio;
      card.appendChild(footer);
      
      col.appendChild(card);
      row.appendChild(col);
    });
  } catch (err) {
    console.error(err);
  }
});