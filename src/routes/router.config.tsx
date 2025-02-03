import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
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
import PrivcyPage from "../pages/privcy";
import RootLayout from "../layouts/rootLayout";
import ProtectedRoute from "../components/common/auth";


const auth = false

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/home" element=<Navigate to="/"/> />

            <Route path="/" element=<RootLayout/> errorElement=<ErrorPage/> >
                <Route index element=<HomePage/> />
                <Route path="profile" element=<ProtectedRoute isAllowed={auth} redirect="/" Page={<ProfilePage/> }/> />
                <Route path="cart" element=<CartPage/> />
                <Route path="wishlist" element=<ProtectedRoute isAllowed={auth} redirect="/" Page={<WishlistPage/> }/>/>
                <Route path="order" element=<ProtectedRoute isAllowed={auth} redirect="/" Page={<OrderPage/> }/>/>
                <Route path="privcy" element=<PrivcyPage/> />
            </Route>

            <Route path="/auth" element=<AuthLayout/> errorElement=<ErrorPage/> >
                <Route path="sign-in" element=<ProtectedRoute isAllowed={!auth} redirect="/" Page={<SignInPage/>}/> />
                <Route path="sign-up" element=<ProtectedRoute isAllowed={!auth} redirect="/" Page={<SignUpPage/>}/> />
            </Route>

            <Route path="*" element=<NotFoundPage/> />
        </>
    )
)

export default router