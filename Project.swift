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

let project = Project(
  name: "ground",
  packages: [],
  settings: .settings(base: base),
  targets: [
    Target(
      name: "App",
      platform: .iOS,
      product: .app,
      bundleId: "co.nickp.ground",
      infoPlist: .extendingDefault(with: infoPlist),
      sources: ["App/Sources/**"],
      resources: ["App/Resources/**"]
    )
  ],
  additionalFiles: [
    "**/README.md",
    "Project.swift",
  ]
)
