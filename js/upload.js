document.addEventListener('DOMContentLoaded', () => {
    const placeholders = document.querySelectorAll('.upload-placeholder');

    placeholders.forEach(placeholder => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            placeholder.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            placeholder.addEventListener(eventName, () => {
                placeholder.classList.add('drag-over');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            placeholder.addEventListener(eventName, () => {
                placeholder.classList.remove('drag-over');
            }, false);
        });

        placeholder.addEventListener('drop', handleDrop, false);

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            console.log('Files dropped:', files);
            // In a real app, we would handle the files here.
            // For the prototype, we just provide visual feedback.
            alert('File dropped successfully! (Prototype)');
        }
    });
});
