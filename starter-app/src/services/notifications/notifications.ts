import notifee, { AndroidImportance } from "@notifee/react-native"
import messaging from "@react-native-firebase/messaging"

/**
 * Notification service.
 *
 * Two layers:
 *  1. Firebase Cloud Messaging (FCM) — remote push notifications.
 *  2. Notifee — displays local notifications & rich/interactive ones,
 *     and renders the incoming FCM messages on Android.
 *
 * Wire `registerForPushNotifications()` into your app startup.
 */

export async function requestNotificationPermission(): Promise<boolean> {
  const settings = await notifee.requestPermission()
  return settings.authorizationStatus >= 1
}

/** Register the device with FCM and return its push token. */
export async function registerForPushNotifications(): Promise<string | null> {
  const granted = await requestNotificationPermission()
  if (!granted) return null

  await messaging().registerDeviceForRemoteMessages()
  const token = await messaging().getToken()
  return token
}

/** Show a simple local notification (works offline, no server needed). */
export async function showLocalNotification(title: string, body: string): Promise<void> {
  const channelId = await notifee.createChannel({
    id: "default",
    name: "Default",
    importance: AndroidImportance.HIGH,
  })

  await notifee.displayNotification({
    title,
    body,
    android: { channelId, pressAction: { id: "default" } },
  })
}

/** Listen for foreground FCM messages and render them via Notifee. */
export function listenToForegroundMessages(): () => void {
  return messaging().onMessage(async (remoteMessage) => {
    const { title, body } = remoteMessage.notification ?? {}
    if (title) await showLocalNotification(title, body ?? "")
  })
}
