# @redux-saga/core

## 1.1.4
### Patch Changes

- 5ae6578: Require `CpsCallback` in all functions passed to the `cps` effect creator. This fixes a regression caused by TS 4.0 changing the behavior around spreading `never` into tuple types
- 5ae6578: Added warnings when using `take(channelOrPattern)` incorrectly with more than one parameter. It helps to surface problem with `take(ACTION_A, ACTION_B)` being used instead of `take([ACTION_A, ACTION_B])`.
