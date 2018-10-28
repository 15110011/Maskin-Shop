function fetchProducts(done) {
    $.get('/products', function (data) {
        done(data)
    })
}
function createProductCard(product) {
    return $(`
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 product-border pt-4">
        <div class="card">
            <div class="card-image">
                <a href="#">
                    <img class="card-img-top img-fluid" src="/images/product1.png" alt="product">
                </a>
            </div>
            <div class="text-center card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text" id="original">
                <span>
                <del>${product.oldprice}đ</del>
                </span> ${product.price}đ</p>
                <button class="btn btn-success">Mua ngay</button>
            </div>
        </div>
    </div>
    `)
}
(function () {
    let productList = $('#product-list')

    fetchProducts(function(products){
        productList.empty()
        for(product of products){
            productList.append(createProductCard(product))
        }
    })
})()