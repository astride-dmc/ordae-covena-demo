// ORDAE Main JavaScript

// ============================================
// MARKETPLACE FUNCTIONALITY
// ============================================

function initMarketplace() {
    const brandsContainer = document.getElementById('brands-container');
    let filteredBrands = [...brandsData.brands];

    // Initial render
    renderBrands(filteredBrands);

    // Set up filter listeners
    setupFilters();

    function renderBrands(brands) {
        if (brands.length === 0) {
            brandsContainer.innerHTML = '<p style="color: var(--gray-light); text-align: center; grid-column: 1/-1;">No brands match your filters. Try adjusting your criteria.</p>';
            return;
        }

        brandsContainer.innerHTML = brands.map(brand => `
            <a href="brand-profile.html?id=${brand.id}" class="brand-card">
                <div class="brand-header">
                    <h3 class="brand-name">${brand.name}</h3>
                    <p class="brand-category">${brand.category}</p>
                </div>
                <p class="brand-description">${brand.description}</p>
                <div class="brand-badges">
                    ${brand.badges.map(badge => `<span class="mini-badge">${badge}</span>`).join('')}
                </div>
                <div class="brand-stats">
                    <span class="stat">⭐ ${brand.rating}</span>
                    <span class="stat">💬 ${brand.reviewCount} reviews</span>
                    <span class="stat">💰 ${brand.priceRange}</span>
                </div>
            </a>
        `).join('');
    }

    function setupFilters() {
        // Category filters
        const categoryFilters = document.querySelectorAll('.filter-category');
        categoryFilters.forEach(filter => {
            filter.addEventListener('change', applyFilters);
        });

        // Budget filter
        const budgetFilter = document.querySelector('.filter-budget');
        if (budgetFilter) {
            budgetFilter.addEventListener('change', applyFilters);
        }

        // Beginner friendly filter
        const beginnerFilter = document.getElementById('beginner-friendly');
        if (beginnerFilter) {
            beginnerFilter.addEventListener('change', applyFilters);
        }

        // Shipping filter
        const shippingFilter = document.querySelector('.filter-shipping');
        if (shippingFilter) {
            shippingFilter.addEventListener('change', applyFilters);
        }

        // Verified level filter
        const verifiedFilter = document.querySelector('.filter-verified');
        if (verifiedFilter) {
            verifiedFilter.addEventListener('change', applyFilters);
        }

        // Clear filters button
        const clearButton = document.getElementById('clear-filters');
        if (clearButton) {
            clearButton.addEventListener('click', clearFilters);
        }
    }

    function applyFilters() {
        let filtered = [...brandsData.brands];

        // Category filter
        const selectedCategories = Array.from(document.querySelectorAll('.filter-category:checked'))
            .map(cb => cb.value);
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(brand => selectedCategories.includes(brand.category));
        }

        // Budget filter
        const budgetValue = document.querySelector('.filter-budget')?.value;
        if (budgetValue) {
            filtered = filtered.filter(brand => matchesBudget(brand, budgetValue));
        }

        // Beginner friendly filter
        const beginnerOnly = document.getElementById('beginner-friendly')?.checked;
        if (beginnerOnly) {
            filtered = filtered.filter(brand => brand.beginnerFriendly);
        }

        // Shipping filter
        const shippingValue = document.querySelector('.filter-shipping')?.value;
        if (shippingValue) {
            filtered = filtered.filter(brand => matchesShipping(brand, shippingValue));
        }

        // Verified level filter
        const verifiedValue = document.querySelector('.filter-verified')?.value;
        if (verifiedValue) {
            filtered = filtered.filter(brand => brand.verifiedLevel === verifiedValue);
        }

        renderBrands(filtered);
    }

    function matchesBudget(brand, budgetRange) {
        const priceStr = brand.priceRange.replace(/[$,]/g, '');
        const prices = priceStr.split('-').map(p => parseInt(p));
        const minPrice = prices[0];
        const maxPrice = prices[1] || prices[0];

        switch (budgetRange) {
            case 'under-50':
                return minPrice < 50;
            case '50-200':
                return maxPrice >= 50 && minPrice <= 200;
            case '200-500':
                return maxPrice >= 200 && minPrice <= 500;
            case 'over-500':
                return minPrice > 500;
            default:
                return true;
        }
    }

    function matchesShipping(brand, shippingSpeed) {
        const shipping = brand.shippingSpeed;
        switch (shippingSpeed) {
            case 'fast':
                return shipping.includes('1-3');
            case 'standard':
                return shipping.includes('2-4') || shipping.includes('2-5') || shipping.includes('3-5');
            case 'custom':
                return shipping.includes('10');
            default:
                return true;
        }
    }

    function clearFilters() {
        document.querySelectorAll('.filter-category').forEach(cb => cb.checked = false);
        document.querySelector('.filter-budget').value = '';
        document.getElementById('beginner-friendly').checked = false;
        document.querySelector('.filter-shipping').value = '';
        document.querySelector('.filter-verified').value = '';
        applyFilters();
    }
}

