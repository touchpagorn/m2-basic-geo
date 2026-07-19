import { VocabItem, Question, TrueFalseQuestion, UnitContent } from "./types";

export const unit1Vocab: VocabItem[] = [
  {
    word: "Acquisition",
    partOfSpeech: "n.",
    definitionEn: "The act of obtaining or acquiring something.",
    definitionTh: "การได้มา, การรวบรวมข้อมูล",
    example: "Remote sensing is the information acquisition about the surface of the Earth."
  },
  {
    word: "Contour",
    partOfSpeech: "adj., n., v.",
    definitionEn: "An outline representing the boundary of a shape or landform.",
    definitionTh: "เส้นเค้าโครง, เส้นชั้นความสูงตามรูปร่างของพื้นดิน",
    example: "A topographic map shows physical features through the use of contour lines."
  },
  {
    word: "Electromagnetic",
    partOfSpeech: "adj.",
    definitionEn: "Relating to the interrelation of electric currents or fields and magnetic fields.",
    definitionTh: "เกี่ยวกับแม่เหล็กไฟฟ้า",
    example: "The sensors record electromagnetic radiation reflected from Earth's objects."
  },
  {
    word: "Elevation",
    partOfSpeech: "n.",
    definitionEn: "Height above a given level, especially sea level.",
    definitionTh: "การยกให้สูงขึ้น, ระดับความสูงจากระดับน้ำทะเล",
    example: "Mount Elbrus has an elevation of 5,642 metres."
  },
  {
    word: "Epidemic",
    partOfSpeech: "n., adj.",
    definitionEn: "A widespread occurrence of an infectious disease in a community at a particular time.",
    definitionTh: "การลุกลามอย่างรวดเร็ว, การแพร่ระบาดของโรคอย่างรวดเร็ว, โรคระบาด",
    example: "Special symbols are used in GIS to monitor the spread of epidemics."
  },
  {
    word: "Eruption",
    partOfSpeech: "n.",
    definitionEn: "An act or instance of erupting, especially of a volcano.",
    definitionTh: "การระเบิด, การปะทุ (ของภูเขาไฟ)",
    example: "Satellite images provide real-time events of volcano eruptions on Earth's surface."
  },
  {
    word: "Occurrence",
    partOfSpeech: "n.",
    definitionEn: "An incident or event that happens.",
    definitionTh: "สิ่งที่เกิดขึ้น, เหตุการณ์ที่เกิดขึ้น",
    example: "Special symbols show specific occurrences like storm monitoring."
  },
  {
    word: "Quantitative",
    partOfSpeech: "adj.",
    definitionEn: "Relating to, measuring, or measured by the quantity of something rather than its quality.",
    definitionTh: "เกี่ยวกับปริมาณ, เชิงปริมาณ (ซึ่งสามารถวัดหรือคำนวณเป็นตัวเลขได้)",
    example: "The satellite data is quantitative and digital, which are fed into computers."
  },
  {
    word: "Radiation",
    partOfSpeech: "n.",
    definitionEn: "The emission of energy as electromagnetic waves.",
    definitionTh: "รังสี, การแผ่รังสี",
    example: "Sensors pick up solar radiation reflected from trees and water."
  },
  {
    word: "Reservoir",
    partOfSpeech: "n.",
    definitionEn: "A large natural or artificial lake used as a source of water supply.",
    definitionTh: "อ่างเก็บน้ำ, เขื่อนเก็บน้ำ",
    example: "The area or polygon symbol in GIS is used to represent a reservoir boundary."
  },
  {
    word: "Revive",
    partOfSpeech: "v.",
    definitionEn: "Restore to life or consciousness; activate or flourish again.",
    definitionTh: "ฟื้นคืนสติ, มีชีวิตชีวาอีกครั้ง, นำกลับมาฟื้นฟูใหม่",
    example: "The plan to take aerial photographs in Surin Province was revived in 1950."
  },
  {
    word: "Spatial",
    partOfSpeech: "adj.",
    definitionEn: "Relating to or occupying space.",
    definitionTh: "เกี่ยวกับพื้นที่, เชิงพื้นที่ (ข้อมูลที่มีตำแหน่งพิกัดทางภูมิศาสตร์)",
    example: "GIS is used for storing, analyzing and showing spatial data about an area."
  }
];

