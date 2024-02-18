
const loadTasks = async () => {
  const res = await fetch('http://localhost:3000/api/tasks')
  const data = await res.json()
  return data.data
}

const Home = async () => {
  const tasks = await loadTasks()

  return (
    <section className="container mx-auto py-10 px-5">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div key={task.title} className="bg-slate-900 p-3 hover:bg-slate-600 hover:cursor-pointer">
            <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;