var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function mostfollows(data){
  var sortable = [];
  var result = "";
  for (var x in data) {
    sortable.push([x,data[x].name,data[x].follows.length]);
    // sortable["name"] = data[x].name;
    // sortable["#ofFollows"]= data[x].follows.length;
    }
    sortable.sort(function(a, b) {
      return a[2] - b[2];
  });
    var key = sortable[sortable.length-1][0];
    var name = sortable[sortable.length-1][1]
    var numOf = sortable[sortable.length-1][2]
   result = "Key: " + key + " Name: " + name + " #ofFollows: " + numOf;
  return result;
}
console.log(mostfollows(data));