export const unit2Vocab: VocabItem[] = [
  {
    word: "Abundant",
    partOfSpeech: "adj.",
    definitionEn: "Existing or available in large quantities; overflowing.",
    definitionTh: "มากมาย, อุดมสมบูรณ์, มีปริมาณมาก",
    example: "Europe has abundant natural resources, particularly iron and coal."
  },
  {
    word: "Carriage",
    partOfSpeech: "n.",
    definitionEn: "The conveying of goods or passengers; a passenger vehicle of a train.",
    definitionTh: "การขนส่ง, ตู้ขบวนโดยสารรถไฟ",
    example: "Railway networks facilitate the carriage of heavy industrial items across Europe."
  },
  {
    word: "Collision",
    partOfSpeech: "n.",
    definitionEn: "An instance of one moving object striking against another; conflict.",
    definitionTh: "การปะทะกัน, การชนกัน (ของแผ่นเปลือกโลก), ความขัดแย้ง",
    example: "The southern high mountains were formed by the collision of tectonic plates."
  },
  {
    word: "Erosion",
    partOfSpeech: "n.",
    definitionEn: "The process of eroding or being eroded by wind, water, or natural agents.",
    definitionTh: "การกัดกร่อน, การกัดเซาะ (เช่น โดยธารน้ำแข็งหรือลมฝน)",
    example: "The Fjord coastline of Norway was caused by deep glacial erosion."
  },
  {
    word: "Facilitate",
    partOfSpeech: "v.",
    definitionEn: "Make an action or process easy or easier.",
    definitionTh: "ทำให้สะดวกขึ้น, เอื้ออำนวยความสะดวก, ทำให้ง่ายขึ้น",
    example: "Modern infrastructures facilitate trade and commerce between EU nations."
  },
  {
    word: "Fertile",
    partOfSpeech: "adj.",
    definitionEn: "Producing or capable of producing abundant vegetation or crops.",
    definitionTh: "อุดมสมบูรณ์, มีดินดีเหมาะแก่การเพาะปลูก",
    example: "The northern plain of Europe has fertile soil, best for cultivation of wheat."
  },
  {
    word: "Generate",
    partOfSpeech: "v.",
    definitionEn: "Produce or create (especially energy, electricity, or results).",
    definitionTh: "สร้างขึ้น, ผลิต, ให้กำเนิดพลังงาน",
    example: "Hydroelectric dams generate clean power using fast-flowing European rivers."
  },
  {
    word: "Glacial",
    partOfSpeech: "adj.",
    definitionEn: "Relating to, adorned, or caused by glaciers or ice sheets.",
    definitionTh: "ซึ่งเป็นน้ำแข็ง, เกิดจากธารน้ำแข็ง",
    example: "Glacial lakes and fjords are dominant physical landscapes in Scandinavia."
  },
  {
    word: "Infrastructure",
    partOfSpeech: "n.",
    definitionEn: "The basic physical and organizational structures needed for the operation of a society.",
    definitionTh: "โครงสร้างพื้นฐาน (เช่น ถนน รถไฟ ไฟฟ้า ประปา)",
    example: "A well-developed transportation infrastructure boosts the European economy."
  },
  {
    word: "Manufacture",
    partOfSpeech: "v., n.",
    definitionEn: "Make something on a large scale using machinery.",
    definitionTh: "ผลิตด้วยเครื่องจักร, โรงงานอุตสาหกรรมการผลิต",
    example: "European industries manufacture tools used in vehicles, trains, and aircrafts."
  },
  {
    word: "Moderate",
    partOfSpeech: "adj.",
    definitionEn: "Average in amount, intensity, quality, or degree; temperate.",
    definitionTh: "ปานกลาง, พอสมควร, (ภูมิอากาศ) อบอุ่นปานกลาง",
    example: "Europe's climate varies from moderate in the west to extremely cold in the north."
  },
  {
    word: "Rye",
    partOfSpeech: "n.",
    definitionEn: "A cereal plant that tolerates poor soils and low temperatures.",
    definitionTh: "ข้าวไรย์, ธัญพืชชนิดหนึ่งที่ใช้ทำขนมปังและเลี้ยงสัตว์",
    example: "Rye is one of the main commercial crops cultivated in the central plains of Europe."
  },
  {
    word: "Sediment",
    partOfSpeech: "n.",
    definitionEn: "Matter that settles to the bottom of a liquid; dregs or silt.",
    definitionTh: "ตะกอน, สารตกตะกอน, ดินตะกอนแม่น้ำ",
    example: "The fertile northern plain was formed by layers of sediments deposited by river water."
  },
  {
    word: "Steppe",
    partOfSpeech: "n.",
    definitionEn: "A large area of flat unforested grassland in southeastern Europe or Siberia.",
    definitionTh: "ที่ราบทุ่งหญ้ากึ่งแห้งแล้ง, ที่ราบกว้างใหญ่ไม่มีต้นไม้ใหญ่",
    example: "The steppe climate zone in Spain and Russia features dry grassland shrubs."
  },
  {
    word: "Vegetation",
    partOfSpeech: "n.",
    definitionEn: "Plants considered collectively, especially those found in a particular area.",
    definitionTh: "พืชพรรณธรรมชาติ, พืชผัก",
    example: "The alpine vegetation changes from deciduous forest to dwarf trees as altitude increases."
  }
];

