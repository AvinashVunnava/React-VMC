//Eg: input: num = 3.2 => output: false
export function isInt(num) {
  return num % 1 === 0;
}

export function estimatesToObj(estimates) {
  const finalObj = {};
  let finalCost = 0;
  estimates.map((item) => {
    finalObj[item.text] = `$${item.cost}/mo`;
    finalCost = finalCost + item.cost;
    return true;
  });
  finalObj["Total Cost"] = `$${finalCost.toFixed(3)}/mo`;
  return finalObj;
}

export function exportToJson(objectData) {
  let filename = "vmc-estimate.json";
  let contentType = "application/json;charset=utf-8;";
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    var blob = new Blob(
      [decodeURIComponent(encodeURI(JSON.stringify(objectData)))],
      { type: contentType }
    );
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    var a = document.createElement("a");
    a.download = filename;
    a.href =
      "data:" +
      contentType +
      "," +
      encodeURIComponent(JSON.stringify(objectData));
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
