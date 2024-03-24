import React from 'react';
import "./Spotlightbikes.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Bikecards from './Bikecards';

function Spotlightbikes() {

    return (
        <div className='tab-container'>
            
            <Tabs variant='soft-rounded' colorScheme='green' >
                <TabList className='tab-list'>
                    <Tab className='tablist-menu'>Most Popular</Tab>
                    <Tab className='tablist-menu'>Sport Bikes</Tab>
                    <Tab className='tablist-menu'>Best Mileage Bikes</Tab>
                    <Tab className='tablist-menu'>Cruiser Bikes</Tab>
                    <Tab className='tablist-menu'>Commuter Bikes</Tab>
                    <Tab className='tablist-menu'>Off Road Bikes</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel >
                        <h2 className='tabpanal-heading'> </h2>
                        <div className='tabpanal-container'>
                                      <Bikecards
                                      name="Yamaha MT 15"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/494X300/mt-15-2-062e4b1bb4ffad.jpg?imwidth=400&impolicy=resize"
                                      price="1.68 - 1.73 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Hero Splendor Plus"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-splendor/494X300/hero-motocorp-splendor6594ef508d3db.jpg?imwidth=400&impolicy=resize"
                                      price="75,141 - 77,986"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Royal Enfield Classic 350"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/royal-enfield/classic350/494X300/classic3506131bb8729f70.jpg?imwidth=400&impolicy=resize"
                                      price="1.93 - 2.25 Lakh"
                                      rating="⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Honda Activa 6G"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/honda/activa-6g/494X300/activa-6g65e80a524ce81.jpg?imwidth=400&impolicy=resize"
                                      price="77,353 - 83,853"
                                      rating="⭐⭐⭐⭐⭐"

                                      />  

                                      <Bikecards
                                      name="TVS Apache RTR 160"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/tvs/apache-160/650X420/apache-1606319c53d7f639.jpg?imwidth=400&impolicy=resize"
                                      price="1.19 - 1.26 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"

                                      />  
                                      
                                      
                                  </div>          
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> </h2>
                    <div className='tabpanal-container'>
                                     <Bikecards
                                      name="Hero Xtreme 125R"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/hero/xtreme-125r/494X300/xtreme-125r65afae3060bec.jpg?imwidth=400&impolicy=resize"
                                      price="95,000 - 99,500"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Bikecards
                                      name="Yamaha MT 15"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/494X300/mt-15-2-062e4b1bb4ffad.jpg?imwidth=400&impolicy=resize"
                                      price="1.68 - 1.73 Lakh"
                                      rating="⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name=" TVS Apache RTR 160"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/tvs/apache-160/650X420/apache-1606319c53d7f639.jpg?imwidth=400&impolicy=resize"
                                      price="1.19 - 1.26 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Bajaj Pulsar NS200"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/bajaj/bajaj-pulsar-200-ns/494X300/bajaj-pulsar-200-ns65e02b4377ce9.jpg?imwidth=400&impolicy=resize"
                                      price="1.57 Lakh*"
                                      rating="⭐⭐⭐⭐"
                                      />

                                      <Bikecards
                                      name="Kawasaki Ninja ZX-10R"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/kawasaki/kawasaki-ninja-zx-10r/494X300/kawasaki-ninja-zx-10r63198df019f4e.jpg?imwidth=400&impolicy=resize"
                                      price="15.99 - 16.63 Lakh*"
                                      rating="⭐⭐⭐⭐"
                                      />

                                     
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> </h2>
                    <div className='tabpanal-container'>
                        <Bikecards
                                      name="Hero Splendor Plus"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-splendor/494X300/hero-motocorp-splendor6594ef508d3db.jpg?imwidth=400&impolicy=resize"
                                      price="75,141 - 77,986*"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Bikecards
                                      name="Honda SP 125 "
                                      imageUrl="https://bd.gaadicdn.com/processedimages/honda/sp-125/494X300/sp-125646c75d0667b8.jpg?imwidth=400&impolicy=resize"
                                      price="86,017 - 90,567*"
                                      rating="⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="TVS Raider"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/tvs/raider/494X300/raider6391b0dc795bf.jpg?imwidth=400&impolicy=resize"
                                      price="95,219 - 1.03 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Bajaj Pulsar NS 125"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/31211348.webp?k=a8869335c2d3f78c272422935df075e7c8fc1d2b8c132468c2b472e1b9511831&o="
                                      price="1.05 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />

                                      <Bikecards
                                      name="Yamaha RayZR 125 Fi Hybrid"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/yamaha/ray-zr-125/494X300/ray-zr-12564e0603ae7adf.jpg?imwidth=400&impolicy=resize"
                                      price="84,730 - 95,130*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> </h2>
                    <div className='tabpanal-container'>
                        <Bikecards
                                      name="Royal Enfield Hunter 350"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/royal-enfield/roadstar/494X300/roadstar62f099b17ef0c.jpg?imwidth=400&impolicy=resize"
                                      price="1.50 - 1.75 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Bikecards
                                      name="Jawa 42 Bobber"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/jawa-motorcycles/42-bobber/494X300/42-bobber6337d3957bb64.jpg?imwidth=400&impolicy=resize"
                                      price="2.25 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Honda Hness CB350"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/honda/honda-cruiser/494X300/honda-cruiser640f0d834452b.jpg?imwidth=400&impolicy=resize"
                                      price="2.10 - 2.16 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Harley Davidson X440"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/harley-davidson/hd-400/494X300/hd-40064a3b6edc4a8b.jpg?imwidth=400&impolicy=resize"
                                      price="2.40 - 2.80 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />

                                      <Bikecards
                                      name="Hero Mavrick 440"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/hero/400cc-bike/494X300/400cc-bike65afe05ae7f57.jpg?imwidth=400&impolicy=resize"
                                      price="1.99 - 2.24 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> </h2>
                    <div className='tabpanal-container'>
                        <Bikecards
                                      name="Hero Splendor Plus"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-splendor/494X300/hero-motocorp-splendor6594ef508d3db.jpg?imwidth=400&impolicy=resize"
                                      price="75,141 - 77,986"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Bikecards
                                      name="Honda SP 125"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/honda/sp-125/494X300/sp-125646c75d0667b8.jpg?imwidth=400&impolicy=resize"
                                      price="86,017 - 90,567*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Bajaj Pulsar 125"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/bajaj/pulsar-125/494X300/pulsar-12564dc528bd012b.jpg?imwidth=400&impolicy=resize"
                                      price="80,416 - 94,138*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="TVS Radeon"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/tvs/radeon/494X300/radeon62fdf336501e1.jpg?imwidth=400&impolicy=resize"
                                      price="62,405 - 80,744*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />

                                      <Bikecards
                                      name="Kawasaki W175"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/kawasaki/w175/494X300/w175658a8772d0c16.jpg?imwidth=400&impolicy=resize"
                                      price="1.22 - 1.35 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> </h2>
                    <div className='tabpanal-container'>
                        <Bikecards
                                      name="BMW G 310 GS"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/bmw/g-310-gs/494X300/g-310-gs6076cf8e3b0de.jpg?imwidth=400&impolicy=resize"
                                      price="3.30 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Bikecards
                                      name="KTM 390 Adventure"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/ktm/390-adventure/494X300/390-adventure6274e177ca035.jpg?imwidth=400&impolicy=resize"
                                      price="3.39 - 3.61 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Yezdi Adventure"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/jawa-motorcycles/adventure/494X300/adventure657d25508cacc.jpg?imwidth=400&impolicy=resize"
                                      price="2.16 - 2.20 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Bikecards
                                      name="Hero XPulse 200T 4V"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/hero/xpulse-200t/494X300/xpulse-200t658ab4db0ebc7.jpg?imwidth=400&impolicy=resize"
                                      price="1.40 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />

                                      <Bikecards
                                      name="Honda CRF1100L Africa Twin"
                                      imageUrl="https://bd.gaadicdn.com/processedimages/honda/crf-1100/494X300/crf-1100646c869f9ec95.jpg?imwidth=400&impolicy=resize"
                                      price="15.97 - 17.51 Lakh*"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                        
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Spotlightbikes