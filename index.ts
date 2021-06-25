/**
 * 屏幕工具类
 * ui设计基准, iphone 6
 * width: 750
 * height: 1334
 */
/**
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6
 *
 * */
import {Dimensions, PixelRatio, StatusBar} from 'react-native';

// 获取手机状态栏高度
const statusBarHeight = StatusBar.currentHeight || 0;
// 获取设备高度
const deviceHeight = Dimensions.get('window').height;
// 获取设备宽度
const deviceWidth = Dimensions.get('window').width;

// 字体大小缩放比例
const fontScale = PixelRatio.getFontScale();
// 当前设备的像素密度
const pixelRatio = PixelRatio.get();
// iphone6的像素密度
const defaultPixel = 2;

const w = 750 / defaultPixel;
const h = 1334 / defaultPixel;

// 获取缩放比例
const scale = Math.min(deviceHeight / h, deviceWidth / w);
// 等比缩放宽、高、内外边距
const scaleSize = size => Math.round(size * scale + 0.5) / defaultPixel;
// 等比缩放字体
const scaleFont = size => Math.round((size * scale + 0.5) * pixelRatio / fontScale) / defaultPixel;

export {
  statusBarHeight,
  deviceHeight,
  deviceWidth,
  fontScale,
  pixelRatio,
  scaleSize,
  scaleFont,
};
