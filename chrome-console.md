let counter = 0;

// update i based on variable "flexRankings"
for (let i=122; i < 198; i++) { 
  if (flexRankings[i].tier > counter) {
    console.log("tier " + i + "\n");
    counter = flexRankings[i].tier;
  }
  console.log(flexRankings[i].name) 
}
