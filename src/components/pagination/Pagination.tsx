
type Props = {
  pagination: {
    range: (number | "dots")[];
    active: number;
    setPage: (page: number) => void;
    next: () => void;
    previous: () => void;
    first: () => void;
    last: () => void;
  };
};

function Pagination({ pagination }: Props) {
  return (
    <nav className="flex justify-center mt-8">
      <ul className="inline-flex gap-1">
        <li>
          <button
            onClick={() => pagination.previous()}
            className="h-8 px-3 text-indigo-500 transition-colors duration-150  focus:shadow-outline hover:bg-slate-800 rounded-md disabled:text-slate-500/50"
            disabled={pagination.active === 1 ? true : false}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>

        {pagination.range.map((range, id) =>
          range === "dots" ? (
            <li key={id}>...</li>
          ) : (
            <li key={id}>
              <button
                onClick={() => pagination.setPage(range)}
                className={`h-8 px-4 text-slate-300 transition-colors duration-150 focus:shadow-outline  rounded-md ${
                  pagination.active === range
                    ? "bg-indigo-600"
                    : "hover:bg-slate-800"
                }`}
              >
                {range}
              </button>
            </li>
          )
        )}
        <li>
          <button
            onClick={() => pagination.next()}
            disabled={
              pagination.active === pagination.range.length ? true : false
            }
            className="h-8 px-3 text-indigo-500 transition-colors duration-150 focus:shadow-outline hover:bg-slate-800 rounded-md disabled:text-slate-500/50"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
