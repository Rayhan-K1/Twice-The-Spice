const router = new VueRouter({
    // Route Declaration
    routes: [{
        path: '/',
        name: 'Home',
        component: TwiceTheSpice.f.p.home,
    }, {
        path: '/aboutUs',
        name: 'About Us',
        component: TwiceTheSpice.f.p.aboutUs,
    }, {
        path: '/contactUs',
        name: 'Contact Us',
        component: TwiceTheSpice.f.p.contactUs,
    }, {
        path: '/order',
        name: 'Order',
        component: TwiceTheSpice.f.p.order,
    }, {
        path: '/viewBasket',
        name: 'View Basket',
        component: TwiceTheSpice.f.p.viewBasket,
    }, {
        path: '/reservations',
        name: 'Reservations',
        component: TwiceTheSpice.f.p.reservations,
    }]
})
// Vue Instance
TwiceTheSpice.f.p.index = new Vue({
    el: '#app',
    data: {
        basket: [],
        key: 0,
        orientation: 'landscape',
    },
    computed: {
        getBasketItemsCount: function () {
            let basket = this.basket;
            let quantity = 0;
            for (let i = 0; i < basket.length; i++) {
                quantity = quantity + basket[i].Quantity;
            }
            return quantity;
        },
    },
    methods: {
        initialise: function () {
            let vue = this;
            emailjs.init('s1aG2AfeGQGC8h8fB');
            vue.orientation = TwiceTheSpice.o.globalFunctions.getDeviceOrientation();
            let portrait = window.matchMedia("(orientation: portrait)");

            portrait.addEventListener("change", function (e) {
                vue.key++;
                vue.orientation = TwiceTheSpice.o.globalFunctions.getDeviceOrientation();
                vue.$router.push('/');
            });
        },

    },
    router,
    mounted() {
        this.initialise();
    }
})