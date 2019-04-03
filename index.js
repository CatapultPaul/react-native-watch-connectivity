const IOSRNWatch = require('./RNWatch.ios.build');
const AndroidRNWatch = require('./RNWatch.android');

const { Platform } = require('react-native');

if (Platform.OS === 'ios') {
    module.exports = IOSRNWatch;
} else {
    module.exports = AndroidRNWatch;
}