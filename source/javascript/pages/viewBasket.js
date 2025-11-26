// Vue Component Declaration
TwiceTheSpice.f.p.viewBasket = Vue.component('ViewBasket', function (resolve, reject) {
    // Loads html page content
    fetch('./source/html/viewBasket.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'ViewBasket',
                template: html,
                data() {
                    return {
                        state: 'confirmBasket',
                        CollectionMethod: null,
                        PaymentMethod: null,
                        CustomerDetails: {
                            Title: null,
                            FirstName: null,
                            LastName: null,
                            EmailAddress: null,
                        },
                        DeliveryInformation: {
                            Address: null,
                            Postcode: null,
                            ContactNumber: null,
                        },
                        OrderComments: {
                            AdditionalNotes: null,
                        }
                    }
                },
                computed: {
                    getItemsInBasket: function () {
                        let vue = this;
                        return vue.$root.basket;
                    },
                    getProgress: function () {
                        let vue = this;
                        if (vue.state == 'confirmBasket') {
                            return "25";
                        } else if (vue.state == 'confirmMethodOfDelivery') {
                            return "50";
                        } else if (vue.state == 'enterDetails') {
                            return "75";
                        } else if (vue.state == 'orderPlaced') {
                            return "100";
                        } else {
                            return "0";
                        }
                    },
                    isDeliveryAndPaymentComplete: function () {
                        let vue = this;
                        if (vue.CollectionMethod && vue.CollectionMethod != '0' && vue.PaymentMethod && vue.PaymentMethod != '0') {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    isCustomerDetailsComplete: function () {
                        let vue = this;
                        let Title = vue.CustomerDetails.Title;
                        let FirstName = vue.CustomerDetails.FirstName;
                        let LastName = vue.CustomerDetails.LastName;
                        let EmailAddress = vue.CustomerDetails.EmailAddress;
                        if (Title && FirstName && LastName && EmailAddress) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    isDeliveryInformationComplete: function () {
                        let vue = this;
                        let Address = vue.DeliveryInformation.Address;
                        let Postcode = vue.DeliveryInformation.Postcode;
                        let ContactNumber = vue.DeliveryInformation.ContactNumber;
                        if (Address && Postcode && ContactNumber) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                },
                methods: {
                    removeFromBasket: function (_item) {
                        let basket = this.$root.basket;
                        for (let i = 0; i < basket.length; i++) {
                            if (basket[i].ItemID == _item.ItemID) {
                                if (basket[i].Quantity > 1) {
                                    basket[i].Quantity = basket[i].Quantity - 1;
                                } else {
                                    basket.splice(i, 1);
                                }
                            }
                        }
                        this.$root.basket = basket;
                    },
                    clearBasket: function () {
                        this.$root.basket = [];
                    },
                    changePage: function (_page) {
                        let vue = this;
                        vue.state = _page;
                    },
                    calculatePrice: function (_price, _quantity) {
                        let finalPrice = _price * _quantity;
                        return finalPrice.toFixed(2);
                    },
                    calculateTotalPrice: function () {
                        let basket = this.$root.basket;
                        let total = 0;
                        for (let i = 0; i < basket.length; i++) {
                            if (basket[i].Quantity > 1) {
                                total = total + (JSON.parse(basket[i].Price) * basket[i].Quantity);
                            } else {
                                total = total + JSON.parse(basket[i].Price);
                            }
                        }
                        return this.calculatePrice(total, 1);
                    },
                    sendForm: function () {
                        let vue = this;
                        let basket = this.$root.basket;
                        if (vue.isCustomerDetailsComplete && vue.isDeliveryInformationComplete) {
                            let orderDetails = "<ul>";
                            for (let i = 0; i < basket.length; i++) {
                                orderDetails = orderDetails + "<li> " + basket[i].Quantity + " x " + basket[i].ItemName + " @" + JSON.parse(basket[i].Price).toFixed(2); + "GBP/each (Total for this item: " + (basket[i].Quantity * basket[i].Price).toFixed(2); + "GBP) </li>"
                            }
                            orderDetails = orderDetails + "</ul><br>Total Price: " + this.calculateTotalPrice(); + "GBP";
                            var templateParams = {
                                "orderDetails": orderDetails,
                                "email": vue.CustomerDetails.EmailAddress,
                                "firstName": vue.CustomerDetails.FirstName,
                                "lastName": vue.CustomerDetails.LastName,
                                "address": vue.DeliveryInformation.Address,
                                "postcode": vue.DeliveryInformation.Postcode,
                                "contactNumber": vue.DeliveryInformation.ContactNumber,
                                "additionalComments": vue.OrderComments.AdditionalNotes,
                                "paymentMethod": vue.PaymentMethod,
                                "deliveryMethod": vue.CollectionMethod,
                                "title": vue.CustomerDetails.Title,
                            };

                            emailjs.send('service_ejur2zu', 'invoice', templateParams)
                                .then(function (response) {
                                    console.log('SUCCESS!', response.status, response.text);
                                    vue.clearBasket();
                                }, function (error) {
                                    console.log('FAILED...', error);
                                });
                        }
                    }
                },
                mounted() {

                }
            })
        })
    })
})