$(document).ready(function() {
  "user strict";

  $(".btn-open").on("click", function() {
    $(".js-control").toggleClass("open");
  });

  $(".button-toggle-wrap .toggler").click(function() {
    $("img").toggleClass("dim-image");
    var background = $(".tp-bgimg ");
    var clipText = $(".clip-text");
    if (background.length > 0) {
      $(".tp-bgimg ").toggleClass("dim-image");
    }
    if (clipText.length > 0) {
      clipText.toggleClass("dim-image");
    }
  });

  function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  const hex2rgb = hex => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgb(${r},${g},${b})`;
  };

  var threshold = 0.5;

  function caclDynamicColor(rgbColorArray) {
    var r = rgbColorArray[0] * 0.299;
    var g = rgbColorArray[1] * 0.587;
    var b = rgbColorArray[2] * 0.114;
    var sum = r + g + b;

    var perceivedLightness = sum / 255;
    var dynamicColor = perceivedLightness - threshold > 0 ? "0%" : "100%";
    return dynamicColor;
  }

  const colorsPattern = $(".js-color-pattern");
  for (let i = 0; i < colorsPattern.length; i++) {
    let color = $(colorsPattern[i]).data("color");
    $(colorsPattern[i]).css("background-color", color);
    // $(colorsPattern[i]).on("click", function() {
    //   color = color.match(/[A-Za-z0-9]{2}/g);

    //   const rgbColorArray = color.map(function(v) {
    //     return parseInt(v, 16);
    //   });

    //   const hslColorArray = rgb2hsl(rgbColorArray);

    //   const $html = document.documentElement.style;

    //   const dynamicColor =
    //     hslColorArray[2] > 80 ||
    //     (hslColorArray[0] > 54 && hslColorArray[0] < 186)
    //       ? "0%"
    //       : "100%";

    //   $html.setProperty("--hue-color1", hslColorArray[0] + "deg");

    //   $html.setProperty("--saturation-color1", hslColorArray[1] + "%");

    //   $html.setProperty("--lightness-color1", hslColorArray[2] + "%");

    //   $html.setProperty(
    //     "--lightness-darker-color1",
    //     hslColorArray[2] - 5 + "%"
    //   );

    //   $html.setProperty(
    //     "--lightness-lighten-color1",
    //     hslColorArray[2] + 5 + "%"
    //   );

    //   $html.setProperty("--lightness-dynamicColor", dynamicColor);
    // });
  }

  $(".js-color-pattern").on("click", function() {
    let color = $(this).data("color");
    color = color.match(/[A-Za-z0-9]{2}/g);
    $('meta[name=theme-color]').attr('content', $(this).data("color"));

    const rgbColorArray = color.map(function(v) {
      return parseInt(v, 16);
    });

    const hslColorArray = rgb2hsl(rgbColorArray);

    const $html = document.documentElement.style;

    var dynamicColor = caclDynamicColor(rgbColorArray);

    // const dynamicColor =
    //   hslColorArray[2] > 80 || (hslColorArray[0] > 54 && hslColorArray[0] < 186)
    //     ? '0%'
    //     : '100%';

    $html.setProperty("--hue-color1", hslColorArray[0]);

    $html.setProperty("--saturation-color1", hslColorArray[1] + "%");

    $html.setProperty("--lightness-color1", hslColorArray[2] + "%");

    $html.setProperty("--hue-color3", hslColorArray[0] + 5);

    $html.setProperty("--saturation-color3", hslColorArray[1] + "%");

    $html.setProperty("--lightness-color3", hslColorArray[2] - 17 + "%");

    $html.setProperty("--lightness-darker-color1", hslColorArray[2] - 5 + "%");

    $html.setProperty("--lightness-lighten-color1", hslColorArray[2] + 5 + "%");

    $html.setProperty("--lightness-dynamicColor", dynamicColor);

    if (dynamicColor === "0%") {
      $("#js-dynamic-color").text("Dynamic color: #000000");
    } else {
      $("#js-dynamic-color").text("Dynamic color: #ffffff");
    }

    $("#js-main-color").text("Main Color: " + $(this).data("color"));

    $("#js-main-color-rgb").text("Main Color RGB: " + rgbColorArray);

    $("#js-main-color-hover").text(
      "Main Color Hover: " +
        hslToHex(hslColorArray[0], hslColorArray[1], hslColorArray[2] - 5)
    );

    $("#js-sub-color").text(
      "Sub Color: " +
        hslToHex(hslColorArray[0] + 5, hslColorArray[1], hslColorArray[2] - 17)
    );

    $("#js-sub-color-rgb").text(
      "Sub Color RGB: " +
        hex2rgb(
          hslToHex(
            hslColorArray[0] + 5,
            hslColorArray[1],
            hslColorArray[2] - 17
          )
        )
    );
  });

  function rgb2hsl(rgbArr) {
    var r1 = rgbArr[0] / 255;
    var g1 = rgbArr[1] / 255;
    var b1 = rgbArr[2] / 255;

    var maxColor = Math.max(r1, g1, b1);
    var minColor = Math.min(r1, g1, b1);
    //Calculate L:
    var L = (maxColor + minColor) / 2;
    var S = 0;
    var H = 0;
    if (maxColor != minColor) {
      //Calculate S:
      if (L < 0.5) {
        S = (maxColor - minColor) / (maxColor + minColor);
      } else {
        S = (maxColor - minColor) / (2.0 - maxColor - minColor);
      }
      //Calculate H:
      if (r1 == maxColor) {
        H = (g1 - b1) / (maxColor - minColor);
      } else if (g1 == maxColor) {
        H = 2.0 + (b1 - r1) / (maxColor - minColor);
      } else {
        H = 4.0 + (r1 - g1) / (maxColor - minColor);
      }
    }

    L = L * 100;
    S = S * 100;
    H = H * 60;
    if (H < 0) {
      H += 360;
    }
    var result = [H, S, L];
    return result;
  }

  $("#js-color-picker").spectrum({
    flat: true,
    showInput: true,
    // showAlpha: true,
    showInitial: true,
    preferredFormat: "hex",
    move: function(color) {
      var hslColorArray = color.toHsl();
      var rgbColorArray = color.toRgb();
      const $html = document.documentElement.style;

      var rgbArrayFormat = [rgbColorArray.r, rgbColorArray.g, rgbColorArray.b];

      var dynamicColor = caclDynamicColor(rgbArrayFormat);

      // const dynamicColor =
      //   hslColorArray.l * 100 > 80 ||
      //   (hslColorArray.h > 54 && hslColorArray.h < 186)
      //     ? '0%'
      //     : '100%';

      $html.setProperty("--hue-color1", hslColorArray.h);

      $html.setProperty("--saturation-color1", hslColorArray.s * 100 + "%");

      $html.setProperty("--lightness-color1", hslColorArray.l * 100 + "%");

      $html.setProperty("--hue-color3", hslColorArray.h + 5);

      $html.setProperty("--saturation-color3", hslColorArray.s * 100 + "%");

      $html.setProperty("--lightness-color3", hslColorArray.l * 100 - 17 + "%");

      $html.setProperty(
        "--lightness-darker-color1",
        hslColorArray.l * 100 - 5 + "%"
      );

      $html.setProperty(
        "--lightness-lighten-color1",
        hslColorArray.l * 100 + 5 + "%"
      );

      $html.setProperty("--lightness-dynamicColor", dynamicColor);

      if (dynamicColor === "0%") {
        $("#js-dynamic-color").text("Dynamic color: #000000");
      } else {
        $("#js-dynamic-color").text("Dynamic color: #ffffff");
      }

      $("#js-main-color").text("Main Color: #" + color.toHex());

      $("#js-main-color-rgb").text(
        "Main Color RGB: " +
          "(" +
          rgbColorArray.r +
          ", " +
          rgbColorArray.g +
          ", " +
          rgbColorArray.b +
          ")"
      );

      $("#js-main-color-hover").text(
        "Main Color Hover: " +
          hslToHex(
            hslColorArray.h,
            hslColorArray.s * 100,
            hslColorArray.l * 100 - 5
          )
      );

      $("#js-sub-color").text(
        "Sub Color: " +
          hslToHex(
            hslColorArray.h + 5,
            hslColorArray.s * 100,
            hslColorArray.l * 100 - 17
          )
      );

      var hexSubColor = hslToHex(
        hslColorArray.h + 5,
        hslColorArray.s * 100,
        hslColorArray.l * 100 - 17
      );

      $("#js-sub-color-rgb").text("Sub Color RGB: " + hex2rgb(hexSubColor));
      $('meta[name=theme-color]').attr('content', `#${color.toHex()}`);
      // console.log(
      //   hslToRgb(
      //     (hslColorArray.h+5)/100,
      //     hslColorArray.s/100,
      //     (hslColorArray.l- 17)/100
      //   )
      // );
    }
  });
});

