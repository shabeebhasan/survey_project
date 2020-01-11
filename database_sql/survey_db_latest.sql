-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2020 at 07:44 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survey_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_flow_question`
--

CREATE TABLE `activity_flow_question` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activity_flow_question`
--

INSERT INTO `activity_flow_question` (`id`, `type`, `text`) VALUES
(1, 'MAA', 'I performed automatically, without having to think about it.'),
(2, 'MAA', 'Things just seemed to happen automatically.'),
(3, 'MAA', 'I did things spontaneously without having to think.'),
(4, 'CG', 'I had a strong sense of what I wanted to accomplish.'),
(5, 'CG', 'I knew what I want to achieve.'),
(6, 'CG', 'My goals were clearly defined.'),
(7, 'CO', 'My attention was focused entirely on what I was doing.'),
(8, 'CO', 'It was no effort to keep my mind on what was happening.'),
(9, 'CO', 'I had total concentration.'),
(10, 'CO', 'I had no difficulty concentrating.'),
(11, 'UF', 'It was really clear to me how my performance was going.'),
(12, 'UF', 'I had a good idea while I was performing about how well I was doing.'),
(13, 'CS', 'I was challenged, but I believe my skills will allow me to meet that challenge.'),
(14, 'CS', 'The challenge and my skills were at an equally high level.'),
(15, 'CS', 'I felt just the right amount of challenge.'),
(16, 'TT', 'Time seemed to alter (either slows down or speeds up).'),
(17, 'TT', 'The way time passed seemed to be different from normal.'),
(18, 'TT', 'I lost my normal awareness of\r\ntime.'),
(19, 'CN', 'I felt as though I had everything under control.'),
(20, 'CN', 'I felt that I had everything under control.'),
(21, 'SC', 'I was not concerned with how others\r\nmight be evaluating me.'),
(22, 'SC', 'I was not concerned with how I was\r\npresenting myself.'),
(23, 'SC', 'I was not worried about what others might be thinking of me.'),
(24, 'AE', 'I really enjoyed the experience.'),
(25, 'AE', 'The experience left me feeling great.'),
(26, 'AE', 'The experience was extremely rewarding.');

-- --------------------------------------------------------

--
-- Table structure for table `motivation_question`
--

CREATE TABLE `motivation_question` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `motivation_question`
--

INSERT INTO `motivation_question` (`id`, `text`) VALUES
(1, 'While I was working on the image tagging I was thinking about how much I enjoyed it.'),
(2, 'I did not feel at all nervous about doing the image tagging.'),
(3, 'I felt that it was my choice to do the image tagging.'),
(4, 'I think I am pretty good at image tagging.'),
(5, 'I found the image tagging very interesting.'),
(6, 'I felt tense while doing the image tagging.'),
(7, 'I think I did pretty well at image tagging, compared to other students.'),
(8, 'Doing the image tagging was fun.'),
(9, 'I felt relaxed while doing the image tagging.'),
(10, 'I enjoyed doing the image tagging very much.'),
(11, 'I didn\'t really have a choice about doing the image tagging.'),
(12, 'I am satisfied with my performance at image tagging.'),
(13, 'I was anxious while doing the image tagging.'),
(14, 'I thought the image tagging was very boring.'),
(15, 'I felt like I was doing what I wanted to do while I was working on the image tagging.'),
(16, 'I felt pretty skilled at image tagging.'),
(17, 'I thought the image tagging was very interesting.'),
(18, 'I felt pressured while doing the image tagging.'),
(19, 'I felt like I had to do the image tagging.'),
(20, 'I would describe the image tagging as very enjoyable.'),
(21, 'I did the image tagging because I had no choice.'),
(22, 'After working at image tagging for awhile, I felt pretty competent.');

-- --------------------------------------------------------

--
-- Table structure for table `picture_tags`
--

