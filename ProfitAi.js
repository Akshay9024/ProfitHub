document.addEventListener('DOMContentLoaded', function() {
    fetchFinancialData();
});

async function fetchFinancialData() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'; // Example endpoint for fetching Bitcoin price
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Display the financial data in the DOM
        const financialDataElement = document.getElementById('financial-data');
        financialDataElement.innerHTML = '';

        // Create and append financial data items
        Object.keys(data.bpi).forEach(currency => {
            const item = document.createElement('div');
            item.classList.add('financial-item');
            item.innerHTML = `<strong>${currency}:</strong> ${data.bpi[currency].rate}`;
            financialDataElement.appendChild(item);
        });
    } catch (error) {
        console.error('Error fetching financial data:', error);
        const financialDataElement = document.getElementById('financial-data');
        financialDataElement.innerHTML = '<p>Failed to fetch financial data. Please try again later.</p>';
    }
}
