DROP DATABASE IF EXISTS lifeHacks_db;
CREATE DATABASE lifeHacks_db;

USE lifeHacks_db;
--
-- Table structure for table `subscribers`
--
CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `mail` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Dumping data for table `subscribers`
--
INSERT INTO `subscribers` (`id`, `name`, `mail`) VALUES
(1, 'John', 'john.doe@example.com'),
(2, 'Jane', 'jane.doe@example.com'),
(3, 'Mark', 'mark1212@example.com'),
(4, 'Jason', 'jason@example.com');
--
-- Indexes for dumped tables
--
--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;