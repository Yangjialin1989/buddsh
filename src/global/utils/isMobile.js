//识别移动端插件
import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile()

export default isMobile

