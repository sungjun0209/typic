// // export default {
// //   plugins: {
// //     tailwindcss: {},
// //     autoprefixer: {},
// //   },
// // }

// //postcss.config.cjs
// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ]
// };

// // module.exports = {
// //   plugins: {
// //     tailwindcss: {},
// //     autoprefixer: {},
// //   },
// // };

import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss, autoprefixer],
};