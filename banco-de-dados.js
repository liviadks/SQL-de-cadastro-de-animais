import { sql } from "./db.js";

export class Database{  //export significa que a classe é publica 

        async create(artigo){
            const id = 10;
            const nome = artigo.nome; //const sao variaveis que nunca tem seu valor alterado
            const descricao = artigo.descricao;
            const conteudo = artigo.conteudo;
            const imagem = artigo.imagem;
            const github = artigo.github;

            await sql`insert into artigos(id, nome, descricao, conteudo, imagem, github) 
            values(${id},${nome}, ${descricao}, ${conteudo}, ${imagem}, ${github}, )` //string js 
        }

}