import React, { useState } from "react";
import classes from "./Buyers.module.scss";

import { orderBy, chunk } from "lodash";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export const Buyers = () => {
  const buyers = [
    { id: 0, name: "Алексей", check: 1000, amount: 3, proceeds: 23434 },
    { id: 1, name: "Антон", check: 356, amount: 13, proceeds: 567 },
    { id: 2, name: "Аркадий", check: 43563, amount: 3, proceeds: 234734 },
    { id: 3, name: "Анатолий", check: 10560, amount: 23, proceeds: 324525 },
    { id: 4, name: "Артур", check: 4564, amount: 33, proceeds: 4636 },
    { id: 5, name: "Борис", check: 45454, amount: 43, proceeds: 231234434 },
    { id: 6, name: "Борис", check: 4545, amount: 53, proceeds: 345345 },
    { id: 7, name: "Борис", check: 890, amount: 31, proceeds: 23456434 },
    { id: 8, name: "Вадим", check: 7878, amount: 32, proceeds: 23434 },
    { id: 9, name: "Валентин", check: 456, amount: 33, proceeds: 2323434 },
    { id: 10, name: "Валерий", check: 657, amount: 34, proceeds: 7666 },
    { id: 11, name: "Василий", check: 12340, amount: 331, proceeds: 23634 },
    { id: 12, name: "Виктор", check: 14560, amount: 324, proceeds: 7880908 },
    { id: 13, name: "Виталий", check: 1000, amount: 33, proceeds: 23434 },
    { id: 14, name: "Алексей", check: 1000, amount: 9, proceeds: 236734 },
  ];

  const [data, setData] = useState(buyers);
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState("");
  const [countBuyers, setCountBuyers] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState("");

  const maxBuyersOnPage = 15;

  let filtredData = getFiltredData();

  if (filtredData.length === 0) filtredData = data;

  const onBuyersCount = (count) => {
    setCountBuyers(count);
    setCurrentPage(0);
    setSearch("");
  };

  const getPageSize = () => {
    switch (countBuyers) {
      case 5: {
        return Math.ceil(filtredData.length / 5);
      }
      case 10: {
        return Math.ceil(filtredData.length / 10);
      }
      case 15: {
        return Math.ceil(filtredData.length / 15);
      }
      default: {
        return 5;
      }
    }
  };

  const onSearch = (searchValue) => {
    setSearch(searchValue);
    setCurrentPage(0);
    setSearchValue("");
  };

  const pageSize = getPageSize();

  const displayedData =
    countBuyers !== maxBuyersOnPage ? chunk(filtredData, countBuyers)[currentPage] : data;

  const onSort = (sortField) => {
    const cloneBuyers = data.concat();
    const sortType = sort === "asc" ? "desc" : "asc";

    const orderedData = orderBy(cloneBuyers, sortField, sortType);

    setData(orderedData);
    setSort(sortType);
    setSortField(sortField);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  function getFiltredData() {
    if (!search) {
      return data;
    }

    return data.filter((item) => {
      return item["name"].toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <div className={classes.table_wrap}>
      <div className={classes.controls}>
        <div className={classes.paginationBtn}>
          <span>Число покупателей: </span>
          <button onClick={() => onBuyersCount(5)}>5</button>
          <button onClick={() => onBuyersCount(10)}>10</button>
          <button onClick={() => onBuyersCount(15)}>15</button>
        </div>
        <div className={classes.table_search}>
          <div className={classes.table_search__brn}>
            <button onClick={() => onSearch(searchValue)}>Search</button>
          </div>
          <input
            type="text"
            placeholder="Введите имя"
            value={searchValue}
            onChange={onSearchChange}
          />
        </div>
      </div>
      <table className={classes.buyers}>
        <thead>
          <tr>
            <th>Покупатели</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ID покупателя</th>
            <th onClick={onSort.bind(null, "name")}>
              Имя покупателя
              {sortField === "name" && sort === "asc" ? (
                <small>&darr;</small>
              ) : (
                <small>&uarr;</small>
              )}
            </th>
            <th onClick={onSort.bind(null, "check")}>
              Средний чек
              {sortField === "check" && sort === "asc" ? (
                <small>&darr;</small>
              ) : (
                <small>&uarr;</small>
              )}
            </th>
            <th onClick={onSort.bind(null, "amount")}>
              Количество покупок
              {sortField === "amount" && sort === "asc" ? (
                <small>&darr;</small>
              ) : (
                <small>&uarr;</small>
              )}
            </th>
            <th onClick={onSort.bind(null, "proceeds")}>
              Общая выручка
              {sortField === "proceeds" && sort === "asc" ? (
                <small>&darr;</small>
              ) : (
                <small>&uarr;</small>
              )}
            </th>
          </tr>
          {displayedData.map((buyer) => (
            <tr key={buyer.id}>
              <td>
                <Link to={`/buyers/${buyer.id}`}>{buyer.id}</Link>
              </td>
              <td>{buyer.name}</td>
              <td>{buyer.check}</td>
              <td>{buyer.amount}</td>
              <td>{buyer.proceeds}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.pagination}>
        {countBuyers !== maxBuyersOnPage && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageSize}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            forcePage={currentPage}
            onPageChange={handlePageClick}
            containerClassName={classes.pagination}
            activeClassName={classes.active}
            pageClassName={classes.page_item}
            pageLinkClassName={classes.page_link}
            previousClassName={classes.page_item}
            nextClassName={classes.page_item}
            previousLinkClassName={classes.page_link}
            nextLinkClassName={classes.page_link}
          />
        )}
      </div>
    </div>
  );
};
