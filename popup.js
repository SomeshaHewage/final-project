function closePopup() {
    document.getElementById("popup").style.display = "none";
    history.back();
    window.location.href = "https://example.com/homepage";
  }