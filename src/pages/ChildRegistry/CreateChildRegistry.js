import React from 'react';

import '../../styles/ChildRegistry/create-child-registry.css'

export default function CreateChildRegistry() {
  /*
    parente:                        obrigatorio, id do parente, vou enviar no login
    cep:                            obrigatorio, pode conter caracteres
    uf:                             obrigatorio, maximo 2 caracteres
    sexo_biologico:                 obrigatorio, ['M', 'F']
    data_de_nascimento:             obrigatorio, tem que utilizar um datepicker
    num_cartao_sus:                 obrigatorio, pode conter caracteres
    raca:                           obrigatorio, ['BRANCA', 'PRETA', 'PARDA', 'AMARELA','INDÍGENA']
    nome_da_crianca:                obrigatorio,
    municipio_nascimento:           obrigatorio,
    endereco:                       obrigatorio,
    bairro:                         obrigatorio,
    cidade:                         obrigatorio,
    endereco_un_basica_frequentada: obrigatorio
    telefone:                       opcionais, pode conter caracteres
    num_prontuario:                 opcionais, pode conter caracteres
    num_declaracao_nascido_vivo:    opcionais, pode conter caracteres
    num_registro_civil_nascimento:  opcionais, pode conter caracteres
    ponto_referencia:               opcionais
  */
  // rota da api: POST /child
  return (
    <h1>Create a new child registry</h1>
  );
}