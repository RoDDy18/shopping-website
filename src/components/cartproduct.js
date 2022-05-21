app.component("cart-product", {
    template:/*html*/
    `
    <div class="cart-item">
        <div class="cart-product-picture">
            <img :src="this.path" alt="">
        </div>
        <div class="cart-product-details">
            <h2 class="cart-product-name">{{name}}</h2>
            <p class="cart-product-price">$ {{price}}</p>
            <!--<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique placeat esse qui nostrum praesentium ad earum est sapiente facere debitis quo explicabo, ab fuga voluptatem! In eius assumenda est sed!</p>-->
            <div class="cart-flex">
            <button class="cart-remove">Remove</button>
            <div class="quantity">
                <button class="cart-quantity">-</button>
                <p class="cart-quantity-num">{{quantity}}</p>
                <button class="cart-quantity">+</button>
            </div>
            </div>
            
        </div>
    </div>
    `,
    data:()=>{
        return {
            name:"New Product",
            price:0,
            quantity:1,
            path:""
        }
    },
    props:{
        productname:{
            type: String,
            required:false
        },
        productprice:{
            type: Number,
            required:false
        },
        productimg:{
            type:String,
            required:false
        }
    },
    created(){
        this.name = this.productname;
        this.price = this.productprice;
        this.path = this.productimg;
    }
});