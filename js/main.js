
const products = [
    {
        "id":1,
        "name":"Bottol Gaurd (Lauki)",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/9-400x400.jpg",
        "sale":"Sale!",
        "type":"BROAD BEANS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"$85.00",
        "price":60, 
        "sprice":"$60.00",  
    },
    {
        "id":2,
        "name":"Germany Chilles Local",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/11-400x400.jpg",
        "sale":"Sale!",
        "type":"GREEN PEAS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"",
        "price":95, 
        "sprice":"$95.00"
    },
    {
        "id":3,
        "name":"Apple Gourd - 1Kg",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/13-400x400.jpg",
        "sale":"Sale!",
        "type":"CRUCIFEROUS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"$70.00",
        "price":65, 
        "sprice":"$65.00"
    },
    {
        "id":4,
        "name":"Apple China Imported",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/17-400x400.jpg",
        "type":"GREEN VEGETABLES",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "price":100, 
        "sprice":"$100.00"
    },
    {
      "id":5,
        "name":"Eurppean Lemon Zest",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/1-400x400.jpg",
        "sale":"Sale!",
        "type":"CRUCIFEROUS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"$80.00",
        "price":70, 
        "sprice":"$70.00"
    },
    {
        "id":6,
        "name":"Cabbage Band Gobhi",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/2-400x400.jpg",
        "type":"PHONE",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "price":95, 
        "sprice":"$95.00"
    },
    {
        "id":7,
        "name":"Green Papaya - 1Kg",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/12-400x400.jpg",
        "type":"CHICKPEA",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"",
        "price":65, 
        "sprice":"$65.00"
    },
    {
      "id":8,
        "name":"Apple Golden Local",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/18-400x400.jpg",
        "type":"GREEN VEGETABLES",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"",
        "price":80, 
        "sprice":"$80.00"
    },
    {
        "id":9,
        "name":"Green Thick Chilli",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/15-400x400.jpg",
        "type":"EDIBLE PLANT STEM",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "price":86, 
        "sprice":"$86.00"
    },
    {
        "id":10,
        "name":"Tomato (Tamatar)",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/4-400x400.jpg",
        "type":"PHONE",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "price":80, 
        "sprice":"$80.00"
    },
    {
        "id":11,
        "name":"Pineapple Imported",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/9-400x400.jpg",
        "type":"LEAFY GREEN",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"",
        "price":151, 
        "sprice":"$148.00 - $151.00"
    },
    {
        "id":12,
        "name":"Broccolo Local",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/7-400x400.jpg",
        "type":"PHONE",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "price":100, 
        "sprice":"$100.00"
    },



]
const newproducts = [
  {
    "id":13,
    "name":"Apple China Imported",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/17-400x400.jpg",
    "type":"GREEN VEGETABLES",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"",
    "price":100, 
    "sprice":"$100.00"
  },
  {
    "id":14,
    "name":"Apple Golden Local",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/18-400x400.jpg",
    "type":"GREEN VEGETABLES",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"",
    "price":80, 
    "sprice":"$80.00"
  },
  {        
    "id":15,
    "name":"Apple Gourd - 1Kg",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/13-400x400.jpg",
    "sale":"Sale!",
    "type":"CRUCIFEROUS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"$70.00",
    "price":65, 
    "sprice":"$65.00"
  },
  {
    "id":16,
    "name":"Bathua Saag/Leaves",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/3-400x400.jpg",
    "type":"PHONE",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"",
    "price":115, 
    "sprice":"$115.00"
  },
  {
    "id":17,
    "name":"Bottol Gaurd (Lauki)",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/9-400x400.jpg",
    "sale":"Sale!",
    "type":"BROAD BEANS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"$85.00",
    "price":60, 
    "sprice":"$60.00"
  },
  {
    "id":18,
    "name":"Broccolo Local",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/7-400x400.jpg",
    "type":"PHONE",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"",
    "price":100, 
    "sprice":"$100.00"
  },
  {
    "id":19,
    "name":"Cabbage Band Gobhi",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/2-400x400.jpg",
    "type":"PHONE",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"",
    "price":95, 
    "sprice":"$95.00"
  },
  {
    "id":20,
    "name":"Coiander Leaves",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/6-400x400.jpg",
    "type":"BROAD BEANS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":" ",
    "price":0, 
    "sprice":" "
  },
  {
    "id":21,
    "name":"Eurppean Lemon Zest",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/1-400x400.jpg",
    "sale":"Sale!",
    "type":"CRUCIFEROUS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"$80.00",
    "price":70, 
    "sprice":"$70.00"
  },
  {
    "id":22,
    "name":"Germany Chilles Local",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/11-400x400.jpg",
    "sale":"Sale!",
    "type":"GREEN PEAS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"",
    "price":95, 
    "sprice":"$95.00"
  },
  {
    "id":23,
    "name":"Grape Fruit Local",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/5-400x400.jpg",
    "type":"PHONE",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"",
    "price":115, 
    "sprice":"$115.00"
  },
  {
    "id":24,
    "name":"Green Matar - 500gm",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/8-400x400.jpg",
    "type":"BROAD BEANS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"",
    "price":78, 
    "sprice":"$78.00"
  },

]
const rate = [
  {
    "id":25,
    "name":"Coiander Leaves",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/6-400x400.jpg",
    "type":"BROAD BEANS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":" ",
    "price":0,
    "sprice":" "
  },
  {
    "id":26,
    "name":"Sugar Cane (Gunderi)",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/16-400x400.jpg",
    "sale":"Sale!",
    "type":"FRESH BEANS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"$68.00",
    "price":60,
    "sprice":"$60.00"
  },
  {
    "id":27,
    "name":"Grape Fruit Local",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/5-400x400.jpg",
    "type":"PHONE",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"",
    "price":115,
    "sprice":"$115.00"
  },
  {
    "id":28,
    "name":"Apple Gourd - 1Kg",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/13-400x400.jpg",
    "sale":"Sale!",
    "type":"CRUCIFEROUS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"$70.00",
    "price":65,
    "sprice":"$65.00"
  },
  {
    "id":29,
    "name":"Green Papaya - 1Kg",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/12-400x400.jpg",
    "type":"CHICKPEA",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"",
    "price":45,
    "sprice":"$45.00"
  },
  {
    "id":30,
    "name":"Germany Chilles Local",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/11-400x400.jpg",
    "type":"GREEN PEAS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"",
    "price":95,
    "sprice":"$95.00"
  },
  {
    "id":31,
    "name":"Tamarind Improted",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/10-400x400.jpg",
    "sale":"Sale!",
    "type":"BROAD BEANS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"$45.00",
    "price":40,
    "sprice":"$40.00"
  },
  {
    "id":32,
    "name":"Bottol Gaurd (Lauki)",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/9-400x400.jpg",
    "sale":"Sale!",
    "type":"BROAD BEANS",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"$85.00",
    "price":60,
    "sprice":"$60.00"
  },
  {
    "id":33,
    "name":"Pineapple Imported",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/9-400x400.jpg",
    "type":"LEAFY GREEN",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"",
    "price":148,
    "sprice":"$148.00 - $151.00"
  },
  {
    "id":34,
    "name":"Apple Golden Local",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/18-400x400.jpg",
    "type":"GREEN VEGETABLES",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    "uprice":"",
    "price":80,
    "sprice":"$80.00"
  },
  {
    "id":35,
    "name":"Apple China Imported",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/17-400x400.jpg",
    "type":"GREEN VEGETABLES",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"",
    "price":100,
    "sprice":"$100.00"
  },
  {
    "id":36,
    "name":"Green Thick Chilli",
    "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/15-400x400.jpg",
    "type":"EDIBLE PLANT STEM",
    "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    "uprice":"",
    "price":86,
    "sprice":"$86.00"
  },
]



