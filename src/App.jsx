import { useState } from 'react'
import './App.css'
import data from './data'


function App() {
  const [menuItem, setMenuItem] = useState(data)
  const allcategories = [
    "All",
    ... new Set(
      data.map((item) => {
      return item.category;
  })
  ),
  ];
  const filterItems = (category) =>{
    if(category === "All"){
      setMenuItems(data)
    }else{
      const newItem = data.filter(
        (item) => item.category === category
      );
      setMenuItems(newItem)
    }
  }
  

  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Grab Restaurant</h2>
            <div className="underline"></div>
            <div className="Search">
              <input type="text" placeholder="Search"></input>
            </div>
            <div className="Menu">
              <div class="card">
                <img
                  src="https://food-cms.grab.com/compressed_webp/items/THITE2023112007272945676/detail/menueditor_item_5aeff23a45af4c808580d89e6d4da5f0_1700465178181796481.webp"
                  alt="food"
                />
                <h4 className="titlefood">
                  <b>ก๋วยเตี๋ยวเรือหมูน้ำตกแยกชักพระ - ถนนชัยพฤษ</b>
                </h4>
                <p>อาหารตามสั่ง</p>
                <button>Order now</button>
              </div>
              <div class="card2">
                <img
                  src="https://food-cms.grab.com/compressed_webp/items/THITE2022032208193473743/detail/menueditor_item_475c7508b0114d60a8fd4030201267bf_1711092090849162413.webp"
                  alt="food"
                />
                <h4 className="titlefood">
                  <b>ก๋วยเตี๋ยวหมูใบตำลึงนายแกละ - ถนนชัยพฤกษ์</b>
                </h4>
                <p>อาหารตามสั่ง</p>
                <button>Order now</button>
              </div>
              <div class="card3">
                <img
                  src="https://food-cms.grab.com/compressed_webp/items/THITE2023120505181219387/detail/menueditor_item_4a0c0c487880414a918a5c757fa47746_1701766398771530046.webp"
                  alt="food"
                />
                <h4 className="titlefood">
                  <b>ขนมจีนน้ำยา ตามายายมี - ปากซอยสวนผัก 1</b>
                </h4>
                <p>อาหารตามสั่ง</p>
                <button>Order now</button>
              </div>
              <div class="card4">
                <img
                  src="https://food-cms.grab.com/compressed_webp/items/THITE2023031506154519372/detail/menueditor_item_275c0810696247a7a94020eb8336554d_1704368121563401684.webp"
                  alt="food"
                />
                <h4 className="titlefood">
                  <b>ต้าลี่เฮง ข้าวมันไก่สิงคโปร์ - ปากซอยสวนผัก4</b>
                </h4>
                <p>อาหารตามสั่ง</p>
                <button>Order now</button>
              </div>
              <div class="card5">
                <img
                  src="https://food-cms.grab.com/compressed_webp/items/THITE2022122606205171989/detail/menueditor_item_3aa62e0f71674866ad6462954f9079fe_1712336026258277318.webp"
                  alt="food"
                />
                <h4 className="titlefood">
                  <b>ชาฟองนม - ถนนบรมราชชนนี</b>
                </h4>
                <p>อาหารตามสั่ง</p>
                <button>Order now</button>
              </div>
              <div class="card6">
                <img
                  src="https://food-cms.grab.com/compressed_webp/items/THITE2024061410104326481/detail/menueditor_item_aa71d06b968e4d88bdec7af3ba018dfd_1718359708635902708.webp"
                  alt="food"
                />
                <h4 className="titlefood">
                  <b>ลานขนมไทย - ดิโอลด์สยามพลาซ่า</b>
                </h4>
                <p>อาหารตามสั่ง</p>
                <button>Order now</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
