import TakCard from "@/components/taskCard"

const loadTasks = async () => {
  const res = await fetch('http://localhost:3000/api/tasks')
  const data = await res.json()
  console.log(data);
  return data.data
}

const Home = async () => {
  const tasks = await loadTasks()

  return (
    <section className="container mx-auto py-10 px-5">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TakCard key={task.id} task={task}/>
        ))}
      </div>
    </section>
  );
}

export default Home;