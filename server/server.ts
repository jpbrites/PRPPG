import express, { response } from 'express'
import { pool } from './mysql';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import {hash} from 'bcrypt';

const app = express();
app.use(express.json());

//CADASTRO DE ESTUDANTE
app.post('/cadastro2', (req, res) => {
  const { nome, sexo, data, telefone, cotista, email, senha, cpf, rg, dataemissao, emissor } = req.body;
  const dataNascimentoFormatada = moment(data, 'DD/MM/YYYY');
  let dataEmissao = '';
  //VALIDACAO DATA DE NASCIMENTO
  if (!dataNascimentoFormatada.isValid()) {
    console.error('Data de nascimento inválida:', data);
    return res.status(400).json({ error: 'Data de nascimento inválida' });
  }
  const dataNascimento = dataNascimentoFormatada.format('YYYY-MM-DD');

  //VALIDACAO DATA DE EMISSAO
  if(dataemissao === ''){
    console.log('entrou')
    
  }
  else{
    const dataEmissaoFormatada = moment(dataemissao, 'DD/MM/YYYY');
    if (!dataEmissaoFormatada.isValid()) {
      console.error('Data de emissão inválida:', dataemissao);
      return res.status(400).json({ error: 'Data de emissão inválida' });
    }
    dataEmissao = dataEmissaoFormatada.format('YYYY-MM-DD');
  }


  pool.getConnection((error, connection) => {
    if (error) {
      console.error('Erro ao obter conexão do pool:', error);
      return res.status(500).json({ error: 'Erro ao obter conexão do pool' });
    }
    hash(senha, 10, (error, hash)=>{
      if(error){
        return response.status(500).json(error);
      }
      connection.query(
        'INSERT INTO alunos (nome, sexo, data_nascimento, telefone, cotista, email, senha, cpf, rg, data_emissao, emissor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nome,sexo,dataNascimento,telefone,cotista,email, hash, cpf, rg, dataEmissao, emissor],
        (error, results) => {
          connection.release(); // Liberar a conexão
          if (error) {
            console.error('Erro ao inserir registroooo:', error);
            let field = '';
            if (error.code === 'ER_DUP_ENTRY') {
              // Verificar qual campo está duplicado com base na mensagem de erro
              if (error.sqlMessage?.includes('email')) {
                field = 'email';
              } else if (error.sqlMessage?.includes('cpf')) {
                field = 'cpf';
              }
            }
            return res.status(500).json({ error: 'Erro ao inserir registro', errorCode: error.code, field });  
          }
          console.log('Registro inserido com sucessooo!');
          return res.status(200).json({ success: true });
        }
      );
    })
  });
});

app.listen(3001, () => {
  console.log('Servidor está executando na porta 3001');
});
  
