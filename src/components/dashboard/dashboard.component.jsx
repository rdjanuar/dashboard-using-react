import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export const Dashboard = ({
  books,
  search,
  onPageChange,
  pageCount,
  onDelete,
}) => {
  return (
    <main className="bg-white w-999  rounded-lg border border-aenjay mx-10.5  h-full/5">
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
          <button className="bg-red-500 rounded-full p-3 text-white">
            <Link to="/form">Tambah Data</Link>
          </button>
        </div>
      </div>
      <table className="container mx-auto mt-10 table-fixed grid grid-cols-1 divide-y">
        <thead>
          <tr className="flex justify-between mx-20 ">
            <th>Nama Buku</th>
            <th>Author</th>
            <th>Year</th>
            <th>Publisher</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-1 divide-y">
          {books.map((book, index) => {
            return (
              <tr
                className="flex justify-between mx-20 break-words"
                key={index}
              >
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>{book.publisher}</td>
                <td className="space-x-2">
                  <Link to={`/update/${book.id}`}>Edit</Link>
                  <button onClick={() => onDelete(book.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ReactPaginate
        className="flex space-x-2 justify-end items-center "
        nextLabel="next >"
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        activeClassName="active"
        renderOnZeroPageCount={null}
        pageClassName={
          "border borded-md border-red-500 p-2 bg-red-500 text-white rounded-lg"
        }
        previousClassName={"font-bold"}
        nextClassName={"font-bold"}
      />
    </main>
  );
};
