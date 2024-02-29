import React from "react";
import Product from "./Product";
import Carousel from '../components/Carousel'
import ProductCarosuel from "../components/ProductCarosuel";


function Home(props) {
  return (
    <div className="max-h-fit flex justify-center">
      <div class="flex flex-col justify-center xl:max-w-[1500px] lg:max-w-[1200px] md:max-w-[800px] sm:max-w-[600px]">
        <Carousel />
        <div className="relative bottom-[300px] ">
    
          <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-3  sm:grid-cols-3 ">
            <Product
              id="1001"
              title="Steelbird Adventure A-2 Full Finger Bike Riding Gloves with Touch Screen Sensitivity at Thumb and Index Finger, Protective Off-Road Motorbike Racing (M, Red)"
              image={"https://m.media-amazon.com/images/I/71EWIIFR8XL._AC_UL320_.jpg"}
              price={128.66}
              rating={3} />
            <Product
              id="1002"
              image={"https://m.media-amazon.com/images/I/51YoxGAgWoL._SX679_.jpg"}
              title={"Haier 190 L 4 Star Direct Cool Single Door Refrigerator Appliance (2023 Model, HED-204DS-P, Dazzle Steel)"}
              price={14999}
              rating={4}
            />
            <Product
              id="1007"
              image={"https://m.media-amazon.com/images/I/51vdikp4tPS._SX679_.jpg"}
              title={"The Derma Co 1% Salicylic Acid Gel Face Wash With Salicylic Acid & Witch Hazel For Active Acne - 100 Ml(Dermaco)"}
              rating={4}
              price={199} />
            <Product
              id="1008"
              image={"https://m.media-amazon.com/images/I/61eyQSDtJaL._SX679_.jpg"}
              title={"TBoldfit Adjustable Hand Grip Strengthener, Hand Gripper for Men & Women for Gym Workout Hand Exercise Equipment to Use in Home for Forearm Exercise Finger Exercise Power Gripper"}
              rating={4}
              price={199} />
      
            <Product
              id="1003"
              title={"OnePlus 163.8 cm (65 inches) U Series 4K LED Smart Android TV 65U1S (Black)"}
              image={"https://m.media-amazon.com/images/I/61WXPPeQLhL._SX679_.jpg"}
              price={49999}
              rating={2} />
            <Product
              id="1004"
              image={"https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg"}
              title={"Apple iPhone 13 (128GB) - Midnight"}
              rating={4}
              price={51790} />
            <Product
              id="1005"
              image={"https://m.media-amazon.com/images/I/81UFHe-hH5L._SX679_.jpg"}
              title={"Apple 2023 MacBook Air laptop with M2 chip: 38.91cm (15.3 inch) Liquid Retina display, 8GB RAM 512GB SSD storage, backlit keyboard, 1080p FaceTime HD camera,Touch ID. Works with iPhone/iPad; Starlight"}
              rating={5}
              price={144990} />

            <Product
              id="1006"
              image={"https://m.media-amazon.com/images/I/81iBw1CczkL._SL1500_.jpg"}
              title={"Samsung 49-inch(123.8cm) Ultra-Wide Dual QHD Monitor, USB Type-C, HAS, QLED Technology, 1800R Curvature, HDR 400, Flicker Free, Eye Saver Mode, LAN Port, (LS49A950UIWXXL, Black)"}
              rating={4}
              price={127399} />
            <Product
              id='1009'
              image={"https://m.media-amazon.com/images/I/51qpGr-1qzL._SX679_.jpg"}
              title={"Minimalist 2% Salicylic Acid Face Wash For Oily Skin | Sulphate free, Anti Acne Face Cleanser With LHA & Zinc For Acne or Pimples | Men & Women 100 ml"}
              rating={3}
              price={284} />
            <Product
              id="1009"
              image={"https://m.media-amazon.com/images/I/71ckDfWKZ8L._SX679_.jpg"}
              title={"HP OMEN Gaming Laptop, AMD Ryzen 7 7840HS AI Powered, 6GB RTX 3050 GPU, 16.1-inch (40.9 cm), 95W TGP, FHD, IPS, 144Hz, 16GB DDR5, 1TB SSD, RGB Backlit KB, B&O (MSO, Blue, 2.29 kg), s0089AX"}
              rating={4}
              price={81990} />
          </div>
          <div className="bg-white mt-4 rounded-[5px] px-5 flex flex-col h-80" >
            <h3 className="font-bold p-5  text-lg">More items to Consider</h3>
            <ProductCarosuel  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
