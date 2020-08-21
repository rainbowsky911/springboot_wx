/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 50527
 Source Host           : localhost:3306
 Source Schema         : wxlogin

 Target Server Type    : MySQL
 Target Server Version : 50527
 File Encoding         : 65001

 Date: 21/08/2020 18:01:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `open_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `skey` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  `last_visit_time` timestamp NULL DEFAULT NULL,
  `session_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nick_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`open_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('oNmNq5H-vS8NOZIcD4_fwpFQMcz0', '6ce86c76-3b83-41e8-82e9-2eaf7bc99cd6', '2020-07-09 10:09:21', '2020-07-09 10:09:21', 'Jn7k9K1FiQaMWm57yrFe5Q==', 'Luan', 'Anhui', 'China', 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erqDRvFqo7uF2xj2cMAuicbXibo9strRWmyk9nMYbGKiaAj6nRsOnDplY3ickTeuEJID7ialsTPP3e2gXg/132', '1', '你的样子');
INSERT INTO `user` VALUES ('ozmug4pG0AgJYJIq6cSn84S7YRl4', '677f55eb-a703-4e0e-98e4-4213fca898a0', '2020-07-09 10:10:29', '2020-08-21 17:38:52', 'cbOq0aiXYi1zMg99Zq/5+Q==', 'Luan', 'Anhui', 'China', 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epWjSLGnkeemLkqsDwlwEMrH6XXaUwSCxtM7FHaUMknwgVtGSFricb6aMI9h4bjfUgErPr0lXZPGTA/132', '1', '你的样子');

SET FOREIGN_KEY_CHECKS = 1;
