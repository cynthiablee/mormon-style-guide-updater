var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Mormons/gi, 'members of the Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Mormon Tabernacle Choir/gi, 'Tabernacle Choir at Temple Square');
			replacedText = replacedText.replace(/Mormon church/gi, 'Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/LDS church/gi, 'Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Church of the Latter-day Saints/gi, 'Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Church of the Latter day Saints/gi, 'Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Church of Latter-day Saints/gi, 'Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Church of Latter day Saints/gi, 'Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/a Mormon/gi, 'a member of the Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Mormonism/gi, 'the restored gospel of Jesus Christ');
			replacedText = replacedText.replace(/Mormon prophet/gi, 'President of the Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Mormon leader/gi, 'leader of the Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Mormon missionary/gi, 'missionary for the Church of Jesus Christ of Latter-day Saints');
			replacedText = replacedText.replace(/Mormon missionaries/gi, 'missionaries for the Church of Jesus Christ of Latter-day Saints');
			

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
