const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const productsContainer = document.getElementById('product1');

/* Hamburguer menu */

if ( bar ) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if ( close ) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


/* show small products */

const MainImg = document.getElementById('MainImg');
const smallimg = document.getElementsByClassName('small-img');

smalling[0].onclick = function(){
    MainImg.src = smalling[0].src;
}
smalling[1].onclick = function(){
    MainImg.src = smalling[1].src;
}
smalling[2].onclick = function(){
    MainImg.src = smalling[2].src;
}
smalling[3].onclick = function(){
    MainImg.src = smalling[3].src;
}

//Show products 
showProducts(stockProductos)

function showProducts(array) {
    productsContainer.innerHTML = '';
    for (const producto of array) {
        let div = document.createElement('div')
        div.className = 'section-p1'
        div.innerHTML += `<h2>Featured products</h2>
                            <p>Summer Collection New Morden Design</p>
                            <div class="pro-container">
                                <div class="pro">
                                    <img class="img-prod" src=${producto.img}>
                                    <div class="des">
                                        <span>Colombian Coffee</span>
                                        <h5>Grane Colombian Coffee  </h5>
                                        <div class="star">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <h4>$15</h4>
                                    </div>
                                    <a href="#"><i class="fa-solid fa-cart-arrow-down"></i></a>
                                </div>
                            </div>`
        productsContainer.appendChild(div);
    }
}