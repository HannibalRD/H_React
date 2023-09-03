const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'new york',
        zip: 12343244325,
        lat: 15.21323,
        lng:14.34324,
    }
};
const persona2 = {...persona};
persona.nombre = 'peter';

console.log(persona);
console.log(persona2);