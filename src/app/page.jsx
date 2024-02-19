import TakCard from "@/components/taskCard"

const loadTasks = async () => {
  const res = await fetch('http://localhost:3000/api/tasks', {
    method: 'GET',
    cache: 'no-store',
  })
  const data = await res.json()
  return data.data
}

const Home = async () => {
  const tasks = await loadTasks()
  return (
    <section className="container mx-auto py-10 px-5">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TakCard key={task.id} task={task}/>
        ))}
      </div>
    </section>
  );
}

export default Home;