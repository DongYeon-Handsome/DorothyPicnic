"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Main from '@/app/components/pages/Main';
import MenuView from '@/app/components/pages/MenuView';
import OrderView from '../components/pages/OrderView';

const pages = {
  home: <Main />,
  menu: <MenuView />,
  order: <OrderView />,
};

const Page: React.FC = () => {
  const params = useParams();
  const { pageName } = params as { pageName: string };
  const template = pages[pageName as keyof typeof pages] || <Main />;
  return template;
};

export default Page;