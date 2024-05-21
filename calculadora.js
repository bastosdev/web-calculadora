function entrada(caracter){    

    switch(caracter){
        case '1':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '2':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '3':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '4':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '5':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '6':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '7':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '8':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '9':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '0':
            document.getElementById('visor-entrada').value += caracter
            break;                
        case '+':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '-':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '*':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '/':
            document.getElementById('visor-entrada').value += caracter
            break;
        case '%':
            document.getElementById('visor-entrada').value += caracter
            break;
        case 'c':
            document.getElementById('visor-entrada').value = ''
            document.getElementById('visor-resumo').value = ''
            break;    
        case '=':
            var igual = document.getElementById('visor-entrada').value
            document.getElementById('visor-resumo').value = igual
            document.getElementById('visor-entrada').value = eval(igual)
            break;
    }

}


