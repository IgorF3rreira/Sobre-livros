function livros(title, txt, link ) {
    const modal = document.getElementById('modalExemplo');
    var titulo = document.getElementById('titulo');
    var modalBody = document.getElementById('corpo');
    var linkModal = document.getElementById('link');
    titulo.innerText = title;
    linkModal.href = link;
    modalBody.innerText = txt;
    modal.style.display = 'block';
}