// import { Route } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import { GlobleStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme} from './styles/Theme'
import Contact from './component/Contact';
import Products from "./component/Products";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import NavbarLayout from "./component/NavbarLayout";
import Admin from "./component/Admin";
import SingleProduct from "./component/SingleProduct";
import Cart from "./component/Cart";
import EmailVerifyed from "./component/EmailVerifyed";
import Logout from "./component/Logout";
import Verification from "./component/Verification";
import Recovery from "./component/Recovery";
import PasswordVerified from "./component/PasswordVerified";
import AdminProtected from "./component/ProtectedRoutes/AdminProtected";
import ProtectedUserLogin from "./component/ProtectedRoutes/ProtectedUserLogin";
import ProtectedUserNotLogin from "./component/ProtectedRoutes/ProtectedUserNotLogin";
import Footer from "./component/Footer";


export const url = process.env.REACT_APP_SERVER_URL;

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme} >
    <GlobleStyle />
      <Routes>
      <Route path="/" element={<NavbarLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<ProtectedUserLogin Component={Signup} />} />
        <Route path="/signin" element={<ProtectedUserLogin Component={Signin} />} />
        <Route path="/cart" element={<Cart   />} />
        <Route path="/single/:_id" element={<SingleProduct />} />
      </Route>
      <Route path="/logout" element={<ProtectedUserNotLogin Component={Logout} />} />

      <Route path="/verify" element={<ProtectedUserLogin Component={EmailVerifyed} />} />
      <Route path="/verification" element={<ProtectedUserLogin Component={Verification} />} />
      <Route path="/forget" element={<ProtectedUserLogin Component={Recovery} />} />
      <Route path="/forget-password" element={<ProtectedUserLogin Component={PasswordVerified} />} />

      <Route path="/admin" element={<AdminProtected Component={Admin } />} />
      </Routes>
      </ThemeProvider>
    </>
  );
}
