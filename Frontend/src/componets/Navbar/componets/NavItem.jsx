import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavItem({ item }) {
    const navigate = useNavigate();
  return (
    <div
      className="flex items-center cursor-pointer space-x-2 p-2 rounded-lg  text-white hover:text-sky-300 transition duration-150"
      key={item.name}
      onClick={() => navigate(`${item.route}`)}
    >
      <item.icon className="w-6 h-6" />
      <span className="text-sm font-semibold lg:inline">
        {item.name}
      </span>
    </div>
  );
}
