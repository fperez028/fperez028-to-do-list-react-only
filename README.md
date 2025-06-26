# Basic To-Do List w/ React.js Only

Built using only React.js & Bootstrap with mild CSS styling.

This project can be viewed here:<br>
https://fperez028-to-do-list-react-only.vercel.app/

Features & Functionality<br>
- On load, list is empty
- Tasks are added by typing them into the input field and pressing the Enter key
- When a task is added, a task counter will appear in the lower left corner
    - as tasks are added, counter will increment
    - as tasks are removed, counter will decrement
    - "item" vs "items" will change for 1 task vs multiple tasks
- Tasks can be removed from the list using the red x on the given task line
    - red x is hidden until the pointer hovers over a given line
- Checkbox allows marking of task as "complete" while maintaining the line on the list
    - custom css styling with green checkbox to further signify a "done" status
- When a task is checked as "complete" the completed counter will increment
    - if a task is unchecked, completed counter will decrement
    - if a task is removed while checked, completed counter will decrement