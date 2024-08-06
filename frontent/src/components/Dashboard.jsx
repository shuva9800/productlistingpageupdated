import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import rightArrow from "../../image/arrow-right.svg";
import leftArrow from "../../image/arrow-left.svg";

export default function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 8;
  const totalPages = list.length / itemsPerPage;
  

  useEffect(() => {
    fetchAllProducts();
  }, []);

  async function fetchAllProducts() {
    try {
      const response = await fetch(
        "https://productinglistingbackend.onrender.com/api/product/getproduct"
      );
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredList.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4 w-full">
      <p className="text-green-600 font-bold text-3xl pb-5">
        Logged in as {currentUser.email}
      </p>
      <div className="mb-4 w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 w-full border rounded "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-around items-center w-full max-w-[20rem] mx-auto mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded flex items-center justify-center disabled:opacity-50"
        >
          <img src={leftArrow} className="w-5 h-auto" />
        </button>
        <p className="">
          <span className=""> {currentPage} </span>/<span className=""> {Math.ceil(totalPages)} </span>
        </p>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(filteredList.length / itemsPerPage)
          }
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded flex items-center justify-center disabled:opacity-50"
        >
          <img src={rightArrow} className="w-5 h-auto" />
        </button>
      </div>
    </div>
  );
}
