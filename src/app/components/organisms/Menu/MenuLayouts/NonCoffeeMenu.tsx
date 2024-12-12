"use client"

import React from "react";
import MenuSection from "../MenuSection";
import { MenuData } from "../MenuData";

const NonCoffeeMenu: React.FC = () => {
  return <MenuSection menuData={MenuData.noncoffee} />;
};

export default NonCoffeeMenu;