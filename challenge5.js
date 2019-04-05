function capitalize(string) {
    string = string.split("");
  
    for (var i = 0; i < string.length; i++)
        if (typeof(string[i]) == "string" && string[i - 1] == " " || typeof(string[i]) == "string" && string[i - 1] == null)
            string[i] = string[i].toUpperCase();
      console.log(string.join(""));
  }