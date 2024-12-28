module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // For Expo projects
    plugins: [
      'react-native-reanimated/plugin', // Add the Reanimated plugin here
    ],
  };
};
