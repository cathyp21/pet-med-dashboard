const CACHE_NAME = "pet-med-dashboard-v1";

self.addEventListener("install", event => {
  console.log("Service worker installed");
});

self.addEventListener("activate", event => {
  console.log("Service worker activated");
});
