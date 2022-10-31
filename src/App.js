  import { Route, Routes } from "react-router-dom";
  import Allproduct from "./Component/Allproduct";

  import Hotproducts from "./Component/Hotproducts";
  import Newcollection from "./Component/Newcollection";
  import Prefall from "./Component/Prefall";
  import Home from "./Pages/Home";
  import Dress from "./Component/Dress";
  import Pant from "./Component/Pant";
  import Skirt from "./Component/Skirt";
  import Shirt from "./Component/Shirt";
  
  import Header from "./Component/Header";
  import Footer from "./Pages/Footer";
import ProductDetail from "./Component/ProductDetail";

  function App() {
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/collections">
            <Route path=':id' element={<ProductDetail/>}/>
            <Route path="pre-fall-22" element={<Prefall/>}/>
            <Route path="san-pham-moi" element={<Newcollection/>}/>
            <Route path="all" element={<Allproduct/>}/>
            <Route path="vay" element={<Dress/>}/>
            <Route path="quan" element={<Pant/>}/>
            <Route path="dam" element={<Skirt/>}/>
            <Route path="ao" element={<Shirt/>}/>
            <Route path="hot-products" element={<Hotproducts/>}/>
          </Route>
        </Routes>
        <Footer/>
      </div>
    );
  }

  export default App;
