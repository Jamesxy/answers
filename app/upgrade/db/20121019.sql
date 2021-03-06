UPDATE `[#DB_PREFIX#]topic` SET `url_token` = '';
UPDATE `[#DB_PREFIX#]users` SET `url_token` = '';
UPDATE `[#DB_PREFIX#]users` SET `url_token_update` = 0;

ALTER TABLE `[#DB_PREFIX#]users` ADD `verified` TINYINT( 1 ) NULL DEFAULT '0';
ALTER TABLE `[#DB_PREFIX#]question` ADD `thanks_count` INT( 10 ) NULL DEFAULT '0';
INSERT INTO `[#DB_PREFIX#]system_setting` (`varname`, `value`) VALUES ('related_question_keyword_count', 's:1:"3";');

ALTER TABLE `[#DB_PREFIX#]question` ADD INDEX (  `thanks_count` );
ALTER TABLE `[#DB_PREFIX#]users` ADD INDEX (  `verified` );

CREATE TABLE `[#DB_PREFIX#]users_search` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `search_data` text CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=[#DB_ENGINE#] DEFAULT CHARSET=utf8;

CREATE TABLE `[#DB_PREFIX#]users_forbidden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `admin_uid` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `add_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=[#DB_ENGINE#] DEFAULT CHARSET=utf8;

CREATE TABLE `[#DB_PREFIX#]question_thanks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT '0',
  `question_id` int(11) DEFAULT '0',
  `user_name` varchar(255) DEFAULT NULL,
  `time` int(10) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`)
) ENGINE=[#DB_ENGINE#] DEFAULT CHARSET=utf8;

ALTER TABLE `[#DB_PREFIX#]question` ENGINE = MYISAM;
ALTER TABLE `[#DB_PREFIX#]users` ENGINE = MYISAM;
ALTER TABLE `[#DB_PREFIX#]topic` ENGINE = MYISAM;