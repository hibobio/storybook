import { Icons } from './icons/icons.enum';
import {
  capitalize,
  dedupeArray,
  padWith0,
  randomFromArray,
  randomNumber,
  simpleUID,
} from './services/utils/functional-utils';

export const mockCitiesList = [
  'Tokyo-Yokohama',
  'Delhi',
  'Shanghai',
  'San Paulo',
  'Mumbai',
  'Mexico City',
  'Beijing',
  'Osaka-Kobe-Kyoto',
  'Cairo',
  'New York',
  'Dhaka',
  'Karachi',
  'Buenos Aires',
  'Kolkata',
  'Istanbul',
  'Chongquin',
  'Lagos',
  'Manila',
  'Rio de Janeiro',
  'Guangzhou-Foshan',
  'Los Angelles',
  'Moscow',
  'Kinshasa',
  'Tianjin',
  'Paris',
  'Shenzhen',
  'Jakarta',
  'London',
  'Bangalore',
  'Lima',
  'Chennai',
  'Seoul-Incheon',
  'Bogota',
  'Nagoya',
  'Johannesburg',
  'Bangkok',
  'Hyderabad',
  'Chicago',
  'Lahore',
  'Tehran',
  'Wuhan',
  'Chengdu',
  'Dongguan',
  'Nanjing',
  'Ahmadabad',
  'Hong Kong',
  'Ho Chi Minh City',
  'Foshan',
  'Kuala Lumpu',
  'Baghdad',
  'Santiago',
  'Hangzhou',
  'Riyadh',
  'Shenyang',
  'Madrid',
  'Xian',
  'Toronto',
  'Miami',
  'Pune',
  'Belo Horizonte',
  'Dallas-Fort Worth',
  'Surat',
  'Houston',
  'Singapore',
  'Philadelphia',
  'Kitakyushu',
  'Luanda',
  'Suzhou',
  'Harbin',
  'Barcelona',
  'Atlanta',
  'Khartoum',
  'Dar es Salaam',
  'St. Petersburg',
  'Washington',
  'Abidjan',
  'Guadalajara',
  'Yangon',
  'Alexandria',
  'Ankara',
  'Kabul',
  'Quingdao',
  'Chittagong',
  'Monterrey',
  'Sydney',
  'Dalian',
  'Xiamen',
  'Zhengzhou',
  'Boston',
  'Melbourme',
  'Brazilia',
  'Jeddah',
  'Phoenix',
  'Montréal',
  'Shantou',
  'Nairobi',
  'Medellin',
  'Fortaleza',
  'Kunming',
];

export const mockCountriesList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Angola',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Bermuda',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Brazil',
  'Bulgaria',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands',
  'Central African Republic',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guatemala',
  'Guinea',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Korea',
  'Kuwait',
  'Kyrgyzstan',
  'Latvia',
  'Lebanon',
  'Liberia',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia',
  'Madagascar',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Nigeria',
  'Norway',
  'Pakistan',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Romania',
  'Russian Federation',
  'Samoa',
  'San Marino',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Sweden',
  'Switzerland',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Viet Nam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

export const funnyNames = [
  'Adam Baum',
  'Al Bino',
  'Ali Gaither',
  'Andy Friese',
  'Anna Conda',
  'Anna Fender',
  'Annie Matter',
  'Barry Cade',
  'Bea Minor',
  'Dee Major',
  'Bill Ding',
  'Bonnie Ann Clyde',
  'Bonnie Beaver',
  'Bud Light',
  'Bud Wieser',
  'Candy Barr',
  'Cara Van',
  'Carrie Oakey',
  'Casey Macy',
  'Chip Munk',
  'Chris Cross',
  'Chuck Waggon',
  'Corey Ander',
  'Dan Druff',
  'Daryl Rhea',
  'Dick Bender',
  'Dick Long',
  'Dick Tator',
  'Dick Wood',
  'Dr. Baldock',
  'Dr. DeKay',
  'Dr. Shelly Fingerhood',
  'Dr. Looney',
  'Drew Peacock',
  'Dusty Carr',
  'Earl E. Bird',
  'Earl Lee Riser',
  'Easton West',
  'Weston East',
  'Fonda Dicks',
  'Ford Parker',
  'Forrest Green',
  'Dr. Frank Bonebreak',
  'Frank Enstein',
  'Gaye Barr',
  'Harry Baals',
  'Harry Cox',
  'Honey Bee',
  'I.M. Boring',
  'Jack Hoff',
  'Jack Knoff',
  'Jack Pott',
  'Kenny Penny',
  'Kent C. Strait',
  'Kerry Oki',
  'Liv Long',
  'Lucy Fer',
  'Luke Warm',
  'Lynn O. Liam',
  'Marsha Mellow',
  'Max Power',
  'May Day',
  'Moe B. Dick',
  'Pepe Roni',
  'Pierce Cox',
  'Polly Ester',
  'Price Wright',
  'R. M. Pitt',
  'Randy Lover',
  'Ray Gunn',
  'Tad Moore',
  'Tamara Knight',
  'Ted E. Baer',
  'Will Power',
  'Willie Leak',
  'Willie Stroker',
  'Woody Forrest',
];

