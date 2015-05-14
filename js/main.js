$(function () {
    
    var ViewModel = function () {
        var self = this;

    };

    ko.applyBindings(new ViewModel());

    $('#sun').click(function () { $('#sun g defs rect').velocity({y: 70}, 2000, function () { $('#sun g defs rect').attr('y', 230) }) } )
});
