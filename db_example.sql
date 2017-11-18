/*
Navicat MySQL Data Transfer

Source Server         : localhost3309
Source Server Version : 50548
Source Host           : localhost:3309
Source Database       : node_example

Target Server Type    : MYSQL
Target Server Version : 50548
File Encoding         : 65001

Date: 2017-11-18 14:13:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `birth` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('13', 'ไมเคิ่ล', 'โอเว่น', '1983');
INSERT INTO `person` VALUES ('16', 'tehnn', 'jad236', '2001');
INSERT INTO `person` VALUES ('18', 'สมชาย', 'ทดสอบ', '1980');
INSERT INTO `person` VALUES ('20', 'นาย ก', 'อยู่ดี', '2016');
INSERT INTO `person` VALUES ('21', 'admin', 'jad', '1980');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', '112233');
INSERT INTO `user` VALUES ('sa', 'sa');
