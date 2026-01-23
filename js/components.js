
// Header Component
const headerHTML = `
    <nav class="navbar">
        <div class="nav-left">
            <div class="logo-container">
                <div class="logo-icon"></div>
                <span>HORR</span>
            </div>
        </div>
        
        <div class="nav-center">
            <div class="nav-item">
                <a href="#" class="nav-link">
                    Find work 
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1L5 5L9 1"/></svg>
                </a>
                <div class="dropdown-menu">
                    <a href="find-work.html" class="dropdown-item">Find work</a>
                    <a href="saved-jobs.html" class="dropdown-item">Saved jobs</a>
                    <a href="#" class="dropdown-item">Proposals and offers</a>
                    <div style="border-top:1px solid #efefef; margin: 4px 0;"></div>
                    <div class="dropdown-header">Reach more clients</div>
                    <a href="#" class="dropdown-item">Your services</a>
                    <a href="#" class="dropdown-item">Direct Contracts</a>
                </div>
            </div>

            <div class="nav-item">
                <a href="#" class="nav-link">
                    Deliver work
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1L5 5L9 1"/></svg>
                </a>
                <div class="dropdown-menu">
                    <a href="manage-services.html" class="dropdown-item">Manage Services</a>
                    <a href="#" class="dropdown-item">Your active contracts</a>
                    <a href="#" class="dropdown-item">Contract history</a>
                </div>
            </div>

            <div class="nav-item">
                <a href="#" class="nav-link">Messages</a>
            </div>
        </div>

        <div class="nav-right">
            <div class="nav-search-container">
                <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" class="nav-search-input" placeholder="Search">
                <div class="search-filter">
                    <span class="search-divider">|</span>
                    <span class="search-filter-text">Jobs</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1L5 5L9 1"/></svg>
                </div>
            </div>
            
            <button class="nav-icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                <span class="notification-dot"></span>
            </button>
            <div class="user-avatar" onclick="window.location.href='settings.html'" style="cursor:pointer">
                <!-- User OB -->
                <img src="https://ui-avatars.com/api/?name=Omar+B&background=random" alt="User Avatar">
            </div>
        </div>
    </nav>
`;

function loadHeader() {
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
}

// Sidebar Component
function loadSidebar(activePage) {
    const sidebarContainer = document.getElementById('global-sidebar');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
            <h2 class="settings-header">Settings</h2>
            
            <div class="settings-group">
                <div class="settings-group-title">Billing</div>
                <a href="billing.html" class="settings-link ${activePage === 'billing' ? 'active' : ''}">Billing & Payments</a>
            </div>

            <div class="settings-group">
                <div class="settings-group-title">User Settings</div>
                <a href="settings.html" class="settings-link ${activePage === 'settings' ? 'active' : ''}">Contact Info</a>
                <a href="my-profile.html" class="settings-link ${activePage === 'my-profile' ? 'active' : ''}">My Profile</a>
                <a href="profile-settings.html" class="settings-link ${activePage === 'profile-settings' ? 'active' : ''}">Profile Settings</a>
                <a href="withdrawals.html" class="settings-link ${activePage === 'withdrawals' ? 'active' : ''}">Withdrawals</a>
                <a href="password-security.html" class="settings-link ${activePage === 'security' ? 'active' : ''}">Password & Security</a>
                <a href="#" class="settings-link ${activePage === 'verification' ? 'active' : ''}">Identity Verification</a>
            </div>
        `;
    }
}
