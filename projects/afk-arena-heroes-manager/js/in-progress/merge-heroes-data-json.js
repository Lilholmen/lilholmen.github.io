export const staticStats = jsonLoader('js/heroes/heroes.json', (jsonStr) =>
  JSON.parse(jsonStr)
);

export const userStats = jsonLoader('js/heroes/user.json', (jsonStr) =>
  JSON.parse(jsonStr)
);

function jsonLoader(file, callback) {
  const rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };

  rawFile.send(null);
}