export const unit1TrueFalse: TrueFalseQuestion[] = [
  {
    id: 1,
    statement: "A topographic map is a type of map that shows only forest resources on the Earth's surface.",
    isTrue: false,
    explanation: "Incorrect. A topographic map shows detailed physical features of the earth, including elevations, landforms, and terrain relief using contour lines, not just forest resources."
  },
  {
    id: 2,
    statement: "Topographic maps, political maps, and natural resource maps can all be compiled together in a map atlas.",
    isTrue: true,
    explanation: "Correct. An atlas is a collection of various maps (e.g., political, physical, topographic, demographic) bound together in a book format for convenience and study."
  },
  {
    id: 3,
    statement: "A subway system route map is classified as a thematic map.",
    isTrue: true,
    explanation: "Correct. A subway map focuses on a specific theme (transportation network and stations), making it a type of thematic map."
  },
  {
    id: 4,
    statement: "Geographic coordinates (latitude and longitude) are elements located outside the outer neatline of a map.",
    isTrue: false,
    explanation: "Incorrect. Geographic coordinates are usually written along the neatlines (borders) or inside the map frame to refer to specific locations on Earth, not outside the outer neatline."
  },
  {
    id: 5,
    statement: "A map scale helps calculate the actual distance on the Earth's surface.",
    isTrue: true,
    explanation: "Correct. A map scale shows the ratio between the distance on the map and the actual distance on the ground (e.g., a scale of 1:50,000 means 1 cm on the map equals 50,000 cm or 500 meters on Earth)."
  },
  {
    id: 6,
    statement: "Geographic coordinates can help us locate any place on Earth accurately and precisely.",
    isTrue: true,
    explanation: "Correct. The geographic coordinate system, composed of latitude and longitude, provides a unique and precise reference point for any location on Earth."
  },
  {
    id: 7,
    statement: "Symbols shown on a map must always be actual photographs of the physical features they represent.",
    isTrue: false,
    explanation: "Incorrect. Map symbols can be points, lines, colors, geometric shapes, or simplified drawings to represent real features clearly; they do not need to be actual photographs."
  },
  {
    id: 8,
    statement: "A thematic map is designed to provide general, broad geographic information about a region without any specific details.",
    isTrue: false,
    explanation: "Incorrect. A thematic map is specifically designed to show a particular theme or topic connected with a specific geographic area (e.g., temperature, tourist attractions, population density)."
  },
  {
    id: 9,
    statement: "To study the extent of damage and environmental changes after a tsunami disaster, we should use aerial photographs or satellite imagery.",
    isTrue: true,
    explanation: "Correct. Aerial photographs and satellite imagery (remote sensing) capture high-altitude views of the ground, enabling effective comparison of changes before and after natural disasters."
  },
  {
    id: 10,
    statement: "A tourist map only provides information on attractions and services and does not feature any physical geographic information.",
    isTrue: false,
    explanation: "Incorrect. While a tourist map focuses on attractions, it still includes essential physical and geographic details such as major roads, rivers, coastlines, and mountains to help with navigation."
  }
];

