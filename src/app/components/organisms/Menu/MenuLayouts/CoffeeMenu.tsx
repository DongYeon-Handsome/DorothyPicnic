"use client"

import React from "react";
import MenuSection from "../MenuSection";
import { MenuData } from "../MenuData";

const CoffeeMenu: React.FC = () => {
  return <MenuSection menuData={MenuData.coffee} />;
};

export default CoffeeMenu;