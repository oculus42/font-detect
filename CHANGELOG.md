# CHANGELOG
JavaScript code to detect available availability of a particular font 
in a browser using JavaScript and CSS.

## 0.4.0 - 2019-08-13
* Minor optimization reduces run time by ~10%.  
* Add `version` to the instance for convenient reference.

## 0.3.0 - 2019-08-11
* Created & published npm package.

## 0.3 - 2012-03-24
* Replaced sans with serif in the list of baseFonts
 
## 0.2 - 2012-03-04
* Comparing font against all the 3 generic font families ie,
'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3 then that font is 100% not available in the system

## 0.15 - 2009-09-21
* Author : Lalit Patel
* Website: http://www.lalit.org/lab/javascript-css-font-detect/
* License: [Apache Software License 2.0](http://www.apache.org/licenses/LICENSE-2.0)

Changed comparision font to default from sans-default-default, 
as in FF3.0 font of child element didn't fallback to parent
element if the font is missing.