// ============================================
// QUIZ FUNCTIONALITY
// ============================================

function initQuiz() {
    let currentStep = 1;
    const totalSteps = 5;
    const quizData = {};

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressFill = document.getElementById('progress-fill');
    const currentStepSpan = document.getElementById('current-step');

    // Navigation
    nextBtn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            saveStepData(currentStep);
            if (currentStep < totalSteps) {
                currentStep++;
                updateQuizUI();
            }
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateQuizUI();
        }
    });

    // Form submission
    document.getElementById('quiz-form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveStepData(currentStep);
        
        // Calculate matches
        const matches = calculateMatches(quizData);
        
        // Store results in sessionStorage
        sessionStorage.setItem('quizResults', JSON.stringify({
            answers: quizData,
            matches: matches
        }));
        
        // Redirect to results page
        window.location.href = 'match-results.html';
    });

    function updateQuizUI() {
        // Hide all steps
        document.querySelectorAll('.quiz-step').forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
        if (currentStepElement) {
            currentStepElement.classList.add('active');
        }

        // Update progress
        const progress = (currentStep / totalSteps) * 100;
        progressFill.style.width = progress + '%';
        currentStepSpan.textContent = currentStep;

        // Update button visibility
        prevBtn.style.display = currentStep > 1 ? 'block' : 'none';
        nextBtn.style.display = currentStep < totalSteps ? 'block' : 'none';
        submitBtn.style.display = currentStep === totalSteps ? 'block' : 'none';

        // Restore selections for current step
        restoreStepData(currentStep);
    }

    function validateStep(step) {
        const currentStepElement = document.querySelector(`[data-step="${step}"]`);
        const requiredInputs = currentStepElement.querySelectorAll('[required]');
        
        for (let input of requiredInputs) {
            if (input.type === 'radio') {
                const radioGroup = currentStepElement.querySelectorAll(`[name="${input.name}"]`);
                const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                if (!isChecked) {
                    alert('Please select an option to continue.');
                    return false;
                }
            }
        }
        return true;
    }

    function saveStepData(step) {
        const currentStepElement = document.querySelector(`[data-step="${step}"]`);
        const inputs = currentStepElement.querySelectorAll('input, select');
        
        inputs.forEach(input => {
            if (input.type === 'radio' && input.checked) {
                quizData[input.name] = input.value;
            } else if (input.type === 'checkbox') {
                if (!quizData[input.name]) {
                    quizData[input.name] = [];
                }
                if (input.checked) {
                    quizData[input.name].push(input.value);
                }
            } else if (input.type !== 'radio') {
                quizData[input.name] = input.value;
            }
        });
    }

    function restoreStepData(step) {
        const currentStepElement = document.querySelector(`[data-step="${step}"]`);
        const inputs = currentStepElement.querySelectorAll('input, select');
        
        inputs.forEach(input => {
            if (input.type === 'radio' && quizData[input.name] === input.value) {
                input.checked = true;
                input.closest('.quiz-option').classList.add('selected');
            } else if (input.type === 'checkbox' && quizData[input.name]?.includes(input.value)) {
                input.checked = true;
                input.closest('.quiz-option').classList.add('selected');
            }
        });
    }

    // Add selected class on click
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            const input = this.querySelector('input');
            if (input.type === 'radio') {
                // Remove selected from all options in this group
                const group = this.closest('.quiz-options');
                group.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
            } else if (input.type === 'checkbox') {
                this.classList.toggle('selected');
            }
        });
    });

    function calculateMatches(answers) {
        const matches = [];
        const category = answers.category;
        const budget = answers.budget;
        const priorities = answers.priorities || [];
        const experience = answers.experience;
        const shipping = answers.shipping;

        // Filter brands by category
        const categoryBrands = brandsData.brands.filter(brand => brand.category === category);

        categoryBrands.forEach(brand => {
            let score = 0;
            let reasons = [];

            // Budget matching (high weight)
            if (matchesBudgetQuiz(brand, budget)) {
                score += 30;
                reasons.push('fits your budget perfectly');
            }

            // Experience level matching
            if (experience === 'beginner' && brand.beginnerFriendly) {
                score += 25;
                reasons.push('beginner-friendly products and guidance');
            } else if (experience === 'advanced' && brand.verifiedLevel === 'Platinum') {
                score += 25;
                reasons.push('luxury quality for experienced users');
            }

            // Priorities matching
            if (priorities.includes('ethical-sourcing')) {
                score += 15;
                reasons.push('verified ethical sourcing practices');
            }
            if (priorities.includes('clean-ingredients') && brand.name.includes('Pure')) {
                score += 15;
                reasons.push('clean, non-toxic ingredients');
            }
            if (priorities.includes('luxury-quality') && brand.verifiedLevel === 'Platinum') {
                score += 15;
                reasons.push('premium luxury quality');
            }
            if (priorities.includes('inclusive-range') && brand.name.includes('Heritage')) {
                score += 15;
                reasons.push('inclusive shade range');
            }

            // Shipping matching
            if (matchesShippingQuiz(brand, shipping)) {
                score += 10;
                reasons.push('fast shipping options');
            }

            // COVENA level bonus
            if (brand.verifiedLevel === 'Platinum') {
                score += 10;
            } else if (brand.verifiedLevel === 'Gold') {
                score += 5;
            }

            matches.push({
                brand: brand,
                score: score,
                reasons: reasons
            });
        });

        // Sort by score and return top 3
        matches.sort((a, b) => b.score - a.score);
        return matches.slice(0, 3);
    }

    function matchesBudgetQuiz(brand, budget) {
        const priceStr = brand.priceRange.replace(/[$,]/g, '');
        const prices = priceStr.split('-').map(p => parseInt(p));
        const avgPrice = (prices[0] + (prices[1] || prices[0])) / 2;

        switch (budget) {
            case 'under-100':
                return avgPrice < 100;
            case '100-300':
                return avgPrice >= 100 && avgPrice <= 300;
            case '300-500':
                return avgPrice >= 300 && avgPrice <= 500;
            case 'over-500':
                return avgPrice > 500;
            default:
                return true;
        }
    }

    function matchesShippingQuiz(brand, shipping) {
        if (shipping === 'fast') {
            return brand.shippingSpeed.includes('1-3');
        } else if (shipping === 'standard') {
            return brand.shippingSpeed.includes('2-') || brand.shippingSpeed.includes('3-');
        }
        return true;
    }

    // Initialize
    updateQuizUI();
}

