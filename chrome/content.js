const currentUrl = window.location.href;
if (currentUrl.match(/https:\/\/9gag.com\/gag\/[a-zA-Z0-9]+\/?$/)) {
  window.location = currentUrl + "#comment";
}
