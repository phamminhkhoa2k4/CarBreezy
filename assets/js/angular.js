var app = angular.module("myApp", []);
var db = [
    {
        img: "assets/img/cars/Audi135955.jpg",
        img2:"assets/img/cars/Audi2_135955.jpg",
        img3:"assets/img/cars/Audi3_135955.jpg",
        img4:"assets/img/cars/Audi4_135955.jpg",
        img5:"assets/img/cars/Audi5_135955.jpg",
        state: "New",
        year: "2022",
        name: "Audi S8 4.0T quattro",
        brand: "Audi",
        miles: "11 mi.",
        price: "$135,955",
        payment: "$1,907/mo. Est.payment",
        tax: "$27,191 down |8.0% APR|72 mos",
        style: "Hatchback",
        exColor: "Mythos Black Metallic",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "4.0L V8 32V GDI DOHC Twin Turbo",
        VIN: "WAULSAF87NN009926",
        stock: "NN009926",
        convenience: "Adaptive Cruise Control, Heated Seats" ,
        entertainment: "",
        exterior: "Alloy Wheels ",
        safety: "Blind Sport Monitor",
        seating: "",
        down: "$27,191",
        interest: "$28,539",
        total: "$137,303"
    },
    {
        img: "assets/img/cars/Audi69379.jpg",
        img2: "assets/img/cars/Audi2_69379.jpg",
        img3: "assets/img/cars/Audi3_69379.jpg",
        img4: "assets/img/cars/Audi4_69379.jpg",
        img5: "assets/img/cars/Audi5_69379.jpg",
        state: "New",
        year: "2022",
        name: "Audi Q7 55 Premium",
        brand: "Audi",
        miles: "5 mi.",
        price: "$69,379",
        payment: "$973/mo. Est.payment",
        tax: "$13,876 down |8.0% APR|72 mos",
        style: "Hatchback",
        exColor: "Mythos Black Metallic",
        inColor: "Black",
        drivetrain: " Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "3.0L V6 24V GDI DOHC Turbo",
        VIN: "WA1LXBF73ND020763",
        stock: "ND020763",
        convenience: "Adaptive Cruise Control, Heated Steering Wheel",
        entertainment: "Premium Sound System",
        exterior: "",
        safety: "Backup Camera, Lane Departure Warning",
        seating: "Leather Seats",
        down: "$13,876",
        interest: "$14,564",
        total: "$70,067"
    },
    {
        img: "assets/img/cars/Audi97345.jpg",
        img2: "assets/img/cars/Audi2_97345.jpg",
        img3: "assets/img/cars/Audi3_97345.jpg",
        img4: "assets/img/cars/Audi4_97345.jpg",
        img5: "assets/img/cars/Audi5_97345.jpg",
        state: "New",
        year: "2022",
        name: "Audi A8 L 55",
        brand: "Audi",
        miles: "15 mi.",
        price: "$97,345",
        payment: "$1,365/mo. Est.payment",
        tax: "$19,469down |8.0% APR|72 mos",
        style: 'Sedan',
        exColor: "Glacier White Metallic",
        inColor: "Black",
        drivetrain: "AWD",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "3.0L V6 24V GDI DOHC Turbo",
        VIN: "WAULDAF89NN010067",
        stock: "5220594",
        convenience: "Heated Seats, Navigation System",
        entertainment: "Bluetooth, HomeLink",
        exterior: "",
        safety: "Backup Camera, Stability Control",
        seating: "",
        down: "$19,469",
        interest: "$20,434",
        total: "$98,310"
    },
    {
        img: "assets/img/cars/Audi62070.jpg",
        img2: "assets/img/cars/Audi2_62070.jpg",
        img3: "assets/img/cars/Audi3_62070.jpg",
        img4: "assets/img/cars/Audi4_62070.jpg",
        img5: "assets/img/cars/Audi5_62070.jpg",
        state: "New",
        year: "2023",
        name: "Audi S4 3.0T Premium Plus",
        brand: "Audi",
        miles: "7 mi.",
        price: "$62,070",
        payment: "$871/mo. Est.payment",
        tax: "$12,414 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Glacier White Metallic",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "3.0L V6 24V GDI DOHC Turbo",
        VIN: "WAUB4AF48PA006370",
        stock: "SC230028",
        convenience: "Heated Seats",
        entertainment: "Bluetooth, HomeLink",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, LED Headlights, Stability Control",
        seating: "Leather Seats",
        down: "$12,414",
        interest: "$13,029",
        total: "$62,685"
    },
    {
        img: "assets/img/cars/Audi69182.jpg",
        img2: "assets/img/cars/Audi2_69182.jpg",
        img3: "assets/img/cars/Audi3_69182.jpg",
        img4: "assets/img/cars/Audi4_69182.jpg",
        img5: "assets/img/cars/Audi5_69182.jpg",
        state: "New",
        year: "2022",
        name: "Audi Q7 55 Premium",
        brand: "Audi",
        miles: "5 mi.",
        price: "$69,182",
        payment: "$970/mo. Est.payment",
        tax: "$13,836 down |8.0% APR|72 mos",
        style: "Hatchback",
        exColor: "Carrara White",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "3.0L V6 24V GDI DOHC Turbo",
        VIN: "WA1LXBF70ND021868",
        stock: "ND021868",
        convenience: "Heated Seats, Navigation System, Power Liftgate",
        entertainment: "Apple CarPlay/Android Auto, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$13,836",
        interest: "$14,522",
        total: "$69,868"
    },

    {
        img: "assets/img/cars/Audi74540.jpg",
        img2: "assets/img/cars/Audi2_74540.jpg",
        img3: "assets/img/cars/Audi3_74540.jpg",
        img4: "assets/img/cars/Audi4_74540.jpg",
        img5: "assets/img/cars/Audi5_74540.jpg",
        state: "New",
        year: "2023",
        name: "Audi Q7 55 Premium",
        brand: "Audi",
        miles: "5 mi.",
        price: "$74,540",
        payment: "$1,046/mo. Est.payment",
        tax: "$14,908 down |8.0% APR|72 mos",
        style: 'Hatchback',
        exColor: "Glacier White Metallic",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "3.0L V6 24V GDI DOHC Turbo",
        VIN: "WA1VXBF7XPD000277",
        stock: "PD000277",
        convenience: "Adaptive Cruise Control, Heated Seats, Keyless Start, Navigation System, Power Liftgate",
        entertainment: "Bluetooth, HomeLink",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, LED Headlights",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$14,908",
        interest: "$15,647",
        total: "$75,279"
    },

    {
        img: "assets/img/cars/Audi38815.jpg",
        img2: "assets/img/cars/Audi2_38815.jpg",
        img3: "assets/img/cars/Audi3_38815.jpg",
        img4: "assets/img/cars/Audi4_38815.jpg",
        img5: "assets/img/cars/Audi5_38815.jpg",
        state: "New",
        year: "2022",
        name: "Audi Q3 40 Premium",
        brand: "Audi",
        miles: "2 mi.",
        price: '$38,815',
        payment: "$544/mo. Est.payment",
        tax: "$7,763 down |8.0% APR|72 mos",
        style: 'Hatchback',
        exColor: "Mythos Black Metallic",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "2.0L I4 16V GDI DOHC Turbo",
        VIN: "WA1AUCF30N1141965",
        stock: "A22227",
        convenience: "Heated Seats, Power Liftgate",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, Premium Sound System, USB Port",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "Leather Seats",
        down: "$7,763",
        interest: "$8,148",
        total: "$39,200"
    },

    {
        img: "assets/img/cars/Audi93790.jpg",
        img2: "assets/img/cars/Audi2_93790.jpg",
        img3: "assets/img/cars/Audi3_93790.jpg",
        img4: "assets/img/cars/Audi4_93790.jpg",
        img5: "assets/img/cars/Audi5_93790.jpg",
        state: "New",
        year: "2022",
        name: "Audi SQ7 4.0T",
        brand: "Audi",
        miles: "12 mi.",
        price: '$93,790',
        payment: "$1,316/mo. Est.payment",
        tax: "$18,758 down |8.0% APR|72 mos",
        style: 'Hatchback',
        exColor: "Florett Silver Metallic",
        inColor: "Black",
        drivetrain: "AWD",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "4.0L V8 32V GDI DOHC TWIN Turbo",
        VIN: "WA1AWBF70ND015255",
        stock: "14221148",
        convenience: "Heated Seats, Heated Steering Wheel, Power Liftgate",
        entertainment: "HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$18,758",
        interest: "$19,688",
        total: "$94,720"
    },

    {
        img: "assets/img/cars/Acura61145.jpg",
        img2: "assets/img/cars/Acura2_61145.jpg",
        img3: "assets/img/cars/Acura3_61145.jpg",
        img4: "assets/img/cars/Acura4_61145.jpg",
        img5: "assets/img/cars/Acura5_61145.jpg",
        state: "New",
        year: "2023",
        name: "Acura MDX A-Spec",
        brand: "Acura",
        miles: "3 mi.",
        price: "$61,145",
        payment: "$858/mo. Est.payment",
        tax: "$12,229 down |8.0% APR|72 mos",
        style: 'SUV',
        exColor: "Majestic Black Pearl",
        inColor: "Ebony",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "Permium Unleaded V-6 3.5 L/212",
        VIN: "5J8YE1H05PL004943",
        stock: "7035",
        convenience: "Adaptive Cruise Control, Heated Cruise Control, Keyless Start, Navigation System, Power Liftgate, Remote Start",
        entertainment: "Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Blind Spot Monitor, Brake Assist, LED Headlights, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$12,229",
        interest: "$12,835",
        total: "$61,751"

    },
    {
        img: "assets/img/cars/Acura49445.jpg",
        img2: "assets/img/cars/Acura2_49445.jpg",
        img3: "assets/img/cars/Acura3_49445.jpg",
        img4: "assets/img/cars/Acura4_49445.jpg",
        img5: "assets/img/cars/Acura5_49445.jpg",
        state: "New",
        year: "2022",
        name: "Acura TLX A-Spec",
        brand: "Acura",
        miles: "1 mi.",
        price: "$49,445",
        payment: "$857/mo. Est.payment",
        tax: "$12,216 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Majestic Black Pearl",
        inColor: "-",
        drivetrain: "AWD",
        fuel: "Gasoline",
        transmission: "10-Speed Automatic",
        engine: "2.0L I4  16V GDI DOHC Turbo",
        VIN: "19UUB6F59NA003595",
        stock: "NA003595A",
        convenience: "Adaptive Cruise Control, Keyless Start, Navigation System",
        entertainment: "Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$12,216",
        interest: "$13,455",
        total: "$50,694"
    },
    
    {
        img: "assets/img/cars/Acura46745.jpg",
        img2: "assets/img/cars/Acura2_46745.jpg",
        img3: "assets/img/cars/Acura3_46745.jpg",
        img4: "assets/img/cars/Acura4_46745.jpg",
        img5: "assets/img/cars/Acura5_46745.jpg",
        state: "New",
        year: "2022",
        name: "Acura TLX A-Spec",
        brand: "Acura",
        miles: "- mi.",
        price: "$46,745",
        payment: "$656/mo. Est.payment",
        tax: "$9,349 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Lunar Silver Metaallic",
        inColor: "Ebony",
        drivetrain: "FWD",
        fuel: "Gasoline",
        transmission: "10-Speed Automatic",
        engine: "2.0L I4  16V GDI DOHC Turbo",
        VIN: "19UUB5F53NA005241",
        stock: "00026055",
        convenience: "Adaptive Cruise Control, Heated Seats, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$9,349",
        interest: "$9,812",
        total: "$47,208"
    },
    {
        img: "assets/img/cars/Acura57613.jpg",
        img2: "assets/img/cars/Acura2_57613.jpg",
        img3: "assets/img/cars/Acura3_57613.jpg",
        img4: "assets/img/cars/Acura4_57613.jpg",
        img5: "assets/img/cars/Acura5_57613.jpg",
        state: "Used",
        year: "2023",
        name: "Acura MDX Technology",
        brand: "Acura",
        miles: "1,710 mi.",
        price: "$57,613",
        payment: "$808/mo. Est.payment",
        tax: "$11,523 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Platinum White Pearl",
        inColor: "Parchment",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "3.5L V6 24V GDI SOHC",
        VIN: "5J8YD9H45PL001724",
        stock: "PL001724",
        convenience: "Adaptive Cruise Control, Heated Seats, Navigation System, Power Liftgate, Remote Start",
        entertainment: "Apple CarPlay/Android Auto, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Blind Spot Monitor, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$11,523",
        interest: "$12,094",
        total: "$58,184"
    },
    {
        img: "assets/img/cars/Acura26990.jpg",
        img2: "assets/img/cars/Acura2_26990.jpg",
        img3: "assets/img/cars/Acura3_26990.jpg",
        img4: "assets/img/cars/Acura4_26990.jpg",
        img5: "assets/img/cars/Acura5_26990.jpg",
        state: "Used",
        year: "2021",
        name: "Acura ILX Premium Package",
        brand: "Acura",
        miles: "22,021 mi.",
        price: "$26,990",
        payment: "$379/mo. Est.payment",
        tax: "$5,396 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Platinum White Pearl",
        inColor: "-",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic with Auto-Shift",
        engine: "2.4L I4  16V GDI DOHC",
        VIN: "19UDE2F72MA002241",
        stock: "MA002241",
        convenience: "Adaptive Cruise Control, Keyless Start",
        entertainment: "Bluetooth, HomeLink",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$5,398",
        interest: "$5,666",
        total: "$27,258"
    },
    {
        img: "assets/img/cars/Acura26999.jpg",
        img2: "assets/img/cars/Acura2_26999.jpg",
        img3: "assets/img/cars/Acura3_26999.jpg",
        img4: "assets/img/cars/Acura4_26999.jpg",
        img5: "assets/img/cars/Acura5_26999.jpg",
        state: "Used",
        year: "2020",
        name: "Acura ILX Premium Package",
        brand: "Acura",
        miles: "30,442 mi.",
        price: "$26,999",
        payment: "$379/mo. Est.payment",
        tax: "$5,400 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "White",
        inColor: "Espresso",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic with Auto-Shift",
        engine: "2.4L I4  16V GDI DOHC",
        VIN: "19UDE2F72LA001024",
        stock: "TLA001024",
        convenience: "Adaptive Cruise Control, Heated Seats, Keyless Start",
        entertainment: "Bluetooth, HomeLink",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Blind Spot Monitor, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$5,400",
        interest: "$5,667",
        total: "$27,266"
    },
    {
        img: "assets/img/cars/Acura19843.jpg",
        img2: "assets/img/cars/Acura2_19843.jpg",
        img3: "assets/img/cars/Acura3_19843.jpg",
        img4: "assets/img/cars/Acura4_19843.jpg",
        img5: "assets/img/cars/Acura5_19843.jpg",
        state: "Used",
        year: "2017",
        name: "Acura TLX w/Technology Package",
        brand: "Acura",
        miles: "76,207 mi.",
        price: "$19,843",
        payment: "$278/mo. Est.payment",
        tax: "$3,969 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Bellanova White Pearl",
        inColor: "Graystone",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic with Auto-Shift",
        engine: "2.4L I4  16V GDI DOHC",
        VIN: "19UUB1F50HA001676",
        stock: "FP32735A",
        convenience: "Heated Seats, Navigation System",
        entertainment: "Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Blind Spot Monitor, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$3,969",
        interest: "$4,165",
        total: "$20,039"
    },
    
    {
        img: "assets/img/cars/Acura64695.jpg",
        img2: "assets/img/cars/Acura2_64695.jpg",
        img3: "assets/img/cars/Acura3_64695.jpg",
        img4: "assets/img/cars/Acura4_64695.jpg",
        img5: "assets/img/cars/Acura5_64695.jpg",
        state: "New",
        year: "2023",
        name: "Acura MDX Advance",
        brand: "Acura",
        miles: "5 mi.",
        price: "$64,695",
        payment: "$907/mo. Est.payment",
        tax: "$12,939 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Liquid Carbon Metallic",
        inColor: "Espresso",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "10-Speed Automatic",
        engine: "3.5L V6 24V GDI SOHC",
        VIN: "5J8YE1H84PL010495",
        stock: "PL010495",
        convenience: "Heated Seats, Heated Steering Wheel, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$12,939",
        interest: "$13,580",
        total: "$65,336"
    },
    {
        img: "assets/img/cars/Ferrari869000.jpg",
        img2: "assets/img/cars/Ferrari2_869000.jpg",
        img3: "assets/img/cars/Ferrari3_869000.jpg",
        img4: "assets/img/cars/Ferrari4_869000.jpg",
        img5: "assets/img/cars/Ferrari5_869000.jpg",
        state: "Used",
        year: "2021",
        name: "Ferrari SF90 Stradale Base",
        brand: "Ferrari",
        miles: "641 mi.",
        price: "$869,000",
        payment: "$12,189/mo. Est.payment",
        tax: "$173,800 down |8.0% APR|72 mos",
        style: 'Coupe',
        exColor: "Green",
        inColor: "Nero",
        drivetrain: "All-wheel Drive",
        fuel: "Hybrid",
        transmission: "-",
        engine: "4.0L V8 32V GDI DOHC Twin Hybrid",
        VIN: "ZFF95NLA0M0265910",
        stock: "SC6024",
        convenience: "",
        entertainment: "",
        exterior: "",
        safety: "Backup Camera",
        seating: "",
        down: "$173,800",
        interest: "$182,416",
        total: "$877,616"
    },

    {
        img: "assets/img/cars/Ferrari189900.jpg",
        img2: "assets/img/cars/Ferrari2_189900.jpg",
        img3: "assets/img/cars/Ferrari3_189900.jpg",
        img4: "assets/img/cars/Ferrari4_189900.jpg",
        img5: "assets/img/cars/Ferrari5_189900.jpg",
        state: "New",
        year: "2018",
        name: "Ferrari California T",
        brand: "Ferrari",
        miles: "3,103 mi.",
        price: "$189,900",
        payment: "$5,164/mo. Est.payment",
        tax: "$10,689 down |8.0% APR|72 mos",
        style: 'Coupe',
        exColor: "Gray",
        inColor: "Tan",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "7-Speed Automatic with Auto-Shift",
        engine: "3.9L V8 32V GDI DOHC Twin Turbo",
        VIN: "ZFF77XJA2J0230040",
        stock: "FP5445",
        convenience: "Navigation System",
        entertainment: "Bluetooth, Premium Sound System, USB Port",
        exterior: "Alloy Wheels",
        safety: "Stability Control",
        seating: "Leather Seats",
        down: "$37,980",
        interest: "$39,863",
        total: "$191,783"
    },

    {
        img: "assets/img/cars/Ferrari774895.jpg",
        img2: "assets/img/cars/Ferrari2_774895.jpg",
        img3: "assets/img/cars/Ferrari3_774895.jpg",
        img4: "assets/img/cars/Ferrari4_774895.jpg",
        img5: "assets/img/cars/Ferrari5_774895.jpg",
        state: "New",
        year: "2021",
        name: "Ferrari SF90 Stradale Base",
        brand: "Ferrari",
        miles: "174 mi.",
        price: '$774,895',
        payment: "$10,869/mo. Est.payment",
        tax: "$154,979 down |8.0% APR|72 mos",
        style: 'Coupe',
        exColor: "Grigio Silverstone",
        inColor: "Nero",
        drivetrain: "All-wheel Drive",
        fuel: "Hybrid",
        transmission: "7-Speed DCT Automatic",
        engine: "4.0L V8 23V GDI DOHC Twin Turbo Hybrid",
        VIN: "ZFF95NLA7M0267198",
        stock: "M0267198",
        convenience: "",
        entertainment: "Premium Sound System",
        exterior: "",
        safety: "Backup Camera",
        seating: "Leather Seats",
        down: "$154,979",
        interest: "$162,662",
        total: "$782,578"
    },

    {
        img: "assets/img/cars/Ferrari827995.jpg",
        img2: "assets/img/cars/Ferrari2_827995.jpg",
        img3: "assets/img/cars/Ferrari3_827995.jpg",
        img4: "assets/img/cars/Ferrari4_827995.jpg",
        img5: "assets/img/cars/Ferrari5_827995.jpg",
        state: "New",
        year: "2021",
        name: "Ferrari SF90 Stradale Base",
        brand: "Ferrari",
        miles: "692 mi.",
        price: '$827,995',
        payment: "$11,614/mo. Est.payment",
        tax: "$165,599 down |8.0% APR|72 mos",
        style: 'Coupe',
        exColor: "Rosso Corsa",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Hybrid",
        transmission: "8-Speed",
        engine: "4.0L V8 32V GDI DOHC Twin Hybrid",
        VIN: "ZFF95NLA9M0265078",
        stock: "CM1604",
        convenience: "Heated Seats, Navigation System",
        entertainment: "Apple CarPlay/Android Auto",
        exterior: "",
        safety: "Stability Control",
        seating: "",
        down: "$165,599",
        interest: "$173,808",
        total: "$836,204"
    },

    {
        img: "assets/img/cars/Ferrari517788.jpg",
        img2: "assets/img/cars/Ferrari2_517788.jpg",
        img3: "assets/img/cars/Ferrari3_517788.jpg",
        img4: "assets/img/cars/Ferrari4_517788.jpg",
        img5: "assets/img/cars/Ferrari5_517788.jpg",
        state: "New",
        year: "2021",
        name: "Ferrari F8 Spider Base",
        brand: "Ferrari",
        miles: "854 mi.",
        price: '$517,788',
        payment: "$7,263/mo. Est.payment",
        tax: "$103,588,599 down |8.0% APR|72 mos",
        style: 'Convertible',
        exColor: "Bianco Cervino",
        inColor: "Rosso Ferrari",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "7-Speed",
        engine: "3.9L V8 32V GDI DOHC Twin Turbo",
        VIN: "ZFF93LMA0M0262076",
        stock: "FM3354",
        convenience: "Heated Seats, Navigation System",
        entertainment: "Apple CarPlay/Android Auto",
        exterior: "Tow Hitch",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "",
        down: "$103,558",
        interest: "$108,691",
        total: "$522,921"
    },

    {
        img: "assets/img/cars/Ferrari590000.jpg",
        img2: "assets/img/cars/Ferrari2_590000.jpg",
        img3: "assets/img/cars/Ferrari3_590000.jpg",
        img4: "assets/img/cars/Ferrari4_590000.jpg",
        img5: "assets/img/cars/Ferrari5_590000.jpg",
        state: "New",
        year: "2022",
        name: "Ferrari F8 Spider Base",
        brand: "Ferrari",
        miles: "291 mi.",
        price: '$590,000',
        payment: "$8,276/mo. Est.payment",
        tax: "$118,000 down |8.0% APR|72 mos",
        style: 'Coupe',
        exColor: "EXTRACAMPIONARIO NOT STANDARD",
        inColor: "Nero",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "7-Speed Automatic with Overdrive and Auto-Shift",
        engine: "3.9L V8 32V GDI DOHC Twin Turbo",
        VIN: "ZFF93LMA9N0280321",
        stock: "N0280321CON",
        convenience: "Navigation System",
        entertainment: "",
        exterior: "",
        safety: "Backup Camera, Stability Control",
        seating: "",
        down: "$118,000",
        interest: "$123,850",
        total: "$595,850"
    },

    {
        img: "assets/img/cars/GMC42365.jpg",
        img2: "assets/img/cars/GMC2_42365.jpg",
        img3: "assets/img/cars/GMC3_42365.jpg",
        img4: "assets/img/cars/GMC4_42365.jpg",
        img5: "assets/img/cars/GMC5_42365.jpg",
        state: "New",
        year: "2023",
        name: "GMC Sierra 1500 Pro",
        brand: "GMC",
        miles: "6 mi.",
        price: "$42,365",
        payment: "$594/mo. Est.payment",
        tax: "$8,473 down |8.0% APR|72 mos",
        style: 'Truck',
        exColor: "Summit White",
        inColor: "Jet Black",
        drivetrain: "Four-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "2.7L I4 16V GDI DOHC Turbo",
        VIN: "1GTPUAEK3PZ110145",
        stock: "00023036",
        convenience: "",
        entertainment: "Apple CarPlay/Android Auto",
        exterior: "Tow Hitch",
        safety: "",
        seating: "",
        down: "$8,473",
        interest: "$8,893",
        total: "$42,785"
    },
    {
        img: "assets/img/cars/GMC33671.jpg",
        img2: "assets/img/cars/GMC2_33671.jpg",
        img3: "assets/img/cars/GMC3_33671.jpg",
        img4: "assets/img/cars/GMC4_33671.jpg",
        img5: "assets/img/cars/GMC5_33671.jpg",
        state: "Used",
        year: "2016",
        name: "GMC Yukon SLT",
        brand: "GMC",
        miles: "70,862 mi.",
        price: "$33,671",
        payment: "$472/mo. Est.payment",
        tax: "$6,734 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Onyx Black",
        inColor: "Jet Black",
        drivetrain: "Four-wheel Drive",
        fuel: "Gasoline",
        transmission: "6-Speed Automatic",
        engine: "5.3L V8 16V GDI OHV",
        VIN: "1GKS2BKC6GR445519",
        stock: "GVD3209A",
        convenience: "Heated Steering Wheel, Keyless Start, Navigation System, Power Liftgate, Remote Start",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels, Tow Hitch",
        safety: "Backup Camera, Blind Sport Monitor, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$6,734",
        interest: "$7,068",
        total: "$34,005"
    },
    {
        img: "assets/img/cars/GMC79995.jpg",
        img2: "assets/img/cars/GMC2_79995.jpg",
        img3: "assets/img/cars/GMC3_79995.jpg",
        img4: "assets/img/cars/GMC4_79995.jpg",
        img5: "assets/img/cars/GMC5_79995.jpg",
        state: "Used",
        year: "2021",
        name: "GMC Yukon Denail",
        brand: "GMC",
        miles: "25,010 mi.",
        price: "$79,995",
        payment: "$1,122/mo. Est.payment",
        tax: "$15,999 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Onyx Black",
        inColor: "-",
        drivetrain: "Four-wheel Drive",
        fuel: "Gasoline",
        transmission: "10-Speed A/T",
        engine: "8 Cylinder Engine",
        VIN: "1GKS2DKL4MR280495",
        stock: "210495T",
        convenience: "Adaptive Cruise Control, Heated Seats, Heated Steering Wheel, Keyless Start, Navigation System, Power Liftgate, Remote Start",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, Premium Sound System, USB Port",
        exterior: "Alloy Wheels, Tow Hitch, Tow Hooks",
        safety: "Automatic Emergency Braking, Backup Camera, Blind Sport Monitor, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "Leather Seats",
        down: "$15,999",
        interest: "$16,792",
        total: "$80,788"
    },
    {
        img: "assets/img/cars/GMC52973.jpg",
        img2: "assets/img/cars/GMC2_52973.jpg",
        img3: "assets/img/cars/GMC3_52973.jpg",
        img4: "assets/img/cars/GMC4_52973.jpg",
        img5: "assets/img/cars/GMC5_52973.jpg",
        state: "Used",
        year: "2019",
        name: "GMC Yukon XL SLT",
        brand: "GMC",
        miles: "25,600 mi.",
        price: "$52,973",
        payment: "$743/mo. Est.payment",
        tax: "$10,595 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Black",
        inColor: "-",
        drivetrain: "Four-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "5.3L V6 16V GDI OHV",
        VIN: "1GKS2GKC5KR343974",
        stock: "4123",
        convenience: "Heated Steering Wheel, Keyless Start, Power Liftgate, Remote Start",
        entertainment: "Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels, Tow Hitch",
        safety: "Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$10,595",
        interest: "$11,120",
        total: "$53,498"
    },
    {
        img: "assets/img/cars/GMC52841.jpg",
        img2: "assets/img/cars/GMC2_52841.jpg",
        img3: "assets/img/cars/GMC3_52841.jpg",
        img4: "assets/img/cars/GMC4_52841.jpg",
        img5: "assets/img/cars/GMC5_52841.jpg",
        state: "Used",
        year: "2021",
        name: "GMC Sierra 2500 Base",
        brand: "GMC",
        miles: "44,125 mi.",
        price: "$52,841",
        payment: "$741/mo. Est.payment",
        tax: "$10,568 down |8.0% APR|72 mos",
        style: "Truck",
        exColor: "Summit White",
        inColor: "Jet Black",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "6.6L V8 16V GDI OHV",
        VIN: "1GT48LE77MF160381",
        stock: "MF160381",
        convenience: "",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, Premium Sound System, USB Port",
        exterior: "Tow Hitch, Tow Hooks",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "",
        down: "$10,568",
        interest: "$11,092",
        total: "$53,365"
    },
    {
        img: "assets/img/cars/GMC70025.jpg",
        img2: "assets/img/cars/GMC2_70025.jpg",
        img3: "assets/img/cars/GMC3_70025.jpg",
        img4: "assets/img/cars/GMC4_70025.jpg",
        img5: "assets/img/cars/GMC5_70025.jpg",
        state: "New",
        year: "2022",
        name: "GMC Sierra 1500 AT4",
        brand: "GMC",
        miles: "0 mi.",
        price: "$70,025",
        payment: "$982/mo. Est.payment",
        tax: "$14,005 down |8.0% APR|72 mos",
        style: "Truck",
        exColor: "Titanium Rush Metallic",
        inColor: "Jet Black with Kalahari accents",
        drivetrain: "Four-wheel Drive",
        fuel: "Diesel",
        transmission: "10-Speed A/T",
        engine: "Straight 0 Cylinder Engine",
        VIN: "1GTUUEET4NZ589529",
        stock: "25711",
        convenience: "Adaptive Cruise Control, Keyless Start, Navigation System, Remote Start",
        entertainment: "Bluetooth, Premium Sound System, USB Port",
        exterior: "Sunroof/Moonroof, Tow Hitch, Tow Hooks",
        safety: "Automatic Emergency Braking, Backup Camera, Blind Sport Monitor, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "Leather Seats",
        down: "$14,005",
        interest: "$14,699",
        total: "$70,719"
    },
    {
        img: "assets/img/cars/GMC61690.jpg",
        img2: "assets/img/cars/GMC2_61690.jpg",
        img3: "assets/img/cars/GMC3_61690.jpg",
        img4: "assets/img/cars/GMC4_61690.jpg",
        img5: "assets/img/cars/GMC5_61690.jpg",
        state: "New",
        year: "2022",
        name: "GMC Sierria 1500 Elevation",
        brand: "GMC",
        miles: "0 mi.",
        price: "$61,690",
        payment: "$865/mo. Est.payment",
        tax: "$12,338 down |8.0% APR|72 mos",
        style: "Truck",
        exColor: "Quicksilver Metallic",
        inColor: "jet Black",
        drivetrain: "Four-wheel Drive",
        fuel: "Gasoline",
        transmission: "10-Speed A/T",
        engine: "8 Cylinder Engine",
        VIN: "1GTUUCED3NZ578177",
        stock: "25699",
        convenience: "Keyless Start, Navigation System, Remote Start",
        entertainment: "Bluetooth, USB Port",
        exterior: "Tow Hitch, Tow Hooks",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "",
        down: "$12,338",
        interest: "$12,950",
        total: "$62,302"
    },
    {
        img: "assets/img/cars/GMC56495.jpg",
        img2: "assets/img/cars/GMC2_56495.jpg",
        img3: "assets/img/cars/GMC3_56495.jpg",
        img4: "assets/img/cars/GMC4_56495.jpg",
        img5: "assets/img/cars/GMC5_56495.jpg",
        state: "New",
        year: "2022",
        name: "GMC Sierria 1500 SLE",
        brand: "GMC",
        miles: "0 mi.",
        price: "$56,495",
        payment: "$792/mo. Est.payment",
        tax: "$11,299 down |8.0% APR|72 mos",
        style: "Truck",
        exColor: "Summit White",
        inColor: "Jet Black",
        drivetrain: "Four-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed A/T",
        engine: "4 Cylinder Engine",
        VIN: "1GTPUBEK4NZ548398",
        stock: "25749",
        convenience: "Adaptive Cruise Control, Keyless Start, Navigation System,Remote Start",
        entertainment: "Bluetooth, USB Port",
        exterior: "Tow Hitch, Tow Hooks",
        safety: "Automatic Emergency Braking, Backup Camera, Blind Sport Monitor, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "",
        down: "$11,299",
        interest: "$11,859",
        total: "$57,055"
    },

    {
        img: "assets/img/cars/GMC76900.jpg",
        img2: "assets/img/cars/GMC2_76900.jpg",
        img3: "assets/img/cars/GMC3_76900.jpg",
        img4: "assets/img/cars/GMC4_76900.jpg",
        img5: "assets/img/cars/GMC5_76900.jpg",
        state: "Used",
        year: "2021",
        name: "GMC Yukon Denali",
        brand: "GMC",
        miles: "15,975 mi.",
        price: "$76,900",
        payment: "$1,079/mo. Est.payment",
        tax: "$15,380 down |8.0% APR|72 mos",
        style: 'SUV',
        exColor: "Onyx Black",
        inColor: "-",
        drivetrain: "Four-wheel Drive",
        fuel: "Gasoline",
        transmission: "10-Speed Automatic",
        engine: "6.2L V8 16V GDI OHV",
        VIN: "1GKS2DKL7MR268759",
        stock: "218759P",
        convenience: "Heated Steering Wheel, Keyless Start, Navigation System, Power Liftgate, Remote Start",
        entertainment: "Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels, Tow Hitch",
        safety: "Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$15,380",
        interest: "$16,142",
        total: "$77,662"
    },

    {
        img: "assets/img/cars/Honda30470.jpg",
        img2: "assets/img/cars/Honda2_30470.jpg",
        img3: "assets/img/cars/Honda3_30470.jpg",
        img4: "assets/img/cars/Honda4_30470.jpg",
        img5: "assets/img/cars/Honda5_30470.jpg",
        state: "New",
        year: "2022",
        name: "Honda Accord Sport 1.5T",
        brand: "Honda",
        miles: "11 mi.",
        price: "$30,470",
        payment: "$427/mo. Est.payment",
        tax: "$6,094 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Sonic Gray Pearl",
        inColor: "-",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic CVT",
        engine: "1.5L I4 16V GDI DOHC Turbo",
        VIN: "1HGCV1F33NA068351",
        stock: "NA068351",
        convenience: "Adaptive Cruise Control, Keyless Start",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, USB Port",
        exterior: "Alloy Wheels",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats",
        down: "$6,094",
        interest: "$6,396",
        total: "$30,772"
    },
    {
        img: "assets/img/cars/Honda39953.jpg",
        img2: "assets/img/cars/Honda2_39953.jpg",
        img3: "assets/img/cars/Honda3_39953.jpg",
        img4: "assets/img/cars/Honda4_39953.jpg",
        img5: "assets/img/cars/Honda5_39953.jpg",
        state: "New",
        year: "2022",
        name: "Honda Passport EX-L",
        brand: "Honda",
        miles: "1 mi.",
        price: "$39,953",
        payment: "$560/mo. Est.payment",
        tax: "$7,991 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Crystal Black Pearl",
        inColor: "Black",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "9-Speed Automatic",
        engine: "3.5L V6 24V GDI SOHC",
        VIN: "5FNYF7H51NB006621",
        stock: "H22584",
        convenience: "Adaptive Cruise Control, Heated Seats, Power Liftgate, Remote Start",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, HomeLink",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$7,991",
        interest: "$8,387",
        total: "$40,349"
    },
    {
        img: "assets/img/cars/Honda51160.jpg",
        img2: "assets/img/cars/Honda2_51160.jpg",
        img3: "assets/img/cars/Honda3_51160.jpg",
        img4: "assets/img/cars/Honda4_51160.jpg",
        img5: "assets/img/cars/Honda5_51160.jpg",
        state: "New",
        year: "2023",
        name: "Honda Odyssey Elite",
        brand: "Honda",
        miles: "- mi.",
        price: "$51,160",
        payment: "$718/mo. Est.payment",
        tax: "$10,232 down |8.0% APR|72 mos",
        style: "Passenger Van",
        exColor: "Sonic Gray Pearl",
        inColor: "-",
        drivetrain: "FWD",
        fuel: "Gasoline",
        transmission: "10-Speed Automatic",
        engine: "3.5L V6 24V GDI SOHC",
        VIN: "5FNRL6H97PB017328",
        stock: "00059822",
        convenience: "Heated Seats, Heated Steering Wheel, Navigation System, Power Liftgate",
        entertainment: "HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat, Third Row Seating",
        down: "$10,232",
        interest: "$10,739",
        total: "$51,667"
    },
    {
        img: "assets/img/cars/Honda20998.jpg",
        img2: "assets/img/cars/Honda2_20998.jpg",
        img3: "assets/img/cars/Honda3_20998.jpg",
        img4: "assets/img/cars/Honda4_20998.jpg",
        img5: "assets/img/cars/Honda5_20998.jpg",
        state: "Used",
        year: "2017",
        name: "Honda Accord Sport",
        brand: "Honda",
        miles: "70,857 mi.",
        price: "$20,998",
        payment: "$295/mo. Est.payment",
        tax: "$4,200 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Crystal Black Pearl",
        inColor: "-",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic CVT",
        engine: "2.4L I4 16V GDI DOHC",
        VIN: "1HGCR2F51HA161837",
        stock: "PC505449A",
        convenience: "",
        entertainment: "Bluetooth, USB Port",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats",
        down: "$4,200",
        interest: "$4,408",
        total: "$21,206"
    },
    {
        img: "assets/img/cars/Honda9950.jpg",
        img2: "assets/img/cars/Honda2_9950.jpg",
        img3: "assets/img/cars/Honda3_9950.jpg",
        img4: "assets/img/cars/Honda4_9950.jpg",
        img5: "assets/img/cars/Honda5_9950.jpg",
        state: "Used",
        year: "2009",
        name: "Honda Pilot EX-L",
        brand: "Honda",
        miles: "134,277 mi.",
        price: "$9,950",
        payment: "$140/mo. Est.payment",
        tax: "$1,990 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Black",
        inColor: "Gray",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "5-Speed Automatic",
        engine: "3.5L V6 24V MPFI SOHC",
        VIN: "5FNYF38579B015984",
        stock: "C1400910",
        convenience: "",
        entertainment: "HomeLink",
        exterior: "Alloy Wheels, Tow Hitch",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats, Third Row Seating",
        down: "$1,990",
        interest: "$2,089",
        total: "$10,049"
    },
    {
        img: "assets/img/cars/Honda23587.jpg",
        img2: "assets/img/cars/Honda2_23587.jpg",
        img3: "assets/img/cars/Honda3_23587.jpg",
        img4: "assets/img/cars/Honda4_23587.jpg",
        img5: "assets/img/cars/Honda5_23587.jpg",
        state: "Used",
        year: "2018",
        name: "Honda HR-V EX",
        brand: "Honda",
        miles: "33,572 mi.",
        price: "$23,587",
        payment: "$331/mo. Est.payment",
        tax: "$4,717 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "White",
        inColor: "Gray",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic CVT",
        engine: "1.8L I4 16V MPFI SOHC",
        VIN: "3CZRU5H52JM716612",
        stock: "14102",
        convenience: "Heated Seats, Keyless Start",
        entertainment: "Bluetooth, USB Port",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "",
        down: "$4,717",
        interest: "$4,951",
        total: "$23,821"
    },

    {
        img: "assets/img/cars/Lexus49000.jpg",
        img2: "assets/img/cars/Lexus2_49000.jpg",
        img3: "assets/img/cars/Lexus3_49000.jpg",
        img4: "assets/img/cars/Lexus4_49000.jpg",
        img5: "assets/img/cars/Lexus5_49000.jpg",
        state: "New",
        year: "2022",
        name: "Lexus IS 350 F Sport",
        brand: "Lexus",
        miles: "5 mi.",
        price: "$49,000",
        payment: "$687/mo. Est.payment",
        tax: "$9,800 down |8.0% APR|72 mos",
        style: 'Luxury',
        exColor: "",
        inColor: "",
        drivetrain: " Drive",
        fuel: "Gasoline",
        transmission: "",
        engine: " GDI DOHC",
        VIN: "",
        stock: "",
        convenience: "Adaptive Cruise Control, Heated Seats, Power Liftgate, Remote Start",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, HomeLink",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$",
        interest: "$",
        total: "$"
    },
    {
        img: "assets/img/cars/Lexus52414.jpg",
        img2: "assets/img/cars/Lexus2_52414.jpg",
        img3: "assets/img/cars/Lexus3_52414.jpg",
        img4: "assets/img/cars/Lexus4_52414.jpg",
        img5: "assets/img/cars/Lexus5_52414.jpg",
        state: "Used",
        year: "2022",
        name: "Lexus RX 350 F SPORT Handling",
        brand: "Lexus",
        miles: "14,373 mi.",
        price: "$52,414",
        payment: "$735/mo. Est.payment",
        tax: "$10,483 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Iridium",
        inColor: "Red",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "3.5L V6 24V PDI DOHC",
        VIN: "2T2YZMDAXNC308899",
        stock: "GS230043A",
        convenience: "Heated Seats, Heated Steering Wheel, Power Liftgate",
        entertainment: "Apple CarPlay/Android Auto, HomeLink",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Memory Seat",
        down: "$10,483",
        interest: "$11,002",
        total: "$52,933"
    },
    {
        img: "assets/img/cars/Lexus39988.jpg",
        img2: "assets/img/cars/Lexus2_39988.jpg",
        img3: "assets/img/cars/Lexus3_39988.jpg",
        img4: "assets/img/cars/Lexus4_39988.jpg",
        img5: "assets/img/cars/Lexus5_39988.jpg",
        state: "Used",
        year: "2019",
        name: "Lexus ES 300h 300H",
        brand: "Lexus",
        miles: "22,728 mi.",
        price: "$39,988",
        payment: "$561/mo. Est.payment",
        tax: "$7,998 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Blue",
        inColor: "Black",
        drivetrain: "Front-wheel Drive",
        fuel: "Hybrid",
        transmission: "Automatic CVT",
        engine: "2.5L I4 16V PDI DOHC Hybrid",
        VIN: "58AB21B12KU004260",
        stock: "PV04260",
        convenience: "Adaptive Cruise Control, Keyless Start, Remote Start",
        entertainment: "Bluetooth, HomeLink, Premium Sound System, USB Port",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "",
        down: "$7,998",
        interest: "$8,394",
        total: "$40,384"
    },
    {
        img: "assets/img/cars/Lexus19981.jpg",
        img2: "assets/img/cars/Lexus2_19981.jpg",
        img3: "assets/img/cars/Lexus3_19981.jpg",
        img4: "assets/img/cars/Lexus4_19981.jpg",
        img5: "assets/img/cars/Lexus5_19981.jpg",
        state: "Used",
        year: "2016",
        name: "Lexus IS 200t Base",
        brand: "Lexus",
        miles: "88,823 mi.",
        price: "$19,981",
        payment: "$280/mo. Est.payment",
        tax: "$3,996 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Black",
        inColor: "Red",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "2.0L I4 16V PDI DOHC Turbo",
        VIN: "JTHBA1D26G5016450",
        stock: "11994",
        convenience: "Heated Seats, Keyless Start",
        entertainment: "Bluetooth, HomeLink, Premium Sound System, USB Port",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Blind Spot Monitor, Brake Assist, Stability Control",
        seating: "Leather Seats",
        down: "$3,996",
        interest: "$4,194",
        total: "$20,179"
    },
    {
        img: "assets/img/cars/Lexus28530.jpg",
        img2: "assets/img/cars/Lexus2_28530.jpg",
        img3: "assets/img/cars/Lexus3_28530.jpg",
        img4: "assets/img/cars/Lexus4_28530.jpg",
        img5: "assets/img/cars/Lexus5_28530.jpg",
        state: "Used",
        year: "2016",
        name: "Lexus IS 350 Base",
        brand: "Lexus",
        miles: "38,381 mi.",
        price: "$28,530",
        payment: "$400/mo. Est.payment",
        tax: "$5,706 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Eminent White Pearl",
        inColor: "-",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "3.5L V6 24V PDI DOHC",
        VIN: "JTHBE1D23G5022906",
        stock: "G6484C",
        convenience: "Keyless Start",
        entertainment: "Bluetooth, HomeLink, Premium Sound System, USB Port",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, Stability Control",
        seating: "Leather Seats",
        down: "$,706",
        interest: "$5,989",
        total: "$28,813"
    },
    {
        img: "assets/img/cars/Lexus16846.jpg",
        img2: "assets/img/cars/Lexus2_16846.jpg",
        img3: "assets/img/cars/Lexus3_16846.jpg",
        img4: "assets/img/cars/Lexu4_s16846.jpg",
        img5: "assets/img/cars/Lexus5_16846.jpg",
        state: "Used",
        year: "2004",
        name: "Lexus SC 430",
        brand: "Lexus",
        miles: "95,913 mi.",
        price: "$16,846",
        payment: "$236/mo. Est.payment",
        tax: "$3,369 down |8.0% APR|72 mos",
        style: "Convertible",
        exColor: "Millennium Silver Metallic",
        inColor: "Ecru",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "5-Speed Automatic",
        engine: "4.3L V8 32V MPFI DOHC",
        VIN: "JTHFN48Y540059529",
        stock: "M4652B",
        convenience: "Heated Seats, Navigation System",
        entertainment: "HomeLink, Premium Sound System",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$3,369",
        interest: "$3,536",
        total: "$17,013"
    },
    {
        img: "assets/img/cars/Lexus23863.jpg",
        img2: "assets/img/cars/Lexus2_23863.jpg",
        img3: "assets/img/cars/Lexus3_23863.jpg",
        img4: "assets/img/cars/Lexus4_23863.jpg",
        img5: "assets/img/cars/Lexus5_23863.jpg",
        state: "Used",
        year: "2016",
        name: "Lexus NX 200t Base",
        brand: "Lexus",
        miles: "82,855 mi.",
        price: "$23,863",
        payment: "$335/mo. Est.payment",
        tax: "$4,773 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Silver Lining Metallic",
        inColor: "Black",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "6-Speed Automatic",
        engine: "2.0L I4 16V PDI DOHC Turbo",
        VIN: "JTJYARBZXG2038041",
        stock: "P10002",
        convenience: "Heated Seats, Keyless Start",
        entertainment: "Bluetooth, Premium Sound System, USB Port",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Brake Assist, LED Headlights, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$4,773",
        interest: "$5,009",
        total: "$24,099"
    },

    {
        img: "assets/img/cars/Lucid125000.jpg",
        img2: "assets/img/cars/Lucid2_125000.jpg",
        img3: "assets/img/cars/Lucid3_125000.jpg",
        img4: "assets/img/cars/Lucid4_125000.jpg",
        img5: "assets/img/cars/Lucid5_125000.jpg",
        state: "Used",
        year: "2022",
        name: "Lucid Air Grand Touring",
        brand: "Lucid",
        miles: "1,500 mi.",
        price: "$125,000",
        payment: "$1,753/mo. Est.payment",
        tax: "$25,000 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Black",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Electric",
        transmission: "A/T",
        engine: "536.0HP Electric Motor Electric Fuel System",
        VIN: "50EA1GBA3NA001138",
        stock: "",
        convenience: "Adaptive Cruise Control, Cooled Seats, Heated Seats, Heated Steering Wheel, Keyless Start, Navigation System, Power Liftgate, Remote Start",
        entertainment: "Apple CarPlay/Adroid Auto, Bluetooth, HomeLink, Premium Sound System, Rear Seat Entertainment, USB Port",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Blind Spot Monitor, Brake Assist, LED Headlights, Lane Departure Warning, Stability Control",
        seating: "Leather Seats",
        down: "$25,000",
        interest: "$26,239",
        total: "$126,239"
    },
    {
        img: "assets/img/cars/Lucid138800.jpg",
        img2: "assets/img/cars/Lucid2_138800.jpg",
        img3: "assets/img/cars/Lucid3_138800.jpg",
        img4: "assets/img/cars/Lucid4_138800.jpg",
        img5: "assets/img/cars/Lucid5_138800.jpg",
        state: "Used",
        year: "2022",
        name: "Lucid Air Grand Touring",
        brand: "Lucid",
        miles: "731 mi.",
        price: "$138,800",
        payment: "$1,947/mo. Est.payment",
        tax: "$ 27,760down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Cosmos Silver",
        inColor: "Graphite & Ceramic",
        drivetrain: "All-wheel Drive",
        fuel: "Electric",
        transmission: "1-Speed Automatic",
        engine: "Electric",
        VIN: "50EA1GBA5NA001187",
        stock: "208314",
        convenience: "Adaptive Cruise Control, Navigation System",
        entertainment: "Apple CarPlay/Adroid Auto, Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Blind Spot Monitor, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats",
        down: "$27,760",
        interest: "$29,136",
        total: "$140,176"
    },
    {
        img: "assets/img/cars/Lucid189900.jpg",
        img2: "assets/img/cars/Lucid2_189900.jpg",
        img3: "assets/img/cars/Lucid3_189900.jpg",
        img4: "assets/img/cars/Lucid4_189900.jpg",
        img5: "assets/img/cars/Lucid5_189900.jpg",
        state: "New",
        year: "2022",
        name: "Lucid Air Dream Edition",
        brand: "Lucid",
        miles: "109 mi.",
        price: "$189,900",
        payment: "$2,664/mo. Est.payment",
        tax: "$37,980 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Black",
        inColor: "Black Saddle",
        drivetrain: "All-wheel Drive",
        fuel: "Electric",
        transmission: "1-Speed Automatic",
        engine: "Electric",
        VIN: "50EA1DAA7NA002910",
        stock: "UM5671",
        convenience: "Adaptive Cruise Control, Heated Seats, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Blind Sport Monitor, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$37,980",
        interest: "$39,863",
        total: "$191,783"
    },
    {
        img: "assets/img/cars/Lucid133900.jpg",
        img2: "assets/img/cars/Lucid2_133900.jpg",
        img3: "assets/img/cars/Lucid3_133900.jpg",
        img4: "assets/img/cars/Lucid4_133900.jpg",
        img5: "assets/img/cars/Lucid5_133900.jpg",
        state: "New",
        year: "2022",
        name: "Lucid Air Grand Touring",
        brand: "Lucid",
        miles: "1,519 mi.",
        price: "$133,900",
        payment: "$1,878/mo. Est.payment",
        tax: "$26,780 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Stellar White",
        inColor: "Graphite & Ceramic",
        drivetrain: "All-wheel Drive",
        fuel: "Electric",
        transmission: "1-Speed Automatic",
        engine: "Electric",
        VIN: "50EA1GBA3NA004637",
        stock: "CMT223409A",
        convenience: "Adaptive Cruise Control, Heated Seats, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Blind Sport Monitor, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$26,780",
        interest: "$28,108",
        total: "$135,228"
    },
    {
        img: "assets/img/cars/Lucid138749.jpg",
        img2: "assets/img/cars/Lucid2_138749.jpg",
        img3: "assets/img/cars/Lucid3_138749.jpg",
        img4: "assets/img/cars/Lucid4_138749.jpg",
        img5: "assets/img/cars/Lucid5_138749.jpg",
        state: "Used",
        year: "2022",
        name: "Lucid Air Grand Touring",
        brand: "Lucid",
        miles: "212 mi.",
        price: "$138,749",
        payment: "$1,946/mo. Est.payment",
        tax: "$27,750 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Stellar White",
        inColor: "Graphite & Ceramic",
        drivetrain: "All-wheel Drive",
        fuel: "Electric",
        transmission: "1-Speed Automatic",
        engine: "Electric",
        VIN: "50EA1GBAXNA001573",
        stock: "CPE5403A",
        convenience: "Adaptive Cruise Control, Heated Seats, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Blind Sport Monitor, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$27,750",
        interest: "$29,125",
        total: "$140,124"
    },
    {
        img: "assets/img/cars/Lucid147895.jpg",
        img2: "assets/img/cars/Lucid2_147895.jpg",
        img3: "assets/img/cars/Lucid3_147895.jpg",
        img4: "assets/img/cars/Lucid4_147895.jpg",
        img5: "assets/img/cars/Lucid5_147895.jpg",
        state: "New",
        year: "2022",
        name: "Lucid Air Grand Touring",
        brand: "Lucid",
        miles: "1,871 mi.",
        price: "$147,895",
        payment: "$2,074/mo. Est.payment",
        tax: "$29,579 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Infinite Black",
        inColor: "Lucid Black & Saddle",
        drivetrain: "All-wheel Drive",
        fuel: "Electric",
        transmission: "1-Speed Automatic",
        engine: "Electric Motor",
        VIN: "50EA1GBA1NA002286",
        stock: "CON1101",
        convenience: "Adaptive Cruise Control, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Blind Sport Monitor, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "",
        down: "$29,579",
        interest: "$31,045",
        total: "$149,361"
    },

    {
        img: "assets/img/cars/Mazda36651.jpg",
        img2: "assets/img/cars/Mazda2_36651.jpg",
        img3: "assets/img/cars/Mazda3_36651.jpg",
        img4: "assets/img/cars/Mazda4_36651.jpg",
        img5: "assets/img/cars/Mazda5_36651.jpg",
        state: "New",
        year: "2022",
        name: "Mazda CX-5 2.5 Turbo Signature",
        brand: "Mazda",
        miles: "1,266 mi.",
        price: "$36,651",
        payment: "$514/mo. Est.payment",
        tax: "$7,330 down |8.0% APR|72 mos",
        style: 'SUV',
        exColor: "Deep Crystal Blue Mica",
        inColor: "Caturra Brown",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "6-Speed Automatic",
        engine: "2.5L I4 16V GDI DOHC Turbo",
        VIN: "JM3KFBXY6N0640579",
        stock: "N0640579",
        convenience: "Adaptive Cruise Control, Heated Steering Wheel, Keyless Start, Navigation System, Power Liftgate, Remote Start",
        entertainment: "Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$7,330",
        interest: "$7,694",
        total: "$37,015"
    },
    {
        img: "assets/img/cars/Mazda44630.jpg",
        img2: "assets/img/cars/Mazda2_44630.jpg",
        img3: "assets/img/cars/Mazda3_44630.jpg",
        img4: "assets/img/cars/Mazda4_44630.jpg",
        img5: "assets/img/cars/Mazda5_44630.jpg",
        state: "New",
        year: "2023",
        name: "Mazda CX-50 2.5 Turbo Premium Plus Package",
        brand: "Mazda",
        miles: "2 mi.",
        price: "$44,630",
        payment: "$626/mo. Est.payment",
        tax: "$8,926 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Polymetal Gray Metallic",
        inColor: "Terracotta",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "2.5L I4 16V GDI DOHC Turbo",
        VIN: "7MMVABEY3PN125178",
        stock: "13N1923",
        convenience: "Adaptive Cruise Control, Heated Seats, Heated Steering Wheel, Keyless Start, Navigation System, Power Liftgate, Remote Start",
        entertainment: "Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, LED Headlights",
        seating: "Leather Seats, Memory Seat",
        down: "$8,926",
        interest: "$9,368",
        total: "$45,072"
    },
    {
        img: "assets/img/cars/Mazda38930.jpg",
        img2: "assets/img/cars/Mazda2_38930.jpg",
        img3: "assets/img/cars/Mazda3_38930.jpg",
        img4: "assets/img/cars/Mazda4_38930.jpg",
        img5: "assets/img/cars/Mazda5_38930.jpg",
        state: "New",
        year: "2023",
        name: "Mazda CX-50 2.5 S Premium Plus Package",
        brand: "Mazda",
        miles: "6 mi.",
        price: "$38.930",
        payment: "$546/mo. Est.payment",
        tax: "$7,786 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Wind Chill Pearl",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "6-Speed Automatic",
        engine: "2.5L I4 16V GDI DOHC",
        VIN: "7MMVABEMXPN124316",
        stock: "13N1921",
        convenience: "Adaptive Cruise Control, Heated Seats, Keyless Start, Power Liftgate, Remote Start",
        entertainment: "Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Blind Sport Monitor, Brake Assist, LED Headlights, Lane Departure Warning, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$7,786",
        interest: "$8,172",
        total: "$30,316"
    },
    {
        img: "assets/img/cars/Mazda34570.jpg",
        img2: "assets/img/cars/Mazda2_34570.jpg",
        img3: "assets/img/cars/Mazda3_34570.jpg",
        img4: "assets/img/cars/Mazda4_34570.jpg",
        img5: "assets/img/cars/Mazda5_34570.jpg",
        state: "New",
        year: "2023",
        name: "Mazda CX-50 2.5 S Preferred Plus Package",
        brand: "Mazda",
        miles: "6 mi.",
        price: "$34,570",
        payment: "$485/mo. Est.payment",
        tax: "$6,914 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Desert Wind",
        inColor: "Gray",
        drivetrain: "AWD",
        fuel: "Gasoline",
        transmission: "Automatic",
        engine: "2.5L I4 16V GDI DOHC",
        VIN: "7MMVABCM8PN126553",
        stock: "13N1925",
        convenience: "Adaptive Cruise Control, Heated Seats, Keyless Start, Power Liftgate, Remote Start",
        entertainment: "Bluetooth",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Blind Sport Monitor, Brake Assist, LED Headlights, Lane Departure Warning, Stability Control",
        seating: "",
        down: "$6,914",
        interest: "$7,257",
        total: "$34,913"
    },
    {
        img: "assets/img/cars/Mazda30175.jpg",
        img2: "assets/img/cars/Mazda2_30175.jpg",
        img3: "assets/img/cars/Mazda3_30175.jpg",
        img4: "assets/img/cars/Mazda4_30175.jpg",
        img5: "assets/img/cars/Mazda5_30175.jpg",
        state: "Used",
        year: "2021",
        name: "Mazda CX-5 Touring",
        brand: "Mazda",
        miles: "30,175 mi.",
        price: "$30,175",
        payment: "$423/mo. Est.payment",
        tax: "$6,035 down |8.0% APR|72 mos",
        style: "SUV",
        exColor: "Jet Black Mica",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "6-Speed Automatic",
        engine: "2.5L I4 16V GDI DOHC",
        VIN: "JM3KFBCM0M0343700",
        stock: "KWC22046",
        convenience: "Adaptive Cruise Control, Heated Seats, Keyless Start, Remote Start",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth, USB Port",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "Leather Seats",
        down: "$6,035",
        interest: "$6,334",
        total: "$30,474"
    },
    {
        img: "assets/img/cars/Mazda24950.jpg",
        img2: "assets/img/cars/Mazda2_24950.jpg",
        img3: "assets/img/cars/Mazda3_24950.jpg",
        img4: "assets/img/cars/Mazda4_24950.jpg",
        img5: "assets/img/cars/Mazda5_24950.jpg",
        state: "Used",
        year: "2018",
        name: "Mazda MX-5 Miata Club",
        brand: "Mazda",
        miles: "23,617 mi.",
        price: "$24,950",
        payment: "$350/mo. Est.payment",
        tax: "$4,990 down |8.0% APR|72 mos",
        style: "Convertible",
        exColor: "Jet Black Mica",
        inColor: "Black",
        drivetrain: "rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "6-Speed Automatic",
        engine: "2.0L I4 16V GDI DOHC",
        VIN: "JM1NDAC75J0205372",
        stock: "205372",
        convenience: "Keyless Start",
        entertainment: "Bluetooth, Premium Sound System, USB Port",
        exterior: "Alloy Wheels",
        safety: "Brake Assist, Rear Cross Traffic Alert, Stability Control",
        seating: "",
        down: "$4,990",
        interest: "$5,237",
        total: "$25,197"
    },
    {
        img: "assets/img/cars/Mazda31247.jpg",
        img2: "assets/img/cars/Mazda2_31247.jpg",
        img3: "assets/img/cars/Mazda3_31247.jpg",
        img4: "assets/img/cars/Mazda4_31247.jpg",
        img5: "assets/img/cars/Mazda5_31247.jpg",
        state: "Used",
        year: "2019",
        name: "Mazda MX-5 Miata RF Club",
        brand: "Mazda",
        miles: "10,072 mi.",
        price: "$31,247",
        payment: "$438/mo. Est.payment",
        tax: "$6,249 down |8.0% APR|72 mos",
        style: "Coupe",
        exColor: "Arctic White",
        inColor: "Black",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "6-Speed Manual",
        engine: "2.0L I4 16V GDI DOHC",
        VIN: "JM1NDAL71K0306264",
        stock: "S39925T",
        convenience: "Heated Seats, Keyless Start",
        entertainment: "Bluetooth, Premium Sound System, USB Port",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Rear Cross Traffic Alert, Stability Control",
        seating: "",
        down: "$6,249",
        interest: "$6,559",
        total: "$31,557"
    },

    {
        img: "assets/img/cars/MINI35075.jpg",
        img2: "assets/img/cars/MINI2_35075.jpg",
        img3: "assets/img/cars/MINI3_35075.jpg",
        img4: "assets/img/cars/MINI4_35075.jpg",
        img5: "assets/img/cars/MINI5_35075.jpg",
        state: "New",
        year: "2023",
        name: "MINI SE Hardtop Cooper",
        brand: "MINI",
        miles: "7 mi.",
        price: '$35,075',
        payment: "$492/mo. Est.payment",
        tax: "$7,015 down |8.0% APR|72 mos",
        style: 'Hatchback',
        exColor: "Moonwalk Gray Metallic",
        inColor: "Black Pearl",
        drivetrain: "Front-wheel Drive",
        fuel: "Electric",
        transmission: "Automatic",
        engine: "Electric",
        VIN: "WMW13DJ00P2T31366",
        stock: "M16255",
        convenience: "Heated Seats, Keyless Start, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "",
        down: "$7,015",
        interest: "$7,363",
        total: "$35,423"
    },

    {
        img: "assets/img/cars/MINI47275.jpg",
        img2: "assets/img/cars/MINI2_47275.jpg",
        img3: "assets/img/cars/MINI3_47275.jpg",
        img4: "assets/img/cars/MINI4_47275.jpg",
        img5: "assets/img/cars/MINI5_47275.jpg",
        state: "New",
        year: "2023",
        name: "MINI SE Countryman Cooper ALL4",
        brand: "MINI",
        miles: "5 mi.",
        price: '$47,2725',
        payment: "$663/mo Est.payment",
        tax: "$9,455 down |8.0% APR|72 mos",
        style: 'Sedan',
        exColor: "Island Blue",
        inColor: "Gray",
        drivetrain: "All-wheel Drive",
        fuel: "Hybrid",
        transmission: "6-Speed Automatic with Steptronic",
        engine: "1.5L I3 12V GDI DOHC Turbo Hybrid",
        VIN: "WMZ23BS05P3P78960",
        stock: "M40785",
        convenience: "Heated Seats, Heated Steering Wheel, Navigation System",
        entertainment: "Bluetooth, HomeLink",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Brake Assist, Stability Control",
        seating: "Leather Seats",
        down: "$9,455",
        interest: "$9,924",
        total: "$47,744"
    },

    {
        img: "assets/img/cars/MINI37988.jpg",
        img2: "assets/img/cars/MINI2_37988.jpg",
        img3: "assets/img/cars/MINI3_37988.jpg",
        img4: "assets/img/cars/MINI4_37988.jpg",
        img5: "assets/img/cars/MINI5_37988.jpg",
        state: "Used",
        year: "2021",
        name: "MINI SE Countryman Cooper ALL4",
        brand: "MINI",
        miles: "12,834 mi.",
        price: "$37,988",
        payment: "$533/mo. Est.payment",
        tax: "$7,598 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "British Racing Green",
        inColor: "Carbon Black",
        drivetrain: "All-wheel Drive",
        fuel: "Hybrid",
        transmission: "6-Speed Automatic",
        engine: "1.5L I3 12V GDI DOHC Turbo Hybrid ",
        VIN: "WMZ23BS09M3M61467",
        stock: "S242107A",
        convenience: "Keyless Start",
        entertainment: "Bluetooth, USB Port",
        exterior: "Alloy Wheels",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats",
        down: "$7,598",
        interest: "$7,974",
        total: "$38,364"
    },
    {
        img: "assets/img/cars/MINI9995.jpg",
        img2: "assets/img/cars/MINI2_9995.jpg",
        img3: "assets/img/cars/MINI3_9995.jpg",
        img4: "assets/img/cars/MINI4_9995.jpg",
        img5: "assets/img/cars/MINI5_9995.jpg",
        state: "Used",
        year: "2007",
        name: "MINI Cooper",
        brand: "MINI",
        miles: "50,179 mi.",
        price: "$9,995",
        payment: "$140/mo. Est.payment",
        tax: "$1,999 down |8.0% APR|72 mos",
        style: "Coupe",
        exColor: "Gray",
        inColor: "Black",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "6-Speed Automatic",
        engine: "1.6L I4 16V MPFI SOHC",
        VIN: "WMWMF33537TT55842",
        stock: "T55842",
        convenience: "",
        entertainment: "",
        exterior: "Alloy Wheels",
        safety: "Brake Assist",
        seating: "Leather Seats",
        down: "$1,999",
        interest: "$2,098",
        total: "$10,094"
    },
    {
        img: "assets/img/cars/MINI38800.jpg",
        img2: "assets/img/cars/MINI2_38800.jpg",
        img3: "assets/img/cars/MINI3_38800.jpg",
        img4: "assets/img/cars/MINI4_38800.jpg",
        img5: "assets/img/cars/MINI5_38800.jpg",
        state: "New",
        year: "2023",
        name: "MINI SE Hardtop Cooper",
        brand: "MINI",
        miles: "16 mi.",
        price: '$38,800',
        payment: "$544/mo Est.payment",
        tax: "$7,760 down |8.0% APR|72 mos",
        style: 'Hatchback',
        exColor: "C19 / JOHNCOOPERW",
        inColor: "-",
        drivetrain: "Front-wheel Drive",
        fuel: "Electric",
        transmission: "Automatic",
        engine: "Electric",
        VIN: "WMW13DJ02P2T42837",
        stock: "P2T42837",
        convenience: "Heated Seats, Keyless Start, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "",
        down: "$7,760",
        interest: "$8,145",
        total: "$39,185"
    },

    {
        img: "assets/img/cars/MINI35746.jpg",
        img2: "assets/img/cars/MINI2_35746.jpg",
        img3: "assets/img/cars/MINI3_35746.jpg",
        img4: "assets/img/cars/MINI4_35746.jpg",
        img5: "assets/img/cars/MINI5_35746.jpg",
        state: "Used",
        year: "2020",
        name: "MINI Countryman Cooper S ALL4",
        brand: "MINI",
        miles: "19,500 mi.",
        price: '$35.746',
        payment: "$501/mo. Est.payment",
        tax: "$7,149 down |8.0% APR|72 mos",
        style: 'SUV',
        exColor: "Midnight Black Metallic",
        inColor: "Carbon Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "2.0L I4 16V GDI DOHC Turbo",
        VIN: "WMZYX1C08L3L44646",
        stock: "U3989",
        convenience: "Heated Seats, Keyless Start",
        entertainment: "Bluetooth, USB Port",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats",
        down: "$7,149",
        interest: "$7,504",
        total: "$36,101"
    },

    {
        img: "assets/img/cars/MINI35650.jpg",
        img2: "assets/img/cars/MINI2_35650.jpg",
        img3: "assets/img/cars/MINI3_35650.jpg",
        img4: "assets/img/cars/MINI4_35650.jpg",
        img5: "assets/img/cars/MINI5_35650.jpg",
        state: "New",
        year: "2023",
        name: "MINI Hardtop Cooper S",
        brand: "MINI",
        miles: "12 mi.",
        price: "$35,650",
        payment: "$500/mo Est.payment",
        tax: "$7,130 down |8.0% APR|72 mos",
        style: 'Hatchback',
        exColor: "White Silver Metallic",
        inColor: "Carbon Black",
        drivetrain: "Front-wheel Drive",
        fuel: "Electric",
        transmission: "1-Speed Automatic",
        engine: "Electric Motor",
        VIN: "WMW13DJ02P2S79223",
        stock: "M12250",
        convenience: "Heated Seats, Keyless Start, Navigation System",
        entertainment: "Apple CarPlay/Android Auto, Bluetooth,  Premium Sound System, USB Port",
        exterior: "Sunroof/Moonroof",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Daparture Warning, Stability Control",
        seating: "Leather Seats",
        down: "$7,130",
        interest: "$7,483",
        total: "$36,003"
    },
    {
        img: "assets/img/cars/Rolls239900.jpg",
        img2: "assets/img/cars/Rolls2_239900.jpg",
        img3: "assets/img/cars/Rolls3_239900.jpg",
        img4: "assets/img/cars/Rolls4_239900.jpg",
        img5: "assets/img/cars/Rolls5_239900.jpg",
        state: "Used",
        year: "2019",
        name: "Rolls-Royce Ghost",
        brand: "Rolls-Royce",
        miles: "25,426 mi.",
        price: "$239,900",
        payment: "$3,365/mo. Est.payment",
        tax: "$47,980 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Black Diamond",
        inColor: "Black",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "6.6L V12 48V GDI DOHC Twin Turbo",
        VIN: "SCA664S53KUX54635",
        stock: "MU1181",
        convenience: "Heated Seats, Navigation System, Remote Start",
        entertainment: "Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$47,980",
        interest: "$50,359",
        total: "$242,279"
    },
    {
        img: "assets/img/cars/Rolls274500.jpg",
        img2: "assets/img/cars/Rolls2_274500.jpg",
        img3: "assets/img/cars/Rolls3_274500.jpg",
        img4: "assets/img/cars/Rolls4_274500.jpg",
        img5: "assets/img/cars/Rolls5_274500.jpg",
        state: "Used",
        year: "2018",
        name: "Rolls-Royce Wraith",
        brand: "Rolls-Royce",
        miles: "20,104 mi.",
        price: "$274,500",
        payment: "$3,850/mo. Est.payment",
        tax: "$54,900 down |8.0% APR|72 mos",
        style: "Coupe",
        exColor: "Arctic White",
        inColor: "Seashell",
        drivetrain: "Rear-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "6.6L V12 48V GDI DOHC Twin Turbo",
        VIN: "SCA665C59JUX86895",
        stock: "AM13101A",
        convenience: "Heated Seats, Navigation System",
        entertainment: "Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$54,900",
        interest: "$57,622",
        total: "$277,222"
    },
    {
        img: "assets/img/cars/Rolls359500.jpg",
        img2: "assets/img/cars/Rolls2_359500.jpg",
        img3: "assets/img/cars/Rolls3_359500.jpg",
        img4: "assets/img/cars/Rolls4_359500.jpg",
        img5: "assets/img/cars/Rolls5_359500.jpg",
        state: "Used",
        year: "2021",
        name: "Rolls-Royce Ghost",
        brand: "Rolls-Royce",
        miles: "3,345 mi.",
        price: "$395,500",
        payment: "$5,043/mo. Est.payment",
        tax: "$71,900 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "Jubilee Silver",
        inColor: "Black Cashmere",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "8_speed Automatic",
        engine: "6.7L V12 48V GDI DOHC Twin Turbo",
        VIN: "SCATV0C03MU207045",
        stock: "U13107",
        convenience: "Heated Seats, Navigation System, Remote Start",
        entertainment: "Bluetooth, Premium Sound System",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "Leather Seats, Memory Seat",
        down: "$71,900",
        interest: "$75,464",
        total: "$363,064"
    },
    {
        img: "assets/img/cars/Toyota31971.jpg",
        img2: "assets/img/cars/Toyota2_31971.jpg",
        img3: "assets/img/cars/Toyota3_31971.jpg",
        img4: "assets/img/cars/Toyota4_31971.jpg",
        img5: "assets/img/cars/Toyota5_31971.jpg",
        state: "New",
        year: "2022",
        name: "Toyota RAV4 Hybrid LE",
        brand: "Toyota",
        miles: "16 mi.",
        price: "$31,971",
        payment: "$448/mo. Est.payment",
        tax: "$6,394 down |8.0% APR|72 mos",
        style: 'SUV',
        exColor: "White",
        inColor: "-",
        drivetrain: "All-wheel Drive",
        fuel: "Hybrid",
        transmission: "Automatic CVT",
        engine: "2.5L I4 16V PDI DOHC Hybrid",
        VIN: "JTMLWRFV2ND154728",
        stock: "N125FK83",
        convenience: "",
        entertainment: "Apple CarPlay/Android Auto",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "",
        down: "$6,394",
        interest: "$6,711",
        total: "$32,288"
    },

    {
        img: "assets/img/cars/Toyota31991.jpg",
        img2: "assets/img/cars/Toyota2_31991.jpg",
        img3: "assets/img/cars/Toyota3_31991.jpg",
        img4: "assets/img/cars/Toyota4_31991.jpg",
        img5: "assets/img/cars/Toyota5_31991.jpg",
        state: "Used",
        year: "2022",
        name: "Toyota RAV4 XLE Premium",
        brand: "Toyota",
        miles: "28,670 mi.",
        price: "$31,991",
        payment: "$435/mo. Est.payment",
        tax: "$6,198 down |8.0% APR|72 mos",
        style: 'Sedan',
        exColor: "Super White",
        inColor: "Black",
        drivetrain: "All-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "2.5L I4 16V PDI DOHC",
        VIN: "2T3A1RFV1KW074423",
        stock: "MD617980A",
        convenience: "Adaptive Cruise Control, Keyless Start, Power Liftgate",
        entertainment: "Bluetooth, USB Port",
        exterior: "Alloy Wheels",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "Leather Seats",
        down: "$6,198",
        interest: "$6,506",
        total: "$31,299"
    },
    {
        img: "assets/img/cars/Toyota36793.jpg",
        img2: "assets/img/cars/Toyota2_36793.jpg",
        img3: "assets/img/cars/Toyota3_36793.jpg",
        img4: "assets/img/cars/Toyota4_36793.jpg",
        img5: "assets/img/cars/Toyota5_36793.jpg",
        state: "Used",
        year: "2020",
        name: "Toyota Camry XSE V6",
        brand: "Toyota",
        miles: "21,389 mi.",
        price: "$36,793",
        payment: "$516/mo. Est.payment",
        tax: "$7,359 down |8.0% APR|72 mos",
        style: "Sedan",
        exColor: "White",
        inColor: "Black",
        drivetrain: "Front-wheel Drive",
        fuel: "Gasoline",
        transmission: "8-Speed Automatic",
        engine: "3.5L V6 24V PDI DOHC",
        VIN: "4T1KZ1AKXLU046397",
        stock: "PL46397",
        convenience: "Adaptive Cruise Control, Heated Seats, Remote Start",
        entertainment: "Apple Carplay/Android Auto, Bluetooth, HomeLink, Premium Sound System",
        exterior: "Alloy Wheels, Sunroof/Moonroof",
        safety: "Backup Camera, Brake Assist, Lane Departure Warning, Stability Control",
        seating: "Leather Seats",
        down: "$7,359",
        interest: "$7,723",
        total: "$37,157"
    },
    {
        img: "assets/img/cars/Toyota32000.jpg",
        img2: "assets/img/cars/Toyota2_32000.jpg",
        img3: "assets/img/cars/Toyota3_32000.jpg",
        img4: "assets/img/cars/Toyota4_32000.jpg",
        img5: "assets/img/cars/Toyota5_32000.jpg",
        state: "Used",
        year: "2019",
        name: "Toyota Prius XLE",
        brand: "Toyota",
        miles: "4,142 mi.",
        price: "$32,000",
        payment: "$449/mo. Est.payment",
        tax: "$6,400 down |8.0% APR|72 mos",
        style: "Hatchback",
        exColor: "Silver",
        inColor: "Moonstone",
        drivetrain: "Front-wheel Drive",
        fuel: "Hybrid",
        transmission: "Automatic CVT",
        engine: "1.8L I4 16V MPFI DOHC Hybrid",
        VIN: "JTDKARFU9K3095227",
        stock: "P095227",
        convenience: "Adaptive Cruise Control, Heated Seats, Heated Steering Wheel, Keyless Start",
        entertainment: "Bluetooth, USB Port",
        exterior: "Alloy Wheels",
        safety: "Automatic Emergency Braking, Backup Camera, Brake Assist, Lane Departure Warning, Rear Cross Traffic Alert, Stability Control",
        seating: "Leather Seats",
        down: "$6,400",
        interest: "$6,717",
        total: "$32,317"
    },
    {
        img: "assets/img/cars/Toyota60217.jpg",
        img2: "assets/img/cars/Toyota2_60217.jpg",
        img3: "assets/img/cars/Toyota3_60217.jpg",
        img4: "assets/img/cars/Toyota4_60217.jpg",
        img5: "assets/img/cars/Toyota5_60217.jpg",
        state: "New",
        year: "2023",
        name: "Toyota Tundra SR5",
        brand: "Toyota",
        miles: "5 mi.",
        price: "$60,217",
        payment: "$845/mo. Est.payment",
        tax: "$12,043 down |8.0% APR|72 mos",
        style: "Truck",
        exColor: "White",
        inColor: "-",
        drivetrain: "Four-wheel Drive",
        fuel: "Gasoline",
        transmission: "10-Speed Automatic",
        engine: "3.5L V6",
        VIN: "5TFLA5DBXPX059125",
        stock: "T27007",
        convenience: "",
        entertainment: "Apple CarPlay/Android Auto",
        exterior: "Alloy Wheels",
        safety: "Backup Camera, Brake Assist, Stability Control",
        seating: "",
        down: "$12,043",
        interest: "$12,641",
        total: "$60,815"
    }
];

