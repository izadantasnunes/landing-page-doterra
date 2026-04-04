// Inicializar ícones
        lucide.createIcons();

        // Inicializar Animações
        AOS.init({
            duration: 1000,
            once: true
        });

        // Simulação de Formulário
        document.getElementById('leadForm').addEventListener('submit', function(e) {
            e.preventDefault();
            this.classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
        });

        // Contador Regressivo
        let hours = 1;
        let minutes = 59;
        let seconds = 59;

        function updateTimer() {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
            
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        }

        setInterval(updateTimer, 1000);

        document.querySelectorAll('a[href="#oferta"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#oferta').scrollIntoView({
            behavior: 'smooth'
        });
    });
});