let listaAlumnos = ['Pedro','Ana', 'Luis', 'Carlos', 'Marta', 'Sofía'];
 
let alumnos = document.getElementById('alumnos');
let listaHTML = '<p>Lista de Alumnos destacados:</p>';
listaAlumnos.forEach(alumno => {
    listaHTML += `<li>${alumno}</li>`;
});
alumnos.innerHTML = listaHTML;