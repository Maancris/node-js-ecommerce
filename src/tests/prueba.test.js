const {checkInteger} = require ('./math')
//un string que indica de que va la prueba
//una funcion de callback que se va a ejecutar con la prueba
//como escribimos una funcion que falle 
//le paso un string cuando no le paso valor

//Debe devolver la funcion booleano true / false
//Que debe recibir la función un valor

test("Debe devolver un true cuando le pasamos el valor de 5",  ()=>{
    //Arrange
    const value = 5;
    //act  necesito la función
    const result = checkInteger(value);
    //assert -- afirmar
    expect(result).toBe(true)
});

test ("Debe devolver un true cuando le pasamos un 100", ()