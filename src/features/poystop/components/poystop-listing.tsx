import { PoyDeviceList } from "@/constants/data";
import { fakepoyDeviceList } from "@/constants/mock-api";
import { searchParamsCache } from "@/lib/searchparams";
import { PoystopTable } from "./poystop-tables";
import { columns } from "./poystop-tables/columns";

type ProductListingPage = {};

export default async function ProductListingPage({}: ProductListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get("page");
  const search = searchParamsCache.get("name");
  const pageLimit = searchParamsCache.get("perPage");
  const categories = searchParamsCache.get("category");

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories }),
  };

  const data = await fakepoyDeviceList.getProducts(filters);
  const totalProducts = data.total_products;
  const products: PoyDeviceList[] = data.products;

  return (
    <PoystopTable
      data={products}
      totalItems={totalProducts}
      columns={columns}
    />
  );
}
