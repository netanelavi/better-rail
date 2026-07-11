import { ExpoConfig, ConfigContext } from "expo/config"

/**
 * App configuration.
 * This is where you wire up:
 *  - iOS/Android identifiers
 *  - config plugins that inject the native widget / notification code
 *    (see the `plugins/` and `targets/` folders)
 */
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Starter App",
  slug: "starter-app",
  scheme: "starterapp",
  version: "0.0.1",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  ios: {
    bundleIdentifier: "com.example.starterapp",
    supportsTablet: true,
    // App Groups are required so the widget & main app can share data
    entitlements: {
      "com.apple.security.application-groups": ["group.com.example.starterapp"],
    },
  },
  android: {
    package: "com.example.starterapp",
  },
  plugins: [
    "expo-router",
    // Add your custom config plugins here to inject the native widget targets.
    // Example: "./plugins/withIosWidget", "./plugins/withAndroidWidget"
  ],
  experiments: {
    typedRoutes: true,
  },
})
