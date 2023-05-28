/*
Este código se ejecuta en la página de ChatGPT. Detecta cuando aparece el botón 
"Continue generating" y lo presiona automáticamente.

Para usarlo sigue los siguientes pasos:
1. Abre la página de ChatGPT en tu navegador.
2. Abre la consola de desarrollador (Ctrl+Shift+I en Chrome).
3. Copia y pega este código en la consola.
4. Presiona Enter para ejecutar el código.
5. ¡Listo! El botón "Continue generating" se presionará automáticamente.
*/


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
