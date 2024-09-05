document.getElementById('notiI').addEventListener('click', function() {
    var popup = document.getElementById('popupWindow');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});
