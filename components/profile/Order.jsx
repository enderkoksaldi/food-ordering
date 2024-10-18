import React from "react";
import Title from "/components/ui/Title";

const Order = () => {
  return (
    <div className="lg:p-4 flex-1 flex flex-col gap-y-6">
      <Title addClass="text-4xl">Password Settings</Title>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                ADDRESS
              </th>
              <th scope="col" className="py-3 px-6">
                DATE
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-secondary border-gray-700 hover:bg-primary transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-2 justify-center">
                <span>12352522..</span>
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                İzmir
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                10-09-2024
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $10
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Delivered
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
