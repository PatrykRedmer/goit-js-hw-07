const controls = document.getElementById('controls');
    const input = controls.querySelector('input');
    const createBtn = controls.querySelector('[data-create]');
    const destroyBtn = controls.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createBtn.addEventListener('click', () => createBoxes(input.value));
    destroyBtn.addEventListener('click', destroyBoxes);

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function createBoxes(amount) {
      destroyBoxes();
      let size = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        size += 10;
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }