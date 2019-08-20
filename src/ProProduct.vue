<template>
    <div><br><br>
        <button class="btn btn-default" ></button>

       <h1> {{ product.name }} </h1>

       <ul class="nav nav-pills">
	       	<router-link class="presentation" 
	       		:to="{ name: 'viewProduct', params: { productId: product.id } }",
	       		tag="li"
	       		active-class="active">
	       		<a>Details</a>
	   		</router-link>

	   		<router-link class="presentation" 
	       		:to="{ name: 'productReviews', params: { productId: product.id } }",
	       		tag="li"
	       		active-class="active">
	       		<a>Reviews</a>
	   		</router-link>
       </ul>

       <hr>
       
       <router-view></router-view> 	

        <div v-if="relatedProducts != null">
            <h2>Related Products</h2>
            <ul>
                <li v-for="related in relatedProducts">
                    <router-link :to="{ name: 'viewProduct', params: { productId: related.id } }">
                        {{ related.name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    import { products } from './data/products';

    export default {
        props: {
            productId: {
                required: true
            }
        },
        data() {
            return {
                products: products,
                product: null
            };
        },
        created() {
            this.product = this.getProduct(this.productId);
        },
        watch: {
            productId( newValue, oldValue ){
                this.product = this.getProduct(newValue);
            }
        },
        methods: {
            getProduct(productId) {
                let match = null;

                this.products.forEach(function(product) {
                    if (product.id == productId) {
                        match = product;
                    }
                });
                return match;
            }
        }
    }
</script>