function describe_city(city:string, country="Pakistan") {
    console.log(city + " is in " + country + ".");
  }
  
  describe_city("Karachi"); // Karachi is in Pakistan.
  describe_city("New York", "USA"); // New York is in USA.
  describe_city("London", "UK"); // London is in UK.
  