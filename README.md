# Task Management Application

This is a simple task management application built with **React** and **TypeScript**, allowing users to manage tasks with basic functionality and features such as adding, completing, deleting, and filtering tasks. It also includes a search feature with debounce and uses React Context API for state management and `localStorage` for persistence.

## Features

- **Add a task**: Users can add new tasks to the list.
- **Mark a task as complete**: Users can mark tasks as completed.
- **Delete a task**: Users can delete tasks from the list.
- **Filter tasks**: Users can filter tasks by:
  - "All"
  - "Completed"
  - "Incomplete"
- **Search tasks**: Users can search through tasks with a debounce feature to improve performance.
- **Responsive Layout**: The app is fully responsive and works on both desktop and mobile screens.
- **State Management**: Uses **React Context API** for managing application state.
- **Data Persistence**: Tasks are stored in `localStorage` so that they persist even after a page reload.

### Bonus

- **Undo-Redo functionality**: Users can undo and redo changes to tasks.

## Requirements

- TypeScript (for type safety)
- React (with hooks like `useState`, `useEffect`)
- Basic form validation (prevent adding empty tasks)
- React Context API for state management
- `localStorage` for data persistence
- Responsive design (mobile and desktop)

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```bash
   cd todo-app
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License.
