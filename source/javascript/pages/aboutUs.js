// Vue Component Declaration
TwiceTheSpice.f.p.aboutUs = Vue.component('AboutUs', function (resolve, reject) {
    // Loads html page content
    fetch('./source/html/aboutUs.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'aboutUs',
                template: html,
                data() {
                    return {
                        state: null,
                    }
                },
                computed: {
                    findState: function () {
                        return this.state;
                    },
                    getDeviceOrientation: function () {
                        return TwiceTheSpice.o.globalFunctions.getDeviceOrientation();
                    }
                },
                methods: {
                    goTo: function (_to) {
                        this.state = _to;
                    }
                },
                mounted() {

                }
            })
        })
    })
})