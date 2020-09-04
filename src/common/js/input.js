const judgeDeviceType = function() {
	const ua = window.navigator.userAgent.toLocaleLowerCase();
	const isIOS = /iphone|ipad|ipod/.test(ua);
	const isAndroid = /android/.test(ua);
	return {
		isIOS: isIOS,
		isAndroid: isAndroid
	}
}();
// 监听输入框的软键盘弹起和收起事件
export function listenKeybord($input) {
  if (judgeDeviceType.isIOS) {
    // IOS 键盘弹起：IOS 和 Android 输入框获取焦点键盘弹起
    $input.addEventListener('focus', function () {
      console.log('IOS 键盘弹起啦！');
      // IOS 键盘弹起后操作
    }, false)

    // IOS 键盘收起：IOS 点击输入框以外区域或点击收起按钮，输入框都会失去焦点，键盘会收起，
    $input.addEventListener('blur', () => {
      console.log('IOS 键盘收起啦！');
      // IOS 键盘收起后操作
    })
  }

  // Andriod 键盘收起：Andriod 键盘弹起或收起页面高度会发生变化，以此为依据获知键盘收起
  if (judgeDeviceType.isAndroid) {
    var originHeight = document.documentElement.clientHeight || document.body.clientHeight;

    window.addEventListener('resize', function () {
      var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (originHeight < resizeHeight) {
        alert('Android 键盘收起啦！');
        // Android 键盘收起后操作
      } else {
        alert('Android 键盘弹起啦！');
        // Android 键盘弹起后操作
      }

      originHeight = resizeHeight;
    }, false)
  }
}
