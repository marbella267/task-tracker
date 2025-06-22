# Task Manager CLI
project url https://roadmap.sh/projects/task-tracker
A simple Node.js command-line tool to manage your tasks—add, update, delete, list, and change task statuses with ease. Data is stored locally in a `tasks.json` file.

## 📦 Features

- Add new tasks with a description
- List all tasks or filter by status
- Update a task's description
- Delete tasks by ID
- Change status to `in-progress` or `done`

## 🚀 Getting Started
npm install
### 1. Clone the project
git clone https://github.com/your-username/task-manager-cli.git
cd task-manager-cli
### run the script
TaskTr <command> [parameters]

## ⚙ Available Commands.
| Command            | Description                      | Example                               |
|--------------------|----------------------------------|----------------------------------------|
| `add`              | Add a new task                   | `taskTr add "New task"`         |
| `list`             | List all tasks                   | `taskTr list`                   |
| `update`           | Update task by ID                | `taskTr update 2 "Update text"` |
| `delete`           | Delete task by ID                | `taskTr delete 3`               |


## 🗃 Data Format

All tasks are stored in `tasks.json` with this structure:

```json
{
  "id": 1,
  "description": "Sample task",
  "status": "todo",
  "createdAt": "2025-06-22T19:00:00.000Z",
  "updatedAt": null
}
