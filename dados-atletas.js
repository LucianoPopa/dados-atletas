class Atleta {
    constructor(nome, idade, peso, altura, notas) {
       this.nome = nome;
       this.idade = idade;
       this.peso = peso;
       this.altura = altura;
       this.notas = notas;
    }
    
    calculaCategoria() {
       this.catAtleta;
       if (this.idade >= 9 && this.idade <= 11) {
          this.catAtleta = "Infantil";
       }
       else if (this.idade >= 12 && this.idade <= 13) {
          this.catAtleta = "Juvenil";
       }
       else if (this.idade >= 14 && this.idade <= 15) {
          this.catAtleta = "Intermediário";
       }
       else if (this.idade >= 16 && this.idade <= 30) {
          this.catAtleta = "Adulto"
       } else {
          this.catAtleta = "Sem categoria"
       }
    }
    
     calculaIMC() {
       this.imcAtleta = this.peso / (this.altura * this.altura); 
    }
 
    calculaMediaValida() {
        let notasAtletas = 0;
        this.notas.sort(function(a, b) {
           return a - b; 
        });
        this.mediaAtletas = this.notas.slice(1, -1)
        this.mediaAtletas.forEach(function(nota) {
            notasAtletas = notasAtletas + nota;
        });
        this.mediaValida =  notasAtletas / this.mediaAtletas.length;
    }
 
    obtemNomeAtleta() {
       return console.log(`Nome: ${this.nome}`); 
    }
 
    obtemIdadeAtleta() {
       return console.log(`Idade: ${this.idade}`); 
    }
 
    obtemPesoAtleta() {
       return console.log(`Peso: ${this.peso}`); 
    }
 
    obtemAlturaAtleta() {
       return console.log(`Altura: ${this.altura}`); 
    }

    obtemNotasAtletas() {
       return console.log(`Notas: ${this.notas.join(", ")}`); 
    }
 
    obtemCategoria() {
       return console.log(`Categoria: ${this.catAtleta}`); 
    }
 
    obtemImc() {
       return console.log(`IMC: ${this.imcAtleta}`); 
    }
 
    obtemMediaValida() {; 
       return console.log(`Média válida: ${this.mediaValida}`); 
    }
 }
 
 const atleta = new Atleta("Cesar Abascal",
     30, 80, 1.70,
     [10, 9.34, 8.42, 10, 7.88]);
 
 atleta.calculaCategoria();
 atleta.calculaIMC();
 atleta.calculaMediaValida();
 atleta.obtemNomeAtleta();
 atleta.obtemIdadeAtleta();
 atleta.obtemPesoAtleta();
 atleta.obtemAlturaAtleta();
 atleta.obtemNotasAtletas();
 atleta.obtemCategoria();
 atleta.obtemImc();
 atleta.obtemMediaValida();
