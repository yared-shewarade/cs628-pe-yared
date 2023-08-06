# Input

The Todo List app takes user input in the form of tasks that need to be added to the list. Users can enter a task description in the input field and click the "Add Task" button to add it to the list. Additionaly, users can click the "Delete" button next to each task to remove it from the list.

# Process

The app uses React and the 'useState' hok to manage the state of the tasks. When the user enters a task description and clicks the "Add Task" button, the app updates the state with the new task. Similarly, when the user clicks the "Delete" button for a task, the app updates the state to remove that task from the list. The app uses the '.map()' function to dynamically render the list of tasks based on the current state.

# Output

The app displays the list of tasks on the screen. Each task is represented as a list item with "Delete" button. When a task is added or deleted, the app dynamically updates the list to reflect the changes. The user can see the current list of tasks and interact with it by adding or removing tasks as needed.

Overall, the Todo List app follows the input-process-output model by taking user input, processing it using React's state management, and displaying the output on the screen in real-time.
