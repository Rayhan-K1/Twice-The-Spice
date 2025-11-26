// Vue Component Declaration
TwiceTheSpice.f.p.reviews = Vue.component('Reviews', function (resolve, reject) {
    // Loads html page content
    fetch('./source/html/reviews.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'Reviews',
                template: html,
                data() {
                    return {

                    }
                },
                methods: {
                    changePage: function (_page) {
                        this.$router.push('/' + _page);
                    }
                },
                mounted() {

                }
            })
        })
    })
})