export const unit1MultipleChoice: Question[] = [
  {
    id: 1,
    questionText: "In which of the following daily situations would using a map be most appropriate?",
    options: [
      "A) Travelling to buy fresh ingredients at a local market near your house",
      "B) Going to school in the morning as part of your normal routine",
      "C) Travelling to visit relatives in another province or an unfamiliar area",
      "D) Going to a nearby shopping mall on the weekend"
    ],
    correctAnswerIndex: 2,
    explanation: "Maps are most useful for studying routes, distances, and coordinates in distant, unfamiliar areas. Daily routines in familiar areas do not typically require a map."
  },
  {
    id: 2,
    questionText: "What features on the Earth's surface do topographic maps primarily represent?",
    options: [
      "A) Climate conditions and seasonal wind directions",
      "B) Physical features and elevation of the land (hills, plains, and slopes)",
      "C) Types and families of natural vegetation in tropical rainforests",
      "D) Local population statistics and density by province"
    ],
    correctAnswerIndex: 1,
    explanation: "Topographic maps are general-reference maps that display the shapes, elevations, and terrain relief of the Earth's surface, using contour lines and colored shading."
  },
  {
    id: 3,
    questionText: "Which statement best describes the process and technology of 'Remote Sensing'?",
    options: [
      "A) Sending an explorer to physically walk and collect data in a forest",
      "B) Gathering files and creating a database system on a computer hard drive",
      "C) Visiting specific archaeological sites to analyze physical artifacts",
      "D) Surveying and collecting data about the Earth from a distance using sensors on aircraft or satellites"
    ],
    correctAnswerIndex: 3,
    explanation: "Remote sensing is the process of detecting and monitoring the physical characteristics of an area by measuring its reflected and emitted radiation from a distance, typically from satellites or aircraft."
  },
  {
    id: 4,
    questionText: "What is the most prominent and important benefit of using Remote Sensing technology?",
    options: [
      "A) To survey, monitor, and manage natural resources over large geographic areas",
      "B) To track personal locations and navigation paths in real-time",
      "C) To monitor and prevent international terrorism activities along borders",
      "D) To send early tsunami warnings to individual households in real-time"
    ],
    correctAnswerIndex: 0,
    explanation: "The primary benefit of remote sensing is its ability to cover massive geographic areas quickly and repeatedly, making it ideal for monitoring forests, water resources, land use, and managing natural resources."
  },
  {
    id: 5,
    questionText: "Which statement provides the most complete and accurate definition of a 'Geographic Information System (GIS)'?",
    options: [
      "A) GIS is a computer screen display used only for presenting maps and geographic data",
      "B) GIS is a technology used solely to record and organize location files in document format",
      "C) GIS is a mapping software used to show tourist attractions and local shops in a city",
      "D) GIS is a computer-based system designed to capture, store, manipulate, analyze, manage, and present spatial or geographic data"
    ],
    correctAnswerIndex: 3,
    explanation: "A Geographic Information System (GIS) integrates computer hardware, software, spatial data, and people to capture, analyze, and visualize multi-layered spatial information to support decision-making."
  },
  {
    id: 6,
    questionText: "Which key characteristic should spatial data have to be effectively stored and used in a Geographic Information System (GIS)?",
    options: [
      "A) The data must be accurate, precise, and up-to-date",
      "B) The data should only include historical statistics of the past 50 years with no updates",
      "C) The data must represent only a single topic and exclude geographic coordinates",
      "D) The data must always be converted into photographs without vector structures"
    ],
    correctAnswerIndex: 0,
    explanation: "Since GIS is used for spatial planning, decision-making, and problem-solving, the input spatial data must be accurate, precisely georeferenced, and updated regularly."
  },
  {
    id: 7,
    questionText: "What are the core components of a Geographic Information System (GIS)?",
    options: [
      "A) Paper reference maps and digital flatbed computer scanners",
      "B) Satellites, field survey teams, and portable GPS receivers",
      "C) Fixed-wing aircraft, wide-angle cameras, and archive filing clerks",
      "D) Hardware, software, spatial data, people/analysts, and processing methods/procedures"
    ],
    correctAnswerIndex: 3,
    explanation: "The five core components of a GIS are: 1) Hardware, 2) Software, 3) Spatial and attribute Data, 4) People (trained specialists), and 5) Procedures/Methods (analytical techniques)."
  },
  {
    id: 8,
    questionText: "From the administrative benefits of GIS, which of the following is NOT a direct scope of this technology?",
    options: [
      "A) Modeling natural disaster alerts and tracking disease outbreaks",
      "B) Analyzing and summarizing complex geographic details of large-scale environments without any field validation or survey",
      "C) Creating map analyses of forest coverage loss and land degradation over time",
      "D) Planning urban zoning, traffic routes, and public transportation networks"
    ],
    correctAnswerIndex: 1,
    explanation: "While GIS is highly efficient for analyzing large areas, it still relies on accurate ground truth and field surveys to input precise data. Claiming it replaces all field surveys entirely is incorrect."
  },
  {
    id: 9,
    questionText: "If you are assigned to study the general physical geography of the European continent, which geographical tool is best to use as a first step?",
    options: [
      "A) A physical globe model to watch the rotational direction of the Earth",
      "B) Thematic maps showing the climate zones and physical features of Europe",
      "C) High-resolution satellite images zoomed in to individual neighborhood buildings",
      "D) Aerial photographs captured by drones flying over major capitals"
    ],
    correctAnswerIndex: 1,
    explanation: "To analyze continental-scale geographical relationships and patterns, thematic maps (like topographic, physical, or climate maps) are the most appropriate first-step tools because they present organized data over the entire continent."
  },
  {
    id: 10,
    questionText: "Which scenario is the most appropriate and direct application of the Global Positioning System (GPS)?",
    options: [
      "A) Navigating a tourist ferry boat across open sea routes without physical landmarks",
      "B) Tracking and monitoring the private conversations of students outside school",
      "C) Searching demographic population databases of people living in France",
      "D) Determining the precise coordinates of ancient Egyptian pyramids to study their construction blocks"
    ],
    correctAnswerIndex: 0,
    explanation: "The main purpose of GPS is to determine coordinates (latitude, longitude, altitude) anywhere on Earth. This makes it ideal for navigating ships, airplanes, and vehicles across open, featureless areas like the sea."
  }
];

