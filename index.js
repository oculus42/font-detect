/**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * See CHANGELOG.md for revision details
 */

/**
 * Usage: d = new Detector();
 *  d.detect('font name');
 */
var Detector = function () {
  // A font will be compared against the three default fonts.
  // If it matches all 3 then that font is not available.
  var baseFonts = ['monospace', 'sans-serif', 'serif'];

  // Use m or w because these two characters take up the maximum width.
  // Use LLi so the same matching fonts can get separated.
  var testString = "mmmmmmmmmmlli";

  // Test using 72px font size. we may use any size. I guess larger the better.
  var testSize = '72px';

  var h = document.getElementsByTagName("body")[0];

  // Create a span to get the width of the text.
  var s = document.createElement("span");
  s.style.fontSize = testSize;
  s.innerHTML = testString;
  var defaultWidth = {};
  var defaultHeight = {};
    // Get the default width for the three base fonts
  for (var i = 0, len = baseFonts.length, base; i < len; i++) {
    base = baseFonts[i];
    s.style.fontFamily = base;
    h.appendChild(s);
    defaultWidth[base] = s.offsetWidth; // width for the default font
    defaultHeight[base] = s.offsetHeight; // height for the default font
    h.removeChild(s);
  }

  function detect(font) {
    for (var i = 0, len = baseFonts.length, base, matched; i < len; i++) {
      base = baseFonts[i];
      // Font name, then a fallback base font.
      s.style.fontFamily = font + ',' + base;
      h.appendChild(s);
      matched = s.offsetWidth !== defaultWidth[base] || s.offsetHeight !== defaultHeight[base];
      h.removeChild(s);
      if (matched) {
        return true;
      }
    }
    return false;
  }

  this.version = '0.4.0';
  this.detect = detect;
};
