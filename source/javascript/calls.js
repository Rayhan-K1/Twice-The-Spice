TwiceTheSpice.o.calls = {
    getTimeAndDate: function () {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://www.timeapi.io/api/Time/current/zone?timeZone=GMT",
                type: "GET",
                dataType: "application/json",
                data: {

                },
                success: function (data) {
                    data = data.responseText;
                    data = data.replace('\\', '');
                    data = JSON.parse(data);
                    resolve(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                    jqXHR = jqXHR.responseText;
                    jqXHR = jqXHR.replace('\\', '');
                    jqXHR = JSON.parse(jqXHR);
                    resolve(jqXHR);
                }
            });
        })
    }
}