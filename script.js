document.querySelectorAll('.timeline-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        
        document.querySelectorAll('.timeline-dot').forEach(d => d.classList.remove('active'));
        document.querySelectorAll('.timeline-date').forEach(date => date.classList.remove('active'));
        document.querySelectorAll('.timeline-content').forEach(content => content.classList.remove('active'));

        
        dot.classList.add('active');

        
        const dateElement = dot.nextElementSibling;
        if (dateElement) {
            dateElement.classList.add('active');
        }

      
        const targetId = dot.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
