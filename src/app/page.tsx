'use client';

import { DefaultLayout } from "@/components/DefaultLayout";
import { HomeMenu } from "@/components/HomeMenu";
import { ProductCatalogue } from "@/components/ProductCatalogue";

interface HomeProps {
  searchParams: {
    category?: string;
  }
}
export default function Home({ searchParams }: HomeProps) {
  const { category } = searchParams;

  return (
    <DefaultLayout>
        <HomeMenu />
        <ProductCatalogue category={category} />
    </DefaultLayout>
  )
}
