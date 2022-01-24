const sendForm = () => {
    const form = document.querySelector('.card-details__button_delivery');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');
    const modalTitle = document.querySelector('.modal__title');
    const cartTitle = document.querySelector('.card-details__title');
    const modalForm = modal.querySelector('form');
    const modalSubmit = document.querySelector('.modal__submit');

    form.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = cartTitle.textContent;
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modalSubmit.addEventListener('click', (event) => {
        modal.style.display = 'none';
    });

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        event.target.reset();

        const labels = modal.querySelectorAll('.modal__label');

        const sendMessage = {};

        labels.forEach(label => {
            const span = label.querySelector('span');
            const input = label.querySelector('input');

            sendMessage[span.textContent] = input.value;
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(sendMessage),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(() => console.log('Отправлено'));
        });

    
};

sendForm();