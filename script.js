const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

const illustration = document.querySelector(".illustration-mensagem");
const texto1 = document.querySelector(".texto-1-mensagem");
const texto2 = document.querySelector(".texto-2-mensagem");

function codificar() {
    let texto = textArea.value.toLowerCase();
    
    let codificacao = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    mensagem.value = codificacao;

    illustration.style.display = "none";
    texto1.style.display = "none";
    texto2.style.display = "none";

}

function decodificar() {
    let texto = textArea.value.toLowerCase();

    let decodificacao = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    mensagem.value = decodificacao;

    illustration.style.display = "none";
    texto1.style.display = "none";
    texto2.style.display = "none";
}

function copiar() {
    mensagem.select();
    document.execCommand("copy");
    alert('Seu texto foi copiado!');
}
