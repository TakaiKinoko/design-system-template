import { colors as _colors, radius, spacings, animations, shadows } from './tokens/js/tokens';

/**
 * Tailwind requires the values:
 *{
 *  "boxShadow": {
 *    "level-1": "value",
 *    "level-2": "...",
 *     ....
 *   },
 *  "colors": {
 *    ...
 *  },
 *  ....
 * }
 */
const flattenValue = (obj) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    // If value property does not exist
    if (!obj[key].value) {
      // Should go one level deeper
      result[key] = flattenValue(obj[key]);
    } else {
      result[key] = obj[key].value;
    }
  });

  return result;
};

export const prefix = 'chefyolki-';
export const theme = {
    colors: flattenValue(_colors),
    borderRadius: flattenValue(radius),
    spacing: flattenValue(spacings),
    animation: flattenValue(animations),
    boxShadow: flattenValue(shadows),
    fontFamily: {
        sans: ['"Inter"']
    }
};
export const plugins = [];