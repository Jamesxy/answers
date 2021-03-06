INSERT INTO `[#DB_PREFIX#]system_setting` (`varname`, `value`) VALUES ('index_actions_day_limit', 's:2:"30";');
INSERT INTO `[#DB_PREFIX#]system_setting` (`varname`, `value`) VALUES ('request_route', 's:225:"/home/explore/===/explore/
/home/explore/guest===/guest
/home/explore/category-(:num)===/category/(:num)
/people/list/===/users/
/account/login/===/login/
/account/logout/===/logout/
/account/setting/(:any)/===/setting/(:any)/";');
INSERT INTO `[#DB_PREFIX#]system_setting` (`varname`, `value`) VALUES ('upload_size_limit','s:3:"512";');
INSERT INTO `[#DB_PREFIX#]system_setting` (`varname`, `value`) VALUES ('upload_avatar_size_limit','s:3:"512";');
INSERT INTO `[#DB_PREFIX#]system_setting` (`varname`, `value`) VALUES ('topic_title_limit','s:2:"12";');
INSERT INTO `[#DB_PREFIX#]system_setting` (`varname`, `value`) VALUES ('url_rewrite_enable','s:1:"N";');

CREATE TABLE `[#DB_PREFIX#]redirect` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `item_id` int(11) DEFAULT '0',
  `target_id` int(11) DEFAULT '0',
  `time` int(10) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_id` (`item_id`),
  KEY `uid` (`uid`)
) ENGINE=[#DB_ENGINE#] DEFAULT CHARSET=utf8;

ALTER TABLE `[#DB_PREFIX#]question` ADD `has_attach` TINYINT (1) NULL DEFAULT '0' COMMENT '是否存在附件';
ALTER TABLE `[#DB_PREFIX#]answer` ADD `has_attach` TINYINT (1) NULL DEFAULT '0' COMMENT '是否存在附件';

ALTER TABLE `[#DB_PREFIX#]users` ADD `weibo_visit` TINYINT(1) NULL DEFAULT '1' COMMENT '微博允许访问' AFTER `reputation_update_time`;

ALTER TABLE `[#DB_PREFIX#]question` ADD `unverified_modify` TEXT;
