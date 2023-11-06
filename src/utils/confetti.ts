import confetti from 'canvas-confetti'

export function initConfetti(event: MouseEvent) {
    console.log(event.clientX, event.clientY);
    confetti({
        startVelocity: 10,
        particleCount: 50,
        spread: 360,
        scalar: 0.8,
        decay: 0.9,
        shapes: ['circle', 'square'],
        // colors: ['#ffffff', '#ff0000', '#fcd8d8'],
        colors: ['#fdfcff', '#d28da4', '#c8322e'],
        origin: {
            x: event.clientX / window.innerWidth,
            y: event.clientY / window.innerHeight
        }
    });

    // // do this for 30 seconds
    // var duration = 30 * 1000;
    // var end = Date.now() + duration;

    // (function frame() {
    //     // launch a few confetti from the left edge
    //     confetti({
    //         particleCount: 7,
    //         angle: 60,
    //         spread: 55,
    //         origin: { x: 0 }
    //     });
    //     // and launch a few from the right edge
    //     confetti({
    //         particleCount: 7,
    //         angle: 120,
    //         spread: 55,
    //         origin: { x: 1 }
    //     });

    //     // keep going until we are out of time
    //     if (Date.now() < end) {
    //         requestAnimationFrame(frame);
    //     }
    // }());
}