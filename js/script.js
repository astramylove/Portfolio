VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1d1d1d, 
    waveHeight: 30.00,
    waveSpeed: 0.50,
});

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    let isOverlapping;
    let x, y;

    do {
        const container = document.querySelector('.container');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        x = Math.random() * (containerWidth - 50);
        y = Math.random() * (containerHeight - 50);

        isOverlapping = false;
        squares.forEach(otherSquare => {
            if (otherSquare !== square) {
                const otherX = parseFloat(otherSquare.style.left) || 0;
                const otherY = parseFloat(otherSquare.style.top) || 0;

                if (
                    x < otherX + 50 &&
                    x + 50 > otherX &&
                    y < otherY + 50 &&
                    y + 50 > otherY
                ) {
                    isOverlapping = true;
                }
            }
        });
        
    } while (isOverlapping); 

    square.style.left = `${x}px`;
    square.style.top = `${y}px`;

    const delay = Math.random() * 2; 
    square.style.animationDelay = `${delay}s`;
});


