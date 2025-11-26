// Vue Component Declaration
TwiceTheSpice.f.p.order = Vue.component('Order', function (resolve, reject) {
    // Loads html page content
    fetch('./source/html/order.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'Order',
                template: html,
                data() {
                    return {
                        search: {
                            Query: null,
                        },
                        reload: 0,
                        reactivity: {
                            barScroll: false,
                        },
                        selectedTab: null,
                        displayQuantity: 1,
                        menu: [{
                                "MenuTab": "Starters",
                                "Items": [{
                                    "ItemName": "Onion Bhaji",
                                    "ItemID": "OnionBhaji",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.25"
                                }, {
                                    "ItemName": "Vegetable Samosa",
                                    "ItemID": "VegetableSamosa",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.25"
                                }, {
                                    "ItemName": "Meat Samosa",
                                    "ItemID": "MeatSamosa",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.50"
                                }, {
                                    "ItemName": "Chicken Tikka",
                                    "ItemID": "ChickenTikka",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.95"
                                }, {
                                    "ItemName": "Chicken Tikka Wrap",
                                    "ItemID": "ChickenTikkaWrap",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.25"
                                }, {
                                    "ItemName": "Lamb Tikka",
                                    "ItemID": "LambTikka",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.50"
                                }, {
                                    "ItemName": "Shish Kebab",
                                    "ItemID": "ShishKebab",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.95"
                                }, {
                                    "ItemName": "Shami Kebab",
                                    "ItemID": "ShamiKebab",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.95"
                                }, {
                                    "ItemName": "Chicken Pakora",
                                    "ItemID": "ChickenPakora",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.95"
                                }, {
                                    "ItemName": "Vegetable Pakora",
                                    "ItemID": "VegetablePakora",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.25"
                                }, {
                                    "ItemName": "Tandoori Chicken",
                                    "ItemID": "TandooriChicken",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.10"
                                }, {
                                    "ItemName": "Chicken Chaat",
                                    "ItemID": "ChickenChaat",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.50"
                                }, {
                                    "ItemName": "Mix Kebab",
                                    "ItemID": "MixKebab",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "4.50"
                                }, {
                                    "ItemName": "Prawn Puree",
                                    "ItemID": "PrawnPuree",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.50"
                                }, {
                                    "ItemName": "Mushroom Puree",
                                    "ItemID": "MushroomPuree",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.50"
                                }, {
                                    "ItemName": "Chicken Puree",
                                    "ItemID": "ChickenPuree",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.50"
                                }, {
                                    "ItemName": "Nargis Kebab",
                                    "ItemID": "NargisKebab",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.10"
                                }, {
                                    "ItemName": "Chicken Stuffed Pepper",
                                    "ItemID": "ChickenStuffedPepper",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.60"
                                }, {
                                    "ItemName": "Meat Stuffed Pepper",
                                    "ItemID": "MeatStuffedPepper",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.60"
                                }, {
                                    "ItemName": "Vegetable Stuffed Pepper",
                                    "ItemID": "VegetableStuffedPepper",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.60"
                                }, {
                                    "ItemName": "Kebab Roll",
                                    "ItemID": "KebabRoll",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.25"
                                }, {
                                    "ItemName": "Prawn Cocktail",
                                    "ItemID": "PrawnCocktail",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.50"
                                }, {
                                    "ItemName": "Chicken Shashlik",
                                    "ItemID": "ChickenShashlik",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.75"
                                }, {
                                    "ItemName": "King Prawn Butterfly",
                                    "ItemID": "KingPrawnButterfly",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "4.25"
                                }, {
                                    "ItemName": "King Prawn Puri",
                                    "ItemID": "KingPrawnPuri",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "4.75"
                                }, {
                                    "ItemName": "Garlic Chicken",
                                    "ItemID": "GarlicChicken",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.60"
                                }, {
                                    "ItemName": "Poppadom",
                                    "ItemID": "Poppadom",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "0.75"
                                }]
                            },
                            {
                                "MenuTab": "Tandoori Specialities - Healthy Option",
                                "Items": [{
                                    "ItemName": "Tandoori Chicken Main Course",
                                    "ItemID": "tandooriChickenMainCourse",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "5.95"
                                }, {
                                    "ItemName": "Chicken Tikka Main Course",
                                    "ItemID": "chickenTikkaMain Course",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "6.50"
                                }, {
                                    "ItemName": "Lamb Tikka Main Course",
                                    "ItemID": "lambTikkaMainCourse",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "7.50"
                                }, {
                                    "ItemName": "Chicken Tikka Shashlik Main Course",
                                    "ItemID": "chickenTikkaShashlikMainCourse",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "7.95"
                                }, {
                                    "ItemName": "Tandoori King Prawns Main Course",
                                    "ItemID": "tandooriKingPrawnsMainCourse",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "8.95"
                                }, {
                                    "ItemName": "Tandoori Mix Grill Main Course",
                                    "ItemID": "tandooriMixGrillMainCourse",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "8.95"
                                }, {
                                    "ItemName": "King Prawn Shashlik Main Course",
                                    "ItemID": "kingPrawnShashlikMainCourse",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "8.95"
                                }, {
                                    "ItemName": "Garlic Chicken Tikka Mushroom Main Course",
                                    "ItemID": "garlicChickenTikkaMushroomMainCourse",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "8.25"
                                }]
                            },
                            {
                                "MenuTab": "Chef Specialities",
                                "Items": [{
                                    "ItemName": "Twice Special Balti",
                                    "ItemID": "twiceSpecialBalti",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "9.50"
                                }, {
                                    "ItemName": "Chilli Chicken Hot",
                                    "ItemID": "chilliChickenHot",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.95"
                                }, {
                                    "ItemName": "Butter Chicken",
                                    "ItemID": "butterChicken",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.95"
                                }, {
                                    "ItemName": "Tandoori Chicken Makkoni",
                                    "ItemID": "tandooriChickenMakkoni",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.95"
                                }, {
                                    "ItemName": "Balti Chicken Tikka Shashlik",
                                    "ItemID": "baltiChickenTikkaShashlik",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.95"
                                }, {
                                    "ItemName": "Balti Lamb Tikka Shashlik",
                                    "ItemID": "baltiLambTikkaShashlik",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "8.50"
                                }, {
                                    "ItemName": "Balti King Prawn Shashlik",
                                    "ItemID": "baltiKingPrawnShashlik",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "9.25"
                                }, {
                                    "ItemName": "Balti Tandoori Murg Masala",
                                    "ItemID": "baltiTandooriMurgMasala",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "8.75"
                                }, {
                                    "ItemName": "Balti Chicken Tikka Moglai",
                                    "ItemID": "baltiChickenTikkaMoglai",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.95"
                                }, {
                                    "ItemName": "Balti Special - Chicken, Lamb & Prawns",
                                    "ItemID": "baltiSpecial_ChickenLambAndPrawns",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.95"
                                }, {
                                    "ItemName": "Balti Goan Chicken Tikka",
                                    "ItemID": "baltiGoanChickenTikka",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.95"
                                }, {
                                    "ItemName": "Balti Goan Lamb Tikka",
                                    "ItemID": "baltiGoanLambTikka",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.95"
                                }, ]
                            },
                            {
                                "MenuTab": "Traditional Dishes",
                                "Items": [{
                                    "ItemName": "Curry",
                                    "ItemID": "curry",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Curry",
                                        "ItemID": "chickenCurry",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "5.95",
                                    }, {
                                        "ItemName": "Keema Curry",
                                        "ItemID": "keemaCurry",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "5.95",
                                    }, {
                                        "ItemName": "Chicken Tikka Curry",
                                        "ItemID": "chickenTikkaCurry",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Curry",
                                        "ItemID": "tandooriChickenCurry",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Curry",
                                        "ItemID": "lambTikkaCurry",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Curry",
                                        "ItemID": "prawnCurry",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Curry",
                                        "ItemID": "kingPrawnCurry",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Curry",
                                        "ItemID": "meatCurry",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Balti",
                                    "ItemID": "balti",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Balti",
                                        "ItemID": "chickenBalti",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "5.95",
                                    }, {
                                        "ItemName": "Keema Balti",
                                        "ItemID": "keemaBalti",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "5.95",
                                    }, {
                                        "ItemName": "Chicken Tikka Balti",
                                        "ItemID": "chickenTikkaBalti",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Balti",
                                        "ItemID": "tandooriChickenBalti",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Balti",
                                        "ItemID": "lambTikkaBalti",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Balti",
                                        "ItemID": "prawnBalti",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Balti",
                                        "ItemID": "kingPrawnBalti",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Balti",
                                        "ItemID": "meatBalti",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Pathia",
                                    "ItemID": "pathia",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Pathia",
                                        "ItemID": "chickenPathia",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Keema Pathia",
                                        "ItemID": "keemaPathia",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Chicken Tikka Pathia",
                                        "ItemID": "chickenTikkaPathia",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Pathia",
                                        "ItemID": "tandooriChickenPathia",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Pathia",
                                        "ItemID": "lambTikkaPathia",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Pathia",
                                        "ItemID": "prawnPathia",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Pathia",
                                        "ItemID": "kingPrawnPathia",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Pathia",
                                        "ItemID": "meatPathia",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Bhuna",
                                    "ItemID": "bhuna",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Bhuna",
                                        "ItemID": "chickenBhuna",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Keema Bhuna",
                                        "ItemID": "keemaBhuna",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Chicken Tikka Bhuna",
                                        "ItemID": "chickenTikkaBhuna",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Bhuna",
                                        "ItemID": "tandooriChickenBhuna",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Bhuna",
                                        "ItemID": "lambTikkaBhuna",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Bhuna",
                                        "ItemID": "prawnBhuna",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Bhuna",
                                        "ItemID": "kingPrawnBhuna",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Bhuna",
                                        "ItemID": "meatBhuna",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Korma",
                                    "ItemID": "korma",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Korma",
                                        "ItemID": "chickenKorma",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.45",
                                    }, {
                                        "ItemName": "Keema Korma",
                                        "ItemID": "keemaKorma",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.45",
                                    }, {
                                        "ItemName": "Chicken Tikka Korma",
                                        "ItemID": "chickenTikkaKorma",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Korma",
                                        "ItemID": "tandooriChickenKorma",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Korma",
                                        "ItemID": "lambTikkaKorma",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Korma",
                                        "ItemID": "prawnKorma",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Korma",
                                        "ItemID": "kingPrawnKorma",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Korma",
                                        "ItemID": "meatKorma",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Dansak",
                                    "ItemID": "dansak",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Dansak",
                                        "ItemID": "chickenDansak",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Keema Dansak",
                                        "ItemID": "keemaDansak",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Chicken Tikka Dansak",
                                        "ItemID": "chickenTikkaDansak",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Dansak",
                                        "ItemID": "tandooriChickenDansak",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Dansak",
                                        "ItemID": "lambTikkaDansak",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Dansak",
                                        "ItemID": "prawnDansak",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Dansak",
                                        "ItemID": "kingPrawnDansak",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Dansak",
                                        "ItemID": "meatDansak",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Dupaiza",
                                    "ItemID": "dupaiza",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Dupaiza",
                                        "ItemID": "chickenDupaiza",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Keema Dupaiza",
                                        "ItemID": "keemaDupaiza",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Chicken Tikka Dupaiza",
                                        "ItemID": "chickenTikkaDupaiza",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Dupaiza",
                                        "ItemID": "tandooriChickenDupaiza",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Dupaiza",
                                        "ItemID": "lambTikkaDupaiza",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Dupaiza",
                                        "ItemID": "prawnDupaiza",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Dupaiza",
                                        "ItemID": "kingPrawnDupaiza",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Dupaiza",
                                        "ItemID": "meatDupaiza",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Jalfrezi",
                                    "ItemID": "jalfrezi",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Jalfrezi",
                                        "ItemID": "chickenJalfrezi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Keema Jalfrezi",
                                        "ItemID": "keemaJalfrezi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Chicken Tikka Jalfrezi",
                                        "ItemID": "chickenTikkaJalfrezi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Jalfrezi",
                                        "ItemID": "tandooriChickenJalfrezi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Jalfrezi",
                                        "ItemID": "lambTikkaJalfrezi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Jalfrezi",
                                        "ItemID": "prawnJalfrezi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Jalfrezi",
                                        "ItemID": "kingPrawnJalfrezi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Jalfrezi",
                                        "ItemID": "meatJalfrezi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Rogan Josh",
                                    "ItemID": "roganJosh",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Rogan Josh",
                                        "ItemID": "chickenRoganJosh",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Keema Rogan Josh",
                                        "ItemID": "keemaRoganJosh",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Chicken Tikka Rogan Josh",
                                        "ItemID": "chickenTikkaRoganJosh",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Rogan Josh",
                                        "ItemID": "tandooriChickenRoganJosh",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Rogan Josh",
                                        "ItemID": "lambTikkaRoganJosh",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Rogan Josh",
                                        "ItemID": "prawnRoganJosh",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Rogan Josh",
                                        "ItemID": "kingPrawnRoganJosh",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Rogan Josh",
                                        "ItemID": "meatRoganJosh",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Malaya",
                                    "ItemID": "malaya",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Malaya",
                                        "ItemID": "chickenMalaya",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.45",
                                    }, {
                                        "ItemName": "Keema Malaya",
                                        "ItemID": "keemaMalaya",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.45",
                                    }, {
                                        "ItemName": "Chicken Tikka Malaya",
                                        "ItemID": "chickenTikkaMalaya",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, {
                                        "ItemName": "Tandoori Chicken Malaya",
                                        "ItemID": "tandooriChickenMalaya",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, {
                                        "ItemName": "Lamb Tikka Malaya",
                                        "ItemID": "lambTikkaMalaya",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.75",
                                    }, {
                                        "ItemName": "Prawn Malaya",
                                        "ItemID": "prawnMalaya",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Malaya",
                                        "ItemID": "kingPrawnMalaya",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Malaya",
                                        "ItemID": "meatMalaya",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Tropical",
                                    "ItemID": "tropical",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Tropical",
                                        "ItemID": "chickenTropical",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Keema Tropical",
                                        "ItemID": "keemaTropical",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "Chicken Tikka Tropical",
                                        "ItemID": "chickenTikkaTropical",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Tandoori Chicken Tropical",
                                        "ItemID": "tandooriChickenTropical",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "Lamb Tikka Tropical",
                                        "ItemID": "lambTikkaTropical",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Tropical",
                                        "ItemID": "prawnTropical",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.25",
                                    }, {
                                        "ItemName": "King Prawn Tropical",
                                        "ItemID": "kingPrawnTropical",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Tropical",
                                        "ItemID": "meatTropical",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, ]
                                }, {
                                    "ItemName": "Masala",
                                    "ItemID": "masala",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Masala",
                                        "ItemID": "chickenMasala",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.45",
                                    }, {
                                        "ItemName": "Keema Masala",
                                        "ItemID": "keemaMasala",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.45",
                                    }, {
                                        "ItemName": "Chicken Tikka Masala",
                                        "ItemID": "chickenTikkaMasala",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, {
                                        "ItemName": "Tandoori Chicken Masala",
                                        "ItemID": "tandooriChickenMasala",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, {
                                        "ItemName": "Lamb Tikka Masala",
                                        "ItemID": "lambTikkaMasala",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.50",
                                    }, {
                                        "ItemName": "Prawn Masala",
                                        "ItemID": "prawnMasala",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.50",
                                    }, {
                                        "ItemName": "King Prawn Masala",
                                        "ItemID": "kingPrawnMasala",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Masala",
                                        "ItemID": "meatMasala",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, ]
                                }, {
                                    "ItemName": "Pasanda",
                                    "ItemID": "pasanda",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Pasanda",
                                        "ItemID": "chickenPasanda",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.45",
                                    }, {
                                        "ItemName": "Keema Pasanda",
                                        "ItemID": "keemaPasanda",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.45",
                                    }, {
                                        "ItemName": "Chicken Tikka Pasanda",
                                        "ItemID": "chickenTikkaPasanda",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, {
                                        "ItemName": "Tandoori Chicken Pasanda",
                                        "ItemID": "tandooriChickenPasanda",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, {
                                        "ItemName": "Lamb Tikka Pasanda",
                                        "ItemID": "lambTikkaPasanda",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.75",
                                    }, {
                                        "ItemName": "Prawn Pasanda",
                                        "ItemID": "prawnPasanda",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "King Prawn Pasanda",
                                        "ItemID": "kingPrawnPasanda",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Pasanda",
                                        "ItemID": "meatPasanda",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, ]
                                }, {
                                    "ItemName": "Karahi",
                                    "ItemID": "karahi",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": true,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Chicken Karahi",
                                        "ItemID": "chickenKarahi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, {
                                        "ItemName": "Keema Karahi",
                                        "ItemID": "keemaKarahi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, {
                                        "ItemName": "Chicken Tikka Karahi",
                                        "ItemID": "chickenTikkaKarahi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.25",
                                    }, {
                                        "ItemName": "Tandoori Chicken Karahi",
                                        "ItemID": "tandooriChickenKarahi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.25",
                                    }, {
                                        "ItemName": "Lamb Tikka Karahi",
                                        "ItemID": "lambTikkaKarahi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "7.75",
                                    }, {
                                        "ItemName": "Prawn Karahi",
                                        "ItemID": "prawnKarahi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.75",
                                    }, {
                                        "ItemName": "King Prawn Karahi",
                                        "ItemID": "kingPrawnKarahi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "8.95",
                                    }, {
                                        "ItemName": "Meat Karahi",
                                        "ItemID": "meatKarahi",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": true,
                                        "Price": "6.95",
                                    }, ]
                                }, ]
                            }, {
                                "MenuTab": "Garlic Dishes",
                                "Items": [{
                                    "ItemName": "Garlic Chicken Tikka Karahi",
                                    "ItemID": "garlicChickenTikkaKarahi",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.95"
                                }, {
                                    "ItemName": "Garlic Chilli Chicken",
                                    "ItemID": "garlicChilliChicken",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.75"
                                }, {
                                    "ItemName": "Garlic Chicken Tikka",
                                    "ItemID": "garlicChickenTikka",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.95"
                                }, {
                                    "ItemName": "Garlic King Prawn Karahi",
                                    "ItemID": "garlicKingPrawnKarahi",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "8.95"
                                }, {
                                    "ItemName": "Garlic Chilli Chicken Masala",
                                    "ItemID": "garlicChilliChickenMasala",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.45"
                                }, {
                                    "ItemName": "Tandoori Chicken Garlic",
                                    "ItemID": "tandooriChickenGarlic",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.95"
                                }, ]
                            }, {
                                "MenuTab": "Biryani",
                                "Items": [{
                                    "ItemName": "Lamb Tikka Biryani",
                                    "ItemID": "lambTikkaBiryani",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.95"
                                }, {
                                    "ItemName": "Chicken Tikka Biryani",
                                    "ItemID": "chickenTikkaBiryani",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.50"
                                }, {
                                    "ItemName": "Chicken Biryani",
                                    "ItemID": "chickenBiryani",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.95"
                                }, {
                                    "ItemName": "Meat Biryani",
                                    "ItemID": "meatBiryani",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.45"
                                }, {
                                    "ItemName": "Prawn Biryani",
                                    "ItemID": "prawnBiryani",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "7.45"
                                }, {
                                    "ItemName": "King Prawn Biryani",
                                    "ItemID": "kingPrawnBiryani",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "9.25"
                                }, {
                                    "ItemName": "Tropical Biryani",
                                    "ItemID": "tropicalBiryani",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "8.25"
                                }, {
                                    "ItemName": "Vegetable Biryani",
                                    "ItemID": "vegetableBiryani",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": true,
                                    "Price": "6.95"
                                }, ]
                            }, {
                                "MenuTab": "Vegetable Dishes",
                                "Items": [{
                                    "ItemName": "Balti Cauliflower Peas",
                                    "ItemID": "baltiCauliflowerPeas",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Cauliflower Peas",
                                        "ItemID": "baltiCauliflowerPeas",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Cauliflower Peas",
                                        "ItemID": "sideCauliflowerPeas",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Aloo Peas",
                                    "ItemID": "baltiAlooPeas",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Aloo Peas",
                                        "ItemID": "baltiAlooPeas",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Aloo Peas",
                                        "ItemID": "sideAlooPeas",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Mushrooms",
                                    "ItemID": "baltiMushrooms",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Mushrooms",
                                        "ItemID": "baltiMushrooms",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Mushrooms",
                                        "ItemID": "sideMushrooms",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Spinach",
                                    "ItemID": "baltiSpinach",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Spinach",
                                        "ItemID": "baltiSpinach",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Spinach",
                                        "ItemID": "sideSpinach",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Chana",
                                    "ItemID": "baltiChana",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Chana",
                                        "ItemID": "baltiChana",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Chana",
                                        "ItemID": "sideChana",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Aloo",
                                    "ItemID": "baltiAloo",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Aloo",
                                        "ItemID": "baltiAloo",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Aloo",
                                        "ItemID": "sideAloo",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Okra",
                                    "ItemID": "baltiOkra",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Okra",
                                        "ItemID": "baltiOkra",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Okra",
                                        "ItemID": "sideOkra",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Tarka Daal",
                                    "ItemID": "baltiTarkaDaal",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Tarka Daal",
                                        "ItemID": "baltiTarkaDaal",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Tarka Daal",
                                        "ItemID": "sideTarkaDaal",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Chana Aloo",
                                    "ItemID": "baltiChanaAloo",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Chana Aloo",
                                        "ItemID": "baltiChanaAloo",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Chana Aloo",
                                        "ItemID": "sideChanaAloo",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Spinach & Chana",
                                    "ItemID": "baltiSpinachChana",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Spinach & Chana",
                                        "ItemID": "baltiSpinachChana",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Spinach & Chana",
                                        "ItemID": "sideSpinachChana",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Bombay Aloo",
                                    "ItemID": "baltiBombayAloo",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Bombay Aloo",
                                        "ItemID": "baltiBombayAloo",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Bombay Aloo",
                                        "ItemID": "sideBombayAloo",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Saag Paneer",
                                    "ItemID": "baltiSaagPaneer",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Saag Paneer",
                                        "ItemID": "baltiSaagPaneer",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Saag Paneer",
                                        "ItemID": "sideSaagPaneer",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Aloo Gobi",
                                    "ItemID": "baltiAlooGobi",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Aloo Gobi",
                                        "ItemID": "baltiAlooGobi",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Aloo Gobi",
                                        "ItemID": "sideAlooGobi",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, {
                                    "ItemName": "Balti Aloo Palak",
                                    "ItemID": "baltiAlooPalak",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Balti Aloo Palak",
                                        "ItemID": "baltiAlooPalak",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "5.50",
                                    }, {
                                        "ItemName": "Side Aloo Palak",
                                        "ItemID": "sideAlooPalak",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.95",
                                    }, ]
                                }, ]
                            }, {
                                "MenuTab": "English Dishes",
                                "Items": [{
                                    "ItemName": "Chicken Omelette With Chips",
                                    "ItemID": "chickenOmeletteWithChips",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "5.75"
                                }, {
                                    "ItemName": "Mushroom Omelette With Chips",
                                    "ItemID": "mushroomOmeletteWithChips",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "5.75"
                                }, {
                                    "ItemName": "Chicken & Chips",
                                    "ItemID": "chickenAndChips",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "5.75"
                                }, {
                                    "ItemName": "Scampi & Chips",
                                    "ItemID": "scampiAndChips",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "6.45"
                                }, {
                                    "ItemName": "Chicken Nuggets & Chips",
                                    "ItemID": "chickenNuggetsAndChips",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "5.75"
                                }, ]
                            }, {
                                "MenuTab": "Rice",
                                "Items": [{
                                    "ItemName": "Peas Rice",
                                    "ItemID": "peasRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.60"
                                }, {
                                    "ItemName": "Keema Rice",
                                    "ItemID": "keemaRice",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.10"
                                }, {
                                    "ItemName": "Boiled Rice",
                                    "ItemID": "boiledRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.25"
                                }, {
                                    "ItemName": "Fried Rice",
                                    "ItemID": "friedRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.50"
                                }, {
                                    "ItemName": "Special Rice",
                                    "ItemID": "specialRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.25"
                                }, {
                                    "ItemName": "Pilau Rice",
                                    "ItemID": "pilauRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.50"
                                }, {
                                    "ItemName": "Egg Fried Rice",
                                    "ItemID": "eggFriedRice",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.60"
                                }, {
                                    "ItemName": "Mushroom Rice",
                                    "ItemID": "mushroomRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.60"
                                }, {
                                    "ItemName": "Chilli Rice",
                                    "ItemID": "chilliRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.50"
                                }, {
                                    "ItemName": "Lemon Rice",
                                    "ItemID": "lemonRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.60"
                                }, {
                                    "ItemName": "Vegetable Rice",
                                    "ItemID": "vegetableRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.95"
                                }, {
                                    "ItemName": "Chicken Fried Rice",
                                    "ItemID": "chickenFriedRice",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "3.25"
                                }, {
                                    "ItemName": "Garlic Fried Rice",
                                    "ItemID": "garlicFriedRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.60"
                                }, {
                                    "ItemName": "Mushroom Pilau Rice",
                                    "ItemID": "mushroomPilauRice",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.95"
                                }, ]
                            }, {
                                "MenuTab": "Sundries",
                                "Items": [{
                                    "ItemName": "Naan",
                                    "ItemID": "naan",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "Select",
                                    "ModalNeeded": false,
                                    "Price": "",
                                    "SubItems": [{
                                        "ItemName": "Plain Naan",
                                        "ItemID": "plainNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "1.75",
                                    }, {
                                        "ItemName": "Medium Naan",
                                        "ItemID": "mediumNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.75",
                                    }, {
                                        "ItemName": "Large Naan",
                                        "ItemID": "largeNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "3.75",
                                    }, {
                                        "ItemName": "Keema Naan",
                                        "ItemID": "keemaNaan",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.50",
                                    }, {
                                        "ItemName": "Cheese Naan",
                                        "ItemID": "cheeseNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.50",
                                    }, {
                                        "ItemName": "Garlic Naan",
                                        "ItemID": "garlicNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.25",
                                    }, {
                                        "ItemName": "Peshwari Naan",
                                        "ItemID": "peshwariNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.25",
                                    }, {
                                        "ItemName": "Coriander Naan",
                                        "ItemID": "corianderNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.25",
                                    }, {
                                        "ItemName": "Chicken Tikka Naan",
                                        "ItemID": "chickenTikkaNaan",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.95",
                                    }, {
                                        "ItemName": "Chilli Cheese Naan",
                                        "ItemID": "chilliCheeseNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.85",
                                    }, {
                                        "ItemName": "Garlic Coriander Naan",
                                        "ItemID": "garlicCorianderNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.75",
                                    }, {
                                        "ItemName": "Cheese & Garlic Naan",
                                        "ItemID": "cheeseAndGarlicNaan",
                                        "IsVegetarian": true,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.75",
                                    }, {
                                        "ItemName": "Keema Cheese Naan",
                                        "ItemID": "keemaCheeseNaan",
                                        "IsVegetarian": false,
                                        "Quantity": 1,
                                        "ItemType": "Select",
                                        "ModalNeeded": false,
                                        "Price": "2.95",
                                    }, ]
                                }, {
                                    "ItemName": "Tandoori Roti",
                                    "ItemID": "tandoori Roti",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "Vegetable Paratha",
                                    "ItemID": "vegetableParatha",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.45"
                                }, {
                                    "ItemName": "Tawa Chapati",
                                    "ItemID": "tawaChapati",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "Chips",
                                    "ItemID": "chips",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.10"
                                }, {
                                    "ItemName": "Cheesy Chips",
                                    "ItemID": "cheesyChips",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.10"
                                }, {
                                    "ItemName": "Masala Chips",
                                    "ItemID": "masalaChips",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.95"
                                }, {
                                    "ItemName": "Curry Sauce",
                                    "ItemID": "currySauce",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.75"
                                }, {
                                    "ItemName": "Sweet Mango Chutney",
                                    "ItemID": "sweetMangoChutney",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "0.80"
                                }, {
                                    "ItemName": "Pickle",
                                    "ItemID": "pickle",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "0.80"
                                }, {
                                    "ItemName": "Hot Chilli Sauce",
                                    "ItemID": "hotChilliSauce",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "0.80"
                                }, {
                                    "ItemName": "Fried Onion",
                                    "ItemID": "friedOnion",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.75"
                                }, {
                                    "ItemName": "Container Dip",
                                    "ItemID": "containerDip",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.50"
                                }, {
                                    "ItemName": "Small Dip",
                                    "ItemID": "smallDip",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "0.60"
                                }, {
                                    "ItemName": "Raitha",
                                    "ItemID": "raitha",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.50"
                                }, {
                                    "ItemName": "Green Salad",
                                    "ItemID": "greenSalad",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.85"
                                }, {
                                    "ItemName": "Onion Salad",
                                    "ItemID": "onionSalad",
                                    "IsVegetarian": true,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "0.60"
                                }, ]
                            }, {
                                "MenuTab": "Drinks",
                                "Items": [{
                                    "ItemName": "Apple & Mango J20",
                                    "ItemID": "appleAndMangoJ20",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.50"
                                }, {
                                    "ItemName": "Orange & Passionfruit J20",
                                    "ItemID": "orangeAndPassionfruitJ20",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.50"
                                }, {
                                    "ItemName": "Tango Can (330ml)",
                                    "ItemID": "tangoCan",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "7Up Can (330ml)",
                                    "ItemID": "7UpCan",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "Pepsi Can (330ml)",
                                    "ItemID": "pepsiCan",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "Coke Can (330ml)",
                                    "ItemID": "cokeCan",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "Diet Coke Can (330ml)",
                                    "ItemID": "dietCokeCan",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "Fanta Orange Can (330ml)",
                                    "ItemID": "fantaOrangeCan",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "Rubicon Mango Can (330ml)",
                                    "ItemID": "rubiconMangoCan",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.10"
                                }, {
                                    "ItemName": "Pepsi Bottle (1.5ltr)",
                                    "ItemID": "pepsiBottle",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.25"
                                }, {
                                    "ItemName": "Pepsi Max Bottle (1.5ltr)",
                                    "ItemID": "pepsiMaxBottle",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.25"
                                }, {
                                    "ItemName": "7Up Bottle (1.5ltr)",
                                    "ItemID": "7UpBottle",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.25"
                                }, {
                                    "ItemName": "Tango Bottle (1.5ltr)",
                                    "ItemID": "tangoBottle",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "2.25"
                                }, ]
                            }, {
                                "MenuTab": "Desserts",
                                "Items": [{
                                    "ItemName": "Concrete Cake & Custard",
                                    "ItemID": "concreteCakeAndCustard",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "4.95"
                                }, {
                                    "ItemName": "Strawberry Cheesecake",
                                    "ItemID": "strawberryCheesecake",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.95"
                                }, {
                                    "ItemName": "Chocolate Cheesecake",
                                    "ItemID": "ChocolateCheesecake",
                                    "IsVegetarian": false,
                                    "Quantity": 1,
                                    "ItemType": "List",
                                    "ModalNeeded": false,
                                    "Price": "1.95"
                                }, ]
                            }
                        ]
                    }
                },
                computed: {
                    getMenu: function () {
                        let vue = this;
                        if (vue.search.Query) {
                            return vue.filterResults();
                        } else {
                            return vue.menu;
                        }
                    },
                    hasItemsInBasket: function () {
                        let vue = this;
                        if (vue.$root.basket.length > 0) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                methods: {
                    filterResults: function () {
                        let vue = this;
                        let query = vue.search.Query;
                        let foundResults = [];
                        for (let i = 0; i < vue.menu.length; i++) {
                            for (let ii = 0; ii < vue.menu[i].Items.length; ii++) {
                                if (vue.menu[i].Items[ii].ItemType == 'Select') {
                                    for (let iii = 0; iii < vue.menu[i].Items[ii].SubItems.length; iii++) {
                                        if (vue.menu[i].Items[ii].SubItems[iii].ItemName.toLowerCase().includes(query.toLowerCase())) {
                                            foundResults.push(vue.menu[i].Items[ii].SubItems[iii]);
                                        }
                                    }
                                } else {
                                    if (vue.menu[i].Items[ii].ItemName.toLowerCase().includes(query.toLowerCase())) {
                                        foundResults.push(vue.menu[i].Items[ii]);
                                    }
                                }
                            }
                        }
                        return foundResults;
                    },
                    changePage: function (_page) {
                        this.$router.push('/' + _page);
                    },
                    addToBasket: function (_item, _itemCounterID) {
                        let vue = this;
                        let basket = vue.$root.basket;
                        let alreadyInBasket = false;
                        for (let i = 0; i < basket.length; i++) {
                            if (basket[i].ItemID == _item.ItemID) {
                                basket[i].Quantity = basket[i].Quantity + JSON.parse(document.getElementById(_itemCounterID).value);
                                alreadyInBasket = true;
                            }
                        }
                        if (!alreadyInBasket) {
                            let obj = {
                                "ItemName": _item.ItemName,
                                "ItemID": _item.ItemID,
                                "IsVegetarian": _item.IsVegetarian,
                                "Quantity": JSON.parse(document.getElementById(_itemCounterID).value),
                                "Price": _item.Price
                            }
                            basket.push(obj);
                        }

                        vue.$root.basket = basket;
                        document.getElementById(_itemCounterID).value = 1;
                    },
                    incrementOrDecrementValue: function (_function, _itemID) {
                        let int = JSON.parse(document.getElementById(_itemID).value);
                        if (_function == 'increment') {
                            int += 1;
                            document.getElementById(_itemID).value = int;
                        } else {
                            if (int > 1) {
                                int -= 1;
                                document.getElementById(_itemID).value = int;
                            }
                        }
                    },
                    checkValue: function (_itemID) {
                        let value = JSON.parse(document.getElementById(_itemID).value);
                        if (value < 1 || value.length == 0) {
                            document.getElementById(_itemID).value = 1;
                        }
                    }
                },
                mounted() {
                    let vue = this;
                    setTimeout(function () {
                        if (window.innerWidth <= 1846) {
                            vue.reactivity.barScroll = true;
                        } else if (window.innerWidth > 1846) {
                            vue.reactivity.barScroll = false;
                        }
                        vue.reload++;
                    }, 100);
                }
            })
        })
    })
})