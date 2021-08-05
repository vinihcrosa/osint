# osint CLI

## Instalação

Para instalar a cli osint é necessário ter o node v14+ instalado na máquina.
Após baixar ou clonar o repositório rode os seguintes comandos:

```shell
npm install
npm link
```

Após isso a cli já estará instalada no seu computador.

## Comandos

### Config

- --print -> Imprime as configurqações e se estão ou não configuradas

- --add -> Sdicionar uma configuração.

### Instances

- --get -> Retorna todas as instances que estão no elasticsearch

- --post -> Adiciona uma instance

  - -j -> Adiciona as instances de um arquivo JSON especificado com a estrutura:

  ```json
  {
    instances: [{
      name: "name",
      target: "target",
      tags: ['tag1', 'tag2', ...]
    },
    ...
    ]
  }
  ```

### Spiderfoot

- --scan -> Inicia o scan das instances que estão no eslasticsearch

# License

MIT - see LICENSE
