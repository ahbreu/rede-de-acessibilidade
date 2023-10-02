document.addEventListener('DOMContentLoaded', function () {
    var currentPage = 0;
    var totalPages = 9; // Total de páginas, incluindo a página 0

    function showPage(pageNumber) {
        var pages = document.querySelectorAll('.page');
        pages.forEach(function (page) {
            page.style.display = 'none';
        });

        var pageToShow = document.getElementById('page' + pageNumber);
        if (pageToShow) {
            pageToShow.style.display = 'block';
        }

        currentPage = pageNumber;
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        var prevButton = document.querySelector('.prev-button');
        var homeButton = document.querySelector('.home-button');
        var nextButton = document.querySelector('.next-button');

        // Habilita ou desabilita o botão "Anterior"
        if (currentPage === 0) {
            prevButton.disabled = true;
            homeButton.style.display = 'none';
        } else {
            prevButton.disabled = false;
            homeButton.style.display = 'block';
        }

        // Habilita ou desabilita o botão "Próxima"
        if (currentPage === totalPages) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    showPage(0); // Mostra a página inicialmente

    // Lidar com o botão "Tela Inicial"
    var homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click', function () {
        showPage(0);
    });

    // Lidar com o botão "Anterior"
    var prevButton = document.querySelector('.prev-button');
    prevButton.addEventListener('click', function () {
        if (currentPage > 0) {
            showPage(currentPage - 1);
        }
    });

    // Lidar com o botão "Próxima"
    var nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });
});
