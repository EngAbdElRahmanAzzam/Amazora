import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFoundPage from "../pages/errorHandlers/notFoundPage";
import AuthLayout from "../layouts/authLayout";
import ErrorPage from "../pages/errorHandlers/errorPage";
import SignInPage from "../pages/auth/signIn";
import SignUpPage from "../pages/auth/signUp";
import HomePage from "../pages/main/public/home";
import CartPage from "../pages/main/public/cart";
import OrderPage from "../pages/main/protected/order";
import WishlistPage from "../pages/main/protected/wishlist";
import ProfilePage from "../pages/main/protected/profile";
import PrivacyPage from "../pages/main/public/privacy";
import RootLayout from "../layouts/rootLayout";
import ProtectedRoute from "../components/common/protectedRoute";
import { routesUiConfig } from ".";


const auth = false
const errorPage = <ErrorPage/>

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={routesUiConfig.main.home} element={<RootLayout/>} errorElement={errorPage} >
                <Route index element={<HomePage/>} />
                <Route path={routesUiConfig.main.privacy} element={<PrivacyPage/>} />
                <Route path={routesUiConfig.main.cart} element={<CartPage/>} />

                {/* group of protected route for auth / profile user */}
                <Route path={routesUiConfig.main.profileLayout} 
                    element={
                    <ProtectedRoute 
                        isAllowed={auth} 
                        redirect={routesUiConfig.main.home} 
                        page={<Outlet/>}/>} 
                >
                    <Route index element={<ProfilePage/>}/>
                    <Route path={routesUiConfig.main.wishlist} element={<WishlistPage/>} />
                    <Route path={routesUiConfig.main.order} element={<OrderPage/>} />
                </Route>
            </Route>

            {/* auth layout with childen auth pages */}
            <Route 
                path={routesUiConfig.auth.authLayout} 
                errorElement={errorPage}
                element={
                <ProtectedRoute 
                        isAllowed={!auth} 
                        redirect={routesUiConfig.main.home} 
                        page={<AuthLayout/>}
                /> }
                 
            >
                <Route path={routesUiConfig.auth.signInChild} element={<SignInPage/>} />
                <Route path={routesUiConfig.auth.signUpChild} element={<SignUpPage/>} />
            </Route>

            <Route path="*" element={<NotFoundPage/>} />
        </>
    )
)

export default router