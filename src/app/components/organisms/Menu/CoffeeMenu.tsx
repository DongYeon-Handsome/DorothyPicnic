"use client"

import MenuCard from "../../mocules/MenuCard";
import CardLayout from "./CardLayout";

const CoffeeMenu: React.FC = () => {
  return(
    <CardLayout>
      <MenuCard
        title = "Americano"
        description="Americano des"
        price="10000"
        imageUrl="../../../../public/Image/Sample1.jpg"
      />
      <MenuCard
        title = "Americano2"
        description="Americano des2"
        price="100002"
        imageUrl="../../../../public/Image/Sample2.jpg"
      />
      <MenuCard
        title = "Americano3"
        description="Americano des3"
        price="100003"
        imageUrl="../../../../public/Image/Sample3.jpg"
      />
    </CardLayout>
  )
}

export default CoffeeMenu;