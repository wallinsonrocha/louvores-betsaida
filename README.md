# Repositório de Louvores  

O **Repositório de Louvores** é uma aplicação web desenvolvida para facilitar o acesso dos membros da Igreja Presbiteriana Betsaida ao acervo de louvores cantados pelo Grupo de Louvor. O projeto foi concebido com um foco prioritário em dispositivos móveis, garantindo uma navegação otimizada para os fiéis que utilizam seus celulares como principal meio de comunicação e interação com a igreja.  

## Acesso à Aplicação  

Você pode acessar a aplicação clicando [aqui](https://louvores-betsaida.vercel.app/).

## Objetivo  

A aplicação **Repositório de Louvores** permite que os membros da igreja:  

- **Acessem facilmente os louvores**: Encontre rapidamente músicas utilizadas nos cultos e ensaios.  
- **Visualizem letras e cifras**: Tenha acesso ao material necessário para acompanhamento e estudo dos louvores.
- **Naveguem de forma intuitiva**: Interface simples e direta, pensada para o uso mobile.  

O objetivo é centralizar e organizar o repertório do Grupo de Louvor, tornando a busca por músicas mais ágil e acessível.  

## Recursos  

- **Interface Responsiva e Otimizada para Mobile**: Desenvolvida com *Tailwind CSS*, proporcionando uma experiência fluida em smartphones e tablets.   
- **Typescript e NextJs**: Implementação em *TypeScript* no *NextJs* para maior segurança no desenvolvimento.  
- **Pesquisa Rápida e Filtragem**: Sistema de busca para encontrar louvores de maneira prática.  

## Tecnologias Utilizadas  

- **Next.js 14**: Framework React para otimização do carregamento e renderização eficiente.  
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática e melhora a robustez do código.  
- **Tailwind CSS**: Framework utilitário para estilização ágil e responsiva.
- **API Google**: Foi feita a implementação da API do Google para pegar os dados da Planilha onde os louvores estão.

## Instalação  

### Pré-requisitos  

- **Node.js** (versão 14 ou superior)  
- **npm** ou **yarn**  

### Passos para Instalação  

1. **Clone o Repositório**  

   ```bash
   git clone git@github.com:wallinsonrocha/repositorio-louvores.git
   cd repositorio-louvores
   ```  

2. **Instale as Dependências**  

   Com **npm**:  
   ```bash
   npm install
   ```  
   Ou com **yarn**:  
   ```bash
   yarn install
   ```  

## Execução do Projeto  

### Modo de Desenvolvimento  

Para iniciar o projeto em modo de desenvolvimento:  

```bash
npm run dev
```  
Ou com yarn:  
```bash
yarn dev
```  

Acesse a aplicação através do endereço: [http://localhost:3000](http://localhost:3000)  

### Build e Produção  

1. **Gerar Build de Produção**  

   ```bash
   npm run build
   ```  
   Ou:  
   ```bash
   yarn build
   ```  

2. **Iniciar o Servidor em Modo de Produção**  

   ```bash
   npm start
   ```  
   Ou:  
   ```bash
   yarn start
   ```  
