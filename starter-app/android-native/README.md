# Android Native Code

Kotlin sources merged into the generated Android project during `expo prebuild`
(via a config plugin in `plugins/`).

- `java/com/starterapp/widget/` — **App Widget** provider + config (Kotlin).
  Use Jetpack **Glance** for a modern Compose-based widget, or classic
  `RemoteViews` + `AppWidgetProvider`.
- `res/` — widget layouts (`res/layout/`), `res/xml/widget_info.xml`,
  drawables, and strings.
