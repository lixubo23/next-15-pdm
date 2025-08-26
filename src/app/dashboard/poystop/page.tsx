import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { SearchParams } from "nuqs/server";
import React, { Suspense } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import DataTableSkeleton from "@/components/ui/table/data-table-skeleton";
import ProductListingPage from "@/features/products/components/product-listing";
import { searchParamsCache } from "@/lib/searchparams";
import PoystopListingPage from "@/features/poystop/components/poystop-listing";

export const metadata = {
  title: "Dashboard: Products",
};
type pageProps = {
  searchParams: Promise<SearchParams>;
};
const Page = async (props: pageProps) => {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);
  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="POY停止供给设定"
            description="POY停止供给设定-PS、原丝架(节)、CREEL Single(Sp)、CREEL SZ(Sp)为一个主页面。"
          />
          {/* <Link
            href="/dashboard/product/new"
            className={cn(buttonVariants(), "text-xs md:text-sm")}
          >
            <IconPlus className="mr-2 h-4 w-4" /> Add New
          </Link> */}
        </div>
        <Separator />
        <Suspense
          fallback={
            <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
          }
        >
          <PoystopListingPage />
        </Suspense>
      </div>
    </PageContainer>
  );
};

export default Page;
1;
