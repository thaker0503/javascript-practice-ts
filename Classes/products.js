class Product{
    constructor(prodName, prodID, prodPrice) {
        this.prodName = prodName;
        this.prodID = prodID;
        this.prodPrice = prodPrice;

    }
}

class App{
    addProductToList(product) {
        console.log("Adding Product to the list")
        const result = $("#result")
        const row = $(`
            <tr class="list ">
                <td>${product.prodID}</td>
                <td>${product.prodName}</td>
                <td>${product.prodPrice}</td>
        
            </tr>
        `)

        

        result.append(row)
    }

    showMessage(message,className) {
        const alert = $(".alert")

        alert.addClass(`${className}`)
        alert.text(`${message}`)
        setTimeout(() => {
            alert.removeClass(`${className}`)
        }, 2000);

    }

    addAnimation(id) {
        $(`.${id}`).addClass("animation")
    }
}

const btn = $("#submitBtn")
btn.click(function (e) {
    e.preventDefault();
    console.log("Btn Clicked..")
    const name = $("#prodName").val();
    const price = $("#prodPrice").val();
    const id = $("#prodId").val();

    const app = new App();
    if (name == '' || price == '' || id == '') {
        console.log("If ran")
        app.showMessage("Please fill all details","error")
    } else {
        console.log("Else ran")
        const product = new Product(name, id, price);


        app.addProductToList(product)
        app.showMessage("Product added Successfully","success")
    }
})