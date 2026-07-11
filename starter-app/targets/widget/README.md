# iOS Home-Screen Widget (WidgetKit + SwiftUI)

This target holds the **iOS widget** source (`.swift` files) built with WidgetKit.

- Widget UI is written in **SwiftUI** — it is NOT React Native.
- Share data with the main app via an **App Group**
  (`group.com.example.starterapp`, see `app.config.ts`).
- A config plugin (`plugins/`) copies these files into the generated Xcode
  project during `expo prebuild` and registers the widget extension target.

Typical files: `Widget.swift`, `WidgetView.swift`, `Provider.swift`.
