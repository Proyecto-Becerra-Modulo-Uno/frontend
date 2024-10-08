document.addEventListener('DOMContentLoaded', function() {
  const url = localStorage.getItem('url'); 
  
  document.querySelectorAll('.btn-accept').forEach(button => {
    button.addEventListener('click', function() {
      const solicitudId = this.getAttribute('data-id');
      updateSolicitud(solicitudId, 2); 
    });
  });

  document.querySelectorAll('.btn-reject').forEach(button => {
    button.addEventListener('click', function() {
      const solicitudId = this.getAttribute('data-id');
      updateSolicitud(solicitudId, 3); 
    });
  });
  
  document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
      const solicitudId = this.getAttribute('data-id');
      updateSolicitud(solicitudId, 2); 
    });
  });

  function updateSolicitud(id_soli, id_estado) {
    fetch(url + `/solicitudes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_soli: id_soli,
        id_estado: id_estado
      })
    })
    .then(response => response.json())
    .then(data => {
      if (!data.error) {
        window.location.reload();
      } else {
        console.error('Error:', data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
});