app.controller("myControl", function($scope, $window){
    $scope.cars = db;

    $scope.showDetails = function(car){
        window.scrollTo(0,0);
        var html = 
        `<nav style="z-index: 1000;">
        <div class="support">
            <a class="a-reset" onclick="showhide('support-menu')">
                <b>Suppport & Contact Us</b>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </a>

            <ul id="support-menu" style="display: none;">
                <li>
                    <a href="mailto:Support@carbreezy.com"><i class="fa fa-envelope-o"
                            aria-hidden="true"></i>Support@carbreezy.com</a>
                </li>
                <li>
                    <a href="tel:(253) 289-5242"><i class="fa fa-phone" aria-hidden="true"></i>(253) 289-5242</a>
                </li>
            </ul>
        </div>

        <div class="navbar">
            <a href="Home.html">
                <div class="brand"></div>
            </a>
            <ul id="navbar-menu">
                <li class="navbar-menu-title" style="display: none;">
                    <b>Menu</b>
                    <i class="fa fa-times" id="navbar-menu-close" aria-hidden="true"
                        onclick="showhideMenu('navbar-menu')"></i>
                </li>
                <li><a href="Home.html"><i class="fa fa-home"></i> Home</a></li>
                <li><a href="sell.html"><i class="fa fa-shopping-cart"></i> Sell Your Car</a></li>
                <li><a href="Home.html#whyCarBreezy"><i class="fa fa-truck"></i> Why Carbreezy</a></li>
                <li><a href="Offers.html"><i class="fa fa-gift"></i> Offers</a></li>
                <li><a href="#contactUS"><i class="fa fa-telegram"></i> Contact Us</a></li>
                <li><a href="AboutUs.html"><i class="fa fa-info"></i> About Us</a></li>

                <li class="supportResponsive" onclick="showhideResponsiveSupport()" style="display: none;">
                    <a class="a-reset">
                        <b>Support & Contact Us</b>
                        <i class="fa fa-angle-down cursor" aria-hidden="true"></i>
                    </a>

                </li>
                <li id="support-menu-responsive" style="display: none;">
                    <a style="border-bottom: 1px solid #dadada;" href="mailto:Support@carbreezy.com"><i
                            class="fa fa-envelope-o" aria-hidden="true"></i>Support@carbreezy.com</a>
                    <a href="tel:1-253-289-5242"><i class="fa fa-phone" aria-hidden="true"></i>1-253-289-5242</a>
                </li>

            </ul>

            <div class="navbar-menu-icon cursor" id="navbar-menu-icon" style="display: none;"
                onclick="showhideMenu('navbar-menu-icon');">
                <i class="fa fa-bars" aria-hidden="true" id="navbar-menu-icon-i"></i>
            </div>
        </div>
    </nav>

    <div style="margin-top: 105px;">
        <pre style="margin: 0px 20px 0px 30px">${car.state} | 30 views</pre>
    </div>

    <div>
        <div style="display: flex; text-align: center;">
            <img class="cardetal" src="${car.img}" id="detailShow">
            <table class="Overview">
                <tr><th colspan="2">Vehicle Overview</th></tr>
                    <tr>
                        <td>Exterior Color</td>
                        <th>${car.exColor}</th>
                    </tr>
                    <tr>
                        <td>Interior Color</td>
                        <th>${car.inColor}</th>
                    </tr>
                    <tr>
                        <td>Drivetrain</td>
                        <th>${car.drivetrain}</th>
                    </tr>
                    <tr>
                        <td>Fuel Type</td>
                        <th>${car.fuel}</th>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <th>${car.transmission}</th>
                    </tr>
                    <tr>
                        <td>Engine</td>
                        <th>${car.engine}</th>
                    </tr>
                    <tr>
                        <td>VIN</td>
                        <th>${car.VIN}</th>
                    </tr>
                    <tr>
                        <td>Stock #</td>
                        <th>${car.stock}</th>
                    </tr>
                    <tr>
                        <td>Mileage</td>
                        <th>${car.miles}</th>
                    </tr>
                </table>
        </div>
    </div>
        <div style="display: flex;">
            <div style="display: flex; margin:20px 0px 20px 30px;">
                <div class="deta img-deta1"><img ng-click="moveDetail_img(${car.img})" src="${car.img}" width="226px" height="150px"></div>
                <div class="deta img-deta2"><img ng-click="moveDetail_img(${car.img3})" src="${car.img3}" width="226px" height="150px"></div>
                <div class="deta img-deta3"><img ng-click="moveDetail_img(${car.img4})" src="${car.img4}" width="226px" height="150px"></div>
                <div class="deta img-deta4"><img ng-click="moveDetail_img(${car.img5})" src="${car.img5}" width="226px" height="150px"></div>
            </div>
            <section class="parameter">
                <p  style="margin-bottom: 1px;">${car.state}</p>
                <h4>${car.year} ${car.name}</h4>
                <p style="margin-bottom: 1px;">${car.miles}</p>
                <h2>${car.price}</h2>
            </section>
        </div>
        <form name="myForm">
            <table class="ctseller">
                <tr>
                    <td colspan="2"><h1 class="contactSeller">Contact Seller</h1></td>
                </tr>
                <tr>
                    <td>
                        <input type="text" class="ftname" ng-model="fname" name="fname" id="ftname" placeholder="First Name" required>
                    </td>  
                    <td><div class="">
                        <p id="fname" style="display: none; color: red;" class="">First name is required.</p>
                    </div></td>
                </tr>
                <tr>
                    <td>
                        <input type="text" class="ltname" ng-model="lname" name="lname" id="ltname" placeholder="Last Name" required>
                    </td>        
                    <td><div class="">
                        <p id="lname" style="display: none; color: red;" class="">Last name is required.</p>
                    </div></td>
                </tr>
                <tr>
                    <td>
                        <input type="email" class="email" id="txtemail" placeholder="Email" required>
                    </td>
                    <td>
                        <p id="email" style="display: none; color: red;" class="">Email is required and must valid.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" class="phone" id="txtphonenum" placeholder="Phone (optional)" required>
                    </td>
                    <td>
                        <p id="phonenum" style="display: none; color: red;" class="">Phone number is required.</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><select class="lscheck" id="lscheck" style="width:90%">
                        <option value="">Check Availability</option>
                        <option value="">Check home delivery options</option>
                        <option value="">Request virtual appoinment</option>
                        <option value="">Get a price quote</option>
                        <option value="">Schedule a test drive</option>
                        <option value="">Discuss finacing</option>
                        <option value="">Ask a question </option>
                    </select></td>
                </tr>
                <tr>
                    <td colspan="2"><textarea style="width:90%; box-sizing:inherit;">I'd like to know if the ${car.name} you have listed on CarBreezy for ${car.price} is still available.</textarea></td>
                </tr>
                <tr>
                    <td><input type="checkbox" ng-disabled="checkseller.$checked"> I agree to the transaction</td>
                </tr>
                <tr>
                    <td><input type="submit" class="checkseller" value="Send" onclick="send()"></td>
                </tr>
            </table>
        </form>

        <div style="display:flex;">
            <div class="feature">
                <h5>Features</h5>
                <table class="table table-bordered">
                    <tr>
                        <td>Convenience</td>
                        <th>${car.convenience}</th>
                    </tr><tr>
                        <td>Entertainment</td>
                        <th>${car.entertainment}</th>
                    </tr><tr>
                        <td>Exterior</td>
                        <th>${car.exterior}</th>
                    </tr><tr>
                        <td>Safety</td>
                        <th>${car.safety}</th>
                    </tr><tr>
                        <td>Seating</td>
                        <th>${car.seating}</th>
                    </tr>
                </table>
            </div>
            <div class="payment">
                <h5 style="background-color:#dadada">Customize your payment</h5>
                <table class="table table-bordered">
                    <tr>
                        <td>Car price</td>
                        <th>${car.price}</th>
                    </tr><tr>
                        <td>Down payment</td>
                        <th>${car.down}</th>
                    </tr><tr>
                        <td>Total interest paid</td>
                        <th>${car.interest}</th>
                    </tr><tr>
                        <td>Total</td>
                        <th>${car.total}</th>
                    </tr>
                </table>
            </div>
        </div>
        <div style="text-align:center;">
            <h2>You're CarBreezy Covered</h2>
            <pre>CarBreezy makes it easy before, during, and after your purchase</pre>
        </div>

        <div style="display: flex; padding: 64px 100px; background-color: #dadada;">
        <div>
            <h4>72-Hour Guaranteed Delivery</h4>
            <p>Less time waiting for delivery means more time behind the wheel of your new car!</p>
        </div>
        <div>
            <h4>Lifetime Powertrain Warranty</h4>
            <p>No more worrying about maintenance when you're covered by CarBreezy</p>
        </div>
        <div>
            <h4>Delivery or Pickup?</h4>
            <p>Tell us when and where to deliver your car. Or pick it up at the dealer. Your choice!</p>
        </div>
    </div>

    <footer class="text-center text-lg-start bg-white text-muted">
        
        <!-- Section: Social media -->
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <!-- Left -->
            <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            <div>
                
            </div>
            <!-- Left -->

            <!-- Right -->
            <div>
                <a href="" class="me-4 link-secondary a-reset">
                    <i class="fa fa-facebook-f"></i>
                </a>
                <a href="" class="me-4 link-secondary a-reset">
                    <i class="fa fa-twitter"></i>
                </a>
                <a href="" class="me-4 link-secondary a-reset">
                    <i class="fa fa-google"></i>
                </a>
                <a href="" class="me-4 link-secondary a-reset">
                    <i class="fa fa-instagram"></i>
                </a>
                <a href="" class="me-4 link-secondary a-reset">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a href="" class="me-4 link-secondary a-reset">
                    <i class="fa fa-github"></i>
                </a>
            </div>
            <!-- Right -->
        </section>
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="">
                <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">
                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <!-- Content -->
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3 text-secondary"></i><img src="assets/img/thumbnail/logo.jpg"
                                    width="200px" style="margin: 10px 10px 10px 10px;">
                            </h6>
                            <p>You can choose any dream car for yourself <a href="#cover"
                                    style="text-decoration: none;">here</a>.</p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <!-- Links -->
                            <ul id="BuySell" class="a-reset1">
                                <li>
                                    <h6 class="text-uppercase fw-bold mb-4">
                                        <b>Buying & Selling</b>
                                    </h6>
                                </li>
                                <li><a href="#search" class="text-reset">Find a Car</a></li>
                                <li><a href="Sell.html" class="text-reset">Sell your Car</a></li>
                                <li><a href="Offers.html" class="text-reset">Offers for you</a></li>
                                <li><a href="Offers.html#myInstantCashOffer" class="text-reset">My Instant Cash Offer</a></li>
                            </ul>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <!-- Links -->
                            <ul id="ourCompany" class="a-reset1">
                                <li>
                                    <h6 class="text-uppercase fw-bold mb-4">
                                        <b>Our Company</b>
                                    </h6>
                                </li>
                                <li><a href="AboutUs.html" class="text-reset">About CarBreezy</a></li>
                                <li><a href="tel:(253) 289 5242" class="text-reset">Contact CarBreezy</a></li>
                                <li><a href="Sitemap.html" class="text-reset">Sitemap</a></li>
                                <li><a href="Sell.html#resolveYourQueries" class="text-reset">Resolve Your Queries</a></li>
                            </ul>
                        </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" id="contactUS">
                        <!-- Links -->
                        <h4 class="text-uppercase fw-bold mb-4">Contact Us</h4>
                        <p>
                        <h6 style="font-weight: bold;">We're here to help.</h6>
                        </p>
                        <p>Contact us if you have a question or concern. We want you to feel confident and
                            supported throughout your vehicle-buying joyrney. We'll do our very best to provide
                            answers and set your mind at ease.</p>
                        <p style="color:rgb(3, 3, 49);"><a href="mailto:support@carbreezy.com"
                                style="text-decoration: none;"><i
                                    class="fa fa-envelope me-3 text-secondary"></i>support@carbreezy.com</a></p>
                        <p style="color:rgb(3, 3, 49);"><a href="tel:(253) 289-5242"
style="text-decoration: none;"><i class="fa fa-phone me-3 text-secondary"></i> (253)
                                289-5242)</a></p>
                        <p style="color:rgb(3, 3, 49);"><a href="tel:1-253-289-5242"
                                style="text-decoration: none;"><i class="fa fa-print me-3 text-secondary"></i>
                                1-253-289-5242</a></p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
            © 2022 Copyright:
            <a class="text-reset fw-bold" href="">Carbreezy.com</a>
        </div>

        <!-- <script>
            document.getElementById("search-input").onkeyup = function () {
                if (document.getElementById("search-input").value == '') document.getElementById("search-result").style.display = 'none';
                else document.getElementById("search-result").style.display = 'flex';
            }
        </script> -->
        <div class="scroll-footer">
        
            <div class="scroll-footer__ticker">
            <p class="continuous"><span id="date"></span></p>
            <p class="continuous continuous--two"><span id="GeoLocation"></span></p>
            <!-- <p class="msg msg--three"><span id="date"></span></p>
            <p class="msg msg--four"><span id="GeoLocation"></span></p> -->
            </div>
        
        </div>
    </footer>
    `
        document.getElementById("state").innerHTML = html;
    }
    $scope.moveDetail_img = function (img){
        document.getElementById("detailShow").src = img;
    }
});

