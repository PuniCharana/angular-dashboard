import { version, name } from '../../../package.json';

export class AppConstants {
  static readonly APP_NAME = name;
  static readonly APP_VERSION = version;
  static readonly API_URL = 'http://api.wittyvows.appstage.co/api/';
  static readonly AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
  static readonly PHONE_PATTERN = /^[789]{1}[0-9]{9}$/;
  static readonly OTP_PATTERN = /^[0-9]{4}$/;
  static readonly EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  static readonly DATE_REGEX = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
}
