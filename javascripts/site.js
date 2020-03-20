$(document).ready(function() {
  
  updateCollateral();

  setTimeout(updateLoan, 1500);

  $('.scroll-down').click(function(event) {
      // Preventing default action of the event
      event.preventDefault();
      // Getting the height of the document
      var landingSectionHeight = $('.landing-section').height();
      var navbarHeight = $('.navbar').height();
      var n = landingSectionHeight + navbarHeight + 300;
      console.log(n)
      $('html, body').animate({ scrollTop: n }, 750);
  //                                       |    |
  //                                       |    --- duration (milliseconds) 
  //                                       ---- distance from the top
  });
});

function updateCollateral() {
  var collateralNames = ['btc', 'eth', 'ltc'];
  var rand
  var lastCollateralName = 'btc'
  var newCollateralName = 'eth'

  setInterval(function() {
    while (lastCollateralName === newCollateralName) {
      rand = Math.floor(Math.random() * 3);
      newCollateralName = collateralNames[rand];
    }
    $('.swap-collateral-slider').toggle('drop', {'direction': 'down'} ,function() {
      $('.swap-collateral-slider').html(`<img src="images/${newCollateralName}.svg" width="100%">`);
      $('.swap-collateral-slider').toggle('drop', {'direction': 'up'});
    });
    lastCollateralName = newCollateralName;
  }, 3000);
}

function updateLoan() {
  var loanNames = ['dai', 'usdc', 'gusd'];
  var rand
  var lastLoanName = 'dai'
  var newLoanName = 'usdc'

  setInterval(function() {
    while (lastLoanName === newLoanName) {
      rand = Math.floor(Math.random() * 3);
      newLoanName = loanNames[rand];
    }
    console.log(lastLoanName)
    console.log(newLoanName)
    $('.swap-loan-slider').toggle('drop', {'direction': 'down'} ,function() {
      $('.swap-loan-slider').html(`<img src="images/${newLoanName}.svg" width="100%">`);
      $('.swap-loan-slider').toggle('drop', {'direction': 'up'});
    });
    lastLoanName = newLoanName;

  }, 3000);
}

