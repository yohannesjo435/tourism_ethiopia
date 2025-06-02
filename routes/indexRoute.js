const express = require("express");
const indexRoute = express.Router();

const destinations = [
    {
        name: "Lalibela",
        text1: "Lalibela is famous for its rock-hewn churches, which are a UNESCO World Heritage site. These remarkable structures are carved directly into the rock and showcase the incredible craftsmanship of the time. The churches date back to the 12th century and are considered a significant pilgrimage site for Ethiopian Orthodox Christians. Pilgrims from all over the country visit Lalibela, especially during religious festivals, to experience the spiritual ambiance and historical significance of these ancient structures.",
        text2: "The town itself is vibrant with culture, and visitors can explore the surrounding areas, including traditional markets and local communities. Lalibela not only serves as a religious center but also stands as a testament to Ethiopia's rich history and architectural ingenuity.",
        img: "/assets/lalibela.jpg"
    },
    {
        name: "Axum",
        text1: "Axum is known for its ancient ruins, including towering obelisks and the legendary Ark of the Covenant. This city was once the capital of the Aksumite Empire, which was one of the great civilizations of the ancient world. The archaeological sites in Axum provide a glimpse into the past, showcasing impressive stelae, tombs, and ancient palaces that reflect the grandeur of its historical significance.",
        text2: "In addition to its historical treasures, Axum is also a spiritual center, with many Ethiopian Orthodox Christians believing it to be the home of the Ark. Visitors can explore the rich tapestry of Axum's history while enjoying the unique blend of culture and religion that defines this remarkable city.",
        img: "/assets/Axum.jpg"
    },
    {
        name: "Fasil Castle",
        text1: "Fasil Castle, located in Gondar, is a UNESCO World Heritage site renowned for its unique architecture that blends Ethiopian, Portuguese, and Indian influences. Built in the 17th century, it served as a royal palace and reflects the cultural exchange that occurred during its construction. The castle complex includes various buildings, each with its own architectural style, surrounded by beautiful gardens and fortifications.",
        text2: "Fasil Castle is a symbol of Gondar's historical significance and attracts tourists interested in both history and architecture. The site is particularly lively during the Timkat festival, when the castle grounds are filled with colorful celebrations, making it a must-visit destination for anyone exploring Ethiopia.",
        img: "/assets/fasil.jpg"
    },
    {
        name: "Semien Mountains",
        text1: "The Semien Mountains National Park is famous for its stunning landscapes characterized by rugged peaks, deep valleys, and unique wildlife. This park is a UNESCO World Heritage site and offers excellent trekking opportunities for adventure enthusiasts. The breathtaking views from the mountain trails are unmatched, providing a perfect backdrop for hikers and nature lovers alike.",
        text2: "Home to several endemic species, including the Gelada baboon and the Ethiopian wolf, the Semien Mountains are a sanctuary for wildlife. Visitors can experience the beauty of nature while enjoying the tranquility and peace that this mountainous region has to offer.",
        img: "/assets/semine_mount-min.jpg"
      },
      {
        name: "Afar Danakil Depression",
        text1: "The Danakil Depression is one of the hottest places on Earth, known for its otherworldly landscapes that seem almost alien. This unique area features active volcanoes, salt flats, and colorful mineral deposits, creating a breathtaking environment unlike anywhere else. The extreme temperatures and geological activity make it a fascinating destination for adventurous travelers.",
        text2: "Exploring the Danakil Depression provides a rare opportunity to witness nature's raw power, including the mesmerizing sulfur springs and the famous Erta Ale volcano. Visitors to this region should be prepared for an extraordinary experience filled with stunning visuals and the thrill of exploring one of the planet's most extreme environments.",
        img: "/assets/afar-min.jpg"
      },
      {
        name: "Gheralta Mountains",
        text1: "The Gheralta Mountains are known for their dramatic cliffs and ancient rock churches that are carved into the mountainsides. This region is a hidden gem for those seeking adventure and exploration, offering breathtaking views and the chance to hike through stunning landscapes. The rock churches are not only architectural marvels but also hold deep spiritual significance for the local communities.",
        text2: "Visitors can engage with the rich cultural heritage of the area while enjoying outdoor activities such as hiking and rock climbing. The Gheralta Mountains provide a unique combination of natural beauty and historical depth, making them a captivating destination for explorers.",
        img: "/assets/Gheralta_Mountains.webp"
      },
      {
        name: "Omo Valley",
        text1: "The Omo Valley is renowned for its diverse cultures and ethnic groups, making it one of the most culturally rich areas in Ethiopia. This region is home to various tribes, each with its own unique traditions, customs, and languages. Visitors to the Omo Valley can experience traditional lifestyles and vibrant markets, providing a firsthand look at the diversity that characterizes this part of Ethiopia.",
        text2: "The valley offers opportunities for cultural exchange, allowing travelers to engage with local communities and learn about their ways of life. From colorful clothing and intricate body art to traditional music and dance, the Omo Valley is a vibrant tapestry of human expression that captivates visitors and enriches their understanding of Ethiopian culture.",
        img: "/assets/omo.jpg"
    }
];

indexRoute.get("/", (req, res) => {
  res.render("index");
});

indexRoute.get("/countryInfo/:id", (req, res) => {
  const destId = req.params.id;
  const dest = destinations[destId];
  res.render("countryInfo", { dest: dest });
});

module.exports = indexRoute;
