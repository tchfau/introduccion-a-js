// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function tarea1() {
    function comparar(nombreUsuario) {
        const miNombre = "IGNACIO";
        const nombreAmiga = "LUCIANA";
       
        if (miNombre === nombreUsuario) {
            return `Hola, Tocayo! Yo también me llamo ${miNombre}`;
        } else if (nombreUsuario.trim().length === 0) { // trim() elimina espacios vacios a los lados de una cadena. Además, si length es 0, verifica que no se ingresó ninguna string
            return `No ingresaste ningún nombre`;
        } else if (nombreAmiga === nombreUsuario) {
            return `Hola ${nombreUsuario}, te llamás igual que mi amiga`;
        } else {
            return `Hola, ${nombreUsuario}`;
        }
    }
    
    let nombre = comparar(prompt("Ingresá tu nombre:" || "").toUpperCase());// prompt(".... "" || "") - El segundo término define valor null si usuario presiona ESC sin haber ingresado un dato
    console.log(nombre);    
}
tarea1();

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function tarea2() {
    function compararEdades(edad) {
        let miEdad = 38;
    
        if (edad > miEdad) {
            return 'Sos mayor que yo';
        } else if (edadUsuario < miEdad) {
            return 'Soy mayor que vos';
        } else {
            return 'Tenemos la misma edad';
        }
    }
    
    let edadUsuario = Number(prompt('¿Cuál es tu edad?'));
    let respuesta = console.log(compararEdades(edadUsuario));    
}
tarea2();

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function tarea3() {
    function verificarSiTieneDocumento(respuesta) {

        if (respuesta === 'no') {
            return 'No podés entrar';
        } else if (respuesta === 'si') {
            let edad = Number(prompt('¿Cuántos años tenés?'));
            if (edad >= 18) {
                return 'Bienvenido al bar';
            } else {
                return 'No se permite el ingreso a menores de 18 años';
            }
        } else {
            return 'No entendí la respuesta';
        }
    }
    
    let usuarioPuedeEntrar = verificarSiTieneDocumento(prompt('¿Tenés documento?', 'Responder "SI" o "NO"').toLowerCase());
    console.log(usuarioPuedeEntrar);    
}
tarea3();
