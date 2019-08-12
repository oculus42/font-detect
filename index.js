/**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * See CHANGELOG.md for revision details
 */

/* eslint-env browser */

/**
 * Usage: d = new Detector();
 *        d.detect('font name');
 */
window.Detector = function () {
  // a font will be compared against all the three default fonts.
  // and if it doesn't match all 3 then that font is not available.
  const baseFonts = ['monospace', 'sans-serif', 'serif'];

  // we use m or w because these two characters take up the maximum width.
  // And we use a LLi so that the same matching fonts can get separated
  const testString = 'mmmmmmmmmmlli';

  // we test using 72px font size, we may use any size. I guess larger the better.
  const testSize = '72px';

  const h = document.getElementsByTagName('body')[0];

  // create a SPAN in the document to get the width of the text we use to test
  const s = document.createElement('span');
  s.style.fontSize = testSize;
  s.innerHTML = testString;
  const defaultWidth = {};
  const defaultHeight = {};
  baseFonts.forEach((base) => {
    // get the default width for the three base fonts
    s.style.fontFamily = base;
    h.appendChild(s);
    defaultWidth[base] = s.offsetWidth; // width for the default font
    defaultHeight[base] = s.offsetHeight; // height for the default font
    h.removeChild(s);
  });

  function detect(font) {
    let detected = false;
    baseFonts.forEach((base) => {
      s.style.fontFamily = `${font},${base}`; // name of the font along with the base font for fallback.
      h.appendChild(s);
      const matched = s.offsetWidth !== defaultWidth[base]
        || s.offsetHeight !== defaultHeight[base];
      h.removeChild(s);
      detected = detected || matched;
    });
    return detected;
  }

  this.detect = detect;
};
