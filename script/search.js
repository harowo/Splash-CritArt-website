function redirect() {
    var response = document.getElementById('search-input').value;
    if (response.toLowerCase() == "cool")
      location = ('/static/cool.html');
    else
      location = ('/static/warm.html');
    return false;
  }