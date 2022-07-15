import sort from "../../assert/img/icons/sort.svg";

export const Dashboard = ({ books, sortBooks, search, alt }) => {
  return (
    <main className="bg-white w-999 h-3/5 rounded-lg border border-aenjay mx-10.5 mt-8">
      <div className="mx-auto container">
        <div className="flex justify-between items-center mx-20 pt-6 ">
          <h1 className="text-priceColor font-bold tracking-wider">
            All books
          </h1>
          <input
            type="search"
            placeholder="Search Book"
            onChange={search}
            className="bg- rounded-lg p-0.5 border border-aenjay placeholder:text-center"
          ></input>
          <div className="flex itmes-center">
            <img src={sort} className="cursor-pointer" alt={alt} />
            <button className="" onClick={sortBooks}>
              Sort
            </button>
          </div>
        </div>
      </div>
      <table className="container mx-auto mt-10 table-auto grid grid-cols-1 divide-y">
        <thead>
          <tr className="flex justify-between mx-20">
            <th>Name</th>
            <th>Author</th>
            <th>Year</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-1 divide-y">
          {books.map((book, index) => {
            return (
              <tr className="flex justify-between mx-20" key={index}>
                <td className="w-20">{book.name}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>{book.publisher}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
