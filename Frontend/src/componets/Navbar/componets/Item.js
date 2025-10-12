import React, { useState } from 'react';
import { Truck, Map, ClipboardList, HelpCircle, UserCircle, Menu, X, ChevronDown } from 'lucide-react';

const primaryNavItems = [
    { name: 'Track Shipment', icon: Truck , route: '/track-shipment' },
    { name: 'Routes & Network', icon: Map, route: '/routes-network' },
];

const utilityNavItems = [
    { name: 'Order', icon: ClipboardList, route: '/order' },
    { name: 'Support', icon: HelpCircle,    route: '/support' },
];

export {primaryNavItems, utilityNavItems};