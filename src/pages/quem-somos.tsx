import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  Main, 
  Contain, 
  MinHeader, 
  Title, 
  Text
} from '../styles/pages/quem-somos'

const  QuemSomos: React.FC = () => {
  
  return (
    <div>
      <Head>
        <meta name="robots" content="none" />
        <meta name="title" content="Salão de eventos Matola Ingadi" />
        <meta
          name="description"
          content="Melhor lugar para festas e grandes eventos em Moçambique"
        />
        <meta 
          name="keywords" 
          content="
            eventos, matola, maputo, salão, ingadi, festas, festa, casamentos, casamentos, batismos, batismo, aniversários, aniversário, comemoração, bons, momentos
          "
        />
        <title>Sobre Matola Ingadi</title>
      </Head>

      <Header />
      <Main>
        <MinHeader>
          <h1>Bem vindo a Matola Ingadi</h1>
        </MinHeader>
        <Contain>
          <Title>
            <h2>Sobre nós</h2>
          </Title>
          <Text>
            <p>
              A palavra Ingadi provem do Zulu que significa jardim, Matola Ingadi é mais do que um salão de eventos é um jardim onde sonhos são realizados, onde os nossos clientes na companhia daqueles que mais amam realizam os seus eventos e ficam com a memória do verde do nosso jardim para sempre marcada nas suas mentes. 
              Matola Ingadi inspira tranquilidade, traz uma fusão entre a natureza e o modernismo.
            </p>

            <p>
              <br/>
              Matola Ingadi localiza-se na Matola, depois do Externato Cantinho do Céu e Condomínio Niketche vindo pelo lado da Shopripe para Malhapsene. Estamos cercado pelo verde do rio Matola, onde, estando no nosso salão é possível ver uma paisagem verde junto com o cair do sol.
              <br/><br/>
              Todo o nosso esforço é para garantir que o cliente saia feliz do nosso estabelecimento e que venha mais vezes.
            </p>
          </Text>
        </Contain>
      </Main> 
      <Footer
       homePage={false}
      />
    </div>
  )
}

export default QuemSomos