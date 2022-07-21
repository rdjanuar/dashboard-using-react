export const Task = ({ books, isDone, isReading, users }) => {
  return (
    <section className="mx-auto container">
      <div className="flex items-center justify-evenly text-center">
        <div className="bg-white border border-aenjay w-52 h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-dashboardColor">Jumlah Buku</h2>
          <h1 className="text-4xl">{books.totalData}</h1>
        </div>
        <div className="bg-white border border-aenjay w-52 h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-dashboardColor">Sudah Selesai</h2>
          <h1 className="text-4xl">{isDone}</h1>
        </div>
        <div className="bg-white border border-aenjay w-52 h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-dashboardColor">Sedang Dibaca</h2>
          <h1 className="text-4xl">{isReading}</h1>
        </div>
        <div className="bg-white border border-aenjay w-52 h-32 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-dashboardColor">Users</h2>
          <h1 className="text-4xl">{users}</h1>
        </div>
      </div>
    </section>
  );
};
