-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2019 at 11:24 AM
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
(9, 'CO', 'I had total concentrating.'),
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
  `picture_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tags` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(3, 'Achiever', 'It is difficult for me to let go of a problem before I have found a solution.'),
(4, 'Achiever', 'I like mastering difficult tasks.'),
(5, 'Disruptor', 'I like to provoke.'),
(6, 'Disruptor', 'I like to question the status quo.'),
(7, 'Disruptor', 'I see myself as a rebel.'),
(8, 'Disruptor', 'I dislike following rules.'),
(9, 'Free Spirit', 'It is important to me to follow my own path.'),
(10, 'Free Spirit', 'I often let my curiosity guide me.'),
(11, 'Free Spirit', 'I like to try new things.'),
(12, 'Free Spirit', 'Being independent is important to me.'),
(13, 'Philantropist', 'It makes me happy if I am able to help others.'),
(14, 'Philantropist', 'I like helping others to orient themselves in new situations.'),
(15, 'Philantropist', 'I like sharing my knowledge with others.'),
(16, 'Philantropist', 'The well being of others is important to me.'),
(17, 'Player', 'I like competitions where a prize can be won.'),
(18, 'Player', 'Rewards are a great way to motivate me.'),
(19, 'Player', 'Return of investment is important to me.'),
(20, 'Player', 'If the reward is enough I will put in the effort.'),
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
  `name` varchar(200) NOT NULL,
  `age` int(3) NOT NULL,
  `nationality` varchar(200) NOT NULL,
  `occupation` varchar(200) NOT NULL,
  `education` varchar(200) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `play_video_games_affine` varchar(100) NOT NULL,
  `play_video_games_frequently` varchar(100) NOT NULL,
  `play_video_games_passion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`id`, `name`, `age`, `nationality`, `occupation`, `education`, `gender`, `play_video_games_affine`, `play_video_games_frequently`, `play_video_games_passion`) VALUES
(1, '', 26, 'Pakistani', '', '', 'female', '4', '5', '5');

-- --------------------------------------------------------

--
-- Table structure for table `user_survey_data`
--

CREATE TABLE `user_survey_data` (
  `user_id` int(11) NOT NULL,
  `survey_one_point` int(11) DEFAULT NULL,
  `image_tags_point` int(11) DEFAULT NULL,
  `image_tags_data` text,
  `survey_2_data` text,
  `survey_3_data` text,
  `survey_1_data` text,
  `activity_flow_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_survey_data`
--

INSERT INTO `user_survey_data` (`user_id`, `survey_one_point`, `image_tags_point`, `image_tags_data`, `survey_2_data`, `survey_3_data`, `survey_1_data`, `activity_flow_data`) VALUES
(1, 60, 11, NULL, '{\"id_12\":\"1\",\"id_20\":\"2\",\"id_15\":\"1\",\"id_18\":\"2\",\"id_4\":\"1\",\"id_19\":\"2\",\"id_8\":\"1\",\"id_9\":\"2\",\"id_13\":\"1\",\"id_7\":\"2\",\"id_17\":\"1\",\"id_14\":\"1\",\"id_2\":\"2\",\"id_22\":\"1\",\"id_6\":\"2\",\"id_21\":\"1\",\"id_11\":\"2\",\"id_16\":\"1\",\"id_5\":\"2\",\"id_10\":\"1\",\"id_1\":\"2\",\"id_3\":\"1\"}', '{\"Instrested\":\"1\",\"Distressed\":\"1\",\"Excited\":\"1\",\"Upset\":\"1\",\"Strong\":\"1\",\"Scared\":\"1\",\"Guilty\":\"1\",\"Hostile\":\"1\",\"Enthusiastic\":\"1\",\"Proud\":\"1\",\"Irritable\":\"1\",\"Alert\":\"1\",\"Ashamed\":\"1\",\"Inspired\":\"1\",\"Nervous\":\"1\",\"Determined\":\"1\",\"Attentive\":\"1\",\"Jittery\":\"1\",\"Active\":\"1\",\"Afraid\":\"1\"}', '{\"Philantropist_13\":\"1\",\"Philantropist_16\":\"2\",\"Disruptor_6\":\"2\",\"Philantropist_15\":\"2\",\"Achiever_2\":\"2\",\"Free Spirit_11\":\"3\",\"Socialiser_22\":\"4\",\"Socialiser_23\":\"4\",\"Socialiser_24\":\"4\",\"Achiever_4\":\"3\",\"Socialiser_21\":\"3\",\"Player_20\":\"2\",\"Free Spirit_10\":\"1\",\"Player_19\":\"2\",\"Player_18\":\"3\",\"Free Spirit_9\":\"3\",\"Free Spirit_12\":\"2\",\"Achiever_3\":\"2\",\"Disruptor_7\":\"3\",\"Disruptor_5\":\"2\",\"Disruptor_8\":\"2\",\"Player_17\":\"3\",\"Philantropist_14\":\"3\",\"Achiever_1\":\"2\"}', '{\"AE_24\":\"1\",\"TT_16\":\"1\",\"CS_13\":\"1\",\"SC_21\":\"1\",\"UF_11\":\"1\",\"SC_23\":\"1\",\"AE_25\":\"1\",\"MAA_3\":\"1\",\"SC_22\":\"1\",\"TT_17\":\"1\",\"UF_12\":\"1\",\"CG_5\":\"1\",\"CG_6\":\"1\",\"CS_15\":\"1\",\"CG_4\":\"1\",\"CN_20\":\"1\",\"CN_19\":\"1\",\"CO_10\":\"1\",\"MAA_2\":\"4\",\"TT_18\":\"3\",\"CO_7\":\"3\",\"AE_26\":\"4\",\"CS_14\":\"3\",\"CO_8\":\"4\",\"CO_9\":\"3\",\"MAA_1\":\"3\"}');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `motivation_question`
--
ALTER TABLE `motivation_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
