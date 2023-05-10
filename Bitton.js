const body = document.querySelector("body");
const pictures = document.querySelector("span.Options li.pictures");
const vidoes = document.querySelector("span.Options li.vidoes");
const book = document.querySelector("span.Options ul li.book");

pictures.addEventListener("click", function (e) {
  pWidth = 400;
  pHeight = 400;
  body.style.backgroundColor = "red";
  const form = document.createElement("form");
  const rowLength = document.createElement("input");
  const submit = document.createElement("button");
  rowLength.name = "row-length";
  submit.innerText = "submit";
  form.append(rowLength);
  form.append(submit);
  body.append(form);
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let ROW = rowLength.value;
    console.log(ROW);
    let picturesArr = [];
    for (let i = 0; i < ROW; i++) {
      const pictureBase = document.createElement("div");
      for (let j = 0; j < 3; j++) {
        picturesArr.push(j);
        const picture = document.createElement("img");
        const form2 = document.createElement("form");
        const pictureUpload = document.createElement("input");
        pictureUpload.type = "file";
        pictureBase.className = "Gallery";
        form2.className = "picture-" + j + "o" + i;
        picture.className = "picture-" + picturesArr[j] + "o" + i;
        picture.width = pWidth;
        picture.height = pHeight;
        form2.append(pictureUpload);
        pictureBase.append(form2);
        pictureBase.append(picture);
        body.append(pictureBase);
      }
    }
    // document.querySelector("img.picture-0o0").src = "White-House.jpg"
    // document.querySelector("img.picture-1o0").src = "House-Night.jpg"
    // ROW = rowLength.value;
    for (let i = 0; i < ROW; i++) {
      for (let j = 0; j < 3; j++) {
        //Look at MDN docs for fileReader on react
        // debugger
        // if (document.querySelector(`form.picture-${i}o${j} input`).value != "")
        // {
        //   console.log("works")
        // }
        let input = document.querySelector(`form.picture-${i}o${j} input`);
        input.addEventListener("change", function (e) {
          const reader = new FileReader();
          reader.onload = function () {
            // const lines = reader.result.split("\n").map(function (lines) {
            //   return lines.split(",");
            // });
            // console.log(lines);
            const img = new Image()
            // img.src = reader.result
            document.querySelector(`img.picture-${i}o${j}`).src = reader.result
          };
          reader.readAsDataURL(input.files[0])
          // document.querySelector(`img.picture-${i}o${j}`).src = document
          //   .querySelector(`form.picture-${i}o${j} input`)
          //   .value.split("\\")
          //   .pop()
          //   .split("/")
          //   .pop();
          // console.log(
          //   document.querySelector(`form.picture-${i}o${j} input`).value
          // );
        }, false);
      }
    }
  });
});
vidoes.addEventListener("click", function (e) {
  body.style.backgroundColor = "green";
});
book.addEventListener("click", function (e) {
  body.style.backgroundColor = "orange";
});
