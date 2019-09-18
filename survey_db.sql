-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2019 at 05:52 PM
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
  `play_video_games` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `player_survey_1_questions`
--
ALTER TABLE `player_survey_1_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
