export const URLS = {TRANSLATE: "translate"};

const urls = { translate: "https://google-translate1.p.rapidapi.com/language/translate/v2" }

export const get = (url) => {
    return Boolean(url) && Boolean(urls[url]) ? urls[url] : '';
}
