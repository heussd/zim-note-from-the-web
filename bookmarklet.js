javascript:(function()%7Bfunction%20getSelectionText()%7Bvar%20e%3D%22%22%3Breturn%20window.getSelection%3Fe%3D%22%22%2Bwindow.getSelection()%3Adocument.selection%26%26%22Control%22!%3Ddocument.selection.type%26%26(e%3Ddocument.selection.createRange().text)%2Ce%7Dfunction%20makeZimNote()%7Bvar%20e%3D%22%22%3Breturn%20e%3D%22Content-Type%3A%20text%2Fx-zim-wiki%5CnWiki-Format%3A%20zim%200.4%5Cn%5Cn%5Cn%22%2Ce%3De.concat(%22'''%22)%2Ce%3De.concat(getSelectionText())%2Ce%3De.concat(%22'''%5Cn%5Cn%22)%2Ce%3De.concat(window.location.href%2B%22%5Cn%22)%2Ce%3De.concat(new%20Date)%7Dfunction%20download(e%2Ct)%7Bvar%20n%3Ddocument.createElement(%22a%22)%3Bn.setAttribute(%22href%22%2C%22data%3Atext%2Fplain%3Bcharset%3Dutf-8%2C%22%2BencodeURIComponent(t))%2Cn.setAttribute(%22download%22%2Ce)%2Cn.style.display%3D%22none%22%2Cdocument.body.appendChild(n)%2Cn.click()%2Cdocument.body.removeChild(n)%7Dfunction%20deUmlaut(e)%7Breturn%20e%3De.toLowerCase()%2Ce%3De.replace(%2F%C3%A4%2Fg%2C%22ae%22)%2Ce%3De.replace(%2F%C3%B6%2Fg%2C%22oe%22)%2Ce%3De.replace(%2F%C3%BC%2Fg%2C%22ue%22)%2Ce%3De.replace(%2F%C3%9F%2Fg%2C%22ss%22)%2Ce%3De.replace(%2F%20%2Fg%2C%22-%22)%2Ce%3De.replace(%2F%5C.%2Fg%2C%22%22)%2Ce%3De.replace(%2F%2C%2Fg%2C%22%22)%2Ce%3De.replace(%2F%5C(%2Fg%2C%22%22)%2Ce%3De.replace(%2F%5C)%2Fg%2C%22%22)%7Dfunction%20zimFriendlyName(e)%7Breturn%20e%3DdeUmlaut(e)%2Ce%3De.replace(%2F%20%2Fg%2C%22_%22)%2Ce%3De.replace(%2F__%2Fg%2C%22_%22)%7Ddownload(zimFriendlyName(document.title)%2B%22.txt%22%2CmakeZimNote())%3B%7D)()