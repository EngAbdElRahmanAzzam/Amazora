import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFoundPage from "../pages/notFoundPage";
import AuthLayout from "../layouts/authLayout";
import ErrorPage from "../pages/errorPage";
import SignInPage from "../pages/signIn";
import SignUpPage from "../pages/signUp";
import HomePage from "../pages/home";
import CartPage from "../pages/cart";
import OrderPage from "../pages/order";
import WishlistPage from "../pages/wishlist";
import ProfilePage from "../pages/profile";
import PrivacyPage from "../pages/privacy";
import RootLayout from "../layouts/rootLayout";
import ProtectedRoute from "../components/common/protectedRoute";
import { routesUi } from ".";


const auth = false
const errorPage = <ErrorPage/>

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={routesUi.main.home} element={<RootLayout/>} errorElement={errorPage} >
                <Route path="home" element={<HomePage/>} />
                <Route path="privacy" element=<PrivacyPage/> />
                <Route path="cart" element=<CartPage/> />

                {/* group of protected route for auth / profile user */}
                <Route path="profile" element=<ProtectedRoute isAllowed={auth} redirect={routesUi.main.home} page={<Outlet/>}/> >
                    <Route index element={<ProfilePage/>}/>
                    <Route path="wishlist" element={<WishlistPage/>} />
                    <Route path="order" element={<OrderPage/>} />
                </Route>
            </Route>

            {/* auth layout with childen auth pages */}
            <Route 
                path={routesUi.auth.authLayout} 
                errorElement={errorPage}
                element={
                <ProtectedRoute 
                        isAllowed={!auth} 
                        redirect={routesUi.main.home} 
                        page={<AuthLayout/>}
                /> }
                 
            >
                <Route path={routesUi.auth.signInChild} element={<SignInPage/>} />
                <Route path={routesUi.auth.signUpChild} element={<SignUpPage/>} />
            </Route>

            <Route path="*" element=<NotFoundPage/> />
        </>
    )
)

export default router