import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
 
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
 
  function addTask() {
    const trimmed = task.trim();
    if (!trimmed) return;
    setTasks([...tasks, { text: trimmed, done: false }]);
    setTask('');
  }
 
  function toggleTask(index) {
    setTasks(tasks.map((t, i) => i === index ? { ...t, done: !t.done } : t));
  }
 
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
 
  return (
    <div className="min-h-screen bg-[#0d0d0f] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
 
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-xs tracking-widest text-orange-500 uppercase">Personal</span>
          <h1 className="text-4xl text-white mt-1 font-serif">Task List</h1>
        </div>
 
        {/* Card */}
        <div className="bg-[#141416] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
 
          {/* Input row */}
          <div className="flex border-b border-white/10">
            <input
              type="text"
              value={task}
              onChange={e => setTask(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTask()}
              placeholder="What needs doing?"
              className="flex-1 bg-transparent text-white placeholder-white/20 text-sm px-5 py-4 outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            />
            <button
              onClick={addTask}
              className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-white text-sm font-medium px-6 transition-all duration-150 shrink-0"
            >
              + Add
            </button>
          </div>
 
          {/* Empty state */}
          {tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-white/20 text-sm">No tasks yet. Add one above.</p>
            </div>
          ) : (
            <>
              {/* Task list */}
              <ul className="divide-y divide-white/5">
                {tasks.map((t, i) => (
                  <li key={i} className="group flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.03] transition-colors duration-100">
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleTask(i)}
                      className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200
                        ${t.done ? 'bg-orange-500 border-orange-500' : 'border-white/20 hover:border-orange-400'}`}
                    >
                      {t.done && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
 
                    {/* Text */}
                    <span className={`flex-1 text-sm transition-all duration-200 ${t.done ? 'line-through text-white/25' : 'text-white/80'}`}>
                      {t.text}
                    </span>
 
                    {/* Delete */}
                    <button
                      onClick={() => deleteTask(i)}
                      className="opacity-0 group-hover:opacity-100 shrink-0 w-6 h-6 flex items-center justify-center text-white/20 hover:text-red-400 transition-all duration-150"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
 
              {/* Footer */}
              <div className="border-t border-white/10 px-5 py-3 flex items-center justify-between">
                <span className="text-white/30 text-xs">
                  {tasks.filter(t => !t.done).length === 0
                    ? 'All done 🎉'
                    : `${tasks.filter(t => !t.done).length} of ${tasks.length} remaining`}
                </span>
                <button
                  onClick={() => setTasks([])}
                  className="text-white/20 hover:text-red-400 text-xs transition-colors duration-150"
                >
                  Clear all
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
 
export default App;