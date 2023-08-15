const PDFDocument = require("pdfkit");
const fs = require("fs");
const NFe = require("./lib/nfeModel");
const geradorDePdf = require("./lib/geradorDePdf");
const path = require("path");

module.exports.xml = function (nota, outPutFile) {
  const pathFile = path.resolve(nota);

  if (!fs.existsSync(pathFile)) {
    console.error("Arquivo inválido ou inexistente");
    return;
  }

  var xml = fs.readFileSync(pathFile, {
    encoding: "utf8",
    flag: "r",
  });

  return NFe(xml);
};

function prepareDanfeJson(nfe) {
  var emitenteJson = nfe.emitente();
  var destinatarioJson = nfe.destinatario();
  var transportadorJson = nfe.transportador();
  var protocoloJson = nfe.informacoesProtocolo();

  const emitente = {
    Nome: emitenteJson.nome(),
    Logotipo: "",
    RegistroNacional: emitenteJson.RegistroNacional,
    InscricaoEstadual: "03.707.130-0",
    Telefone: "(31) 3322-4455",
    Email: "contato@empresa.com.br",
    Endereco: {
      Logradouro: "Rua dos Testes",
      Numero: "42",
      Complemento: "Sala 1389 - Ed. Nodeunit",
      Cep: "72.100-300",
      Bairro: "Bairro da Integração",
      Municipio: "Belo Horizonte",
      Cidade: "Belo Horizonte",
      Uf: "MG",
    },
  };

  const destinatario = {
    Nome: destinatarioJson.nome(),
    RegistroNacional: "250.796.466-91",
    Telefone: "2123124389",
    Endereco: {
      Logradouro: "Av. Brasil",
      Numero: "132",
      Complemento: "Fundos",
      Cep: "71.010-130",
      Bairro: "Padre Miguel",
      Municipio: "Rio de Janeiro",
      Cidade: "Rio de Janeiro",
      Uf: "RJ",
    },
  };

  const transportador = {
    Nome: transportadorJson.nome(),
    RegistroNacional: "28.124.151/0001-70",
    InscricaoEstadual: "0731778300131",
    CodigoAntt: "ASDASD",
    PlacaDoVeiculo: "ZZZ-9090",
    UfDaPlacaDoVeiculo: "AP",
    Endereco: {
      Logradouro: "Rua Imaginária",
      Numero: "S/N",
      Cep: "70000000",
      Bairro: "Bairro Alto",
      Municipio: "Cocalzinho de Goiás",
      Cidade: "Cocalzinho de Goiás",
      Uf: "GO",
    },
  };

  const protocolo = {
    Codigo: "123451234512345",
    Data: "01/01/2020",
  };

  const impostos = {
    BaseDeCalculoDoIcms: 100,
    ValorDoIcms: 17.5,
    BaseDeCalculoDoIcmsSt: 90,
    ValorDoIcmsSt: 6.83,
    ValorDoImpostoDeImportacao: 80,
    ValorDoPis: 70,
    ValorTotalDoIpi: 60,
    ValorDaCofins: 50,
    BaseDeCalculoDoIssqn: 40,
    ValorTotalDoIssqn: 30,
  };

  const volumes = {
    Quantidade: 1342,
    Especie: "À GRANEL",
    Marca: "Apple",
    Numeracao: "AB73256343-4",
    PesoBruto: "1.578Kg",
    PesoLiquido: "1.120Kg",
  };
  const item = [
    {
      Codigo: 1,
      Descricao: "Produto",
      NcmSh: "15156000",
      OCst: "020",
      Cfop: "6101",
      Unidade: "LT",
      Quantidade: 3.1415,
      ValorUnitario: 2.31,
      ValorTotal: 7.13,
      BaseDeCalculoDoIcms: 5.01,
      ValorDoIcms: 0.67,
      ValorDoIpi: 0.03,
      AliquotaDoIcms: 0.1753,
      AliquotaDoIpi: 0.0034,
    },
    {
      Codigo: 2,
      Descricao: "Produto 2",
      NcmSh: "15156000",
      OCst: "020",
      Cfop: "6101",
      Unidade: "LT",
      Quantidade: 3.1415,
      ValorUnitario: 2.31,
      ValorTotal: 7.13,
      BaseDeCalculoDoIcms: 5.01,
      ValorDoIcms: 0.67,
      ValorDoIpi: 0.03,
      AliquotaDoIcms: 0.1753,
      AliquotaDoIpi: 0.0034,
    },
    {
      Codigo: 2,
      Descricao: "Produto 2",
      NcmSh: "15156000",
      OCst: "020",
      Cfop: "6101",
      Unidade: "LT",
      Quantidade: 3.1415,
      ValorUnitario: 2.31,
      ValorTotal: 7.13,
      BaseDeCalculoDoIcms: 5.01,
      ValorDoIcms: 0.67,
      ValorDoIpi: 0.03,
      AliquotaDoIcms: 0.1753,
      AliquotaDoIpi: 0.0034,
    },
    {
      Codigo: 2,
      Descricao: "Produto 2",
      NcmSh: "15156000",
      OCst: "020",
      Cfop: "6101",
      Unidade: "LT",
      Quantidade: 3.1415,
      ValorUnitario: 2.31,
      ValorTotal: 7.13,
      BaseDeCalculoDoIcms: 5.01,
      ValorDoIcms: 0.67,
      ValorDoIpi: 0.03,
      AliquotaDoIcms: 0.1753,
      AliquotaDoIpi: 0.0034,
    },
    {
      Codigo: 2,
      Descricao: "Produto 2",
      NcmSh: "15156000",
      OCst: "020",
      Cfop: "6101",
      Unidade: "LT",
      Quantidade: 3.1415,
      ValorUnitario: 2.31,
      ValorTotal: 7.13,
      BaseDeCalculoDoIcms: 5.01,
      ValorDoIcms: 0.67,
      ValorDoIpi: 0.03,
      AliquotaDoIcms: 0.1753,
      AliquotaDoIpi: 0.0034,
    },
    {
      Codigo: 2,
      Descricao: "Produto 2",
      NcmSh: "15156000",
      OCst: "020",
      Cfop: "6101",
      Unidade: "LT",
      Quantidade: 3.1415,
      ValorUnitario: 2.31,
      ValorTotal: 7.13,
      BaseDeCalculoDoIcms: 5.01,
      ValorDoIcms: 0.67,
      ValorDoIpi: 0.03,
      AliquotaDoIcms: 0.1753,
      AliquotaDoIpi: 0.0034,
    },
    {
      Codigo: 2,
      Descricao: "Produto 2",
      NcmSh: "15156000",
      OCst: "020",
      Cfop: "6101",
      Unidade: "LT",
      Quantidade: 3.1415,
      ValorUnitario: 2.31,
      ValorTotal: 7.13,
      BaseDeCalculoDoIcms: 5.01,
      ValorDoIcms: 0.67,
      ValorDoIpi: 0.03,
      AliquotaDoIcms: 0.1753,
      AliquotaDoIpi: 0.0034,
    },
  ];

  const danfe = {
    ChaveDeAcesso: protocoloJson.chave(),
    Emitente: emitente,
    Destinatario: destinatario,
    Transportador: transportador,
    Protocolo: protocolo,
    Impostos: impostos,
    Volumes: volumes,
    Tipo: "1", //0 entrada 1 saida
    NaturezaDaOperacao: "VENDA",
    Numero: 1420,
    Serie: 100,
    DataDaEmissao: "01/01/2020",
    DataDaEntradaOuSaida: "01/01/2020",
    ModalidadeDoFrete: "9", //0 1 2 e 9
    InscricaoEstadualDoSubstitutoTributario: "102959579",
    InformacoesComplementares:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum nihil aut nostrum",
    ValorTotalDaNota: 250.13,
    ValorTotalDosProdutos: 120.1,
    ValorTotalDosServicos: 130.03,
    ValorDoFrete: 23.34,
    ValorDoSeguro: 78.65,
    Desconto: 1.07,
    OutrasDespesas: 13.32,
    Item: item,
  };

  return danfe;
}

module.exports.danfeObject = function (nota) {
  const resultXml = exports.xml(nota);

  if (resultXml != undefined) {
    return prepareDanfeJson(resultXml);
  }

  return false;
};

module.exports.generatePdf = function (nota, outPutFile) {
  const danfeObject = module.exports.danfeObject(nota);

  if (!danfeObject) {
    return false;
  }

  geradorDePdf(danfeObject, "function", function (err, pdf) {
    if (err) {
      throw err;
    }
    var myDoc = new PDFDocument({ bufferPages: true });
    myDoc = pdf;
    let buffers = [];
    myDoc.on("data", buffers.push.bind(buffers));
    myDoc.on("end", () => {
      Buffer.concat(buffers);
    });
    pdf.pipe(fs.createWriteStream(outPutFile));
    myDoc.end();
  });
  return true;
};
