app.component("nav-bar", {
    template:/*html*/
    `
    <div class="navbar" id="navBar">
            <i class="fa fa-bars menu-icon" aria-hidden="true" id="menu-icon" onclick="togglemenu()"></i>
            <strong class="logo" id="logo">LOGO</strong>
            <!-- <div class="search">
                <input type="text" class="search-box" placeholder="Search brands, products and categories">
                <button><i class="fa fa-search"></i></button>
            </div> -->
            
            <nav>
                <i class="fa fa-shopping-cart" id="cart2"></i>
                <ul id="menu-list1">
                <li id="link"><i class="fa fa-shopping-cart" id="cart" aria-hidden="true"></i> ( 0 )</li>
                <li id="link"><a href="">Products</a></li>
                <li id="link"><a href="">About</a></li>
                <li id="contacts"><a href="">Contacts</a></li>
                </ul> 

                <ul id="menu-list2">
                    <li id="live-help"><a href=""><i class="fa fa-commenting"></i> Live Help</a></li>
                    <li id="tag">My Account</li>
                    <li><a href=""><i class="fa fa-envelope"></i> Orders</a></li>
                    <li><a href=""><i class="fa fa-spinner"></i> Pending Review</a></li>
                    <li><a href=""><i class="fa fa-gift"></i> Coupons</a></li>
                    <li><a href=""><i class="fa fa-heart"></i> Saved Items</a></li>
                    <li id="tag">Our Categories</li>
                    <li></li>
                </ul> 

            </nav>
        </div>
    `,
    data: ()=>{
        return {}
    }
})