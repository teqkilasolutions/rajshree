document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. GLOBAL CONFIG & AUTH ---
    // Rates will be fetched dynamically
    window.rajshreeRates = { gold: 7150, silver: 94, platinum: 2800 };
    updateGoldTicker(window.rajshreeRates); // Initialize ticker immediately
    checkAuth();
    highlightActiveLink();
    fetchLiveRates();
    updateWishlistButtons(); // Check status on load
    initCustomCursor(); // Initialize Luxury Cursor
    injectWhatsAppWidget(); // Add WhatsApp Button
    initScrollFade(); // Initialize Scroll Fade
    initMagneticEffect(); // Initialize Magnetic Buttons
    initBackToTop(); // Initialize Back to Top
    initClickSound(); // Initialize Click Sound

    // --- 0.5. PRODUCT DATABASE ---
    // Add your items here. For multiple images, list them in the images array.
    const productsDatabase = [
        {
            id: '1',
            name: 'Kundan Bridal Set',
            category: 'sets',
            weight: 35,
            material: 'gold',
            size: 'Adjustable',
            images: [
                'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '2',
            name: 'Emerald Gold Ring',
            category: 'rings',
            weight: 8,
            material: 'gold',
            size: 'US 7',
            images: [
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '3',
            name: 'Temple Jhumkas',
            category: 'earrings',
            weight: 12,
            material: 'gold',
            size: 'Standard',
            images: [
                'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '4',
            name: 'Polki Choker',
            category: 'necklaces',
            weight: 25,
            material: 'gold',
            size: 'Adjustable',
            images: [
                'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '5',
            name: 'Ruby Gold Haram',
            category: 'necklaces',
            weight: 45,
            material: 'gold',
            size: '24 inches',
            images: [
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '6',
            name: 'Solitaire Diamond Ring',
            category: 'rings',
            weight: 5,
            material: 'platinum',
            size: 'US 6',
            images: [
                'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '7',
            name: 'Antique Gold Band',
            category: 'rings',
            weight: 6,
            material: 'gold',
            size: 'US 8',
            images: [
                'https://images.unsplash.com/photo-1598560976772-096209337f55?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1598560976772-096209337f55?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1598560976772-096209337f55?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '8',
            name: 'Chandbali Earrings',
            category: 'earrings',
            weight: 10,
            material: 'gold',
            size: 'Standard',
            images: [
                'https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '9',
            name: 'Diamond Studs',
            category: 'earrings',
            weight: 4,
            material: 'platinum',
            size: 'Standard',
            images: [
                'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '10',
            name: 'Diamond Tennis Bracelet',
            category: 'bracelets',
            weight: 15,
            material: 'platinum',
            size: '7 inches',
            images: [
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '11',
            name: 'Maharani Polki Set',
            category: 'sets',
            weight: 80,
            material: 'gold',
            size: 'Adjustable',
            images: [
                'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: '302',
            name: 'Silver Payal (Anklets)',
            category: 'bracelets',
            weight: 50,
            material: 'silver',
            size: '10 inches',
            images: [
                'https://images.unsplash.com/photo-1606760316443-a050c39c433b?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1606760316443-a050c39c433b?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1606760316443-a050c39c433b?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: 'neck-new-1',
            name: 'Royal Jadau Set',
            category: 'necklaces',
            weight: 90,
            material: 'gold',
            size: 'Adjustable',
            images: [
                'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: 'neck-new-2',
            name: 'Modern Layered Chain',
            category: 'necklaces',
            weight: 15,
            material: 'gold',
            size: '18 inches',
            images: [
                'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: 'neck-new-3',
            name: 'Pearl & Ruby Choker',
            category: 'necklaces',
            weight: 35,
            material: 'gold',
            size: '14 inches',
            images: [
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: 'neck-new-4',
            name: 'Traditional Mango Mala',
            category: 'necklaces',
            weight: 60,
            material: 'gold',
            size: '26 inches',
            images: [
                'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop'
            ]
        },
        {
            id: 'neck-new-5',
            name: 'Diamond Pendant Chain',
            category: 'necklaces',
            weight: 6,
            material: 'platinum',
            size: '16 inches',
            images: [
                'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop'
            ]
        },
        // --- KADA COLLECTION (Kada King) ---
        {
            id: 'kada1',
            name: 'Royal Maharaja Kada',
            category: 'kada',
            weight: 45,
            material: 'gold',
            size: '2.6',
            images: ['assets/images/kada1-1.jpeg', 'assets/images/kada1-2.jpeg']
        },
        {
            id: 'kada2',
            name: 'Antique Kundan Kada',
            category: 'kada',
            weight: 50,
            material: 'gold',
            size: '2.4',
            images: ['assets/images/kada2-1.jpeg', 'assets/images/kada2-2.jpeg']
        },
        {
            id: 'kada3',
            name: 'Temple Carved Kada',
            category: 'kada',
            weight: 42,
            material: 'gold',
            size: '2.6',
            images: ['assets/images/kada3.jpeg', 'assets/images/kada3-2.jpeg']
        },
        {
            id: 'kada4',
            name: 'Rose Gold Diamond Kada',
            category: 'kada',
            weight: 35,
            material: 'gold',
            size: '2.4',
            images: ['assets/images/kada4.jpeg', 'assets/images/kada4-1.jpeg', 'assets/images/kada4-2.jpeg']
        },
        {
            id: 'kada5',
            name: 'Jaipur Meenakari Kada',
            category: 'kada',
            weight: 48,
            material: 'gold',
            size: '2.8',
            images: ['assets/images/kada5.jpeg', 'assets/images/kada5-2.jpeg']
        },
        {
            id: 'kada6',
            name: 'Heavy Solid Gold Kada',
            category: 'kada',
            weight: 60,
            material: 'gold',
            size: '2.6',
            images: ['assets/images/kada6.jpeg', 'assets/images/kada6-1.jpeg', 'assets/images/kada6-2.jpeg']
        },
        {
            id: 'kada7',
            name: 'Peacock Design Kada',
            category: 'kada',
            weight: 55,
            material: 'gold',
            size: '2.4',
            images: ['assets/images/kada7.jpeg']
        },
        {
            id: 'kada8',
            name: 'Ruby Studded Kada',
            category: 'kada',
            weight: 40,
            material: 'gold',
            size: '2.6',
            images: ['assets/images/kada8.jpeg', 'assets/images/kada8-1.jpeg', 'assets/images/kada8-2.jpeg']
        },
        {
            id: 'kada9',
            name: 'Emerald Polki Kada',
            category: 'kada',
            weight: 44,
            material: 'gold',
            size: '2.4',
            images: [  'assets/images/kada9-1.jpeg', 'assets/images/kada9.jpeg',  'assets/images/kada9-2.jpeg']
        },
        {
            id: 'kada10',
            name: 'Designer Mesh Kada',
            category: 'kada',
            weight: 38,
            material: 'gold',
            size: '2.6',
            images: [ 'assets/images/kada10-1.jpeg', 'assets/images/kada10.jpeg',  'assets/images/kada10-2.jpeg']
        },
        {
            id: 'kada11',
            name: 'Vintage Filigree Kada',
            category: 'kada',
            weight: 46,
            material: 'gold',
            size: '2.4',
            images: [ 'assets/images/kada11-1.jpeg', 'assets/images/kada11.jpeg',  'assets/images/kada11-2.jpeg']
        },
        {
            id: 'kada12',
            name: 'Modern Geometric Kada',
            category: 'kada',
            weight: 52,
            material: 'gold',
            size: '2.8',
            images: [ 'assets/images/kada12-1.jpeg', 'assets/images/kada12.jpeg',  'assets/images/kada12-2.jpeg']
        },
        {
            id: 'kada13',
            name: 'Classic Smooth Kada',
            category: 'kada',
            weight: 58,
            material: 'gold',
            size: '2.6',
            images: [ 'assets/images/kada13-1.jpeg', 'assets/images/kada13.jpeg',  'assets/images/kada13-2.jpeg']
        },
        {
            id: 'kada14',
            name: 'Bridal Heavy Kada',
            category: 'kada',
            weight: 75,
            material: 'gold',
            size: '2.4',
            images: [  'assets/images/kada14-1.jpeg', 'assets/images/kada14.jpeg', 'assets/images/kada14-2.jpeg']
        }
    ];
    // Expose to window if needed for other scripts, or just use locally
    window.rajshreeProducts = productsDatabase;
    
    // --- 1. VISUAL ANIMATIONS (From Magazine Version) ---
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 1500);
    }

    // Scroll Reveal (Intersection Observer)
    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-text, .reveal-card');
    revealElements.forEach(el => observer.observe(el));

    // Create Modal HTML
    createCartModal();
    createOrderSuccessModal();
    createGenericModal();
    createConfirmationModal();
    injectProductModalStyles();
    createProductDetailModal();

    // --- 2. FUNCTIONAL LOGIC (From Functional Version) ---
    
    updateCartCount();

    // Mobile Menu
    const menuToggle = document.getElementById('mobile-menu'); // Hamburger
    const navLinks = document.getElementById('nav-links-container'); // The nav container

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            menuToggle.classList.toggle('active');
        });
    }

    // Add to Cart Logic
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('add-to-cart')) {
            const btn = e.target;
            const product = {
                id: btn.dataset.id,
                name: btn.dataset.name,
                price: parseInt(btn.dataset.price),
                img: btn.dataset.img
            };
            addToCart(product);
            showCartModal(product); // Pass full product object
        }
    });

    // Wishlist Logic
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.wishlist-btn');
        if(btn) {
            const card = btn.closest('.product-card') || btn.closest('.detail-info');
            const cartBtn = card.querySelector('.add-to-cart');
            const product = {
                id: cartBtn.dataset.id,
                name: cartBtn.dataset.name,
                price: parseInt(cartBtn.dataset.price),
                img: cartBtn.dataset.img
            };
            toggleWishlist(product, btn);
        }
    });

    // Page Specifics
    const path = window.location.pathname;

    // Cart Page Logic
    if (path.includes('cart.html')) {
        renderCartPage();

        const applyCouponBtn = document.getElementById('apply-coupon-btn');
        if(applyCouponBtn) {
            applyCouponBtn.addEventListener('click', () => {
                const codeInput = document.getElementById('coupon-code');
                if(codeInput.value.toUpperCase() === 'RAJ10') {
                    sessionStorage.setItem('appliedCoupon', JSON.stringify({ code: 'RAJ10', discount: 0.1 }));
                    renderCartPage(); // Re-render to apply discount
                    showGenericModal('Success', 'Coupon "RAJ10" applied!');
                } else {
                    showGenericModal('Error', 'Invalid coupon code.');
                }
            });
        }
    }
    
    // Checkout Page Logic
    if (path.includes('checkout.html')) {
        renderCheckoutSummary();
        prefillCheckout();

        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Save Order Logic
                const cart = JSON.parse(localStorage.getItem('rajshreeCart')) || [];
                if(cart.length > 0) {
                    const order = {
                        id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
                        date: new Date().toLocaleDateString(),
                        items: cart,
                        total: cart.reduce((acc, item) => acc + (item.price * item.qty), 0),
                        status: 'Processing'
                    };
                    const orders = JSON.parse(localStorage.getItem('rajshreeOrders')) || [];
                    orders.unshift(order);
                    localStorage.setItem('rajshreeOrders', JSON.stringify(orders));
                }

                localStorage.removeItem('rajshreeCart');
                showOrderSuccessModal();
            });
        }
    }

    // Filter Logic
    if (path.includes('collection.html')) {
        renderProductsFromData(productsDatabase); // Render items from JS
        initPriceFilter();
        
        // Load saved state
        loadFilterState();
        
        const filterBtns = document.querySelectorAll('.filter-btn');
        const products = document.querySelectorAll('.product-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Handle Category Filter
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilters();
                saveFilterState();
            });
        });
        // Check for URL parameter to apply filter automatically
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        if (categoryParam) {
            const targetBtn = document.querySelector(`.filter-btn[data-filter="${categoryParam}"]`);
            if (targetBtn) targetBtn.click();
        } else {
            // Apply loaded filters if no URL param
            applyFilters();
            const sortSelect = document.getElementById('sort-select');
            if(sortSelect) sortProducts(sortSelect.value);
        }

        // Sort Logic
        const sortSelect = document.getElementById('sort-select');
        if(sortSelect) {
            sortSelect.addEventListener('change', () => {
                sortProducts(sortSelect.value);
                saveFilterState();
            });
        }
        
        const applyPriceBtn = document.getElementById('apply-price');
        if(applyPriceBtn) {
            applyPriceBtn.addEventListener('click', saveFilterState);
        }
    }

    // Orders Page Logic
    if (path.includes('orders.html')) {
        renderOrdersPage();
    }

    // Profile Page Logic
    if (path.includes('profile.html')) {
        renderProfilePage();
    }

    // Wishlist Page Logic
    if (path.includes('wishlist.html')) {
        renderWishlistPage();
    }

    // Product Detail Page Logic
    if (path.includes('product-detail.html')) {
        loadProductDetailPage(productsDatabase);
    }

    // About Page Logic
    if (path.includes('about.html')) {
        initTestimonialSlider();
        
        const aboutForm = document.getElementById('about-contact-form');
        if(aboutForm) {
            aboutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                showGenericModal('Message Sent', 'Thank you for reaching out. We will get back to you shortly.');
                aboutForm.reset();
            });
        }
    }
});

