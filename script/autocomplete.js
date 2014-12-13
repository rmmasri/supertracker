$(function () {
    var availableTags = [
        "Yogurt, plain, low-fat",
        "Blueberries (raw)",
        "Cereal, Honey Bunches of Oats with Almonds"
    ];
    $("#breakfastSelector").autocomplete({
        source: availableTags
    });
});
