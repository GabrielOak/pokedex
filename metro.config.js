const {getDefaultConfig} = require('metro-config');
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      experimentalImportSupport: false,
      inlineRequires: true,
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      blockList: exclusionList([
        // This stops "react-native run-windows" from causing
        // the metro server to crash if its already running
        new RegExp(
          `${path.resolve(__dirname, 'windows').replace(/[/\\]/g, '/')}.*`,
        ),
        // This prevents "react-native run-windows" from hitting:
        // EBUSY: resource busy or locked, open msbuild.ProjectImports.zip
        /.*\.ProjectImports\.zip/,
      ]),
    },
  };
})();
