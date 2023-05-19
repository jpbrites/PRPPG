import React, { useState } from 'react'
import './cadastro_estudante.css'
import { Modal_aviso, Navbar, Titleheader } from '../../components'
import InputMask from 'react-input-mask'
import axios from 'axios';
import { Copyright, Footer } from '../../containers';
import moment from 'moment';

function Cadastro_estudante() {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [data, setData] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cotista, setCotista] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [dataemissao, setDataemissao] = useState('');
  const [emissor, setEmissor] = useState('');
  
  const [erroSenha , setErroSenha] = useState(false);
  const [erroData, setErroData] = useState('');
  const [erroDataEmissao, setErroDataEmissao] = useState('');
  const [emailExistente, setEmailExistente] = useState(false);
  const [validarCpf, setvalidarCpf] = useState(false);
  const [msgCpf, setmsgCpf] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModalerro, setShowModalerro] = useState(false);

  


  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
    
    let soma = 0;
    let resto;
    
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    
    if (resto !== parseInt(cpf.charAt(9))) {
      return false;
    }
    
    soma = 0;
    
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    
    if (resto !== parseInt(cpf.charAt(10))) {
      return false;
    }
    
    return true;
  }


  


    const handleSubmit = (e) => {
      e.preventDefault();

      //VALIDANDO DATA DE NASCIMENTO
      const dataObj = moment(data, 'DD/MM/YYYY', true);
      if (!dataObj.isValid()) {
        setErroData(true);
        return;
      }
      setErroData(''); // Limpar a mensagem de erro, se houver


        if (dataemissao) {
          // Realiza a validação da data
          const dataObj2 = moment(dataemissao, 'DD/MM/YYYY', true);
          if (!dataObj2.isValid()) {
            setErroDataEmissao(true);
            return;
          }
          setErroDataEmissao(''); // Limpar a mensagem de erro, se houver
        } else {
          // Se a data não estiver preenchida, considera como válida
          setErroDataEmissao(false);
        }
      
    

    
      const novoAluno = {
        nome,
        sexo,
        data,
        telefone,
        cotista,
        email,
        senha,
        cpf,
        rg,
        dataemissao,
        emissor,
      };
  
      if (validarCPF(cpf)) {
        if(senha === confirmacaoSenha){
            axios.post('/cadastro2', novoAluno).then((response) => {
              console.log('Registro inserido com sucesso!');
              setShowModal(true);
              // Faça algo com a resposta do backend, se necessário
            })
            .catch((error) => {
              if(error.response.data.errorCode === 'ER_DUP_ENTRY'){ //DADO DUPLICADO
                if (error.response.data.field === 'email') { //EMAIL DUPLICADO
                  setEmailExistente(true);
                }
                else if (error.response.data.field === 'cpf') {
                  setvalidarCpf(true);
                  setmsgCpf('CPF já cadastrado!')
    
                }
              }
            });
      }
        else{
          setErroSenha(true)
          setShowModal(false)
        }
    } 
      else {
        setvalidarCpf(true);
        setShowModal(false);
        setmsgCpf('CPF inválido!')
      }
        


  }
  const closeModal = () => {
    setShowModal(false);
    /*setNome('');
    setSexo('');
    setData('');
    setTelefone('');
    setCotista('');
    setEmail('');
    setSenha('');
    setConfirmacaoSenha('')
    setCpf('')
    setRg('')
    setDataemissao('')*/
    
    
    

  };

  const closeModalerro = () => {
    setShowModalerro(false);
    setEmailExistente(false)
    setErroData(false);
    setvalidarCpf(false)
    setErroSenha(false)
    setErroDataEmissao(false)
  };


  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleKeyPress = async (event) => {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setEstado(response.data.uf);
  };
  return (
    <>
    <div className='gradient'>
        <Navbar/>
    </div>
    <Titleheader texto={'Cadastro de Bolsistas e Voluntários'}/>
    
    <form className='area-cadastro-bolsista' onSubmit={handleSubmit}>
    <span className='info-cadastro-estudante'>Preencha o formulário de cadastro para acessar a Área do Estudante</span>
        <div className='linha-estudante'>
          <div className='conjunto-estudante'>
              <label for="nome-estudante">Nome do Aluno *</label>
              <input type='text' id="nome-estudante" name="nome-estudante" value={nome} onChange={(e) => setNome(e.target.value)} required/>
          </div>
          <div className='conjunto-estudante'>
              <label for="sexo-estudante">Sexo *</label>
              <select id="sexo-estudante" name="sexo-estudante" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                  {sexo === '' && (
                  <option value="" disabled selected>
                    Selecione o sexo
                  </option>
                )}
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>
            <div className='conjunto-estudante'>
              <label for="data-estudante">Data de Nascimento *</label>
              <InputMask  mask="99/99/9999" id="data-estudante" name="data-estudante" value={data}  onChange={(e) => setData(e.target.value)} required/>
              {erroData && <Modal_aviso icone={'error'} aviso={'Data de nascimento inválida'} isOpen={erroData} onRequestClose={closeModalerro} closeModal={closeModalerro}/>
              }
            </div>
            <div className='conjunto-estudante'>
              <label for="telefone-estudante">Telefone *</label>
              <InputMask  mask="(99) 99999-9999" id="telefone-estudante" name="telefone-estudante" value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>
            </div>
            <div className='conjunto-estudante'>
              <label for="negro-estudante">Negro ou Indígena? *</label>
              <select id="negro-estudante" name="negro-estudante" value={cotista} onChange={(e) => setCotista(e.target.value)} required>
                {cotista === '' && (
                  <option value="" disabled selected>
                    Selecione
                  </option>
                )}
                <option value="N">Não</option>
                <option value="S">Sim</option>
              </select>
            </div>
        </div>
        <div className='linha-estudante'>
        <div className='conjunto-estudante'>
              <label for="email-estudante">E-mail *</label>
              <input type='text' id="email-estudante" name="email-estudante" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              {emailExistente && <Modal_aviso icone={'error'} aviso={'Email já existente'} isOpen={emailExistente} onRequestClose={closeModalerro} closeModal={closeModalerro}/>
              }
          </div>
          <div className='conjunto-estudante'>
              <label for="senha-estudante">Crie uma senha *</label>
              <input type="password" id="senha-estudante" name="senha-estudante" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
            </div>
            <div className='conjunto-estudante'>
              <label for="senha-estudante-conf">Confirme a senha *</label>
              <input type="password" id="senha-estudante-conf" name="senha-estudante-conf" value={confirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)} required/>
              {erroSenha && <Modal_aviso icone={'error'} aviso={'Senhas não coincidem!'} isOpen={erroSenha} onRequestClose={closeModalerro} closeModal={closeModalerro}/>
              }
            </div>
            <div className='conjunto-estudante'>
              <label for="cpf-estudante">CPF do aluno *</label>
              <InputMask  mask="999.999.999-99" id="cpf-estudante" name="cpf-estudante" value={cpf} onChange={(e) => setCpf(e.target.value)} required/>
              {validarCpf && <Modal_aviso icone={'error'} aviso={msgCpf} isOpen={validarCpf} onRequestClose={closeModalerro} closeModal={closeModalerro}/>
              }
            </div>
        </div>

        <div className='linha-estudante'>
          <div className='conjunto-estudante'>
              <label for="rg-estudante">RG</label>
              <input type="number" className='no-spinner' id="rg-estudante" name="rg-estudante" value={rg} onChange={(e) => setRg(e.target.value)} />
          </div>
          <div className='conjunto-estudante'>
              <label for="data-emissao">Data de Emissão</label>
              <InputMask  mask="99/99/9999" id="data-emissao" name="data-emissao" value={dataemissao}  onChange={(e) => setDataemissao(e.target.value)} />
              {erroDataEmissao && <Modal_aviso icone={'error'} aviso={'Data de emissão inválida!'} isOpen={erroDataEmissao} onRequestClose={closeModalerro} closeModal={closeModalerro}/>
              }
          </div>
          <div className='conjunto-estudante'>
              <label for="orgao-emissor-estudante">Órgão Emissor/UF</label>
              <input type="text" id="orgao-emissor-estudante" name="orgao-emissor-estudante" value={emissor}  onChange={(e) => setEmissor(e.target.value)}/>
          </div>
        </div>

        <div className='linha-estudante'>
          <div className='conjunto-estudante'>
            <label for="categoria-estudante">Categoria *</label>
              <select id="categoria-estudante" name="categoria-estudante">
                <option value="ensino_medio">Ensino Médio</option>
                <option value="graduacao">Graduação</option>
                <option value="pos_graduacao">Pós-Graduação</option>
              </select>
          </div>
          <div className='conjunto-estudante'>
              <label for="curso-estudante">Curso *</label>
              <input type="text" id="curso-estudante" name="curso-estudante"/>
          </div>
          <div className='conjunto-estudante'>
              <label for="data-conclusao">Previsão de conclusão</label>
              <InputMask  mask="99/9999" id="data-conclusao" name="data-conclusao" />
          </div>
          <div className='conjunto-estudante'>
              <label for="cep-estudante">CEP da residência *</label>
              <InputMask mask="99999-999" type="text" id="cep-estudante" name="cep-estudante" value={cep} onChange={handleCepChange} onBlur={handleKeyPress}/>      
          </div>
          
          
        </div>

        <div className='linha-estudante'>
          <div className='conjunto-estudante'>
              <label for="rua-estudante">Rua *</label>
              <input type="text" id="rua-estudante" name="rua-estudante" value={logradouro} disabled/>
          </div>
          <div className='conjunto-estudante'>
              <label for="bairro-estudante">Bairro *</label>
              <input type="text" id="bairro-estudante" name="bairro-estudante" value={bairro} disabled/>
          </div>
          <div className='conjunto-estudante'>
              <label for="numero-estudante">Número *</label>
              <input type="number" id="numero-estudante" name="numero-estudante"/>
          </div>
          <div className='conjunto-estudante'>
              <label for="cidade-estudante">Cidade *</label>
              <input type="text" id="cidade-estudante" name="cidade-estudante" value={cidade} disabled/>
          </div>
          <div className='conjunto-estudante'>
              <label for="estado-estudante">Estado *</label>
              <input type="text" id="estado-estudante" name="estado-estudante" value={estado} disabled/>
          </div>
        </div>

        <div className='linha-estudante'>
          <div className='conjunto-estudante'>
              <label for="curriculo-estudante">Link do Currículo Lattes *</label>
              <input type="text" id="curriculo-estudante" name="curriculo-estudante"/>
          </div>
          <div className='conjunto-estudante'>
            <label for="banco-estudante">Banco(Bolsistas) *</label>
            <select id="banco-estudante" name="banco-estudante">
                <option value="brasil">Banco do Brasil</option>
                <option value="voluntario">Voluntário</option>
                <option value="nao_informado">Não Informado</option>
            </select>
          </div>
          <div className='conjunto-estudante'>
              <label for="agencia-estudante">Agência</label>
              <input type="text" id="agencia-estudante" name="agencia-estudante" pattern="[0-9]*" placeholder="Digite apenas números"/>
          </div>
          <div className='conjunto-estudante'>
              <label for="conta-estudante">Conta</label>
              <input type="text" id="conta-estudante" name="conta-estudante" pattern="[0-9]*" placeholder="Digite apenas números"/>
          </div>
        </div>

        <input className='botao-estudante' type="submit" value="Finalizar Cadastro"/>
    </form>
    <Modal_aviso icone={'success'} aviso={'Cadastro realizado com sucesso!'} isOpen={showModal} onRequestClose={closeModal} closeModal={closeModal}/>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default Cadastro_estudante