const category = [
    {
        "name":"Bathua Saag/Leaves",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/3-400x400.jpg",
        "type":"PHONE",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "sprice":"$115.00"
    },
    {
        "name":"Bottol Gaurd (Lauki)",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/9-400x400.jpg",
        "sale":"Sale!",
        "type":"BROAD BEANS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"$85.00",
        "sprice":"$60.00"
    },
    {
        "name":"Broccolo Local",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/7-400x400.jpg",
        "type":"PHONE",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "sprice":"$100.00"
    },
    {
        "name":"Cabbage Band Gobhi",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/2-400x400.jpg",
        "type":"PHONE",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "sprice":"$95.00"
    },
    {
        "name":"Coiander Leaves",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/6-400x400.jpg",
        "sale":"Sale!",
        "type":"BROAD BEANS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":" ",
        "sprice":" "
    },
    {
        "name":"Eurppean Lemon Zest",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/1-400x400.jpg",
        "sale":"Sale!",
        "type":"CRUCIFEROUS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"$80.00",
        "sprice":"$70.00"
    },
]

const bot = [
    {
        "name":"Bottol Gaurd (Lauki)",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/9-400x400.jpg",
        "sale":"Sale!",
        "type":"BROAD BEANS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"$85.00",
        "sprice":"$60.00"
    },
    {
        "name":"Germany Chilles Local",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/11-400x400.jpg",
        "sale":"Sale!",
        "type":"GREEN PEAS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"",
        "sprice":"$95.00"
    },
    {
        "name":"Apple Gourd - 1Kg",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/13-400x400.jpg",
        "sale":"Sale!",
        "type":"CRUCIFEROUS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"$70.00",
        "sprice":"$65.00"
    },
    {
        "name":"Apple China Imported",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/17-400x400.jpg",
        "type":"GREEN VEGETABLES",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "sprice":"$100.00"
    },
    {
        "name":"Eurppean Lemon Zest",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/1-400x400.jpg",
        "sale":"Sale!",
        "type":"CRUCIFEROUS",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"$80.00",
        "sprice":"$70.00"
    },
    {
        "name":"Cabbage Band Gobhi",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/2-400x400.jpg",
        "type":"PHONE",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "sprice":"$95.00"
    },
    {
        "name":"Green Papaya - 1Kg",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/12-400x400.jpg",
        "type":"CHICKPEA",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"",
        "sprice":"$65.00"
    },
    {
        "name":"Apple Golden Local",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/18-400x400.jpg",
        "type":"GREEN VEGETABLES",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
        "uprice":"",
        "sprice":"$80.00"
    },
    {
        "name":"Green Thick Chilli",
        "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/15-400x400.jpg",
        "type":"EDIBLE PLANT STEM",
        "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
        "uprice":"",
        "sprice":"$86.00"
    },

]
$(document).ready(function(){
  $(".owl-carousellll").owlCarousel({
      dots:true,
      items:1,
      animateIn: "fadeSlideIn",
      animateOut:"fadeOut",
      autoplay:true,
      loop:true,
      autoplayTimeout: 10000,
  });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        responsiveClass:true,
        responsive:{
            300:{
                items: 2,
            },
            780:{
                items: 2,
                margin:0,

            },
            992:{
                items: 3,
                margin:0,

            },
            1200:{
                items: 3,
                margin:0,

            },
            1400:{
                items: 4,
                margin:0,

            },
            1500:{
                items: 5,
                margin:0,
            }
        },
    });
  });

