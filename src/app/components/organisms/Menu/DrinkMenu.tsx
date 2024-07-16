"use client"

import MenuCard from "../../mocules/MenuCard";
import CardLayout from "./CardLayout";

const DrinkMenu: React.FC = () => {
  return(
    <CardLayout>
      <MenuCard
        title = "Juice1"
        description="Juice des"
        price="10000"
        imageUrl="../../../../public/Image/Sample1.jpg"
      />
      <MenuCard
        title = "Juice2"
        description="Juice2 des2"
        price="100002"
        imageUrl="../../../../public/Image/Sample2.jpg"
      />
      <MenuCard
        title = "Juice3"
        description="Juice des3"
        price="100003"
        imageUrl="../../../../public/Image/Sample3.jpg"
      />
    </CardLayout>
  )
}

export default DrinkMenu;