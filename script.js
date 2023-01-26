const main = document.getElementById("main")
const basket = document.getElementById("basket")

const data = [
    {name:"card1",price:"5,900.00 AMD",text: "photo print t-shirt",image: "https://static.zara.net/photos///2022/I/0/2/p/6224/317/250/2/w/750/6224317250_6_1_1.jpg?ts=1658302727669"},
    {name:"card2",price:"15,900.00 AMD",text: "quilted check overshirt",image: "https://static.zara.net/photos///2022/I/0/2/p/7036/375/330/2/w/750/7036375330_6_1_1.jpg?ts=1668441994658"},
    {name:"card3",price:"12,900.00 AMD",text: "striped cotton - linen shirt",image: "https://static.zara.net/photos///2022/I/0/2/p/2688/230/018/2/w/750/2688230018_6_1_1.jpg?ts=1656661638436"},
    {name:"card4",price:"15,900.00 AMD",text: "overshirt with zip",image: "https://static.zara.net/photos///2022/I/0/2/p/1538/318/804/2/w/750/1538318804_6_1_1.jpg?ts=1662539455098"},
    {name:"card5",price:"15,900.00 AMD",text: "denim overshirt",image: "https://static.zara.net/photos///2022/I/0/2/p/6917/337/427/2/w/750/6917337427_6_1_1.jpg?ts=1662049082453"},
    {name:"card6",price:"9,900.00 AMD",text: "knit fabric trainers",image: "https://static.zara.net/photos///2022/I/1/2/p/2202/020/107/2/w/750/2202020107_6_3_1.jpg?ts=1659968289561"},
]

let total = 0
data.forEach(function(el,i){
    const item = document.createElement("div");
    item.className = "product";
    const image = document.createElement("img");
    image.className = "productImg";
    image.src = el.image;
    const textBox = document.createElement("p");
    const priceBox = document.createElement("p");
    const buyBtn = document.createElement("button");
    const input = document.createElement("input");
    input.setAttribute("type", "number")
    buyBtn.id = ("btn" + i)
    input.className = "element_input"
    
    buyBtn.addEventListener("click", clickbtn)
    function clickbtn(){
        if (input.value>0){
            basket.textContent = total += +input.value
        }
    }
    const btnText = document.createTextNode("Add to Basket")
    buyBtn.appendChild(btnText)
    textBox.textContent = el.text;
    priceBox.textContent = el.price;
    item.appendChild(image)
    item.appendChild(textBox)
    item.appendChild(priceBox)
    item.appendChild(buyBtn)
    item.appendChild(input)
    main.appendChild(item)
})






