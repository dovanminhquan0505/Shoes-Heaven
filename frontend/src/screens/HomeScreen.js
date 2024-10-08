import Rating from '../components/Rating';
import { getProducts } from '../api';
import { parseRequestUrl } from '../utils';

const homeScreen = {
    //Code to get data from frontend to backend
    render: async () => {
        const { value } = parseRequestUrl();
        const products = await getProducts({ searchKeyword: value });
        if(products.error){
            return `<div class="fail">${products.error}</div>`;
        }
        return `
            <ul class="products">
                ${products.map(product => `
                    <li>
                        <div class="product">
                            <a href="/#/product/${product._id}">
                                <img src="${product.image}" alt="${product.name}" />
                            </a>
                            <div class="product-name">
                                <a href="/#/product/${product._id}">
                                    ${product.name}
                                </a>
                            </div>
                            <div class="product-rating">
                                ${Rating.render({
                                    value: product.rating,
                                    text: `${product.numReviews} reviews`,
                                })}
                            </div>
                            <div class="product-brand">
                                ${product.brand}
                            </div>
                            <div class="product-price">
                                ${product.price}$
                            </div>
                        </div>
                    </li>    
                `).join('\n')}
            </ul>
        `
    }
}

export default homeScreen;