CREATE TABLE `picture_tags` (
  `picture_id` varchar(11) NOT NULL,
  `user_id` varchar(11) NOT NULL,
  `tags` text NOT NULL,
  `id` int(11) NOT NULL,
  `time_start` varchar(100) NOT NULL,
  `time_end` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `picture_tags`
--

INSERT INTO `picture_tags` (`picture_id`, `user_id`, `tags`, `id`, `time_start`, `time_end`) VALUES
('mo-7', '1-3', '[{\"display\":\"dsf\",\"value\":\"dsf\"},{\"display\":\"sdf\",\"value\":\"sdf\"},{\"display\":\"sdfew\",\"value\":\"sdfew\"},{\"display\":\"sfsd\",\"value\":\"sfsd\"},{\"display\":\"kkk\",\"value\":\"kkk\"}]', 1, '1578767662426', '1578767700647'),
('mo-5', '1-3', '[{\"display\":\"kklk\",\"value\":\"kklk\"}]', 2, '1578767700649', '1578767705591'),
('mo-11', '1-3', '[{\"display\":\"dsf\",\"value\":\"dsf\"},{\"display\":\"dsfdsf\",\"value\":\"dsfdsf\"}]', 3, '1578767705592', '1578767768838'),
('mo-4', '1-3', '[{\"display\":\"h\",\"value\":\"h\"}]', 4, '1578767768839', '1578767770726'),
('mo-6', '1-3', '[{\"display\":\"fghgf\",\"value\":\"fghgf\"}]', 5, '1578767770727', '1578767772487'),
('mo-12', '1-3', '[{\"display\":\"ghgf\",\"value\":\"ghgf\"}]', 6, '1578767772490', '1578767774061'),
('mo-9', '1-3', '[{\"display\":\"gfhgf\",\"value\":\"gfhgf\"}]', 7, '1578767774063', '1578767775918'),
('mo-13', '1-3', '[{\"display\":\"fghgf\",\"value\":\"fghgf\"}]', 8, '1578767775919', '1578767778238'),
('mo-10', '1-3', '[{\"display\":\"gfhgf\",\"value\":\"gfhgf\"}]', 9, '1578767778239', '1578767780110'),
('mo-8', '1-3', '[{\"display\":\"gfhgf\",\"value\":\"gfhgf\"}]', 10, '1578767780111', '1578767781718'),
('c1-22', '1-2', '[{\"display\":\"sd\",\"value\":\"sd\"},{\"display\":\"ad\",\"value\":\"ad\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"sasad\",\"value\":\"sasad\"}]', 11, '1578767867813', '1578767872662'),
('c1-16', '1-2', '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"sadsa\",\"value\":\"sadsa\"},{\"display\":\"d\",\"value\":\"d\"}]', 12, '1578767872663', '1578767876190'),
('c1-18', '1-2', '[{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"sadqwd\",\"value\":\"sadqwd\"},{\"display\":\"asd\",\"value\":\"asd\"}]', 13, '1578767876190', '1578767880734'),
('c1-19', '1-2', '[{\"display\":\"sadas\",\"value\":\"sadas\"},{\"display\":\"wdwqd\",\"value\":\"wdwqd\"}]', 14, '1578767880735', '1578767883854'),
('c1-14', '1-2', '[{\"display\":\"qwdwd\",\"value\":\"qwdwd\"},{\"display\":\"sadqwd\",\"value\":\"sadqwd\"}]', 15, '1578767883854', '1578767886806'),
('c1-15', '1-2', '[{\"display\":\"asdw\",\"value\":\"asdw\"},{\"display\":\"sadqwd\",\"value\":\"sadqwd\"}]', 16, '1578767886807', '1578767889694'),
('c1-20', '1-2', '[{\"display\":\"sdqw\",\"value\":\"sdqw\"},{\"display\":\"asdqw\",\"value\":\"asdqw\"}]', 17, '1578767889694', '1578767893462'),
('c1-23', '1-2', '[{\"display\":\"sada\",\"value\":\"sada\"},{\"display\":\"wdwqd\",\"value\":\"wdwqd\"}]', 18, '1578767893463', '1578767897126'),
('c1-21', '1-2', '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"awdwd\",\"value\":\"awdwd\"}]', 19, '1578767897127', '1578767899887'),
('c1-17', '1-2', '[{\"display\":\"asdsa\",\"value\":\"asdsa\"}]', 20, '1578767899887', '1578767902566'),
('bg-32', '1-1', '[{\"display\":\"dfg\",\"value\":\"dfg\"},{\"display\":\"fdg\",\"value\":\"fdg\"},{\"display\":\"rgfgdg\",\"value\":\"rgfgdg\"}]', 21, '1578767992138', '1578767998915'),
('bg-29', '1-1', '[{\"display\":\"dfgdf\",\"value\":\"dfgdf\"},{\"display\":\"rydgd\",\"value\":\"rydgd\"}]', 22, '1578767998917', '1578768003992'),
('bg-25', '1-1', '[{\"display\":\"dfgfdg\",\"value\":\"dfgfdg\"},{\"display\":\"drdrg\",\"value\":\"drdrg\"}]', 23, '1578768003996', '1578768008929'),
('bg-27', '1-1', '[{\"display\":\"dfgfd44\",\"value\":\"dfgfd44\"}]', 24, '1578768008930', '1578768014084'),
('bg-28', '1-1', '[{\"display\":\"dgfdg\",\"value\":\"dgfdg\"},{\"display\":\"rgd\",\"value\":\"rgd\"}]', 25, '1578768014086', '1578768020143'),
('bg-31', '1-1', '[{\"display\":\"gfdgdf4rrdg4\",\"value\":\"gfdgdf4rrdg4\"},{\"display\":\"dd4\",\"value\":\"dd4\"}]', 26, '1578768020144', '1578768027373'),
('bg-24', '1-1', '[{\"display\":\"hggfh\",\"value\":\"hggfh\"}]', 27, '1578768027376', '1578768030053'),
('bg-30', '1-1', '[{\"display\":\"gvvngv\",\"value\":\"gvvngv\"}]', 28, '1578768030056', '1578768043877'),
('bg-26', '1-1', '[{\"display\":\"gjghj\",\"value\":\"gjghj\"}]', 29, '1578768043879', '1578768046437'),
('bg-23', '1-1', '[{\"display\":\"hgkhg\",\"value\":\"hgkhg\"}]', 30, '1578768046439', '1578768048589');

-- --------------------------------------------------------

--
-- Table structure for table `player_survey_1_questions`
--

CREATE TABLE `player_survey_1_questions` (
  `id` int(11) NOT NULL,
  `type` varchar(200) NOT NULL,
  `question_eng` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `player_survey_1_questions`
--

INSERT INTO `player_survey_1_questions` (`id`, `type`, `question_eng`) VALUES
(1, 'Achiever', 'I like overcoming obstacles.'),
(2, 'Achiever', 'It is important to me to always carry out my tasks completely.'),
(3, 'Achiever', 'It is important for me to continuously improve my skills.'),
(4, 'Achiever', 'I enjoy emerging victorious out of difficult circumstances.'),
(5, 'Disruptor', 'I like to provoke.'),
(6, 'Disruptor', 'I like to question the status quo.'),
(7, 'Disruptor', 'I see myself as a rebel.'),
(8, 'Disruptor', 'I dislike following rules.'),
(9, 'Free Spirit', 'It is important to me to follow my own path.'),
(10, 'Free Spirit', 'I often let my curiosity guide me.'),
(11, 'Free Spirit', 'Opportunities for self expression are important to me.'),
(12, 'Free Spirit', 'Being independent is important to me.'),
(13, 'Philantropist', 'It makes me happy if I am able to help others.'),
(14, 'Philantropist', 'I like helping others to orient themselves in new situations.'),
(15, 'Philantropist', 'I like sharing my knowledge.'),
(16, 'Philantropist', 'The well being of others is important to me.'),
(17, 'Player', 'I like competitions where a prize can be won.'),
(18, 'Player', 'Rewards are a great way to motivate me.'),
(19, 'Player', 'Return of investment is important to me.'),
(20, 'Player', 'If the reward is sufficient I will put in the effort.'),
(21, 'Socialiser', 'Interacting with others is important to me.'),
(22, 'Socialiser', 'I like being part of a team.'),
(23, 'Socialiser', 'It is important for me to feel like I am part of a community.'),
(24, 'Socialiser', 'I enjoy group activities.');

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `id` int(11) NOT NULL,
  `age` int(3) NOT NULL,
  `nationality` varchar(200) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `play_video_games_affine` varchar(100) NOT NULL,
  `play_video_games_frequently` varchar(100) NOT NULL,
  `play_video_games_passion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`id`, `age`, `nationality`, `gender`, `play_video_games_affine`, `play_video_games_frequently`, `play_video_games_passion`) VALUES
(1, 26, 'Pakistani', 'male', '4', '5', '4');

-- --------------------------------------------------------

--
-- Table structure for table `user_survey_data`
--

CREATE TABLE `user_survey_data` (
  `user_id` varchar(11) NOT NULL,
  `survey_one_point` int(11) DEFAULT NULL,
  `image_tags_point` int(11) DEFAULT NULL,
  `survey_2_data` text,
  `survey_3_data` text,
  `survey_1_data` text,
  `activity_flow_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_survey_data`
--

INSERT INTO `user_survey_data` (`user_id`, `survey_one_point`, `image_tags_point`, `survey_2_data`, `survey_3_data`, `survey_1_data`, `activity_flow_data`) VALUES
('1', 96, NULL, NULL, NULL, '{\"Disruptor_8\":\"4\",\"Disruptor_7\":\"4\",\"Disruptor_5\":\"4\",\"Free Spirit_12\":\"4\",\"Philantropist_13\":\"4\",\"Socialiser_22\":\"5\",\"Achiever_1\":\"4\",\"Socialiser_24\":\"3\",\"Player_18\":\"4\",\"Disruptor_6\":\"3\",\"Player_19\":\"4\",\"Free Spirit_11\":\"3\",\"Free Spirit_10\":\"4\",\"Philantropist_15\":\"3\",\"Philantropist_14\":\"4\",\"Socialiser_21\":\"5\",\"Achiever_2\":\"5\",\"Achiever_4\":\"5\",\"Player_17\":\"4\",\"Philantropist_16\":\"4\",\"Free Spirit_9\":\"4\",\"Achiever_3\":\"3\",\"Socialiser_23\":\"5\",\"Player_20\":\"4\"}', ''),
('1-1', NULL, 16, '{\"id_6\":\"7\",\"id_20\":\"6\",\"id_3\":\"7\",\"id_11\":\"6\",\"id_18\":\"5\",\"id_9\":\"6\",\"id_19\":\"5\",\"id_15\":\"7\",\"id_5\":\"6\",\"id_14\":\"4\",\"id_22\":\"6\",\"id_2\":\"5\",\"id_16\":\"7\",\"id_12\":\"5\",\"id_17\":\"7\",\"id_8\":\"3\",\"id_7\":\"2\",\"id_13\":\"5\",\"id_21\":\"6\",\"id_4\":\"3\",\"id_10\":\"6\",\"id_1\":\"3\"}', '{\"Interested\":\"1\",\"Distressed\":\"4\",\"Excited\":\"5\",\"Upset\":\"3\",\"Strong\":\"4\",\"Guilty\":\"3\",\"Scared\":\"5\",\"Hostile\":\"3\",\"Enthusiastic\":\"5\",\"Proud\":\"3\",\"Irritable\":\"5\",\"Alert\":\"3\",\"Ashamed\":\"2\",\"Inspired\":\"2\",\"Nervous\":\"4\",\"Determined\":\"2\",\"Attentive\":\"4\",\"Jittery\":\"2\",\"Active\":\"4\",\"Afraid\":\"2\"}', NULL, '{\"AE_25\":\"1\",\"CN_19\":\"2\",\"MAA_2\":\"3\",\"CG_6\":\"2\",\"UF_11\":\"3\",\"CS_13\":\"2\",\"CO_8\":\"3\",\"CO_9\":\"4\",\"MAA_1\":\"3\",\"CO_7\":\"4\",\"CN_20\":\"3\",\"SC_23\":\"4\",\"TT_17\":\"3\",\"MAA_3\":\"4\",\"UF_12\":\"3\",\"CG_4\":\"4\",\"CS_15\":\"4\",\"SC_22\":\"4\",\"CS_14\":\"3\",\"TT_18\":\"3\",\"CO_10\":\"4\",\"AE_24\":\"3\",\"AE_26\":\"4\",\"TT_16\":\"3\",\"CG_5\":\"4\",\"SC_21\":\"5\"}'),
('1-2', NULL, 23, '{\"id_14\":\"1\",\"id_15\":\"4\",\"id_8\":\"4\",\"id_4\":\"3\",\"id_1\":\"5\",\"id_18\":\"3\",\"id_9\":\"5\",\"id_16\":\"3\",\"id_13\":\"5\",\"id_3\":\"3\",\"id_20\":\"5\",\"id_2\":\"3\",\"id_21\":\"5\",\"id_7\":\"6\",\"id_12\":\"7\",\"id_10\":\"7\",\"id_19\":\"7\",\"id_22\":\"6\",\"id_11\":\"6\",\"id_6\":\"6\",\"id_5\":\"7\",\"id_17\":\"7\"}', '{\"Interested\":\"4\",\"Distressed\":\"4\",\"Excited\":\"4\",\"Upset\":\"5\",\"Strong\":\"5\",\"Guilty\":\"4\",\"Scared\":\"4\",\"Hostile\":\"5\",\"Enthusiastic\":\"4\",\"Proud\":\"4\",\"Irritable\":\"4\",\"Alert\":\"4\",\"Ashamed\":\"4\",\"Inspired\":\"4\",\"Determined\":\"5\",\"Nervous\":\"5\",\"Attentive\":\"4\",\"Jittery\":\"4\",\"Active\":\"5\",\"Afraid\":\"4\"}', NULL, '{\"MAA_1\":\"1\",\"CO_7\":\"4\",\"CS_14\":\"1\",\"UF_11\":\"3\",\"CO_8\":\"1\",\"AE_24\":\"3\",\"CG_6\":\"4\",\"CO_10\":\"5\",\"SC_22\":\"3\",\"MAA_3\":\"4\",\"TT_17\":\"3\",\"CN_20\":\"5\",\"UF_12\":\"3\",\"CO_9\":\"4\",\"CS_15\":\"3\",\"CG_4\":\"4\",\"TT_16\":\"3\",\"CS_13\":\"4\",\"MAA_2\":\"4\",\"CG_5\":\"3\",\"SC_23\":\"4\",\"AE_25\":\"4\",\"CN_19\":\"4\",\"TT_18\":\"3\",\"SC_21\":\"3\",\"AE_26\":\"4\"}'),
('1-3', NULL, 15, '{\"id_17\":\"1\",\"id_3\":\"4\",\"id_12\":\"4\",\"id_1\":\"4\",\"id_16\":\"4\",\"id_13\":\"4\",\"id_5\":\"4\",\"id_19\":\"4\",\"id_7\":\"4\",\"id_14\":\"4\",\"id_2\":\"4\",\"id_20\":\"4\",\"id_22\":\"5\",\"id_15\":\"4\",\"id_6\":\"5\",\"id_9\":\"5\",\"id_8\":\"6\",\"id_18\":\"6\",\"id_21\":\"7\",\"id_10\":\"6\",\"id_4\":\"5\",\"id_11\":\"5\"}', '{\"Interested\":\"5\",\"Distressed\":\"4\",\"Excited\":\"5\",\"Upset\":\"4\",\"Strong\":\"5\",\"Guilty\":\"3\",\"Scared\":\"2\",\"Hostile\":\"4\",\"Enthusiastic\":\"2\",\"Proud\":\"4\",\"Irritable\":\"2\",\"Alert\":\"2\",\"Ashamed\":\"4\",\"Inspired\":\"4\",\"Nervous\":\"3\",\"Determined\":\"4\",\"Attentive\":\"3\",\"Jittery\":\"4\",\"Active\":\"3\",\"Afraid\":\"2\"}', NULL, '{\"CN_19\":\"1\",\"AE_24\":\"2\",\"CG_5\":\"3\",\"TT_16\":\"1\",\"CG_4\":\"3\",\"UF_12\":\"3\",\"CS_15\":\"4\",\"SC_21\":\"4\",\"CN_20\":\"4\",\"CO_10\":\"4\",\"AE_25\":\"4\",\"CS_14\":\"4\",\"AE_26\":\"4\",\"CO_8\":\"3\",\"CG_6\":\"4\",\"MAA_2\":\"3\",\"UF_11\":\"4\",\"CO_7\":\"3\",\"MAA_3\":\"4\",\"TT_17\":\"3\",\"MAA_1\":\"4\",\"SC_23\":\"3\",\"CS_13\":\"4\",\"CO_9\":\"3\",\"TT_18\":\"4\",\"SC_22\":\"5\"}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_flow_question`
--
ALTER TABLE `activity_flow_question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `motivation_question`
--
ALTER TABLE `motivation_question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `picture_tags`
--
ALTER TABLE `picture_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `player_survey_1_questions`
--
ALTER TABLE `player_survey_1_questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_survey_data`
--
ALTER TABLE `user_survey_data`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_flow_question`
--
ALTER TABLE `activity_flow_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `motivation_question`
--
ALTER TABLE `motivation_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `picture_tags`
--
ALTER TABLE `picture_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `player_survey_1_questions`
--
ALTER TABLE `player_survey_1_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
