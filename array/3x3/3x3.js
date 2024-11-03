function shuffleNumbers() {
    let grid = document.getElementById('numberGrid');
    let numbers = Array.from(grid.children);
    
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i].innerText, numbers[j].innerText] = [numbers[j].innerText, numbers[i].innerText];
    }
}
