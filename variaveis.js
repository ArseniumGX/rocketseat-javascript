/*  Tipos de varaveis
    var - hoisting, uma 'var' é global e local, uso não recomendado atualmente
    let - é local e so funciona no scope onde foi definido e nos internos, é declaração mais moderna para declaração de variaveis
    const - mesmo conceito do let, porem o valor é imutáveil, não pode ser alterado

    No js uma variável não precisa ser previamente tipada (JS fracamente tipada)

    Scope (espoco)
*/

var clima = 'Quente' // criando e atribuindo valor a variável
clima = "Frio" // reatribuindo valor a variavel
console.log(clima)

let luz = 'Acesa' // tem o mesmo comportamento do 'var'
luz = 'apagada'
console.log(luz)

const energia = 'Constante' // declaração de uma 'constante'
/* energia = 'muável' // uma constante é imutável, esse tipo de coisa gera um erro */
console.log(energia)

// ************** Hoisting **************
console.log(x) // retorna que x is undefined
{
    var x = 0
}
// é equivalente a ...
var x 
console.log(x)
{
    x = 0
}
// é o que acontece por 'debaixo dos panos'