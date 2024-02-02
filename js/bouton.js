
document.addEventListener("DOMContentLoaded", function () {
  var btnCV = document.getElementById("btnCV");
  if (btnCV) {
    btnCV.onclick = function () {
      window.location.href = "/pages/cv.html";
    };
  }

  var btnProjets = document.getElementById("btnProjets");
  if (btnProjets) {
    btnProjets.onclick = function () {
      window.location.href = "/pages/projets.html";
    };
  }

  var btnContact = document.getElementById("btnContact");
  if (btnContact) {
    btnContact.onclick = function () {
      window.location.href = "/pages/contact.html";
    };
  }
});

