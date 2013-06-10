ALTER TABLE `[#DB_PREFIX#]users` ADD  `weixin_id` VARCHAR( 32 ) NULL, ADD INDEX (  `weixin_id` );

CREATE TABLE `[#DB_PREFIX#]weixin_valid` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `code` varchar(16) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `code` (`code`)
) ENGINE=[#DB_ENGINE#]  DEFAULT CHARSET=utf8;

INSERT INTO `[#DB_PREFIX#]system_setting` (`varname`, `value`) VALUES ('ucenter_charset', 's:5:"UTF-8";');