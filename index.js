// ESTO VA CON LA API DEL G LUEGO LO MUEVO
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.use(express.static(path.join(__dirname, 'html')));

app.get('/diferences', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'diferences.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
