import { StaticImageData } from "next/image";
import { CoffeeData } from "./MenuDatas/CoffeeData";
import { NonCoffeeData } from "./MenuDatas/NonCoffeeData";
import { TeaData } from "./MenuDatas/TeaData";
import { AdeData } from "./MenuDatas/AdeData";
import { SmootheData } from "./MenuDatas/SmootheData";
import { FinancierData } from "./MenuDatas/FinancierData";
import { DessertData } from "./MenuDatas/DessertData";


export interface MenuCardData {
  title: string;
  description: string;
  price: string;
  imageSrc: StaticImageData;
}

export const MenuData: Record<string, MenuCardData[]> = {
  coffee: CoffeeData,
  noncoffee: NonCoffeeData,
  tea: TeaData,
  ade: AdeData,
  smoothe: SmootheData,
  financier: FinancierData,
  dessert: DessertData,
};