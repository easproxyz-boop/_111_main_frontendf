const APP_API_ENDPOINT = (() => {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
        // Local development environment
        return 'http://localhost:3000';
        //        return 'https://backend.whinxyz.online';

    } else {
        // Production environment
        return 'https://backend.whinxyz.online';
    }
})();