export const funnyName = (num?) => randomFromArray(funnyNames, num);

export const mockNamesList = [
  'Nada Gish',
  'Mathilde Vogler',
  'Casie Wadkins',
  'Kisha Dick',
  'Claudie Redick',
  'Dorthey Tollison',
  'Manual Dedios',
  'Manure Inspector',
  'Vomit Collector',
  'Melania Burruel',
  'Nida Audia',
  'Shawanna Petree',
  'Florance Wolfson',
  'America Danz',
  'Mendy Mcsherry',
  'Valencia Dantin',
  'Ted Medrano',
  'Abby Hance',
  'Nakia Joplin',
  'Nilda Seneca',
  'Amal Ralphs',
  'Allan Nicoll',
  'Jasper Grass',
  'Sharleen Callanan',
  'Leatha Chiodo',
  'Micki Skinner',
  'Kristine Seyfried',
  'Isaura Stork',
  'Dusty Avina',
  'Shira Chilson',
  'Lane Kerbs',
  'Viola Netzer',
  'Elma Strawn',
  'Allene Crupi',
  'Eloisa Ostler',
  'Sandee Snellgrove',
  'Gordon Kukowski',
  'Darcie Pickle',
  'Elicia Skiba',
  'Ngan Winsett',
  'Reyna Marvel',
  'Tyson Avey',
  'Craig Sher',
  'Pa Locicero',
  'Forrest Deshazo',
  'Krystina Adrian',
  'Violeta Jacobo',
  'Arlena Rempel',
  'Herlinda Prochnow',
  'Shavonda Chumley',
  'Lacresha Hyre',
  'Richard Sosnowski',
  'Arturo Boldt',
  'Tammy Bolin',
  'Mohamed Grist',
  'Thad Vos',
  'Delphine Cammack',
  'Laine Rolls',
  'Sybil Urso',
  'Anastacia Felipe',
  'Laree Hammock',
  'Stefania Dollinger',
];

export const mockFirstNamesList = mockNamesList.map(
  (name) => name.split(' ')[0]
);
export const mockSecondNamesList = mockNamesList.map(
  (name) => name.split(' ')[1]
);

export const badJobsList = [
  'Assembly Worker',
  'Bank Teller',
  'Coal Miner',
  'Farm Worker',
  'Fast Food Cook',
  'Fishing Worker',
  'Logger',
  'Medical Transcriptionist',
  'Newspaper Reporter',
  'Postal Service Worker',
  'Retail Sales Associate',
  'Taxi Driver',
  'Telemarketer',
  'Cleaner',
  'Lorry Driver',
  'Soldier',
  'Customer Service Advisor',
  'Social Worker',
  'Miner',
  'Slaughter House Worker',
  'Roofer',
  'Promotional Mascot',
  'Welder',
  'Water transportation worker',
  'Traffic Warden',
  'Animal Food Taster',
  'Snake Milker',
  'Professional Mourner',
  'Drying Paint Watcher',
  'Rat catcher',
  'Whipping boy',
  'Food server',
  'Port-a-loo Toilet Cleaner',
  'Brickmason',
  'Road Kill Remover',
  'Animal Masturbator',
  'Crime Scene Cleaner',
  'Sewer Cleaner',
  'Truck driver',
  'Dockworker',
  'Odour Tester',
  'Automobile mechanic',
  'Broadcaster',
  'Bus driver',
  'Construction Worker',
  'Paint Dry Watcher',
  'Guard at Buckingham Palace',
  'Sewer Swimmer',
  'Head Lice Remover',
  'Pest Controller',
  'Grave Digger',
  'Festival Litter Picker',
  'Children’s Holiday Mascot',
  'Corrections officer',
  'Disc jockey',
  'Firefighter',
  'Clinical Waste Disposal Worker',
  'Hazmat Diver',
];

export const mockJobsList = [
  'A/B tester',
  'Application analyst',
  'Business analyst',
  'Computer operator',
  'Computer repair technician',
  'Computer scientist',
  'Computer analyst',
  'Data entry clerk',
  'Database administrator',
  'Data analyst',
  'Data designer',
  'Data scientist',
  'Hardware engineer',
  'Information systems technician',
  'IT assistant',
  'Network analyst',
  'Network administrator',
  'Programmer',
  'Product manager',
  'Project manager',
  'Rapid prototyper',
  'Scrum master',
  'Security engineer',
  'Software analyst',
  'Software architect',
  'Software design',
  'Software engineer',
  'Software project manager',
  'Software quality analyst',
  'Software test engineer',
  'Solution architect',
  'Support technician',
  'System administrator',
  'Systems analyst',
  'Test engineer',
  'User experience designer',
  'User interaction designer',
  'User researcher',
  'Visual designer',
  'Web developer',
  'Website administrator',
];

