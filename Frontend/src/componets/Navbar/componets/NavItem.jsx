import React, { useState } from 'react';

const NavItem = ({ item }) => (
    <a 
        href={item.href} 
        className="flex items-center no-underline space-x-2 text-white hover:text-sky-300 hover:bg-blue-700/50 p-2 rounded-lg transition-all duration-200"
    >
        <item.icon className="w-5 h-5" />
        <span className="font-medium text-sm">{item.name}</span>
    </a>
);

export default NavItem;