$(document).ready(function(){
    $(".owl-carousell").owlCarousel({
        margin:20,
        responsiveClass:true,
        responsive:{
            300:{
                items: 2,
            },
            780:{
                items: 2,
            },
            992:{
                items: 3,

            },
            1400:{
                items: 4,

            },
            1500:{
                items: 6,
            }
        },
    });
  });

$(document).ready(function(){
  $(".owl-carouselll").owlCarousel({
      margin:0,
      loop:true,
      responsiveClass:true,
      responsive:{
          780:{
              items: 4,
          },
          1500:{
              items: 5,
          }
      },

  });
});

//"all" button
$(".all").click(function (e) { 
  e.preventDefault();
  if($(".alldropdown").css("display")=="none"){
    $(".alldropdown").css("display", "block");
  }else{
    $(".alldropdown").css("display", "none");
  }
});

//reder product
  products.map((val,idx)=> {
      if(idx===0 || idx%2===0){
          var next = products[idx+1];
          if(!next){
            $(`
            <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
              <div class="product">
                <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                    <a href="" class="one">${val.type}</a>
                    <a href="" class="two">${val.name}</a>
                    ${val.star}
                    <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                    </div>
                    </div>
                    <div class="card flex">
                    <a class="add" href="">ADD TO CART</a>
                    <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                    </div>
                    </div>
                    <div class="find">
                    <a href="">
                        <i class="fas fa-search"></i>
                    </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                </div>
              </div>
            </div>
            `).appendTo(".owl-carousel");              
          }
            if("sale" in val && "sale" in next){
                $(`
                <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${next.sale}</p>
                  </div>
                </div>
              </div>
                `).appendTo(".owl-carousel");
                  
            }
            else if(!("sale" in val) && ("sale" in next)){
              $(`
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src=" ${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>

                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p style="display: block;" class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${next.sale}</p>
                  </div>
                </div>
              </div>
              `).appendTo(".owl-carousel");
              

                  
            }
            else if("sale" in val && !("sale" in next)){
                $(`
                <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p style="display: block;" class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                `).appendTo(".owl-carousel");
                  
            }
            else{
                $(`
                <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                `).appendTo(".owl-carousel");
            }

      }
  });
  $(".new").click(function (e) { 
    $(".new").css("color","rgb(0, 0, 0")
    $(".best").css("color","rgb(128, 128, 128")
    $(".rate").css("color","rgb(128, 128, 128")
    e.preventDefault();
    var $carousel = $(".owl-carousel");
    $carousel.trigger('remove.owl.carousel', 0 );
    var length = $('.box').length;
    for (var i=0; i<length; i++) {
      $carousel.trigger('remove.owl.carousel', i );
    }
    newproducts.map((val,idx)=> {
      if(idx===0 || idx%2===0){
          var next = newproducts[idx+1];
          if(!next){

          $('.owl-carousel').owlCarousel('add', `<div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6"><div class="product"><div class="item"><img src="${val.img}" alt=""><div class="text"><a href="" class="one">${val.type}</a><a href="" class="two">${val.name}</a>${val.star}<div class="textin flex"><p class="in">${val.uprice}</p><p class="out">${val.sprice}</p></div></div><div class="card flex"><a href="">ADD TO CART</a><div class="icon"><a href=""><i class="far fa-heart"></i></a><a href=""><i class="fas fa-sync-alt"></i></a></div></div><div class="find"><a href=""><i class="fas fa-search"></i></a></div><p class="sale">${val.sale}</p></div></div></div>`).owlCarousel('update');
           
            
          }
            if("sale" in val && "sale" in next){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${next.sale}</p>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')

                  
            }
            else if("sale" in val && !("sale" in next)){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p style="display: block;" class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')

                  
            }
            else if(!("sale" in val) && ("sale" in next)){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>

                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p style="display: block;" class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${next.sale}</p>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')
              

                  
            }
            else{
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')

            }

      }
    })
    
  });

  $(".best").click(function (e) { 
    $(".best").css("color","rgb(0, 0, 0")
    $(".new").css("color","rgb(128, 128, 128")
    $(".rate").css("color","rgb(128, 128, 128")
    e.preventDefault();
    var $carousel = $(".owl-carousel");
    $carousel.trigger('remove.owl.carousel', 0 );
    var length = $('.box').length;
    for (var i=0; i<length; i++) {
      $carousel.trigger('remove.owl.carousel', i );
    }
    products.map((val,idx)=> {
      if(idx===0 || idx%2===0){
          var next = products[idx+1];
          if(!next){

          $('.owl-carousel').owlCarousel('add', `<div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6"><div class="product"><div class="item"><img src="${val.img}" alt=""><div class="text"><a href="" class="one">${val.type}</a><a href="" class="two">${val.name}</a>${val.star}<div class="textin flex"><p class="in">${val.uprice}</p><p class="out">${val.sprice}</p></div></div><div class="card flex"><a href="">ADD TO CART</a><div class="icon"><a href=""><i class="far fa-heart"></i></a><a href=""><i class="fas fa-sync-alt"></i></a></div></div><div class="find"><a href=""><i class="fas fa-search"></i></a></div><p class="sale">${val.sale}</p></div></div></div>`).owlCarousel('update');
           
            
          }
            if("sale" in val && "sale" in next){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${next.sale}</p>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')

                  
            }
            else if(("sale" in val) && !("sale" in next)){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p style="display: block;" class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')


                  
            }
            else if(!("sale" in val) && ("sale" in next)){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>

                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p style="display: block;" class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${next.sale}</p>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')
              

                  
            }
            else{
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')

            }

      }
  })
    
  });

  $(".rate").click(function (e) { 
    $(".rate").css("color","rgb(0, 0, 0")
    $(".new").css("color","rgb(128, 128, 128")
    $(".best").css("color","rgb(128, 128, 128")
    e.preventDefault();
    var $carousel = $(".owl-carousel");
    $carousel.trigger('remove.owl.carousel', 0 );
    var length = $('.box').length;
    for (var i=0; i<length; i++) {
      $carousel.trigger('remove.owl.carousel', i );
    }
    rate.map((val,idx)=> {
      if(idx===0 || idx%2===0){
          var next = rate[idx+1];
          if(!next){

          $('.owl-carousel').owlCarousel('add', `<div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6"><div class="product"><div class="item"><img src="${val.img}" alt=""><div class="text"><a href="" class="one">${val.type}</a><a href="" class="two">${val.name}</a>${val.star}<div class="textin flex"><p class="in">${val.uprice}</p><p class="out">${val.sprice}</p></div></div><div class="card flex"><a href="">ADD TO CART</a><div class="icon"><a href=""><i class="far fa-heart"></i></a><a href=""><i class="fas fa-sync-alt"></i></a></div></div><div class="find"><a href=""><i class="fas fa-search"></i></a></div><p class="sale">${val.sale}</p></div></div></div>`).owlCarousel('update');
           
            
          }
            if("sale" in val && "sale" in next){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${next.sale}</p>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')

                  
            }
            else if(("sale" in val) && !("sale" in next)){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item">
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${val.sale}</p>
                  </div>
                </div>
                <div class="product">
                  <div class="item">
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p style="display: block;" class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')


                  
            }
            else if(!("sale" in val) && ("sale" in next)){
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>

                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p style="display: block;" class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                    <p class="sale">${next.sale}</p>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')
              

                  
            }
            else{
              $('.owl-carousel').owlCarousel('add', `
              <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div class="product">
                  <div class="item" data-id=${val.id}>
                    <img src="${val.img}" alt="">
                    <div class="text">
                      <a href="" class="one">${val.type}</a>
                      <a href="" class="two">${val.name}</a>
                      ${val.star}
                      <div class="textin flex">
                        <p class="in">${val.uprice}</p>
                        <p class="out">${val.sprice}</p>
                      </div>
                      
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="product">
                  <div class="item" data-id=${next.id}>
                     <img src="${next.img}" alt="">
                     <div class="text">
                      <a href="" class="one">${next.type}</a>
                      <a href="" class="two">${next.name}</a>
                      ${next.star}
                      <div class="textin flex">
                        <p class="in">${next.uprice}</p>
                        <p class="out">${next.sprice}</p>
                      </div>
                    </div>
                    <div class="card flex">
                      <a class="add" href="">ADD TO CART</a>
                      <div class="icon">
                        <a href=""><i class="far fa-heart"></i></a>
                        <a href=""><i class="fas fa-sync-alt"></i></a>
                      </div>
                    </div>
                    <div class="find">
                      <a href="">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              `).owlCarousel('update')

            }

      }
  })
    
  });


  category.map((val)=>{
      if("sale" in val){
          $(`
          <div class="box col-lg-2 col-lg-4 col-md-4 col-sm-6 col-sx-6">
          <div class="product">
            <div class="item">
                <img src="${val.img}" alt="">
                <div class="text">
                <a href="" class="one">${val.type}</a>
                <a href="" class="two">${val.name}</a>
                ${val.star}
                <div class="textin flex">
                    <p class="in">${val.uprice}</p>
                    <p class="out">${val.sprice}</p>
                </div>
                </div>
                <div class="card flex">
                <a href="">ADD TO CART</a>
                <div class="icon">
                    <a href=""><i class="far fa-heart"></i></a>
                    <a href=""><i class="fas fa-sync-alt"></i></a>
                </div>
                </div>
                <div class="find">
                <a href="">
                    <i class="fas fa-search"></i>
                </a>
                </div>
                <p class="sale">${val.sale}</p>
            </div>
          </div>
        </div>
          `).appendTo('.owl-carousell');
          
      } else{
        $(`
        <div class="box col-lg-2 col-lg-4 col-md-4 col-sm-6 col-sx-6">
        <div class="product">
          <div class="item">
              <img src="${val.img}" alt="">
              <div class="text">
              <a href="" class="one">${val.type}</a>
              <a href="" class="two">${val.name}</a>
              ${val.star}
              <div class="textin flex">
                  <p class="in">${val.uprice}</p>
                  <p class="out">${val.sprice}</p>
              </div>
              </div>
              <div class="card flex">
              <a href="">ADD TO CART</a>
              <div class="icon">
                  <a href=""><i class="far fa-heart"></i></a>
                  <a href=""><i class="fas fa-sync-alt"></i></a>
              </div>
              </div>
              <div class="find">
              <a href="">
                  <i class="fas fa-search"></i>
              </a>
              </div>
          </div>
        </div>
      </div>
        `).appendTo('.owl-carousell');
      }
  })

  bot.map((val,idx)=>{
    if(idx === 0 || idx % 3 === 0){
        const next = products[idx+1];
        const nextt =products[idx+2];
        $(`
        <div class="feature col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="title">
          <h3>Featured Products</h3>
          <p>Add featured products to weekly line up</p>
        </div>
        <div class="product">
          <div class="item">
              <img src="${val.img}" alt="">
              <div class="text">
                <p href="" class="one">${val.type}</p>
                <p href="" class="two">${val.name}</p>
                ${val.star}
                <div class="textin flex">
                    <p class="in">${val.uprice}</p>
                    <p class="out">${val.sprice}</p>
                </div>
              </div>
          </div>
        </div>
        <div class="product">
          <div class="item">
              <img src="${next.img}" alt="">
              <div class="text">
                <p href="" class="one">${next.type}</p>
                <p href="" class="two">${next.name}</p>
                ${next.star}
                <div class="textin flex">
                    <p class="in">${next.uprice}</p>
                    <p class="out">${next.sprice}</p>
                </div>
              </div>
          </div>
        </div>
        <div class="product">
          <div class="item">
              <img src="${nextt.img}" alt="">
              <div class="text">
                <p href="" class="one">${nextt.type}</p>
                <p href="" class="two">${nextt.name}</p>
                ${nextt.star}
                <div class="textin flex">
                    <p class="in">${nextt.uprice}</p>
                    <p class="out">${nextt.sprice}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
        `).prependTo(".bottom");

    }
  })

  $(window).scroll(function () { 
    const pos = $(this).scrollTop();
    if(pos > 200){
       $(".totop").addClass("fixed");
       $(".scroll").addClass("fixed");
      $(".scroll").css("display", "block");
    }else{
      $(".totop").removeClass("fixed");
      $(".scroll").removeClass("fixed");
      $(".scroll").css("display", "none");
    }
  });

  $(".totop").click(function (e) { 
    e.preventDefault();
    $("body, html").animate({
      scrollTop: 0,
    })
  });

  //add to cart 
  //get id and add to cart
  const cart = [];

  $(document).on("click",".add", function (e) {
    e.preventDefault();
    const id = $(this).parents(".item").data("id");
    //check which are already exist
    const ind = cart.findIndex((val) => val.id === id)
    if(ind !== -1){
      cart[ind].quantity = cart[ind].quantity + 1;
    } else {
      // add product to cart
      if(id <= 12 ){
        const product = products.find( (val) => val.id === id)
        cart.push( {...product, quantity: 1 });
      } else if(id > 12 && id <= 24) {
        const product = newproducts.find( val => val.id === id)
        cart.push( {...product, quantity: 1 });
      } else {
        const product = rate.find( (val) => val.id === id)
        cart.push( {...product, quantity: 1 });
      }
    }
    //render th cart 
    renderCart(cart);
    renderPrice(cart);

  });
  $(document).on("click",".delete",function () {
    const id = $(this).parents("li").data("id")
    const idx = cart.findIndex((val) => val.id === id)
    cart.splice(idx, 1);
    renderCart(cart);
    renderPrice(cart);
    renderEmpty(cart);
    $(".cartDown").css("display", "none");
  });

  function renderCart(cart) {
    $(".cartDown ul").empty();
    cart.map(val=> {
      $(`
      <li data-id = ${val.id} >
        <div class="image">
          <img src="${val.img}" alt="">
        </div>
        <div class="text">
          <a href="">${val.name}</a>
          <p><span class="quantity">${val.quantity} x </span>${val.sprice}</p>
        </div>
        <div class="close">
          <p class = "delete">x</p>
        </div>
      </li>
      `).appendTo(".cartDown ul");
    })
    
    $(".cart-number").text(`${cart.length}`);
  }
  function renderPrice (cart){
    $(".button").empty();
    const total = cart.reduce((acc,val) => acc + val.price * val.quantity , 0)
    $(`
    <div class="total">
      <p>Subtotal:</p>
      <p>$<span class ="totalPrice">${total}</span>.00</p>
    </div>
    <button>VIEW CART</button>
    <button>CHECK OUT</button>
    `).appendTo(".button");
  }
  function renderEmpty(cart){
    if(cart.length === 0){
      $(".cartDown").empty();
      $(`
      <ul class = "down">
        <p>No products in cart</p>
      </ul>
      <div class="button">
  
      </div>
      `).appendTo(".cartDown");
    }
  }

