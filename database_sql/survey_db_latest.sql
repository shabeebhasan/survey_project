-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2019 at 10:24 AM
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
  `user_id` int(11) NOT NULL,
  `tags` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `picture_tags`
--

INSERT INTO `picture_tags` (`picture_id`, `user_id`, `tags`, `id`) VALUES
('vi-1', 4, '[{\"display\":\"sds\",\"value\":\"sds\"},{\"display\":\"q qw\",\"value\":\"q qw\"},{\"display\":\"wqwqe\",\"value\":\"wqwqe\"}]', 1),
('vi-2', 4, '[{\"display\":\"sdsd\",\"value\":\"sdsd\"},{\"display\":\"wqe\",\"value\":\"wqe\"},{\"display\":\"wqe we\",\"value\":\"wqe we\"}]', 2),
('vi-1', 4, '[{\"display\":\"we\",\"value\":\"we\"},{\"display\":\"qe\",\"value\":\"qe\"},{\"display\":\"qwe\",\"value\":\"qwe\"}]', 3),
('vi-2', 4, '[{\"display\":\"qwe\",\"value\":\"qwe\"},{\"display\":\"qweqwe\",\"value\":\"qweqwe\"}]', 4),
('vi-3', 4, '[{\"display\":\"qwewq\",\"value\":\"qwewq\"},{\"display\":\"qwe\",\"value\":\"qwe\"}]', 5),
('vi-4', 4, '[{\"display\":\"qwewq\",\"value\":\"qwewq\"},{\"display\":\"2e\",\"value\":\"2e\"}]', 6),
('mo-1', 4, '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"sads\",\"value\":\"sads\"}]', 7),
('mo-2', 4, '[{\"display\":\"a\",\"value\":\"a\"},{\"display\":\"sadsa\",\"value\":\"sadsa\"}]', 8),
('mo-3', 4, '[{\"display\":\"sdas\",\"value\":\"sdas\"}]', 9),
('vi-1', 4, '[{\"display\":\"asd\",\"value\":\"asd\"},{\"display\":\"sad\",\"value\":\"sad\"}]', 10),
('vi-2', 4, '[{\"display\":\"asd\",\"value\":\"asd\"}]', 11),
('vi-3', 4, '[{\"display\":\"asd\",\"value\":\"asd\"}]', 12),
('vi-4', 4, '[{\"display\":\"ad\",\"value\":\"ad\"}]', 13),
('vi-5', 4, '[{\"display\":\"ads\",\"value\":\"ads\"}]', 14),
('vi-6', 4, '\"\"', 15),
('vi-7', 4, '\"\"', 16),
('vi-8', 4, '\"\"', 17),
('vi-9', 4, '\"\"', 18),
('c1-1', 4, '\"\"', 19),
('c1-2', 4, '\"\"', 20),
('c1-3', 4, '\"\"', 21),
('c1-4', 4, '\"\"', 22),
('c1-5', 4, '\"\"', 23),
('c1-6', 4, '\"\"', 24),
('c1-7', 4, '\"\"', 25),
('c1-8', 4, '\"\"', 26),
('c1-9', 4, '\"\"', 27),
('c2-1', 4, '\"\"', 28),
('c2-2', 4, '\"\"', 29),
('c2-3', 4, '\"\"', 30),
('c2-4', 4, '\"\"', 31),
('c2-5', 4, '\"\"', 32),
('c2-6', 4, '\"\"', 33),
('c2-7', 4, '\"\"', 34),
('c2-8', 4, '\"\"', 35),
('c2-9', 4, '\"\"', 36),
('vi-1', 4, '\"\"', 37),
('vi-2', 4, '\"\"', 38),
('vi-3', 4, '\"\"', 39),
('vi-4', 4, '\"\"', 40),
('vi-5', 4, '\"\"', 41),
('vi-6', 4, '\"\"', 42),
('vi-7', 4, '\"\"', 43),
('vi-8', 4, '\"\"', 44),
('vi-9', 4, '\"\"', 45),
('mo-1', 4, '\"\"', 46),
('mo-2', 4, '\"\"', 47),
('mo-3', 4, '\"\"', 48),
('mo-4', 4, '\"\"', 49),
('mo-5', 4, '\"\"', 50),
('mo-6', 4, '\"\"', 51),
('mo-7', 4, '\"\"', 52),
('mo-8', 4, '\"\"', 53),
('mo-9', 4, '\"\"', 54),
('mo-1', 4, '[{\"display\":\"sa\",\"value\":\"sa\"},{\"display\":\"sasrwr\",\"value\":\"sasrwr\"},{\"display\":\"ewer er\",\"value\":\"ewer er\"}]', 55),
('mo-2', 4, '[{\"display\":\"jjdsf\",\"value\":\"jjdsf\"},{\"display\":\"sdf3\",\"value\":\"sdf3\"}]', 56),
('mo-3', 4, '[{\"display\":\"wewr\",\"value\":\"wewr\"}]', 57),
('mo-1', 4, '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"asdwdq\",\"value\":\"asdwdq\"},{\"display\":\"qwe ds\",\"value\":\"qwe ds\"},{\"display\":\"asdqw d\",\"value\":\"asdqw d\"},{\"display\":\"wd wqdwq\",\"value\":\"wd wqdwq\"},{\"display\":\"qwe wqd\",\"value\":\"qwe wqd\"},{\"display\":\"wdqw\",\"value\":\"wdqw\"},{\"display\":\"dqwwqd\",\"value\":\"dqwwqd\"},{\"display\":\"dqw\",\"value\":\"dqw\"},{\"display\":\"dwdwdwq\",\"value\":\"dwdwdwq\"}]', 58),
('mo-1', 4, '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"wwqr\",\"value\":\"wwqr\"},{\"display\":\"ef egw\",\"value\":\"ef egw\"},{\"display\":\"e ew\",\"value\":\"e ew\"},{\"display\":\"ewef\",\"value\":\"ewef\"}]', 59),
('mo-2', 4, '[{\"display\":\"dkkds\",\"value\":\"dkkds\"},{\"display\":\"dsf sf\",\"value\":\"dsf sf\"},{\"display\":\"ewf e\",\"value\":\"ewf e\"},{\"display\":\"ew ew\",\"value\":\"ew ew\"},{\"display\":\"we fewf\",\"value\":\"we fewf\"}]', 60),
('mo-3', 4, '[{\"display\":\"kkfg\",\"value\":\"kkfg\"},{\"display\":\"dskds\",\"value\":\"dskds\"},{\"display\":\"sdfk sdf\",\"value\":\"sdfk sdf\"},{\"display\":\"ds dskf s\",\"value\":\"ds dskf s\"},{\"display\":\"sdfk s\",\"value\":\"sdfk s\"},{\"display\":\"sdf s\",\"value\":\"sdf s\"}]', 61),
('vi-1', 4, '[{\"display\":\"fsdf\",\"value\":\"fsdf\"},{\"display\":\"sf ew\",\"value\":\"sf ew\"},{\"display\":\"f we\",\"value\":\"f we\"},{\"display\":\"ewf\",\"value\":\"ewf\"},{\"display\":\"ewf ew\",\"value\":\"ewf ew\"},{\"display\":\"f ew\",\"value\":\"f ew\"},{\"display\":\"f e\",\"value\":\"f e\"},{\"display\":\"ewf efew\",\"value\":\"ewf efew\"},{\"display\":\"fe ewf\",\"value\":\"fe ewf\"},{\"display\":\"wef ewfe\",\"value\":\"wef ewfe\"},{\"display\":\"fe e e\",\"value\":\"fe e e\"},{\"display\":\"ew ef ew\",\"value\":\"ew ef ew\"},{\"display\":\"ew ew e\",\"value\":\"ew ew e\"},{\"display\":\"f ewfew\",\"value\":\"f ewfew\"},{\"display\":\"fewf\",\"value\":\"fewf\"}]', 62),
('vi-2', 4, '\"\"', 63),
('vi-3', 4, '[{\"display\":\"eewf ew\",\"value\":\"eewf ew\"},{\"display\":\"ewf ew\",\"value\":\"ewf ew\"},{\"display\":\"e few\",\"value\":\"e few\"},{\"display\":\"ewf\",\"value\":\"ewf\"}]', 64),
('vi-4', 4, '[{\"display\":\"efefe\",\"value\":\"efefe\"},{\"display\":\"ewewr\",\"value\":\"ewewr\"},{\"display\":\"eewr rew\",\"value\":\"eewr rew\"},{\"display\":\"ew ewr\",\"value\":\"ew ewr\"},{\"display\":\"wr we\",\"value\":\"wr we\"},{\"display\":\"we\",\"value\":\"we\"},{\"display\":\"wer ew\",\"value\":\"wer ew\"},{\"display\":\"wer\",\"value\":\"wer\"},{\"display\":\"r we\",\"value\":\"r we\"},{\"display\":\"e ewr er\",\"value\":\"e ewr er\"},{\"display\":\"erew ew\",\"value\":\"erew ew\"}]', 65),
('c2-1', 5, '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"asdas\",\"value\":\"asdas\"},{\"display\":\"asdw\",\"value\":\"asdw\"},{\"display\":\"adasdw\",\"value\":\"adasdw\"},{\"display\":\"asda\",\"value\":\"asda\"}]', 66),
('c1-1', 0, '\"\"', 67),
('c1-2', 0, '\"\"', 68),
('c1-3', 0, '\"\"', 69),
('c1-4', 0, '\"\"', 70),
('c1-5', 0, '\"\"', 71),
('c1-6', 0, '\"\"', 72),
('c1-7', 0, '\"\"', 73),
('c1-8', 0, '\"\"', 74),
('c1-9', 0, '\"\"', 75),
('c1-1', 0, '\"\"', 76),
('c1-2', 0, '\"\"', 77),
('c1-3', 0, '\"\"', 78),
('c1-4', 0, '\"\"', 79),
('c1-5', 0, '\"\"', 80),
('c1-6', 0, '\"\"', 81),
('c1-7', 0, '\"\"', 82),
('c1-8', 0, '\"\"', 83),
('c1-9', 0, '\"\"', 84),
('c1-1', 0, '\"\"', 85),
('c1-2', 0, '\"\"', 86),
('c1-3', 0, '\"\"', 87),
('c1-4', 0, '\"\"', 88),
('c1-5', 0, '\"\"', 89),
('c1-6', 0, '\"\"', 90),
('c1-7', 0, '\"\"', 91),
('c1-8', 0, '\"\"', 92),
('c1-9', 0, '\"\"', 93),
('c2-1', 0, '\"\"', 94),
('c2-2', 0, '\"\"', 95),
('c2-3', 0, '\"\"', 96),
('c2-4', 0, '\"\"', 97),
('c2-5', 0, '\"\"', 98),
('c2-6', 0, '\"\"', 99),
('c2-7', 0, '\"\"', 100),
('c2-8', 0, '\"\"', 101),
('c2-9', 0, '\"\"', 102),
('bg-1', 0, '\"\"', 103),
('bg-2', 0, '\"\"', 104),
('bg-3', 0, '\"\"', 105),
('bg-4', 0, '\"\"', 106),
('bg-5', 0, '\"\"', 107),
('bg-6', 0, '\"\"', 108),
('bg-7', 0, '\"\"', 109),
('bg-8', 0, '\"\"', 110),
('bg-9', 0, '\"\"', 111),
('bg-1', 0, '[{\"display\":\"dsf\",\"value\":\"dsf\"},{\"display\":\"dsfefew\",\"value\":\"dsfefew\"},{\"display\":\"ewf ef\",\"value\":\"ewf ef\"},{\"display\":\"e fef\",\"value\":\"e fef\"},{\"display\":\"ef ewf\",\"value\":\"ef ewf\"},{\"display\":\"e fe\",\"value\":\"e fe\"},{\"display\":\"wf ew\",\"value\":\"wf ew\"},{\"display\":\"f ew\",\"value\":\"f ew\"},{\"display\":\"few\",\"value\":\"few\"},{\"display\":\"ewf we\",\"value\":\"ewf we\"},{\"display\":\"f ewf\",\"value\":\"f ewf\"},{\"display\":\"ef\",\"value\":\"ef\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"ewf ew\",\"value\":\"ewf ew\"},{\"display\":\"f\",\"value\":\"f\"}]', 112),
('bg-2', 0, '[{\"display\":\"ewf\",\"value\":\"ewf\"},{\"display\":\"ef\",\"value\":\"ef\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"fe f\",\"value\":\"fe f\"},{\"display\":\"ew ew\",\"value\":\"ew ew\"}]', 113),
('bg-3', 0, '[{\"display\":\"f ewe\",\"value\":\"f ewe\"},{\"display\":\"fe e\",\"value\":\"fe e\"},{\"display\":\"f ef\",\"value\":\"f ef\"},{\"display\":\"ef\",\"value\":\"ef\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"ew\",\"value\":\"ew\"},{\"display\":\"e ew\",\"value\":\"e ew\"},{\"display\":\"f\",\"value\":\"f\"},{\"display\":\"ewf\",\"value\":\"ewf\"},{\"display\":\"ewf ew\",\"value\":\"ewf ew\"},{\"display\":\"f ew\",\"value\":\"f ew\"},{\"display\":\"few\",\"value\":\"few\"},{\"display\":\"e efw\",\"value\":\"e efw\"},{\"display\":\"ew few\",\"value\":\"ew few\"},{\"display\":\"f we\",\"value\":\"f we\"},{\"display\":\"wefewf\",\"value\":\"wefewf\"},{\"display\":\"ewfew\",\"value\":\"ewfew\"},{\"display\":\"few ew\",\"value\":\"few ew\"},{\"display\":\"f ewf\",\"value\":\"f ewf\"},{\"display\":\"4r\",\"value\":\"4r\"},{\"display\":\"wef\",\"value\":\"wef\"},{\"display\":\"r ew\",\"value\":\"r ew\"},{\"display\":\"42r\",\"value\":\"42r\"},{\"display\":\"wfwef\",\"value\":\"wfwef\"},{\"display\":\"r23\",\"value\":\"r23\"}]', 114),
('bg-4', 0, '[{\"display\":\"ewf\",\"value\":\"ewf\"},{\"display\":\"4r ewf\",\"value\":\"4r ewf\"},{\"display\":\"r4\",\"value\":\"r4\"},{\"display\":\"efw4\",\"value\":\"efw4\"},{\"display\":\"r wef\",\"value\":\"r wef\"},{\"display\":\"4r\",\"value\":\"4r\"},{\"display\":\"wef\",\"value\":\"wef\"},{\"display\":\"4\",\"value\":\"4\"},{\"display\":\"4t efw\",\"value\":\"4t efw\"},{\"display\":\"few\",\"value\":\"few\"},{\"display\":\"f 4r ew\",\"value\":\"f 4r ew\"},{\"display\":\"f w\",\"value\":\"f w\"},{\"display\":\"ewfewfwef\",\"value\":\"ewfewfwef\"},{\"display\":\"ewfewr2\",\"value\":\"ewfewr2\"},{\"display\":\"sdf ewf34\",\"value\":\"sdf ewf34\"},{\"display\":\"efewf\",\"value\":\"efewf\"}]', 115),
('bg-5', 0, '[{\"display\":\"3rr\",\"value\":\"3rr\"},{\"display\":\"ewr3242r\",\"value\":\"ewr3242r\"},{\"display\":\"dsv 4\",\"value\":\"dsv 4\"},{\"display\":\"f w we\",\"value\":\"f w we\"},{\"display\":\"f ewfwr\",\"value\":\"f ewfwr\"},{\"display\":\"es wer 23r\",\"value\":\"es wer 23r\"},{\"display\":\"ew fwef 32r\",\"value\":\"ew fwef 32r\"}]', 116),
('bg-6', 0, '[{\"display\":\"ewfewf\",\"value\":\"ewfewf\"},{\"display\":\"ewf ew\",\"value\":\"ewf ew\"}]', 117),
('bg-7', 0, '[{\"display\":\"sdaf\",\"value\":\"sdaf\"},{\"display\":\"sf ewf\",\"value\":\"sf ewf\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"ewf ew\",\"value\":\"ewf ew\"},{\"display\":\"fwef wef\",\"value\":\"fwef wef\"},{\"display\":\"ew few\",\"value\":\"ew few\"},{\"display\":\"f ewf\",\"value\":\"f ewf\"}]', 118),
('bg-8', 0, '\"\"', 119),
('bg-9', 0, '\"\"', 120),
('vi-1', 0, '\"\"', 121),
('vi-1', 0, '[{\"display\":\"asd\",\"value\":\"asd\"},{\"display\":\"wdq\",\"value\":\"wdq\"},{\"display\":\"wdqw\",\"value\":\"wdqw\"},{\"display\":\"dwq\",\"value\":\"dwq\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"qw dw\",\"value\":\"qw dw\"},{\"display\":\"as\",\"value\":\"as\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"qwd qwd\",\"value\":\"qwd qwd\"},{\"display\":\"qw qw\",\"value\":\"qw qw\"},{\"display\":\"dqedqw\",\"value\":\"dqedqw\"},{\"display\":\"dq w\",\"value\":\"dq w\"},{\"display\":\"qwd 2e\",\"value\":\"qwd 2e\"},{\"display\":\"d\",\"value\":\"d\"},{\"display\":\"wq2ee\",\"value\":\"wq2ee\"},{\"display\":\"dqw 2\",\"value\":\"dqw 2\"},{\"display\":\"eq wq\",\"value\":\"eq wq\"},{\"display\":\"wd qwd\",\"value\":\"wd qwd\"},{\"display\":\"wqd\",\"value\":\"wqd\"}]', 122),
('vi-2', 0, '\"\"', 123),
('vi-1', 0, '[{\"display\":\"asds\",\"value\":\"asds\"},{\"display\":\"sa qwe\",\"value\":\"sa qwe\"},{\"display\":\"qwd wq\",\"value\":\"qwd wq\"},{\"display\":\"d w\",\"value\":\"d w\"},{\"display\":\"wd qwdw\",\"value\":\"wd qwdw\"},{\"display\":\"qd qw\",\"value\":\"qd qw\"},{\"display\":\"dqwd\",\"value\":\"dqwd\"},{\"display\":\"qwdwq\",\"value\":\"qwdwq\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"dww\",\"value\":\"dww\"},{\"display\":\"qd qwd\",\"value\":\"qd qwd\"},{\"display\":\"qwdwd\",\"value\":\"qwdwd\"},{\"display\":\"qwdqw\",\"value\":\"qwdqw\"},{\"display\":\"dqw qwdw\",\"value\":\"dqw qwdw\"},{\"display\":\"dqwd wq\",\"value\":\"dqwd wq\"},{\"display\":\"dqwd qwd\",\"value\":\"dqwd qwd\"},{\"display\":\"wqdqw dqw\",\"value\":\"wqdqw dqw\"},{\"display\":\"dwqdwqd\",\"value\":\"dwqdwqd\"},{\"display\":\"wdqwdwqd\",\"value\":\"wdqwdwqd\"},{\"display\":\"wqdwwqd\",\"value\":\"wqdwwqd\"}]', 124),
('vi-2', 0, '[{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"wqd 2eq\",\"value\":\"wqd 2eq\"},{\"display\":\"qdqw22\",\"value\":\"qdqw22\"},{\"display\":\"qwd qe\",\"value\":\"qwd qe\"},{\"display\":\"qe qwde\",\"value\":\"qe qwde\"},{\"display\":\"qwd q3e\",\"value\":\"qwd q3e\"},{\"display\":\"qwd 3\",\"value\":\"qwd 3\"},{\"display\":\"qwdqw 3e\",\"value\":\"qwdqw 3e\"},{\"display\":\"qwd qw\",\"value\":\"qwd qw\"},{\"display\":\"qwd wq\",\"value\":\"qwd wq\"},{\"display\":\"dqwd\",\"value\":\"dqwd\"},{\"display\":\"3\",\"value\":\"3\"},{\"display\":\"qwdwq\",\"value\":\"qwdwq\"},{\"display\":\"d qd\",\"value\":\"d qd\"},{\"display\":\"qwd q\",\"value\":\"qwd q\"},{\"display\":\"wdqw\",\"value\":\"wdqw\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"qw q3\",\"value\":\"qw q3\"},{\"display\":\"qwd qwd\",\"value\":\"qwd qwd\"},{\"display\":\"q\",\"value\":\"q\"},{\"display\":\"wqdqwd\",\"value\":\"wqdqwd\"},{\"display\":\"3eqwd\",\"value\":\"3eqwd\"},{\"display\":\"wqd qwd\",\"value\":\"wqd qwd\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"dqd\",\"value\":\"dqd\"}]', 125),
('vi-3', 0, '[{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"wd 3e\",\"value\":\"wd 3e\"},{\"display\":\"wqdwq\",\"value\":\"wqdwq\"},{\"display\":\"q3\",\"value\":\"q3\"},{\"display\":\"qwdqww\",\"value\":\"qwdqww\"},{\"display\":\"q qdw\",\"value\":\"q qdw\"},{\"display\":\"qe\",\"value\":\"qe\"},{\"display\":\"qwdq\",\"value\":\"qwdq\"},{\"display\":\"wed qwd\",\"value\":\"wed qwd\"},{\"display\":\"q\",\"value\":\"q\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"qdw\",\"value\":\"qdw\"},{\"display\":\"qwd wq\",\"value\":\"qwd wq\"},{\"display\":\"dqw\",\"value\":\"dqw\"},{\"display\":\"qwdwqd\",\"value\":\"qwdwqd\"},{\"display\":\"e qw\",\"value\":\"e qw\"},{\"display\":\"d qw\",\"value\":\"d qw\"},{\"display\":\"dqwd wd\",\"value\":\"dqwd wd\"},{\"display\":\"qwd qw\",\"value\":\"qwd qw\"},{\"display\":\"dqwd\",\"value\":\"dqwd\"},{\"display\":\"qwdw\",\"value\":\"qwdw\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"qwe\",\"value\":\"qwe\"},{\"display\":\"wq\",\"value\":\"wq\"},{\"display\":\"wqd d\",\"value\":\"wqd d\"}]', 126),
('vi-4', 0, '[{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"dwq\",\"value\":\"dwq\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"d wqd\",\"value\":\"d wqd\"}]', 127),
('vi-1', 0, '[{\"display\":\"assd\",\"value\":\"assd\"},{\"display\":\"asd wdq\",\"value\":\"asd wdq\"},{\"display\":\"wqd wqd\",\"value\":\"wqd wqd\"},{\"display\":\"wd\",\"value\":\"wd\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"qwd w\",\"value\":\"qwd w\"},{\"display\":\"dwdas\",\"value\":\"dwdas\"},{\"display\":\"d qw\",\"value\":\"d qw\"},{\"display\":\"d d\",\"value\":\"d d\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"wqd wd\",\"value\":\"wqd wd\"},{\"display\":\"w\",\"value\":\"w\"},{\"display\":\"dwq dqw\",\"value\":\"dwq dqw\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"qwdw\",\"value\":\"qwdw\"},{\"display\":\"d wd\",\"value\":\"d wd\"},{\"display\":\"w d\",\"value\":\"w d\"},{\"display\":\"wqd qw\",\"value\":\"wqd qw\"},{\"display\":\"dqwd\",\"value\":\"dqwd\"},{\"display\":\"dqw\",\"value\":\"dqw\"}]', 128),
('vi-2', 0, '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"wdwqd\",\"value\":\"wdwqd\"},{\"display\":\"wd\",\"value\":\"wd\"},{\"display\":\"wd w\",\"value\":\"wd w\"},{\"display\":\"dqw\",\"value\":\"dqw\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"qw wd\",\"value\":\"qw wd\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"wq\",\"value\":\"wq\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"d\",\"value\":\"d\"},{\"display\":\"qwdqw\",\"value\":\"qwdqw\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"s asd\",\"value\":\"s asd\"},{\"display\":\"asc\",\"value\":\"asc\"},{\"display\":\"sfdsv\",\"value\":\"sfdsv\"},{\"display\":\"dsv ds\",\"value\":\"dsv ds\"},{\"display\":\"dscsdc\",\"value\":\"dscsdc\"},{\"display\":\"sdc\",\"value\":\"sdc\"},{\"display\":\"ds\",\"value\":\"ds\"},{\"display\":\"cs\",\"value\":\"cs\"},{\"display\":\"as\",\"value\":\"as\"},{\"display\":\"ascasc\",\"value\":\"ascasc\"},{\"display\":\"ascasc asc\",\"value\":\"ascasc asc\"},{\"display\":\"asc ascsaqw\",\"value\":\"asc ascsaqw\"}]', 129),
('vi-1', 0, '[{\"display\":\"sads\",\"value\":\"sads\"},{\"display\":\"asd\",\"value\":\"asd\"},{\"display\":\"ad\",\"value\":\"ad\"},{\"display\":\"asd qwd\",\"value\":\"asd qwd\"},{\"display\":\"d\",\"value\":\"d\"},{\"display\":\"as qwe\",\"value\":\"as qwe\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"awd\",\"value\":\"awd\"},{\"display\":\"as\",\"value\":\"as\"},{\"display\":\"dsa q\",\"value\":\"dsa q\"},{\"display\":\"wew\",\"value\":\"wew\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"wd w\",\"value\":\"wd w\"},{\"display\":\"dwd\",\"value\":\"dwd\"},{\"display\":\"asd qw\",\"value\":\"asd qw\"},{\"display\":\"qw dwq\",\"value\":\"qw dwq\"},{\"display\":\"wd qwd\",\"value\":\"wd qwd\"},{\"display\":\"wqd qwd\",\"value\":\"wqd qwd\"},{\"display\":\"qdwqw\",\"value\":\"qdwqw\"}]', 130),
('vi-2', 0, '[{\"display\":\"dqsd\",\"value\":\"dqsd\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"dqw\",\"value\":\"dqw\"},{\"display\":\"dqwd\",\"value\":\"dqwd\"},{\"display\":\"wd qwd\",\"value\":\"wd qwd\"},{\"display\":\"wd\",\"value\":\"wd\"},{\"display\":\"qqw\",\"value\":\"qqw\"},{\"display\":\"qwdwqd\",\"value\":\"qwdwqd\"},{\"display\":\"wq qw\",\"value\":\"wq qw\"},{\"display\":\"dwd\",\"value\":\"dwd\"},{\"display\":\"dwqqwdqw\",\"value\":\"dwqqwdqw\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"qwdqwdq\",\"value\":\"qwdqwdq\"},{\"display\":\"dqwdqw\",\"value\":\"dqwdqw\"},{\"display\":\"w wqd\",\"value\":\"w wqd\"},{\"display\":\"qwdwd\",\"value\":\"qwdwd\"},{\"display\":\"wqdwqeq\",\"value\":\"wqdwqeq\"},{\"display\":\"wqwd qwd\",\"value\":\"wqwd qwd\"},{\"display\":\"qwdqwdqwd\",\"value\":\"qwdqwdqwd\"},{\"display\":\"wdqwd\",\"value\":\"wdqwd\"},{\"display\":\"eqw\",\"value\":\"eqw\"},{\"display\":\"wqdwqdqwd\",\"value\":\"wqdwqdqwd\"},{\"display\":\"wqd qeqwd\",\"value\":\"wqd qeqwd\"},{\"display\":\"wdwqdqw\",\"value\":\"wdwqdqw\"}]', 131),
('vi-1', 0, '[{\"display\":\"sadas\",\"value\":\"sadas\"},{\"display\":\"sad\",\"value\":\"sad\"}]', 132),
('vi-1', 0, '[{\"display\":\"sadsa\",\"value\":\"sadsa\"},{\"display\":\"asd\",\"value\":\"asd\"}]', 133),
('vi-1', 0, '[{\"display\":\"ada\",\"value\":\"ada\"},{\"display\":\"as\",\"value\":\"as\"},{\"display\":\"qwe qw\",\"value\":\"qwe qw\"},{\"display\":\"dwq\",\"value\":\"dwq\"},{\"display\":\"wq\",\"value\":\"wq\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"qw2e\",\"value\":\"qw2e\"},{\"display\":\"d 2e\",\"value\":\"d 2e\"},{\"display\":\"q\",\"value\":\"q\"},{\"display\":\"de\",\"value\":\"de\"},{\"display\":\"wd3e\",\"value\":\"wd3e\"},{\"display\":\"32q\",\"value\":\"32q\"},{\"display\":\"3r\",\"value\":\"3r\"},{\"display\":\"32\",\"value\":\"32\"},{\"display\":\"eqwd\",\"value\":\"eqwd\"},{\"display\":\"d\",\"value\":\"d\"},{\"display\":\"q32we\",\"value\":\"q32we\"},{\"display\":\"fewd\",\"value\":\"fewd\"}]', 134),
('vi-2', 0, '[{\"display\":\"3asd\",\"value\":\"3asd\"},{\"display\":\"3ewd\",\"value\":\"3ewd\"},{\"display\":\"3eqw\",\"value\":\"3eqw\"},{\"display\":\"e qw\",\"value\":\"e qw\"},{\"display\":\"q\",\"value\":\"q\"},{\"display\":\"dqwd q\",\"value\":\"dqwd q\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"3rdw\",\"value\":\"3rdw\"},{\"display\":\"3\",\"value\":\"3\"},{\"display\":\"dw\",\"value\":\"dw\"},{\"display\":\"d 3ew\",\"value\":\"d 3ew\"},{\"display\":\"qd\",\"value\":\"qd\"},{\"display\":\"q3eq\",\"value\":\"q3eq\"},{\"display\":\"w d qw\",\"value\":\"w d qw\"},{\"display\":\"d3\",\"value\":\"d3\"},{\"display\":\"ew\",\"value\":\"ew\"},{\"display\":\"d qw\",\"value\":\"d qw\"},{\"display\":\"3q\",\"value\":\"3q\"},{\"display\":\"ewd\",\"value\":\"ewd\"},{\"display\":\"3e\",\"value\":\"3e\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"d\",\"value\":\"d\"},{\"display\":\"qw32\",\"value\":\"qw32\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"32\",\"value\":\"32\"},{\"display\":\"wd\",\"value\":\"wd\"},{\"display\":\"wqwd\",\"value\":\"wqwd\"},{\"display\":\"dd\",\"value\":\"dd\"},{\"display\":\"qwd3e\",\"value\":\"qwd3e\"},{\"display\":\"qewd qwd\",\"value\":\"qewd qwd\"},{\"display\":\"qwdqwd\",\"value\":\"qwdqwd\"},{\"display\":\"wd3eqe\",\"value\":\"wd3eqe\"},{\"display\":\"3e3qeqwd\",\"value\":\"3e3qeqwd\"},{\"display\":\"e3\",\"value\":\"e3\"},{\"display\":\"qwe\",\"value\":\"qwe\"},{\"display\":\"dqw\",\"value\":\"dqw\"},{\"display\":\"fe\",\"value\":\"fe\"},{\"display\":\"r3\",\"value\":\"r3\"},{\"display\":\"2qw\",\"value\":\"2qw\"},{\"display\":\"dddw q\",\"value\":\"dddw q\"},{\"display\":\"eqwd\",\"value\":\"eqwd\"},{\"display\":\"r3qwd\",\"value\":\"r3qwd\"},{\"display\":\"qeqwwq\",\"value\":\"qeqwwq\"},{\"display\":\"eqwdwqd\",\"value\":\"eqwdwqd\"},{\"display\":\"3eqweqwd\",\"value\":\"3eqweqwd\"},{\"display\":\"wqwdqwd\",\"value\":\"wqwdqwd\"},{\"display\":\"wdq3e\",\"value\":\"wdq3e\"},{\"display\":\"wqd2eqwd\",\"value\":\"wqd2eqwd\"},{\"display\":\"dwqd\",\"value\":\"dwqd\"},{\"display\":\"qdqwcqwdqw\",\"value\":\"qdqwcqwdqw\"}]', 135),
('vi-3', 0, '[{\"display\":\"wdwqd\",\"value\":\"wdwqd\"},{\"display\":\"qwd2e\",\"value\":\"qwd2e\"},{\"display\":\"qwd\",\"value\":\"qwd\"},{\"display\":\"2e\",\"value\":\"2e\"},{\"display\":\"qwe\",\"value\":\"qwe\"}]', 136),
('mo-1', 0, '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"sas\",\"value\":\"sas\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"wq\",\"value\":\"wq\"},{\"display\":\"d a\",\"value\":\"d a\"},{\"display\":\"sd as\",\"value\":\"sd as\"},{\"display\":\"d wq\",\"value\":\"d wq\"},{\"display\":\"c qw\",\"value\":\"c qw\"},{\"display\":\"qc\",\"value\":\"qc\"},{\"display\":\"qwc\",\"value\":\"qwc\"},{\"display\":\"w\",\"value\":\"w\"},{\"display\":\"d q\",\"value\":\"d q\"},{\"display\":\"wd\",\"value\":\"wd\"},{\"display\":\"ad\",\"value\":\"ad\"},{\"display\":\"wd q\",\"value\":\"wd q\"},{\"display\":\"w qw\",\"value\":\"w qw\"},{\"display\":\"wd wq\",\"value\":\"wd wq\"},{\"display\":\"dwd\",\"value\":\"dwd\"},{\"display\":\"qwd qw\",\"value\":\"qwd qw\"},{\"display\":\"d wqdqwd\",\"value\":\"d wqdqwd\"}]', 137),
('mo-1', 0, '[{\"display\":\"ds\",\"value\":\"ds\"},{\"display\":\"dsf s\",\"value\":\"dsf s\"},{\"display\":\"f sf\",\"value\":\"f sf\"},{\"display\":\"ew\",\"value\":\"ew\"},{\"display\":\"e ew\",\"value\":\"e ew\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"ef e\",\"value\":\"ef e\"},{\"display\":\"fs\",\"value\":\"fs\"},{\"display\":\"ew ew\",\"value\":\"ew ew\"},{\"display\":\"ef\",\"value\":\"ef\"},{\"display\":\"ew ewf\",\"value\":\"ew ewf\"},{\"display\":\"wf ef\",\"value\":\"wf ef\"},{\"display\":\"ewf e\",\"value\":\"ewf e\"},{\"display\":\"ew e\",\"value\":\"ew e\"},{\"display\":\"f ef\",\"value\":\"f ef\"},{\"display\":\"ewfew\",\"value\":\"ewfew\"},{\"display\":\"fewf ef e\",\"value\":\"fewf ef e\"},{\"display\":\"fe wfeww\",\"value\":\"fe wfeww\"},{\"display\":\"ewfe\",\"value\":\"ewfe\"}]', 138),
('mo-2', 0, '\"\"', 139),
('mo-3', 0, '[{\"display\":\"ewe\",\"value\":\"ewe\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"4\",\"value\":\"4\"},{\"display\":\"tew\",\"value\":\"tew\"},{\"display\":\"ds\",\"value\":\"ds\"},{\"display\":\"4e\",\"value\":\"4e\"},{\"display\":\"s\",\"value\":\"s\"},{\"display\":\"ef\",\"value\":\"ef\"},{\"display\":\"vds\",\"value\":\"vds\"},{\"display\":\"vs\",\"value\":\"vs\"},{\"display\":\"f\",\"value\":\"f\"},{\"display\":\"efe\",\"value\":\"efe\"},{\"display\":\"few\",\"value\":\"few\"},{\"display\":\"ewf\",\"value\":\"ewf\"},{\"display\":\"4tes\",\"value\":\"4tes\"},{\"display\":\"ew\",\"value\":\"ew\"},{\"display\":\"eww\",\"value\":\"eww\"},{\"display\":\"efef\",\"value\":\"efef\"},{\"display\":\"ewffewf\",\"value\":\"ewffewf\"},{\"display\":\"wefewfew\",\"value\":\"wefewfew\"},{\"display\":\"efefew\",\"value\":\"efefew\"},{\"display\":\"efew\",\"value\":\"efew\"},{\"display\":\"fewf\",\"value\":\"fewf\"},{\"display\":\"ewf4\",\"value\":\"ewf4\"},{\"display\":\"efwew\",\"value\":\"efwew\"}]', 140),
('mo-4', 0, '[{\"display\":\"fwfqw\",\"value\":\"fwfqw\"},{\"display\":\"q\",\"value\":\"q\"},{\"display\":\"wqdqwd\",\"value\":\"wqdqwd\"},{\"display\":\"qw qw\",\"value\":\"qw qw\"},{\"display\":\"dwqd\",\"value\":\"dwqd\"},{\"display\":\"wd\",\"value\":\"wd\"},{\"display\":\"qwdqw\",\"value\":\"qwdqw\"},{\"display\":\"d qwd\",\"value\":\"d qwd\"},{\"display\":\"qwd qw eq2\",\"value\":\"qwd qw eq2\"},{\"display\":\"qe\",\"value\":\"qe\"},{\"display\":\"2e\",\"value\":\"2e\"},{\"display\":\"22\",\"value\":\"22\"},{\"display\":\"eqw d\",\"value\":\"eqw d\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"qwdwqd\",\"value\":\"qwdwqd\"},{\"display\":\"wqdqw 3r3\",\"value\":\"wqdqw 3r3\"},{\"display\":\"q d\",\"value\":\"q d\"},{\"display\":\"32\",\"value\":\"32\"},{\"display\":\"2qwdqw\",\"value\":\"2qwdqw\"},{\"display\":\"q3r\",\"value\":\"q3r\"},{\"display\":\"qrqwdqwdwq\",\"value\":\"qrqwdqwdwq\"},{\"display\":\"qqr3r3\",\"value\":\"qqr3r3\"},{\"display\":\"q3rqwfwqdwd\",\"value\":\"q3rqwfwqdwd\"},{\"display\":\"wqdwd\",\"value\":\"wqdwd\"},{\"display\":\"qwwwq\",\"value\":\"qwwwq\"}]', 141),
('c1-1', 0, '\"\"', 142),
('c1-2', 0, '\"\"', 143),
('c1-3', 0, '\"\"', 144),
('c1-4', 0, '\"\"', 145),
('c1-5', 0, '\"\"', 146),
('c1-6', 0, '\"\"', 147),
('c1-7', 0, '\"\"', 148),
('c1-8', 0, '\"\"', 149),
('c1-9', 0, '\"\"', 150),
('bg-1', 0, '\"\"', 151),
('bg-2', 0, '\"\"', 152),
('bg-3', 0, '\"\"', 153),
('bg-4', 0, '\"\"', 154),
('bg-5', 0, '\"\"', 155),
('bg-6', 0, '\"\"', 156),
('bg-7', 0, '\"\"', 157),
('bg-8', 0, '\"\"', 158),
('bg-9', 0, '\"\"', 159),
('mo-1', 0, '[{\"display\":\"dsfd\",\"value\":\"dsfd\"},{\"display\":\"dfdf\",\"value\":\"dfdf\"},{\"display\":\"ewef\",\"value\":\"ewef\"},{\"display\":\"ef\",\"value\":\"ef\"},{\"display\":\"c\",\"value\":\"c\"},{\"display\":\"ds\",\"value\":\"ds\"},{\"display\":\"dsds\",\"value\":\"dsds\"},{\"display\":\"d\",\"value\":\"d\"},{\"display\":\"s\",\"value\":\"s\"},{\"display\":\"sd\",\"value\":\"sd\"},{\"display\":\"asd\",\"value\":\"asd\"},{\"display\":\"wd\",\"value\":\"wd\"},{\"display\":\"ewf\",\"value\":\"ewf\"},{\"display\":\"efe\",\"value\":\"efe\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"sc\",\"value\":\"sc\"},{\"display\":\"ce\",\"value\":\"ce\"},{\"display\":\"fef\",\"value\":\"fef\"},{\"display\":\"f e\",\"value\":\"f e\"},{\"display\":\"f\",\"value\":\"f\"},{\"display\":\"dcd\",\"value\":\"dcd\"},{\"display\":\"vds\",\"value\":\"vds\"},{\"display\":\"fewf\",\"value\":\"fewf\"},{\"display\":\"ewf e\",\"value\":\"ewf e\"},{\"display\":\"fe\",\"value\":\"fe\"},{\"display\":\"wf e\",\"value\":\"wf e\"},{\"display\":\"e e\",\"value\":\"e e\"},{\"display\":\"efc ef wfewf\",\"value\":\"efc ef wfewf\"},{\"display\":\"efw efe 4r\",\"value\":\"efw efe 4r\"},{\"display\":\"fewf ef\",\"value\":\"fewf ef\"},{\"display\":\"ef 3r\",\"value\":\"ef 3r\"},{\"display\":\"df f3r\",\"value\":\"df f3r\"},{\"display\":\"ef d we 3r\",\"value\":\"ef d we 3r\"},{\"display\":\"sdf g\",\"value\":\"sdf g\"},{\"display\":\"ff 4r a\",\"value\":\"ff 4r a\"},{\"display\":\"efewfwef\",\"value\":\"efewfwef\"},{\"display\":\"ds ewf e\",\"value\":\"ds ewf e\"},{\"display\":\"fsddsds3rr\",\"value\":\"fsddsds3rr\"},{\"display\":\"ewef eewf\",\"value\":\"ewef eewf\"},{\"display\":\"3r3r\",\"value\":\"3r3r\"},{\"display\":\"efewef\",\"value\":\"efewef\"},{\"display\":\"r32r3\",\"value\":\"r32r3\"},{\"display\":\"ddd\",\"value\":\"ddd\"},{\"display\":\"3efef\",\"value\":\"3efef\"},{\"display\":\"efef\",\"value\":\"efef\"}]', 160),
('mo-2', 0, '[{\"display\":\"ewf\",\"value\":\"ewf\"},{\"display\":\"ewf3r\",\"value\":\"ewf3r\"},{\"display\":\"esdf\",\"value\":\"esdf\"},{\"display\":\"3re\",\"value\":\"3re\"},{\"display\":\"f ewf\",\"value\":\"f ewf\"},{\"display\":\"r\",\"value\":\"r\"},{\"display\":\"f\",\"value\":\"f\"},{\"display\":\"df\",\"value\":\"df\"},{\"display\":\"f ds\",\"value\":\"f ds\"},{\"display\":\"c 3r\",\"value\":\"c 3r\"},{\"display\":\"ef\",\"value\":\"ef\"},{\"display\":\"fe e\",\"value\":\"fe e\"},{\"display\":\"w4r\",\"value\":\"w4r\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"f e\",\"value\":\"f e\"},{\"display\":\"f3\",\"value\":\"f3\"},{\"display\":\"r e\",\"value\":\"r e\"}]', 161),
('mo-3', 0, '[{\"display\":\"f d\",\"value\":\"f d\"},{\"display\":\"fe\",\"value\":\"fe\"},{\"display\":\"f\",\"value\":\"f\"},{\"display\":\"ewf\",\"value\":\"ewf\"},{\"display\":\"ef\",\"value\":\"ef\"},{\"display\":\"e\",\"value\":\"e\"},{\"display\":\"f ew\",\"value\":\"f ew\"},{\"display\":\"f w\",\"value\":\"f w\"},{\"display\":\"ef e\",\"value\":\"ef e\"}]', 162),
('mo-4', 0, '[{\"display\":\"sadsa\",\"value\":\"sadsa\"},{\"display\":\"sdsa\",\"value\":\"sdsa\"},{\"display\":\"dasd\",\"value\":\"dasd\"},{\"display\":\"sad\",\"value\":\"sad\"}]', 163),
('mul-1', 0, '[{\"display\":\"dsf\",\"value\":\"dsf\"},{\"display\":\"df\",\"value\":\"df\"},{\"display\":\"ds\",\"value\":\"ds\"},{\"display\":\"d dfdsfds\",\"value\":\"d dfdsfds\"},{\"display\":\"dsf ewf\",\"value\":\"dsf ewf\"},{\"display\":\"ew r\",\"value\":\"ew r\"}]', 164),
('mul-2', 0, '[{\"display\":\"sada\",\"value\":\"sada\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"qwd qwd\",\"value\":\"qwd qwd\"},{\"display\":\"qwd dwq\",\"value\":\"qwd dwq\"},{\"display\":\"wqd qwd\",\"value\":\"wqd qwd\"},{\"display\":\"qwd wq\",\"value\":\"qwd wq\"},{\"display\":\"d wd\",\"value\":\"d wd\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"wqd wqd\",\"value\":\"wqd wqd\"}]', 165),
('bg-1', 0, '[{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"qw\",\"value\":\"qw\"},{\"display\":\"wqd\",\"value\":\"wqd\"},{\"display\":\"wd\",\"value\":\"wd\"},{\"display\":\"wqdqw\",\"value\":\"wqdqw\"},{\"display\":\"dw qd\",\"value\":\"dw qd\"},{\"display\":\"qwdwq\",\"value\":\"qwdwq\"},{\"display\":\"dwq\",\"value\":\"dwq\"},{\"display\":\"d\",\"value\":\"d\"},{\"display\":\"wqdwqdq\",\"value\":\"wqdwqdq\"},{\"display\":\"dqwd\",\"value\":\"dqwd\"},{\"display\":\"wdwd\",\"value\":\"wdwd\"},{\"display\":\"qwd wqd\",\"value\":\"qwd wqd\"}]', 166),
('bg-2', 0, '\"\"', 167),
('mul-1', 0, '[{\"display\":\"sa\",\"value\":\"sa\"},{\"display\":\"a\",\"value\":\"a\"},{\"display\":\"ad\",\"value\":\"ad\"},{\"display\":\"s\",\"value\":\"s\"}]', 168),
('mul-1', 0, '[{\"display\":\"saas\",\"value\":\"saas\"},{\"display\":\"sad\",\"value\":\"sad\"},{\"display\":\"as\",\"value\":\"as\"},{\"display\":\"sas\",\"value\":\"sas\"},{\"display\":\"asa\",\"value\":\"asa\"},{\"display\":\"as sa\",\"value\":\"as sa\"},{\"display\":\"sa\",\"value\":\"sa\"},{\"display\":\"ss\",\"value\":\"ss\"},{\"display\":\"s\",\"value\":\"s\"}]', 169),
('mul-1', 0, '[{\"display\":\"sa\",\"value\":\"sa\"},{\"display\":\"sa sa\",\"value\":\"sa sa\"},{\"display\":\"as w\",\"value\":\"as w\"},{\"display\":\"s\",\"value\":\"s\"},{\"display\":\"ac a\",\"value\":\"ac a\"},{\"display\":\"a\",\"value\":\"a\"},{\"display\":\"sa as\",\"value\":\"sa as\"},{\"display\":\"aw\",\"value\":\"aw\"},{\"display\":\"a sa\",\"value\":\"a sa\"},{\"display\":\"wa\",\"value\":\"wa\"},{\"display\":\"sc\",\"value\":\"sc\"},{\"display\":\"as\",\"value\":\"as\"}]', 170);

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
(1, '', 26, 'Pakistani', '', '', 'female', '4', '5', '5'),
(2, '', 25, 'Pakistani', '', '', 'male', '3', '5', '5'),
(3, '', 22, 'Afghan', '', '', 'female', '4', '3', '4'),
(4, '', 22, 'Åland Island', '', '', 'male', '4', '5', '5'),
(5, '', 22, 'Åland Island', '', '', 'other', '3', '2', '3'),
(6, '', 22, 'Albanian', '', '', 'other', '4', '2', '4');

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
(0, 36, 0, NULL, '{\"id_8\":\"6\",\"id_2\":\"5\",\"id_21\":\"5\",\"id_22\":\"4\",\"id_3\":\"4\",\"id_7\":\"5\",\"id_6\":\"4\",\"id_19\":\"5\",\"id_18\":\"4\",\"id_11\":\"5\",\"id_12\":\"4\",\"id_16\":\"5\",\"id_15\":\"4\",\"id_20\":\"3\",\"id_17\":\"4\",\"id_10\":\"3\",\"id_9\":\"4\",\"id_5\":\"3\",\"id_4\":\"4\",\"id_13\":\"3\",\"id_14\":\"4\",\"id_1\":\"4\"}', '{\"Instrested\":\"1\",\"Distressed\":\"3\",\"Excited\":\"2\",\"Upset\":\"3\",\"Strong\":\"3\",\"Guilty\":\"1\",\"Scared\":\"3\",\"Hostile\":\"1\",\"Enthusiastic\":\"3\",\"Proud\":\"1\",\"Irritable\":\"1\",\"Alert\":\"1\",\"Ashamed\":\"1\",\"Nervous\":\"1\",\"Inspired\":\"1\",\"Determined\":\"1\",\"Attentive\":\"1\",\"Jittery\":\"1\",\"Active\":\"1\",\"Afraid\":\"1\"}', '{\"Player_17\":\"1\",\"Socialiser_24\":\"2\",\"Disruptor_8\":\"1\",\"Socialiser_21\":\"2\",\"Disruptor_6\":\"1\",\"Socialiser_23\":\"3\",\"Philantropist_13\":\"1\",\"Philantropist_16\":\"2\",\"Free Spirit_11\":\"1\",\"Player_18\":\"2\",\"Achiever_2\":\"1\",\"Disruptor_7\":\"2\",\"Achiever_4\":\"1\",\"Player_20\":\"1\",\"Achiever_1\":\"2\",\"Free Spirit_10\":\"1\",\"Disruptor_5\":\"2\",\"Achiever_3\":\"1\",\"Philantropist_15\":\"2\",\"Free Spirit_12\":\"1\",\"Philantropist_14\":\"2\",\"Socialiser_22\":\"1\",\"Free Spirit_9\":\"1\",\"Player_19\":\"2\"}', '{\"CO_7\":\"2\",\"UF_12\":\"2\",\"TT_18\":\"3\",\"CO_10\":\"3\",\"MAA_1\":\"3\",\"TT_16\":\"3\",\"AE_24\":\"3\",\"AE_26\":\"3\",\"CO_8\":\"3\",\"CN_20\":\"2\",\"CG_4\":\"2\",\"CG_5\":\"2\",\"CS_13\":\"3\",\"SC_21\":\"3\",\"AE_25\":\"2\",\"UF_11\":\"3\",\"SC_22\":\"2\",\"CS_15\":\"1\",\"CN_19\":\"2\",\"TT_17\":\"1\",\"CO_9\":\"2\",\"SC_23\":\"1\",\"CS_14\":\"2\",\"MAA_2\":\"1\",\"MAA_3\":\"2\",\"CG_6\":\"2\"}'),
(1, 60, 11, NULL, '{\"id_12\":\"1\",\"id_20\":\"2\",\"id_15\":\"1\",\"id_18\":\"2\",\"id_4\":\"1\",\"id_19\":\"2\",\"id_8\":\"1\",\"id_9\":\"2\",\"id_13\":\"1\",\"id_7\":\"2\",\"id_17\":\"1\",\"id_14\":\"1\",\"id_2\":\"2\",\"id_22\":\"1\",\"id_6\":\"2\",\"id_21\":\"1\",\"id_11\":\"2\",\"id_16\":\"1\",\"id_5\":\"2\",\"id_10\":\"1\",\"id_1\":\"2\",\"id_3\":\"1\"}', '{\"Instrested\":\"1\",\"Distressed\":\"1\",\"Excited\":\"1\",\"Upset\":\"1\",\"Strong\":\"1\",\"Scared\":\"1\",\"Guilty\":\"1\",\"Hostile\":\"1\",\"Enthusiastic\":\"1\",\"Proud\":\"1\",\"Irritable\":\"1\",\"Alert\":\"1\",\"Ashamed\":\"1\",\"Inspired\":\"1\",\"Nervous\":\"1\",\"Determined\":\"1\",\"Attentive\":\"1\",\"Jittery\":\"1\",\"Active\":\"1\",\"Afraid\":\"1\"}', '{\"Philantropist_13\":\"1\",\"Philantropist_16\":\"2\",\"Disruptor_6\":\"2\",\"Philantropist_15\":\"2\",\"Achiever_2\":\"2\",\"Free Spirit_11\":\"3\",\"Socialiser_22\":\"4\",\"Socialiser_23\":\"4\",\"Socialiser_24\":\"4\",\"Achiever_4\":\"3\",\"Socialiser_21\":\"3\",\"Player_20\":\"2\",\"Free Spirit_10\":\"1\",\"Player_19\":\"2\",\"Player_18\":\"3\",\"Free Spirit_9\":\"3\",\"Free Spirit_12\":\"2\",\"Achiever_3\":\"2\",\"Disruptor_7\":\"3\",\"Disruptor_5\":\"2\",\"Disruptor_8\":\"2\",\"Player_17\":\"3\",\"Philantropist_14\":\"3\",\"Achiever_1\":\"2\"}', '{\"AE_24\":\"1\",\"TT_16\":\"1\",\"CS_13\":\"1\",\"SC_21\":\"1\",\"UF_11\":\"1\",\"SC_23\":\"1\",\"AE_25\":\"1\",\"MAA_3\":\"1\",\"SC_22\":\"1\",\"TT_17\":\"1\",\"UF_12\":\"1\",\"CG_5\":\"1\",\"CG_6\":\"1\",\"CS_15\":\"1\",\"CG_4\":\"1\",\"CN_20\":\"1\",\"CN_19\":\"1\",\"CO_10\":\"1\",\"MAA_2\":\"4\",\"TT_18\":\"3\",\"CO_7\":\"3\",\"AE_26\":\"4\",\"CS_14\":\"3\",\"CO_8\":\"4\",\"CO_9\":\"3\",\"MAA_1\":\"3\"}'),
(2, 62, 15, NULL, '{\"id_3\":\"2\",\"id_6\":\"4\",\"id_17\":\"5\",\"id_1\":\"4\",\"id_7\":\"4\",\"id_5\":\"3\",\"id_16\":\"3\",\"id_13\":\"4\",\"id_21\":\"4\",\"id_19\":\"3\",\"id_8\":\"4\",\"id_11\":\"4\",\"id_2\":\"3\",\"id_18\":\"4\",\"id_9\":\"3\",\"id_4\":\"4\",\"id_12\":\"4\",\"id_15\":\"6\",\"id_10\":\"6\",\"id_22\":\"3\",\"id_20\":\"5\",\"id_14\":\"3\"}', '{\"Instrested\":\"1\",\"Distressed\":\"2\",\"Excited\":\"2\",\"Upset\":\"1\",\"Guilty\":\"2\",\"Scared\":\"1\",\"Enthusiastic\":\"2\",\"Hostile\":\"3\",\"Proud\":\"3\",\"Irritable\":\"2\",\"Alert\":\"3\",\"Ashamed\":\"3\",\"Inspired\":\"2\",\"Nervous\":\"3\",\"Determined\":\"2\",\"Attentive\":\"4\",\"Jittery\":\"5\",\"Active\":\"5\",\"Afraid\":\"4\",\"Strong\":\"2\"}', '{\"Player_20\":\"1\",\"Achiever_3\":\"1\",\"Philantropist_16\":\"2\",\"Philantropist_15\":\"4\",\"Disruptor_8\":\"5\",\"Disruptor_6\":\"4\",\"Achiever_2\":\"3\",\"Player_18\":\"3\",\"Free Spirit_12\":\"4\",\"Achiever_4\":\"3\",\"Free Spirit_11\":\"2\",\"Player_17\":\"1\",\"Socialiser_24\":\"3\",\"Achiever_1\":\"3\",\"Free Spirit_9\":\"2\",\"Socialiser_21\":\"1\",\"Player_19\":\"3\",\"Socialiser_23\":\"3\",\"Disruptor_5\":\"2\",\"Philantropist_13\":\"3\",\"Disruptor_7\":\"3\",\"Free Spirit_10\":\"2\",\"Philantropist_14\":\"2\",\"Socialiser_22\":\"2\"}', '{\"CO_10\":\"1\",\"AE_24\":\"2\",\"CO_7\":\"2\",\"UF_11\":\"3\",\"AE_25\":\"2\",\"CG_5\":\"1\",\"AE_26\":\"2\",\"SC_22\":\"1\",\"CG_4\":\"2\",\"TT_18\":\"1\",\"CO_8\":\"2\",\"CO_9\":\"1\",\"TT_16\":\"2\",\"MAA_2\":\"1\",\"TT_17\":\"2\",\"CS_15\":\"1\",\"CN_20\":\"2\",\"SC_23\":\"1\",\"CS_14\":\"2\",\"MAA_1\":\"1\",\"SC_21\":\"4\",\"MAA_3\":\"4\",\"CG_6\":\"4\",\"CN_19\":\"3\",\"UF_12\":\"3\",\"CS_13\":\"2\"}'),
(3, 79, 3, NULL, NULL, NULL, '{\"Player_19\":\"1\",\"Free Spirit_10\":\"3\",\"Player_17\":\"4\",\"Free Spirit_12\":\"3\",\"Free Spirit_9\":\"4\",\"Achiever_3\":\"5\",\"Free Spirit_11\":\"4\",\"Philantropist_14\":\"3\",\"Philantropist_13\":\"4\",\"Disruptor_7\":\"5\",\"Achiever_2\":\"2\",\"Philantropist_16\":\"2\",\"Achiever_1\":\"4\",\"Player_20\":\"2\",\"Disruptor_5\":\"4\",\"Socialiser_23\":\"2\",\"Disruptor_6\":\"5\",\"Disruptor_8\":\"2\",\"Achiever_4\":\"5\",\"Player_18\":\"3\",\"Socialiser_24\":\"4\",\"Philantropist_15\":\"4\",\"Socialiser_22\":\"2\",\"Socialiser_21\":\"2\"}', ''),
(4, 41, 0, NULL, NULL, NULL, '{\"Free Spirit_11\":\"1\",\"Philantropist_14\":\"1\",\"Disruptor_5\":\"1\",\"Free Spirit_9\":\"1\",\"Disruptor_7\":\"1\",\"Philantropist_15\":\"1\",\"Socialiser_23\":\"2\",\"Disruptor_6\":\"2\",\"Socialiser_22\":\"1\",\"Player_17\":\"2\",\"Player_20\":\"1\",\"Philantropist_13\":\"3\",\"Achiever_2\":\"1\",\"Achiever_1\":\"3\",\"Free Spirit_10\":\"1\",\"Socialiser_21\":\"3\",\"Disruptor_8\":\"1\",\"Free Spirit_12\":\"3\",\"Player_18\":\"1\",\"Player_19\":\"3\",\"Philantropist_16\":\"1\",\"Achiever_4\":\"3\",\"Achiever_3\":\"1\",\"Socialiser_24\":\"3\"}', '{\"AE_26\":\"1\",\"CO_7\":\"1\",\"AE_25\":\"1\",\"UF_11\":\"1\",\"CG_4\":\"1\",\"CS_15\":\"1\",\"CG_5\":\"2\",\"SC_21\":\"1\",\"CO_9\":\"1\",\"TT_16\":\"2\",\"SC_22\":\"1\",\"CO_10\":\"2\",\"MAA_3\":\"1\",\"UF_12\":\"1\",\"CG_6\":\"2\",\"TT_18\":\"1\",\"TT_17\":\"3\",\"MAA_1\":\"1\",\"CO_8\":\"3\",\"MAA_2\":\"1\",\"CS_13\":\"1\",\"SC_23\":\"1\",\"CN_20\":\"1\",\"CS_14\":\"1\",\"AE_24\":\"1\",\"CN_19\":\"1\"}'),
(6, 47, NULL, NULL, NULL, NULL, '{\"Disruptor_5\":\"3\",\"Free Spirit_9\":\"2\",\"Player_19\":\"1\",\"Socialiser_24\":\"3\",\"Achiever_2\":\"1\",\"Disruptor_6\":\"4\",\"Free Spirit_11\":\"1\",\"Player_17\":\"4\",\"Free Spirit_12\":\"1\",\"Philantropist_14\":\"3\",\"Disruptor_8\":\"1\",\"Achiever_1\":\"3\",\"Philantropist_16\":\"1\",\"Player_18\":\"3\",\"Achiever_3\":\"1\",\"Socialiser_23\":\"3\",\"Player_20\":\"1\",\"Philantropist_15\":\"2\",\"Socialiser_22\":\"1\",\"Disruptor_7\":\"2\",\"Achiever_4\":\"1\",\"Philantropist_13\":\"2\",\"Socialiser_21\":\"1\",\"Free Spirit_10\":\"2\"}', '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;

--
-- AUTO_INCREMENT for table `player_survey_1_questions`
--
ALTER TABLE `player_survey_1_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