export const mockDepartmentsList = [
  'Accounts and Finance',
  'Admin department',
  'Administration',
  'Business Development',
  'Buying',
  'Customer Service',
  'Engineering',
  'Export',
  'Finance',
  'Human Resources',
  'IT services',
  'Infrastructures',
  'Insurance',
  'Inventory',
  'Learning and development',
  'Licenses',
  'Logistics',
  'Management',
  'Market Development',
  'Marketing',
  'Operational',
  'Organizational',
  'PR',
  'Product development',
  'Production',
  'Purchasing',
  'Quality Asurance',
  'Research & Development',
  'Sales',
  'Security',
  'Security',
  'Transport',
  'Services',
  'Staff',
  'Strategy',
  'Supply Chain',
];

export const mockHobbiesList = [
  'Aircraft Spotting',
  'Airbrushing',
  'Airsofting',
  'Acting',
  'Aeromodeling',
  'Amateur Astronomy',
  'Amateur Radio',
  'Animals/pets/dogs',
  'Archery',
  'Arts',
  'Aquarium',
  'Astrology',
  'Astronomy',
  'Backgammon',
  'Badminton',
  'Baseball',
  'Base Jumping',
  'Basketball',
  'Beach/Sun tanning',
  'Beachcombing',
  'Beadwork',
  'Beatboxing',
  'Becoming A Child Advocate',
  'Bell Ringing',
  'Belly Dancing',
  'Bicycling',
  'Bicycle Polo',
  'Bird watching',
  'Birding',
  'BMX',
  'Blacksmithing',
  'Blogging',
  'BoardGames',
  'Boating',
  'Body Building',
  'Bonsai Tree',
  'Bookbinding',
  'Boomerangs',
  'Bowling',
  'Brewing Beer',
  'Bridge Building',
  'Bringing Food To The Disabled',
  'Building A House For Habitat For Humanity',
  'Building Dollhouses',
  'Butterfly Watching',
  'Button Collecting',
  'Cake Decorating',
  'Calligraphy',
  'Camping',
  'Candle Making',
  'Canoeing',
  'Cartooning',
  'Car Racing',
  'Casino Gambling',
  'Cave Diving',
  'Ceramics',
  'Cheerleading',
  'Chess',
  'Church/church activities',
  'Cigar Smoking',
  'Cloud Watching',
  'Coin Collecting',
  'Collecting',
  'Collecting Antiques',
  'Collecting Artwork',
  'Collecting Hats',
  'Collecting Music Albums',
  'Collecting RPM Records',
  'Collecting Sports Cards (Baseball, Football, Basketball, Hockey)',
  'Collecting Swords',
  'Coloring',
  'Compose Music',
  'Computer activities',
  'Conworlding',
  'Cooking',
  'Cosplay',
  'Crafts',
  'Crafts (unspecified)',
  'Crochet',
  'Crocheting',
  'Cross-Stitch',
  'Crossword Puzzles',
  'Dancing',
  'Darts',
  'Diecast Collectibles',
  'Digital Photography',
  'Dodgeball',
  'Dolls',
  'Dominoes',
  'Drawing',
  'Dumpster Diving',
  'Eating out',
  'Educational Courses',
  'Electronics',
  'Embroidery',
  'Entertaining',
  'Exercise (aerobics, weights)',
  'Falconry',
  'Fast cars',
  'Felting',
  'Fencing',
  'Fire Poi',
  'Fishing',
  'Floorball',
  'Floral Arrangements',
  'Fly Tying',
  'Football',
  'Four Wheeling',
  'Freshwater Aquariums',
  'Frisbee Golf – Frolf',
  'Games',
  'Gardening',
  'Garage Saleing',
  'Genealogy',
  'Geocaching',
  'Ghost Hunting',
  'Glowsticking',
  'Gnoming',
  'Going to movies',
  'Golf',
  'Go Kart Racing',
  'Grip Strength',
  'Guitar',
  'Gunsmithing',
  'Gun Collecting',
  'Gymnastics',
  'Gyotaku',
  'Handwriting Analysis',
  'Hang gliding',
  'Herping',
  'Hiking',
  'Home Brewing',
  'Home Repair',
  'Home Theater',
  'Horse riding',
  'Hot air ballooning',
  'Hula Hooping',
  'Hunting',
  'Iceskating',
  'Illusion',
  'Impersonations',
  'Internet',
  'Inventing',
  'Jet Engines',
  'Jewelry Making',
  'Jigsaw Puzzles',
  'Juggling',
  'Keep A Journal',
  'Jump Roping',
  'Kayaking',
  'Kitchen Chemistry',
  'Kites',
  'Kite Boarding',
  'Knitting',
  'Knotting',
  'Lasers',
  'Lawn Darts',
  'Learn to Play Poker',
  'Learning A Foreign Language',
  'Learning An Instrument',
  'Learning To Pilot A Plane',
  'Leathercrafting',
  'Legos',
  'Letterboxing',
  'Listening to music',
  'Locksport',
  'Lacrosse',
  'Macramé',
  'Magic',
  'Making Model Cars',
  'Marksmanship',
  'Martial Arts',
  'Matchstick Modeling',
  'Meditation',
  'Microscopy',
  'Metal Detecting',
  'Model Railroading',
  'Model Rockets',
  'Modeling Ships',
  'Models',
  'Motorcycles',
  'Mountain Biking',
  'Mountain Climbing',
  'Musical Instruments',
  'Nail Art',
  'Needlepoint',
  'Owning An Antique Car',
  'Origami',
  'Painting',
  'Paintball',
  'Papermaking',
  'Papermache',
  'Parachuting',
  'Paragliding or Power Paragliding',
  'Parkour',
  'People Watching',
  'Photography',
  'Piano',
  'Pinochle',
  'Pipe Smoking',
  'Planking',
  'Playing music',
  'Playing team sports',
  'Pole Dancing',
  'Pottery',
  'Powerboking',
  'Protesting',
  'Puppetry',
  'Pyrotechnics',
  'Quilting',
  'Racing Pigeons',
  'Rafting',
  'Railfans',
  'Rapping',
  'R/C Boats',
  'R/C Cars',
  'R/C Helicopters',
  'R/C Planes',
  'Reading',
  'Reading To The Elderly',
  'Relaxing',
  'Renaissance Faire',
  'Renting movies',
  'Rescuing Abused Or Abandoned Animals',
  'Robotics',
  'Rock Balancing',
  'Rock Collecting',
  'Rockets',
  'Rocking AIDS Babies',
  'Roleplaying',
  'Running',
  'Saltwater Aquariums',
  'Sand Castles',
  'Scrapbooking',
  'Scuba Diving',
  'Self Defense',
  'Sewing',
  'Shark Fishing',
  'Skeet Shooting',
  'Skiing',
  'Shopping',
  'Singing In Choir',
  'Skateboarding',
  'Sketching',
  'Sky Diving',
  'Slack Lining',
  'Sleeping',
  'Slingshots',
  'Slot Car Racing',
  'Snorkeling',
  'Snowboarding',
  'Soap Making',
  'Soccer',
  'Socializing with friends/neighbors',
  'Speed Cubing (rubix cube)',
  'Spelunkering',
  'Spending time with family/kids',
  'Stamp Collecting',
  'Storm Chasing',
  'Storytelling',
  'String Figures',
  'Surfing',
  'Surf Fishing',
  'Survival',
  'Swimming',
  'Tatting',
  'Taxidermy',
  'Tea Tasting',
  'Tennis',
  'Tesla Coils',
  'Tetris',
  'Texting',
  'Textiles',
  'Tombstone Rubbing',
  'Tool Collecting',
  'Toy Collecting',
  'Train Collecting',
  'Train Spotting',
  'Traveling',
  'Treasure Hunting',
  'Trekkie',
  'Tutoring Children',
  'TV watching',
  'Ultimate Frisbee',
  'Urban Exploration',
  'Video Games',
  'Violin',
  'Volunteer',
  'Walking',
  'Warhammer',
  'Watching sporting events',
  'Weather Watcher',
  'Weightlifting',
  'Windsurfing',
  'Wine Making',
  'Wingsuit Flying',
  'Woodworking',
  'Working In A Food Pantry',
  'Working on cars',
  'World Record Breaking',
  'Wrestling',
  'Writing',
  'Writing Music',
  'Writing Songs',
  'Yoga',
  'YoYo',
  'Ziplining',
  'Zumba',
];

