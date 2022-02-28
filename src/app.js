
const form = document.getElementById('form');
form.addEventListener('submit', obtener);

function obtener(e) {
    e.preventDefault();
    
    const d1 =document.getElementById("d1").value;
    const d2 =document.getElementById("d2").value;
    const d3 =document.getElementById("d3").value;
    const d4 =document.getElementById("d4").value;
    const d5 =document.getElementById("d5").value;
    const d6 =document.getElementById("d6").value;
    const d7 =document.getElementById("d7").value;
    const d8 =document.getElementById("d8").value;
    const d9 =document.getElementById("d9").value;
    const d10 =document.getElementById("d10").value;
    const sumaTotal= parseInt(d1)+ parseInt(d2)+ parseInt(d3)+ parseInt(d4)+parseInt(d5)
    + parseInt(d6)+ parseInt(d7)+ parseInt(d8)+ parseInt(d9)+ parseInt(d10);
    const promedio = parseFloat(sumaTotal/10);
    let horas= parseFloat(promedio/60);
    document.getElementById('sumaTotal').innerHTML = horas;
    document.getElementById('promedio').innerHTML = promedio;
   
    
}