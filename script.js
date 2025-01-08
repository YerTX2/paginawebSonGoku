// Lista de productos
const products = [
  {
    title: "Bot de Respuestas Automáticas",
    description: "Este bot permite automatizar respuestas frecuentes en WhatsApp.",
    features: [
      "Conexión con APIs externas.",
      "Soporte para múltiples idiomas.",
      "Integración con CRM.",
    ],
    image: "ruta_a_tu_imagen.jpg",
    url: "https://tuurl.com/bot1",
  },
  {
    title: "Bot de Gestión de Pedidos",
    description: "Optimiza la gestión de pedidos y pagos automatizados por WhatsApp.",
    features: [
      "Envío de facturas automáticas.",
      "Seguimiento de pedidos en tiempo real.",
      "Integración con plataformas de pago.",
    ],
    image: "ruta_a_tu_imagen_2.jpg",
    url: "https://tuurl.com/bot2",
  },
];

// Generar productos dinámicamente
const productList = document.querySelector(".product-list");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <ul>
      ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>
    <a href="${product.url}" class="btn" target="_blank">Ver más detalles</a>
  `;

  productList.appendChild(productCard);
});
