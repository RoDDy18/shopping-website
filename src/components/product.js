app.component("product", {
    template:/*html*/
    `
        <div class="product">
            <img v-bind:src="this.img" alt="" class="productImg">
            <h1>{{name}}</h1>
            <h2 class="price">$ {{price}}</h2>
            <p>{{description}}</p>
            <h4 class="quanity">Quanity: {{quanity}}</h4>
            <input type="text" placeholder="Product Quanity" v-model="quanity"><br>
            <input type="submit" value="Buy" @click.prevent="addToCart">
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
        addToCart(){
            this.$emit("add-to-cart")
        }
    }
})