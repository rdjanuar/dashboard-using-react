import ReactPaginate from "react-paginate";

export const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      className="flex space-x-2 justify-end items-center "
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={1}
      pageClassName={
        "border borded-md border-red-500 p-2 bg-red-500 text-white rounded-lg"
      }
      previousClassName={"font-bold"}
      nextClassName={"font-bold"}
      activeClassName={"active"}
    />
  );
};
