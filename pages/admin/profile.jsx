import Image from "next/image";
import React, { useState } from "react";
import Account from "/components/profile/Account";
import Password from "/components/profile/Password";
import Order from "/components/profile/Order";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh_-_453px)] lg:flex-row flex-col lg:items-center gap-6 lg:py-0 py-6">
      <div className="lg:w-72 w-full flex-shrink-0">
        <div className="flex flex-col items-center p-10 border border-b-0">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              src="/images/client1.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="font-semibold text-xl">Ender Köksaldı</div>
        </div>
        <ul className="font-semibold">
          <li
            className={`border p-3 flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-home"></i>
            <span>Account</span>
          </li>
          <li
            className={`border p-3 flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa fa-key"></i>
            <span>Password</span>
          </li>
          <li
            className={`border p-3 flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <i className="fa fa-motorcycle"></i>
            <span>Orders</span>
          </li>
          <li
            className={`border p-3 flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <i className="fa fa-right-from-bracket"></i>
            <span>Exit</span>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export default Profile;
