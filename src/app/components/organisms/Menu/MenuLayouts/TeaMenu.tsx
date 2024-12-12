"use client"

import React from "react";
import MenuSection from "../MenuSection";
import { MenuData } from "../MenuData";

const TeaMenu: React.FC = () => {
  return <MenuSection menuData={MenuData.tea} />;
};

export default TeaMenu;