export const unit2MultipleChoice: Question[] = [
  {
    id: 1,
    questionText: "What is the highest mountain peak in Europe, and which mountain range is it located in?",
    options: [
      "A) Mont Blanc - The Alps",
      "B) Mount Elbrus - The Caucasus Mountains",
      "C) Glittertind - The Scandinavian Mountains",
      "D) Drakensberg - The Drakensberg Range"
    ],
    correctAnswerIndex: 1,
    explanation: "Mount Elbrus, located in the Caucasus Mountains, rises to 5,642 meters above sea level, making it the highest peak in the European continent (Mont Blanc in the Alps is 4,810 meters)."
  },
  {
    id: 2,
    questionText: "Which natural process creates 'Fjords'—deep, narrow, and steep-sided coastal inlets—and which European country is most famous for them?",
    options: [
      "A) Coastal wave erosion and strong sea currents - Italy",
      "B) Underwater volcanic eruptions along tectonic plate boundaries - Iceland",
      "C) Glacial erosion during past ice ages - Norway",
      "D) Collapse of limestone caves and coastal land subsidence - Greece"
    ],
    correctAnswerIndex: 2,
    explanation: "Fjords are created by massive glaciers carving deep U-shaped valleys below sea level. When the glaciers melted, the sea flooded the steep-walled valleys. They are highly abundant along Norway's coastline."
  },
  {
    id: 3,
    questionText: "Which geographical region in Europe is known as a major agricultural hub with fertile soils, high population density, and deep sediment layers?",
    options: [
      "A) The Northwest Highlands (Old Rocky Area)",
      "B) The Great European Plain (Northern Plain)",
      "C) The Central Uplands (Central Highland)",
      "D) The Alpine Mountain System (New Rock Formation Area)"
    ],
    correctAnswerIndex: 1,
    explanation: "The Great European Plain (or Northern Plain) stretches from western France to eastern Russia. Its nutrient-rich soil deposited by rivers makes it Europe's primary agricultural breadbasket, supporting high population densities."
  },
  {
    id: 4,
    questionText: "Which of the following is a unique characteristic of Europe's climate zones compared to other inhabited continents?",
    options: [
      "A) Europe has extremely hot, humid climates similar to the Amazon rainforest",
      "B) Most of Europe lies within the Arctic Circle, allowing crops to grow year-round",
      "C) Europe is the only inhabited continent that does not have any desert zones",
      "D) Europe has identical, warm temperatures across all countries throughout the year"
    ],
    correctAnswerIndex: 2,
    explanation: "Located between 36° and 71° North latitude, bordered by oceans, and warmed by the North Atlantic Drift and westerly winds, Europe does not have any arid, true desert zones."
  },
  {
    id: 5,
    questionText: "Where is Europe's most economically important and productive marine fishing ground located?",
    options: [
      "A) The Strait of Gibraltar",
      "B) The Dogger Bank in the North Sea",
      "C) The Bay of Biscay",
      "D) The Caspian Sea"
    ],
    correctAnswerIndex: 1,
    explanation: "Dogger Bank in the North Sea is a shallow, sunlit area where the warm North Atlantic Drift meets cold Arctic currents, creating a rich supply of plankton that feeds massive fish populations, making it a primary fishing hub."
  },
  {
    id: 6,
    questionText: "Which Caucasian sub-ethnic group in Europe is characterized by tall stature, long heads, blond hair, and blue eyes, primarily residing in Northern Europe?",
    options: [
      "A) The Mediterranean Group",
      "B) The Alpine Group",
      "C) The Nordic Group",
      "D) The Slavic Group"
    ],
    correctAnswerIndex: 2,
    explanation: "The Nordic group is found primarily in northern and northwestern Europe (Scandinavia, Netherlands, UK). They are generally characterized by tall stature, light-colored eyes, blond hair, and fair skin."
  },
  {
    id: 7,
    questionText: "What is the longest river in Europe, which flows through Russia and empties into the Caspian Sea?",
    options: [
      "A) The Volga River",
      "B) The Danube River",
      "C) The Rhine River",
      "D) The Seine River"
    ],
    correctAnswerIndex: 0,
    explanation: "The Volga River is the longest river in Europe, flowing entirely through western Russia. It empties into the Caspian Sea and serves as a crucial waterway for heavy industrial shipping and trade."
  },
  {
    id: 8,
    questionText: "Which statement accurately describes the geographical distribution of major Christian denominations in Europe?",
    options: [
      "A) Roman Catholicism is dense in Southern and Southwestern Europe (e.g., Italy, Spain, Portugal, France)",
      "B) Protestantism has no followers in Norway or Finland because people there are mostly Buddhist",
      "C) Eastern Orthodoxy is the dominant national religion in the UK and Sweden",
      "D) Roman Catholicism and Eastern Orthodoxy share the exact same Pope as their supreme leader"
    ],
    correctAnswerIndex: 0,
    explanation: "Roman Catholicism is the dominant denomination in Southern and Southwestern Europe (Italy, Spain, Portugal, France). Protestantism dominates Northern Europe, while Eastern Orthodoxy is most common in Eastern and Southeastern Europe."
  },
  {
    id: 9,
    questionText: "The Mediterranean climate, characterized by 'hot, dry summers and mild, wet winters,' is directly influenced by which major wind pattern?",
    options: [
      "A) Tropical typhoons and cyclones",
      "B) Northeast trade winds",
      "C) The Westerlies (West Winds) bringing oceanic moisture and rain in winter",
      "D) Polar easterlies carrying freezing Arctic air down to the coast"
    ],
    correctAnswerIndex: 2,
    explanation: "In winter, the Westerlies shift south, bringing moist oceanic air masses and rainfall to the Mediterranean basin. In summer, the subtropical high-pressure system blocks rain clouds, causing hot and dry conditions."
  },
  {
    id: 10,
    questionText: "Venice, Italy is famous for being built on over 120 small islands connected by canals and bridges. How does this physical environment directly affect its economy?",
    options: [
      "A) It leads to heavy chemical manufacturing because industrial transport is fast on boats",
      "B) It generates immense revenue from cultural tourism, with residents and visitors relying on watercraft like gondolas and water buses",
      "C) It serves as Europe's major coal-exporting port, shipping coal by trans-island rail to Germany",
      "D) It created the highest population density on Earth, forcing Italy to relocate its citizens to Africa"
    ],
    correctAnswerIndex: 1,
    explanation: "Venice's unique setting of 120 islands and 177 canals attracts millions of global tourists to admire its historic architecture, gondolas, and water-based transport, making service and tourism the cornerstone of its economy."
  }
];

