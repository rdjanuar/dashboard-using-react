export const Task = () => {
  return (
    <section className="mx-auto container">
      <div className="flex items-center justify-evenly text-center">
        <div className="bg-white border border-aenjay w-52 h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-dashboardColor">Unresolved</h2>
          <h1 className="text-4xl">60</h1>
        </div>
        <div className="bg-white border border-aenjay w-52 h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-dashboardColor">Overdue</h2>
          <h1 className="text-4xl">16</h1>
        </div>
        <div className="bg-white border border-aenjay w-52 h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-dashboardColor">Open</h2>
          <h1 className="text-4xl">43</h1>
        </div>
        <div className="bg-white border border-aenjay w-52 h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-dashboardColor">On hold</h2>
          <h1 className="text-4xl">64</h1>
        </div>
      </div>
    </section>
  );
};
