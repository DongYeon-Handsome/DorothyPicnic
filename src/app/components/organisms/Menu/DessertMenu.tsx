"use client"

import MenuCard from "../../mocules/MenuCard";
import CardLayout from "./CardLayout";

const DessertMenu: React.FC = () => {
  return(
    <CardLayout>
      <MenuCard
        title = "Dessert"
        description="Dessert des"
        price="10000"
        imageUrl="../../../../public/Image/Sample1.jpg"
      />
      <MenuCard
        title = "Dessert2"
        description="Dessert des2"
        price="100002"
        imageUrl="../../../../public/Image/Sample2.jpg"
      />
      <MenuCard
        title = "Dessert3"
        description="Dessert des3"
        price="100003"
        imageUrl="../../../../public/Image/Sample3.jpg"
      />
    </CardLayout>
  )
}

export default DessertMenu;