export const unit2FlagQuiz: Question[] = [
  {
    id: 1,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) United Kingdom",
      "B) Iceland",
      "C) Norway",
      "D) France"
    ],
    correctAnswerIndex: 0,
    flagCode: "gb",
    explanation: "The Union Jack is the national flag of the United Kingdom, combining the crosses of St. George (England), St. Andrew (Scotland), and St. Patrick (Ireland)."
  },
  {
    id: 2,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Italy",
      "B) France",
      "C) Netherlands",
      "D) Belgium"
    ],
    correctAnswerIndex: 1,
    flagCode: "fr",
    explanation: "The French Tricolore consists of three vertical bands of blue, white, and red, symbolizing liberty, equality, and fraternity."
  },
  {
    id: 3,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Belgium",
      "B) Austria",
      "C) Germany",
      "D) Poland"
    ],
    correctAnswerIndex: 2,
    flagCode: "de",
    explanation: "Germany's flag has three horizontal stripes of black, red, and gold, which became associated with republican democracy in the 19th century."
  },
  {
    id: 4,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Hungary",
      "B) Ireland",
      "C) France",
      "D) Italy"
    ],
    correctAnswerIndex: 3,
    flagCode: "it",
    explanation: "The Italian Tricolore features vertical bands of green, white, and red. Green represents the plains and hills, white represents the snow-capped Alps, and red represents the blood spilt in the Wars of Italian Independence."
  },
  {
    id: 5,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Spain",
      "B) Portugal",
      "C) Germany",
      "D) Belgium"
    ],
    correctAnswerIndex: 0,
    flagCode: "es",
    explanation: "The Spanish flag (La Rojigualda) features two red horizontal bands surrounding a yellow band which is twice the width of each red band, along with the national coat of arms."
  },
  {
    id: 6,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Luxembourg",
      "B) Netherlands",
      "C) France",
      "D) Russia"
    ],
    correctAnswerIndex: 1,
    flagCode: "nl",
    explanation: "The flag of the Netherlands has horizontal bands of red, white, and blue. It is one of the oldest tri-color flags still in use."
  },
  {
    id: 7,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Germany",
      "B) Netherlands",
      "C) Romania",
      "D) Belgium"
    ],
    correctAnswerIndex: 3,
    flagCode: "be",
    explanation: "Belgium's flag consists of vertical bands of black, yellow, and red, based on the arms of the Duchy of Brabant."
  },
  {
    id: 8,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Switzerland",
      "B) Austria",
      "C) Denmark",
      "D) Malta"
    ],
    correctAnswerIndex: 0,
    flagCode: "ch",
    explanation: "The flag of Switzerland is a red square with a bold white Greek cross in the center. It is one of only two square sovereign state flags in the world."
  },
  {
    id: 9,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Finland",
      "B) Sweden",
      "C) Iceland",
      "D) Denmark"
    ],
    correctAnswerIndex: 1,
    flagCode: "se",
    explanation: "Sweden's flag is blue with a yellow Nordic cross. The colors and design are believed to have been inspired by the coat of arms of Sweden and the Danish Dannebrog."
  },
  {
    id: 10,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Iceland",
      "B) Denmark",
      "C) Norway",
      "D) Finland"
    ],
    correctAnswerIndex: 2,
    flagCode: "no",
    explanation: "Norway's flag is red with an indigo blue Nordic cross outlined in white, representing the country's historical ties with Denmark (red/white) and Sweden (blue)."
  },
  {
    id: 11,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Greece",
      "B) Finland",
      "C) Cyprus",
      "D) Turkey"
    ],
    correctAnswerIndex: 0,
    flagCode: "gr",
    explanation: "The Greek flag has nine horizontal blue and white stripes (representing the nine syllables of the Greek phrase for 'Freedom or Death') with a white cross in the blue canton."
  },
  {
    id: 12,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Spain",
      "B) Portugal",
      "C) Italy",
      "D) Greece"
    ],
    correctAnswerIndex: 1,
    flagCode: "pt",
    explanation: "Portugal's flag is vertically split into green (hope) and red (the blood of those who died defending the nation), along with the astronomical armillary sphere and the traditional Portuguese shield."
  },
  {
    id: 13,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Italy",
      "B) Côte d'Ivoire",
      "C) India",
      "D) Ireland"
    ],
    correctAnswerIndex: 3,
    flagCode: "ie",
    explanation: "The Irish tricolor consists of green (representing Roman Catholics), orange (representing Protestants), and white in the middle representing the hope of peace and unity between them."
  },
  {
    id: 14,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Denmark",
      "B) Switzerland",
      "C) Norway",
      "D) Sweden"
    ],
    correctAnswerIndex: 0,
    flagCode: "dk",
    explanation: "Known as the Dannebrog (Danish cloth), Denmark's flag is red with a white Nordic cross. It is officially the oldest continuously used national flag in the world."
  },
  {
    id: 15,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Greece",
      "B) Sweden",
      "C) Finland",
      "D) Iceland"
    ],
    correctAnswerIndex: 2,
    flagCode: "fi",
    explanation: "The flag of Finland (Siniristilippu or Blue Cross Flag) features a blue Nordic cross on a white background, symbolizing the country's blue lakes and white snow."
  },
  {
    id: 16,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Poland",
      "B) Monaco",
      "C) Indonesia",
      "D) Austria"
    ],
    correctAnswerIndex: 0,
    flagCode: "pl",
    explanation: "Poland's flag features two horizontal bands of white on top and red on the bottom, which have been the official national colors since 1831."
  },
  {
    id: 17,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Latvia",
      "B) Austria",
      "C) Peru",
      "D) Poland"
    ],
    correctAnswerIndex: 1,
    flagCode: "at",
    explanation: "The Austrian flag has three horizontal bands of red, white, and red. Legend says it was designed by Duke Leopold V after his white tunic was soaked in blood except under his belt during the Siege of Acre."
  },
  {
    id: 18,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Norway",
      "B) Finland",
      "C) Sweden",
      "D) Iceland"
    ],
    correctAnswerIndex: 3,
    flagCode: "is",
    explanation: "Iceland's flag is blue with a red Nordic cross outlined in white. Blue represents the mountains, white represents ice and snow, and red represents volcanic fire."
  },
  {
    id: 19,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Ukraine",
      "B) Sweden",
      "C) Romania",
      "D) Poland"
    ],
    correctAnswerIndex: 0,
    flagCode: "ua",
    explanation: "The Ukrainian flag consists of two equal horizontal bands of blue on top (representing the blue sky) and yellow on the bottom (representing the golden wheat fields)."
  },
  {
    id: 20,
    questionText: "Identify the European country represented by this flag.",
    options: [
      "A) Slovakia",
      "B) Czechia",
      "C) Philippines",
      "D) Croatia"
    ],
    correctAnswerIndex: 1,
    flagCode: "cz",
    explanation: "The flag of Czechia features a blue triangle at the hoist representing Moravia, over white and red horizontal bands representing Bohemia."
  }
];

