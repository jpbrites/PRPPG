import React, {useEffect, useState} from 'react'
import { Navbar, Titleheader } from '../../components'
import './cadastro_pesquisadores.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask'
import axios from "axios"
import { Copyright, Footer } from '../../containers'


function Cadastro_pesquisadores() {
  const colegiado = [
    { value: 'administração', label: 'Colegiado de Administração' },
    { value: 'antropologia', label: 'Colegiado de Antropologia' },
    { value: 'arqueologia', label: 'Colegiado de Arqueologia e Preservação Patrimonial' },
    { value: 'artes_visuais', label: 'Colegiado de Artes Visuais' },
    { value: 'ciencias_biologicas', label: 'Colegiado de Ciências Biológicas' },
    { value: 'ciencias_natureza', label: 'Colegiado de Ciências da Natureza' },
    { value: 'ciencias_farmaceuticas', label: 'Colegiado de Ciências Farmacêuticas' },
    { value: 'ciencias_sociais', label: 'Colegiado de Ciências Sociais' },
    { value: 'ecologia', label: 'Colegiado de Ecologia' },
    { value: 'ecologia_geografia', label: 'Colegiado de Ecologia e Geografia' },
    { value: 'educacao_fisica', label: 'Colegiado de Educação Física' },
    { value: 'enfermagem', label: 'Colegiado de Enfermagem' },
    { value: 'engenharia_agricola', label: 'Colegiado de Engenharia Agrícola' },
    { value: 'engenharia_agronomica', label: 'Colegiado de Engenharia Agronômica' },
    { value: 'engenharia_civil', label: 'Colegiado de Engenharia Civil' },
    { value: 'engenharia_computacao', label: 'Colegiado de Engenharia da Computação' },
    { value: 'engenharia_producao', label: 'Colegiado de Engenharia de Produção' },
    { value: 'engenharia_eletrica', label: 'Colegiado de Engenharia Elétrica' },
    { value: 'engenharia_mecanica', label: 'Colegiado de Engenharia Mecânica' },
    { value: 'geografia', label: 'Colegiado de Geografia' }, 
    { value: 'quimica', label: 'Colegiado de Licenciatura em Química' },
    { value: 'medicina', label: 'Colegiado de Medicina' }, 
    { value: 'veterinaria', label: 'Colegiado de Mediciina Veterinária' },
    { value: 'psicologia', label: 'Colegiado de Psicologia' },   
    { value: 'pos_agronomia', label: 'Colegiado de Pós-Graduação em Agronomia -Produção Vegetal' },
    { value: 'pos_ciencia_animal', label: 'Colegiado de Pós-Graduação em Ciência Animal' },  
    { value: 'pos_ciencia_materiais', label: 'Colegiado de Pós-Graduação em Ciência dos Materiais' },
    { value: 'pos_ciencia_saude', label: 'Colegiado de Pós-Graduação em Ciências da Saúde e Biológicas' },
    { value: 'pos_ciencia_veterinaria', label: 'Colegiado de Pós-Graduação em Ciências Veterinárias do Semiárido' },
    { value: 'pos_educacao_fisica', label: 'Colegiado de Pós-Graduação em Educação Física' },
    { value: 'pos_engenharia_agricola', label: 'Colegiado de Pós-Graduação em Engenharia Agrícola' },
    { value: 'pos_ensino_fisica', label: 'Colegiado de Pós-Graduação em Ensino de Física' },
    { value: 'pos_psicologia', label: 'Colegiado de Pós-Graduação em Psicologia' },
    { value: 'pos_recursos_naturais', label: 'Colegiado de Pós-Graduação em Recursos Naturais e Semiárido' },
    { value: 'pos_matematica', label: 'Colegiado de Pós-Graduação Profissional em Matemática em Rede Nacional' },
    { value: 'comissao_permanente', label: 'Comissão Permanente de Controle Disciplinar' },
    { value: 'comite_etica', label: 'Comitê de Ética' },
    { value: 'consultoria_juridica', label: 'Consultoria Jurídica' },
    { value: 'controladoria_interna', label: 'Controladoria Interna' },
    { value: 'espaco_ciencia', label: 'Espaço Ciência' },
    { value: 'gabinete_reitor', label: 'Gabinete do Reitor' },
    { value: 'hospital_ensino', label: 'Hospital de Ensino do Vale do São Fracisco' },
    { value: 'hospital_veterinario', label: 'Hospital Veterinário' },
    { value: 'labratorios_agroclimatologia', label: 'Laboratórios de Agroclimtologi e Meteorologia' },
    { value: 'nucleo_apoio', label: 'Núcleo de Apoio ao Discente' },
    { value: 'nucleo_tecnologia', label: 'Núcleo de Tecnologia da Informação' },
    { value: 'prefeitura_universitaria', label: 'Prefeitura Universitária' },
    { value: 'procuradoria Jurídica', label: 'Procuradoria Jurídica' },
    { value: 'projeto_cemafauna', label: 'Projeto Cemafauna' },
    { value: 'projeto_crad', label: 'Projeto Crad' },
    { value: 'projeto_nema', label: 'Projeto Nema' },
    { value: 'protocolo_central', label: 'Protocolo Central' },
    { value: 'pro_reitoria_assistencia', label: 'Pró-Reitoria de Assistência Estudantil' },
    { value: 'pro_reitoria_ensino', label: 'Pró-Reitoria de Ensino' },
    { value: 'pro_reitoria_extensao', label: 'Pró-Reitoria de Extensão' },
    { value: 'pro_reitoria_gestao', label: 'Pró-Reitoria de Gestão e Orçamento' },
    { value: 'pro_reitoria_integracao', label: 'Pró-Reitoria de Integração aos Setores Comunitários e Produtivos' },
    { value: 'pro_reitoria_pesquisa_pos', label: 'Pró-Reitoria de Pesquisa e Pós-Graduação' },
    { value: 'pro_reitoria_pesquisa_pos_inovacao', label: 'Pró-Reitoria de Pesquisa, Pós-Graduação e Inovação' },
    { value: 'pro_reitoria_planejamento_administracao', label: 'Pró-Reitoria de Planejamento e Administração' },
    { value: 'pro_reitoria_planejamento_desenvolvimento', label: 'Pró-Reitoria de Planejamento e Desenvolvimento Institucional' },
    { value: 'restaurante_universitario', label: 'Restaurante Universitário' },
    { value: 'secretaria_acompanhamento', label: 'Secretaria de Acompanhamento e Desenvolvimento Institucional' },
    { value: 'secretaria_administracao', label: 'Secretaria de Administração' },
    { value: 'secretaria_educacao_distancia', label: 'Secretaria de Educação à Distância' },
    { value: 'secretaria_gestao_pessoas', label: 'Secretaria de Gestão de Pessoas' },
    { value: 'secretaria_gestao_orcamento', label: 'Secretaria de Gestão e Orçamento' },
    { value: 'secretaria_interiorizacao', label: 'Secretaria de Interiorizaçã-reuni' },
    { value: 'secretaria_promocao', label: 'Secretaria de Promoção e Assistência Estudantil' },
    { value: 'secretaria_registro', label: 'Secretaria de Registro e Controle Acadêmico' },
    { value: 'servicos_informacoes_cidadao', label: 'Setor de Serviços de Informações ao Cidadão' },
    { value: 'sistema_integrado_biblioteca', label: 'Sistema Integrado de Biblioteca' },
    { value: 'superintendencia_gestao_pessoas', label: 'Superintendência de Gestão de Pessoas' },
    { value: 'suporte_tecnico', label: 'Suporte Técnico de Laboratórios' },
    { value: 'tv_caatinga', label: 'TV Caatinga' },
    { value: 'pos_graduacao_dinamicas', label: 'Pós-Graduação em Dinâmicas de Desenvolvimento do Semiárido' },
    { value: 'nao_disponivel', label: 'Não Disponível' },





  ];

  const [colegiadoSelecionado, setColegiadoSelecionado] = useState(null);
  const [selectedEstado, setSelectedEstado] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  function colegiadoChange(event) {
    setColegiadoSelecionado(event.target.value);
  }

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => {
        const estadosData = res.data.map((estado) => ({
          value: estado.sigla,
          label: estado.nome,
        }));
        setEstados(estadosData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedEstado !== "") {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`
        )
        .then((res) => {
          const cidadesData = res.data.map((cidade) => ({
            value: cidade.nome,
            label: cidade.nome,
          }));
          setCidades(cidadesData);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedEstado]);

  const handleEstadoChange = (e) => {
    setSelectedEstado(e.target.value);
  };

  const handleCidadeChange = (e) => {
    setSelectedCidade(e.target.value);
  };
  return (
    <>
    <div className='gradient'>
        <Navbar/>
    </div>
    <Titleheader texto={'Cadastro de Pesquisadores e Avaliadores'}/>
    <div className='area-cadastro-pesquisador'>
      <div className='aviso-pesquisadores'>
        <RiErrorWarningLine className='icon-aviso' size={23}/>
        <span>Esse cadastro é apenas para Docentes, pesquisadores e avaliadores de projetos. Estudantes devem fazer o cadastro no <Link className='destaque'>Menu Bolsistas e Voluntários.</Link></span>
      </div>
      <form className='container-form-pesquisador'>
      <div className='form-pesquisador'>
          <div className='linha1-input'>
            <div className='conjunto-pesquisador'>
              <label className='label-pesquisador-nome' for="nome-pesquisador">Nome completo *</label>
              <input type='text' id="nome-pesquisador" name="nome-pesquisador"/>
            </div>
            <div className='conjunto-pesquisador'>
              <label for="sexo-pesquisador">Sexo *</label>
              <select id="sexo-pesquisador" name="sexo-pesquisador">
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>
            <div className='conjunto-pesquisador'>
              <label for="cpf-pesquisador">CPF *</label>
              <InputMask  mask="999.999.999-99" id="cpf-pesquisador" name="cpf-pesquisador" />
            </div>
            <div className='conjunto-pesquisador'>
              <label for="telefone-pesquisador">Telefone *</label>
              <InputMask  mask="(99) 99999-9999" id="telefone-pesquisador" name="telefone-pesquisador" />
            </div>

          </div>

          <div className='linha2-input'>
            <div className='conjunto-pesquisador'>
              <label for="email-pesquisador">Email *</label>
              <input type="email" id="email-pesquisador" name="email-pesquisador"/>
            </div>
            <div className='conjunto-pesquisador'>
              <label for="senha-pesquisador">Senha *</label>
              <input type="password" id="senha-pesquisador" name="senha-pesquisador"/>
            </div>
            <div className='conjunto-pesquisador'>
              <label for="senha-pesquisador-conf">Confirme a senha *</label>
              <input type="password" id="senha-pesquisador-conf" name="senha-pesquisador-conf"/>
            </div>
            <div className='conjunto-pesquisador'>
              <label for="titulacao-pesquisador">Titulação *</label>
              <select id="titulacao-pesquisador" name="titulacao-pesquisador">
                <option value="doutor">Doutor</option>
                <option value="mestre">Mestre</option>
                <option value="especialista">Especialista</option>
                <option value="graduado">Graduado</option>
              </select>
            </div>
          </div>

          <div className='linha3-input'>
            <div className='conjunto-pesquisador'>
              <label className='area-at' for="area-pesquisador">Principal grande área de atuação *</label>
                <select id="area-pesquisador" name="area-pesquisador">
                  <option value="biologicas">Ciências Biológicas, Agrárias e Saúde interdisciplinar</option>
                  <option value="exatas">Ciências Exatas, da Terra e Engenharias</option>
                  <option value="humanas">Ciências Humanas</option>
                  <option value="sociais">Ciências Sociais aplicadas, Língua, Letras e Artes</option>
                  <option value="interdisciplinar">Interdisciplinar</option>
                </select>
            </div>
            <div className='conjunto-pesquisador'>
              <label for="campus-pesquisador">Campus *</label>
                <select id="campus-pesquisador" name="campus-pesquisador">
                  <option value="centro">Campus Petrolina Centro</option>
                  <option value="cca">Campus Ciências Agrárias</option>
                  <option value="juazeiro">Campus Juazeiro</option>
                  <option value="sao_raimundo">Campus São Raimundo Nonato</option>
                  <option value="senhor_bonfim">Campus Senhor do Bonfim</option>
                  <option value="paulo_afonso">Campus Paulo Afonso</option>
                  <option value="salgueiro">Campus Salgueiro</option>
                  <option value="outra">Outra Instituição</option>
                </select>
            </div>
            <div className='conjunto-pesquisador'>
              <label for="colegiado-pesquisador">Colegiado/Setor *</label>
              <select id='colegiado-pesquisador' value={colegiadoSelecionado} onChange={colegiadoChange}>
                {colegiado.map((opcao) => (
                  <option key={opcao.value} value={opcao.value}>
                  {opcao.label}
                  </option>
                ))}
              </select>
            </div>
            </div>
            <div className='linha4-input'>
              <div className='conjunto-pesquisador'>
                <label className='nome-inst' for="instituicao-pesquisador">Instituição *</label>
                <input id='instituicao-pesquisador' name='instituicao-pesquisador' type="text" value= 'Universidade Federal do Vale do São Francisco' readOnly />
              </div>
            </div>
            <div className='linha5-input'>
              <div className='conjunto-pesquisador'>
                <label for="curriculo-pesquisador">Link do Currículo Lattes *</label>
                <input id='curriculo-pesquisador' name='curriculo-pesquisador' type="text"/>
              </div>
              <div className='conjunto-pesquisador'>
                <label for="bolsista-pesquisador">Bolsista CNPQ? *</label>
                <select id="bolsista-pesquisador" name="bolsista-pesquisador">
                  <option value="nao">Não</option>
                  <option value="sim">Sim</option>
                </select>
              </div>
              <div className='conjunto-pesquisador'>
                <label className='nome-cat' for="categoria-pesquisador">Categoria *</label>
                <input id='categoria-pesquisador' name='categoria-pesquisador' type="text"/>
              </div>
              <div className='conjunto-pesquisador'>
                <label for="nivel-pesquisador">Nível *</label>
                <input id='nivel-pesquisador' name='nivel-pesquisador' type="text"/>
              </div>

            </div>
            <div className='linha6-input'>
              <div className='conjunto-pesquisador'>
              <label for="estado">Estado de residência *</label>
              <select id='estado' value={selectedEstado} onChange={handleEstadoChange} name='estado'>
            <option value="">Selecione um estado</option>
            {estados.map((estado) => (
              <option key={estado.value} value={estado.value}>
                {estado.label}
              </option>
            ))}
          </select>
              </div>

              <div className='conjunto-pesquisador'>
              <label for="cidade">Cidade de residência *</label>
              <select id='cidade' value={selectedCidade} onChange={handleCidadeChange} name='cidade'>
            <option value="">Selecione uma cidade</option>
            {cidades.map((cidade) => (
              <option key={cidade.value} value={cidade.value}>
                {cidade.label}
              </option>
            ))}
          </select>

            </div>
            <div className='conjunto-pesquisador'>
              <label className='label-pesquisador-endereco' for="endereco-pesquisador">Endereço *</label>
              <input type='text' id="endereco-pesquisador" name="endereco-pesquisador"/>

            </div>
          </div>

          <div className='linha7-input'>
              <div className='conjunto-pesquisador'>
                <label for="orcid-pesquisador">ORCID *</label>
                <input type='text' id="orcid-pesquisador" name="orcid-pesquisador"/>
              </div>
              <div className='conjunto-pesquisador'>
                <label for="researcher-pesquisador">ResearcherID *</label>
                <input type='text' id="researcher-pesquisador" name="researcher-pesquisador"/>
              </div>
          </div>
          <span className='aviso-professores'>*Professores/Pesquisadores da Univasf para serem contemplados nos Editais Internos da PRPPGI deverão apresentar o registro no ORCID (Open Researcher and Contributor ID) e ResearcherID</span>
          <span className='titulo-palavras-chave'>Informe as principais palavras chave dentro da suas áreas de pesquisa.</span>
          <div className='linha8-input'>
              <div className='conjunto-pesquisador'>
                <label for="pchave1-pesquisador">Palavra Chave 1 *</label>
                <input type='text' id="pchave1-pesquisador" name="pchave1-pesquisador"/>
              </div>
              <div className='conjunto-pesquisador'>
                <label for="pchave2-pesquisador">Palavra Chave 2 *</label>
                <input type='text' id="pchave2-pesquisador" name="pchave2-pesquisador"/>
              </div>
              <div className='conjunto-pesquisador'>
                <label for="pchave3-pesquisador">Palavra Chave 3 *</label>
                <input type='text' id="pchave3-pesquisador" name="pchave3-pesquisador"/>
              </div>
              <div className='conjunto-pesquisador'>
                <label for="pchave4-pesquisador">Palavra Chave 4 *</label>
                <input type='text' id="pchave4-pesquisador" name="pchave4-pesquisador"/>
              </div>
              <div className='conjunto-pesquisador'>
                <label for="pchave5-pesquisador">Palavra Chave 5 *</label>
                <input type='text' id="pchave5-pesquisador" name="pchave5-pesquisador"/>
              </div>
              <div className='conjunto-pesquisador'>
                <label for="pchave6-pesquisador">Palavra Chave 6 *</label>
                <input type='text' id="pchave6-pesquisador" name="pchave6-pesquisador"/>
              </div>
            </div>
            <label className='label-escalacao'>
              <input id='checkbox-escalacao' type="checkbox" name="meu_checkbox" value="1"/>
              <span>Desejo ser escalado(a) para avaliar projetos</span>
            </label>
            <p className='texto-escalado'>O Pesquisador/orientador vinculado ao Programa de Iniciação Científica e/ou Programa em Desenvolvimento Tecnológico e Inovação da Instituição, quando necessário,<span className='destaque'> é obrigado a colaborar com as avaliações das propostas submetidas aos Editais PIBIC/PIBITI, relatórios parciais e finais </span>, bem como com as avaliações por ocasião da Jornada de Iniciação Científica e/ou Jornada de Iniciação em Desenvolvimento Tecnológico e Inovação da Univasf.</p>
            
            <input className='botao-pesquisador' type="submit" value="Finalizar Cadastro"/>
      </div>
      </form>
    </div>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default Cadastro_pesquisadores