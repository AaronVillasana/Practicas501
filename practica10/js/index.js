const personas = [
  { nombre:"King", apellido:"Von",  edad:26, profesion:"Rapper", direccion:{ ciudad:"Chicago", estado:"Illinois" },      hobbies:["Music","Cars","Writing"] },
  { nombre:"Lil",  apellido:"Durk", edad:31, profesion:"Rapper", direccion:{ ciudad:"Chicago", estado:"Illinois" },      hobbies:["Music","Basketball","Fashion"] },
  { nombre:"NBA",  apellido:"YoungBoy", edad:25, profesion:"Rapper", direccion:{ ciudad:"Baton Rouge", estado:"Louisiana" }, hobbies:["Music","Basketball","Fashion"] },
  { nombre:"Juice",apellido:"WRLD", edad:21, profesion:"Rapper", direccion:{ ciudad:"Chicago", estado:"Illinois" },      hobbies:["Music","Video Games","Anime"] },
  { nombre:"NLE",  apellido:"Choppa", edad:21, profesion:"Rapper", direccion:{ ciudad:"Memphis", estado:"Tennessee" },   hobbies:["Music","Fitness","Cooking"] },
  { nombre:"Lil",  apellido:"Uzi Vert", edad:30, profesion:"Rapper", direccion:{ ciudad:"Philadelphia", estado:"Pennsylvania" }, hobbies:["Music","Fashion","Anime"] }
];

function setText(id, txt) {
  const el = document.getElementById(id);
  if (el) el.innerText = txt;
}

function setHobbies(id, list) {
  const ul = document.getElementById(id);
  if (!ul) return;
  ul.innerHTML = "";
  list.forEach(h => {
    const li = document.createElement("li");
    li.innerText = h;
    ul.appendChild(li);
  });
}

personas.forEach((p, i) => {
  const s = String(i + 1);
  setText("nombre" + s, `${p.nombre} ${p.apellido}`);
  setText("edad" + s, `${p.edad} años`);
  setText("profesion" + s, p.profesion);
  setText("direccion" + s, `${p.direccion.ciudad}, ${p.direccion.estado}`);
  setHobbies("hobbies" + s, p.hobbies);
});