export const unit3CapitalsQuiz: Question[] = [
  {
    id: 1,
    questionText: "What is the capital city of the United Kingdom (ประเทศสหราชอาณาจักร)?",
    options: [
      "A) Dublin",
      "B) Edinburgh",
      "C) London",
      "D) Cardiff"
    ],
    correctAnswerIndex: 2,
    flagCode: "gb",
    explanation: "London is the capital and largest city of the United Kingdom and England. It is a major global city and financial hub located on the River Thames."
  },
  {
    id: 2,
    questionText: "What is the capital city of France (ประเทศฝรั่งเศส)?",
    options: [
      "A) Paris",
      "B) Lyon",
      "C) Brussels",
      "D) Marseille"
    ],
    correctAnswerIndex: 0,
    flagCode: "fr",
    explanation: "Paris is the capital and most populous city of France, famous globally for its culture, gastronomy, fashion, and landmarks like the Eiffel Tower."
  },
  {
    id: 3,
    questionText: "What is the capital city of Germany (ประเทศเยอรมนี)?",
    options: [
      "A) Munich",
      "B) Berlin",
      "C) Frankfurt",
      "D) Vienna"
    ],
    correctAnswerIndex: 1,
    flagCode: "de",
    explanation: "Berlin is the capital and largest city of Germany by both area and population. It is famous for its history, architecture, and diverse creative arts."
  },
  {
    id: 4,
    questionText: "What is the capital city of Italy (ประเทศอิตาลี)?",
    options: [
      "A) Milan",
      "B) Venice",
      "C) Naples",
      "D) Rome"
    ],
    correctAnswerIndex: 3,
    flagCode: "it",
    explanation: "Rome (Roma) is the capital city of Italy. It has a rich history of over 2,500 years and was the founding center of the Roman Empire and includes the independent country of Vatican City."
  },
  {
    id: 5,
    questionText: "What is the capital city of Spain (ประเทศสเปน)?",
    options: [
      "A) Madrid",
      "B) Barcelona",
      "C) Lisbon",
      "D) Seville"
    ],
    correctAnswerIndex: 0,
    flagCode: "es",
    explanation: "Madrid is the capital and largest city of Spain. It lies on the River Manzanares in the central part of the Iberian Peninsula."
  },
  {
    id: 6,
    questionText: "What is the capital city of the Netherlands (ประเทศเนเธอร์แลนด์)?",
    options: [
      "A) Rotterdam",
      "B) The Hague",
      "C) Amsterdam",
      "D) Brussels"
    ],
    correctAnswerIndex: 2,
    flagCode: "nl",
    explanation: "Amsterdam is the capital of the Netherlands, well-known for its historic canals, narrow houses, and artistic heritage. Note that The Hague is the seat of government."
  },
  {
    id: 7,
    questionText: "What is the capital city of Belgium (ประเทศเบลเยียม)?",
    options: [
      "A) Luxembourg",
      "B) Amsterdam",
      "C) Paris",
      "D) Brussels"
    ],
    correctAnswerIndex: 3,
    flagCode: "be",
    explanation: "Brussels is the capital of Belgium and serves as the de facto administrative capital of the European Union (EU) and NATO."
  },
  {
    id: 8,
    questionText: "What is the capital city of Switzerland (ประเทศสวิตเซอร์แลนด์)?",
    options: [
      "A) Zurich",
      "B) Geneva",
      "C) Bern",
      "D) Basel"
    ],
    correctAnswerIndex: 2,
    flagCode: "ch",
    explanation: "Bern is the federal city and de facto capital of Switzerland. It is famous for its medieval town center which is a UNESCO World Heritage Site."
  },
  {
    id: 9,
    questionText: "What is the capital city of Sweden (ประเทศสวีเดน)?",
    options: [
      "A) Oslo",
      "B) Stockholm",
      "C) Helsinki",
      "D) Copenhagen"
    ],
    correctAnswerIndex: 1,
    flagCode: "se",
    explanation: "Stockholm is the capital and most populous urban area of Sweden, built on 14 islands where Lake Mälaren flows into the Baltic Sea."
  },
  {
    id: 10,
    questionText: "What is the capital city of Norway (ประเทศนอร์เวย์)?",
    options: [
      "A) Oslo",
      "B) Stockholm",
      "C) Bergen",
      "D) Copenhagen"
    ],
    correctAnswerIndex: 0,
    flagCode: "no",
    explanation: "Oslo is the capital and most populous city of Norway, situated at the head of the Oslofjord. It is a hub of Norwegian maritime trade and industry."
  },
  {
    id: 11,
    questionText: "What is the capital city of Finland (ประเทศฟินแลนด์)?",
    options: [
      "A) Helsinki",
      "B) Stockholm",
      "C) Turku",
      "D) Tallinn"
    ],
    correctAnswerIndex: 0,
    flagCode: "fi",
    explanation: "Helsinki is the capital and largest city of Finland, located on the shore of the Gulf of Finland in the southern part of the country."
  },
  {
    id: 12,
    questionText: "What is the capital city of Denmark (ประเทศเดนมาร์ก)?",
    options: [
      "A) Stockholm",
      "B) Copenhagen",
      "C) Oslo",
      "D) Aarhus"
    ],
    correctAnswerIndex: 1,
    flagCode: "dk",
    explanation: "Copenhagen (København) is the capital of Denmark, located on the eastern coast of the island of Zealand, connected to Sweden by the Öresund Bridge."
  },
  {
    id: 13,
    questionText: "What is the capital city of Austria (ประเทศออสเตรีย)?",
    options: [
      "A) Munich",
      "B) Budapest",
      "C) Salzburg",
      "D) Vienna"
    ],
    correctAnswerIndex: 3,
    flagCode: "at",
    explanation: "Vienna (Wien) is the capital and largest city of Austria, celebrated for its rich musical legacy (Mozart, Beethoven) and imperial palaces."
  },
  {
    id: 14,
    questionText: "What is the capital city of Greece (ประเทศกรีซ)?",
    options: [
      "A) Thessaloniki",
      "B) Athens",
      "C) Nicosia",
      "D) Rome"
    ],
    correctAnswerIndex: 1,
    flagCode: "gr",
    explanation: "Athens is the capital of Greece and one of the world's oldest cities. It is recognized as the cradle of Western civilization and the birthplace of democracy."
  },
  {
    id: 15,
    questionText: "What is the capital city of Portugal (ประเทศโปรตุเกส)?",
    options: [
      "A) Madrid",
      "B) Lisbon",
      "C) Porto",
      "D) Barcelona"
    ],
    correctAnswerIndex: 1,
    flagCode: "pt",
    explanation: "Lisbon (Lisboa) is the capital and largest city of Portugal. It is one of the oldest cities in Western Europe, located on the Atlantic coast and the Tagus River."
  },
  {
    id: 16,
    questionText: "What is the capital city of Ireland (ประเทศไอร์แลนด์)?",
    options: [
      "A) Belfast",
      "B) Dublin",
      "C) Cork",
      "D) London"
    ],
    correctAnswerIndex: 1,
    flagCode: "ie",
    explanation: "Dublin is the capital and largest city of Ireland, situated on a bay at the mouth of the River Liffey, famous for its history, literature, and pubs."
  },
  {
    id: 17,
    questionText: "What is the capital city of Poland (ประเทศโปแลนด์)?",
    options: [
      "A) Warsaw",
      "B) Krakow",
      "C) Prague",
      "D) Budapest"
    ],
    correctAnswerIndex: 0,
    flagCode: "pl",
    explanation: "Warsaw (Warszawa) is the capital and largest city of Poland. Located on the Vistula River, it is known for its resilient history and carefully reconstructed Old Town."
  },
  {
    id: 18,
    questionText: "What is the capital city of Ukraine (ประเทศยูเครน)?",
    options: [
      "A) Lviv",
      "B) Moscow",
      "C) Kyiv",
      "D) Minsk"
    ],
    correctAnswerIndex: 2,
    flagCode: "ua",
    explanation: "Kyiv (Kiev) is the capital and most populous city of Ukraine. It is a major industrial, scientific, educational, and cultural center in Eastern Europe."
  },
  {
    id: 19,
    questionText: "What is the capital city of Hungary (ประเทศฮังการี)?",
    options: [
      "A) Budapest",
      "B) Bucharest",
      "C) Vienna",
      "D) Bratislava"
    ],
    correctAnswerIndex: 0,
    flagCode: "hu",
    explanation: "Budapest is the capital of Hungary, bisected by the Danube River. It is famous for its thermal baths, parliament building, and rich cultural history."
  },
  {
    id: 20,
    questionText: "What is the capital city of Czechia (ประเทศเช็กเกีย)?",
    options: [
      "A) Bratislava",
      "B) Prague",
      "C) Warsaw",
      "D) Vienna"
    ],
    correctAnswerIndex: 1,
    flagCode: "cz",
    explanation: "Prague (Praha) is the capital and largest city of Czechia. Known as the 'City of a Hundred Spires,' it is famous for its beautiful Old Town Square and Charles Bridge."
  }
];