// app.filter("filterFunction", function(){
//     return function(items) {
//         var minYear = document.getElementById("minimumYear");
//         var maxYear = document.getElementById("maximumYear");
//         var miles = document.getElementById("filter-miles");
//         var styles = document.getElementsByClassName("filter-style");
//         var brands = document.getElementsByClassName("filter-brand");
//         var states = document.getElementsByClassName("filter-state");
//         var ok = false;
//         var test = items.filter(function(car) {
//             if (car.year) if (car.year >= minYear.value) return true;
//             else ok=false;
//             else ok=false;
//             if (car.miles.includes(miles.value) || car.miles=="Any") ok=true;
//             else ok=false;
//             for(i=0; i<styles.length; i++) {
//                 if (styles[i].checked)
//                 if (car.style==styles[i].value) return true;
//             }
//             for(i=0; i<states.length; i++) {
//                 if (states[i].checked)
//                 if (car.state==states[i].value) return true
//             } 

//             for(i=0; i<brands.length; i++) {
//                 if (brands[i].checked)
//                     if (car.brand==brands[i].value) return true;
//                 }
                
//             // if (car.year) if (car.year <= maxYear.value) ok=true;
//             // return ok;
//         });

        
//             // else ok=false;
//             // else ok=false;
//             // else ok=false;
//             // test.push(car);
//             // return (car.miles == miles.value || miles.value==0) || (car.year >= minYear.value || minYear.value==0) || (car.year <= maxYear.value || maxYear.value==0)
//         // console.log(test);
        
