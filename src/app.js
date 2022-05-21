const app = Vue.createApp({
    data:()=>{
        return {
            cart: 0
        }
    },
    methods:{
        async sendToCart(product){
            //this.cart += 1;
            let doc = {
                productName:product.name,
                price:product.price,
                path:product.img
            };
            await fetch("http://localhost:3000/products", {
                method:"POST",
                body:JSON.stringify(doc),
                headers:{"Content-Type":"application/json"}
            });
        }
    },
    created(){
        window.addEventListener("DOMContentLoaded", async ()=>{
            let url = "http://localhost:3000/products";
            let getCartLength = await fetch(url);
            let res = await getCartLength.json();
            this.cart = res.length;
            
        });
    }
})