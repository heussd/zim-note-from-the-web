function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function makeZimNote() {
	var text = "";
	text = "Content-Type: text/x-zim-wiki\nWiki-Format: zim 0.4\n\n\n";
	text = text.concat("'''");
	text = text.concat(getSelectionText());
	text = text.concat("'''\n\n");
	text = text.concat(window.location.href + "\n");
	text = text.concat(new Date());
  return text;
}

function download(filename, text) {
  // https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}


// Taken from https://stackoverflow.com/questions/11652681/replacing-umlauts-in-js
function deUmlaut(value){
  value = value.toLowerCase();
  value = value.replace(/ä/g, 'ae');
  value = value.replace(/ö/g, 'oe');
  value = value.replace(/ü/g, 'ue');
  value = value.replace(/ß/g, 'ss');
  value = value.replace(/ /g, '-');
  value = value.replace(/\./g, '');
  value = value.replace(/,/g, '');
  value = value.replace(/\(/g, '');
  value = value.replace(/\)/g, '');
  return value;
}

function zimFriendlyName(filename) {
	filename = deUmlaut(filename);
	filename = filename.replace(/ /g, "_");
	filename = filename.replace(/__/g, "_");
	return filename;
}

download(zimFriendlyName(document.title) + '.txt', makeZimNote());
