app.component("product", {
    template:/*html*/
    `
        <div class="product">
            <img v-bind:src="this.img" alt="" class="productImg">
            <h1>{{name}}</h1>
            <h2 class="price">$ {{price}}</h2>
            <p>{{description}}</p><br>
            <input type="submit" value="Add To Cart" @click.prevent="addToCart(this.name,this.img,this.price)">
        </div> 
    `,
    data: ()=>{
        return {
            name:"",
            description:"",
            img:"",
            price:"",
            quanity:1,
        }
    },
    props:{
        productname:{
            type: String,
            required: true
        },
        productdesc:{
            type: String,
            required: true
        },
        productimg:{
            type:String,
            required: true
        },
        productprice:{
            type: String,
            required: true
        }
    },
    created(){
        this.name = this.productname;
        this.description = this.productdesc;
        this.img = this.productimg;
        this.price = this.productprice;
    },
    methods:{
        addToCart(name, img, price){
            let product = {
                name: name,
                img: img,
                price: price
            }
            this.$emit("add-to-cart", product);
        }
    }
})