//         // test = test.filter(function(car) {
//             // });
            
//         if (test.length==0) return items;
//         else return test;
//         // // console.log(test);
//         // return items;
//     }
// });

var testFilter = [];
function test(ele){   
    if (true)
    {
        testFilter = db;
        var cacheFilter = testFilter.filter(function(car) {
            var minYear = document.getElementById("minimumYear");
            if (car.year) if (car.year >= minYear.value) return true;
        });

        if (cacheFilter.length>0) testFilter = cacheFilter;
            
        cacheFilter = testFilter.filter(function(car) {
            var maxYear = document.getElementById("maximumYear");
            if (car.year) if (car.year <= maxYear.value) return true;
        });

        if (cacheFilter.length>0) testFilter = cacheFilter;

        cacheFilter = testFilter.filter(function(car) {
            var miles = document.getElementById("filter-miles");
            if (car.miles.includes(miles.value) || car.miles=="Any") return true;
        });

        if (cacheFilter.length>0) testFilter = cacheFilter;
        
        cacheFilter = testFilter.filter(function(car) {
            var states = document.getElementsByClassName("filter-state");
            for(i=0; i<states.length; i++) {
                if (states[i].checked)
                if (car.state==states[i].value) return true;
            } 
        });

        if (cacheFilter.length>0) testFilter = cacheFilter;

        cacheFilter = testFilter.filter(function(car) {
            var styles = document.getElementsByClassName("filter-style");
            for(i=0; i<styles.length; i++) {
                if (styles[i].checked)
                if (car.style==styles[i].value) return true;
            }
        });

        if (cacheFilter.length>0) testFilter = cacheFilter;
            
        cacheFilter = testFilter.filter(function(car) {
            var brands = document.getElementsByClassName("filter-brand");
            for(i=0; i<brands.length; i++) {
                if (brands[i].checked)
                if (car.brand==brands[i].value) return true;
            }
        });

        if (cacheFilter.length>0) testFilter = cacheFilter;

        console.log(testFilter);
    }
}


app.filter("filterFunction", function(){
    return function(items) {
        if (testFilter.length==0) return items;
        else return testFilter;
        // return testFilter;
    }
});