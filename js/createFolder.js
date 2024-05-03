function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        console.error('No file selected.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const fileContent = event.target.result;
        const fileType = getFileType(file.name);
        const fileInfo = {
            userID: 1, // harcodeadisimo 
            name: file.name,
            type: fileType,
            size: file.size,
            content: fileContent // Guarda el contenido del archivo
        };
        console.log('Información del archivo:');
        console.log(fileInfo);

        // Envía la información del archivo a tu API
        sendToAPI(fileInfo);
    };

    reader.onerror = function(event) {
        console.error(`Error al leer ${file.name}:`, event.target.error);
    };

    // Leer el contenido del archivo como texto
    reader.readAsText(file);
}

function getFileType(filename) {
    const dotIndex = filename.lastIndexOf('.');
    if (dotIndex !== -1) {
        return filename.substring(dotIndex + 1);
    }
    return 'Unknown';
}

function sendToAPI(fileInfo) {
    // Aquí puedes enviar fileInfo a tu API usando fetch o cualquier otra técnica
    // Por ejemplo:
    // fetch('tu-api-endpoint', {
    //     method: 'POST',
    //     body: JSON.stringify(fileInfo),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(response => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw new Error('Network response was not ok.');
    // })
    // .then(data => {
    //     console.log('Respuesta de la API:', data);
    // })
    // .catch(error => {
    //     console.error('Error al enviar a la API:', error);
    // });
}