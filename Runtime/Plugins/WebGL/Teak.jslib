mergeInto(LibraryManager.library, {
  TeakInitWebGL: function(ptr_appId, ptr_apiKey, enableSdk5BehaviorsInt) {
    var appId = Pointer_stringify(ptr_appId);
    var apiKey = Pointer_stringify(ptr_apiKey);

    (function(){window.teak=window.teak||[];window.teak.methods=["init","on","asyncInit","identify","trackEvent","postAction","postAchievement","postHighScore","canMakeFeedPost","popupFeedPost","reportNotificationClick","reportFeedClick","sendRequest","acceptRequest","loadInboxData", "claimReward", "setIsUnity", "scheduleNotification", "cancelNotification", "cancelAllNotifications", "setStringAttribute", "setNumberAttribute", "scheduleLongDistanceNotification", "reportUnityCanvasPurchase", "deleteEmail", "setChannelState","setCategoryState", "scheduleNotificationWithPersonalization"];window.teak.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);window.teak.push(t);return window.teak}};for(var e=0;e<window.teak.methods.length;e++){var t=window.teak.methods[e];if(!window.teak[t]){window.teak[t]=window.teak.factory(t)}}})()

    window.teak.init(appId, apiKey, false, null, enableSdk5BehaviorsInt !== 0);
    window.teak.setIsUnity();
    window.teak.on("settingsLoaded", function() {
      console.log("settingsLoaded");
      var channelCategories = [];
      Object.keys(window.teak.availableCategories).forEach(function (key) {
        channelCategories.push({
          id: key,
          name: window.teak.availableCategories[key]["name"],
          description: window.teak.availableCategories[key]["description"],
        });
      });

      var configurationData = {
        channelCategories: channelCategories
      };

      SendMessage("TeakGameObject", "InConfigurationData", JSON.stringify(configurationData));
    });

    window.teakUnity = { notifLaunchIds: [], linkLaunchIds: [] };

    var doTeakInit = function() {
      (function(){var n=document.createElement("script");n.type="text/javascript";n.async=true;n.src="//sdks.teakcdn.com/teak.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)})()
    };

    // Load jQuery, if it's not already loaded
    if (window.jQuery === undefined) {
      var s = document.createElement('script');
      s.src = "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js";
      s.onload = doTeakInit;
      document.head.appendChild(s);
    } else {
      doTeakInit();
    }
  },
  TeakIdentifyUser: function(ptr_userId, ptr_configJson) {
    var userId = Pointer_stringify(ptr_userId);
    var configJson = Pointer_stringify(ptr_configJson);
    var config = JSON.parse(configJson);
    var callback = function() {
      // Teak attribution params
      var attribution = {
        teakScheduleName: window.teak.queryParameters.teak_schedule_name,
        teakScheduleId: window.teak.queryParameters.teak_schedule_id,
        teakCreativeName: window.teak.queryParameters.teak_creative_name || window.teak.queryParameters.teak_rewardlink_name,
        teakCreativeId: window.teak.queryParameters.teak_creative_id || window.teak.queryParameters.teak_rewardlink_id,
        teakChannelName: window.teak.queryParameters.teak_channel_name,
        teakRewardId: window.teak.queryParameters.teak_reward_id,
        teakDeepLink: window.teak.queryParameters.teak_deep_link,
        teakOptOutCategory: window.teak.queryParameters.teak_opt_out_category,
        launch_link: window.location.href
      };

      // Notifications have teak_notif_id, reward links have teak_rewardlink_id
      if (window.teak.queryParameters.teak_notif_id) {
        if(window.teakUnity.notifLaunchIds.indexOf(window.teak.queryParameters.teak_notif_id) === -1) {
          window.teakUnity.notifLaunchIds.push(window.teak.queryParameters.teak_notify_id);
          SendMessage("TeakGameObject", "NotificationLaunch", JSON.stringify(attribution));
        }
      } else if (window.teak.queryParameters.teak_rewardlink_id) {
        if(window.teakUnity.linkLaunchIds.indexOf(window.teak.queryParameters.teak_rewardlink_id) === -1) {
          window.teakUnity.linkLaunchIds.push(window.teak.queryParameters.teak_rewardlink_id);
          SendMessage("TeakGameObject", "LaunchedFromLink", JSON.stringify(attribution));
        }
      }

      // Always send launch summary
      SendMessage("TeakGameObject", "PostLaunchSummary", JSON.stringify(attribution));

      // Always send UserDataEvent
      SendMessage("TeakGameObject", "UserDataEvent", JSON.stringify({
        additionalData: window.teak.additionalData,
        emailStatus: window.teak.optOutStates.email,
        pushStatus: window.teak.optOutStates.desktop_push,
        smsStatus: window.teak.optOutStates.sms,
        pushRegistration: {}
      }));
    }

    window.teak.identify(userId, null, callback, config);

    window.teak.claimReward(function(reply) {
      // The commented-out functionality is handled by the JS SDK.
      // reply.reward = JSON.parse(reply.reward);
      // reply.teakScheduleName = window.teak.queryParameters.teak_schedule_name;
      // reply.teakCreativeName = window.teak.queryParameters.teak_creative_name;
      // reply.teakScheduleId = window.teak.queryParameters.teak_schedule_id;
      // reply.teakCreativeId = window.teak.queryParameters.teak_creative_id;

      reply.teakRewardId = window.teak.queryParameters.teak_reward_id;
      SendMessage("TeakGameObject", "RewardClaimAttempt", JSON.stringify(reply));
    });
  },
  TeakTrackEvent: function(ptr_actionId, ptr_objectTypeId, ptr_objectInstanceId) {
    var actionId = Pointer_stringify(ptr_actionId).trim();
    var objectTypeId = Pointer_stringify(ptr_objectTypeId).trim();
    var objectInstanceId = Pointer_stringify(ptr_objectInstanceId).trim();

    objectTypeId = objectTypeId.length === 0 ? undefined : objectTypeId;
    objectInstanceId = objectInstanceId.length === 0 ? undefined : objectInstanceId;

    window.teak.trackEvent(actionId, objectTypeId, objectInstanceId);
  },
  TeakIncrementEvent: function(ptr_actionId, ptr_objectTypeId, ptr_objectInstanceId, count) {
    var actionId = Pointer_stringify(ptr_actionId).trim();
    var objectTypeId = Pointer_stringify(ptr_objectTypeId).trim();
    var objectInstanceId = Pointer_stringify(ptr_objectInstanceId).trim();

    objectTypeId = objectTypeId.length === 0 ? undefined : objectTypeId;
    objectInstanceId = objectInstanceId.length === 0 ? undefined : objectInstanceId;

    window.teak.incrementEvent(actionId, objectTypeId, objectInstanceId, count);
  },
  TeakDeepLinkTableInternal: {},
  TeakUnityRegisterRoute__deps: ['TeakDeepLinkTableInternal'],
  TeakUnityRegisterRoute: function(ptr_route, ptr_name, ptr_description) {
    var route = Pointer_stringify(ptr_route);
    var name = Pointer_stringify(ptr_name);
    var description = Pointer_stringify(ptr_description);

    // Escape some characters
    var escapedRoute = route.replace(/[\?\%\\\/\*]/g, function(match) {
      return '\\' + match;
    });

    // Go through and replace ':foo' with a capture group, and enqueue that capture name
    var captureGroupNames = [];
    var routeWithCaptures = escapedRoute.replace(/((:\w+)|\*)/g, function(match) {
      captureGroupNames.push(match.substring(1));
      return '([^\\/?#]+)';
    });

    // Store in the table
    _TeakDeepLinkTableInternal[routeWithCaptures] = {
      route: route,
      captureGroupNames: captureGroupNames,
      name: name,
      description: description
    };
  },
  TeakUnityReadyForDeepLinks__deps: ['TeakHandleDeepLink_Internal'],
  TeakUnityReadyForDeepLinks: function() {
    window.teak.on('udidAvailable', function() {
      if (window.teak.queryParameters.teak_deep_link) {
        _TeakHandleDeepLink_Internal(window.teak.queryParameters.teak_deep_link);
      }
    });
  },
  TeakSetBadgeCount: function(count) {

  },
  TeakHandleDeepLinkPath__deps: ['TeakHandleDeepLink_Internal'],
  TeakHandleDeepLinkPath: function(ptr_url) {
    var url = Pointer_stringify(ptr_url);
    return _TeakHandleDeepLink_Internal(url);
  },
  TeakHandleDeepLink_Internal__deps: ['TeakDeepLinkTableInternal'],
  TeakHandleDeepLink_Internal: function(url) {
    // Iterate deep link table, keys are RegExp
    for (var key in _TeakDeepLinkTableInternal) {
      match = new RegExp(key).exec(url);
      if (match != null) {
        var deepLinkEntry = _TeakDeepLinkTableInternal[key];
        var jsonObject = {
          route: deepLinkEntry.route,
          parameters: {
            __incoming_url: url
          }
        };

        // Walk through capture groups and collect name/value pairs
        for (var i = 0; i < deepLinkEntry.captureGroupNames.length; i++) {
          jsonObject.parameters[deepLinkEntry.captureGroupNames[i]] = match[i + 1];
        }
        SendMessage("TeakGameObject", "DeepLink", JSON.stringify(jsonObject));
        return true;
      }
    }

    return false;
  },
  TeakNotificationSchedule: function(ptr_callbackId, ptr_creativeId, ptr_defaultMessage, delayInSeconds) {
    var creativeId = Pointer_stringify(ptr_creativeId);
    var defaultMessage = Pointer_stringify(ptr_defaultMessage);
    var callbackId = Pointer_stringify(ptr_callbackId);

    window.teak.scheduleNotification(creativeId, defaultMessage, delayInSeconds, function(reply) {
      reply.creativeId = creativeId;
      reply.callbackId = callbackId;
      var replyAsString = JSON.stringify(reply);
      SendMessage("TeakGameObject", "NotificationCallback", replyAsString);
    });
  },
  TeakNotificationScheduleWithPersonalization: function(ptr_callbackId, ptr_creativeId, delayInSeconds, ptr_personalizationData) {
    var creativeId = Pointer_stringify(ptr_creativeId);
    var personalizationData = null;
    try {
      ptr_personalizationData === null ? null : JSON.parse(Pointer_stringify(ptr_personalizationData));
    } catch(ignored) {}
    var callbackId = Pointer_stringify(ptr_callbackId);

    window.teak.scheduleNotificationWithPersonalization(creativeId, delayInSeconds, personalizationData, function(reply) {
      reply._callbackId = callbackId;
      var replyAsString = JSON.stringify(reply);
      SendMessage("TeakGameObject", "TeakOperationCallback", replyAsString);
    });
  },
  TeakNotificationScheduleLongDistance: function(ptr_callbackId, ptr_creativeId, ptr_jsonUserIds, delayInSeconds) {
    var creativeId = Pointer_stringify(ptr_creativeId);
    var callbackId = Pointer_stringify(ptr_callbackId);
    var userIds = JSON.parse(Pointer_stringify(ptr_jsonUserIds));

    window.teak.scheduleLongDistanceNotification(creativeId, delayInSeconds, userIds, function(reply) {
      reply.creativeId = creativeId;
      reply.callbackId = callbackId;
      var replyAsString = JSON.stringify(reply);
      SendMessage("TeakGameObject", "NotificationCallback", replyAsString);
    });
  },
  TeakNotificationCancel: function(ptr_callbackId, ptr_creativeId) {
    var creativeId = Pointer_stringify(ptr_creativeId);
    var callbackId = Pointer_stringify(ptr_callbackId);

    window.teak.cancelNotification(creativeId, function(reply) {
      reply.callbackId = callbackId;
      var replyAsString = JSON.stringify(reply);
      SendMessage("TeakGameObject", "NotificationCallback", replyAsString);
    });
  },
  TeakNotificationCancelAll: function(ptr_callbackId) {
    var callbackId = Pointer_stringify(ptr_callbackId);

    window.teak.cancelAllNotifications(function(reply) {
      reply.callbackId = callbackId;
      var replyAsString = JSON.stringify(reply);
      SendMessage("TeakGameObject", "NotificationCallback", replyAsString);
    });
  },
  TeakSetNumericAttribute: function(ptr_key, value) {
    var key = Pointer_stringify(ptr_key);
    window.teak.setNumberAttribute(key, value);
  },
  TeakSetStringAttribute: function(ptr_key, ptr_value) {
    var key = Pointer_stringify(ptr_key);
    var value = Pointer_stringify(ptr_value);
    window.teak.setStringAttribute(key, value);
  },
  TeakUnityReportCanvasPurchase: function(ptr_payload) {
    var payload = Pointer_stringify(ptr_payload);
    window.teak.reportUnityCanvasPurchase(payload);
  },
  TeakDeleteEmail: function() {
    window.teak.deleteEmail();
  },
  TeakSetStateForChannel_CallbackId: function(ptr_state, ptr_channel, ptr_callbackId) {
    var state = Pointer_stringify(ptr_state);
    var channel = Pointer_stringify(ptr_channel);
    var callbackId = Pointer_stringify(ptr_callbackId);

    if (channel === 'platform_push') {
      channel = 'desktop_push';
    }

    window.teak.setChannelState(channel, state, function(reply) {
      reply._callbackId = callbackId;
      var replyAsString = JSON.stringify(reply);
      SendMessage("TeakGameObject", "TeakOperationCallback", replyAsString);
    });
  },
  TeakSetCategoryForChannel_CallbackId: function(ptr_state, ptr_channel, ptr_category, ptr_callbackId) {
    var state = Pointer_stringify(ptr_state);
    var channel = Pointer_stringify(ptr_channel);
    var category = Pointer_stringify(ptr_category);
    var callbackId = Pointer_stringify(ptr_callbackId);

    if (channel === 'platform_push') {
      channel = 'desktop_push';
    }

    window.teak.setCategoryState(channel, category, state, function(reply) {
      reply._callbackId = callbackId;
      var replyAsString = JSON.stringify(reply);
      SendMessage("TeakGameObject", "TeakOperationCallback", replyAsString);
    });
  },
  TeakNotificationGetCategoriesJson: function() {
    var ret = [];
    Object.keys(window.teak.availableCategories).forEach(function (key) {
      ret.push({
        id: key,
        name: window.teak.availableCategories[key]["name"],
        description: window.teak.availableCategories[key]["description"],
      });
    });

    var retAsJson = JSON.stringify(ret);
    var bufferSize = lengthBytesUTF8(retAsJson) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(retAsJson, buffer, bufferSize);
    return buffer;
  }
});
