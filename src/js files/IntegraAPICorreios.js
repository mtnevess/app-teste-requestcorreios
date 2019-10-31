let Correios = require('node-correios');
let correios = new Correios();

let CodigosdeServico = '04014, 04065, 04510, 04707, 40169, 40215, 40290';

//04014 = SEDEX à vista
//04065 = SEDEX à vista pagamento na entrega
//04510 = PAC à vista
//04707 = PAC à vista pagamento na entrega
//40169 = SEDEX12 ( à vista e a faturar)
//40215 = SEDEX 10 (à vista e a faturar)
//40290 = SEDEX Hoje Varejo


export function CalculaPrecoPrazo(args){

    let argumentos = {
        nCdServico:CodigosdeServico,
        sCepOrigem:'11030251',
        sCepDestino:'13083861',
        nVlPeso:'1', // Peso em kg. Se for envelope, peso máximo 1kg
        nCdFormato:1, //1=Formato Caixa/Pacote | 2=Formato Rolo/Prisma | 3= Envelope
        nVlComprimento:20.0,
        nVlAltura:20.0,
        nVlLargura:20.0,
        nVlDiametro:30.0,
    }

    correios.calcPrecoPrazo(argumentos)
    .then(result => {
    console.log(result);
    })
    .catch(error => {
    console.log(error);
    });
}

