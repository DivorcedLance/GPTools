import pyperclip

# Pasos de uso para el usuario:
# 1. Coloca el texto que deseas dividir en el archivo text_to_copy.txt.
# 2. Ejecuta el script en tu entorno de desarrollo o línea de comandos.
#    Debes tener instalado el módulo pyperclip. 
#    Para instalarlo, ejecuta los siguiente comandos:
#       python -m venv venv
#       venv\Scripts\activate
#       pip install -r requirements.txt
# 3. El script copiará fragmentos del texto en el portapapeles de forma secuencial.
#    Después de copiar cada fragmento, te pedirá una entrada en la consola.
# 4. Presiona Enter para permitir que el script continúe y copie el siguiente fragmento.
#    Repite este paso cada vez que se te solicite.
# 5. Continúa repitiendo el paso anterior hasta que el script haya copiado y procesado todos
#    los fragmentos del texto.

def copy_text_in_chunks(filename, size):
    """
    Copia un texto largo en fragmentos más pequeños al portapapeles para su procesamiento secuencial.

    Args:
        filename (str): El nombre del archivo de texto que se va a procesar.
        size (int): El tamaño deseado para los fragmentos en bytes.

    Returns:
        None
    """

    # Lee el contenido del archivo de texto
    text = open(filename, 'r', encoding='utf-8').read()

    # Divide el texto en fragmentos del tamaño especificado
    chunks = []
    for i in range(0, len(text), size):
        chunk = text[i: i+size]
        chunks.append(chunk)

    # Copia cada fragmento al portapapeles y espera una entrada del usuario para continuar
    while chunks:
        data = chunks.pop(0)
        pyperclip.copy(data)
        input("Presiona Enter para continuar...")

# Uso del código
filename = 'text_to_copy.txt'
size = 1024 * 29

copy_text_in_chunks(filename, size)
