"use client"

import React from "react";
import MenuSection from "../MenuSection";
import { MenuData } from "../MenuData";

const FinancierMenu: React.FC = () => {
  return <MenuSection menuData={MenuData.financier} />;
};

export default FinancierMenu;