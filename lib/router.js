var scriptLoader = "";
if (history.pushState) {

    page('/index.html', function (context, next) {
        if (!context.init) {
            setupPage('home', context, {"page":"home"});
        } else {
            setupPage('home', context, {"page":"home"});
        }
    });

    page('/tickets.html', function (context, next) {
        if (!context.init) {
            setupPage('tickets', context, {"page":"tickets","selectors":{".tickets":{"className":"active"}}});
        } else {
            setupPage('tickets', context, {"page":"tickets","selectors":{".tickets":{"className":"active"}}});
        }
    });

    page('/schedule.html', function (context, next) {
        if (!context.init) {
            setupPage('schedule', context, {"page":"schedule","selectors":{".schedule":{"className":"active"}}});
        } else {
            setupPage('schedule', context, {"page":"schedule","selectors":{".schedule":{"className":"active"}}});
        }
    });

    page('/workshop.html', function (context, next) {
        if (!context.init) {
            setupPage('workshop', context, {"page":"workshop","selectors":{".workshop":{"className":"active"}}});
        } else {
            setupPage('workshop', context, {"page":"workshop","selectors":{".workshop":{"className":"active"}}});
        }
    });

    page('/venue.html', function (context, next) {
        if (!context.init) {
            setupPage('venue', context, {"page":"venue","selectors":{".venue":{"className":"active"}}});
        } else {
            setupPage('venue', context, {"page":"venue","selectors":{".venue":{"className":"active"}}});
        }
    });

    page('/contact.html', function (context, next) {
        if (!context.init) {
            setupPage('contact', context, {"page":"contact","selectors":{".contact":{"className":"active"}}});
        } else {
            setupPage('contact', context, {"page":"contact","selectors":{".contact":{"className":"active"}}});
        }
    });

    page('/code-of-conduct.html', function (context, next) {
        if (!context.init) {
            setupPage('code-of-conduct', context, {"page":"code-of-conduct"});
        } else {
            setupPage('code-of-conduct', context, {"page":"code-of-conduct"});
        }
    });

    page('/terms.html', function (context, next) {
        if (!context.init) {
            setupPage('terms', context, {"page":"terms"});
        } else {
            setupPage('terms', context, {"page":"terms"});
        }
    });


    document.addEventListener("DOMContentLoaded", function(event) { 
        page();
    });
}