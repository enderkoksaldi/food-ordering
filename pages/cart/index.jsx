import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh_-_453px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="flex-1 p-10 overflow-x-auto w-full md:w-auto">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 px-6">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 px-6">
                  PRICE
                </th>
                <th scope="col" className="py-3 px-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-secondary border-gray-700 hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-2 justify-center">
                  <Image src="/images/f1.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  mayonez,ketçap,barbekü
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $20
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_453px)] text-white flex flex-col justify-center p-10 gap-5 md:w-auto w-full">
          <Title addClass="text-4xl md:text-start text-center">
            CART TOTAL
          </Title>
          <div className="flex flex-col gap-2 md:text-start text-center">
            <span>
              <b>Subtotal : </b>$20
            </span>
            <span>
              <b>Discount: </b>$0.00
            </span>
            <span>
              <b>Total: </b>$20
            </span>
          </div>
          <div className="flex justify-center">
            <button className="btn-primary md:w-auto w-52 ">
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
