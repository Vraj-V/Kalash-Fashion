import { Navbar } from '../features/navigation/components/Navbar'
import { AdminProducts } from '../features/admin/components/AdminProducts'

export const AdminProductsPage = () => {
  return (
    <>
      <Navbar isProductList={true} />
      <AdminProducts />
    </>
  )
}
