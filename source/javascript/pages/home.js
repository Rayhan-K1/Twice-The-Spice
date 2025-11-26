// Vue Component Declaration
TwiceTheSpice.f.p.home = Vue.component('Home', function (resolve, reject) {
    // Loads html page content
    fetch('./source/html/home.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'Home',
                template: html,
                data() {
                    return {

                    }
                },
                computed: {
                    getDeviceOrientation: function () {
                        return TwiceTheSpice.o.globalFunctions.getDeviceOrientation();
                    }
                },
                methods: {
                    changePage: function (_page) {
                        this.$router.push('/' + _page);
                    },
                },
                mounted() {

                }
            })
        })
    })
})