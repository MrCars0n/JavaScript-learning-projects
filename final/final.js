// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the canvas element
    const ctx = document.getElementById("foodChart").getContext("2d");

    // Data for Minecraft food items and food points
    const data = {
        labels: ["Apple", "Baked Potato", "Bread", "Cake", "Cooked Porkchop", "Golden Carrot"],
        datasets: [
            {
                label: "Food Points",
                data: [4, 5, 5, 14, 8, 6],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
            }
        ]
    };

    // Configuration for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Food Points"
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Food Items"
                }
            }
        }
    };

    // Create the bar chart
    new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
});