// --- HELPER FUNCTIONS ---

function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    // If on root (e.g. domain.com/), treat it as index.html
    const activePage = currentPage === '' ? 'index.html' : currentPage;

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
        }
    });
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('rajshreeCart')) || [];
    const existing = cart.find(item => item.id === product.id);
    if(existing) {
        existing.qty += 1;
    } else {
        product.qty = 1;
        cart.push(product);
    }
    localStorage.setItem('rajshreeCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('rajshreeCart')) || [];
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(b => b.innerText = count);
}

function renderCartPage() {
    const cartContainer = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');
    const finalTotalEl = document.getElementById('cart-final-total');
    const cartWrapper = document.querySelector('.cart-items-wrapper');
    let cart = JSON.parse(localStorage.getItem('rajshreeCart')) || [];

    if(!cartContainer) return;

    if(cart.length === 0) {
        cartContainer.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:2rem;">Your Royal Bag is Empty.</td></tr>';
        if(subtotalEl) {
            subtotalEl.innerText = '₹ 0';
            document.getElementById('discount-row').style.display = 'none';
        }
        if(finalTotalEl) finalTotalEl.innerText = '₹ 0';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        html += `
            <tr>
                <td data-label="Product">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="${item.img}" class="cart-img">
                        <div>${item.name}</div>
                    </div>
                </td>
                <td data-label="Price">₹ ${item.price.toLocaleString()}</td>
                <td data-label="Quantity">
                    <div class="qty-selector">
                        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="number" class="qty-input" value="${item.qty}" readonly>
                        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td data-label="Action"><span class="remove-btn" onclick="removeItem(${index})">Remove</span></td>
            </tr>
        `;
    });

    cartContainer.innerHTML = html;

    // Coupon Logic
    const coupon = JSON.parse(sessionStorage.getItem('appliedCoupon'));
    let discount = 0;
    const discountRow = document.getElementById('discount-row');
    const discountAmountEl = document.getElementById('discount-amount');

    if (coupon && coupon.code === 'RAJ10' && discountRow && discountAmountEl) {
        discount = total * coupon.discount;
        discountRow.style.display = 'flex';
        discountAmountEl.innerText = `- ₹ ${Math.floor(discount).toLocaleString()}`;
    } else if (discountRow) {
        discountRow.style.display = 'none';
    }

    if(subtotalEl) subtotalEl.innerText = '₹ ' + total.toLocaleString();
    if(finalTotalEl) finalTotalEl.innerText = '₹ ' + Math.floor(total - discount).toLocaleString();

    // Add Clear Cart Button if not exists
    const existingClearBtn = document.getElementById('clear-cart-btn');
    if(!existingClearBtn && cartWrapper) {
        cartWrapper.insertAdjacentHTML('beforeend', '<button id="clear-cart-btn" class="btn-danger" onclick="clearCart()">Clear Cart</button>');
    }
}

