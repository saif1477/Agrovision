// Agrovision AI - Precision Agriculture Monitoring Platform
// Production-ready JavaScript with TypeScript-like patterns

class AgrovisionApp {
    constructor() {
        this.currentUser = null;
        this.currentView = 'dashboard';
        this.charts = {};
        this.toastCount = 0;
        this.onboardingStep = 1;
        
        // Application data from provided JSON
        this.data = {
            farms: [
                {
                    id: 1,
                    name: "Gitam Bengaluru Farm",
                    area: 150,
                    crop_type: "Corn",
                    location: {lat: 40.7128, lng: -74.0060},
                    health_score: 92,
                    risk_level: "Low",
                    last_scan: "2025-09-24T14:30:00Z",
                    owner: "Saifuddin",
                    irrigation_system: "Drip irrigation",
                    planting_date: "2025-04-15",
                    expected_harvest: "2025-10-30"
                },
                {
                    id: 2,
                    name: "Gitam Hyderabad Farm",
                    area: 320,
                    crop_type: "Wheat",
                    location: {lat: 41.8781, lng: -87.6298},
                    health_score: 78,
                    risk_level: "Medium",
                    last_scan: "2025-09-24T12:15:00Z",
                    owner: "Vaibhavi Chowdary",
                    irrigation_system: "Sprinkler",
                    planting_date: "2025-03-20",
                    expected_harvest: "2025-09-30"
                },
                {
                    id: 3,
                    name: "Gitam Visakhapatnam Farm",
                    area: 280,
                    crop_type: "Soybeans",
                    location: {lat: 39.7392, lng: -104.9903},
                    health_score: 95,
                    risk_level: "Low",
                    last_scan: "2025-09-24T16:45:00Z",
                    owner: "Lokesh",
                    irrigation_system: "Center pivot",
                    planting_date: "2025-05-01",
                    expected_harvest: "2025-11-15"
                }
            ],
            sensor_readings: [
                {
                    timestamp: "2025-09-24T16:00:00Z",
                    farm_id: 1,
                    soil_moisture: 65,
                    temperature: 24.5,
                    ph_level: 6.8,
                    conductivity: 1200,
                    ndvi: 0.75,
                    soil_temperature: 22.3,
                    humidity: 68
                },
                {
                    timestamp: "2025-09-24T16:00:00Z",
                    farm_id: 2,
                    soil_moisture: 45,
                    temperature: 26.2,
                    ph_level: 7.1,
                    conductivity: 950,
                    ndvi: 0.62,
                    soil_temperature: 24.1,
                    humidity: 55
                },
                {
                    timestamp: "2025-09-24T16:00:00Z",
                    farm_id: 3,
                    soil_moisture: 72,
                    temperature: 23.8,
                    ph_level: 6.9,
                    conductivity: 1350,
                    ndvi: 0.82,
                    soil_temperature: 21.9,
                    humidity: 72
                }
            ],
            alerts: [
                {
                    id: 1,
                    farm_id: 2,
                    type: "Disease Risk",
                    severity: "High",
                    message: "Potential fungal infection detected in Sector B-3",
                    confidence: 87,
                    recommendation: "Apply targeted fungicide treatment within 48 hours",
                    created_at: "2025-09-24T14:22:00Z",
                    status: "Active",
                    affected_area: "12 hectares"
                },
                {
                    id: 2,
                    farm_id: 1,
                    type: "Irrigation",
                    severity: "Medium",
                    message: "Soil moisture dropping below optimal levels",
                    confidence: 92,
                    recommendation: "Schedule irrigation for Sectors A-1 and A-2",
                    created_at: "2025-09-24T13:15:00Z",
                    status: "Active",
                    affected_area: "8 hectares"
                },
                {
                    id: 3,
                    farm_id: 3,
                    type: "Pest Risk",
                    severity: "Low",
                    message: "Increased aphid activity detected",
                    confidence: 73,
                    recommendation: "Monitor closely, consider beneficial insect release",
                    created_at: "2025-09-24T11:45:00Z",
                    status: "Monitoring",
                    affected_area: "3 hectares"
                }
            ],
            weather_data: [
                {
                    date: "2025-09-24",
                    temperature_high: 28,
                    temperature_low: 18,
                    humidity: 65,
                    precipitation: 0,
                    wind_speed: 12,
                    uv_index: 6,
                    conditions: "Sunny"
                },
                {
                    date: "2025-09-25",
                    temperature_high: 26,
                    temperature_low: 16,
                    humidity: 72,
                    precipitation: 5,
                    wind_speed: 8,
                    uv_index: 4,
                    conditions: "Light Rain"
                },
                {
                    date: "2025-09-26",
                    temperature_high: 24,
                    temperature_low: 15,
                    humidity: 78,
                    precipitation: 12,
                    wind_speed: 6,
                    uv_index: 3,
                    conditions: "Overcast"
                }
            ],
            historical_data: {
                ndvi_trends: [
                    {date: "2025-08-01", farm_1: 0.72, farm_2: 0.68, farm_3: 0.79},
                    {date: "2025-08-15", farm_1: 0.74, farm_2: 0.65, farm_3: 0.81},
                    {date: "2025-09-01", farm_1: 0.76, farm_2: 0.63, farm_3: 0.83},
                    {date: "2025-09-15", farm_1: 0.75, farm_2: 0.62, farm_3: 0.82},
                    {date: "2025-09-24", farm_1: 0.75, farm_2: 0.62, farm_3: 0.82}
                ],
                yield_predictions: [
                    {farm_id: 1, predicted_yield: "145 bushels/acre", confidence: 89, vs_average: "+12%"},
                    {farm_id: 2, predicted_yield: "52 bushels/acre", confidence: 84, vs_average: "-5%"},
                    {farm_id: 3, predicted_yield: "58 bushels/acre", confidence: 91, vs_average: "+18%"}
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.simulateLoading();
    }

    simulateLoading() {
        // Simulate app loading
        setTimeout(() => {
            document.getElementById('loadingScreen').classList.add('hidden');
            document.getElementById('loginScreen').classList.remove('hidden');
        }, 2000);
    }

    setupEventListeners() {
        // Authentication
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', this.handleLogin.bind(this));
        }

        const googleSignIn = document.getElementById('googleSignIn');
        if (googleSignIn) {
            googleSignIn.addEventListener('click', this.handleGoogleSignIn.bind(this));
        }

        const showSignup = document.getElementById('showSignup');
        if (showSignup) {
            showSignup.addEventListener('click', this.handleShowSignup.bind(this));
        }

        // Password toggle
        const passwordToggle = document.querySelector('.password-toggle');
        if (passwordToggle) {
            passwordToggle.addEventListener('click', this.togglePassword.bind(this));
        }

        // Onboarding
        const nextStep = document.getElementById('nextStep');
        if (nextStep) {
            nextStep.addEventListener('click', this.handleNextStep.bind(this));
        }

        const prevStep = document.getElementById('prevStep');
        if (prevStep) {
            prevStep.addEventListener('click', this.handlePrevStep.bind(this));
        }

        // Navigation
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', this.handleNavigation.bind(this));
        });

        // Field selector
        const fieldSelect = document.getElementById('fieldSelect');
        if (fieldSelect) {
            fieldSelect.addEventListener('change', this.handleFieldChange.bind(this));
        }

        // Alert filters
        const severityFilter = document.getElementById('severityFilter');
        const typeFilter = document.getElementById('typeFilter');
        if (severityFilter) {
            severityFilter.addEventListener('change', this.filterAlerts.bind(this));
        }
        if (typeFilter) {
            typeFilter.addEventListener('change', this.filterAlerts.bind(this));
        }

        // Modal close
        const modalClose = document.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', this.closeModal.bind(this));
        }