export const randomItems = [
  'apple',
  'bag',
  'balloon',
  'bananas',
  'bed',
  'beef',
  'blouse',
  'book',
  'bookmark',
  'boom box',
  'bottle',
  'bottle cap',
  'bow',
  'bowl',
  'box',
  'bracelet',
  'bread',
  'brocolli',
  'hair brush',
  'buckel',
  'button',
  'camera',
  'candle',
  'candy wrapper',
  'canvas',
  'car',
  'greeting card',
  'playing card',
  'carrots',
  'cat',
  'CD',
  'cell phone',
  'packing peanuts',
  'cinder block',
  'chair',
  'chalk',
  'newspaper',
  'soy sauce packet',
  'chapter book',
  'checkbook',
  'chocolate',
  'clay pot',
  'clock',
  'clothes',
  'computer',
  'conditioner',
  'cookie jar',
  'cork',
  'couch',
  'credit card',
  'cup',
  'deodorant ',
  'desk',
  'door',
  'drawer',
  'drill press',
  'eraser',
  'eye liner',
  'face wash',
  'fake flowers',
  'flag',
  'floor',
  'flowers',
  'food',
  'fork',
  'fridge',
  'glass',
  'glasses',
  'glow stick',
  'grid paper',
  'hair tie',
  'hanger',
  'helmet',
  'house',
  'ipod',
  'charger',
  'key chain',
  'keyboard',
  'keys',
  'knife',
  'lace',
  'lamp',
  'lamp shade',
  'leg warmers',
  'lip gloss',
  'lotion',
  'milk',
  'mirror',
  'model car',
  'money',
  'monitor',
  'mop',
  'mouse pad',
  'mp3 player',
  'nail clippers',
  'nail file',
  'needle',
  'outlet',
  'paint brush',
  'pants',
  'paper',
  'pen',
  'pencil',
  'perfume',
  'phone',
  'photo album',
  'picture frame',
  'pillow',
  'plastic fork',
  'plate',
  'pool stick',
  'soda can',
  'puddle',
  'purse',
  'blanket',
  'radio',
  'remote',
  'ring',
  'rubber band',
  'rubber duck',
  'rug',
  'rusty nail',
  'sailboat',
  'sand paper',
  'sandal',
  'scotch tape',
  'screw',
  'seat belt',
  'shampoo',
  'sharpie',
  'shawl',
  'shirt',
  'shoe lace',
  'shoes',
  'shovel',
  'sidewalk',
  'sketch pad',
  'slipper',
  'soap',
  'socks',
  'sofa',
  'speakers',
  'sponge',
  'spoon',
  'spring',
  'sticky note',
  'stockings',
  'stop sign',
  'street lights',
  'sun glasses',
  'table',
  'teddies',
  'television',
  'thermometer',
  'thread',
  'tire swing',
  'tissue box',
  'toe ring',
  'toilet',
  'tomato',
  'tooth picks',
  'toothbrush',
  'toothpaste',
  'towel',
  'tree',
  'truck',
  'tv',
  'twezzers',
  'twister',
  'vase',
  'video games',
  'wallet',
  'washing machine',
  'watch',
  'water bottle',
  'doll',
  'magnet',
  'wagon',
  'headphones',
  'clamp',
  'USB drive',
  'air freshener',
  'piano',
  'ice cube tray',
  'white out',
  'window',
  'controller',
  'coasters',
  'thermostat',
  'zipper',
].map((i) => capitalize(i));

