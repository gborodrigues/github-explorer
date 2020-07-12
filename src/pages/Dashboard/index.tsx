import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo-git.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios do Github</Title>

    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/22913156?s=460&u=b4e1ee0b535ee06a4796e215f21232e5244f1717&v=4"
          alt="Gabriel"
        />
        {/* Quando há um eixo horizontal criar uma nova div */}
        <div>
          <strong>repository</strong>
          <p>Descrição</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
