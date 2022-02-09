# Changelog

## 4.2.0

[Download](http://sdks.teakcdn.com/unity/Teak-4.2.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   `Teak#handleDeepLinkPath` has been added to allow you manually
>     resolve a deep link path, e.g. /foo/bar?fizz=buzz
> -   `Teak#setOptOutEmail` has been added to let users opt in/out of
>     Teak email campaigns.
> -   `Teak#setOptOutPush` has been added to let users opt in/out of
>     Teak push notification campaigns.
> -   `Teak$UserDataEvent` has been added to provide user specific
>     state, including opt-out status for Teak email and push campaigns
>     and the 'additional data' for the user. This supercedes
>     `Teak$AdditionalDataEvent`, which has been deprecated.
>
> Bug Fixes  
> -   Fixed trace log output for identifyUser to include parameter names
>
> Deprecations  
> -   `Teak$AdditionalDataEvent` has been deprecated, and will be
>     removed in the SDK 5 family. Please use `Teak$UserDataEvent`.

### iOS

> Breaking Changes  
> -   Xcode 12.0.1 is now being used to build the Teak SDK.
>
> New Features  
> -   `Teak#handleDeepLinkPath` lets you manually resolve a deep link
>     path, e.g. /foo/bar?fizz=buzz
>
> Bug Fixes  
> -   None

## 4.1.10

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.10.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Native iOS Fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Check for `NSNull` before `isEqualToString`

## 4.1.9

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.9.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Native Android Fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Add Google Play Billing v4 to `proguard.txt`
> -   If there's a notification/link launch on 'first launch' use that
>     instead of the install referrer

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 4.1.8

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.8.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Native iOS Fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix idenifyUser server call for manually specifying Facebook Id
>     and/or Email

## 4.1.7

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.7.unitypackage)

Breaking Changes  
-   None

New Features  
-   Added `Teak.Instance.RegisterForNotifications()`

Bug Fixes  
-   UPM Changelog Generation re-enabled

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Added `io_teak_no_auto_track_purchase` to prevent automatic
>     purchase collection
> -   Added support for Google Play Billing v4
>
> Bug Fixes  
> -   Fix Android 12 formatting of text-only notifications
> -   Fix issue of opening browser when launched with the host for a
>     teak shortlink, but no path

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Added `TeakRequestPushAuthorization`
> -   Added `TeakNoAutoTrackPurchase` plist configuration, which will
>     disable automatic purchase tracking
>
> Bug Fixes  
> -   Fix issue of opening browser when launched with the host for a
>     teak shortlink, but no path

## 4.1.6

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.6.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Native Android fix.

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix for crash when an Amazon build did not contain Google Play
>     Billing references.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 4.1.5

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.5.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   WebGL fix for providing email with IdentifyUser

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 4.1.4

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.4.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Native android fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixes null Iterator exception when a purchase is cancled in Google
>     Play Billing

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 4.1.3

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.3.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Re-enable armv7 in native iOS library

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Re-enable armv7

## 4.1.2

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Android native bug fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixes issue in Android 12 compatibility that prevented push
>     notifications from displaying when the app was not running.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 4.1.1

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Android native bug fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Mark GooglePlayBillingV3 and Amazon store classes Unobfuscatable.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 4.1.0

