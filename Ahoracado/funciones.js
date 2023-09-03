const nombres = ["estudio estadio","ornitorinco","hannibal ","aguafiestas", "mamut", "andreu", "mas vale fuerza que maña", "pequeño pero fuerte", "el mus es un juegazo", "aguacate", "fuerte como el roble", "quien lo lea es bajito y calvo", "vaya triplazo", "lento pero seguro", " torpe pero habilidoso", "las cosas de palacio van despacio", "el agua moja", "diamante en la season 200ac", "muriendo del aburriemiento", "poltergeist"];
const fallos = [];
var hola2 = document.getElementById("palabra");

// Es para que funcionen los inputs con pulsar "Enter"

document.getElementById("letra").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        probarLetra();
    }
});
document.getElementById("palabra").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        probarPalabra();
    }
});

// Esta funcion se ejecuta al abrir la pagina y escoje una posicion al azar, la frase sera separa por cada letra y espacio, ese array de letras separado se pone su contenido en una etiqueta "p" que se van creando cada vez que entra en el bucle

function hola(){
    
const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
let text = aleatorio;
document.getElementById("a").innerHTML = aleatorio;
const myArray = text.split("");
for(let i=0;i< myArray.length; i++){
    
    const letra = document.createElement("p");
    const textoLetra = document.createTextNode(myArray[i])
    letra.appendChild(textoLetra);
    document.getElementById("resultado").appendChild(letra);

    // Esta parte es para quitar el estilo de css concretamente los bordes a los espacios
    
    if(myArray[i] == " "){
        letra.classList.add('espacio');
    }
}}

// Aqui es la funcion que se ejecuta cuando pulsemos el boton de probar letra donde comprueba que la letra oculta tenga el mismo valor que el valor del input y al encontrala le cambie el estilo css a visible

