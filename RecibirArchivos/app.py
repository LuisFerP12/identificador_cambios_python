from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    return """
    <form action="/procesar_archivo" method="post" enctype="multipart/form-data">
        <input type="file" name="archivo" accept=".txt,.pdf,.doc,.docx">
        <input type="submit" value="Enviar Archivo">
    </form>
    """

@app.route('/procesar_archivo', methods=['POST'])
def procesar_archivo():
    archivo = request.files['archivo']
    # Aquí procesas el archivo como desees, por ejemplo, puedes guardarlo en el servidor
    archivo.save(archivo.filename)
    # Luego puedes hacer el procesamiento necesario con Python y generar la respuesta en HTML
    # por ejemplo:
    respuesta_html = "<html><body><h1>Archivo recibido y procesado exitosamente</h1></body></html>"
    return respuesta_html

if __name__ == '__main__':
    app.run(debug=True)
