# Expo Config Plugins

Config plugins run during `expo prebuild` and inject your native widget /
notification code into the generated `ios/` and `android/` projects — so you
never edit those generated folders by hand.

Create files like `withIosWidget.ts` and `withAndroidWidget.ts`, then reference
them from the `plugins` array in `app.config.ts`.

Recommended helper library: `@bacons/apple-targets` for iOS widget targets.
