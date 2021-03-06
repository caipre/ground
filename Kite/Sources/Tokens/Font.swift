//  Copyright (C) 2020 Nick Platt <platt.nicholas@gmail.com>
//
//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation; either version 2 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.

import Foundation
import UIKit

extension Kite {
  public static var font: String { "Oxygen" }

  public static func font(size: CGFloat) -> UIFont {
    .systemFont(ofSize: size)
    // return UIFont(name: Kite.font, size: size)!
  }

  public static func font(style: UIFont.TextStyle) -> UIFont {
    // todo: move to application startup / framework load
    // hattip https://stackoverflow.com/a/63450699
    Bundle.module.urls(forResourcesWithExtension: "ttf", subdirectory: nil)?
      .forEach { url in CTFontManagerRegisterFontsForURL(url as CFURL, .process, nil) }

    let size = UIFont.preferredFont(forTextStyle: style).pointSize
    return UIFont(name: Kite.font, size: size)!
  }
}