window.removeItem = function(index) {
    let cart = JSON.parse(localStorage.getItem('rajshreeCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('rajshreeCart', JSON.stringify(cart));
    renderCartPage();
    updateCartCount();
}

window.updateQuantity = function(index, change) {
    let cart = JSON.parse(localStorage.getItem('rajshreeCart')) || [];
    if(cart[index]) {
        cart[index].qty += change;
        if(cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('rajshreeCart', JSON.stringify(cart));
        renderCartPage();
        updateCartCount();
    }
}

window.clearCart = function() {
    localStorage.removeItem('rajshreeCart');
    renderCartPage();
    updateCartCount();
}

// --- WISHLIST FUNCTIONS ---
function toggleWishlist(product, btn) {
    let wishlist = JSON.parse(localStorage.getItem('rajshreeWishlist')) || [];
    const index = wishlist.findIndex(item => item.id === product.id);
    
    if(index > -1) {
        wishlist.splice(index, 1);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        wishlist.push(product);
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    localStorage.setItem('rajshreeWishlist', JSON.stringify(wishlist));
}

function updateWishlistButtons() {
    let wishlist = JSON.parse(localStorage.getItem('rajshreeWishlist')) || [];
    const buttons = document.querySelectorAll('.wishlist-btn');
    
    buttons.forEach(btn => {
        const card = btn.closest('.product-card') || btn.closest('.detail-info');
        if(card) {
            const id = card.querySelector('.add-to-cart').dataset.id;
            if(wishlist.some(item => item.id === id)) {
                btn.classList.add('active');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
            }
        }
    });
}

function renderWishlistPage() {
    const container = document.getElementById('wishlist-grid');
    let wishlist = JSON.parse(localStorage.getItem('rajshreeWishlist')) || [];

    if(!container) return;

    if(wishlist.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#aaa;">Your wishlist is empty.</p>';
        return;
    }

    let html = '';
    wishlist.forEach(item => {
        html += `
            <div class="product-card">
                <div class="img-wrapper" style="height:300px; position:relative;">
                    <img src="${item.img}" style="width:100%; height:100%; object-fit:cover;">
                    <button class="wishlist-btn active" onclick="removeFromWishlist('${item.id}')"><i class="fas fa-heart"></i></button>
                </div>
                <div class="details">
                    <h4>${item.name}</h4>
                    <span class="price">Approx ₹ ${item.price.toLocaleString()}</span>
                    <button class="btn-gold btn-full" style="margin-top:10px;" onclick="addToCart({id:'${item.id}', name:'${item.name}', price:${item.price}, img:'${item.img}', qty:1}); showCartModal('${item.name}');">Add to Bag</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

window.removeFromWishlist = function(id) {
    let wishlist = JSON.parse(localStorage.getItem('rajshreeWishlist')) || [];
    const newWishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem('rajshreeWishlist', JSON.stringify(newWishlist));
    renderWishlistPage();
}

// --- MODAL FUNCTIONS ---
function createCartModal() {
    const modalHTML = `
        <div class="cart-modal-overlay" id="cartModal">
            <div class="cart-modal">
                <div class="modal-icon"><i class="fas fa-check-circle"></i></div>
                <h3 class="modal-title">Added to Bag</h3>
                <div class="modal-product-preview" id="modalPreview">
                    <img id="modalImg" src="" alt="">
                    <div>
                        <h4 id="modalProductName" style="color:#fff; margin:0; font-size:1rem;">Product Name</h4>
                        <span id="modalProductPrice" style="color:var(--text-gold); font-size:0.9rem;"></span>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-outline" onclick="closeCartModal()">Continue</button>
                    <button class="btn-gold" onclick="window.location.href='cart.html'">View Bag</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

window.showCartModal = function(product) {
    const modal = document.getElementById('cartModal');
    const nameEl = document.getElementById('modalProductName');
    const imgEl = document.getElementById('modalImg');
    const priceEl = document.getElementById('modalProductPrice');

    if(modal && nameEl) {
        nameEl.innerText = product.name;
        imgEl.src = product.img;
        priceEl.innerText = '₹ ' + product.price.toLocaleString();
        modal.classList.add('active');
    }
}

window.closeCartModal = function() {
    const modal = document.getElementById('cartModal');
    if(modal) modal.classList.remove('active');
}

function createGenericModal() {
    const modalHTML = `
        <div class="cart-modal-overlay" id="genericModal">
            <div class="cart-modal">
                <div class="modal-icon"><i class="fas fa-info-circle"></i></div>
                <h3 class="modal-title" id="genericTitle">Notification</h3>
                <p class="modal-msg" id="genericMsg">Message</p>
                <div class="modal-actions">
                    <button class="btn-gold" onclick="document.getElementById('genericModal').classList.remove('active')">OK</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

window.showGenericModal = function(title, msg) {
    const modal = document.getElementById('genericModal');
    if(modal) {
        document.getElementById('genericTitle').innerText = title;
        document.getElementById('genericMsg').innerText = msg;
        modal.classList.add('active');
    }
}

function createConfirmationModal() {
    const modalHTML = `
        <div class="cart-modal-overlay" id="confirmModal">
            <div class="cart-modal">
                <div class="modal-icon"><i class="fas fa-question-circle"></i></div>
                <h3 class="modal-title">Are you sure?</h3>
                <p class="modal-msg" id="confirmMsg">Do you want to proceed?</p>
                <div class="modal-actions">
                    <button class="btn-outline" onclick="document.getElementById('confirmModal').classList.remove('active')">Cancel</button>
                    <button class="btn-gold" id="confirmBtn">Yes, Proceed</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

window.showConfirmationModal = function(msg, callback) {
    const modal = document.getElementById('confirmModal');
    const btn = document.getElementById('confirmBtn');
    if(modal && btn) {
        document.getElementById('confirmMsg').innerText = msg;
        btn.onclick = () => { 
            modal.classList.remove('active');
            setTimeout(callback, 450); // Wait for animation to finish before callback
        };
        modal.classList.add('active');
    }
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items');
    const totalEl = document.getElementById('checkout-total');
    let cart = JSON.parse(localStorage.getItem('rajshreeCart')) || [];
    let total = 0;
    let html = '';

    if(cart.length === 0) {
        if(container) container.innerHTML = '<p>Your bag is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        html += `
            <div class="summary-row">
                <span>${item.name} (x${item.qty})</span>
                <span>₹ ${itemTotal.toLocaleString()}</span>
            </div>
        `;
    });

    // Add discount logic here too
    const coupon = JSON.parse(sessionStorage.getItem('appliedCoupon'));
    let discount = 0;
    if (coupon && coupon.code === 'RAJ10') {
        discount = total * coupon.discount;
        html += `
            <div class="summary-row" style="color: #4caf50;">
                <span>Discount (10%)</span>
                <span>- ₹ ${Math.floor(discount).toLocaleString()}</span>
            </div>
        `;
    }

    const finalTotal = total - discount;
    if(container) container.innerHTML = html;
    if(totalEl) totalEl.innerText = '₹ ' + Math.floor(finalTotal).toLocaleString();
}

function createOrderSuccessModal() {
    const modalHTML = `
        <div class="cart-modal-overlay" id="orderSuccessModal">
            <div class="cart-modal">
                <div class="modal-icon"><i class="fas fa-check-circle"></i></div>
                <h3 class="modal-title">Order Placed Successfully</h3>
                <p class="modal-msg">Thank you for choosing Rajshree Jewellers. Your royal collection is on its way.</p>
                <div class="modal-actions">
                    <button class="btn-gold" onclick="window.location.href='index.html'">Return Home</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

window.showOrderSuccessModal = function() {
    const modal = document.getElementById('orderSuccessModal');
    if(modal) modal.classList.add('active');
}

function renderOrdersPage() {
    const container = document.getElementById('orders-container');
    if (!container) return;
    
    const orders = JSON.parse(localStorage.getItem('rajshreeOrders')) || [];
    
    if (orders.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding: 3rem; color:rgba(255,255,255,0.6);">You have no previous orders.<br><a href="collection.html" class="btn-gold" style="margin-top:1rem; display:inline-block; text-decoration:none; color:#000;">Start Shopping</a></div>';
        return;
    }
    
    let html = '';
    orders.forEach(order => {
        html += `
            <div class="order-card">
                <div class="order-header">
                    <span>Order #${order.id}</span>
                    <span class="order-date">${order.date}</span>
                </div>
                <div class="order-body">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <img src="${item.img}" alt="${item.name}">
                            <div class="item-details">
                                <h4>${item.name}</h4>
                                <p>Qty: ${item.qty} | ₹ ${item.price.toLocaleString()}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-footer">
                    <span class="order-status">${order.status}</span>
                    <span class="order-total">Total: ₹ ${order.total.toLocaleString()}</span>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// --- LIVE RATES & API ---
async function fetchLiveRates() {
    // Cache configuration to save API quota
    const CACHE_KEY = 'rajshree_rates_cache';
    const CACHE_DURATION = 3600000 * 6; // 6 hours

    // 1. Check Cache
    try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
            const { timestamp, rates } = JSON.parse(cachedData);
            if (Date.now() - timestamp < CACHE_DURATION) {
                console.log('Using cached rates');
                window.rajshreeRates = rates;
                updateGoldTicker(rates);
                initDynamicPricing(rates);
                return;
            }
        }
    } catch (e) {
        console.warn('Cache access failed', e);
    }

    try {
        // Using data-asg.goldprice.org for live spot rates (No key required)
        // This endpoint returns prices in INR per Ounce
        const response = await fetch('https://data-asg.goldprice.org/dbXRates/INR');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            const item = data.items[0];
            const ozToGram = 31.1035;
            
            // Import Duty & Tax Multiplier for Indian Retail Market
            // Adjusted to match PolicyBazaar/Market Retail Rates (Spot + ~21%)
            const taxMultiplier = 1.21; 

            // Calculate per gram rates
            // item.xauPrice is Gold, xagPrice is Silver, xptPrice is Platinum
            const gold24k = (item.xauPrice / ozToGram) * taxMultiplier;
            const gold22k = gold24k * 0.916; // Standard 22k purity for jewellery
            const silver = (item.xagPrice / ozToGram) * taxMultiplier;
            const platinum = (item.xptPrice / ozToGram) * taxMultiplier;

            const rates = {
                gold: Math.round(gold22k),
                silver: Math.round(silver),
                platinum: Math.round(platinum)
            };
        
            // 2. Save to Cache
            try {
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    timestamp: Date.now(),
                    rates: rates
                }));
            } catch (e) {
                console.warn('Cache save failed', e);
            }

            window.rajshreeRates = rates;
            updateGoldTicker(rates);
            initDynamicPricing(rates);
            return;
        }
    } catch (error) {
        console.warn('Live rate fetch failed, using realistic market fallback.', error);
    }

    // Fallback: Realistic current market rates if API fails
    const rates = {
        gold: 7150,    // Approx 22k Gold/g (Retail Market)
        silver: 94,    // Approx Silver/g
        platinum: 2800 // Approx Platinum/g
    };
    window.rajshreeRates = rates;
    
    updateGoldTicker(rates);
    initDynamicPricing(rates);
}

function updateGoldTicker(rates) {
    const ticker = document.getElementById('gold-ticker-content');
    if(ticker && rates) {
        ticker.innerHTML = `
            <span>Live Gold (22k): ₹ ${rates.gold.toLocaleString()}/g</span>
            <span class="separator">|</span>
            <span>Live Silver: ₹ ${rates.silver.toLocaleString()}/g</span>
        `;
    }
}

// --- DYNAMIC PRICING & FILTERING ---
function initDynamicPricing(rates) {
    const products = document.querySelectorAll('.product-card, .detail-info');
    
    products.forEach(el => {
        // If it's a card or detail view, calculate price based on weight
        const weight = parseFloat(el.dataset.weight);
        const material = el.dataset.material; // gold, silver
        
        if (weight && material && rates[material]) {
            // Calculate Price: Weight * Rate
            const metalCost = weight * rates[material];
            const makingCharges = metalCost * 0.15; // 15% Making Charges
            const gst = (metalCost + makingCharges) * 0.03; // 3% GST
            
            // Round up to nearest 100
            const finalPrice = Math.ceil((metalCost + makingCharges + gst) / 100) * 100; 
            
            // Update UI Text
            const priceEl = el.querySelector('.price');
            if (priceEl) priceEl.innerText = 'Approx ₹ ' + finalPrice.toLocaleString();
            
            // Update Breakdown if exists (Detail Page)
            if(document.getElementById('bd-metal')) {
                document.getElementById('bd-metal').innerText = '₹ ' + Math.round(metalCost).toLocaleString();
                document.getElementById('bd-making').innerText = '₹ ' + Math.round(makingCharges).toLocaleString();
                document.getElementById('bd-gst').innerText = '₹ ' + Math.round(gst).toLocaleString();
                document.getElementById('bd-total').innerText = '₹ ' + finalPrice.toLocaleString();
            }
            
            // Update Button Data if inside card
            const btn = el.querySelector('.add-to-cart');
            if(btn) {
                // Update Data Attribute for Cart Logic
                btn.dataset.price = finalPrice;
            }
        }
    });
}

function renderProductsFromData(products) {
    const container = document.getElementById('product-grid');
    // Only run if the container exists in HTML
    if (!container) return;

    let html = '';
    const rates = window.rajshreeRates || { gold: 7250, silver: 96, platinum: 2900 };
    products.forEach((product, index) => {
        // Calculate estimated price (will be updated by live rates logic later)
        const rate = rates[product.material] || rates.silver;
        
        const metalCost = product.weight * rate;
        // Price = Metal + 15% Making + 3% GST
        const price = Math.ceil((metalCost * 1.15 * 1.03) / 100) * 100;

        const mainImg = product.images[0];
        // If there is a second image, use it for hover effect
        const hoverImg = product.images.length > 1 ? product.images[1] : mainImg;
        const allImages = product.images.join(',');

        html += `
            <div class="product-card" data-index="${index}" data-category="${product.category}" data-weight="${product.weight}" data-material="${product.material}" onclick="window.location.href='product-detail.html?id=${product.id}'" style="cursor: pointer;">
                <div class="img-wrapper">
                    <img src="${mainImg}" 
                         loading="lazy"
                         onmouseover="this.src='${hoverImg}'" 
                         onmouseout="this.src='${mainImg}'" 
                         alt="${product.name}" class="product-img">
                    <button class="wishlist-btn" onclick="event.stopPropagation();"><i class="far fa-heart"></i></button>
                </div>
                <div class="details">
                    <h4>${product.name}</h4>
                    <span class="weight-badge">Net Wt: ${product.weight}g</span>
                    <span class="price">Approx ₹ ${price.toLocaleString()}</span>
                    <button class="add-to-cart btn-gold" 
                        onclick="event.stopPropagation();"
                        data-id="${product.id}" data-name="${product.name}" 
                        data-price="${price}" data-img="${mainImg}" data-images="${allImages}">
                        Add to Bag
                    </button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    
    // Ensure dynamic pricing is applied to new elements
    if(window.rajshreeRates) initDynamicPricing(window.rajshreeRates);
}

function loadProductDetailPage(products) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.querySelector('.detail-page-container').innerHTML = '<div style="text-align:center; padding:50px;"><h2>Product not found</h2><a href="collection.html" class="btn-gold">Back to Collections</a></div>';
        return;
    }

    // Calculate Price
    const rates = window.rajshreeRates || { gold: 7250, silver: 96, platinum: 2900 };
    const rate = rates[product.material] || rates.silver;

    const metalCost = product.weight * rate;
    const makingCharges = metalCost * 0.15;
    const gst = (metalCost + makingCharges) * 0.03;
    const price = Math.ceil((metalCost + makingCharges + gst) / 100) * 100;

    // Populate Text
    document.getElementById('detail-title').innerText = product.name;
    // Hide main price initially, breakdown shows it clearly
    document.getElementById('detail-price').style.display = 'none'; 
    
    let metaText = 'Net Wt: ' + product.weight + 'g';
    if(product.size) metaText += ' | Size: ' + product.size;
    
    document.getElementById('detail-weight').innerText = metaText;
    document.getElementById('detail-material').innerText = product.material;
    document.title = product.name + ' | Rajshree';
    document.getElementById('breadcrumb-name').innerText = product.name;

    // Inject Pricing Breakdown
    const breakdownHTML = `
        <div class="price-breakdown">
            <div class="breakdown-row"><span>Gold Value (${product.weight}g x ₹${rate.toLocaleString()}/g)</span> <span id="bd-metal">₹ ${Math.round(metalCost).toLocaleString()}</span></div>
            <div class="breakdown-row"><span>Making Charges (15%)</span> <span id="bd-making">₹ ${Math.round(makingCharges).toLocaleString()}</span></div>
            <div class="breakdown-row"><span>GST (3%)</span> <span id="bd-gst">₹ ${Math.round(gst).toLocaleString()}</span></div>
            <div class="breakdown-row final"><span>Grand Total (Approx)</span> <span id="bd-total">₹ ${price.toLocaleString()}</span></div>
        </div>
    `;
    
    // Remove existing breakdown if any
    const existingBd = document.querySelector('.price-breakdown');
    if(existingBd) existingBd.remove();
    
    document.getElementById('detail-price').insertAdjacentHTML('afterend', breakdownHTML);

    // Set data attributes for dynamic pricing
    const infoContainer = document.querySelector('.detail-info');
    if(infoContainer) {
        infoContainer.dataset.weight = product.weight;
        infoContainer.dataset.material = product.material;
        
        // Ensure dynamic pricing is applied
        if(window.rajshreeRates) initDynamicPricing(window.rajshreeRates);
    }

    // Setup Images
    const mainImg = document.getElementById('detail-main-img');
    const thumbContainer = document.getElementById('detail-thumbnails');
    
    mainImg.src = product.images[0];
    thumbContainer.innerHTML = '';
    
    let currentImgIndex = 0;

    function updateMainImage(index) {
        currentImgIndex = index;
        mainImg.src = product.images[currentImgIndex];
        document.querySelectorAll('.detail-thumb').forEach((t, i) => {
            if(i === index) t.classList.add('active');
            else t.classList.remove('active');
        });
    }

    product.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `detail-thumb ${index === 0 ? 'active' : ''}`;
        thumb.onclick = function() {
            updateMainImage(index);
        };
        thumbContainer.appendChild(thumb);
    });

    // Arrow Logic
    document.getElementById('prevArrow').onclick = () => {
        let newIndex = currentImgIndex - 1;
        if(newIndex < 0) newIndex = product.images.length - 1;
        updateMainImage(newIndex);
    };
    document.getElementById('nextArrow').onclick = () => {
        let newIndex = currentImgIndex + 1;
        if(newIndex >= product.images.length) newIndex = 0;
        updateMainImage(newIndex);
    };

    // Zoom Logic for Detail Page
    const imgContainer = document.getElementById('detailImgContainer');
    imgContainer.addEventListener('mousemove', (e) => {
        const rect = imgContainer.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mainImg.style.transformOrigin = `${x}% ${y}%`;
    });
    imgContainer.addEventListener('mouseenter', () => mainImg.classList.add('zoomed'));
    imgContainer.addEventListener('mouseleave', () => {
        mainImg.classList.remove('zoomed');
        setTimeout(() => { mainImg.style.transformOrigin = 'center center'; }, 300);
    });

    // Setup Add to Cart
    const btn = document.getElementById('detail-add-btn');
    btn.onclick = () => {
        const productObj = { id: product.id, name: product.name, price: price, img: product.images[0] };
        addToCart(productObj);
        showCartModal(productObj);
    };
}

function initPriceFilter() {
    const minRange = document.getElementById('min-range');
    const maxRange = document.getElementById('max-range');
    const minVal = document.getElementById('min-value');
    const maxVal = document.getElementById('max-value');
    const applyBtn = document.getElementById('apply-price');
    
    if(minRange && maxRange) {
        minRange.addEventListener('input', function() {
            if(parseInt(this.value) > parseInt(maxRange.value)) this.value = maxRange.value;
            minVal.innerText = '₹ ' + parseInt(this.value).toLocaleString();
        });
        maxRange.addEventListener('input', function() {
            if(parseInt(this.value) < parseInt(minRange.value)) this.value = minRange.value;
            maxVal.innerText = '₹ ' + parseInt(this.value).toLocaleString();
        });
    }

    if(applyBtn) {
        applyBtn.addEventListener('click', applyFilters);
    }
}

function sortProducts(sortValue) {
    const container = document.getElementById('product-grid');
    if(!container) return;
    
    const products = Array.from(container.getElementsByClassName('product-card'));

    products.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.add-to-cart').dataset.price);
        const priceB = parseInt(b.querySelector('.add-to-cart').dataset.price);
        const indexA = parseInt(a.dataset.index);
        const indexB = parseInt(b.dataset.index);

        if (sortValue === 'low-high') return priceA - priceB;
        else if (sortValue === 'high-low') return priceB - priceA;
        else return indexA - indexB; // Default order
    });

    // Re-append in new order
    products.forEach(p => container.appendChild(p));
}

function applyFilters() {
    const products = document.querySelectorAll('.product-card');
    const activeCatBtn = document.querySelector('.filter-btn.active');
    const category = activeCatBtn ? activeCatBtn.dataset.filter : 'all';
    
    const minPrice = parseInt(document.getElementById('min-range').value) || 0;
    const maxPrice = parseInt(document.getElementById('max-range').value) || 5000000;

    products.forEach(prod => {
        const price = parseInt(prod.querySelector('.add-to-cart').dataset.price);
        const prodCat = prod.dataset.category;
        
        const catMatch = category === 'all' || prodCat === category;
        const priceMatch = price >= minPrice && price <= maxPrice;
        
        if (catMatch && priceMatch) {
            prod.classList.remove('hidden');
        } else {
            prod.classList.add('hidden');
        }
    });
}

// --- AUTH SYSTEM ---
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('rajshreeUser'));
    const profileIcons = document.querySelectorAll('.profile-icon');
    
    profileIcons.forEach(icon => {
        if (user) {
            icon.href = 'profile.html';
            icon.innerHTML = '<i class="fas fa-user-circle"></i>'; // Change icon to indicate logged in
        } else {
            icon.href = 'login.html';
            icon.innerHTML = '<i class="far fa-user"></i>';
        }
    });
}

function prefillCheckout() {
    const user = JSON.parse(localStorage.getItem('rajshreeUser'));
    if (user) {
        const form = document.getElementById('checkout-form');
        if(form) {
            form.querySelector('input[type="text"]').value = user.name || '';
            form.querySelector('input[type="email"]').value = user.email || '';
            form.querySelector('input[type="tel"]').value = user.phone || '';
            form.querySelector('textarea').value = user.address || '';
        }
    }
}

function renderProfilePage() {
    const user = JSON.parse(localStorage.getItem('rajshreeUser'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    document.getElementById('profile-name').value = user.name;
    document.getElementById('profile-email').value = user.email;
    document.getElementById('profile-phone').value = user.phone;
    document.getElementById('profile-address').value = user.address;
    
    document.getElementById('logout-btn').addEventListener('click', () => {
        showConfirmationModal("Are you sure you want to logout?", () => {
            showConfirmationModal("Are you really sure? You might miss out on exclusive offers.", () => {
                localStorage.removeItem('rajshreeUser');
                window.location.href = 'index.html';
            });
        });
    });

    document.getElementById('profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const updatedUser = {
            name: document.getElementById('profile-name').value,
            email: document.getElementById('profile-email').value,
            phone: document.getElementById('profile-phone').value,
            address: document.getElementById('profile-address').value,
            password: user.password // Keep existing password
        };
        localStorage.setItem('rajshreeUser', JSON.stringify(updatedUser));
        showGenericModal('Success', 'Profile Updated Successfully');
    });
}

window.shareProduct = function(platform) {
    const url = encodeURIComponent(window.location.href);
    const titleEl = document.querySelector('.detail-info h1');
    const title = titleEl ? titleEl.innerText : 'Rajshree Jewellers';
    const text = encodeURIComponent(`Check out ${title} from Rajshree Jewellers: `);
    
    if(platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${text}${url}`, '_blank');
    } else if(platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    } else if(platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    } else if(platform === 'copy') {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showGenericModal('Link Copied', 'Product link has been copied to clipboard.');
        });
    }
}

function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    if(!track || dots.length === 0) return;

    let currentSlideIndex = 0;

    window.goToSlide = function(index) {
        currentSlideIndex = index;
        updateSlider();
    }

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        dots.forEach((d, i) => {
            if(i === currentSlideIndex) d.classList.add('active');
            else d.classList.remove('active');
        });
    }

    // Auto slide
    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % dots.length;
        updateSlider();
    }, 5000);
}

// --- PRODUCT DETAIL MODAL & GALLERY ---

function injectProductModalStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        .product-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 2000; display: none; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s; }
        .product-modal-overlay.active { display: flex; opacity: 1; }
        .product-modal-content { background: #fff; width: 90%; max-width: 900px; max-height: 90vh; display: flex; gap: 2rem; padding: 2rem; position: relative; overflow-y: auto; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .modal-close { position: absolute; top: 10px; right: 15px; font-size: 2rem; background: none; border: none; cursor: pointer; color: #333; z-index: 10; }
        .modal-left { flex: 1.2; display: flex; flex-direction: column; gap: 1rem; }
        .modal-right { flex: 1; display: flex; flex-direction: column; gap: 1rem; justify-content: center; }
        .modal-img-container { width: 100%; height: 400px; overflow: hidden; border-radius: 4px; border: 1px solid #eee; position: relative; cursor: crosshair; }
        #modalMainImg { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; transform-origin: center center; }
        #modalMainImg.zoomed { transform: scale(2.5); }
        .modal-thumbnails { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 5px; }
        .modal-thumb { width: 70px; height: 70px; object-fit: cover; cursor: pointer; border: 1px solid #ddd; opacity: 0.6; transition: 0.3s; border-radius: 4px; }
        .modal-thumb:hover, .modal-thumb.active { opacity: 1; border-color: #d4af37; transform: scale(1.05); }
        .modal-price { font-size: 1.8rem; color: #d4af37; font-weight: 600; font-family: 'Cormorant Garamond', serif; }
        .modal-meta { color: #666; font-size: 0.9rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
        .modal-desc { line-height: 1.6; color: #444; font-size: 0.95rem; }
        @media (max-width: 768px) {
            .product-modal-content { flex-direction: column; padding: 1.5rem; width: 95%; }
            .modal-img-container { height: 300px; }
            .modal-left { flex: auto; }
        }
    `;
    document.head.appendChild(style);
}

function createProductDetailModal() {
    const modalHTML = `
        <div id="productDetailModal" class="product-modal-overlay">
            <div class="product-modal-content">
                <button class="modal-close" onclick="closeProductModal()">&times;</button>
                <div class="modal-left">
                   <div class="modal-img-container" id="modalImgContainer">
                       <img id="modalMainImg" src="" alt="Product View">
                   </div>
                   <div id="modalThumbnails" class="modal-thumbnails"></div>
                </div>
                <div class="modal-right">
                   <h2 id="modalTitle" style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; margin-bottom: 0.5rem;"></h2>
                   <p id="modalPrice" class="modal-price"></p>
                   <div class="modal-meta">
                      <span id="modalWeight"></span> | <span id="modalMaterial" style="text-transform:capitalize;"></span>
                   </div>
                   <p class="modal-desc">Handcrafted with precision, this piece embodies the timeless elegance of royal heritage. Perfect for special occasions or adding a touch of luxury to your everyday collection.</p>
                   <button id="modalAddToCart" class="btn-gold" style="margin-top: 1rem;">Add to Bag</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Close on outside click
    document.getElementById('productDetailModal').addEventListener('click', (e) => {
        if(e.target.id === 'productDetailModal') closeProductModal();
    });

    // Zoom Logic
    const container = document.getElementById('modalImgContainer');
    const img = document.getElementById('modalMainImg');
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
    });
    
    container.addEventListener('mouseenter', () => img.classList.add('zoomed'));
    container.addEventListener('mouseleave', () => {
        img.classList.remove('zoomed');
        setTimeout(() => { img.style.transformOrigin = 'center center'; }, 300);
    });
}

window.openProductModal = function(id) {
    const product = window.rajshreeProducts.find(p => p.id === id);
    if(!product) return;

    // Calculate Price (Same logic as grid)
    const rate = product.material === 'gold' ? 6500 : 85;
    const price = Math.ceil(product.weight * rate);

    // Populate Data
    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalPrice').innerText = 'Approx ₹ ' + price.toLocaleString();
    document.getElementById('modalWeight').innerText = 'Net Wt: ' + product.weight + 'g';
    document.getElementById('modalMaterial').innerText = product.material;
    
    // Setup Images
    const mainImg = document.getElementById('modalMainImg');
    const thumbContainer = document.getElementById('modalThumbnails');
    
    mainImg.src = product.images[0];
    thumbContainer.innerHTML = '';

    product.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `modal-thumb ${index === 0 ? 'active' : ''}`;
        thumb.onclick = function() {
            mainImg.src = imgSrc;
            document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        };
        thumbContainer.appendChild(thumb);
    });

    // Setup Add to Cart Button
    const btn = document.getElementById('modalAddToCart');
    btn.onclick = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: price,
            img: product.images[0]
        });
        showCartModal({name: product.name, img: product.images[0], price: price});
        closeProductModal();
    };

    document.getElementById('productDetailModal').classList.add('active');
}

window.closeProductModal = function() {
    document.getElementById('productDetailModal').classList.remove('active');
}

function saveFilterState() {
    const activeCatBtn = document.querySelector('.filter-btn.active');
    const category = activeCatBtn ? activeCatBtn.dataset.filter : 'all';
    const minPrice = document.getElementById('min-range').value;
    const maxPrice = document.getElementById('max-range').value;
    const sortValue = document.getElementById('sort-select').value;

    const state = {
        category,
        minPrice,
        maxPrice,
        sortValue
    };
    sessionStorage.setItem('rajshreeFilterState', JSON.stringify(state));
}

function loadFilterState() {
    const state = JSON.parse(sessionStorage.getItem('rajshreeFilterState'));
    if (!state) return;

    // Restore Category
    const filterBtns = document.querySelectorAll('.filter-btn');
    if(state.category) {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${state.category}"]`);
        if (targetBtn) targetBtn.classList.add('active');
        else if (filterBtns.length > 0) filterBtns[0].classList.add('active');
    }

    // Restore Price
    const minRange = document.getElementById('min-range');
    const maxRange = document.getElementById('max-range');
    const minVal = document.getElementById('min-value');
    const maxVal = document.getElementById('max-value');

    if (minRange && maxRange) {
        minRange.value = state.minPrice;
        // Fix: If stored max price is the old limit (500,000), update it to new limit (5,000,000)
        if (parseInt(state.maxPrice) <= 500000) {
            maxRange.value = 5000000;
        } else {
            maxRange.value = state.maxPrice;
        }

        if (minVal) minVal.innerText = '₹ ' + parseInt(state.minPrice).toLocaleString();
        if (maxVal) maxVal.innerText = '₹ ' + parseInt(maxRange.value).toLocaleString();
    }

    // Restore Sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect && state.sortValue) {
        sortSelect.value = state.sortValue;
    }
}

// --- NEW FEATURES ---

function initCustomCursor() {
    // Only run on devices with a fine pointer (mouse), not touch
    if (window.matchMedia("(pointer: fine)").matches) {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        const outline = document.createElement('div');
        outline.className = 'cursor-outline';
        document.body.appendChild(dot);
        document.body.appendChild(outline);

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            dot.style.left = `${posX}px`;
            dot.style.top = `${posY}px`;

            // Outline follows with slight delay/animation
            outline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effect for interactive elements
        const interactables = document.querySelectorAll('a, button, .cat-card, .new-cat-card, .product-card, input, select, textarea, .whatsapp-float');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    }
}

function injectWhatsAppWidget() {
    // Replace the number below with your actual business number
    const html = `
        <a href="https://wa.me/918860791551" target="_blank" class="whatsapp-float">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-tooltip">Chat with an Expert</span>
        </a>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
}

function initScrollFade() {
    const indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;

    window.addEventListener('scroll', () => {
        // Fade out over the first 300px of scrolling
        const maxScroll = 300;
        let opacity = 1 - (window.scrollY / maxScroll);
        if (opacity < 0) opacity = 0;
        indicator.style.opacity = opacity;
    });
}

function initMagneticEffect() {
    const magnets = document.querySelectorAll('.btn-luxury, .btn-gold, .btn-outline, .btn-white');

    magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            magnet.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
            magnet.style.transition = 'transform 0.2s ease-out';
        });

        magnet.addEventListener('mouseleave', () => {
            magnet.style.transform = 'translate(0, 0)';
            magnet.style.transition = 'transform 0.5s ease';
        });
    });
}

function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'back-to-top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initClickSound() {
    document.addEventListener('click', (e) => {
        // Play sound for interactive elements
        if(e.target.closest('button, a, .product-card, .cat-card, .new-cat-card, input[type="checkbox"], input[type="radio"]')) {
            playClickSound();
        }
    });
}

function playClickSound() {
    // Create a subtle "pop" sound using Web Audio API
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.05, ctx.currentTime); // Low volume
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
}