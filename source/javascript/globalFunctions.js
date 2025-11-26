TwiceTheSpice.o.globalFunctions = {
    getDeviceOrientation: function () {
        if (window.innerHeight > window.innerWidth) {
            return 'portrait';
        } else {
            return 'landscape';
        }
    }
}