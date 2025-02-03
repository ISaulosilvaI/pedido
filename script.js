document.getElementById('simButton').addEventListener('click', function() {
    document.getElementById('resposta').textContent = 'Obrigado por aceitar o pedido! Irei te dar muito amor e carinho, mas peço quer tenha paciência comigo!!';
});

document.getElementById('naoButton').addEventListener('click', function() {
    const naoButton = document.getElementById('naoButton');
    document.getElementById('resposta').textContent = alert('Você não tem essa opção');
    const maxWidth = window.innerWidth - naoButton.offsetWidth;
    const maxHeight = window.innerHeight - naoButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    naoButton.style.left = randomX + 'px';
    naoButton.style.top = randomY + 'px';
});
