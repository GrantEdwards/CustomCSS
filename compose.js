let bs = document.body.style;
let isHTML = !((bs.width==='72ch') && (bs.whiteSpace === 'pre-wrap') && (bs.fontFamily === 'monospace'));

if (isHTML) {
    let marker_id = '#CustomCSS-add-on-marker';
    let style_elements = document.head.getElementsByTagName('style');
    let max = style_elements.length;

    for (let i=max-1; i >=0 ; i--)
        if (style_elements[i].textContent.startsWith(marker_id))
            document.head.removeChild(style_elements[i]);

    function setCustomCSS(result) {
        let style = document.createElement("style");
        style.textContent = marker_id + '{}\n' + result.custom_css;
        document.head.appendChild(style);
    }
    let getting = browser.storage.local.get('custom_css');
    getting.then(setCustomCSS)
}
