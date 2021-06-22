## react-native-size-zoom
react native app 字体或宽高、间距等比缩放
```js 
npm install react-native-size-zoom -S
```
```javascript
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  statusBarHeight,
  deviceHeight,
  deviceWidth,
  fontScale,
  pixelRatio,
  scaleSize,
  scaleFont,
} from 'react-native-size-zoom';

interface Props {}
interface State {}

export default class Test extends React.Component<Props, State> {
  public static defaultProps = {};
  constructor(props: Props) {
    super(props);
    this.state = {
      // 获取设备状态栏高度
      barHeight: statusBarHeight,
      // 获取设备高度
      dh: deviceHeight,
      // 获取设备宽度
      dw: deviceWidth,
      // 字体大小缩放比例
      fs: fontScale,
      // 当前设备的像素密度
      pr: pixelRatio,
    };
  }
  render(): React.ReactNode {
    return (
      <View style={[styles.content]}>
        <Text style={[styles.font]}>字体缩放</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: scaleSize(20), // scaleSize
  },
  font: {
    color: 'white',
    fontSize: scaleFont(16), // scaleFont
  }
});
```
