document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const downloadButton = document.getElementById('downloadButton');
        downloadButton.removeAttribute('disabled');
        downloadButton.addEventListener('click', function () {
            const fileURL = URL.createObjectURL(file);
            const a = document.createElement('a');
            a.href = fileURL;
            a.download = file.name;
            a.click();
            URL.revokeObjectURL(fileURL);
        });
    }
});
