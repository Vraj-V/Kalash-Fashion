import { useSelector } from 'react-redux';
import {
  Navigate,
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
import { selectIsAuthChecked, selectLoggedInUser } from './features/auth/AuthSlice';
import { Logout } from './features/auth/components/Logout';
import { AdminProtected, Protected } from './features/auth/components/Protected';
import { useAuthCheck } from "./hooks/useAuth/useAuthCheck";
import { useFetchLoggedInUserDetails } from "./hooks/useAuth/useFetchLoggedInUserDetails.jsx";
import { AddProductPage, AdminOrdersPage, AdminProfilePage, CartPage, CheckoutPage, ContactPage, ForgotPasswordPage, HomePage, LoginPage, OrderSuccessPage, OtpVerificationPage, ProductDetailsPage, ProductUpdatePage, ResetPasswordPage, SignupPage, UserOrdersPage, UserProfilePage, WishlistPage, WelcomePage } from './pages';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminProductsPage } from './pages/AdminProductsPage';
import { AdminOrderDetailPage } from './pages/AdminOrderDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';


function App() {

  const isAuthChecked=useSelector(selectIsAuthChecked)
  const loggedInUser=useSelector(selectLoggedInUser)


  useAuthCheck();
  useFetchLoggedInUserDetails(loggedInUser);


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/welcome' element={<WelcomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/verify-otp' element={<OtpVerificationPage/>}/>
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
        <Route path='/reset-password/:userId/:passwordResetToken' element={<ResetPasswordPage/>}/>
        <Route exact path='/logout' element={<Protected><Logout/></Protected>}/>
        <Route exact path='/product-details/:id' element={<Protected><ProductDetailsPage/></Protected>}/>

        {/* admin routes */}
        <Route path='/admin/dashboard' element={<AdminProtected><AdminDashboardPage/></AdminProtected>}/>
        <Route path='/admin/products' element={<AdminProtected><AdminProductsPage/></AdminProtected>}/>
        <Route path='/admin/product-update/:id' element={<AdminProtected><ProductUpdatePage/></AdminProtected>}/>
        <Route path='/admin/add-product' element={<AdminProtected><AddProductPage/></AdminProtected>}/>
        <Route path='/admin/orders'  element={<AdminProtected><AdminOrdersPage/></AdminProtected>}/>
        <Route path='/admin/orders/:id'  element={<AdminProtected><AdminOrderDetailPage/></AdminProtected>}/>
        <Route path='/admin/profile'  element={<AdminProtected><AdminProfilePage/></AdminProtected>}/>

        {/* user routes */}
        <Route
          path='/'
          element={
            loggedInUser?.isAdmin
              ? <Navigate to={'/admin/dashboard'} replace={true}/>
              : loggedInUser?.isVerified
                ? <Protected><HomePage/></Protected>
                : <WelcomePage/>
          }
        />
        <Route path='/cart' element={<Protected><CartPage/></Protected>}/>
        <Route path='/profile' element={<Protected><UserProfilePage/></Protected>}/>
        <Route path='/checkout' element={<Protected><CheckoutPage/></Protected>}/>
        <Route path='/order-success/:id' element={<Protected><OrderSuccessPage/></Protected>}/>
        <Route path='/orders' element={<Protected><UserOrdersPage/></Protected>}/>
        <Route path='/wishlist' element={<Protected><WishlistPage/></Protected>}/>

        <Route path='*' element={<NotFoundPage/>} />

      </>
    )
  )

  
  return isAuthChecked ? <RouterProvider router={routes}/> : "";
}

export default App;
