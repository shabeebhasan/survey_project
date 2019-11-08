-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2019 at 07:06 PM
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
(7, 'I think I did pretty well at this activity, compared to other students.'),
(8, 'Doing the image tagging was fun.'),
(9, 'I felt relaxed while doing the image tagging.'),
(10, 'I enjoyed doing the image tagging very much.'),
(11, 'I didnÕt really have a choice about doing the image tagging.'),
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
(1, '', 22, 'Åland Island', '', '', 'male', '2', '3', '2');

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
  `survey_1_data` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_survey_data`
--

INSERT INTO `user_survey_data` (`user_id`, `survey_one_point`, `image_tags_point`, `image_tags_data`, `survey_2_data`, `survey_3_data`, `survey_1_data`) VALUES
(0, 24, 19, NULL, '{\"id_8\":\"2\",\"id_13\":\"1\",\"id_16\":\"1\",\"id_22\":\"1\",\"id_18\":\"1\",\"id_9\":\"1\",\"id_20\":\"1\",\"id_7\":\"1\",\"id_21\":\"1\",\"id_17\":\"1\",\"id_10\":\"1\",\"id_3\":\"1\",\"id_5\":\"1\",\"id_14\":\"1\",\"id_4\":\"1\",\"id_6\":\"1\",\"id_12\":\"1\",\"id_19\":\"1\",\"id_1\":\"1\",\"id_11\":\"1\",\"id_2\":\"1\",\"id_15\":\"1\"}', '{\"Distressed\":\"2\",\"Excited\":\"2\",\"Instrested\":\"2\",\"Upset\":\"2\",\"Strong\":\"2\",\"Guilty\":\"2\",\"Scared\":\"2\",\"Hostile\":\"2\",\"Enthusiastic\":\"2\",\"Proud\":\"2\",\"Irritable\":\"2\",\"Alert\":\"2\",\"Ashamed\":\"2\",\"Inspired\":\"2\",\"Nervous\":\"2\",\"Determined\":\"2\",\"Attentive\":\"2\",\"Jittery\":\"2\",\"Active\":\"2\",\"Afraid\":\"2\"}', '{\"Socialiser_22\":\"1\",\"Player_17\":\"1\",\"Achiever_3\":\"1\",\"Free Spirit_10\":\"1\",\"Player_18\":\"1\",\"Player_20\":\"1\",\"Socialiser_21\":\"1\",\"Philantropist_14\":\"1\",\"Player_19\":\"1\",\"Free Spirit_11\":\"1\",\"Philantropist_15\":\"1\",\"Socialiser_24\":\"1\",\"Free Spirit_9\":\"1\",\"Disruptor_8\":\"1\",\"Philantropist_16\":\"1\",\"Disruptor_7\":\"1\",\"Philantropist_13\":\"1\",\"Disruptor_5\":\"1\",\"Achiever_1\":\"1\",\"Free Spirit_12\":\"1\",\"Socialiser_23\":\"1\",\"Achiever_4\":\"1\",\"Achiever_2\":\"1\",\"Disruptor_6\":\"1\"}'),
(1, 24, 15, NULL, '{\"id_16\":\"1\",\"id_8\":\"1\",\"id_6\":\"1\",\"id_5\":\"1\",\"id_12\":\"1\",\"id_15\":\"1\",\"id_17\":\"1\",\"id_18\":\"1\",\"id_21\":\"1\",\"id_20\":\"1\",\"id_1\":\"1\",\"id_9\":\"1\",\"id_11\":\"1\",\"id_2\":\"1\",\"id_13\":\"1\",\"id_7\":\"1\",\"id_10\":\"1\",\"id_14\":\"1\",\"id_3\":\"1\",\"id_4\":\"1\",\"id_22\":\"1\",\"id_19\":\"1\"}', '{\"Instrested\":\"1\",\"Distressed\":\"1\",\"Excited\":\"1\",\"Upset\":\"1\",\"Strong\":\"1\",\"Guilty\":\"1\",\"Scared\":\"1\",\"Hostile\":\"1\",\"Enthusiastic\":\"1\",\"Proud\":\"1\",\"Irritable\":\"1\",\"Alert\":\"1\",\"Ashamed\":\"1\",\"Inspired\":\"1\",\"Nervous\":\"1\",\"Determined\":\"1\",\"Attentive\":\"1\",\"Jittery\":\"1\",\"Active\":\"1\",\"Afraid\":\"3\"}', '{\"Disruptor_7\":\"1\",\"Socialiser_21\":\"1\",\"Player_19\":\"1\",\"Socialiser_22\":\"1\",\"Philantropist_16\":\"1\",\"Free Spirit_11\":\"1\",\"Player_18\":\"1\",\"Philantropist_15\":\"1\",\"Free Spirit_9\":\"1\",\"Socialiser_23\":\"1\",\"Achiever_4\":\"1\",\"Free Spirit_12\":\"1\",\"Achiever_2\":\"1\",\"Socialiser_24\":\"1\",\"Player_17\":\"1\",\"Disruptor_5\":\"1\",\"Player_20\":\"1\",\"Philantropist_13\":\"1\",\"Achiever_1\":\"1\",\"Philantropist_14\":\"1\",\"Disruptor_6\":\"1\",\"Achiever_3\":\"1\",\"Disruptor_8\":\"1\",\"Free Spirit_10\":\"1\"}'),
(6, 30, 15, NULL, '{\"id_18\":\"1\",\"id_22\":\"1\",\"id_8\":\"1\",\"id_9\":\"1\",\"id_15\":\"1\",\"id_19\":\"1\",\"id_16\":\"2\",\"id_13\":\"1\",\"id_20\":\"2\",\"id_10\":\"1\",\"id_3\":\"2\",\"id_21\":\"1\",\"id_6\":\"2\",\"id_17\":\"1\",\"id_7\":\"2\",\"id_14\":\"1\",\"id_5\":\"2\",\"id_1\":\"1\",\"id_12\":\"1\",\"id_4\":\"1\",\"id_11\":\"1\",\"id_2\":\"1\"}', '{\"Instrested\":\"1\",\"Distressed\":\"1\",\"Excited\":\"1\",\"Upset\":\"1\",\"Strong\":\"1\",\"Scared\":\"1\",\"Guilty\":\"1\",\"Hostile\":\"1\",\"Enthusiastic\":\"1\",\"Proud\":\"1\",\"Irritable\":\"1\",\"Alert\":\"1\",\"Ashamed\":\"1\",\"Inspired\":\"1\",\"Nervous\":\"1\",\"Determined\":\"1\",\"Attentive\":\"1\",\"Jittery\":\"1\",\"Active\":\"1\",\"Afraid\":\"1\"}', '{\"Free Spirit_11\":\"1\",\"Philantropist_16\":\"2\",\"Achiever_2\":\"1\",\"Player_19\":\"1\",\"Achiever_1\":\"2\",\"Socialiser_22\":\"1\",\"Player_18\":\"1\",\"Achiever_3\":\"1\",\"Free Spirit_9\":\"1\",\"Philantropist_13\":\"1\",\"Free Spirit_12\":\"1\",\"Disruptor_6\":\"1\",\"Philantropist_14\":\"1\",\"Free Spirit_10\":\"1\",\"Disruptor_5\":\"1\",\"Socialiser_24\":\"1\",\"Disruptor_8\":\"1\",\"Player_20\":\"2\",\"Player_17\":\"2\",\"Philantropist_15\":\"1\",\"Socialiser_23\":\"2\",\"Disruptor_7\":\"1\",\"Achiever_4\":\"2\",\"Socialiser_21\":\"1\"}');

--
-- Indexes for dumped tables
--

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
