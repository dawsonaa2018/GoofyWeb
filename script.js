// Select DOM elements
const dataTransferSelect = document.getElementById('dataTransferSelect');
const modularPartInstallSelect = document.getElementById('modularPartInstallSelect');
const diagNoServiceSelect = document.getElementById('diagNoServiceSelect');
const diagWithServiceSelect = document.getElementById('diagWithServiceSelect');
const nonModularPartInstallSelect = document.getElementById('nonModularPartInstallSelect');
const quoteForm = document.getElementById('quoteForm');
const totalCost = document.getElementById('totalCost');
const toggleButton = document.getElementById('toggleButton');
const quoteBuilder = document.getElementById('quoteBuilder');
const servicesPage = document.getElementById('servicesPage');

// Define prices for services
const dataTransferPrice = 80;
const modularPartInstallPrice = 40;
const diagNoServicePrice = 10;
const diagWithServicePrice = 0;
const nonModularPartInstallPrice = 100;

// Toggle between quote builder and services page
function togglePage() {
  if (quoteBuilder.style.display === 'none') {
    quoteBuilder.style.display = 'block';
    servicesPage.style.display = 'none';
    toggleButton.innerText = 'View Services and Prices';
  } else {
    quoteBuilder.style.display = 'none';
    servicesPage.style.display = 'block';
    toggleButton.innerText = 'Build a Quote';
  }
}

// Update total cost based on form inputs
function updateTotal() {
  const dataTransferCost = dataTransferSelect.value * dataTransferPrice;
  const modularPartInstallCost = modularPartInstallSelect.value * modularPartInstallPrice;
  const diagNoServiceCost = diagNoServiceSelect.value * diagNoServicePrice;
  const diagWithServiceCost = diagWithServiceSelect.value * diagWithServicePrice;
  const nonModularPartInstallCost = nonModularPartInstallSelect.value * nonModularPartInstallPrice;

  const total = dataTransferCost + modularPartInstallCost + diagNoServiceCost + diagWithServiceCost + nonModularPartInstallCost;
  totalCost.innerText = total;
}

// Submit quote form and display total cost
function submitQuote() {
  // Get user inputs
  const name = document.getElementById("nameInput").value;
  const phone = document.getElementByID("phoneInput").value;
  const email = document.getElementById("emailInput").value;
  const services = [
    {
      name: "Data transfer",
      price: 80,
      quantity: document.getElementById("dataTransferSelect").value
    },
    {
      name: "Modular part install",
      price: 40,
      quantity: document.getElementById("modularPartInstallSelect").value
    },
    {
      name: "Diagnostic with no further service",
      price: 10,
      quantity: document.getElementById("diagNoServiceSelect").value
    },
    {
      name: "Diagnostic with further service",
      price: "fee waived",
      quantity: document.getElementById("diagWithServiceSelect").value
    },
    {
      name: "Non-modular part install",
      price: 100,
      quantity: document.getElementById("nonModularPartInstallSelect").value
    }
  ];

  // Calculate total price
  let totalPrice = 0;
  services.forEach(service => {
    totalPrice += service.price * service.quantity;
  });

  // Create email body
  const emailBody = `Name: ${name}%0D%0AEmail:${phone}%0D%0APhone: ${email}%0D%0AServices:%0D%0A${services.map(service => `${service.name}: ${service.quantity}`).join("%0D%0A")}%0D%0ATotal: $${totalPrice}`;

  // Construct email link
  const mailtoLink = `mailto:goofysllc66502@gmail.com?subject=Quote Request&body=${emailBody}`;

  // Open email client with pre-populated email
  window.location.href = mailtoLink;
}


document.getElementById("dataTransferSelect").addEventListener("change", function() {
  document.getElementById("totalCost").textContent = calculateTotal();
});

document.getElementById("modularPartInstallSelect").addEventListener("change", function() {
  document.getElementById("totalCost").textContent = calculateTotal();
});

document.getElementById("diagNoServiceSelect").addEventListener("change", function() {
  document.getElementById("totalCost").textContent = calculateTotal();
});

document.getElementById("diagWithServiceSelect").addEventListener("change", function() {
  document.getElementById("totalCost").textContent = calculateTotal();
});

document.getElementById("nonModularPartInstallSelect").addEventListener("change", function() {
  document.getElementById("totalCost").textContent = calculateTotal();
});


function calculateTotal() {
  var dataTransferPrice = parseInt(document.getElementById("dataTransferSelect").value) * 80;
  var modularPartInstallPrice = parseInt(document.getElementById("modularPartInstallSelect").value) * 40;
  var diagNoServicePrice = parseInt(document.getElementById("diagNoServiceSelect").value) * 10;
  var nonModularPartInstallPrice = parseInt(document.getElementById("nonModularPartInstallSelect").value) * 100;
  var diagWithServicePrice = 0;
  if (document.getElementById("diagWithServiceSelect").value > 0) {
    diagWithServicePrice = 0;
  }
  var totalPrice = dataTransferPrice + modularPartInstallPrice + diagNoServicePrice + diagWithServicePrice + nonModularPartInstallPrice;
  return totalPrice;
}
