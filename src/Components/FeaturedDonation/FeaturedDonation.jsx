/* import { useEffect, useState } from "react";
import SingleDonationCard from "../SingleDonationCard/SingleDonationCard";

const FeaturedDonation = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/data.json");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="shadow-lg my-5">
      <div className="flex flex-col justify-center items-center text-center text-black px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Donation For All {items.length}
        </h2>
        <p className="text-lg mb-2">Choose your Packages</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <SingleDonationCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDonation;
 */

import { useEffect, useState } from "react";
import SingleDonationCard from "../SingleDonationCard/SingleDonationCard";

const FeaturedDonation = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Maximum items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    // Simulate delay for 3-4 seconds
    const delay = setTimeout(() => {
      fetchData();
      clearTimeout(delay);
    }, 5000);

    return () => clearTimeout(delay); // Cleanup timeout on component unmount
  }, []);

  // Calculate start and end indexes of items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="shadow-lg my-5">
      {loading ? ( // Render loader if loading state is true
        <div className="flex justify-center items-center h-64">
          <span className="  loading loading-infinity loading-lg">  </span>
          <h1>Please wait</h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center text-center text-black px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Donation For All
            </h2>
            <p className="text-lg mb-5">Choose your Packages</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-2/3 mx-auto">
            {currentItems.map((item, index) => (
              <SingleDonationCard key={index} item={item} />
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4 p-5">
            {Array.from({
              length: Math.ceil(items.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded-lg focus:outline-none ${
                  currentPage === index + 1 ? "bg-gray-300" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedDonation;
