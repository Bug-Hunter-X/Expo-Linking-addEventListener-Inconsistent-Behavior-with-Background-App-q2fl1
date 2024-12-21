# Expo Linking.addEventListener Background Issue

This repository demonstrates a bug in Expo's `Linking.addEventListener` where it fails to consistently trigger when the application is in the background. This causes the application to miss deep links or other events triggered through the linking API.

## Bug Description

The `Linking.addEventListener` is expected to trigger whenever a deep link is opened, even if the app is in the background. However, in this scenario, it intermittently fails to fire the event listener. This leads to unexpected behavior and loss of functionality.

## Reproduction Steps

1. Clone this repository.
2. Run the app on an emulator or device.
3. Background the app.
4. Open a deep link.
5. Observe that the event listener in `bug.js` might not always fire.

## Solution

The `bugSolution.js` file contains a workaround that uses the `Linking.getInitialURL` method to check for a deep link on app startup and handle it appropriately. While this addresses the missing event problem, it doesn't directly address why `addEventListener` sometimes fails.  A more robust long-term solution is awaited from Expo.