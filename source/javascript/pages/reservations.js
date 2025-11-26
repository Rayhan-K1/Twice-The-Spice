// Vue Component Declaration
TwiceTheSpice.f.p.reservations = Vue.component('Reservations', function (resolve, reject) {
    // Loads html page content
    fetch('./source/html/reservations.html').then((data) => {
        data.text().then((html) => {
            resolve({
                name: 'Reservations',
                template: html,
                data() {
                    return {
                        state: 'requestReservation',
                        reservationTimestamp: null,
                        firstName: null,
                        lastName: null,
                        contactNumber: null,
                        partySize: null,
                    }
                },
                computed: {
                    canRequestReservation: function () {
                        let vue = this;
                        if (vue.reservationTimestamp && vue.firstName && vue.lastName && vue.contactNumber && vue.partySize) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                methods: {
                    changePage: function (_page) {
                        this.$router.push('/' + _page);
                    },
                    getMinDateAllowed: async function () {
                        let date = await TwiceTheSpice.o.calls.getTimeAndDate();
                        date = date.dateTime.split('.');
                        date = date[0] + 'TZD';
                        document.getElementById('reservations_dateTime').min = date
                    },
                    sendReservation: function () {
                        let vue = this;
                        let timestamp = this.reservationTimestamp;
                        let date = this.formatDate(timestamp.split('T')[0]);
                        let time = timestamp.split('T')[1];
                        let firstName = this.firstName;
                        let surname = this.lastName;
                        let contactNumber = this.contactNumber;
                        let partySize = this.partySize;
                        let templateParams = {
                            "reservationDate": date,
                            "reservationTime": time,
                            "customerFirstName": firstName,
                            "customerLastName": surname,
                            "contactNumber": contactNumber,
                            "partySize": partySize
                        }
                        emailjs.send('service_ejur2zu', 'reservation', templateParams)
                            .then(function (response) {
                                console.log('SUCCESS!', response.status, response.text);
                                vue.state = 'reservationConfirmed';
                            }, function (error) {
                                console.log('FAILED...', error);
                            });
                    },
                    formatDate: function (_date) {
                        let dateArray = _date.split('-');
                        let day = dateArray[2];
                        let month = dateArray[1];
                        let year = dateArray[0];
                        return day + '/' + month + '/' + year;
                    },
                },
                mounted() {
                    this.getMinDateAllowed();
                }
            })
        })
    })
})