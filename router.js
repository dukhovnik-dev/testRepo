// router.js

function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Page not found');
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<h1>404 Page Not Found</h1>';
        });
}

page('/', () => loadPage('landing.html'));
page('/landing', () => loadPage('landing.html'));
page('/listing', () => loadPage('listing.html'));
page('/lista-drukarni', () => loadPage('listing.html'));
page('/single', () => loadPage('single.html'));
page('/:id', ctx => loadPage(`single.html?id=${ctx.params.id}`));

page();
