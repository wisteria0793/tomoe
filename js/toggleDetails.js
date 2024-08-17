document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggleDetails');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.closest('.room-info').querySelector('.details');
            const arrow = this.querySelector('.arrow');
            if (details.classList.contains('open')) {
                details.classList.remove('open');
                this.innerHTML = 'すべて表示 <i class="fas fa-chevron-down arrow"></i>';
            } else {
                details.classList.add('open');
                this.innerHTML = '閉じる <i class="fas fa-chevron-up arrow"></i>';
            }
        });
    });
});