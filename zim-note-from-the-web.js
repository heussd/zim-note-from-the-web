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
	text = text.concat("-----\n");
	text = text.concat(getSelectionText() + "\n");
	text = text.concat("-----\n\n");
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

download('ZIM_note_from_the_Web.txt', makeZimNote());