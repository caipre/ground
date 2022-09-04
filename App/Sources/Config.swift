//  Copyright (c) 2022 Nicholas Platt <platt.nicholas@gmail.com>
//  Permission is granted to use, copy, modify, and distribute the work.
//  Full license information available in the project LICENSE file.

import Foundation

enum Config {
  enum Keys {
    enum Plist: String {
      case ENVIRONMENT
      case SENTRY_DSN
    }
  }

  // MARK: - Application
  static let environment: String = {
    return Config.find(.ENVIRONMENT)
  }()

  // MARK: - Sentry
  enum Sentry {
    static let dsn: String = {
      return Config.find(.SENTRY_DSN)
    }()
  }

  // MARK: - Private

  private static let infoPlist: [String: Any] = {
    guard let dict = Bundle.module.infoDictionary else {
      fatalError("Info.plist file not found")
    }
    return dict
  }()

  private static func find(_ plistKey: Keys.Plist) -> String {
    guard let str = Config.infoPlist[plistKey.rawValue] as? String else {
      fatalError("\(plistKey) is not set in plist for this environment")
    }
    return str
  }
}
