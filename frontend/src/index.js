import Aside from "./components/Aside.js";
import Header from "./components/Header.js";
import CartScreen from "./screens/CartScreen.js";
import DashboardScreen from "./screens/DashboardScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import homeScreen from "./screens/HomeScreen.js";
import OrderListScreen from "./screens/OrderListScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import ProductEditScreen from "./screens/ProductEditScreen.js";
import ProductListScreen from "./screens/ProductListScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import SigninScreen from "./screens/SigninScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";

const routes = { //define the action when we click into each products page
    '/': homeScreen,
    '/product/:id': ProductScreen,
    '/product/:id/edit':ProductEditScreen,
    '/order/:id': OrderScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen, //when user clicks on Cart in the top right menu, it should be redirected to the cart screen
    '/signin': SigninScreen,
    '/register': RegisterScreen,
    '/profile': ProfileScreen,
    '/shipping': ShippingScreen,
    '/payment': PaymentScreen,
    '/placeorder': PlaceOrderScreen,
    '/dashboard' : DashboardScreen,
    '/productlist': ProductListScreen,
    '/orderlist': OrderListScreen,
}

const router = async () => {
    showLoading();
    const request = parseRequestUrl();
    const parseUrl = //define the url
        (request.resource ? `/${request.resource}` : '/') +
        (request.id? '/:id': '') +
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;

    //render header to views
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render(); //render the header to views
    await Header.after_render(); //render the header to views

    //render aside to views
    const aside = document.getElementById('aside-container');
    aside.innerHTML = await Aside.render(); //render the aside to views
    await Aside.after_render(); //render the aside to views

    //render header to views
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render(); //render the products to views
    if(screen.after_render){
        await screen.after_render();//render the products to cart
    }

    hideLoading();
};

//add event listener to the window when the page load and when the hash change
window.addEventListener("load", router);
window.addEventListener('hashchange', router);