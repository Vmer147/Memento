// Interactividad de los items del sidebar
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

// Funcionalidad de checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        this.parentElement.classList.toggle('completed');
    });
});

// Botón de añadir tarea
document.querySelector('.add-task').addEventListener('click', function() {
    alert('Funcionalidad de añadir tarea');
});

// Hacer que los items de tareas sean clickeables y carguen detalles
document.querySelectorAll('.task-item').forEach(task => {
    task.addEventListener('click', function(e) {
        if (e.target.tagName !== 'INPUT') {
            const taskText = this.querySelector('.task-text').textContent;
            document.querySelector('.details-header h2').textContent = taskText;
        }
    });
});