export const randomAnimals = [
  'meerkat',
  'aardvark',
  'addax',
  'alligator',
  'alpaca',
  'anteater',
  'antelope',
  'aoudad',
  'ape',
  'argali',
  'armadillo',
  'baboon',
  'badger',
  'basilisk',
  'bat',
  'bear',
  'beaver',
  'bighorn',
  'bison',
  'boar',
  'budgerigar',
  'buffalo',
  'bull',
  'bunny',
  'burro',
  'camel',
  'canary',
  'capybara',
  'cat',
  'chameleon',
  'chamois',
  'cheetah',
  'chimpanzee',
  'chinchilla',
  'chipmunk',
  'civet',
  'coati',
  'colt',
  'cougar',
  'cow',
  'coyote',
  'crocodile',
  'crow',
  'deer',
  'dingo',
  'doe',
  'dung beetle',
  'dog',
  'donkey',
  'dormouse',
  'dromedary',
  'duckbill platypus',
  'dugong',
  'eland',
  'elephant',
  'elk',
  'ermine',
  'ewe',
  'fawn',
  'ferret',
  'finch',
  'fish',
  'fox',
  'frog',
  'gazelle',
  'gemsbok',
  'gila monster',
  'giraffe',
  'gnu',
  'goat',
  'gopher',
  'gorilla',
  'grizzly bear',
  'ground hog',
  'guanaco',
  'guinea pig',
  'hamster',
  'hare',
  'hartebeest',
  'hedgehog',
  'highland cow',
  'hippopotamus',
  'hog',
  'horse',
  'hyena',
  'ibex',
  'iguana',
  'impala',
  'jackal',
  'jaguar',
  'jerboa',
  'kangaroo',
  'kitten',
  'koala',
  'lamb',
  'lemur',
  'leopard',
  'lion',
  'lizard',
  'llama',
  'lovebird',
  'lynx',
  'mandrill',
  'mare',
  'marmoset',
  'marten',
  'mink',
  'mole',
  'mongoose',
  'monkey',
  'moose',
  'mountain goat',
  'mouse',
  'mule',
  'musk deer',
  'musk-ox',
  'muskrat',
  'mustang',
  'mynah bird',
  'newt',
  'ocelot',
  'okapi',
  'opossum',
  'orangutan',
  'oryx',
  'otter',
  'ox',
  'panda',
  'panther',
  'parakeet',
  'parrot',
  'peccary',
  'pig',
  'octopus',
  'thorny devil',
  'starfish',
  'blue crab',
  'snowy owl',
  'chicken',
  'rooster',
  'bumble bee',
  'eagle owl',
  'polar bear',
  'pony',
  'porcupine',
  'porpoise',
  'prairie dog',
  'pronghorn',
  'puma',
  'puppy',
  'quagga',
  'rabbit',
  'raccoon',
  'ram',
  'rat',
  'reindeer',
  'rhinoceros',
  'salamander',
  'seal',
  'sheep',
  'shrew',
  'silver fox',
  'skunk',
  'sloth',
  'snake',
  'springbok',
  'squirrel',
  'stallion',
  'steer',
  'tapir',
  'tiger',
  'toad',
  'turtle',
  'vicuna',
  'walrus',
  'warthog',
  'waterbuck',
  'weasel',
  'whale',
  'wildcat',
  'bald eagle',
  'wolf',
  'wolverine',
  'wombat',
  'woodchuck',
  'yak',
  'zebra',
  'zebu',
].map((i) => capitalize(i));

const lorem =
  // tslint:disable-next-line: max-line-length
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

