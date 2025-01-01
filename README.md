# **Task Tracker CLI**

A simple command-line interface (CLI) tool to track and manage your tasks. This tool allows you to add, update, delete, and mark tasks with statuses, while storing the data in a JSON file.

## **Features**

- Add new tasks with descriptions.
- Update or delete tasks by Id.
- Mark tasks as todo,in-progress or done.
- List tasks with filters based on their statuses.
- Persist tasks in a JSON file for easy storage and retrival.

## **Installation**

1. Clone the repository.

```bash
git clone https://github.com/07krW5Hnr5ghy/task-tracker-cmd
cd task-tracker-cmd
```

## **Usage**

### **Add a New Task**

```bash
task-cli add "Your task description"
```

**Example**:

```bash
task-cli add "Buy groceries"
```

### **List Tasks**

List all tasks:

```bash
task-cli list
```

Filter tasks by status:

```bash
task-cli list todo        # Lists tasks marked as todo
task-cli list in-progress # Lists tasks in progress
task-cli list done        # Lists completed tasks
```

### **Update a Task**

Update a task description:

```bash
task-cli update <Task ID> "New description"
```

**Example**:

```bash
task-cli update 1 "Buy groceries and cook dinner"
```

### **Delete a Task**

Delete a task by ID:

```bash
task-cli delete <Task ID>
```

**Example**:

```bash
task-cli delete 1
```

### **Mark a Task**

Mark a task as in-progress or done:

```bash
task-cli mark-in-progress <Task ID>
task-cli mark-done <Task ID>
```

**Examples**:

```bash
task-cli mark-in-progress 1
task-cli mark-done 1
```

---

## **How It Works**

- **Task Storage**: Tasks are stored in a `tasks.json` file in the current working directory.
- **Task Properties**:
  - `id`: Unique identifier for each task.
  - `description`: Short description of the task.
  - `status`: One of `todo`, `in-progress`, or `done`.
  - `createdAt`: Timestamp when the task was created.
  - `updatedAt`: Timestamp when the task was last modified.

### **Example `tasks.json` File**

```json
[
  {
    "id": 1,
    "description": "Buy groceries",
    "status": "todo",
    "createdAt": "2024-12-29T12:00:00",
    "updatedAt": "2024-12-29T12:00:00"
  }
]
```

---

## **Error Handling**

- **Invalid Commands**: Displays usage information for invalid or unsupported commands.
- **Nonexistent Tasks**: Alerts when trying to update, delete, or mark a task that doesn’t exist.
- **Empty List**: Informs the user when there are no tasks to display.

---

## **Development**

### **File Structure**

```
task-tracker-cli/
├── bin/index.js   # Main CLI script
├── tasks.json    # JSON file storing tasks (auto-created on first run)
└── README.md     # Documentation
```

## project url

https://roadmap.sh/projects/task-tracker
