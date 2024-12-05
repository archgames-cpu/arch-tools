function handleButtonClick(path) {
    // Trigger closing boxes animation
    document.body.classList.add('loading');
    setTimeout(() => {
        window.location.href = path;
    }, 500); // Adjust the timeout to match your CSS transition duration
}

// Disable right-click and keyboard shortcuts
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.onkeydown = (e) => {
    if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) || // Ctrl + Shift + I
        (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) || // Ctrl + Shift + J
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // Ctrl + U
    ) {
        e.preventDefault();
    }
};

// Temporarily remove DOM when inspector is opened
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0))) {
        const body = document.body;
        const html = document.documentElement;
        const temp = document.createElement('div');
        temp.appendChild(body);
        html.appendChild(temp);
        setTimeout(() => {
            html.removeChild(temp);
            body.parentNode.appendChild(body);
        }, 100);
    }
});

// Ripple effect script
document.querySelectorAll('.example-button, .member-botter-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = this.querySelector('.ripple-effect');
        if (ripple) {
            ripple.style.top = `${y}px`;
            ripple.style.left = `${x}px`;
            ripple.classList.add('animate');
            setTimeout(() => {
                ripple.classList.remove('animate');
            }, 500);
        }
    });
});

// Glow effect script
document.addEventListener('mousemove', (e) => {
    const glowEffect = document.getElementById('glow-effect');
    glowEffect.style.top = `${e.clientY}px`;
    glowEffect.style.left = `${e.clientX}px`;
});