function Product(options) {
    this.name = options.name;
    this.price = options.price;
    this.discount = options.discount;
    this.subproducts = options.subproducts;
    this.tax = options.tax;
    this.materials = options.materials;
    this.imgUrls = options.imgUrls;
}

function ProductBuilder() {
    let options = {
        name: '',
        price: 0,
        discount: 0,
        subproducts: [],
        tax: 0,
        materials: '',
        imgUrls: [],
    };
    return {
        setName: function (theName) {
            options.name = theName;
            return this;
        },
        setPrice: function (price) {
            options.price = price;
            return this;
        },
        setDiscount: function (discount) {
            options.discount = discount;
            return this;
        },
        setPrice: function (price) {
            options.price = price;
            return this;
        },
        setSubproducts: function (subproducts) {
            options.subproducts = subproducts;
            return this;
        },
        setTax: function (tax) {
            options.tax = tax;
            return this;
        },
        setMaterial: function (materials) {
            options.materials = materials;
            return this;
        },
        setImgUrls: function (imgUrls) {
            options.imgUrls = imgUrls;
            return this;
        },
        build: function () {
            return new Product(options);
        },
    };
}

let aProduct = new ProductBuilder()
               .setName('T Shirt')
               .setPrice(3000)
               .setDiscount(0.1)
               .setImgUrls(['https.aaa', 'https.bbb'])
               .setSubproducts([
                    {id: 1, name: 'aaa'},
                    {id: 2, name: 'bbb'},
               ])
               .setTax(0.1)
               .setMaterial('coton')
               .build();

console.log(aProduct)
