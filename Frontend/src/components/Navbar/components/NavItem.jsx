import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ item }) => (
    <Link
        to={item.href} // use `to` instead of href
        className="flex items-center no-underline space-x-2 text-white hover:text-sky-300 hover:bg-blue-700/50 p-2 rounded-lg transition-all duration-200"
    >
        <item.icon className="w-5 h-5" />
        <span className="font-medium text-sm">{item.name}</span>
    </Link>
);

export default NavItem;
