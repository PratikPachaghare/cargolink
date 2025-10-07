import React, { useState } from 'react';
import { Truck, Map, ClipboardList, HelpCircle, UserCircle, Menu, X, ChevronDown } from 'lucide-react';

const primaryNavItems = [
    { name: 'Track Shipment', icon: Truck, href: '#' },
    { name: 'Routes & Network', icon: Map, href: '#' },
];

const utilityNavItems = [
    { name: 'Orders', icon: ClipboardList, href: '/orders' },
    { name: 'Support', icon: HelpCircle, href: '/support' }, // ✔ use React Router path
];

export {primaryNavItems, utilityNavItems};