export const getCartItems = () => {
    //Need to pass a key. It's the key for the item that we are going to save in the local storage
    const cartItems = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [];
    return cartItems;
};

export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const setUserInfo = ({
    //If no value is provided when calling the function, the properties will have this default value.
    _id  = '',
    name = '',
    email = '',
    password = '',
    token = '',
    isAdmin = false
}) => {
    localStorage.setItem('userInfo', JSON.stringify({
        _id,
        name,
        email,
        password,
        token,
        isAdmin
    }));
}

export const getUserInfo = () => {
    return localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) :
    {name: '', email: '', password: ''};
};

//Delete user information
export const clearUser = () => {
    localStorage.removeItem('userInfo');
};

export const clearCart = () => {
    localStorage.removeItem('cartItems');
};

export const getShipping = () => {
    const shipping = localStorage.getItem('shipping')
    ? JSON.parse(localStorage.getItem('shipping')) 
    : {
        city: '',
        address: '',
        postalCode: '',
        country: '',
    };
    return shipping;
}

export const setShipping = ({
    address = '',
    city = '',
    postalCode = '',
    country = '',
}) => {
    localStorage.setItem('shipping', JSON.stringify({
        address,
        city,
        postalCode,
        country,
    }));
}

export const getPayment = () => {
    const payment = localStorage.getItem('payment')
    ? JSON.parse(localStorage.getItem('payment')) 
    : {
        paymentMethod: 'paypal',

    };
    return payment;
}

export const setPayment = ({ paymentMethod = 'paypal' }) => {
    localStorage.setItem('payment', JSON.stringify({ paymentMethod }));
}