import difflib

# Abre los archivos deseados
def leer_archivo(nombre_archivo):
    with open(nombre_archivo, 'r') as archivo:
        return archivo.readlines()
contenido_v1 = leer_archivo('version1.cpp')
contenido_v2 = leer_archivo('version2.cpp')

# Genera el archivo Html
diferencia_html = difflib.HtmlDiff()
html_diferencias = diferencia_html.make_file(contenido_v1, contenido_v2, fromdesc='version1.cpp', todesc='version2.cpp')
with open('./html/diferencias.html', 'w', encoding='utf-8') as archivo_html:
    archivo_html.write(html_diferencias)
