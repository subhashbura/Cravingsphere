const products = [
  {
    id: 1,
    name: "Handwoven Basket",
    price: "$45",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Beautifully crafted natural basket",
    category: "decor"
  },
  {
    id: 2,
    name: "Ceramic Vase",
    price: "$65",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Hand-thrown ceramic vase",
    category: "decor"
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    price: "$85",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Intricate macrame design",
    category: "wall"
  },
  {
    id: 4,
    name: "Wooden Cutting Board",
    price: "$55",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted wooden board",
    category: "kitchen"
  }
];

const testimonials = [
  {
    text: "The quality of their handmade products is exceptional. I love my macrame wall hanging!",
    author: "Sarah Johnson"
  },
  {
    text: "Beautiful craftsmanship and excellent customer service. Will definitely buy again!",
    author: "Michael Chen"
  },
  {
    text: "Each piece is unique and tells its own story. I'm a happy returning customer.",
    author: "Emma Davis"
  }
];

function createProductCard(product) {
  return `
    <div class="product-card" data-category="${product.category}">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
      </div>
    </div>
  `;
}

function createTestimonialCard(testimonial) {
  return `
    <div class="testimonial-card">
      <p class="testimonial-text">"${testimonial.text}"</p>
      <p class="testimonial-author">- ${testimonial.author}</p>
    </div>
  `;
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Product filtering
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filter products
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

// Initialize products and testimonials
const productGrid = document.getElementById('productGrid');
productGrid.innerHTML = products.map(product => createProductCard(product)).join('');

const testimonialGrid = document.getElementById('testimonialGrid');
testimonialGrid.innerHTML = testimonials.map(testimonial => createTestimonialCard(testimonial)).join('');

// Add scroll animation for products
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .testimonial-card').forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease-out';
  observer.observe(card);
});