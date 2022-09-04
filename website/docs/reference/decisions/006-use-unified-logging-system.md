# Use unified logging system

## Prologue

For application logging, we will use the [unified logging system]
provided by Apple.

## Discussion

We need to select an initial package to use for logging. Ideally we are
able to write structured log messages (as opposed to line-based logging)
at different log levels (debug and info,
per [this article](https://dave.cheney.net/2015/11/05/lets-talk-about-logging))
. The logging system (or library) must not noticeably impact application
performance. The primary motivation for logging is observability and
debugging; solutions that improve these concerns are preferred.

## Decision

* Use the unified logging system provided by Apple
* Document use of log levels in the Logging strategy document

## Consequences

* The `Logger` struct requires iOS 14.0+.
  Per https://developer.apple.com/support/app-store/, 96% of active
  devices meet this requirement.

[unified logging system]: https://developer.apple.com/documentation/os/logging/generating_log_messages_from_your_code
