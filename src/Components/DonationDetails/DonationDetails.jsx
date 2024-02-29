
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const items = useLoaderData();
  const result = items.filter((item) => item.id === idInt);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-center  text-3xl my-8">Donation Details</h1>
        <div className="grid gap-4">
          {result.map((item) => (
            <div key={item.id} className="border my-2 p-4 shadow-md rounded-lg" style={{ borderColor: item?.title_color }}>
              <img
                src={item.banner_img}
                alt={item.description}
                className="w-full h-400 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2" style={{ color: item?.title_color }}>{item.title}</h2>
              <h2 className="font-semibold mb-2">{item.description}</h2>
              <p className="text-gray-600 font-bold">${item.price}</p>
              <button className="btn  mt-4 w-full" style={{ color: item?.title_color ,
            borderColor: item?.title_color}}>Donate Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
