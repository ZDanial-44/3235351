<script>
    // Получаем все ссылки в меню
    const links = document.querySelectorAll('.container__a');

    // Перебираем все ссылки и удаляем класс active у них
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active'); // Добавляем класс active к ссылке, по которой кликнули
        });
    });

    // Устанавливаем класс active для первой ссылки при загрузке страницы
    window.addEventListener('DOMContentLoaded', function() {
        links[0].classList.add('active');
    });
</script>