// (c) https://theuselessweb.com/
const uselessURLs = [
  'http://heeeeeeeey.com/',
  'http://tinytuba.com/',
  'http://corndog.io/',
  'http://thatsthefinger.com/',
  'http://cant-not-tweet-this.com/',
  'http://weirdorconfusing.com/',
  'https://www.eyes-only.net/',
  'http://eelslap.com/',
  'http://www.staggeringbeauty.com/',
  'http://burymewithmymoney.com/',
  'http://endless.horse/',
  'http://www.trypap.com/',
  'http://www.republiquedesmangues.fr/',
  'http://www.movenowthinklater.com/',
  'http://www.partridgegetslucky.com/',
  'http://www.rrrgggbbb.com/',
  'http://beesbeesbees.com/',
  'http://www.koalastothemax.com/',
  'http://www.everydayim.com/',
  'http://randomcolour.com/',
  'http://cat-bounce.com/',
  'http://chrismckenzie.com/',
  'http://hasthelargehadroncolliderdestroyedtheworldyet.com/',
  'http://ninjaflex.com/',
  'http://ihasabucket.com/',
  'http://corndogoncorndog.com/',
  'http://www.hackertyper.com/',
  'https://pointerpointer.com',
  'http://imaninja.com/',
  'http://www.ismycomputeron.com/',
  'http://www.nullingthevoid.com/',
  'http://www.muchbetterthanthis.com/',
  'http://www.yesnoif.com/',
  'http://iamawesome.com/',
  'http://www.pleaselike.com/',
  'http://crouton.net/',
  'http://corgiorgy.com/',
  'http://www.wutdafuk.com/',
  'http://unicodesnowmanforyou.com/',
  'http://www.crossdivisions.com/',
  'http://tencents.info/',
  'http://www.patience-is-a-virtue.org/',
  'http://whitetrash.nl/',
  'http://www.theendofreason.com/',
  'http://pixelsfighting.com/',
  'http://isitwhite.com/',
  'http://onemillionlols.com/',
  'http://www.omfgdogs.com/',
  'http://oct82.com/',
  'http://chihuahuaspin.com/',
  'http://www.blankwindows.com/',
  'http://dogs.are.the.most.moe/',
  'http://tunnelsnakes.com/',
  'http://www.trashloop.com/',
  'http://www.ascii-middle-finger.com/',
  'http://spaceis.cool/',
  'http://www.donothingfor2minutes.com/',
  'http://buildshruggie.com/',
  'http://buzzybuzz.biz/',
  'http://yeahlemons.com/',
  'http://burnie.com/',
  'http://wowenwilsonquiz.com',
  'https://thepigeon.org/',
  'http://notdayoftheweek.com/',
  'http://www.amialright.com/',
  'http://nooooooooooooooo.com/',
];

export const meanwhileInRussia = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYZ0LTX29WBcGG5fCmsDnSa7azDVST6s7JtsgRd96QK4moPMyWjgVwP5j3KdLEq8jMsM&usqp',
  'https://imgix.ranker.com/user_node_img/50040/1000786935/original/pineapple-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&w=375',
  'https://pbs.twimg.com/profile_images/717748785884110848/CneF3oAU_400x400.jpg',
  'https://www.topbestpics.com/wp-content/uploads/2018/03/ugly-woman-funny-ugly-people-pictures-26-450x350.jpg',
  'https://drolldump.com/wp-content/uploads/awkward-pics-from-russian-social-networks-33.jpg',
  'https://i2.wp.com/scrollbreak.com/wp-content/uploads/2019/09/crazy-russians-20.jpg?fit=600%2C939&ssl=1',
  'https://i2.wp.com/scrollbreak.com/wp-content/uploads/2019/09/russian-social-weirdos-1.jpg?fit=600%2C682&ssl=1',
  'https://buzzly.info/upload/1493/c77bd63180006e51ae0e6ff9610c0e50.jpg',
  'https://worldwideinterweb.com/wp-content/uploads/2017/09/dating-sites-pics.jpg',
  'https://i.pinimg.com/736x/65/fc/60/65fc60559389aefde80ba8cb33b7e00b--russian-dating-site-awkward-pictures.jpg',
  'https://i.dailymail.co.uk/i/pix/2013/11/08/article-2492393-1948979000000578-163_306x592.jpg',
  'https://i1.wp.com/scrollbreak.com/wp-content/uploads/2019/09/funny-meme-picture-1569315038.jpg?w=720&ssl=1',
  'https://sadanduseless.b-cdn.net/wp-content/uploads/2021/04/knitted-balaclavas5.jpg',
  'https://sadanduseless.b-cdn.net/wp-content/uploads/2021/04/knitted-balaclavas6.jpg',
  'https://sadanduseless.b-cdn.net/wp-content/uploads/2021/04/knitted-balaclavas4.jpg',
  'https://sadanduseless.b-cdn.net/wp-content/uploads/2021/04/knitted-balaclavas7.jpg',
  'https://sadanduseless.b-cdn.net/wp-content/uploads/2021/04/knitted-balaclavas17.jpg',
  'https://sadanduseless.b-cdn.net/wp-content/uploads/2021/04/knitted-balaclavas16.jpg',
];

