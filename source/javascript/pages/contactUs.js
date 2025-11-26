// Vue Component Declaration
TwiceTheSpice.f.p.contactUs = Vue.component('ContactUs', function (resolve, reject) {
    // Loads html page content
    fetch('./source/html/contactUs.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'contactUs',
                template: html,
                data() {
                    return {
                        state: null,
                    }
                },
                computed: {

                },
                methods: {
                    sendForm: function () {
                        var templateParams = {
                            "from_name": 'James',
                            "message": 'Check this out!'
                        };

                        emailjs.send('service_ejur2zu', 'invoice', templateParams)
                            .then(function (response) {
                                console.log('SUCCESS!', response.status, response.text);
                            }, function (error) {
                                console.log('FAILED...', error);
                            });
                    }
                },
                mounted() {

                }
            })
        })
    })
})