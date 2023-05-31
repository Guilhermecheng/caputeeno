'use client';

import { DefaultLayout } from "@/components/DefaultLayout";
import { HomeMenu } from "@/components/HomeMenu";
import { ProductCatalogue } from "@/components/ProductCatalogue";


export default function Home() {

  return (
    <DefaultLayout>
        <HomeMenu />
        <ProductCatalogue />
    </DefaultLayout>
  )
}