        // Modal overlay
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', this.closeModal.bind(this));
        }

        // Farm cards click
        document.addEventListener('click', (e) => {
            if (e.target.closest('.farm-card')) {
                this.showFarmDetails(e.target.closest('.farm-card'));
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // Validate form
        if (!this.validateEmail(email)) {
            this.showError('emailError', 'Please enter a valid email address');
            return;
        }
        
        if (password.length < 6) {
            this.showError('passwordError', 'Password must be at least 6 characters');
            return;
        }

        // Show loading state
        this.setLoadingState('loginBtn', true);
        
        // Simulate API call
        setTimeout(() => {
            this.setLoadingState('loginBtn', false);
            this.currentUser = { email, name: email.split('@')[0] };
            this.showOnboarding();
        }, 1500);
    }

    handleGoogleSignIn() {
        // Simulate Google Sign In
        this.setLoadingState('googleSignIn', true);
        setTimeout(() => {
            this.setLoadingState('googleSignIn', false);
            this.currentUser = { email: 'demo@agritech.com', name: 'Demo User' };
            this.showMainApp();
        }, 1000);
    }

    handleShowSignup(e) {
        e.preventDefault();
        this.showToast('Signup functionality would be implemented here', 'info');
    }

    togglePassword() {
        const passwordInput = document.getElementById('password');
        const toggleIcon = document.querySelector('.password-toggle i');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    }

    showOnboarding() {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('onboardingScreen').classList.remove('hidden');
        this.updateOnboardingProgress();
    }

    handleNextStep() {
        if (this.validateCurrentStep()) {
            if (this.onboardingStep < 3) {
                this.onboardingStep++;
                this.updateOnboardingStep();
            } else {
                this.completeOnboarding();
            }
        }
    }

    handlePrevStep() {
        if (this.onboardingStep > 1) {
            this.onboardingStep--;
            this.updateOnboardingStep();
        }
    }

    validateCurrentStep() {
        const currentStepElement = document.querySelector(`.onboarding-step[data-step="${this.onboardingStep}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'var(--color-error)';
                isValid = false;
            } else {
                field.style.borderColor = '';
            }
        });

        if (!isValid) {
            this.showToast('Please fill in all required fields', 'error');
        }

        return isValid;
    }

    updateOnboardingStep() {
        // Hide all steps
        document.querySelectorAll('.onboarding-step').forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        document.querySelector(`.onboarding-step[data-step="${this.onboardingStep}"]`).classList.add('active');

        // Update progress
        this.updateOnboardingProgress();

        // Update buttons
        const prevBtn = document.getElementById('prevStep');
        const nextBtn = document.getElementById('nextStep');

        prevBtn.disabled = this.onboardingStep === 1;
        nextBtn.textContent = this.onboardingStep === 3 ? 'Complete Setup' : 'Next';
    }

    updateOnboardingProgress() {
        const progress = (this.onboardingStep / 3) * 100;
        document.getElementById('onboardingProgress').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `Step ${this.onboardingStep} of 3`;
    }

    completeOnboarding() {
        this.showToast('Farm setup completed successfully!', 'success');
        setTimeout(() => {
            this.showMainApp();
        }, 1000);
    }

    showMainApp() {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('onboardingScreen').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        
        this.initializeDashboard();
        this.startRealTimeUpdates();
        this.showToast('Welcome to Agrovision AI!', 'success');
    }

    initializeDashboard() {
        this.renderFarms();
        this.renderWeather();
        this.renderAlerts();
        this.renderRecommendations();
        this.renderPredictions();
        this.initializeCharts();
    }

    renderFarms() {
        const farmsGrid = document.getElementById('farmsGrid');
        if (!farmsGrid) return;

        farmsGrid.innerHTML = this.data.farms.map(farm => {
            const healthClass = this.getHealthClass(farm.health_score);
            const lastScan = new Date(farm.last_scan).toLocaleDateString();
            
            return `
                <div class="farm-card" data-farm-id="${farm.id}">
                    <div class="farm-header">
                        <div class="farm-info">
                            <h3>${farm.name}</h3>
                            <div class="farm-meta">${farm.area} hectares • ${farm.crop_type}</div>
                        </div>
                        <div class="health-score">
                            <div class="health-value ${healthClass}">${farm.health_score}%</div>
                            <div class="risk-badge ${farm.risk_level.toLowerCase()}">${farm.risk_level} Risk</div>
                        </div>
                    </div>
                    <div class="farm-stats">
                        <div class="stat-item">
                            <div class="stat-value">${this.getSensorReading(farm.id, 'ndvi')}</div>
                            <div class="stat-label">NDVI</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${this.getSensorReading(farm.id, 'soil_moisture')}%</div>
                            <div class="stat-label">Soil Moisture</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${this.getSensorReading(farm.id, 'temperature')}°C</div>
                            <div class="stat-label">Temperature</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${lastScan}</div>
                            <div class="stat-label">Last Scan</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderWeather() {
        const weatherContent = document.getElementById('weatherContent');
        if (!weatherContent) return;

        weatherContent.innerHTML = this.data.weather_data.map(day => {
            const date = new Date(day.date).toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
            });
            
            return `
                <div class="weather-day">
                    <div class="weather-date">${date}</div>
                    <div class="weather-temp">${day.temperature_high}°/${day.temperature_low}°</div>
                    <div class="weather-condition">${day.conditions}</div>
                </div>
            `;
        }).join('');
    }

    renderAlerts() {
        const alertsList = document.getElementById('alertsList');
        if (!alertsList) return;

        const recentAlerts = this.data.alerts.slice(0, 3);
        
        alertsList.innerHTML = recentAlerts.map(alert => {
            const farm = this.data.farms.find(f => f.id === alert.farm_id);
            const timeAgo = this.getTimeAgo(alert.created_at);
            
            return `
                <div class="alert-item">
                    <div class="alert-header">
                        <div class="alert-type">
                            <div class="alert-icon ${alert.severity.toLowerCase()}">
                                <i class="fas ${this.getAlertIcon(alert.type)}" aria-hidden="true"></i>
                            </div>
                            <span>${alert.type} - ${farm.name}</span>
                        </div>
                        <div class="alert-time">${timeAgo}</div>
                    </div>
                    <div class="alert-message">${alert.message}</div>
                    <div class="alert-confidence">Confidence: ${alert.confidence}%</div>
                </div>
            `;
        }).join('');
    }

    renderRecommendations() {
        const recommendationsList = document.getElementById('recommendationsList');
        if (!recommendationsList) return;

        const recommendations = [
            {
                title: "Optimize Irrigation Schedule",
                description: "Based on soil moisture analysis, adjust irrigation timing for 15% water savings while maintaining optimal growth conditions."
            },
            {
                title: "Nutrient Application Timing",
                description: "NDVI trends indicate optimal timing for nitrogen application in the next 3-5 days for maximum uptake efficiency."
            },
            {
                title: "Preventive Disease Management", 
                description: "Weather conditions suggest increased disease pressure. Consider preventive fungicide application in high-risk areas."
            }
        ];

        recommendationsList.innerHTML = recommendations.map(rec => `
            <div class="recommendation-item">
                <div class="recommendation-title">${rec.title}</div>
                <div class="recommendation-description">${rec.description}</div>
            </div>
        `).join('');
    }

    renderPredictions() {
        const predictionsList = document.getElementById('predictionsList');
        if (!predictionsList) return;

        predictionsList.innerHTML = this.data.historical_data.yield_predictions.map(pred => {
            const farm = this.data.farms.find(f => f.id === pred.farm_id);
            
            return `
                <div class="prediction-item">
                    <div class="prediction-farm">${farm.name}</div>
                    <div class="prediction-yield">${pred.predicted_yield}</div>
                    <div class="prediction-confidence">
                        ${pred.confidence}% confidence • ${pred.vs_average} vs. average
                    </div>
                </div>
            `;
        }).join('');
    }

    initializeCharts() {
        this.createSpectralChart();
        this.createTrendsChart();
        this.createNDVIChart();
    }

    createSpectralChart() {
        const ctx = document.getElementById('spectralChart');
        if (!ctx) return;

        // Simulated hyperspectral data
        const wavelengths = Array.from({length: 50}, (_, i) => 400 + i * 8);
        const reflectance = wavelengths.map(w => {
            if (w < 700) return 0.1 + Math.random() * 0.2;
            if (w < 750) return 0.4 + Math.random() * 0.3; // Red edge
            return 0.7 + Math.random() * 0.2; // Near-infrared
        });

        this.charts.spectral = new Chart(ctx, {
            type: 'line',
            data: {
                labels: wavelengths,
                datasets: [{
                    label: 'Vegetation Reflectance',
                    data: reflectance,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Wavelength (nm)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Reflectance'
                        },
                        min: 0,
                        max: 1
                    }
                }
            }
        });
    }

    createTrendsChart() {
        const ctx = document.getElementById('trendsChart');
        if (!ctx) return;

        const labels = this.data.historical_data.ndvi_trends.map(d => 
            new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        );

        this.charts.trends = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Gitam Bengaluru Farm',
                        data: this.data.historical_data.ndvi_trends.map(d => d.farm_1),
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Gitam Hyderabad Farm',
                        data: this.data.historical_data.ndvi_trends.map(d => d.farm_2),
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Gitam Visakhapatnam Farm',
                        data: this.data.historical_data.ndvi_trends.map(d => d.farm_3),
                        borderColor: '#B4413C',
                        backgroundColor: 'rgba(180, 65, 60, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'NDVI Value'
                        },
                        min: 0.5,
                        max: 0.9
                    }
                }
            }
        });
    }

    createNDVIChart() {
        const ctx = document.getElementById('ndviChart');
        if (!ctx) return;

        const labels = this.data.historical_data.ndvi_trends.map(d => 
            new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        );

        this.charts.ndvi = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Gitam Bengaluru Farm',
                        data: this.data.historical_data.ndvi_trends.map(d => d.farm_1),
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: 'Gitam Hyderabad Farm',
                        data: this.data.historical_data.ndvi_trends.map(d => d.farm_2),
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: 'Gitam Visakhapatnam Farm',
                        data: this.data.historical_data.ndvi_trends.map(d => d.farm_3),
                        borderColor: '#B4413C',
                        backgroundColor: 'rgba(180, 65, 60, 0.1)',
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'NDVI Trends Over Time'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'NDVI Value'
                        },
                        min: 0.5,
                        max: 0.9
                    }
                }
            }
        });
    }

    handleNavigation(e) {
        e.preventDefault();
        const viewName = e.currentTarget.dataset.view;
        this.switchView(viewName);
    }

    switchView(viewName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

        // Update views
        document.querySelectorAll('.app-view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`${viewName}View`).classList.add('active');

        this.currentView = viewName;

        // Load view-specific data
        if (viewName === 'alerts') {
            this.renderDetailedAlerts();
        }
    }

    renderDetailedAlerts() {
        const detailedAlerts = document.getElementById('detailedAlerts');
        if (!detailedAlerts) return;

        detailedAlerts.innerHTML = this.data.alerts.map(alert => {
            const farm = this.data.farms.find(f => f.id === alert.farm_id);
            const timeAgo = this.getTimeAgo(alert.created_at);
            
            return `
                <div class="detailed-alert">
                    <h4>
                        <div class="alert-icon ${alert.severity.toLowerCase()}">
                            <i class="fas ${this.getAlertIcon(alert.type)}" aria-hidden="true"></i>
                        </div>
                        ${alert.type} - ${farm.name}
                    </h4>
                    <div class="detailed-alert-meta">
                        <span>Severity: ${alert.severity}</span>
                        <span>Confidence: ${alert.confidence}%</span>
                        <span>Affected Area: ${alert.affected_area}</span>
                        <span>Status: ${alert.status}</span>
                        <span>${timeAgo}</span>
                    </div>
                    <p>${alert.message}</p>
                    <div class="detailed-alert-recommendation">
                        <strong>Recommendation:</strong> ${alert.recommendation}
                    </div>
                </div>
            `;
        }).join('');
    }

    handleFieldChange(e) {
        const farmId = parseInt(e.target.value);
        this.updateFieldAnalysis(farmId);
    }

    updateFieldAnalysis(farmId) {
        // Update charts with farm-specific data
        if (this.charts.spectral) {
            this.updateSpectralChart(farmId);
        }
        if (this.charts.trends) {
            this.updateTrendsChart(farmId);
        }
    }

    updateSpectralChart(farmId) {
        // Simulate different spectral signatures based on farm health
        const farm = this.data.farms.find(f => f.id === farmId);
        const healthFactor = farm.health_score / 100;
        
        const wavelengths = Array.from({length: 50}, (_, i) => 400 + i * 8);
        const reflectance = wavelengths.map(w => {
            if (w < 700) return 0.1 + Math.random() * 0.2 * healthFactor;
            if (w < 750) return 0.4 + Math.random() * 0.3 * healthFactor;
            return 0.7 + Math.random() * 0.2 * healthFactor;
        });

        this.charts.spectral.data.datasets[0].data = reflectance;
        this.charts.spectral.update();
    }

    filterAlerts() {
        const severityFilter = document.getElementById('severityFilter').value;
        const typeFilter = document.getElementById('typeFilter').value;
        
        let filteredAlerts = this.data.alerts;
        
        if (severityFilter) {
            filteredAlerts = filteredAlerts.filter(alert => alert.severity === severityFilter);
        }
        
        if (typeFilter) {
            filteredAlerts = filteredAlerts.filter(alert => alert.type === typeFilter);
        }
        
        this.renderFilteredAlerts(filteredAlerts);
    }

    renderFilteredAlerts(alerts) {
        const detailedAlerts = document.getElementById('detailedAlerts');
        if (!detailedAlerts) return;

        if (alerts.length === 0) {
            detailedAlerts.innerHTML = '<p>No alerts match your current filters.</p>';
            return;
        }

        detailedAlerts.innerHTML = alerts.map(alert => {
            const farm = this.data.farms.find(f => f.id === alert.farm_id);
            const timeAgo = this.getTimeAgo(alert.created_at);
            
            return `
                <div class="detailed-alert">
                    <h4>
                        <div class="alert-icon ${alert.severity.toLowerCase()}">
                            <i class="fas ${this.getAlertIcon(alert.type)}" aria-hidden="true"></i>
                        </div>
                        ${alert.type} - ${farm.name}
                    </h4>
                    <div class="detailed-alert-meta">
                        <span>Severity: ${alert.severity}</span>
                        <span>Confidence: ${alert.confidence}%</span>
                        <span>Affected Area: ${alert.affected_area}</span>
                        <span>Status: ${alert.status}</span>
                        <span>${timeAgo}</span>
                    </div>
                    <p>${alert.message}</p>
                    <div class="detailed-alert-recommendation">
                        <strong>Recommendation:</strong> ${alert.recommendation}
                    </div>
                </div>
            `;
        }).join('');
    }

    showFarmDetails(farmCard) {
        const farmId = parseInt(farmCard.dataset.farmId);
        const farm = this.data.farms.find(f => f.id === farmId);
        const sensorData = this.data.sensor_readings.find(s => s.farm_id === farmId);
        
        const modalBody = document.getElementById('modalBody');
        const modalTitle = document.getElementById('modalTitle');
        
        modalTitle.textContent = `${farm.name} - Detailed View`;
        
        modalBody.innerHTML = `
            <div class="field-detail-content">
                <div class="detail-grid">
                    <div class="detail-section">
                        <h4>Farm Information</h4>
                        <p><strong>Owner:</strong> ${farm.owner}</p>
                        <p><strong>Area:</strong> ${farm.area} hectares</p>
                        <p><strong>Crop Type:</strong> ${farm.crop_type}</p>
                        <p><strong>Irrigation:</strong> ${farm.irrigation_system}</p>
                        <p><strong>Planting Date:</strong> ${new Date(farm.planting_date).toLocaleDateString()}</p>
                        <p><strong>Expected Harvest:</strong> ${new Date(farm.expected_harvest).toLocaleDateString()}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Current Conditions</h4>
                        <p><strong>Health Score:</strong> ${farm.health_score}%</p>
                        <p><strong>Risk Level:</strong> ${farm.risk_level}</p>
                        <p><strong>Soil Moisture:</strong> ${sensorData.soil_moisture}%</p>
                        <p><strong>Temperature:</strong> ${sensorData.temperature}°C</p>
                        <p><strong>pH Level:</strong> ${sensorData.ph_level}</p>
                        <p><strong>NDVI:</strong> ${sensorData.ndvi}</p>
                    </div>
                </div>
                
                <div class="ai-insights">
                    <h4>AI Insights</h4>
                    <div class="insight-item">
                        <i class="fas fa-lightbulb" style="color: var(--color-warning);"></i>
                        <span>Vegetation index shows healthy growth patterns with optimal chlorophyll content.</span>
                    </div>
                    <div class="insight-item">
                        <i class="fas fa-tint" style="color: var(--color-primary);"></i>
                        <span>Soil moisture levels are within optimal range for current growth stage.</span>
                    </div>
                    <div class="insight-item">
                        <i class="fas fa-chart-line" style="color: var(--color-success);"></i>
                        <span>Predicted yield is ${farm.health_score > 90 ? '18%' : '8%'} above regional average.</span>
                    </div>
                </div>
            </div>
        `;
        
        this.openModal();
    }

    openModal() {
        const modal = document.getElementById('fieldModal');
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        
        // Focus management
        const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) {
            firstFocusable.focus();
        }
        
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('fieldModal');
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    handleKeydown(e) {
        // Handle Escape key for modal
        if (e.key === 'Escape') {
            const modal = document.getElementById('fieldModal');
            if (!modal.classList.contains('hidden')) {
                this.closeModal();
            }
        }
    }

    startRealTimeUpdates() {
        // Simulate real-time data updates
        setInterval(() => {
            this.updateSensorData();
            this.updateAlertCount();
        }, 30000); // Update every 30 seconds
    }

    updateSensorData() {
        // Simulate slight variations in sensor readings
        this.data.sensor_readings.forEach(reading => {
            reading.soil_moisture += (Math.random() - 0.5) * 2;
            reading.temperature += (Math.random() - 0.5) * 0.5;
            reading.ndvi += (Math.random() - 0.5) * 0.02;
            
            // Keep values within realistic bounds
            reading.soil_moisture = Math.max(20, Math.min(80, reading.soil_moisture));
            reading.temperature = Math.max(15, Math.min(35, reading.temperature));
            reading.ndvi = Math.max(0.3, Math.min(0.9, reading.ndvi));
        });

        // Update dashboard if visible
        if (this.currentView === 'dashboard') {
            this.renderFarms();
        }
    }

    updateAlertCount() {
        const activeAlerts = this.data.alerts.filter(alert => alert.status === 'Active');
        const alertBadge = document.getElementById('alertCount');
        if (alertBadge) {
            alertBadge.textContent = activeAlerts.length;
        }
    }

    // Utility functions
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    setLoadingState(buttonId, isLoading) {
        const button = document.getElementById(buttonId);
        if (!button) return;
        
        const text = button.querySelector('span');
        const spinner = button.querySelector('i');
        
        if (isLoading) {
            button.disabled = true;
            if (text) text.style.visibility = 'hidden';
            if (spinner) spinner.classList.remove('hidden');
        } else {
            button.disabled = false;
            if (text) text.style.visibility = 'visible';
            if (spinner) spinner.classList.add('hidden');
        }
    }

    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toastId = `toast-${this.toastCount++}`;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.id = toastId;
        toast.innerHTML = `
            <i class="fas ${this.getToastIcon(type)}" aria-hidden="true"></i>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        // Auto remove after 5 seconds
        setTimeout(() => {
            const toastElement = document.getElementById(toastId);
            if (toastElement) {
                toastElement.remove();
            }
        }, 5000);
    }

    getToastIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }

    getHealthClass(score) {
        if (score >= 90) return 'excellent';
        if (score >= 80) return 'good';
        if (score >= 70) return 'fair';
        return 'poor';
    }

    getSensorReading(farmId, metric) {
        const reading = this.data.sensor_readings.find(r => r.farm_id === farmId);
        return reading ? reading[metric] : 'N/A';
    }

    getAlertIcon(type) {
        const icons = {
            'Disease Risk': 'fa-virus',
            'Irrigation': 'fa-tint',
            'Pest Risk': 'fa-bug',
            'Weather': 'fa-cloud'
        };
        return icons[type] || 'fa-exclamation';
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInHours = Math.floor((now - time) / (1000 * 60 * 60));
        
        if (diffInHours < 1) return 'Less than an hour ago';
        if (diffInHours === 1) return '1 hour ago';
        if (diffInHours < 24) return `${diffInHours} hours ago`;
        
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays === 1) return '1 day ago';
        return `${diffInDays} days ago`;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.agrovisionApp = new AgrovisionApp();
});

// Analytics tracking (Google Analytics simulation)
function trackEvent(eventName, parameters = {}) {
    console.log('Analytics Event:', eventName, parameters);
    // In production, this would send to Google Analytics
    // gtag('event', eventName, parameters);
}

// Track page views
function trackPageView(pageName) {
    trackEvent('page_view', { page_title: pageName });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application Error:', e.error);
    // In production, this would send to error tracking service
});

// Service worker registration for offline capabilities (production feature)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be registered here for offline functionality
        console.log('Service Worker support detected');
    });
}