(function () {

    function ModuleGeotarget() {
        if (typeof YMaps !== 'undefined' && YMaps.location.city.length >= 1) {
            this.city = YMaps.location.city;
        } else {
            this.city = '';
        }
        console.log('city', this.city);
        this.context = $("body");
        this.replaceCity();
    }

    ModuleGeotarget.prototype.replaceCity = function () {
        var that = this;
        this.context.find('span.city').removeClass('hidden').text(that.city);
    };

    window.module_geotarget = new ModuleGeotarget();
})();

(function () {
    $(".phone").inputmask("8 (999) 999-99-99");
    $('.birthday').inputmask("99.99.9999");
})();