const descriptionText = 'A Mac menubar app that removes formatting from rich text and allows for easy text case changes without copy and pasting into a new window or app.'

document.querySelector('.shiftcase-sentencase_case').addEventListener('click', () => {
    const firstLetter = descriptionText[0].toUpperCase();
    const notFirstLetter = descriptionText.slice(1, descriptionText.length);
    const fullText = firstLetter + notFirstLetter;
    document.querySelector(".shiftcase-description").innerHTML = fullText;
})

document.querySelector('.shiftcase-uppercase').addEventListener('click', () => {
    document.querySelector(".shiftcase-description").innerHTML = descriptionText.toUpperCase();
})

document.querySelector('.shiftcase-lowercase').addEventListener('click', () => {
    document.querySelector(".shiftcase-description").innerHTML = descriptionText.toLowerCase();
})

document.querySelector('.shiftcase-titlecase').addEventListener('click', () => {
    document.querySelector(".shiftcase-description").innerHTML = descriptionText.toTitleCase()
})

String.prototype.toTitleCase = function() {
  var i, j, str, lowers, uppers;
  str = this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 
  'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), 
      function(txt) {
        return txt.toLowerCase();
      });

  return str;
}