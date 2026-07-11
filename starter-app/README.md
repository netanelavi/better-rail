# Starter App

A clean **cross-platform (iOS + Android)** scaffold with the architecture needed
for **home-screen widgets** and **push/local notifications** — modeled after the
structure of [Better Rail](https://github.com/guytepper/better-rail).

## Stack

| Layer | Technology |
| --- | --- |
| Shared UI & logic | **React Native** + **Expo** + **expo-router** (TypeScript) |
| iOS widget | **Swift / SwiftUI** (WidgetKit) — `targets/widget` |
| Android widget | **Kotlin** (App Widget / Glance) — `android-native/…/widget` |
| Notifications | **Firebase Cloud Messaging** + **Notifee** — `src/services/notifications` |
| Native glue | Config plugins (`plugins/`) inject native code on `expo prebuild` |

> Widgets are **always native code** — Swift on iOS, Kotlin on Android. React
> Native handles the main app; the `targets/` and `android-native/` folders hold
> the native widget sources that config plugins wire into the build.

## Folder structure

```
starter-app/
├── app/                      # Screens (expo-router)
├── src/
│   ├── components/           # Shared UI components
│   ├── hooks/                # Custom hooks
│   ├── services/
│   │   └── notifications/    # FCM + Notifee service (implemented)
│   ├── i18n/                 # Localization
│   └── theme/                # Colors, spacing, typography
├── targets/
│   ├── widget/               # iOS home-screen widget (SwiftUI)
│   ├── watch/                # Apple Watch app (optional)
│   ├── watch-widget/         # Watch complication (optional)
│   └── intent/               # Siri App Intents (optional)
├── ios-native/               # Swift native modules / shared code
├── android-native/           # Kotlin widget + resources
├── plugins/                  # Expo config plugins (inject native code)
├── assets/                   # Icons, fonts, images
├── app.config.ts             # App config + plugin wiring
└── package.json
```

Each native folder contains a `README.md` explaining what goes inside.

## Getting started

```bash
cd starter-app
bun install          # or npm install
bun start            # start the dev server

# In another terminal — first run generates the native projects:
bun ios              # iPhone simulator
bun android          # Android emulator
```

> After changing anything in the native layer (plugins, `app.config.ts`, native
> deps), run `bun prebuild` (or `bun prebuild:clean`) to regenerate `ios/` and
> `android/`.

## Adding the widgets

1. **iOS** — put your SwiftUI widget in `targets/widget/`, then create a config
   plugin in `plugins/` (or use `@bacons/apple-targets`) to register the widget
   extension. Share data via the App Group in `app.config.ts`.
2. **Android** — put your `AppWidgetProvider`/Glance widget in
   `android-native/java/com/starterapp/widget/` with layouts in
   `android-native/res/`, and register it in the manifest via a config plugin.

## Notifications

`src/services/notifications/notifications.ts` is already implemented — call
`registerForPushNotifications()` at startup and `showLocalNotification()`
anywhere. You'll need to add your Firebase config files
(`GoogleService-Info.plist` / `google-services.json`) before building.