export const diseases = [
  'Mississippiphobia',
  'Monoorangosis',
  'Fish Odor Syndrome',
  'Boanthropy',
  'Ablutomania',
  'Clinomania',
  'Basorexia',
  'Polydactylism',
  'Misophonia',
  'Dysania',
  'Cataplexy',
  'Tanorexica',
  'Empirism',
  'Galactorrhea',
  'Dipsomania',
  'Tyrotoxism',
  'Formication',
  'Gynecomastia',
  'Rhinotillexomania',
  'Nintendonitis',
  'Priapism',
];

const jokes = [
  'I ate a clock yesterday, it was very time-consuming.',
  'My three favorite things are eating my family and not using commas.',
  'A perfectionist walked into a bar...apparently, the bar wasn’t set high enough.',
  'I went to buy some camo pants but couldn’t find any.',
  'I failed math so many times at school, I can’t even count.',
  'I used to have a handle on life, but then it broke.',
  'I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.',
  `I want to die peacefully in my sleep, like my grandfather…
  Not screaming and yelling like the passengers in his car.`,
  'When life gives you melons, you might be dyslexic.',
  'Don’t you hate it when someone answers their own questions? I do.',
  'The problem with kleptomaniacs is that they always take things literally.',
  'Most people are shocked when they find out how bad I am as an electrician.',
  'Never trust atoms; they make up everything.',
  'I used to think I was indecisive. But now I’m not so sure.',
  'The easiest time to add insult to injury is when you’re signing someone’s cast.',
  'Light travels faster than sound, which is the reason that some people appear bright before you hear them speak.',
  'I always take life with a grain of salt. And a slice of lemon. And a shot of tequila.',
  'Always borrow money from a pessimist. They’ll never expect it back.',
  'I don’t suffer from insanity—I enjoy every minute of it.',
  'The last thing I want to do is hurt you; but it’s still on the list.',
  `‘Doctor, there’s a patient on line one that says he’s invisible.’
‘Well, tell him I can’t see him right now.’`,
  'Atheism is a non-prophet organization.',
  'Before you criticize someone, walk a mile in their shoes. That way, when you <em>do</em> criticize them, you’re a mile away and you have their shoes.',
  'I got a new pair of gloves today, but they’re both ‘lefts,’ which on the one hand is great, but on the other, it’s just not right.',
  `I was riding a donkey the other day when someone threw a rock at me
  and I fell off. I guess I was stoned off my ass.`,
  `What’s the difference between ignorance and apathy?
  I don’t know and I don’t care.`,
  'Despite the high cost of living, it remains popular.',
  'Pollen is what happens when flowers can’t keep it in their plants.',
  'Communist jokes aren’t funny unless everyone gets them.',
  'I threw a boomerang a couple years ago; I know live in constant fear.',
  'I put my grandma on speed dial the other day. I call it insta-gram.',
  'I have a few jokes about unemployed people, but none of them work.',
];

const imgs = [
  'https://sadanduseless.b-cdn.net/wp-content/uploads/2021/04/you-had-one-job2.jpg',
  'https://teamjimmyjoe.com/wp-content/uploads/2017/07/lemur-monkey-girl-kitchen-awkward-family-photos.jpg',
  'https://nedhardy.com/wp-content/uploads/2021/04/cats_of_instagram_175863746_495388971509470_1171968361243479112_n.jpg',
  'https://nedhardy.com/wp-content/uploads/2021/04/jkdb0y5a9xu61.jpg',
  'https://www.adaptnetwork.com/wp-content/uploads/2020/08/comedy-wildlife-photography-awards-2020-mark-fitzpatrick-840x1144.jpg',
  'https://bloximages.chicago2.vip.townnews.com/tbrnews.com/content/tncms/assets/v3/editorial/e/f1/ef10457a-0b73-11e8-b13d-77924b8494ac/5a7a01e77568b.image.jpg?resize=1200%2C791',
  'https://i.dailymail.co.uk/i/pix/2017/02/24/11/3D9B40BB00000578-0-image-a-66_1487936234264.jpg',
  'https://i.dailymail.co.uk/i/pix/2017/02/24/12/3D9B415900000578-4256220-This_teen_opted_for_a_bold_look_with_her_fringed_mullet_and_over-a-89_1487939631861.jpg',
  'https://teamjimmyjoe.com/wp-content/uploads/2017/07/awkward-family-funny-girl-mustache-snaps.jpg',
  'https://teamjimmyjoe.com/wp-content/uploads/2017/07/awkward-family-snapshot-grandma-cleaning-bathrub.jpg',
  'https://teamjimmyjoe.com/wp-content/uploads/2017/07/awkward-family-snapshot-mon-daughter-son-knife.jpg',
  'https://teamjimmyjoe.com/wp-content/uploads/2017/07/1980s-awkward-art-student-hippie.jpg',
  'https://www.teamjimmyjoe.com/wp-content/uploads/2014/03/Worst-jobs-underarm-smeller.jpg',
  'https://www.teamjimmyjoe.com/wp-content/uploads/2012/11/Funny-Wedding-Photos.jpg',
  'https://www.teamjimmyjoe.com/wp-content/uploads/2013/03/Funny-Pictures-Fall.jpg',
  'https://www.teamjimmyjoe.com/wp-content/uploads/2013/03/funeral.jpg',
  'https://i.imgur.com/zjad48a.jpeg',
  'https://i.imgur.com/XcRh9ud.jpeg',
  'https://i.chzbgr.com/full/9040314368/hA3C336AE/hair',
];

