// Mobile menu toggle
document.documentElement.classList.add("js");
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Quote form: block files over Netlify's 8 MB per-submission limit before upload
  var form = document.querySelector("form[name='quote']");
  if (form) {
    form.addEventListener("submit", function (e) {
      var total = 0;
      form.querySelectorAll("input[type='file']").forEach(function (f) {
        if (f.files[0]) total += f.files[0].size;
      });
      var status = document.getElementById("form-status");
      if (total > 8 * 1024 * 1024) {
        e.preventDefault();
        status.className = "form-status error";
        status.textContent = "Your files total more than 8 MB. Please attach smaller files, or submit the form without them and email your drawings to quotes@bariamfg.com.";
        return;
      }
      status.className = "form-status";
      status.textContent = "Sending… please wait while your files upload.";
    });
  }
});