[Download](http://sdks.teakcdn.com/unity/Teak-4.1.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   Added new overload to `Teak#IdentifyUser` which takes a
    `Teak.UserConfiguration`, old methods are now `[Obsolete]` and will
    be removed in Teak SDK verison 5.0
-   Added `Teak.Instance.RefreshPushTokenIfAuthorized()` for manual push
    token refresh. This is used when you need to disable automatic push
    token refreshes
-   Added `OnPostLaunchSummary` event which is posted with every game
    launch and contains details about the launch

Bug Fixes  
-   `Teak#OnLaunchedFromNotification` event will be posted when launched
    from an email link

### Android

> Breaking Changes  
> -   If you target Android 12, you must add `android:exported`
>     specifications to the receiver definition for
>     `io.teak.sdk.push.ADMPushProvider$MessageAlertReceiver`:
>
>         <receiver
>             android:name="io.teak.sdk.push.ADMPushProvider$MessageAlertReceiver"
>             android:permission="com.amazon.device.messaging.permission.SEND"
>             android:exported="true">
>
> New Features  
> -   Added support for targeting Android 12 (API level 31)
>
> -   Added a flag to preview SDK 5 changes, `io_teak_sdk5_behaviors`  
>     -   If `io_teak_sdk5_behaviors` is enabled, Teak will no longer
>         automatically collect Facebook Access Token, instead you must
>         pass the Facebook User Id to `Teak#identifyUser`
>
> -   Added `Teak$PostLaunchSummaryEvent` which will contain launch
>     information for both Teak attributed, and non-Teak attributed
>     launches
>
> Bug Fixes  
> -   When app is launched via an email link `Teak$NotificationEvent`
>     event is now correctly posted.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Added a flag to preview SDK 5 changes, `TeakSDK5Behaviors`  
>     -   Will no longer automatically collect Facebook Access Token,
>         instead you must pass the Facebook User Id to
>         `[Teak identifyUser:withConfiguration:]`
>
> -   Added flag to disable automatic push token refresh at app launch,
>     `TeakDoNotRefreshPushToken`
>
> -   Added `TeakPostLaunchSummary` event which is posted with each app
>     launch, with information about the launch.
>
> Bug Fixes  
> -   When app is launched via an email link `TeakNotificationAppLaunch`
>     event is now correctly posted.

## 4.0.2

[Download](http://sdks.teakcdn.com/unity/Teak-4.0.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   Added support for targeting Android 12 (API level 31)

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   If you target Android 12, you must add `android:exported`
>     specifications to the receiver definition for
>     `io.teak.sdk.push.ADMPushProvider$MessageAlertReceiver`:
>
>         <receiver
>             android:name="io.teak.sdk.push.ADMPushProvider$MessageAlertReceiver"
>             android:permission="com.amazon.device.messaging.permission.SEND"
>             android:exported="true">
>
> New Features  
> -   Added support for targeting Android 12 (API level 31)
>
> Bug Fixes  
> -   Fixed a bug where handling links would only report the creative
>     name for links and not email links.

### iOS

> Version number bump only.

## 4.0.1

[Download](http://sdks.teakcdn.com/unity/Teak-4.0.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   WebGL now properly supports `TeakScheduleId` and `TeakCreativeId`
-   WebGL now properly allows email address collection via
    `IdentifyUser`

### Android

> Version number bump only.

### iOS

> Version number bump only.

## 4.0.0

[Download](http://sdks.teakcdn.com/unity/Teak-4.0.0.unitypackage)

Breaking Changes  
-   Minimum Unity version supported is now 2018.4.9f1

-   Android  
    -   Moved the Android configuration values written by Teak from
        `Assets/Plugins/Android/res/values` to
        `Assets/Plugins/Android/teak-values.androidlib/res/values`
    -   `support-v4` support has been removed, AndroidX is now required
    -   Firebase Job Dispatcher has been deprecated and removed,
        `androidx.work:work-runtime:2.5.0` is now required.
    -   Firebase's Unity Plugin is now required for configuration of
        Push on Android.
    -   EventBus, `org.greenrobot:eventbus:3.2.0` is now required.
    -   InstallReferrer version 2 is now required
        `com.android.installreferrer:installreferrer:2.2+`

-   OpenIAB support removed. The project was abandoned 4 years ago.

-   Unity Purchasing: Minimum Unity Purchasing version is now 3.1.0

-   Unity Purchasing: `TeakStoreListener` is no longer supported or
    required.

-   `TeakNotification`  
    -   Previously there was a `string` value in `ScheduleId` that was
        actually the name of the schedule. This is now contained in
        `ScheduleName` and the contents of `ScheduleId` are now the
        `ulong` id of the schedule.
    -   Previously there was a `string` value in `CreativeId` that was
        actually the name of the creative. This is now contained in
        `CreativeName` and the contents of `CreativeId` are now the
        `ulong` id of the creative.

-   `TeakReward`  
    -   Previously there was a `string` value in `ScheduleId` that was
        actually the name of the schedule. This is now contained in
        `ScheduleName` and the contents of `ScheduleId` are now the
        `ulong` id of the schedule.
    -   Previously there was a `string` value in `CreativeId` that was
        actually the name of the creative. This is now contained in
        `CreativeName` and the contents of `CreativeId` are now the
        `ulong` id of the creative.

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   Deprecated method `Teak.onNewIntent` removed
>
> -   Support for Adobe AIR removed
>
> -   `support-v4` is no longer supported, AndroidX is now required
>
> -   If you use the Facebook SDK, version 4 is now the minimum
>     supported version
>
> -   Teak will no longer create a Firebase instance if one does not exist  
>     -   `io_teak_ignore_default_firebase_configuration` removed
>     -   `io_teak_gcm_sender_id` removed
>     -   `io_teak_firebase_app_id` removed
>     -   `io_teak_firebase_api_key` removed
>     -   `io_teak_firebase_project_id` removed
>
> -   Minimum target SDK is now API 30
>
> -   `com.android.installreferrer` version used is now 2.2
>
> New Features  
> -   Now using v2 Signatures for request signing (this is not a
>     user-facing change).
> -   Now supports out-of-memory fallbacks for all notifiation images.
> -   Added `teakScheduleId` and `teakCreativeId` to `NotificationEvent`
> -   Added `teakScheduleId` and `teakCreativeId` to `RewardClaimEvent`
>
> Bug Fixes  
> -   Fixed a bug where links created on the Teak Dashboard could only
>     link to the teakXXXXX:// scheme.

### iOS

> Breaking Changes  
> -   Required `MobileCoreServices.framework` is now
>     `CoreServices.framework`
>
> New Features  
> -   Now using v2 Signatures for request signing (this is not a
>     user-facing change).
> -   Added `teakScheduleId` and `teakCreativeId` to `TeakNotification`
> -   Added `teakScheduleId` and `teakCreativeId` to `TeakReward`
>
> Bug Fixes  
> -   Fixed race condition in `processDeepLinks`
> -   Fixed a bug where links created on the Teak Dashboard could only
>     link to the teakXXXXX:// scheme.

## 3.5.3

[Download](http://sdks.teakcdn.com/unity/Teak-3.5.3.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   WebGL now properly allows email address collection via
    `IdentifyUser`

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixed a bug where links created on the Teak Dashboard could only
>     link to the teakXXXXX:// scheme.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixed race condition in `processDeepLinks`
> -   Fixed a bug where links created on the Teak Dashboard could only
>     link to the teakXXXXX:// scheme.

## 3.5.2

[Download](http://sdks.teakcdn.com/unity/Teak-3.5.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   Adds `Teak.Instance.ReportCanvasPurchase` for reporting purchases on
    Facebook Canvas

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 3.5.1

[Download](http://sdks.teakcdn.com/unity/Teak-3.5.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Fixes behavior in Unity Editor for destroying the Teak Game Object
    automatically

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 3.5.0

[Download](http://sdks.teakcdn.com/unity/Teak-3.5.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   Requires Firebase Messaging 21 minimum
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Resets `firstSendTime` on UserProfile after send.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   When logging out, the new Session is no longer intialized using
>     the previous user id or Facebook token.
> -   Fixes invalid signatures on some events
> -   Reset `firstSentTime` when UserProfile is sent.

## 3.4.4

[Download](http://sdks.teakcdn.com/unity/Teak-3.4.4.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix deadlock when a UnitySendMessage call would cause another
>     callback into Teak under certain circumstances

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 3.4.3

[Download](http://sdks.teakcdn.com/unity/Teak-3.4.3.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix singleton FCMPushProvider to allow operation before Teak
>     initialization

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 3.4.2

[Download](http://sdks.teakcdn.com/unity/Teak-3.4.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Let users use theor own FirebaseMessagingService
> -   Added `isTeakNotification`
> -   Added `onMessageReceivedExternal`
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Users can now be their own UNNotificationCenter delegates and pass
>     the calls to Teak
> -   Added `isTeakNotification:`
> -   Added `didReceiveNotificationResponse:withCompletionHandler:`
> -   Added `willPresentNotification:withCompletionHandler:`
>
> Bug Fixes  
> -   None

## 3.4.1

[Download](http://sdks.teakcdn.com/unity/Teak-3.4.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix mutex lock order to resolve potential deadlock

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 3.4.0

[Download](http://sdks.teakcdn.com/unity/Teak-3.4.0.unitypackage)

Breaking Changes  
-   iOS library is now built using Xcode 11.3.1

New Features  
-   Added `OnLaunchedFromLink`

Bug Fixes  
-   Added additional protection against the auto-created
    `TeakGameObject` from getting saved into a scene

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Supports Amazon Device Messaging 1.1.0
> -   LaunchedFromLink event
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   SDK is now built using Xcode 11.3.1
>
> New Features  
> -   Added `TeakLaunchedFromLink` event
>
> Bug Fixes  
> -   Fixed crash if `CFBundleShortVersionString` or `CFBundleVersion`
>     were nil

## 3.3.2

[Download](http://sdks.teakcdn.com/unity/Teak-3.3.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Android deadlock fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixes deadlock in `Session.isCurrentSession`

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 3.3.1

[Download](http://sdks.teakcdn.com/unity/Teak-3.3.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   iOS 14 IDFA support

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Detects iOS 14 IDFA permission grant.
>
> Bug Fixes  
> -   None

## 3.3.0

[Download](http://sdks.teakcdn.com/unity/Teak-3.3.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   Now automagically adds deep links to `AndroidManifest.xml` when the
    Teak Post-Process script is run
-   Now available in Unity Package Manager format on GitHub as
    [GoCarrot/upm-package-teak](https://github.com/GoCarrot/upm-package-teak)

Bug Fixes  
-   Now catching and reporting callback errors for scheduling and
    canceling notifications

### Android

> Breaking Changes  
> -   If using Teak to create a separate Firebase instance, you must add
>     `io_teak_firebase_project_id` and
>
> New Features  
> -   Support Firebase Project Id for Firebase 20.1.6+
>
> Bug Fixes  
> -   Push state chain limited to a length of 50
> -   Fix `public static void identifyUser(final String userIdentifier)`
>     overloaded method
> -   No longer process deep links which are not Teak links
> -   Reduce thread allocations, and add further measurement around
>     thread and executor allocations

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   iOS now supports enhanced integration checks
> -   iOS now supports `report_client_error` and will popup warnings
>     when enhanced integration checks are enabled
>
> Bug Fixes  
> -   Push State Chain has a max length of 50
> -   `OnReward` event will now always contain a `status` key

## 3.2.0

[Download](http://sdks.teakcdn.com/unity/Teak-3.2.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   `ChannelName` added to `TeakNotification` and `TeakReward`, one of:  
    ios\_push  
    iOS

    android\_push  
    Android and Amazon

    fb\_a2u  
    Facebook

    email  
    Email

-   Added `OnCallbackError` event which will inform you about errors which occur during callbacks, such as deep links:  
    callback\_type  
    `string` type of callback

    exception  
    `Exception` the exception thrown

    data  
    `Dictionary<string, object>` callback specific information

-   Added `Logout` which will log out the current user

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Supports Facebook SDK 6.x
> -   Added `io_teak_log_trace`, enable to log out every Teak call with
>     parameters
> -   Added `logout`
> -   Added `teakChannelName` to the dictionary reported by notification
>     and reward claim events
>
> Bug Fixes  
> -   Fixes compatibility with Firebase 20.1+

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Supports Facebook SDK 6.x
> -   Added `TeakLogTrace` Plist setting
> -   Added `logout`
> -   Added `teakChannelName` to the dictionary reported by notification
>     and reward claim events
>
> Bug Fixes  
> -   None

## 3.1.1

[Download](http://sdks.teakcdn.com/unity/Teak-3.1.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   Adds custom `ToString` to `TeakNotification`

Bug Fixes  
-   Fixes a warning in the vendored `MiniJSON.cs`
-   Fixes behavior of Unity custom app delegates for iOS, as well as
    provides a specific error message for Unity log listeners

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   No longer will call deep links again, or resolve rewards again,
>     when the user id is changed.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixes encoding bugs introduced by
>     `[NSCharacterSet URLQueryAllowedCharacterSet]`.
> -   Fixes custom app delegates in Unity would not receive an event for
>     non-Teak deep-links coming from notifications.

## 3.1.0

[Download](http://sdks.teakcdn.com/unity/Teak-3.1.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   Added `DeepLink` to `TeakNotification`

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   `/teak_internal/app_settings` deep link added. Opens Android
>     settings to the settings for this app.
> -   Foreground notification support.
>
> Bug Fixes  
> -   Added additional proguard `keep` paterns.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   `teakDeepLink` is now included in the `TeakNotificationAppLaunch`
>     and `TeakForegroundNotification` events.
> -   `teakShowInForeground` can be specified on a per-notification
>     basis, to allow notifications to be displayed while the app is
>     running.
> -   `/teak_internal/app_settings` deep link added. Opens iOS settings
>     to the settings for this app.
> -   Adds `xcode_version` to log output.
>
> Bug Fixes  
> -   Fixes encoding of `%` during form encodes.

## 3.0.2

[Download](http://sdks.teakcdn.com/unity/Teak-3.0.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Fixes behavior for custom App Delegates when using a non-Teak deep
    link
-   Android &lt; 5.1 would send invalid UTF characters via
    UnitySendMessage resulting in a soft-exception in Teak log event
    listeners, this exception is now caught and reported to the log
    listener

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixes handling of non-Teak deep links and propigation to app
>     delegates

## 3.0.1

[Download](http://sdks.teakcdn.com/unity/Teak-3.0.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Teak can now optionally ignore the default Firebase configuration,
>     use
>     `<meta-data android:name="io_teak_ignore_default_firebase_configuration" android:value="true" />`
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 3.0.0

[Download](http://sdks.teakcdn.com/unity/Teak-3.0.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   Support for AndroidX (you must use 1.2.119 of the Google Play
    Services Resolver to use AndroidX)

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   `minSdkVersion` is now 16
> -   `targetSdkVersion` must now be 28 or higher
>
> New Features  
> -   Teak can now use `androidx` or the `support-v4` libraries for its
>     dependencies.
>
> Bug Fixes  
> -   Can now use the 5.x series of the Facebook SDK.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixed a bug where playable notifications with custom thumbnails
>     had off-by-one actions.
> -   Use a more robust way of converting NSData to a hex string for
>     push keys.

## 2.3.0

[Download](http://sdks.teakcdn.com/unity/Teak-2.3.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   `IdentifyUser` can now take an optional parameter for email.

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   The incoming path used to parse a deep link is sent along to the
>     handler in the key `__incoming_path`
> -   The full url used to parse a deep link is sent along to the
>     handler in the key `__incoming_url`
> -   `identifyUser` now takes email as a parameter
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Deep links now recieve `__incoming_path` and `__incoming_url`
> -   Adds email to identify user
>
> Bug Fixes  
> -   None

## 2.2.0

[Download](http://sdks.teakcdn.com/unity/Teak-2.2.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   `OnForegroundNotification` is an event which is fired when a Push
    Notification is recieved while the game is in the foreground (in
    which case, the notification is not displayed to the user).
-   `OnLogEvent` is an event which is fired when the Teak SDK makes a
    log call

Bug Fixes  
-   Added some iOS Frameworks that seemed to be required for some build
    configurations but not others.
-   Changes to automatic adding of iOS Entitlements. This could change
    the name of the entitlements file that is used by the built project.

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   `FOREGROUND_NOTIFICATION_INTENT` is broadcast when a Push
>     Notification is recieved while the app is in the foreground.
> -   `ms_since_first_event` is now sent with batched requests.
> -   Added `deviceBoard` and `deviceProduct` to device information.
> -   `Teak.setLogListener` for getting callbacks when the Teak SDK
>     would log an event.
>
> Bug Fixes  
> -   Suppress some log spam when looking to see if
>     `NotificationManagerCompat.areNotificationsEnabled` is supported.
> -   Stopped some of the fine-grain checking for what
>     `IInAppBillingService` supports, to prevent possible ANRs.
> -   All threads and executors are now named, so that any ANR/crash
>     report which includes thread names will clearly show what Teak is
>     doing in that ANR/crash.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   `TeakForegroundNotification` named notification dispatched when a
>     Push Notification is received while the app is in the foreground.
> -   `ms_since_first_event` is now included in batched requests.
> -   `logListener` is an assignable delegate which will get called each
>     time the Teak SDK logs an event.
>
> Bug Fixes  
> -   Fixes background crash if a notification attachment failed to get
>     loaded properly,
>     `[_UNNotificationServiceExtensionRemoteContext _stageAttachmentsForNotificationContent]`.

## 2.1.3

[Download](http://sdks.teakcdn.com/unity/Teak-2.1.3.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Undefines `TEAK_X_Y_OR_NEWER` before re-defining to prevent errors
    in the case of rollbacks.

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixes crash when `waitForDeepLinkOperation` was re-submitted after
>     finishing.

## 2.1.2

[Download](http://sdks.teakcdn.com/unity/Teak-2.1.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Properly defines `TEAK_2_1_OR_NEWER`

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   No longer hooks `application:openURL:options:` unless the host app
>     implements it (Fixes Facebook login issues for certain Unity
>     Facebook SDK versions)

## 2.1.1

[Download](http://sdks.teakcdn.com/unity/Teak-2.1.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Fix import for `TeakProcessDeepLinks` so it's iOS only

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   `io_teak_enable_caching` has been removed
> -   `app_version` reported to Sentry should be a string, not int
> -   Sentry reporting Job is now working properly

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixes form encode of `[NSNull null]` and `nil`

## 2.1.0

[Download](http://sdks.teakcdn.com/unity/Teak-2.1.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   Added `IncrementEvent`
-   Optional requirement for
    `com.android.installreferrer:installreferrer:1+` to support
    `com.android.installreferrer.api.InstallReferrerClient`

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Support `trackEvent` for Adobe AIR
> -   Added `incrementEvent`
> -   Now tracking `PackageInfo.versionName` (instead of just
>     `PackageInfo.versionCode`)
> -   Added support for Google Play's
>     `com.android.installreferrer.api.InstallReferrerClient`
> -   Added support for specifying the Android store, using
>     `io_teak_store_id`. Will detect Amazon automatically; defaults to
>     Google Play.
>
> Bug Fixes  
> -   Properly handle deep links with '?' or '\#' in a URL path element

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Support `trackEvent` for Adobe AIR
> -   Added
>     `[Teak incrementEventWithActionId:forObjectTypeId:andObjectInstanceId:count:]`
>
> Bug Fixes  
> -   Properly handle deep links with '?' or '\#' in a URL path element
> -   Fixed corner case bug where deep links would get evaluated before
>     the host app was ready for them

## 2.0.1

[Download](http://sdks.teakcdn.com/unity/Teak-2.0.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   Preprocessor define for Teak SDK version: `TEAK_2_0_OR_NEWER`

Bug Fixes  
-   Compiler warning under .NET 4.x fixed
    (`System.Xml.XmlReaderSettings.ProhibitDtd`)
-   Fixed UnityPurchasing compile error on non-Facebook WebGL target
    builds
-   Android ADMPushProvider fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   `ADMPushProvider$MessageAlertReceiver` no longer obfuscated.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 2.0.0

[Download](http://sdks.teakcdn.com/unity/Teak-2.0.0.unitypackage)

Breaking Changes  
-   Unity 4 is no longer supported
-   New Android dependencies required (`android-dependencies`)
-   Firebase is now required (`fcm-migration`)
-   `AreNotificationsEnabled` -&gt; `PushNotificationState`
    (`get-notification-state`)

New Features  
-   Support for the UnityPurchasing plugin
-   iOS Extensions can now be auto-magically added by the
    post-processing scripts
-   iOS Entitlements can now be added by the post-processing scripts

Bug Fixes  
-   Prime31 and OpenIAB purchase plugins will now work when using IL2CPP
    on Android
-   Fixed bug which could happen with jQuery initialization with WebGL

### Android

> Breaking Changes  
> -   Direct GCM support removed, now using Firebase
>
> -   Firebase Job Dispatcher is now used for a unified Teak worker  
>     -   Removes `io.teak.sdk.service.RavenService`
>     -   Removes `io.teak.sdk.service.DeviceStateService`
>     -   Changes `io.teak.sdk.service.JobService` into a Firebase
>         JobDispatcher
>
> -   `userHasDisabledNotifications` -&gt; `getNotificationStatus`
>
> New Features  
> -   ShortcutBadger @ 50d422d1792b394a5a6cda10cc358ba58436fe29
> -   `io_teak_enable_caching` now defaults to `true`
>
> Bug Fixes  
> -   If an `OutOfMemoryError` is thrown during construction of a
>     notification's expanded view the expanded view will simply be
>     omitted instead of not showing the entire notification.

### iOS

> Breaking Changes  
> -   `hasUserDisabledPushNotifications` -&gt; `notificationState`
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixed an error in
>     `determineCurrentPushStateWithCompletionHandler:` which prevented
>     proper state detection of push notifications
> -   Cache `logRemote`

## 1.0.2

[Download](http://sdks.teakcdn.com/unity/Teak-1.0.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Android ADMPushProvider fix

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   `ADMPushProvider$MessageAlertReceiver` no longer obfuscated.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 1.0.0

[Download](http://sdks.teakcdn.com/unity/Teak-1.0.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   iOS Push State fix in Native SDK
-   Fix Android IL2CPP when using Prime31

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fixes to `TeakPushChainState` tracking.

## 1.0.0

[Download](http://sdks.teakcdn.com/unity/Teak-1.0.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   Notification launch callbacks now work on WebGL for Facebook Canvas
-   Deep link launch callbacks now work on WebGL

Bug Fixes  
-   A WebGL scheduled/canceled notification could sometimes not trigger
    a callback, this has been fixed

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Notification asset downloads can be cached, if
>     `io_teak_enable_caching` is enabled. It is disabled by default,
>     but everyone is encouraged to try using it.
> -   Long Distance notifications
>
> Bug Fixes  
> -   Now defaults to Google Play Store if there is no installer
>     package, instead of disabling tracking
> -   Video notifications should no longer get sorted to the bottom
>     after refresh on Android 8+

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   iOS 12 expanded view notifications now perform the first custom
>     action when the view area is tapped (via invisible button)
> -   Notification assets (video/image/etc) are now cached downloads
> -   Notification extensions are now uploaded as artifacts for Adobe
>     AIR repacker
> -   Long distance notifications
>
> Bug Fixes  
> -   None

## 0.19.0

[Download](http://sdks.teakcdn.com/unity/Teak-0.19.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   `RegisterForProvisionalNotifications()`

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Notifications will now retry asset loading if an asset fails to
>     load. Delay is 2, 4, and 8 seconds.
> -   Android P support
> -   `android.os.Build.SERIAL` will not be used under Android P
> -   Updated Sentry exception reporting properties
> -   Tracks historical changes in the state of push permissions
> -   Per-user opt-out of tracking, configured via identifyUser
>
> Bug Fixes  
> -   In the ZIP distribution of the Android SDK, the UUID for the
>     ProGuard file sent to Sentry was not being included, this is fixed
> -   Rarely a deadlock could occur when a GCM registration update came
>     in during a Session state change, this is fixed

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Updated Sentry exception reporting properties
> -   Tracks historical changes in the state of push permissions
> -   Per-user opt-out of tracking, configured via identifyUser
> -   iOS 12 Support
> -   Support for Provisional push authorization
>
> Bug Fixes  
> -   Fixes formatting of reported iOS version
> -   Hopefully fix intermittent crash on iOS 9 possibly related to
>     zombie objects in `setNumericAttribute` and `setStringAttribute`

## 0.18.0

[Download](http://sdks.teakcdn.com/unity/Teak-0.18.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Ability to disable collection of IDFA, Push Key, and/or Facebook
>     Access Token
>
>     > -   `<meta-data android:name="io_teak_enable_idfa" android:value="false" />`
>     > -   `<meta-data android:name="io_teak_enable_facebook" android:value="false" />`
>     > -   `<meta-data android:name="io_teak_enable_push_key" android:value="false" />`
>
> Bug Fixes  
> -   If `Teak.onCreate` fails, don't crash with a null pointer

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Ability to disable collection of IDFA, Push Key, and/or Facebook Access Token  
>     -   `<key>TeakEnableIDFA</key><false/>`
>     -   `<key>TeakEnableFacebook</key><false/>`
>     -   `<key>TeakEnablePushKey</key><false/>`
>
> Bug Fixes  
> -   Fixed logging of events during alloc/init of the Teak object

## 0.17.0

[Download](http://sdks.teakcdn.com/unity/Teak-0.17.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   Requires `io.teak.sdk.service.JobService` for Android 8 job
>     compatibility.
>
> -   Unity requires no changes.
>
> -   Adobe AIR requires adding
>     `<service android:name="io.teak.sdk.service.JobService" android:permission="android.permission.BIND_JOB_SERVICE" android:exported="true"/>`
>     to XML
>
> -   Renamed some public static final fields (This should have no
>     impact unless you were using these for some very strange reason)
>
>     > -   `TEAK_API_KEY` -&gt; `TEAK_API_KEY_RESOURCE`
>     > -   `TEAK_APP_ID` -&gt; `TEAK_APP_ID_RESOURCE`
>     > -   `TEAK_GCM_SENDER_ID` -&gt; `TEAK_GCM_SENDER_ID_RESOURCE`
>
> New Features  
> -   Android 8 job compatibility
> -   Reward Link Name is now the ‘creative name’ if the on reward
>     callback was triggered from a deep link
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Reward Link Name is now the 'creative name' if the on reward
>     callback was triggered from a deep link
>
> Bug Fixes  
> -   None

## 0.16.0

[Download](http://sdks.teakcdn.com/unity/Teak-0.16.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix corner case where GCM reg would not get sent if it came in
>     *during* identifyUser (for real this time)
> -   Fixes integration checker when `<activity-alias>` is used

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 0.15.0

[Download](http://sdks.teakcdn.com/unity/Teak-0.15.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   If another plugin is using IMPL\_APP\_CONTROLLER\_SUBCLASS it now
    works

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   User Profile support
> -   Request batchfing for trackEvent, user profile
>
> Bug Fixes  
> -   Fix corner case where GCM reg would not get sent if it came in
>     *during* identifyUser

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   User profile
> -   Batching for trackEvent and user profile
>
> Bug Fixes  
> -   Circular reference in expanded push notification view fixed

## 0.14.0

[Download](http://sdks.teakcdn.com/unity/Teak-0.14.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   `OnReward` and `OnLaunchedFromNotification` null checks (this didn’t
    seem to affect anyone, but still was a good fix)
-   WebGL error with `TeakDeepLinkTableInternal` fixed

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Notification buttons in expanded view
> -   Aspect ratio now preserved in small view notifications
>
> Bug Fixes  
> -   Launch deep-link now takes precedence over install-attribution
>     deep link on first launch of app

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Playable notifications!
>
> Bug Fixes  
> -   Deep links will no longer get processed twice when the deep link
>     starts the app (if it was not already running)
> -   Will no longer crash when passing NULL to TeakTrackEvent (C
>     function)
> -   Now using Thread Local Storage for RavenLocationHelper stack
> -   Now copying input values from public API functions
> -   Ravens (internal bug reporters) are now getting DSNs assigned
>     properly, and as such are now working again
> -   The SDK reported purchase time now includes seconds as well as
>     hours/minutes

## 0.13.8

[Download](http://sdks.teakcdn.com/unity/Teak-0.13.8.unitypackage)

Breaking Changes  
-   None

New Features  
-   Now supports Play Services Resolver plugin
-   RewardId added to TeakReward
-   SetBadgeCount

Bug Fixes  
-   Native SDK update

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Added `userHasDisabledNotifications`
> -   Added `openSettingsAppToThisAppsSettings`
> -   Added `setApplicationBadgeNumber`
> -   teakRewardId now included in the `REWARD_CLAIM_ATTEMPT` event
> -   Enhanced Integration Checks
>
> Bug Fixes  
> -   Schedule/Cancel notification returns id as a string

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Added `setApplicationBadgeNumber:`
> -   Added `hasUserDisabledPushNotifications:`
> -   Added `openSettingsAppToThisAppsSettings`
> -   `teakRewardId` is now included in the `TeakOnReward` event
> -   Now will warn via logs if `unregisterForRemoteNotifications` is
>     called
>
> Bug Fixes  
> -   `teakRewardId` in the `TeakNotificationAppLaunch` event is now a
>     string (matches Android behavior, and fixes issues in Adobe Air)

## 0.13.7

[Download](http://sdks.teakcdn.com/unity/Teak-0.13.7.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   Now requires additional frameworks:  
>     -   ImageIO.framework
>
> New Features  
> -   Deploy `Info.plist` for `TeakNotificationContent`
>
> Bug Fixes  
> -   Animated GIFs now work properly in custom notification UI

## 0.13.6

[Download](http://sdks.teakcdn.com/unity/Teak-0.13.6.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Purchase tracking works once again
> -   Send common payload during reward claim
> -   `RetryableTask` now immediately fails if `ClassNotFoundException`
>     (if GCM isn’t linked)

### iOS

> Breaking Changes  
> -   Now requires additional frameworks:  
>     -   AVFoundation.framework
>     -   MobileCoreServices.framework
>
> New Features  
> -   Interactive notifications
>
> Bug Fixes  
> -   None

## 0.13.5

[Download](http://sdks.teakcdn.com/unity/Teak-0.13.5.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix crash when changing user id due to locking Session A and
>     unlocking Session B
> -   Fix non-delivery of push notifications when app had been killed in
>     the background
> -   Try and catch initialization errors from TeakWrapper and report
>     them

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 0.13.3

[Download](http://sdks.teakcdn.com/unity/Teak-0.13.3.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   You can now load images in push notifications from your Android
>     assets, example `assets:///pixelgrid_2000x2000.png` (note triple
>     slash)
> -   Using `NONE` for an image resource will now remove it from the
>     layout
> -   Notifications will no longer combine into a single notification
>     (in as much as is possible to control) on Android 8+ only
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 0.13.2

[Download](http://sdks.teakcdn.com/unity/Teak-0.13.2.unitypackage)

Breaking Changes  
-   Now using AAR for Android, remove these files  
    -   Assets/Editor/TeakPackageBuilder.cs
    -   Assets/Plugins/Android/res/layout/teak\_big\_notif\_image\_text.xml
    -   Assets/Plugins/Android/res/layout/teak\_notif\_no\_title.xml
    -   Assets/Plugins/Android/res/values/teak\_styles.xml
    -   Assets/Plugins/Android/res/values-v21/teak\_styles.xml

New Features  
-   None

Bug Fixes  
-   Native SDK update

### Android

> Breaking Changes  
> -   If you are compiling with a target SDK of Android 26 or greater,
>     Teak will now check requirements and throw an exception if the
>     Android v4 support lib doesn’t support Android 26 features
>     (required features for push functionality)
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Support explicit intents for Android 26+
> -   Support notification categories for Android 26+
> -   ADM listener fixed
> -   Deadlock due to very slow network conditions fixed

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 0.13.1

[Download](http://sdks.teakcdn.com/unity/Teak-0.13.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   New setting (default off) controls if Teak does build post
    processing. Now it does not unless you enable it in Settings.

Bug Fixes  
-   Native SDK update

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Unity/Air wrapper classes now included in core for testability and
>     better continuous integration performance
>
> Bug Fixes  
> -   Hotfix from 0.12.9 integrated
> -   Internal system re-write

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Media-push supported, basic image/gif only
>
> Bug Fixes  
> -   Hotfix from 0.12.9 integrated
> -   Internal system re-write

## 0.13.0

[Download](http://sdks.teakcdn.com/unity/Teak-0.13.0.unitypackage)

Breaking Changes  
-   `io.teak.sdk.TeakUnityPlayerNativeActivity` renamed to
    `io.teak.sdk.wrapper.unity.TeakUnityPlayerNativeActivity`
-   `io.teak.sdk.TeakUnityPlayerActivity` renamed to
    `io.teak.sdk.wrapper.unity.TeakUnityPlayerActivity`

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   `io.teak.sdk.TeakUnityPlayerNativeActivity` renamed to
>     `io.teak.sdk.wrapper.unity.TeakUnityPlayerNativeActivity`
> -   `io.teak.sdk.TeakUnityPlayerActivity` renamed to
>     `io.teak.sdk.wrapper.unity.TeakUnityPlayerActivity`
> -   `io.teak.sdk.Application` renamed to
>     `io.teak.sdk.wrapper.Application`
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 0.12.8

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.8.unitypackage)

Breaking Changes  
-   TeakNotification callbacks are now (string, string)

New Features  
-   Added CancelAllScheduledNotifications

Bug Fixes  
-   Native SDK fixes

### Android

> Breaking Changes  
> -   Use `Teak.registerDeepLink` instead of `DeepLink.registerRoute`
>
> New Features  
> -   `TeakNotification.cancelAll`
> -   `TeakNotification` calls now return a JSON string with `status`
>     and `data`
>
> Bug Fixes  
> -   Setting verbose logging will immediately take effect
> -   Corner-case crash fix in Logs
> -   Attach additional info to exception reporting, teakCreativeName
> -   Fixed caught-exception in GCM if the OS kills the GCM service

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   `TeakNotification` now has a `status` field
> -   Added `[TeakNotification cancelAll]`
>
> Bug Fixes  
> -   Fix for iOS 8 regex parsing

## 0.12.7

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.7.unitypackage)

Breaking Changes  
-   TeakUnityPlayerNativeActivity deprecated in favor of
    TeakUnityPlayerActivity

New Features  
-   None

Bug Fixes  
-   WebGL builds will now build cleanly

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Additional info in the notification & reward payload
>
> Bug Fixes  
> -   Add specific catches for exceptions we should ignore, and not
>     report:
> -   TEAK-SDK-F, TEAK-SDK-M, TEAK-SDK-X, TEAK-SDK-11, TEAK-SDK-Q,
>     TEAK-SDK-Z, TEAK-SDK-N, TEAK-SDK-K, TEAK-SDK-W, TEAK-SDK-V,
>     TEAK-SDK-T, TEAK-SDK-S, TEAK-SDK-J, TEAK-SDK-P
> -   Fixed TEAK-SDK-9
> -   Fixed issue with Android &lt; 5 and custom notification icons

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Added additional lifecycle callback logging
> -   Additional info in the notification/reward payload
>
> Bug Fixes  
> -   Fix for crash on Facebook logout (or otherwise sending a null
>     token)

## 0.12.6

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.6.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   Native SDK hotfixes
-   Fix for Prime31/OpenIAB not being in default locations (firstpass
    assembly)

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix parameter checking logic bug in trackEvent
> -   Fix 'cold start' attribution bug

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix parameter checking logic bug in trackEvent
> -   Reduce memory usage via shared `NSURLSessions`
> -   Fix duplicate `identifyUser` call

## 0.12.5

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.5.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Add support for:  
>     -   `io_teak_notification_accent_color`
>     -   `io_teak_small_notification_icon`
>     -   `io_teak_large_notification_icon`
>
> Bug Fixes  
> -   Back-stack loop bug fix
> -   Catch `SecurityException` on very old Android which requires
>     `android.permission.VIBRATE`
>
> Misc  
> -   Raven service changed from error to warning to prevent developer
>     anxiety

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   `TeakVersionDict` exposed
>
> Bug Fixes  
> -   Bogus JSON from server could cause a nil dictionary to get sent to
>     nonnull.

## 0.12.4

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.4.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Additional listeners for GCM registration key updates, and
>     improvements in handling GCM registrations.

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   None

## 0.12.3

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.3.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Use `layout_centerVertical` on the app icon to support various
>     background image heights
> -   Prevent back-stack loops from out of app deep-links

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Fix incorrect conditional check during
>     `application:didReceiveRemoteNotification:fetchCompletionHandler:`

## 0.12.2

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.2.unitypackage)

Breaking Changes  
-   None

New Features  
-   None

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Push notification remote syntax is now versioned (non-breaking),
>     new features:
> -   Large/small image background
> -   Support setting credentials in `<meta-data>` for Adobe Air.
>
> Bug Fixes  
> -   Fix state machine bug where a RemoteConfiguration coming back when
>     device was in background would assign the Configured Session
>     state.
> -   No longer calls `ACTION_CLOSE_SYSTEM_DIALOGS` when dismissing
>     notifications
> -   No longer DDoS ourselves with remote logging

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   No longer DDoS ourselves with remote logging

## 0.12.1

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.1.unitypackage)

Breaking Changes  
-   None

New Features  
-   Unity 5 Compatibility

Bug Fixes  
-   None

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   None
>
> Bug Fixes  
> -   Unity and Adobe AIR now use a unified way of assigning their SDK
>     versions

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Supports iOS 10 push delegate
>     `application:didReceiveRemoteNotification:fetchCompletionHandler:`
>
> Bug Fixes  
> -   Enable Bitcode support

## 0.12.0

[Download](http://sdks.teakcdn.com/unity/Teak-0.12.0.unitypackage)

Breaking Changes  
-   None

New Features  
-   Remote logging
-   Remote exception tracking

Bug Fixes  
-   Fixed an absolute path issue during iOS post process when
    BuildPipeline.BuildPlayer was used to build

### Android

> Breaking Changes  
> -   None
>
> New Features  
> -   Remote logging
> -   Remote exception tracking
>
> Bug Fixes  
> -   None

### iOS

> Breaking Changes  
> -   None
>
> New Features  
> -   Remote logging
> -   Remote exception tracking
>
> Bug Fixes  
> -   None
