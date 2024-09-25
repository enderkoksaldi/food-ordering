import React from "react";
import Image from "next/image";

const Order = () => {
  return (
    <div className="min-h-[calc(100vh_-_453px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="flex-1 p-10 overflow-x-auto w-full md:w-auto">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-secondary border-gray-700 hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-2 justify-center">
                  324265464..
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Ender Köksaldı
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Izmir
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $20
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
