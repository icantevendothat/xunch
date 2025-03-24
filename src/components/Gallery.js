import React from 'react';

function Gallery({ selectedCategory, onImageClick }) {
  const images = [
    {
        src: `${process.env.PUBLIC_URL}/gallery/CthuhlhuKid.webp`,
        alt: "3D Rendering of a Cthulhu Kid",
        category: "design",
        caption: "“Cthulhu Kid” 2023. Created on Zbrush."
      },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_6107.jpg`,
        alt: "Photo 0",
        category: "photo",
        caption: "Teezo Touchdown in NYC 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_1789.jpg`,
        alt: "Photo 1",
        category: "photo",
        caption: "Campbell in Queens 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_1790.jpg`,
        alt: "Photo 2",
        category: "photo",
        caption: "Campbell in Queens 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_1793.JPG`,
        alt: "Photo 3",
        category: "photo",
        caption: "NYC Underground 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_1794.JPG`,
        alt: "Photo 4",
        category: "photo",
        caption: "Waiting Room 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_1970.JPG`,
        alt: "Photo 5",
        category: "photo",
        caption: "Kobe in Lower Manhattan 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_1973.JPG`,
        alt: "Photo 6",
        category: "photo",
        caption: "Kobe in Lower Manhattan 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_2114.jpg`,
        alt: "Photo 7",
        category: "photo",
        caption: "Kobe in Lower Manhattan 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_2140.JPG`,
        alt: "Photo 8",
        category: "photo",
        caption: "Kobe in Lower Manhattan 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_2141.jpg`,
        alt: "Photo 9",
        category: "photo",
        caption: "Kobe in Lower Manhattan 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_2150 3.jpg`,
        alt: "Photo 10",
        category: "photo",
        caption: "Friends in Barcelona, Spain"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/Hannah bedroom scan-2.png`,
        alt: "Photo 11",
        category: "photo",
        caption: "Hannah Jadagu in East Village February 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/BestDaysOfMyLife.webp`,
        alt: "Photo 12",
        category: "dp",
        caption: "My Friend Shawn - Best Days of My Life (Official Music Video) Cinematography <br> <a href='https://www.youtube.com/watch?v=gKdVcfjxXzI'>Watch Here</a>"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_6111.JPG`,
        alt: "Photo 13",
        category: "photo",
        caption: "Teezo Touchdown in NYC 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_6151 2.jpg`,
        alt: "Photo 14",
        category: "photo",
        caption: "Hannah Jadagu at Northeastern University 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_6154.jpg`,
        alt: "Photo 15",
        category: "photo",
        caption: "Hannah Jadagu at Northeastern University 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_6317.jpg`,
        alt: "Photo 16",
        category: "photo",
        caption: "Hannah Jadagu at Webster Hall 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/LoseGIF.webp`,
        alt: "Photo 19",
        category: "film",
        caption: "Hannah Jadagu - Lose (Official Lyric Video) <br> <a href='https://www.youtube.com/watch?v=0O37kVOlmck'>Watch Here</a>"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_4988.jpg`,
        alt: "Photo 18",
        category: "photo",
        caption: "Hannah Jadagu Press Photo Manhattan 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/3D_Alien.webp`,
        alt: "“3D Rendering of an Alien inspired by H.R. Giger.",
        category: "design",
        caption: "“Alien 1” 2023. Created on Zbrush. Inspired by the work of H.R. Giger."
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_2300.JPG`,
        alt: "Photo 20",
        category: "photo",
        caption: "Cascais, Portugal 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_2301.JPG`,
        alt: "Photo 21",
        category: "photo",
        caption: "Cascais, Portugal 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_3917.jpg`,
        alt: "Photo 22",
        category: "photo",
        caption: "Amin in Lower Manhattan 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_3923.JPG`,
        alt: "Photo 23",
        category: "photo",
        caption: "Ant Ram in Lower Manhattan 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/Hannah bedroom3-3.png `,
        alt: "Photo 24",
        category: "photo",
        caption: "Hannah Jadagu in East Village February 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_4181.JPG`,
        alt: "Photo 26",
        category: "photo",
        caption: "Friends in NYC Summer 2021 "
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_4185.JPG`,
        alt: "Photo 27",
        category: "photo",
        caption: "Central Park Summer 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_4189.jpg`,
        alt: "Photo 29",
        category: "photo",
        caption: "Across the Hudson Summer 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/PileOfGarbageGIF.webp`,
        alt: "Photo 31",
        category: "film",
        caption: "Pile of Garbage - Short Film (Coming Soon) Written, Directed, Edited"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_4264.jpg`,
        alt: "Photo 33",
        category: "photo",
        caption: "World Trade Center Station Summer 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_4891.jpg`,
        alt: "Photo 34",
        category: "photo",
        caption: "Hannah Jadagu Press Photo Manhattan 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_4897.jpg`,
        alt: "Photo 35",
        category: "photo",
        caption: "Hannah Jadagu Press Photo Manhattan 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EPSON008.jpg`,
        alt: "Photo 36",
        category: "photo",
        caption: "Hannah Claire 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EPSON010.jpg`,
        alt: "Photo 37",
        category: "photo",
        caption: "Kendall Raesunnie Lower Manhattan 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/Unveiled.webp`,
        alt: "Photo 38",
        category: "dp",
        caption: "Unveiled - Short Film (2024) Cinematographer </br> <a href='https://www.youtube.com/watch?v=3NPbAV_Yw5o'>Watch Here</a>"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/9AEAB763-1E49-419B-920F-6345EBA526EC.jpg`,
        alt: "Photo 40",
        category: "photo",
        caption: "Nic Going West 2021"
    }, 
    {
        src: `${process.env.PUBLIC_URL}/gallery/9AEAB763-1E49-419B-920F-6345EBA526EC.jpg`,
        alt: "Photo 40",
        category: "photo",
        caption: "Nic Going West 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_2215.jpg`,
        alt: "Photo 43",
        category: "photo",
        caption: "Cascais, Portugal 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_9695.jpg`,
        alt: "Photo 44",
        category: "design",
        caption: "May I Have a Cigarette? 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_5003.jpg`,
        alt: "Photo 45",
        category: "photo",
        caption: "Hannah Jadagu Press Photo Manhattan 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_5069.JPG`,
        alt: "Photo 46",
        category: "photo",
        caption: "Event Photography NYC 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_5139.jpg`,
        alt: "Photo 47",
        category: "photo",
        caption: "Event Photography NYC 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_5145.jpg`,
        alt: "Photo 48",
        category: "photo",
        caption: "Event Photography NYC 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_5285.JPG`,
        alt: "Photo 49",
        category: "photo",
        caption: "Van 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_5756.JPG`,
        alt: "Photo 50",
        category: "photo",
        caption: "Jacob Stockman 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_5847.jpg`,
        alt: "Photo 51",
        category: "photo",
        caption: "Nic Going West 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/MadBall.webp`,
        alt: "Photo 52",
        category: "design",
        caption: "“MadBall” 2023. Created on Zbrush. Inspired by AmToy's MadBall Series."
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_6802.jpg`,
        alt: "Photo 53",
        category: "photo",
        caption: "Hannah Jadagu looking at a press photo I took 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_7546.jpg`,
        alt: "Photo 54",
        category: "photo",
        caption: "Hannah Jadagu Sultan Room Headline Show 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_7551.jpg`,
        alt: "Photo 55",
        category: "photo",
        caption: "Hannah Jadagu Sultan Room Headline Show 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_8709.jpg`,
        alt: "Photo 56",
        category: "photo",
        caption: "VWescott NYC 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EPSON005.jpg`,
        alt: "Photo 57",
        category: "photo",
        caption: "Hannah Claire 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EPSON007.jpg`,
        alt: "Photo 58",
        category: "photo",
        caption: "Hannah Claire 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_9699.jpg`,
        alt: "Photo 59",
        category: "design",
        caption: "Cat Girl 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EPSON013.webp`,
        alt: "Photo 60",
        category: "photo",
        caption: "My Friend Shawn Album Cover Shoot 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EPSON014.webp`,
        alt: "Photo 61",
        category: "photo",
        caption: "My Friend Shawn 'Training Arc' Album Cover 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EPSON027.jpg`,
        alt: "Photo 62",
        category: "photo",
        caption: "My Friend Shawn Graphic 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31250022.webp`,
        alt: "Photo 65",
        category: "photo",
        caption: "Amin in Lower Manhattan 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/XunchKid.webp`,
        alt: "Photo 66",
        category: "design",
        caption: "“Xunch Kid” 2021. Created on Nomad Sculpt."
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/KissMeAgain.webp`,
        alt: "Photo 67",
        category: "dp",
        caption: "Babe City - Kiss Me Again Shot, Directed, Edited, Colored <br> <a href='https://www.youtube.com/watch?v=n4VxOz7faFk'>Watch Here</a>"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_9694.jpg`,
        alt: "Photo 68",
        category: "design",
        caption: "Old Man 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/13880018.jpg`,
        alt: "Photo 69",
        category: "photo",
        caption: "Campbell in Queens 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/000020280003.jpg`,
        alt: "Photo 70",
        category: "photo",
        caption: "Jah in Times Square 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EnvyAdamsGIF.webp`,
        alt: "Photo 71",
        category: "film",
        caption: "Babe City - Envy Adams Goes Insane (Official Music Video) Co-Directed, Shot, Edited <br> Coming Soon"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31230018.jpg`,
        alt: "Photo 72",
        category: "photo",
        caption: "Lower Manhattan With Level Three Collective 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31230023.webp`,
        alt: "Photo 74",
        category: "photo",
        caption: "Lower Manhattan With Level Three Collective 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31230025.jpg`,
        alt: "Photo 75",
        category: "photo",
        caption: "Lower Manhattan With Level Three Collective 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/KissMeAgain.webp`,
        alt: "Photo 107",
        category: "film",
        caption: "Babe City - Kiss Me Again (Official Music Video) 2024 Directed, Shot, Edited, Colored <br> <a href='https://www.youtube.com/watch?v=n4VxOz7faFk'>Watch Here</a>"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31240014.webp`,
        alt: "Photo 78",
        category: "photo",
        caption: "Lower Manhattan With Level Three Collective 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/8BCCCF90-E261-4E54-ABBA-7B02E749B939.JPG`,
        alt: "Photo 79",
        category: "photo",
        caption: "Broken Mirror 2022"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31250004.webp`,
        alt: "Photo 80",
        category: "photo",
        caption: "Hannah Jadagu looking at a press photo I took 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31250004.webp`,
        alt: "Photo 80",
        category: "photo",
        caption: "Amin in Lower Manhattan 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31250005.JPG`,
        alt: "Photo 82",
        category: "photo",
        caption: "Amin in Lower Manhattan 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31250017.JPG`,
        alt: "Photo 84",
        category: "photo",
        caption: "Dennis Free in Lower Manhattan 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31260027.jpg`,
        alt: "Photo 88",
        category: "photo",
        caption: "Dennis Free in Lower Manhattan 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/31260006.jpg`,
        alt: "Photo 86",
        category: "photo",
        caption: "Juliet Ivy Lower Manhattan 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/IMG_6329.JPG`,
        alt: "Photo 87",
        category: "photo",
        caption: "Hannah Jadagu Webster Hall 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/EEBDA9AC-4599-4533-A93C-BCA9EA197673.JPG`,
        alt: "Photo 85",
        category: "photo",
        caption: "Friends in Barcelona, Spain"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/ChaseU_GIF.webp`,
        alt: "Photo 92",
        category: "film",
        caption: "My Friend Shawn - Chase U! (Official Music Video) Directed, Edited, Animated <br> <a href='https://www.youtube.com/watch?v=3Fpf1zEhuaM'>Watch Here</a>"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/52820009.jpg`,
        alt: "Photo 90",
        category: "photo",
        caption: "Kyla Imani 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/54140032.jpg`,
        alt: "Photo 91",
        category: "photo",
        caption: "Event Photography NYC 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/46570033.jpg`,
        alt: "Photo 89",
        category: "photo",
        caption: "Hannah Jadagu Press Photo Manhattan 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/54150023.jpg`,
        alt: "Photo 93",
        category: "photo",
        caption: "Event Photography NYC 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/54150025.jpg`,
        alt: "Photo 94",
        category: "photo",
        caption: "Event Photography NYC 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/54160024.jpg`,
        alt: "Photo 95",
        category: "photo",
        caption: "Event Photography NYC 2023"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/000080640003.JPG`,
        alt: "Photo 96",
        category: "photo",
        caption: "Undergorund 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/000080640017.jpg`,
        alt: "Photo 97",
        category: "photo",
        caption: "NYC Summer 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/84860013.webp`,
        alt: "Photo 98",
        category: "photo",
        caption: "Hannah Jadagu Webster Hall 2024"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/000277750013.jpg.jpg`,
        alt: "Photo 99",
        category: "photo",
        caption: "Nic Going West 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/000409400007.jpg`,
        alt: "Photo 100",
        category: "photo",
        caption: "Vis Major Magazine Shoot 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/000409400025.jpg`,
        alt: "Photo 101",
        category: "photo",
        caption: "Vis Major Magazine Shoot 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/000409410001.jpg`,
        alt: "Photo 102",
        category: "photo",
        caption: "Vis Major Magazine Shoot 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/000409410017.jpg`,
        alt: "Photo 103",
        category: "photo",
        caption: "Vis Major Magazine Shoot 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/A95A6BB8-08A4-49F2-9EA3-F7750A9B7DC4.JPG`,
        alt: "Photo 104",
        category: "photo",
        caption: "Guitar Slam 2021"
    },
    {
        src: `${process.env.PUBLIC_URL}/gallery/Hannah scan carpet_expand.JPG`,
        alt: "Photo 106",
        category: "photo",
        caption: "Hannah Jadagu in East Village February 2024"
    }
  ]; 

  const filteredImages = selectedCategory === null || selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="grid-container">
      <div className="image-grid">
        {filteredImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="item"
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;