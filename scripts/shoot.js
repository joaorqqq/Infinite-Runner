document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        shoot();
    }
});

function shoot() {
    const shot = document.createElement('img');
    shot.src = 'images/shot.png';
    shot.className = 'shot';
    document.body.appendChild(shot);

    shot.style.position = 'absolute';
    shot.style.left = '50px'; // Ajuste conforme necessário
    shot.style.top = '300px'; // Ajuste conforme necessário

    let shotInterval = setInterval(function() {
        let top = parseInt(shot.style.top);
        if (top <= 0) {
            clearInterval(shotInterval);
            document.body.removeChild(shot);
        } else {
            shot.style.top = (top - 5) + 'px'; // Ajuste a velocidade conforme necessário
        }
    }, 20);
}
