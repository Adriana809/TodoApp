# TodoApp

TodoApp es una aplicación de lista de tareas sencilla creada con React Native. Permite a los usuarios añadir tareas a una lista compartida y ver todas las tareas añadidas.

## Requisitos

- Node.js (versión 18 recomendada)
- npm o yarn
- React Native CLI

## Instalación

1. **Clonar el repositorio**:
   git clone https://github.com/tu-usuario/TodoApp.git
   cd TodoApp

2. **Instalar dependencias**:
   npm install

3. **Instalar dependencias de navegación**:
   npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

4. **Instalar pods (iOS solamente)**:
   cd ios
   pod install
   cd ..

## Uso

1. **Iniciar la aplicación en Android**:
   npx react-native run-android

2. **Iniciar la aplicación en iOS**:
   npx react-native run-ios

## Descripción de Archivos

- **App.js**: Contiene la configuración principal de la aplicación, incluyendo la navegación.
- **index.js**: Punto de entrada de la aplicación.
- **TaskContext.js**: Define el contexto para manejar la lista de tareas compartida.
- **TaskListScreen.js**: Pantalla para ver todas las tareas añadidas.
- **AddTaskScreen.js**: Pantalla para añadir nuevas tareas a la lista.
- **app.json**: Configuración básica de la aplicación.
- **babel.config.js**: Configuración de Babel.

## Contribuir

1. **Fork** el repositorio
2. **Clonar** tu fork:
   git clone https://github.com/tu-usuario/TodoApp.git

3. **Crear una rama** para tu feature:
   git checkout -b mi-nueva-feature

4. **Hacer commit** de tus cambios:
   git commit -m 'Añadir nueva feature'

5. **Hacer push** a la rama:
   git push origin mi-nueva-feature

6. **Crear un Pull Request**