// ============================================
// MATCH RESULTS FUNCTIONALITY
// ============================================

function loadMatchResults() {
    const resultsContainer = document.getElementById('match-results-container');
    const resultsData = JSON.parse(sessionStorage.getItem('quizResults'));

    if (!resultsData || !resultsData.matches) {
        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 60px 0;">
                <h2 style="color: var(--cream); margin-bottom: 16px;">No Results Found</h2>
                <p style="color: var(--gray-light); margin-bottom: 32px;">Please take the quiz first to get your personalized matches.</p>
                <a href="quiz.html" class="btn btn-primary">Take the Quiz</a>
            </div>
        `;
        return;
    }

    const matches = resultsData.matches;
    
    resultsContainer.innerHTML = matches.map((match, index) => `
        <div class="match-card">
            <div class="match-header">
                <div>
                    <div class="match-info">
                        <h2>${match.brand.name}</h2>
                        <p class="brand-category">${match.brand.category}</p>
                    </div>
                </div>
                <div class="match-rank">${index + 1}</div>
            </div>
            
            <div class="match-reason">
                <h3>Why This Match?</h3>
                <p>We matched you with ${match.brand.name} because they offer ${match.reasons.join(', ')}. With a ${match.brand.rating} star rating from ${match.brand.reviewCount} verified customers, this brand has proven quality and transparency.</p>
            </div>

            <div class="brand-badges" style="margin-bottom: 24px;">
                ${match.brand.badges.map(badge => `<span class="mini-badge">${badge}</span>`).join('')}
            </div>

            <div class="match-actions">
                <a href="brand-profile.html?id=${match.brand.id}" class="btn btn-primary">View Full Profile</a>
                <a href="#" class="btn btn-secondary">Shop Now</a>
            </div>
        </div>
    `).join('');
}

// ============================================
// BRAND PROFILE FUNCTIONALITY
// ============================================

function loadBrandProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const brandId = urlParams.get('id');

    if (!brandId) {
        document.querySelector('.brand-profile-header').innerHTML = `
            <div class="container" style="text-align: center;">
                <h1>Brand Not Found</h1>
                <p style="margin: 20px 0;">The brand you're looking for doesn't exist.</p>
                <a href="marketplace.html" class="btn btn-primary">Browse All Brands</a>
            </div>
        `;
        return;
    }

    const brand = brandsData.brands.find(b => b.id === brandId);

    if (!brand) {
        document.querySelector('.brand-profile-header').innerHTML = `
            <div class="container" style="text-align: center;">
                <h1>Brand Not Found</h1>
                <p style="margin: 20px 0;">The brand you're looking for doesn't exist.</p>
                <a href="marketplace.html" class="btn btn-primary">Browse All Brands</a>
            </div>
        `;
        return;
    }

    // Update page title
    document.title = `${brand.name} - ORDAE`;

    // Populate brand header
    document.getElementById('brand-name').textContent = brand.name;
    document.getElementById('brand-category').textContent = brand.category;
    document.getElementById('brand-tagline').textContent = brand.tagline;

    // Populate COVENA badges
    const badgesContainer = document.getElementById('covena-badges');
    badgesContainer.innerHTML = brand.badges.map(badge => `
        <div class="profile-badge">
            <span>✓</span>
            <span>${badge}</span>
        </div>
    `).join('');

    // Populate mission
    document.getElementById('brand-mission').textContent = brand.mission;

    // Populate sourcing
    document.getElementById('sourcing-summary').textContent = brand.sourcing.summary;
    document.getElementById('sourcing-details').innerHTML = brand.sourcing.details.map(detail => `
        <li style="margin-bottom: 12px;">${detail}</li>
    `).join('');

    // Populate process
    document.getElementById('process-steps').innerHTML = brand.process.map(step => `
        <div class="process-step">
            <div class="step-icon">${step.icon}</div>
            <div class="step-content">
                <h3>${step.step}</h3>
                <p>${step.description}</p>
            </div>
        </div>
    `).join('');

    // Populate best sellers
    document.getElementById('best-sellers').innerHTML = brand.bestSellers.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p class="product-price">${product.price}</p>
        </div>
    `).join('');

    // Populate reviews
    document.getElementById('reviews-container').innerHTML = brand.reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                <span class="review-stars">${'⭐'.repeat(review.rating)}</span>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

// Check which page we're on and initialize accordingly
if (typeof window !== 'undefined') {
    // Expose functions to global scope for inline script tags
    window.initMarketplace = initMarketplace;
    window.initQuiz = initQuiz;
    window.loadMatchResults = loadMatchResults;
    window.loadBrandProfile = loadBrandProfile;
}
