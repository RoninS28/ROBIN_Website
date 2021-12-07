import scooter1 from '../../images/scooter1.jpeg';
import scooter2 from '../../images/scooter2.jpeg';
const evModelList = [
    
    {
        id: 1,
        name: "City Electric Scooter",
        basePrice: 43000,
        imgUrl: scooter1,
        colors: [ "red", "blue", "green", "pink" ],
        features:
            {
                power: "230 Watt (BLDC motor-IP 67)",
                ledLights: "LED with Defogger Lights",
                voltage: "72",
                tyre: "3.00-10 Tubeless(Front/Rear)",
                speedometer: "Digital",
                wheel: "Aluminium Alloy with Stylish Design",
                brake: "Front- Disc | Rear- Disc Brake",
                motorController: "72 V Controller for BLDC Motor",
                range: 110,
                batteryPack: "1.8 KWH Lithium-ion (Removable Battery)",
                batteryLife: 3,
                batteryWarrenty: 2
            },
        design: [
            "Aluminium Alloy Wheel",
            "LED with Defogger Lights",
            "Stylish Side Mirror",
            "Extra Storage",
            "Protection Guard"
        ],
        safety: [
            "Dual Disc",
            "Tubeless Tyre",
            "Theft Alert",
            "Balanced",
            "3 Drive Modes",
            "Keyless Drive"
        ]
    },

    {
        id: 2,
        name: "City-1 Electric Scooter",
        basePrice: 45000,
        imgUrl: scooter2,
        colors: [ "red", "blue", "grey", "black" ],
        features: [
            {
                power: "230 Watt (BLDC motor-IP 67)",
                ledLights: "LED with Defogger Lights",
                voltage: "72",
                tyre: "3.00-10 Tubeless(Front/Rear)",
                speedometer: "Digital",
                wheel: "Aluminium Alloy with Stylish Design",
                brake: "Front- Disc | Rear- Disc Brake",
                motorController: "72 V Controller for BLDC Motor",
                range: 100,
                batteryPack: "1.8 KWH Lithium-ion (Removable Battery)",
                batteryLife: 3,
                batteryWarrenty: 2
            }
        ],
        design: [
            "LED Protection Lamp",
            "LED with Defogger Lights",
            "Digital Meter",
            "Powerful Lock",
            "Comfort and Stronger Footrest"
        ],
        safety: [
            "Dual Disc",
            "Tubeless Tyre",
            "Theft Alert",
            "Balanced",
            "3 Drive Modes",
            "Keyless Drive"
        ]
    },

    {
        id: 3,
        name: "City-2 Electric Scooter",
        basePrice: 60000,
        imgUrl: scooter1,
        colors: [ "red", "blue", "silver", "black" ],
        features: [
            {
                power: "230 Watt (BLDC motor-IP 67)",
                ledLights: "LED with Defogger Lights",
                voltage: "87",
                tyre: "3.00-10 Tubeless(Front/Rear)",
                speedometer: "Digital",
                wheel: "Aluminium Alloy with Stylish Design",
                brake: "Front- Disc | Rear- Disc Brake",
                motorController: "87 V Controller for BLDC Motor",
                range: 140,
                batteryPack: "1.8 KWH Lithium-ion (Removable Battery)",
                batteryLife: 4,
                batteryWarrenty: 3
            }
        ],
        design: [
            "LED Protection Lamp",
            "LED with Defogger Lights",
            "Digital Meter",
            "Powerful Lock",
            "Comfort and Stronger Footrest"
        ],
        safety: [
            "Dual Disc",
            "Tubeless Tyre",
            "Theft Alert",
            "Balanced",
            "Stylish Side Mirror",
            "Extra Storage",
            "3 Drive Modes",
            "Keyless Drive"
        ]
    }
]

export { evModelList } 