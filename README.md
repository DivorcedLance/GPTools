# GPTools: Herramientas para Optimizar el Uso de ChatGPT

Este repositorio, GPTools, contiene dos herramientas principales diseñadas para mejorar tu interacción con la interfaz de ChatGPT: CopyGPT y AutoContinue.

## CopyGPT

CopyGPT es un script en Python que divide un archivo de texto grande en fragmentos de un tamaño especificado y los copia secuencialmente al portapapeles. Este método es útil cuando necesitas procesar un texto grande en ChatGPT. Para usarlo:

1. Coloca el texto que deseas dividir en el archivo text_to_copy.txt.
2. Ejecuta el script (copy_GPT.py) en tu entorno de desarrollo Python o línea de comandos. Debes tener instalado el módulo pyperclip. Para instalarlo, ejecuta los siguientes comandos:
    ```
    python -m venv venv
    venv\Scripts\activate
    pip install -r requirements.txt
    ```
3. El script copiará fragmentos del texto al portapapeles uno a la vez. Después de copiar cada fragmento, te pedirá que presiones Enter en la consola.
4. Presiona Enter para permitir que el script continúe y copie el siguiente fragmento.
5. Continúa presionando Enter cuando se te solicite hasta que el script haya copiado todos los fragmentos de texto.

## AutoContinue

AutoContinue es un script en JavaScript que detecta y hace clic automáticamente en el botón "Continue generating" en la interfaz web de ChatGPT tan pronto como aparece. Para usarlo:

1. Abre la página de ChatGPT en tu navegador.
2. Abre la consola de desarrollador (Ctrl+Shift+I en Chrome).
3. Copia y pega el código JavaScript proporcionado en la consola.

``` js
// Función para detectar y presionar el botón
function detectAndClickButton() {
  // Obtener todos los botones en el documento
  var buttons = document.getElementsByTagName('button');

  // Recorrer los botones y verificar si contienen el texto deseado
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var buttonText = button.textContent || button.innerText;

    // Verificar si el botón contiene el texto específico
    if (buttonText === 'Continue generating') {
      // Simular un clic en el botón
      button.click();
      console.log('Se ha presionado el botón "Continue generating".');
      break; // Salir del bucle una vez que se haya encontrado y presionado el botón
    }
  }
}

// Observador de mutación para detectar cambios en el DOM
var observer = new MutationObserver(function(mutations) {
  // Verificar cada mutación
  mutations.forEach(function(mutation) {
    // Verificar si el nodo agregado es un botón
    if (mutation.addedNodes) {
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        var addedNode = mutation.addedNodes[i];

        // Verificar si el nodo es un botón
        if (addedNode.nodeName === 'BUTTON') {
          // Verificar si el botón contiene el texto específico
          var buttonText = addedNode.textContent || addedNode.innerText;
          if (buttonText === 'Continue generating') {
            // Simular un clic en el botón
            addedNode.click();
            console.log('Se ha presionado el botón "Continue generating".');
            return; // Salir del bucle y la función si se ha presionado el botón
          }
        }
      }
    }
  });
});

// Configurar y activar el observador de mutación
var observerConfig = {
  childList: true,
  subtree: true
};
observer.observe(document.body, observerConfig);

// Llamar a la función detectAndClickButton para buscar y presionar el botón inicialmente
detectAndClickButton();
```

4. Presiona Enter para ejecutar el código.
5. ¡Eso es todo! El botón "Continue generating" se presionará automáticamente cuando aparezca.

¡Feliz interacción con ChatGPT!

## Contribución

Si tienes alguna idea o mejora, no dudes en abrir un pull request o issue. Tu contribución es bienvenida.

## Licencia

GPTools se lanza bajo la [MIT License](LICENSE).

## Descargo de responsabilidad

Este software se proporciona "tal cual", sin garantía de ningún tipo.