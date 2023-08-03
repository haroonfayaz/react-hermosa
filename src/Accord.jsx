import React from 'react';

const Accord =()=>{
    return(
        <>
          <div class="accordion col-4 mt-5 mx-auto" id="accordionExample">
           <h1>Weekend Getaway</h1>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Day 1
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <strong>Srinagar Arrival-Srinagar Local Sightseeing</strong> Our driver/ representative will pick you up from the Srinagar airport and take you to the Hotel. After refreshment leave for Srinagar local sightseeing, visiting the famous Mughal gardens in Srinagar which are Nishat Bagh (The garden of Pleasure), & Shalimar Bagh (Abode of love). These gardens are situated on the banks of Dal Lake. Nishat Bagh is the larger of the two gardens & has an impressive plantation of Chinar trees on its highest terrace. Both the gardens are built on a symmetrical plan of central waterways with fountains dividing a series of gardened terraces. Visit Botanical Garden & Shankar Acharya temple. Dinner and night stay at the Hotel in Srinagar.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Day 2
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Srinagar – Gulmarg – Srinagar</strong> After breakfast, go to Gulmarg, which is a part of the Western Himalayas and is situated on the Pir Panjal Range. The Meadow of Flowers is the nickname for Gulmarg. On the way, you can admire the lovely Tangmarg town before continuing on a scenic 14-kilometer trip to Gulmarg. Beginning a little trip, board the Gondola cable car system (the 08-minute ropeway). After an hour, return to Gulmarg and indulge in some horseback riding. Dinner and overnight stay at the Gulmarg hotel.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Day 3
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Srinagar-Pahalgam-Srinagar</strong> We travel to Pahalgam after breakfast.At Khanabal, we leave the NH44 and travel through Anantnag, the second-largest city. From this point on, the highway becomes beautiful as we follow the Lidder River as it flows in the opposite direction. Later, you can travel to several breathtaking locations including Chandanwari, Beetab Valley, and Aru Valley (AT YOUR OWN COST). Later back to Srinagar and check into Houseboat, take 01 hour shikara ride in the famous Dal Lake visiting floating gardens and Meena bazaar. Have dinner and overnight stay at Houseboat.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Day 4
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <strong>Srinagar Airport drop</strong> Today after breakfast leave for Srinagar airport for onwards destination journey with happy memories.
                    </div>
                    </div>
               
                </div>
          </div>
        </>
    );
};
export default Accord;