function probarLetra(){
    letrasOcultas = document.getElementsByClassName('letra-oculta');
    var letter = document.getElementById('letra').value;
    let text = document.getElementById("a").innerHTML;
    const myArray = text.split("");
    var letraEncontrada = false;
    if(letter == ''){
        alert("Introduzca texto");
        return
    }

    for(let i=0;i<= myArray.length; i++){
        if(letter === myArray[i]){
            letraEncontrada = true
            document.getElementById("resultado").children[i].classList.add("letra-encontrada");
            
        }}

    if(!letrasOcultas){
            alert("has ganado");
    }

    if(!letraEncontrada){
            
        const valor = document.getElementById("letra").value;
        var jota = document.getElementById("primeraImagen");
        var jota1 = document.getElementById("primeraImagen1");
        var jota2 = document.getElementById("primeraImagen2");
        var jota3 = document.getElementById("primeraImagen3");
        var jota4 = document.getElementById("primeraImagen4");
        var jota5 = document.getElementById("primeraImagen5");
        var jota6 = document.getElementById("primeraImagen6");
        var jota7 = document.getElementById("primeraImagen7");
        var jota8 = document.getElementById("primeraImagen8");
        var jota9 = document.getElementById("primeraImagen9");

    for( let i = 0; i < fallos.length;i++){
                if(valor == fallos[i]){
                alert("ya has dicho esta letra")
                document.getElementById("letra").value = "";
                document.getElementById("letra").focus();
                return
                }
            }

            fallos.push(valor)
            var hola1 = document.getElementById("letra")

            // Estas lineas nos muestran las imagenes del ahorcado donde la primera se muestra sola i apartir de la primera lo que se hace es ocultar la anterior i mostrar la siguiente hasta que el array fallos tenga un longitud de 10

            if(fallos.length == 1){
                
                hola1.placeholder = " 9 Oportunidades"; 
                jota.classList.remove("ocultarImagen");
            }
            if(fallos.length == 2){
                hola1.placeholder = " 8 Oportunidades"; 
                jota.classList.add("ocultarImagenOtraVez");
                jota1.classList.remove("ocultarImagen");
            }
            if(fallos.length == 3){
                hola1.placeholder = " 7 Oportunidades" 
                jota1.classList.add("ocultarImagenOtraVez");
                jota2.classList.remove("ocultarImagen");
            }
            if(fallos.length == 4){
                hola1.placeholder = " 6 Oportunidades"; 
                jota2.classList.add("ocultarImagenOtraVez");
                jota3.classList.remove("ocultarImagen");
            }if(fallos.length == 5){
                hola1.placeholder = " 5 Oportunidades"; 
                jota3.classList.add("ocultarImagenOtraVez");
                jota4.classList.remove("ocultarImagen");
            }
            if(fallos.length == 6){
                hola1.placeholder = " 4 Oportunidades"; 
                jota4.classList.add("ocultarImagenOtraVez");
                jota5.classList.remove("ocultarImagen");
            }
            if(fallos.length == 7){
                hola1.placeholder = " 3 Oportunidades"; 
                jota5.classList.add("ocultarImagenOtraVez");
                jota6.classList.remove("ocultarImagen");
            }
            if(fallos.length == 8){
                hola1.placeholder = " 2 Oportunidades"; 
                jota6.classList.add("ocultarImagenOtraVez");
                jota7.classList.remove("ocultarImagen");
            }
            if(fallos.length == 9){
                hola1.placeholder = " Ultima Oportunidad"; 
                jota7.classList.add("ocultarImagenOtraVez");
                jota8.classList.remove("ocultarImagen");
            }
            if(fallos.length == 10){
                hola1.placeholder = " Has perdido"; 
                hola2.placeholder = " Has perdido";;
                denegarTodo();
                jota8.classList.add("ocultarImagenOtraVez");
                jota9.classList.remove("ocultarImagen");
                alert("Has perdido") 
            }

            // Apartir de aqui mostramos cada letra subida en el array que son las letras que no estan en la palabra
            
            document.getElementById("errores").innerHTML = fallos;
            document.getElementById("letra").value = "";
            document.getElementById("letra").focus();
            return
        }
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();
}
function probarPalabra(){
    var hola1 = document.getElementById("letra")

    // Primera miramos que el input no este vacio

    if(document.getElementById("palabra").value == ''){
        alert("Introduzca texto");
        return
    }

    let text = document.getElementById("a").innerHTML;
    if(text == document.getElementById("palabra").value){
    var letrasOcultas = document.getElementsByClassName('p_hide');
    
    for (let i = 0; i <= letrasOcultas.length; i++) {
        
    letrasOcultas[i].classList.add('letra-encontrada');
    hola2.placeholder = " Has ganado";
    hola1.placeholder = " Has ganado";
    denegarTodo();
    alert("Has ganado")
    document.getElementById("palabra").value = "";
    document.getElementById("palabra").focus();
    }
    }
    else{
        hola2.placeholder = " Has perdido";
        hola1.placeholder = " Has perdido"; 
        denegarTodo();
        alert("has perdido");    
    }
        document.getElementById("palabra").value = "";
        document.getElementById("palabra").focus();
    
    
}

// Aqui limitamos las caracteres que se pueden poner

    function Solo_Texto(e) {
        var code;
        if (!e) var e = window.e;
        if (e.keyCode) code = e.keyCode;
        else if (e.which) code = e.which;
        
        var character = String.fromCharCode(code);
        var AllowRegex  = /^[\ba-z\s\gñç]$/;
        if (AllowRegex.test(character)) return true;    
        return false;
    }
    // Esta funcion es para que cuando clickes al boton "intentalo de nuevo" se recarge la pagina

    function mostrar () {
        window.location.reload();
    }

    // Aqui denegamos el click en los inputs i boton para que solo se pueda el boton de intentar otra vez
    
    function denegarTodo(){
        document.getElementById('letra').disabled = true;        
        document.getElementById('palabra').disabled = true;
        document.getElementById('lletra').disabled = true;      
        document.getElementById('paraula').disabled = true;   
    }