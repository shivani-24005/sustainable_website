import React, { useState ,useRef} from 'react';
import './App.css';
export default function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [pageContent, setPageContent] = useState(null);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 
  const [password, setPassword] = useState(''); 
  const [username, setUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const brandsSectionRef = useRef(null);
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        alert(data.message);
        setShowLogin(false); // Hide login form after login
    };
  const scrollToBrandsSection = () => {
    brandsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
};
const toggleBrands = () => {
        setShowBrands(!showBrands);
    };
    // State to manage which dropdown is open
    const [openDropdown, setOpenDropdown] = useState("");
    const handleAddToCart = (fruit) => {
        window.alert(`${fruit.name} has been added to the cart!`);
      };
    // Ref for scrolling to the category buttons container

    const categorySectionRef = useRef(null);
  
    // Function to scroll to the buttons container
    const scrollToCategorySection = () => {
      categorySectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleDropdownClick = (category) => {
      if (openDropdown === category) {
        setOpenDropdown(""); // Close the dropdown if it's already open
      } else {
        setOpenDropdown(category); // Open the selected dropdown
      }
    };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };
  const toggleBeveragesDropdown = () => {
    setShowBeveragesDropdown(!showBeveragesDropdown);
  };

  const togglePersonalCareDropdown = () => {
    setShowPersonalCareDropdown(!showPersonalCareDropdown);
  };
  const toggleClothingDropdown = () => {
    setShowClothingDropdown(!showClothingDropdown);
  };

   // Toggle Furniture Dropdown
   const toggleFurnitureDropdown = () => {
    setShowFurnitureDropdown(!showFurnitureDropdown);
  };

  const toggleDropdownGardening = () => {
    setShowDropdownGardening(!showDropdownGardening);
  };
