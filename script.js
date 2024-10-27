<script>
    let currentSlide = 0; // Змінна для зберігання поточного слайда
    const slides = document.querySelectorAll('.slide'); // Вибір усіх слайдів
    const totalSlides = slides.length; // Загальна кількість слайдів

    // Функція для перемикання слайдів
    function showSlide(index) {
        slides[currentSlide].classList.remove('active'); // Сховати поточний слайд
        currentSlide = (index + totalSlides) % totalSlides; // Оновити поточний слайд
        slides[currentSlide].classList.add('active'); // Показати новий слайд
    }

    // Обробка подій для стрілок
    document.querySelector('.left').addEventListener('click', () => {
        showSlide(currentSlide - 1); // Перемикання на попередній слайд
    });

    document.querySelector('.right').addEventListener('click', () => {
        showSlide(currentSlide + 1); // Перемикання на наступний слайд
    });

    // Автоматичне переключення слайдів через 5 секунд
    setInterval(() => {
        showSlide(currentSlide + 1); // Перемикання на наступний слайд
    }, 5000);
</script>
