import Sentry
import SwiftUI

@main
struct main: App {
  var body: some Scene {
    WindowGroup {
    }
  }

  init() {
    print("App#init: starting in \(Config.environment) environment")
    // https://docs.sentry.io/platforms/apple/configuration/options/
    SentrySDK.start { options in
      options.debug = true
      options.dsn = Config.Sentry.dsn
      options.environment = Config.environment
      options.tracesSampleRate = 1.0
    }
  }
}
