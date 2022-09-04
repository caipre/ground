//  Copyright (c) 2022 Nicholas Platt <platt.nicholas@gmail.com>
//  Permission is granted to use, copy, modify, and distribute the work.
//  Full license information available in the project LICENSE file.

import ProjectDescription

let base = SettingsDictionary()
  .automaticCodeSigning(devTeam: "B9YNE9L52C")
  .swiftCompilationMode(.wholemodule)
  .swiftVersion("5.6")

let infoPlist: [String: InfoPlist.Value] = [
  "CFBundleShortVersionString": "1.0",
  "CFBundleVersion": "1",
  "UIMainStoryboardFile": "",
  "UILaunchStoryboardName": "LaunchScreen",
  "UISupportedInterfaceOrientations": ["UIInterfaceOrientationPortrait"],
]

let configs: [Configuration] = [
  .debug(name: "Development", xcconfig: "xcconfig/Development.xcconfig"),
  .debug(name: "TestFlight", xcconfig: "xcconfig/TestFlight.xcconfig"),
  .release(name: "Production", xcconfig: "xcconfig/Production.xcconfig"),
]

// TODO: Read keys from xcconfig files
let configKeys = [
  "ENVIRONMENT",
  "SENTRY_DSN",
]
let configPlist: [String: InfoPlist.Value] = Dictionary(
  uniqueKeysWithValues: configKeys.map { configKey in
    let plistValue = InfoPlist.Value.string("$(\(configKey))")
    return (configKey, plistValue)
  })

let mergedPlist = infoPlist.merging(configPlist, uniquingKeysWith: { a, b in b })

let project = Project(
  name: "ground",
  packages: [
    .package(url: "https://github.com/getsentry/sentry-cocoa", from: "7.24.0")
  ],
  settings: .settings(base: base, configurations: configs),
  targets: [
    Target(
      name: "App",
      platform: .iOS,
      product: .app,
      bundleId: "co.nickp.ground",
      infoPlist: .extendingDefault(with: mergedPlist),
      sources: ["App/Sources/**"],
      resources: ["App/Resources/**"],
      dependencies: [
        .package(product: "Sentry")
      ]
    )
  ],
  additionalFiles: [
    "**/README.md",
    "xcconfig/*.xcconfig",
    "Project.swift",
  ]
)
