"use client"

import MenuCard from "../../mocules/MenuCard";
import CardLayout from "./CardLayout";

const FinancierMenu: React.FC = () => {
  return(
    <CardLayout>
      <MenuCard
        title = "Financier"
        description="Finanicer des"
        price="10000"
        imageUrl="../../../../public/Image/Sample1.jpg"
      />
      <MenuCard
        title = "Finanicer2"
        description="Finanicer des2"
        price="100002"
        imageUrl="../../../../public/Image/Sample2.jpg"
      />
      <MenuCard
        title = "Finanicer3"
        description="Finanicer des3"
        price="100003"
        imageUrl="../../../../public/Image/Sample3.jpg"
      />
    </CardLayout>
  )
}

export default FinancierMenu;