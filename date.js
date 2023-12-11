//jshint esversion:6


//can use both module.exports.VAR and exports.VAR
exports.getDate = function() {

    const today = new Date();

    const day = today.toLocaleDateString("en-TH", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
    return day;
};