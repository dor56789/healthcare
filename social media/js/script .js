document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.toggle('liked');
            if (button.classList.contains('liked')) {
                button.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
            } else {
                button.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';
            }
        });
    });

    const replyButtons = document.querySelectorAll('.reply-btn');
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Reply functionality will be added soon!');
        });
    });
});
