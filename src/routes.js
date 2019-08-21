import Product from './Product.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue'
import ProProduct from './ProProduct.vue';
import ProReviews from './ProductReview.vue';
import SpecialOffer from './SpecialOffer.vue'
import ViewProfile from './ViewProfile.vue'

export const routes = [
		{
			path: '',
			components: {
				default: Product,
				discount: SpecialOffer
			}
		},
		{
			path: '/products/:productId',
			props: true,
			name: 'product',
			component: ProProduct,
			children: [
				{ path: 'details', name: 'viewProduct', props: true, component: ViewProduct },
				{ path: 'reviews', name: 'productReviews', props: true, component: ProReviews }
			]
		},
		{
			path: '/cart', 
			component: Cart, alias: '/shopping-cart'
		},
		{
			path: '/user/viewProfile',
			name: 'viewProfile',
			component: ViewProfile,
			meta: {
				isAuthRequired: true
			}
		},
		{
			path: '*',
			component: { template: '<h1>Page not found!</h1>'}
		}
	];
