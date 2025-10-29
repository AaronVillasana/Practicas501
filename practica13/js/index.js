const listaEmpleados = document.getElementById("listaEmpleados");

async function obtenerEmpleados() {
  try {
    const resp = await fetch('datos/empleados.json'); // o 'empleados.json'
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    mostrarEmpleados(data);
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    listaEmpleados.innerHTML = `
      <div class="col-12">
        <div class="alert alert-danger">No se pudo cargar la lista de empleados.</div>
      </div>`;
  }
}

function mostrarEmpleados(empleados) {
  listaEmpleados.innerHTML = "";

  empleados.forEach(empleado => {
    listaEmpleados.innerHTML += `
      <div class="col-12 col-md-3 py-3 text-center">
        <img src="${empleado.foto}" alt="Foto de ${empleado.nombre}"
             class="img-fluid rounded-circle shadow border border-white" style="max-height: 150px;">
      </div>
      <div class="col-12 col-md-3 py-3 d-flex align-items-center text-center">
        ${empleado.nombre}
      </div>
      <div class="col-12 col-md-3 py-3 d-flex align-items-center text-center">
        Edad: ${empleado.edad} años
      </div>
      <div class="col-12 col-md-3 py-3 d-flex align-items-center text-center">
        Sueldo: $${empleado.sueldo}
      </div>`;
  });
}

obtenerEmpleados();
