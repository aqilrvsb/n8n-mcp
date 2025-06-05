// Debug script to test URL construction
const N8N_HOST = 'https://n8n-production-790f.up.railway.app/api/v1';

function buildUrlOld(path, params = {}) {
    const url = new URL(path, N8N_HOST);
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            url.searchParams.append(key, String(value));
        }
    });
    return url.pathname + url.search;
}

function buildUrlNew(path, params = {}) {
    // Handle URL construction properly when N8N_HOST includes a path
    const baseUrl = N8N_HOST.endsWith('/') ? N8N_HOST.slice(0, -1) : N8N_HOST;
    const fullPath = path.startsWith('/') ? path : '/' + path;
    const url = new URL(baseUrl + fullPath);
    
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            url.searchParams.append(key, String(value));
        }
    });
    return url.pathname + url.search;
}

console.log('N8N_HOST:', N8N_HOST);
console.log('Old buildUrl(/workflows):', buildUrlOld('/workflows'));
console.log('New buildUrl(/workflows):', buildUrlNew('/workflows'));

// Test full URLs
const testOld = new URL('/workflows', N8N_HOST);
const testNew = new URL(N8N_HOST + '/workflows');

console.log('Old full URL:', testOld.href);
console.log('New full URL:', testNew.href);
