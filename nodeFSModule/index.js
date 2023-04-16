const fs = require("fs");

try {
  //user inputs to specify file names
  //input file
  let inputFile = process.argv[2];
  //output file
  let outputFile = process.argv[3];

  fs.readFile(inputFile, "utf-8", (err, data) => {
    if (err) {
      console.log("Input file name doesn't exist");
      return;
    }

    //below strings array contains element of each new line
    console.log("below strings array contains element of each new line");
    const initialArray = data.split("\r\n");
    console.log(initialArray);

    //below strings array filters out empty lines and staring with "#"
    console.log(
      "below strings array filters out empty lines and staring with '#'"
    );
    const finalArray = initialArray.filter((ele) => {
      return ele !== "" && ele[0] !== "#";
    });
    console.log(finalArray);

    //below strings array displays sorted array out of filterd array
    console.log(
      "below strings array displays sorted array out of filterd array"
    );
    const sortedArray = finalArray.sort();
    console.log(sortedArray);
    try {
      sortedArray.forEach((ele) => {
        fs.appendFile(outputFile, ele + "\r\n", (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    } catch {
      console.log(
        "enter output file name followed by input file name to store the result"
      );
    }
  });
} catch (err) {
  console.log("Enter input file name");
}
