
    function calcular_imc( ){
        var meses, dias = 0, diff = 999999;
        var peso = document.forms.imc.peso.value;
        var altura = document.forms.imc.altura.value;
        var result = '', perc = '';
        var ref = null;

        if( peso.match(/^[0-9]+(,[0-9]+)?$/) ){
            peso = parseFloat(peso.replace(',','.'));
        } else {
            alert("O valor fornecido para peso está incorreto.");
            return false;
        }

        if( altura.match(/^[0-9]+(,[0-9]+)?$/) ){
            altura = parseFloat(altura.replace(',','.'));
            if( altura <= 0 ){
                alert("O valor fornecido para altura não pode ser zero");
                return false;
            }
        } else {
            alert("O valor fornecido para altura está incorreto.");
            return false;
        }

        if( document.imc.anos.value.match(/^[0-9]+$/) )
            dias += parseInt(document.imc.anos.value) * 365;
        else{
            alert("Formato para 'ano' incorreto");
            return false;
        }

        if( document.imc.meses.value.match(/^[0-9]+$/) )
            dias += parseInt(document.imc.meses.value) * 30;
        else{
            alert("Formato para 'meses' incorreto");
            return false;
        }

        if( document.imc.semanas.value.match(/^[0-9]+$/) )
            dias += parseInt(document.imc.semanas.value) * 7;
        else {
            alert("Formato para 'semanas' incorreto");
            return false;
        }

        if( document.imc.dias.value.match(/^[0-9]+$/) )
            dias += parseInt(document.imc.dias.value);
        else{
            alert("Formato para 'dias' incorreto");
            return false;
        }

        if( dias < 1857 )
            ref = document.forms.imc.sexo[0].checked?b0_5[ dias ]:g0_5[ dias ];
        else{
            meses = Math.floor(dias/30);
            if( meses > 231 ){
                alert("A idade não deve ultrapassar 19 anos (228) meses");
                return false;
            }
            meses = (meses>228) ? 228 : meses;
            meses = meses - 61;

            ref = document.forms.imc.sexo[0].checked?b5_19[meses]:g5_19[meses];
        }


        var imc = calculateIMC(peso,altura);

        var str_peso = peso + '';
        str_peso = str_peso.replace('.',',');

        var str_imc = imc + '';
        str_imc = str_imc.replace(/\.(\d{1,2})\d*$/,',$1');

        var str_pow_altura = (altura*altura) + '';
        str_pow_altura = str_pow_altura.replace(/\.(\d{1,2})\d*$/,',$1');

        document.getElementById('peso').value = str_peso;
        document.getElementById('altura').value = str_pow_altura;
        document.getElementById('imc_total').innerHTML = str_imc;

        if( imc < ref.p3 ){
            result = 'Baixo IMC para idade';
        } else if( imc >= ref.p3 && imc <= ref.p85 ){
            result = 'IMC adequado ou Eutrófico';
        } else if( imc >= ref.p85 && imc <= ref.p97 ){
            result = 'Sobrepeso';
        } else if( imc >= ref.p97 ){
            result = 'Obesidade';
        }

        for (var i in ref ){
            if( Math.abs(ref[i] - imc) < diff ){
                diff = Math.abs(ref[i] - imc);
                perc = i;
            }
        }

        result += ', Valor ';
        result += (imc < ref[perc])?'menor':'maior';
        result += ' e mais próximo de ';
        result += perc.toUpperCase() + '('+ref[perc]+')';

        document.getElementById('result').innerHTML = result;

        return false;
    }