//cart-dropdown 
$('.shop').hover(function() {
  $(".cartDown").slideToggle(500);
});

//compare
const compareProducts = [
  {
      "id":1,
      "name":"Bottol Gaurd (Lauki)",
      "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/9-400x400.jpg",
      "sale":"Sale!",
      "type":"BROAD BEANS",
      "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
      "uprice":"$85.00",
      "price":60, 
      "sprice":"$60.00",  
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi distinctio. Obcaecati tenetur molestiae, suscipit necessitatibus, veniam quos earum est vero deleniti sunt qui modi quod quae rem nulla architecto!"
  },
  {
      "id":2,
      "name":"Germany Chilles Local",
      "img":"http://demo.roadthemes.com/safira/electronic/wp-content/uploads/2020/09/11-400x400.jpg",
      "sale":"Sale!",
      "type":"GREEN PEAS",
      "star":"<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
      "uprice":"",
      "price":95, 
      "sprice":"$95.00",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi distinctio. Obcaecati tenetur molestiae, suscipit necessitatibus, veniam quos earum est vero deleniti sunt qui modi quod quae rem nulla architecto!"
  },
]
compareProducts.map((val,idx)=> {
  $(`
  <td><img src="${val.img}" alt=""></td>
  `).appendTo(".imgT");
  $(`
  <td>${val.name}</td>
  `).appendTo(".titleT");
  $(`
  <td>${val.sprice}</td>
  `).appendTo(".priceT");
  $(`
  <td>${val.description}</td>
  `).appendTo(".descriptionT");
    $(`
  <td>-</td>
  `).appendTo(".skuT");
  $(`
  <td>Out of stock</td>
  `).appendTo(".availabilityT");
  $(`
  <td>-</td>
  `).appendTo(".weightT");
  $(`
  <td>N/A</td>
  `).appendTo(".demensionsT");
  $(`
  <td>Defaut</td>
  `).appendTo(".colorT");
});
