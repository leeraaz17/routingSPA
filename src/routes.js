import Product from './Product.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue'
import ProProduct from './ProProduct.vue';
import ProReview from './ProductReview.vue';

export const routes = [
		{
			path: '',
			component: Product
		},
		{
			path: '/products/:productId',
			props: true,
			name: 'product',
			component: ProProduct,
			children: [
				{ path: 'details', name: 'viewProduct', props: true, component: ViewProduct },
				{ path: 'reviews', name: 'productReviews', props: true, component: ProReview }
			]
		},
		{
			path: '/cart', 
			component: Cart, alias: '/shopping-cart'
		},
		{
			path: '*',
			component: { template: '<h1>Page not found!</h1>'}
		}
	];
