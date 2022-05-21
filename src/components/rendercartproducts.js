app.component("render-cart-items", {
    template:/*html*/
    `
        <div class="render-cart-items"></div>
    `,
    data:()=>{
        return {}
    },
    async created(){
        let url = "http://localhost:3000/products";
        let getCartProducts = await fetch(url);
        let res = await getCartProducts.json();
        let render = "";
        
        res.forEach(res => {
            render += /*html*/`
            <div class="cart-item">
                <div class="cart-product-picture">
                    <img src="${res.path}" alt="">
                </div>
                <div class="cart-product-details">
                    <h2 class="cart-product-name">${res.productName}</h2>
                    <p class="cart-product-price">$ ${res.price}</p>
                    <!--<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique placeat esse qui nostrum praesentium ad earum est sapiente facere debitis quo explicabo, ab fuga voluptatem! In eius assumenda est sed!</p>-->
                    <div class="cart-flex">
                        <button class="cart-remove">Remove</button>
                        <div class="quantity">
                            <button class="cart-quantity" onclick="dude()">-</button>
                            <p class="cart-quantity-num">1</p>
                            <button class="cart-quantity">+</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
        $(".render-cart-items").html(render);
        
    }
});


const dude = ()=>{
    alert("You Clicked Me");
}