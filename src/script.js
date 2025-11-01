// Управление модальными окнами
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все карточки проектов (кроме coming-soon)
    const projectCards = document.querySelectorAll('.project-card:not(.coming-soon)');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Открытие модального окна
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(`modal-${modalId}`);
            
            if (modal) {
                openModal(modal);
            }
        });
    });

    // Закрытие модального окна по крестику
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Закрытие модального окна по клику на фон
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });

    // Закрытие модального окна по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });

    // Функция открытия модального окна
    function openModal(modal) {
        // Небольшая задержка для плавной анимации
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        // Блокируем скролл страницы
        document.body.style.overflow = 'hidden';
    }

    // Функция закрытия модального окна
    function closeModal(modal) {
        modal.classList.remove('show');
        // Разблокируем скролл страницы
        document.body.style.overflow = 'auto';
    }
});