// $('.js-change-color').on('change', function() {
//   let { value } = this;
//   value = value.match(/[A-Za-z0-9]{2}/g);

//   const rgbColorArray = value.map(function(v) {
//     return parseInt(v, 16);
//   });

//   const hslColorArray = rgb2hsl(rgbColorArray);

//   const $html = document.documentElement.style;

//   const dynamicColor =
//     hslColorArray[2] > 80 || (hslColorArray[0] > 54 && hslColorArray[0] < 186)
//       ? '0%'
//       : '100%';

//   $html.setProperty('--hue-color1', hslColorArray[0]);

//   $html.setProperty('--saturation-color1', hslColorArray[1] + '%');

//   $html.setProperty('--lightness-color1', hslColorArray[2] + '%');

//   $html.setProperty('--hue-color3', hslColorArray[0] + 5);

//   $html.setProperty('--saturation-color3', hslColorArray[1] + '%');

//   $html.setProperty('--lightness-color3', hslColorArray[2] - 17 + '%');

//   $html.setProperty('--lightness-darker-color1', hslColorArray[2] - 5 + '%');

//   $html.setProperty('--lightness-lighten-color1', hslColorArray[2] + 5 + '%');

//   $html.setProperty('--lightness-dynamicColor', dynamicColor);
// });

// change main color, secondary color
// color pattern
// dim image greyscale
// fixed header - small, mini
// boxed
