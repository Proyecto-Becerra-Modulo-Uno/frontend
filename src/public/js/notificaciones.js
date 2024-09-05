document.getElementById('notiI').addEventListener('click', function() {
    const popup = document.getElementById('popupWindow');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'flex' : 'none';
  });