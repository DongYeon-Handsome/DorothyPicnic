"use client"

import React from "react";
import MenuSection from "../MenuSection";
import { MenuData } from "../MenuData";

const DessertMenu: React.FC = () => {
  return <MenuSection menuData={MenuData.dessert} />;
};

export default DessertMenu;