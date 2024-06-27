document.getElementById('showMessage').addEventListener('click', function() {
    var messageDiv = document.getElementById('message');
    if (messageDiv.classList.contains('hidden')) {
        messageDiv.classList.remove('hidden');
    } else {
        messageDiv.classList.add('hidden');
    }
});