// FOOD
  const loadFruitsPage = () => {
    const fruits = [
      { name: 'Apple', description: 'Juicy red apple', price: '87/500gms', image: 'https://www.chandigarhayurvedcentre.com/wp-content/uploads/2021/03/APPLE.png' },
      { name: 'Banana', description: 'Ripe yellow banana', price: '50/dozen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtdoVO5SZtuvFaj8JPIDlTzyiMKokCf744Q&s' },
      { name: 'Orange', description: 'Fresh orange', price: '120/kg', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yz1d_OrZBKB6TIWRyUtCIPBIjgyDOpybxw&s' },
      { name: 'Watermelon', description: 'Fresh watermelon', price: '30/kg', image: 'https://healthybuddha.in/image/cache/catalog/watermelon-204x210.jpg' }
    ];
  
    const fruitsPage = (
      <div className="fruits-page">
        <h2>Fruits</h2>
        <div className="fruits-list">
          {fruits.map((fruit, index) => ( 
            <div key={index} className="fruit-card">
              <img src={fruit.image} alt={fruit.name} />
              <h3>{fruit.name}</h3>
              <p>{fruit.description}</p>
              <p><strong>Price:</strong> {fruit.price}</p> {/* Displaying the price here */}
              <button  onClick={() => handleAddToCart(fruit)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(fruitsPage);
    setShowDropdown(false); // Hide the dropdown after selection
  };
  const loadVegetablesPage = () => {
    const vegetables = [
      { name: 'Carrot', description: 'Fresh orange carrots', price: '40/kg', image: 'https://www.trustbasket.com/cdn/shop/articles/Carrot.jpg?v=1688378789' },
      { name: 'Potato', description: 'Brown potatoes', price: '30/kg', image: 'https://broin.in/wp-content/uploads/2024/09/potato-1-kg-product-images-o590003516-p590003516-0-202408070949.jpg' },
      { name: 'Tomato', description: 'Fresh red tomatoes', price: '25/kg', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg' },
      { name: 'Broccoli', description: 'Healthy green broccoli', price: '80/kg', image: 'https://www.thegoodmoodfood.com.au/siteassets/foods/green/broccoli-lg.png' }
    ];
  
    const vegetablesPage = (
      <div className="vegetables-page">
        <h2>Vegetables</h2>
        <div className="vegetables-list">
          {vegetables.map((vegetable, index) => (
            <div key={index} className="vegetable-card">
              <img src={vegetable.image} alt={vegetable.name} />
              <h3>{vegetable.name}</h3>
              <p>{vegetable.description}</p>
              <p><strong>Price:</strong> {vegetable.price}</p>
              <button onClick={() => handleAddToCart(vegetable)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(vegetablesPage);
    setShowDropdown(false); // Hide the dropdown after selection
  };
  const loadSnacksPage = () => {
    const snacks = [
      { name: 'Classic Hummus ', description: 'made by sprouts', price: '20/pack', image: 'https://healthybuddha.in/image/cache/catalog/Hummus-204x210.jpeg' },
      { name: ' Butter Cookies', description: 'Delicious butter cookies', price: '50/pack', image: 'https://healthybuddha.in/image/cache/catalog/kambucookie-204x210.jpg' },
      { name: 'Beetroot heart crackers', description: 'Beetroot crackers by Beige ', price: '15/pack', image: 'https://healthybuddha.in/image/cache/catalog/beetrootcrackers2-204x210.jpeg' },
      { name: 'Black Sesame Laddu', description: 'pure organic ', price: '35/pack', image: 'https://healthybuddha.in/image/cache/catalog/blacksesameladdu-204x210.jpg' }
    ];
  
    const snacksPage = (
      <div className="snacks-page">
        <h2>Snacks</h2>
        <div className="snacks-list">
          {snacks.map((snack, index) => (
            <div key={index} className="snack-card">
              <img src={snack.image} alt={snack.name} />
              <h3>{snack.name}</h3>
              <p>{snack.description}</p>
              <p><strong>Price:</strong> {snack.price}</p>
              <button onClick={() => handleAddToCart(snack)} >Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(snacksPage);
    setShowDropdown(false); // Hide the dropdown after selection

  };
  // BEVERAGES
  // Load Organic Tea Page
  const loadOrganicTeaPage = () => {
    const teas = [
      { name: 'Green Tea', description: 'Refreshing green tea for a healthy life', price: '200/500gms', image: 'https://m.media-amazon.com/images/I/61UfsYdA-TL.AC_UL480_FMwebp_QL65.jpg ' },
      { name: 'Chamomile Tea', description: 'Relaxing chamomile tea', price: '250/500gms', image: 'https://m.media-amazon.com/images/I/81AsTUEXWSL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Mint Tea', description: 'Mint flavored organic tea', price: '180/500gms', image: 'https://m.media-amazon.com/images/I/81Eka5zNpLL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Earl Grey Tea', description: 'Classic Earl Grey with bergamot', price: '220/500gms', image: 'https://m.media-amazon.com/images/I/81wzoXsBAVL.AC_UL480_FMwebp_QL65.jpg' },
    ];

    const teaPage = (
      <div className="tea-page">
        <h2>Organic Tea Products</h2>
        <div className="tea-list">
          {teas.map((tea, index) => (
            <div key={index} className="tea-card">
              <img src={tea.image} alt={tea.name}  />
              <h3>{tea.name}</h3>
              <p>{tea.description}</p>
              <p><strong>Price:</strong> {tea.price}</p>
              <button onClick={() => handleAddToCart(tea)} >Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(teaPage);
    setShowBeveragesDropdown(false);
  };

  // Load Organic Coffee Page
  const loadOrganicCoffeePage = () => {
    const coffees = [
      { name: 'Arabica Coffee', description: '100% Arabica,black coffee', price: '300/500gms', image: 'https://healthybuddha.in/image/cache/catalog/13669681_939424062834536_9024468127416569701_n-500x515.jpg' },
      { name: 'Wanderoos', description: 'Organic FaitTrade Instant Coffee', price: '280/500gms', image: 'http://ecx.images-amazon.com/images/I/61Lxghd0VOL.jpg' },
      { name: 'Camerons', description: 'Organic French Roast', price: '350/500gms', image: 'https://images-na.ssl-images-amazon.com/images/I/71tqWCbpuaL.jpg' },
      { name: 'Two Volcanoes', description: '100% Guatemalan Whole Bean', price: '320/500gms', image: 'https://images-na.ssl-images-amazon.com/images/I/81N022I60CL.SL1497.jpg' },
    ];
     
     

    const coffeePage = (
      <div className="coffee-page">
        <h2>Organic Coffee Products</h2>
        <div className="coffee-list">
          {coffees.map((coffee, index) => (
            <div key={index} className="coffee-card">
              <img src={coffee.image} alt={coffee.name} />
              <h3>{coffee.name}</h3>
              <p>{coffee.description}</p>
              <p><strong>Price:</strong> {coffee.price}</p>
              <button onClick={() => handleAddToCart(coffee)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(coffeePage);
    setShowBeveragesDropdown(false);
  };

  // Load Organic Drinks Page
  const loadOrganicDrinksPage = () => {
    const drinks = [
      { name: 'Lemonade', description: 'Freshly Pressed Lemons', price: '100/bottle', image: 'https://images-na.ssl-images-amazon.com/images/I/61Di2A2ZBuL.SL1500.jpg' },
      { name: 'Apple Juice', description: 'Organic apple juice', price: '120/bottle', image: 'https://northcoast.organic/wp-content/uploads/2016/09/north-coast-organic-apple-juice-32-oz.jpg' },
      { name: 'Berry Smoothie', description: 'Mixed berry smoothie', price: '150/bottle', image: 'https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9fd5e61e-2e88-46a3-81ab-c989355b7251.jpeg' },
      { name: 'Mango Lassi', description: 'Creamy mango lassi', price: '140/bottle', image: 'https://i.pinimg.com/originals/bf/17/58/bf1758d0fbaf171a5a69f3b79a708ff4.png' },
    ];

    const drinksPage = (
      <div className="drinks-page">
        <h2>Organic Drink Products</h2>
        <div className="drinks-list">
          {drinks.map((drink, index) => (
            <div key={index} className="drink-card">
              <img src={drink.image} alt={drink.name}  />
              <h3>{drink.name}</h3>
              <p>{drink.description}</p>
              <p><strong>Price:</strong> {drink.price}</p>
              <button onClick={() => handleAddToCart(drink)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(drinksPage);
    setShowBeveragesDropdown(false);
  };

  // HOUSEHOLD
  const loadCleaningProductsPage = () => {
    const Cleaning = [
      { name: 'Dish Wash Bar Soap', description: 'Natural, Hand-Made,100% Effective', price: '90/100g', image: 'https://tse2.mm.bing.net/th?id=OIP.t1FgDs1ODOmEd_P0FdZYPwHaHa&pid=Api&P=0&h=180' },
      { name: 'Floor Cleaner', description: 'Hand Made,Grapefruit Essential oil', price: '210/1L', image: 'https://tse1.mm.bing.net/th?id=OIP.CVZ6OKzU5n961_bgTqGK3QHaHa&pid=Api&P=0&h=180' },
      { name: 'Coconut Coir Scrubber', description: 'Normal coir scrubber', price: '89/1piece', image: 'https://tse1.mm.bing.net/th?id=OIP.EGGXvboe5zP8BFlxkrrT2QHaHo&pid=Api&P=0&h=180' },
      { name: 'Herbal Glass Cleaner', description: 'Vegan,Cruelty-free', price: '160/500ML', image: 'https://tse3.mm.bing.net/th?id=OIP.BJBh03GLv9oZ3VcLeAOCkAHaHa&pid=Api&P=0&h=180' }
    ];
  
    const CleaningPage = (
      <div className="Cleaning-page">
        <h2>Cleaning Products</h2>
        <div className="Cleaning-list">
          {Cleaning.map((CleaningProducts, index) => (
            <div key={index} className="CleaningProducts-card">
              <img src={CleaningProducts.image} alt={CleaningProducts.name} />
              <h3>{CleaningProducts.name}</h3>
              <p>{CleaningProducts.description}</p>
              <p><strong>Price:</strong> {CleaningProducts.price}</p> {/* Displaying the price here */}
              <button onClick={() => handleAddToCart(CleaningProducts)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(CleaningPage);
    setShowDropdown(false); // Hide the dropdown after selection
  };
  const loadKitchenWrapsPage = () => {
    const KitchenWraps= [
      { name: 'Woods', description: 'Wood texture samples', price: '200/roll', image: 'https://kitchen-wraps.co.uk/wp-content/uploads/2020/09/Sample-pack-2-scaled.jpg' },
      { name: 'APIwraps', description: 'Eco-friendly kitchen wraps', price: '130/roll', image: 'https://www.apiwraps.com.au/wp-content/uploads/2018/03/apiwraps-leatherwood-kitchen-basics-scaled.jpg' },
      { name: 'GreenLeaf Wraps', description: 'Sustainable, reusable, natural', price: '125/roll', image: 'https://abeautifulmess.com/wp-content/uploads/2018/08/Make-Your-Own-Beeswax-Food-Wraps-click-through-for-tutorial-1-4.jpg' },
      { name: 'The Source', description: 'Biodegradable, versatile, disposable', price: '180/roll', image: 'https://thesourcebulkfoods.com.au/wp-content/uploads/2017/09/Beeswax-Wraps-2-scaled.jpg' }
    ];
  
    const KitchenWrapsPage = (
      <div className="KitchenWraps-page">
        <h2>Kitchen Wraps</h2>
        <div className="KitchenWraps-list">
          {KitchenWraps.map((KitchenWrap, index) => (
            <div key={index} className="KitchenWrap-card">
              <img src={KitchenWrap.image} alt={KitchenWrap.name} />
              <h3>{KitchenWrap.name}</h3>
              <p>{KitchenWrap.description}</p>
              <p><strong>Price:</strong> {KitchenWrap.price}</p>
              <button onClick={() => handleAddToCart(KitchenWrap)}>Add to Cart</button>
            </div>
         
        ))}
        </div>
      </div>
        
      );
      setPageContent(KitchenWrapsPage);
      setShowDropdown(false); // Hide the dropdown after selection
    };
    const loadUtensilsPage = () => {
      const Utensils = [
        { name: 'Kalchatti Soapstone Vessel', description: 'hand-crafted', price: '899/1-2L', image: 'https://healthybuddha.in/image/cache/catalog/soapstone-jaadi-kitchen-utensils_1024x1024__01-500x515.jpg' },
        { name: 'Cast Iron-Spatula', description: 'flipping, scraping, and stirring', price: '189/piece', image: 'https://healthybuddha.in/image/cache/catalog/Spatuls-500x515.jpg' },
        { name: 'Soapstone-Kadai', description: 'perfect in modern kitchen', price: '1229/small', image: 'https://healthybuddha.in/image/cache/catalog/Seasoned-Stone-Kadai-Vanali-3-Ltrs-500x515.jpg' },
        { name: 'Kuzhi Paniyarakal', description: 'naturally occurring soft stone', price: '799/piece', image: 'https://healthybuddha.in/image/cache/catalog/soapstonepaniyarakkal-500x515.jpg' }
      ];
      const UtensilsPage = (
        <div className="Utensils-page">
          <h2>Utensils</h2>
          <div className="Utensils-list">
            {Utensils.map((Utensil, index) => (
              <div key={index} className="Utensils-card">
                <img src={Utensil.image} alt={Utensil.name} />
                <h3>{Utensil.name}</h3>
                <p>{Utensil.description}</p>
                <p><strong>Price:</strong> {Utensil.price}</p>
                <button onClick={() => handleAddToCart(Utensil)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      );
      setPageContent(UtensilsPage);
      setShowDropdown(false); // Hide the dropdown after selection
    };
    
    // PERSONAL CARE
    const loadShampooPage = () => {
        const shampooProducts = [
          { name: 'Organic Shampoo', description: 'Made from natural ingredients', price: '500/ml', image: 'https://m.media-amazon.com/images/I/71Q8d1jIMJL.AC_UL480_FMwebp_QL65.jpg' }, 
          { name: 'Organic Conditioner', description: 'Nourishing conditioner for all hair types', price: '600/ml', image: 'https://m.media-amazon.com/images/I/71UuOfJFM4L.AC_UL480_FMwebp_QL65.jpg' }, 
          { name: 'Herbal Shampoo', description: 'Herbal blend for healthy hair', price: '550/ml', image: 'https://m.media-amazon.com/images/I/7145n0T0axL.AC_UL480_FMwebp_QL65.jpg' }, 
          { name: 'Anti-Dandruff Shampoo', description: 'Effective anti-dandruff solution', price: '580/ml', image: 'https://3.imimg.com/data3/GB/KY/MY-463095/anti-dandruff-shampoo-500x500.jpg'}
        ];
  
      const shampooPage = (
        <div className="personal-care-page">
          <h2>Organic Shampoo & Conditioners</h2>
          <div className="shampoo-list">
            {shampooProducts.map((product, index) => (
              <div key={index} className="shampoo-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      );
      setPageContent(shampooPage);
      setShowPersonalCareDropdown(false);
    };
  
    const loadDeodorantPage = () => {
      const deodorantProducts = [
        { name: 'Organic Deodorant', description: 'Long-lasting freshness', price: '200/ml', image: 'https://m.media-amazon.com/images/I/61Agv4xEVhS.AC_UL480_FMwebp_QL65.jpg' }, 
        { name: 'Natural Deodorant', description: 'Made from natural ingredients', price: '220/ml', image: 'https://m.media-amazon.com/images/I/61C+EFreRhL.AC_UL480_FMwebp_QL65.jpg' }, 
        { name: 'Floral Deodorant', description: 'Floral scent deodorant', price: '210/ml', image: 'https://m.media-amazon.com/images/I/51KUbFXRxsL.AC_UL480_FMwebp_QL65.jpg' }, 
        { name: 'Citrus Deodorant', description: 'Refreshing citrus scent', price: '205/ml', image: 'https://m.media-amazon.com/images/I/71hwjyJ-JwL.AC_UL480_FMwebp_QL65.jpg' } 
      ];
  
      const deodorantPage = (
        <div className="personal-care-page">
          <h2>Organic Deodorants</h2>
          <div className="deodrant-list">
            {deodorantProducts.map((product, index) => (
              <div key={index} className="deodrant-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      );
      setPageContent(deodorantPage);
      setShowPersonalCareDropdown(false);
    };
  
    const loadBodyLotionPage = () => {
        const bodyLotionProducts = [
          { name: 'NaturoPathica', description: '100% natural gulten-free', price: '350/ml', image: 'https://skincareox.com/wp-content/uploads/2018/05/naturopathica-_-silician-bergamot-organic-body-lotion-min.jpg' }, 
          { name: 'Aloe Vera Lotion', description: 'Soothing aloe vera lotion', price: '300/ml', image: 'https://m.media-amazon.com/images/I/71P1qO3ormL.AC_UL480_FMwebp_QL65.jpg' },
          { name: 'Shea Butter Lotion', description: 'Nourishing shea butter lotion', price: '400/ml', image: 'https://www.healthybeing.com.au/assets/full/UH-AP03.jpg?20181116115411' }, 
          { name: 'Moisturizing Lotion', description: 'Hydrating lotion for all skin types', price: '350/ml', image: 'http://labdelon.com/wp-content/uploads/2018/01/delon-organic-now-lotion-325ml.jpg' } 
        ];
  
      const bodyLotionPage = (
        <div className="personal-care-page">
          <h2>Body Lotions</h2>
          <div className="lotions-list">
            {bodyLotionProducts.map((product, index) => (
              <div key={index} className="lotion-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      );
      setPageContent(bodyLotionPage);
      setShowPersonalCareDropdown(false);
    };



    //CLOTHING

     // Load Purethreads & SustainWear Page
  const loadPurethreadsSustainWearPage = () => {
    const purethreadsItems = [
      { name: 'Purethreads - Eco Shirt', description: 'Sustainable cotton shirt', price: '500/item', image: 'https://m.media-amazon.com/images/I/61DcOD8DezS.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Purethreads - Eco Dress', description: 'Organic cotton dress', price: '800/item', image: 'https://m.media-amazon.com/images/I/61JKZDyi1UL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'SustainWear - Hoodie', description: 'Recycled material hoodie', price: '700/item', image: 'https://m.media-amazon.com/images/I/61JckjKagSL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'SustainWear - Pants', description: 'Eco-friendly pants', price: '600/item', image: 'https://www.eileenfisher.com/dw/image/v2/BGKB_PRD/on/demandware.static/-/Sites-ef-main-catalog/default/dw5ad0488d/images/F2TDC-P4654M-224-ALT.jpg?sw=1680&sh=2240&sfrm=png' },
    ];

    const purethreadsPage = (
      <div className="clothing-page">
        <h2>Purethreads & SustainWear</h2>
        <div className="th-list">
          {purethreadsItems.map((item, index) => (
            <div key={index} className="th-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(purethreadsPage);
    setShowClothingDropdown(false); // Hide the dropdown after selection
  };

  // Load Leaf & Loom Page
  const loadLeafLoomPage = () => {
    const leafLoomItems = [
      { name: 'Leaf & Loom - Organic Top', description: 'Natural fibers top', price: '550/item', image: 'https://tse2.mm.bing.net/th?id=OIP.wwV2PybarT5Wglz3NR82ywHaNV&pid=Api&P=0&h=220' },
      { name: 'Leaf & Loom - Skirt', description: 'Eco-friendly skirt', price: '650/item', image: 'https://tse3.mm.bing.net/th?id=OIP.Y71JALwif_bD5vmEoPogYAHaKI&pid=Api&P=0&h=220' },
      { name: 'Leaf & Loom - Trousers', description: 'Comfortable trousers', price: '700/item', image: 'https://tse4.mm.bing.net/th?id=OIP.NhMO68V-KnW3KZ38f4kS-AHaLH&pid=Api&P=0&h=220' },
      { name: 'Leaf & Loom - Jacket', description: 'Sustainable fabric jacket', price: '900/item', image: 'https://tse4.mm.bing.net/th?id=OIP.KHBXy2-p-RMrTnld7S04iwHaHa&pid=Api&P=0&h=220' },
    ];

    const leafLoomPage = (
      <div className="clothing-page">
        <h2>Leaf & Loom</h2>
        <div className="le-list">
          {leafLoomItems.map((item, index) => (
            <div key={index} className="le-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(leafLoomPage);
    setShowClothingDropdown(false); // Hide the dropdown after selection
  };

  // Load Natural Cloth & Organic Loom Page
  const loadNaturalClothOrganicLoomPage = () => {
    const naturalClothItems = [
      { name: 'Natural Cloth - Organic Shirt', description: 'Organic shirt made from cotton', price: '600/item', image: 'https://m.media-amazon.com/images/I/51eEQx0gpzL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Natural Cloth - Pants', description: 'Comfortable organic pants', price: '650/item', image: 'https://m.media-amazon.com/images/I/61jwnc+rgUL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Natural Cloth - Dress', description: 'Sustainable dress', price: '700/item', image: 'https://m.media-amazon.com/images/I/71HY1mKjqXL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Natural Cloth - Jacket', description: 'Eco-friendly jacket', price: '800/item', image: 'https://tse3.mm.bing.net/th?id=OIP.qbJTubphltoGBLJK4SBIuAHaJ4&pid=Api&P=0&h=220' },
    ];

    const naturalClothPage = (
      <div className="clothing-page">
        <h2>Natural Cloth & Organic Loom</h2>
        <div className="cl-list">
          {naturalClothItems.map((item, index) => (
            <div key={index} className="cl-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(naturalClothPage);
    setShowClothingDropdown(false);
  };


  //Furniture

  // Page content for Bamboo Furniture
  const loadBambooFurniturePage = () => {
    const bambooFurniture = [
      { name: 'Bamboo cup holder', description: 'Eco-friendly bamboo holder', price: '2000/item', image: 'https://m.media-amazon.com/images/I/71ot2BySJhL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Bamboo Sofa clips', description: 'Stylish bamboo sofa clip', price: '5000/item', image: 'https://m.media-amazon.com/images/I/7162uHUxTJL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Bamboo Table', description: 'Durable bamboo table', price: '3000/item', image: 'https://m.media-amazon.com/images/I/81Y4C+zDwvL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Bamboo Bookshelf', description: 'Elegant bamboo bookshelf', price: '4000/item', image: 'https://m.media-amazon.com/images/I/81Y4C+zDwvL.AC_UL480_FMwebp_QL65.jpg' }
    ];

    const bambooFurniturePage = (
      <div className="furniture-page">
        <h2>Bamboo Furniture</h2>
        <div className="b-list">
          {bambooFurniture.map((item, index) => (
            <div key={index} className="b-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(bambooFurniturePage);
    setShowFurnitureDropdown(false);
  };

  // Page content for Purewood Furniture
  const loadPurewoodFurniturePage = () => {
    const purewoodFurniture = [
      { name: 'Purewood Dining Table', description: 'Solid wood dining table', price: '10000/item', image: 'https://m.media-amazon.com/images/I/81nL-5DpEYL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Purewood Bed', description: 'Comfortable wooden bed', price: '15000/item', image: 'https://tse2.mm.bing.net/th?id=OIP.JvpjAyKlOhvjJWTK_NlVYgHaHa&pid=Api&P=0&h=220' },
      { name: 'Purewood Coffee Table', description: 'Compact wooden coffee table', price: '7000/item', image: 'https://tse1.mm.bing.net/th?id=OIP.IuKGyQT3wqyfS_FcS5QANwHaHa&pid=Api&P=0&h=220' },
      { name: 'Purewood Wardrobe', description: 'Spacious wooden wardrobe', price: '12000/item', image: 'https://tse4.mm.bing.net/th?id=OIP.-nUzScV3LIxxUnNhnfbcvgHaFu&pid=Api&P=0&h=220' }
    ];

    const purewoodFurniturePage = (
      <div className="furniture-page">
        <h2>Purewood Furniture</h2>
        <div className="w-list">
          {purewoodFurniture.map((item, index) => (
            <div key={index} className="w-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(purewoodFurniturePage);
    setShowFurnitureDropdown(false);
  };

  // Page content for Organic Chairs
  const loadOrganicChairsPage = () => {
    const organicChairs = [
      { name: 'Organic Office Chair', description: 'Ergonomic office chair', price: '8000/item', image: 'https://tse3.mm.bing.net/th?id=OIP.vSLsW1K7jPXQciPwz_0QswHaHa&pid=Api&P=0&h=220' },
      { name: 'Organic Rocking Chair', description: 'Comfortable rocking chair', price: '6000/item', image: 'https://tse4.mm.bing.net/th?id=OIP.RhP8J1MRGXfPtoWw7Q6cuwHaHa&pid=Api&P=0&h=220' },
      { name: 'Organic Lounge Chair', description: 'Eco-friendly lounge chair', price: '9000/item', image: 'https://tse2.mm.bing.net/th?id=OIP.A8C6I830fUPtJd53oRkTMwHaHa&pid=Api&P=0&h=220' },
      { name: 'Organic Recliner', description: 'Luxurious organic recliner', price: '15000/item', image: 'https://tse3.mm.bing.net/th?id=OIP.mCzDDmoJq9izaElJd9lR8gHaHt&pid=Api&P=0&h=220' }
    ];

    const organicChairsPage = (
      <div className="furniture-page">
        <h2>Organic Chairs</h2>
        <div className="o-list">
          {organicChairs.map((item, index) => (
            <div key={index} className="o-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(organicChairsPage);
    setShowFurnitureDropdown(false);
  };

  //Home and Gradening

  const loadPlantPotsPage = () => {
    const plantPots = [
      { name: 'Terracotta Plant Pot', description: 'Eco-friendly terracotta pot', price: '150/each', image: 'https://m.media-amazon.com/images/I/81Qiu26zi1L.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Bamboo Plant Pot', description: 'Sustainable bamboo pot', price: '200/each', image: 'https://m.media-amazon.com/images/I/51RxVmppH4L.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Ceramic Plant Pot', description: 'Handmade ceramic pot', price: '250/each', image: 'https://m.media-amazon.com/images/I/81gf33lcYGL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Recycled Plastic Pot', description: 'Eco-friendly recycled plastic pot', price: '100/each', image: 'https://m.media-amazon.com/images/I/61HfQREjn6L.AC_UL480_FMwebp_QL65.jpg' }
    ];
  
    const plantPotsPage = (
      <div className="plant-pots-page">
        <h2>Reusable Plant Pots</h2>
        <div className="p-list">
          {plantPots.map((pot, index) => (
            <div key={index} className="p-card">
              <img src={pot.image} alt={pot.name} />
              <h3>{pot.name}</h3>
              <p>{pot.description}</p>
              <p><strong>Price:</strong> {pot.price}</p>
              <button onClick={() => handleAddToCart(pot)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(plantPotsPage);
    setShowDropdown(false); // Hide the dropdown after selection
  };
  
  const loadPlantingToolsPage = () => {
    const plantingTools = [
      { name: 'Hand Trowel', description: 'Stainless steel hand trowel', price: '180/each', image: 'https://m.media-amazon.com/images/I/6188oAkQ+aL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Garden Fork', description: 'Durable garden fork', price: '220/each', image: 'https://m.media-amazon.com/images/I/619EBBirTzL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Pruning Shears', description: 'High-quality pruning shears', price: '300/each', image: 'https://m.media-amazon.com/images/I/61ONxJq8IIL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Compost Spreader', description: 'Organic compost spreader', price: '250/each', image: 'https://m.media-amazon.com/images/I/91fNBgK5UuL.AC_UL480_FMwebp_QL65.jpg' }
    ];
  
    const plantingToolsPage = (
      <div className="planting-tools-page">
        <h2>Organic Planting Tools</h2>
        <div className="t-list">
          {plantingTools.map((tool, index) => (
            <div key={index} className="t-card">
              <img src={tool.image} alt={tool.name} />
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <p><strong>Price:</strong> {tool.price}</p>
              <button> onClick={() => handleAddToCart(tool)}Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(plantingToolsPage);
    setShowDropdown(false); // Hide the dropdown after selection
  };
  
  const loadOrganicSeedsPage = () => {
    const organicSeeds = [
      { name: 'Tomato Seeds', description: '100% organic tomato seeds', price: '40/packet', image: 'https://m.media-amazon.com/images/I/71p+msvmyEL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Basil Seeds', description: 'Organic basil seeds', price: '50/packet', image: 'https://m.media-amazon.com/images/I/811nANw85hL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Carrot Seeds', description: 'Heirloom carrot seeds', price: '35/packet', image: 'https://m.media-amazon.com/images/I/81W1U3smfUL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Cucumber Seeds', description: 'Non-GMO cucumber seeds', price: '45/packet', image: 'https://m.media-amazon.com/images/I/71ZaWc76TeL.AC_UL480_FMwebp_QL65.jpg' }
    ];
  
    const organicSeedsPage = (
      <div className="organic-seeds-page">
        <h2>Organic Seeds</h2>
        <div className="s-list">
          {organicSeeds.map((seed, index) => (
            <div key={index} className="s-card">
              <img src={seed.image} alt={seed.name} />
              <h3>{seed.name}</h3>
              <p>{seed.description}</p>
              <p><strong>Price:</strong> {seed.price}</p>
              <button onClick={() => handleAddToCart(seed)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(organicSeedsPage);
    setShowDropdown(false); // Hide the dropdown after selection
  };
  
  const loadNaturalFertilizersPage = () => {
    const naturalFertilizers = [
      { name: 'Compost Fertilizer', description: 'Rich organic compost', price: '120/kg', image: 'https://m.media-amazon.com/images/I/81VgoAQ5k-L.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Vermicompost', description: 'Nutrient-rich vermicompost', price: '150/kg', image: 'https://m.media-amazon.com/images/I/81U3WAaFZWL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Cow Manure', description: 'Pure organic cow manure', price: '100/kg', image: 'https://m.media-amazon.com/images/I/51p-dmMX5HL.AC_UL480_FMwebp_QL65.jpg' },
      { name: 'Bone Meal', description: 'Natural bone meal fertilizer', price: '180/kg', image: 'https://m.media-amazon.com/images/I/51MCGRo3uBL.AC_UL480_FMwebp_QL65.jpg' }
    ];
  
    const naturalFertilizersPage = (
      <div className="natural-fertilizers-page">
        <h2>Natural Fertilizers</h2>
        <div className="f-list">
          {naturalFertilizers.map((fertilizer, index) => (
            <div key={index} className="f-card">
              <img src={fertilizer.image} alt={fertilizer.name} />
              <h3>{fertilizer.name}</h3>
              <p>{fertilizer.description}</p>
              <p><strong>Price:</strong> {fertilizer.price}</p>
              <button onClick={() => handleAddToCart(fertilizer)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
    setPageContent(naturalFertilizersPage);
    setShowDropdown(false); // Hide the dropdown after selection
  };
  
  return (

    <div className="App">
        <header>
          <nav className="navbar">
            <ul className="nav-list">
              <li><button>Home</button></li>
              <li><button onClick={toggleModal}>
                About Us
              </button></li>
              <li>< button onClick={scrollToCategorySection}>Products</button></li>
              <li><button onClick={scrollToBrandsSection}>Brands</button></li>
            </ul>
            <div className="search-login">
              <input type="text" className="search" placeholder="Search..." />
              <button class="cartb">cart</button>
              <button onClick={() => setShowLogin(!showLogin)}>Log In</button>
              <img  className="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTtzcm85JC7PdX-cKdnj2ZPnnzhNGSnHtd6jEh0-rRJmYfOa_2bTmlha_sN5xB-r3h0I&usqp=CAU" alt="nope" width="70px" height="70px" />
            </div>
          </nav>
          {username && <p>Welcome, {username}!</p>}
        </header>
      <main>
        {isModalOpen && (
      <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>About Us</h2>
            <p>
              Welcome to our sustainable shopping website! We believe in providing our customers with high-quality organic products that are not only good for your health but also good for the planet. Our mission is to promote sustainable living by offering a wide range of eco-friendly groceries, skincare products, and household items.
            </p>
            <p>
              Our team is dedicated to sourcing products from local farmers and suppliers who share our commitment to sustainability. We strive to reduce waste and minimize our carbon footprint while ensuring that our customers have access to the best organic products available.
            </p>
            <p>
              Thank you for choosing us as your partner in sustainable shopping. Together, we can make a positive impact on the environment and support our local communities.
            </p>
            <button onClick={toggleModal}>Close</button>

            </div>
        </div>
      )}
    

<section className="hero">
    <img 
        src="https://www.premiumbionaturals.com/cdn/shop/articles/eco.png?v=1711820134&width=1100" 
        alt="Hero Section" 
        className="hero-image"
    />
</section>

{/* Display username if logged in */}

      
      {/* Display content based on selected categories */}
      {showLogin && (
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Log In</button>
                    </form>
                </div>
            )}
      {/* Category Buttons */}
      <section className="category-buttons" ref={categorySectionRef}>
        <h2>Explore Our Sustainable Products</h2>
        <div className="button-container">
          {/* Food Button with Dropdown */}
          <div className="category-card">
            <img src="https://www.liveorganic.co.in/cdn/shop/collections/Fresh-Produce-1_1200x1200.jpg?v=1658572360 " alt="Food" height="auto" width="400px" />
            <button onClick={toggleDropdown}>Food</button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={loadFruitsPage}>Fruits</button>
                <button onClick={loadVegetablesPage}>Vegetables</button>
<button onClick={loadSnacksPage}>Snacks</button>

              </div>
            )}
          </div>
          <div className="category-card">
            <img src="https://www.shutterstock.com/image-photo/latte-americano-orange-juice-lime-600nw-2122885682.jpg" alt="Beverages" height="auto" width="400px" />
            <button onClick={toggleDropdown}>Beverages</button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={loadOrganicTeaPage}>Organic Tea</button>
                <button onClick={loadOrganicCoffeePage}>Organic Coffee</button>
<button onClick={loadOrganicDrinksPage}>Organic Drinks</button>
          </div>
            )}
          </div>
          <div className="category-card">
            <img src="https://healthybuddha.in/image/catalog/cat%20icon/naturalcleaners.jpg" alt="Household" height="auto" width="400px" />
            <button onClick={toggleDropdown}>Household</button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={loadCleaningProductsPage}>Cleaning Products</button>
                <button onClick={loadKitchenWrapsPage}>Kitchen Wraps</button>
                <button onClick={loadUtensilsPage}>Utensils</button>
              </div>
            )}
            </div>
          <div className="category-card">
            <img src="https://healthybuddha.in/image/catalog/cat%20icon/personalcare.jpg" alt="Personal Care" height="auto" width="400px" />
            <button onClick={toggleDropdown}>Personal Care</button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={loadShampooPage}>Shampoo & Condtioners</button>
                <button onClick={ loadDeodorantPage}>Deodrants</button>
                <button onClick={loadBodyLotionPage}>Body Lotions</button>
            
            </div>
            )}
          </div>
          <div className="category-card">
            <img src="https://png.pngtree.com/png-clipart/20210801/original/pngtree-sustainable-development-sustainable-fashion-eco-friendly-clothes-blue-green-cartoon-cute-png-image_6586223.jpg" alt="Clothing"height="auto" width="400px"  />
            <button onClick={toggleDropdown}>Clotihng</button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={loadPurethreadsSustainWearPage }>Purethreads</button>
                <button onClick={loadLeafLoomPage}>Leafloom</button>
                <button onClick={loadNaturalClothOrganicLoomPage}>Organicloom</button>
            
            </div>
            )}
          </div>
          
          <div className="category-card">
            <img src="https://thedecorkart.com/cdn/shop/articles/Eco-Friendly_Decor_Ideas_for_a_Sustainable_Home.jpg?v=1716142458" alt="Furniture" />
            <button onClick={toggleDropdown}>Furnitures</button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={ loadBambooFurniturePage }>bambooFurniture</button>
                <button onClick={loadPurewoodFurniturePage}>Wooden</button>
                <button onClick={loadOrganicChairsPage }>OrgancChairs</button>
            
            </div>
            )}
            
          </div>

          <div className="category-card">
            <img src="https://fertilizer-machinery.com/wp-content/uploads/2018/11/homemade-organic-fertilizer.jpg" alt="Home & Gardening" height="auto" width="400px" />
            <button onClick={toggleDropdown}>Home & Gardening</button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={loadPlantPotsPage}>Planting Pots</button>
                <button onClick={ loadPlantingToolsPage}>Gardening Tools</button>
                <button onClick={loadOrganicSeedsPage}>Natural Seeds</button>
                <button onClick={ loadNaturalFertilizersPage }>Organic Fetilisers</button>
              </div>
            )}
            
          </div>
          {/* Display content based on selected categories */}
  
        {/* Page Content Area */}
        <div className="page-content">
          {pageContent}
        </div>
        

        </div>
    
      </section>
      </main>
      <section className="brands-section" ref={brandsSectionRef}>
                <h2>Partnered With</h2>
                <div className="brands-container">
                <img src="https://fssai.gov.in/upload/uploadfiles/images/Jaivik_Bharat.png" alt="Brand 1" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vBSX-mABSRVHnEPgzlMk8xwvRbnES6sMSw&s" alt="Brand 2" />
                        <img src="https://www.shutterstock.com/image-vector/organic-vegetarian-healthy-food-logo-260nw-770613697.jpg" alt="Brand 3" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbs7E-Taaq98AkHa5T-z-CaYSHSNhPf7h2Xg&s" alt="Brand 4" />
                        <img src="https://yt3.googleusercontent.com/ytc/AIdro_mt0shWq4GUO0qXHAEIB7d8jHBmodvMs_NM7pFAOPozBQ=s900-c-k-c0x00ffffff-no-rj" alt="Brand 5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j-Db7_WuvMD18a50rqJ9V7h0UN_SYmYpmg&s" alt="Brand 6" />
                        <img src="https://www.logodesignteam.com/images/portfolio-images/furniture-logo-design/furniture-logo-design-new9.jpg" alt="Brand 7" />
                        {/* Add more brand images as needed */}
                </div>
            </section>

      {/* Footer */}
      <footer className="footer">
        <div className="contact">
          <p>Contact Us</p>
          <p>Email: support@econest.com</p>
          <p>Phone: +91 9823451088</p>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Sustainable-Living. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
