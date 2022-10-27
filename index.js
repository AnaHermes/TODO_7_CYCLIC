import express from 'express'

const app = express()

const porta = 3333

app.listen( porta, function() {
    console.log( `
    A aplicação está rodando na porta ${porta}!
    ` )
})

//app.get( '/calculadora/:op/:numA/:numB', function ( pedido, resposta )
app.get( '/calculadora/adicao/', function ( pedido, resposta )
{
    const numA = Number(pedido.query.numA)
    const numB = Number(pedido.query.numB)

    const resultado = numA + numB

    console.log('Url:', pedido.url, '---> Operadores:', pedido.query, '---> Resultado:', resultado)  

    resposta.status(200).json({
        messagem: 'Efetuando um cálculo de adição!',
        resultado: resultado
    })
})

app.get( '/calculadora/subtracao/', function ( pedido, resposta )
{
    const numA = Number(pedido.query.numA)
    const numB = Number(pedido.query.numB)

    const resultado = numA - numB
0+
    console.log(pedido.query)  

    resposta.status(200).json({
        messagem: 'Efetuando um cálculo de subtração!',
        resultado: resultado
    })
})

app.get( '/calculadora/multiplicacao/', function ( pedido, resposta )
{
    const numA = Number(pedido.query.numA)
    const numB = Number(pedido.query.numB)

    const resultado = numA * numB

    console.log('Url:', pedido.url, '---> Operadores:', pedido.query, '---> Resultado:', resultado) 

    resposta.status(200).json({
        messagem: 'Efetuando um cálculo de multiplicação!',
        resultado: resultado
    })
})

app.get( '/calculadora/divisao/', function ( pedido, resposta )
{
    const numA = Number(pedido.query.numA)
    const numB = Number(pedido.query.numB)

    const resultado = numA / numB

    console.log(pedido.query)  

    resposta.status(200).json({
        messagem: 'Efetuando um cálculo de divisão!',
        resultado: resultado
    })
})