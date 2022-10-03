/*!
 * Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */
//
// Scripts
//

var vpn_pie = document.getElementById("vpnPieChart").getContext("2d");
var vpnPieChart = new Chart(vpn_pie, {
  type: "pie",
  data: {
    labels: ["Success", "Failure"],
    datasets: [
      {
        data: pie_chart_vpn,
        backgroundColor: ["#f7323f", "#673ba7"],
        borderWidth: 0,
      },
    ],
  },
});
