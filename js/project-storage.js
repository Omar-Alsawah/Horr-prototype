const ProjectStorage = {
    PROJECT_KEY: 'horr_current_project',
    SERVICES_KEY: 'horr_all_services',

    getCurrentProject() {
        const data = localStorage.getItem(this.PROJECT_KEY);
        return data ? JSON.parse(data) : {};
    },

    saveCurrentProject(data) {
        const current = this.getCurrentProject();
        const updated = { ...current, ...data };
        localStorage.setItem(this.PROJECT_KEY, JSON.stringify(updated));
    },

    submitProject() {
        const current = this.getCurrentProject();
        if (!current.title) return; // Basic validation

        let services = this.getAllServices();
        services.push({
            ...current,
            id: Date.now(),
            status: 'Under review',
            date: new Date().toLocaleDateString()
        });
        localStorage.setItem(this.SERVICES_KEY, JSON.stringify(services));
        localStorage.removeItem(this.PROJECT_KEY);
    },

    getAllServices() {
        const data = localStorage.getItem(this.SERVICES_KEY);
        return data ? JSON.parse(data) : [];
    },

    clearAll() {
        localStorage.removeItem(this.PROJECT_KEY);
        localStorage.removeItem(this.SERVICES_KEY);
    }
};
