//funcao splice

const languages = ['Python', 'C', 'Java'];
console.log(languages);
console.log(languages.splice(1,1)); //ira deletar o elemento do vetor no caso seria a
// possicao 1 a linguagem C
console.log(languages);
console.log(languages.splice(1,0,'C++', 'C#')); //na possicao que foi excluida sera inserido esses
//dois valores
console.log(languages);
console.log(languages.splice(1,2,'C')); //ira retornar ao vetor inicial
console.log(languages);
