document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accountId = this.getAttribute('data-id');
            
            console.log('Edit account with ID:', accountId);
        });
    });
}); 