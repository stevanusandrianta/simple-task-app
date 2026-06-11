'use client'

import { useState } from 'react'

interface Task {
  id: number
  text: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), text: input.trim(), completed: false }])
    setInput('')
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  // 🐛 BUG: should be tasks.filter(t => t.completed).length
  const completedCount = tasks.length

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Task Manager</h1>

        <p data-testid="summary" className="text-sm text-gray-500 mb-6">
          {completedCount} of {tasks.length} tasks completed
        </p>

        <div className="flex gap-2 mb-6">
          <input
            data-testid="task-input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
            placeholder="Add a task..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            data-testid="add-button"
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3"
            >
              <input
                data-testid="task-checkbox"
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 accent-blue-500"
              />
              <span className={`flex-1 text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-gray-400 hover:text-red-400 text-xs"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