export const joke = (num?) => randomFromArray(jokes, num);

export const funnyImg = (num?) => randomFromArray(imgs, num);

export const disease = (num?) => randomFromArray(diseases, num);

export const sadAvatar = (num?) => randomFromArray(meanwhileInRussia, num);

export const mockAvatar = (): string =>
  `https://randomuser.me/api/portraits/${randomFromArray([
    'men',
    'women',
  ])}/${randomNumber(0, 99)}.jpg`;

export const adorableAvatar = (): string =>
  `https://api.adorable.io/avatars/100/${simpleUID()}.png`;

export const mockImage = (width: number, height: number): string =>
  `https://picsum.photos/id/${randomNumber(0, 99)}/${width}/${height}`;

export const mockName = (num = 1): string => {
  if (num > 1) {
    return mockNames(num) as any;
  }
  return `${randomFromArray(mockFirstNamesList, 1)} ${randomFromArray(
    mockSecondNamesList,
    1
  )}` as string;
};

export const mockNames = (num: number = null) => {
  if (num === 1) {
    return mockName() as any;
  }
  const fns = randomFromArray(mockFirstNamesList, null);
  const sns = randomFromArray(mockSecondNamesList, null);
  const ns = dedupeArray(fns.map((n, i) => `${n} ${sns[i]}`));

  return (num ? ns.slice(0, num) : ns) as string[];
};

export const mockJobs = (num: number = null) =>
  randomFromArray(mockJobsList, num);

export const mockBadJobs = (num: number = null) =>
  randomFromArray(badJobsList, num);

export const mockHobbies = (num: number = null) =>
  randomFromArray(mockHobbiesList, num);

export const mockCities = (num: number = null) =>
  randomFromArray(mockCitiesList, num);

export const mockCountries = (num: number = null) =>
  randomFromArray(mockCountriesList, num);

export const mockDepartments = (num: number = null) =>
  randomFromArray(mockDepartmentsList, num);

export const mockThings = (num: number = null) =>
  randomFromArray(randomItems, num);

export const mockAnimals = (num: number = null) =>
  randomFromArray(randomAnimals, num);

export const mockDate = () =>
  `${padWith0(randomNumber(1, 31))}/${padWith0(
    randomNumber(1, 12)
  )}/${new Date().getFullYear()}`;

export const mockISOdate = () =>
  `${new Date().getFullYear()}-${padWith0(randomNumber(1, 12))}-${randomNumber(
    1,
    31
  )}`;

export const mockTime = () =>
  `${padWith0(randomNumber(0, 23))}:${padWith0(randomNumber(0, 59))}`;

export const mockDateRange = (length = 0) => {
  const year = new Date().getFullYear();
  const month = randomNumber(1, 12);
  const day1 = randomNumber(1, 15);
  if (!length) {
    length = randomNumber(2, 14);
  }
  const day2 = day1 + length;

  return `${padWith0(day1)}/${padWith0(month)}/${year} - ${padWith0(
    day2
  )}/${padWith0(month)}/${year}`;
};

export const loremText = (words: number = null) => {
  if (typeof words === 'number') {
    return lorem.split(' ').slice(0, words).join(' ');
  }
  return lorem;
};

export const mockText = (words = 100) => {
  let text = lorem
    .split(' ')
    .sort(() => 0.5 - Math.random())
    .slice(0, words)
    .join(' ')
    .replace(/[\W\s]+/g, ' ')
    .trim();

  text = text.charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);

  if (text.length < 5) {
    return mockText(words);
  }
  return text;
};

export const uselessSite = () => randomFromArray(uselessURLs);

export const uselessDomain = () =>
  uselessSite().replace(/(http:)|(www.)|\//g, '');

export const mockUrl = (type = 'any') => {
  const pref = 'http://www.';
  switch (type) {
    case 'facebook':
      return `${pref}facebook.com/${simpleUID('id', 6)}/`;
      break;
    case 'linkedin':
      return `${pref}linkedin.com/in/${simpleUID('id', 6)}/`;
      break;
    case 'twitter':
      return `${pref}twitter.com/${simpleUID('id', 6)}/`;
      break;
    case 'youtube':
      return `${pref}youtube.com/watch?v=${simpleUID('', 8)}/`;
      break;
    case 'vimeo':
      return `${pref}vimeo.com/${simpleUID('', 8)}/`;
      break;
    default:
      return uselessSite();
  }
};

export const mockLinkHtml = () =>
  `<a href="${uselessSite()}">${mockThings(1)}</a>`;

export const randomIcon = () => randomFromArray(Object.values(Icons));
