const fs = require('fs');
const cheerio = require('cheerio');
const camelcase = require('camelcase');
const capitalize = require('capitalize');
const _ = require('underscore');
const glob = require('glob');
const path = require('path');

const components = {};
const types = {};
const rootDir = path.join(__dirname, '..');
const attrs = ['xlink:href', 'clip-path', 'fill-opacity', 'fill'];
const cleanAtrributes = function ($el, $) {
  _.each(attrs, function (attr) {
    $el.removeAttr(attr);
  });
  if ($el.children().length === 0) {
    return false;
  }

  $el.children().each(function (index, el) {
    cleanAtrributes($(el), $);
  });
};

glob(rootDir + '/icons/particles/*.svg', function (err, icons) {
  icons.forEach(function (iconPath) {
    const id = path.basename(iconPath, '.svg');
    const svg = fs.readFileSync(iconPath, 'utf-8');
    const $ = cheerio.load(svg, { xmlMode: true });
    const $svg = $('svg');
    cleanAtrributes($svg, $);
    const iconSvg = $svg.html();
    const viewBox = $svg.attr('viewBox');
    const folder = iconPath.replace(path.join(rootDir, 'icons') + '/', '').replace('/' + path.basename(iconPath), '');
    const type = capitalize(camelcase(folder));
    const name = type + capitalize(camelcase(id));
    const location = iconPath.replace(path.join(rootDir, 'icons'), '').replace('.svg', '.js');
    components[name] = location;
    if (!types[folder]) {
      types[folder] = {};
    }
    types[folder][name] = location;
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
    const component = `import React from 'react'
import IconBase from 'react-icon-base'

export const ${name} = (props) => {
  return (
    <IconBase viewBox="${viewBox}" {...props}>
      <g>${iconSvg}</g>
    </IconBase>
  )
}

export default ${name}

`;
    fs.writeFileSync(path.join(rootDir, location), component, 'utf-8');
  });
  _.each(types, function (cmps, folder) {
    const iconsModule = _.map(cmps, function (locatio, name) {
      let loc = locatio.replace('.js', '');
      loc = loc.replace('/' + folder, '');
      loc = '.' + loc;
      return `
import ${name} from '${loc}'
export { ${name} }`;
    }).join('\n') + '\n';
    fs.writeFileSync(path.join(rootDir, folder, 'index.js'), iconsModule, 'utf-8');
  });
});
