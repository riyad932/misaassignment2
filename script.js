function calculateTourCost() {
    var tourName = document.getElementById('tourName').value.toLowerCase();
    var stayDays = parseInt(document.getElementById('stayDays').value);

    var tourCosts = {
        'mountain': 1000,
        'beach': 150,
        'hill': 800,
        'island': 1200,
        'river': 250,
    };

    if (tourName in tourCosts) {
        var cost = tourCosts[tourName];
        if (!isNaN(stayDays)) {
            var totalCost = cost * stayDays;
            document.getElementById('tourCostOutput').textContent = `Total Cost for ${stayDays} days in ${tourName}: $${totalCost}`;
        } else {
            document.getElementById('tourCostOutput').textContent = 'Please enter a valid number of days.';
        }
    } else {
        document.getElementById('tourCostOutput').textContent = 'Tour not found. Please check the tour name.';
    }
}
