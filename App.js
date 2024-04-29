import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
function App() {
  const [product, setProduct] = useState([
    {
      url: 'https://rukminim2.flixcart.com/image/850/1000/l3ahpjk0/shoe/z/d/a/6-2202-6-xtoon-white-original-imagefct8fcmpdkd.jpeg?q=90&crop=false',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2bH8wtbrLrEbTmax52ACscPMcnGuscxHpQ&s',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf84jAMlw05XWydTpWH55bh-rjzbg5P-2pmQ&s',
      name: 'Security camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://images-cdn.ubuy.co.in/6571aa80da6b2d46eb6cd43f-smart-watch-pink-wireless-bluetooth.jpg',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzw2Z2qbQ3qgreI433oD0ZjPjjzOeWqTqFOd5xmNJhHQ&s',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
    {
      url: 'https://sparkcolours.in/cdn/shop/files/Slide12_6fa654fc-7c60-42ce-8ef1-9f6f9dfa3b3d.jpg?v=1690367156',
      name: 'Yellow-black-tshirt',
      category: 'T-shirt',
      seller: 'ABD Ltd',
      price: 200
    },
    {
      url: 'https://www.orra.co.in/media/catalog/product/cache/a062e776095ada03f265202079309f18/o/s/osn19041_2_gpkemjdffhlflbgm.jpg',
      name: 'White-stone Neclace',
      category: 'Neclace',
      seller: 'ABD Shopper',
      price: 850
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Kt48JU25Pn5mbgHzhXIQwZwJiaLUgQwYyg&s',
      name: 'Kids Kurti set',
      category: 'White-Kurti',
      seller: 'ABD Shopper',
      price: 1199
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW7EZ15P94G-tVpafO-QDsSHfSfjiOlamGmguPJHj1Q&s',
      name: 'Green-Skyblue Silk Saree',
      category: 'Silk Saree',
      seller: 'Nandu Saree Center',
      price: 2500
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMDYMO47ym1t28wSYKlHQ_VjkP5Szw-SqRxKjyd5dmQ&s',
      name: 'Boys-Readymade-dress',
      category: 'Dress-Set',
      seller: 'Nandu Dress Center',
      price: 1599
    },
    {
      url: 'https://cdn.rajwadi.com/image/cache/data/fancy-print-pink-kurta-pajama-for-boys-41753-800x1100.jpg',
      name: 'Kids-Kurta-Set',
      category: 'Kurta-Set',
      seller: 'Vandita Dresses',
      price: 3999
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, {...data, quantity: 1 }])
  }

  const handleShow = (value) => {
     setShowCart(value)
  }
  
  return (
   <div>
    
    <Header count={cart.length} 
   handleShow={handleShow}>
    <FaCartArrowDown className="icon"/>
   </Header>
    

    {
      showCart ? 
    <CartList cart={cart} ></CartList> :
    <ProductList product={product} addToCart={addToCart} ></ProductList>
    }
   
    </div>
  );
}

export default App;
