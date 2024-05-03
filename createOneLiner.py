import re

def convertir_a_una_linea(texto):
    # Eliminar saltos de línea y espacios al principio de cada línea
    texto_sin_enters = texto.replace("\n", "")
    texto_sin_espacios = re.sub(r'>\s*', '>', texto_sin_enters)
    return texto_sin_espacios

texto_con_enters = """
<div class="table-row">
            <div class="table-l">
                <h1>Identificador_cambios_python</h1>
                <div class="table-l-d">
                    <h2>Create: 27/03/23</h2>
                    <h2>Modified: Last Week</h2>
                </div>
            </div>
            <div class="table-r" >
                <div class="table-r-l">
                    <button class="btn" onclick="goTo()">Acceder</button>
                    <h2>Versions: 5</h2>
                </div>
                <div class="table-r-r">
                    <p style="font-size: 20px;">Delete?</p>
                    <img src="../img/delete.png" alt="" class="delete" onclick="delFolder()">
                </div>
            </div>
        </div>
"""

texto_sin_enters_ni_espacios = convertir_a_una_linea(texto_con_enters)
print(texto_sin_enters_ni_espacios)
