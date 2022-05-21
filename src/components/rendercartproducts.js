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
        let defRender = /*html*/`<div class="render-default"><p>No Products In Cart</p></div>`;
        
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
                        <button class="cart-remove" onclick="clearProduct(${res.id})">Remove</button>
                        <div class="quantity">
                            <button class="cart-quantity" onclick="decrement(${res.id})">-</button>
                            <p class="cart-quantity-num">1</p>
                            <button class="cart-quantity" onclick="increment(${res.id})">+</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
        if(render == ""){
            $(".render-cart-items").html(defRender);
        }else{
            $(".render-cart-items").html(render);
        }
        
    }
});


const decrement = async (id)=>{
    await fetch("http://localhost:3000/products/"+id, {
        method:"PATCH",
        headers:{"Content-Type":"application-json"},
        body:JSON.stringify({
            quantity:-1
        })
    });
}

const increment = async (id)=>{
    await fetch("http://localhost:3000/products/"+id, {
        method:"PATCH",
        headers:{"Content-Type":"application-json"},
        body:JSON.stringify({
            quantity:+1
        })
    });
}

const clearProduct = async (id)=>{
    await fetch("http://localhost:3000/products/"+id, {
        method:"DELETE",
    });
}