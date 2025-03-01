-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2025 at 12:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `store_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `user_name`, `product_id`, `product_name`, `created_at`) VALUES
(1, 12, 'Mimi', 1, 'Rose Bouquet', '2025-03-01 10:31:57'),
(2, 13, 'punin', 2, 'Tulip Delight', '2025-03-01 11:40:28'),
(3, 13, 'punin', 3, 'Elegant Lily Bouquet', '2025-03-01 11:41:37');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `detailedDescription` text NOT NULL,
  `instruction` text NOT NULL,
  `type` enum('bouquet','houseplant') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `stock` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `description`, `detailedDescription`, `instruction`, `type`, `price`, `created_at`, `updated_at`, `stock`) VALUES
(1, 'Rose Bouquet', '/uploads/Roses.jpg', 'A classic and timeless bouquet of fresh pink roses, perfect for expressing love and admiration.', 'This stunning bouquet features premium-quality pink roses, celebrated for their delicate beauty and enchanting fragrance. Roses symbolize love and appreciation, making this bouquet perfect for romantic gestures or special celebrations.', '𖹭  Care Instructions:  𖹭\r\n- Trim the stems at a 45-degree angle every two days to ensure better water absorption.\r\n- Replace the water daily, ensuring it is clean and fresh.\r\n- Keep the bouquet in a cool area, away from direct sunlight or drafts.\r\n\r\n𖹭  Replanting:  𖹭\r\nWhile cut roses cannot be replanted, you can propagate roses by taking a healthy stem and planting it in moist soil. Cover it with a plastic bottle to maintain humidity until roots develop, typically after 4–6 weeks.', 'bouquet', 25.00, '2025-02-17 20:33:33', '2025-02-24 19:29:33', 50),
(2, 'Tulip Delight', '/uploads/Tulip.jpg', 'A delightful bouquet of vibrant light pink tulips, perfect for brightening any room or occasion.', 'Tulips are one of the most cheerful and vibrant flowers, symbolizing deep love and perfect happiness. This bouquet brings a touch of spring to any space with its elegant pink petals and graceful stems.', '𖹭  Care Instructions:  𖹭\r\n- Trim stems diagonally before placing the tulips in a tall vase with cool water.\r\n- Add a teaspoon of sugar to the water to extend their freshness.\r\n- Tulips naturally bend toward light, so rotate the vase daily to maintain an even display.\r\n\r\n𖹭  Replanting:  𖹭 \r\nTulip bulbs can be replanted! After the flowers wilt, allow the leaves to yellow before removing the bulbs. Dry them and store them in a cool, dark place until the next planting season.', 'bouquet', 30.00, '2025-02-17 20:33:33', '2025-02-24 19:29:44', 20),
(3, 'Elegant Lily Bouquet', '/uploads/Lily.jpg', 'An elegant arrangement of pure white lilies, perfect for creating a sophisticated and serene atmosphere.', 'Lilies exude elegance and grace with their large, fragrant blooms. They symbolize purity, renewal, and refined beauty, making them ideal for weddings and formal occasions.', '𖹭  Care Instructions:  𖹭\r\n- Remove pollen stains from petals to prevent discoloration.\r\n- Change the water every two days and use flower food for prolonged freshness.\r\n- Keep the lilies away from pets, as they are toxic to cats and dogs.\r\n\r\n𖹭  Replanting:  𖹭\r\nLilies grow from bulbs, and while cut lilies cannot be replanted, the bulbs from a living plant can be reused. Store the bulbs in a cool area during dormancy and replant in well-drained soil for a stunning bloom next season.', 'bouquet', 35.00, '2025-02-17 20:33:33', '2025-02-24 19:30:13', 65),
(4, 'Peony Perfection', '/uploads/Peony.jpg', 'A lush bouquet of soft, romantic pink peonies, perfect for adding elegance and charm to any celebration.', 'Peonies are known for their lush, ruffled petals and sweet fragrance, making them a symbol of romance, prosperity, and good fortune. Their delicate yet luxurious blooms make them a favorite choice for weddings, anniversaries, and heartfelt gifts.', '𖹭  Care Instructions:  𖹭\r\n  - Trim stems at an angle and place in a vase with fresh, cool water.\r\n  - Remove any leaves that fall below the waterline to prevent bacteria buildup.\r\n  - Keep in a cool location away from direct sunlight for longer-lasting blooms.\r\n\r\n𖹭  Replanting:  𖹭\r\n  Peonies grow from tuberous roots rather than bulbs. While cut flowers cannot be replanted, peony plants can thrive in gardens. If you have a peony root, plant it in well-draining soil and provide plenty of sunlight for stunning blooms year after year.', 'bouquet', 40.00, '2025-02-17 20:33:33', '2025-02-24 19:30:25', 12),
(5, 'Cherry Blossom Charm', '/uploads/Cerry_Blossom.jpg', 'A graceful arrangement of delicate cherry blossoms, perfect for bringing tranquility and beauty to your space.', 'Cherry blossoms symbolize renewal, the fleeting nature of life, and the beauty of the present moment. Their soft pink petals and airy branches create an ethereal, dreamlike display that evokes the peaceful essence of spring.', '𖹭  Care Instructions:  𖹭 \r\n  - Place the stems in a vase with fresh water and change it daily.\r\n  - Trim the ends of the branches at an angle to improve water absorption.\r\n  - Keep away from direct heat and sunlight to maintain freshness.\r\n\r\n𖹭  Replanting:  𖹭\r\n  Cherry blossoms grow from trees, not bulbs. If you love cherry blossoms, consider planting a cherry tree in your garden for seasonal blooms. These trees require full sunlight and well-drained soil for optimal growth.', 'bouquet', 45.00, '2025-02-17 20:33:33', '2025-02-19 17:26:50', 0),
(6, 'Monstera Deliciosa', '/uploads/Monstera Deliciosa.jpg', 'A popular houseplant with stunning split leaves, adding a tropical vibe to any space.', 'Monstera Deliciosa, also known as the Swiss Cheese Plant, is a striking tropical houseplant recognized for its large, glossy, perforated leaves. Native to the rainforests of Central America, this plant thrives in warm, humid environments and can grow impressively large when given the right conditions. Its aerial roots help it climb and support its growth, making it a fantastic addition to indoor jungles. The Monstera is not just visually appealing; it also helps improve air quality by filtering toxins from the environment. While it is relatively low maintenance, providing proper care ensures lush and vibrant foliage.', '\r\n𖹭  Care Instructions:  𖹭\r\n  - Place in bright, indirect sunlight. Avoid direct sunlight as it can scorch the leaves.\r\n  - Water thoroughly when the top inch of soil feels dry. Overwatering can lead to root rot, so ensure proper drainage.\r\n  - Maintain humidity by misting the leaves occasionally or placing a humidifier nearby.\r\n  - Wipe leaves with a damp cloth to remove dust and enhance photosynthesis.\r\n  - Rotate the plant occasionally to promote even growth and prevent it from leaning toward one direction.\r\n  - If the plant gets too large, consider pruning back excess growth and using stakes or a moss pole for support.\r\n\r\n𖹭  Replanting:  𖹭\r\n  - Monstera can be propagated through stem cuttings. Cut just below an aerial root node, place in water until roots form, and then transfer to soil.\r\n  - When repotting, choose a pot slightly larger than the current one with good drainage to accommodate its growing root system.', 'houseplant', 50.00, '2025-02-17 20:33:33', '2025-02-24 19:30:43', 70),
(7, 'Pothos', '/uploads/Pothos.jpg', 'An easy-care, trailing plant that purifies the air and thrives in low light conditions.', 'Pothos, also known as Devil’s Ivy, is a resilient and fast-growing trailing plant, ideal for both beginners and seasoned plant owners. Its heart-shaped leaves come in a variety of shades, from solid green to variegated patterns of white, yellow, and light green. This plant is known for its air-purifying qualities, effectively removing toxins from the surrounding environment. It is highly adaptable and can thrive in a variety of conditions, making it one of the easiest plants to care for. Whether placed in a hanging pot or trained to climb, Pothos adds a refreshing and lively touch to any home or office.', '\r\n𖹭  Care Instructions:  𖹭\r\n  - Water when the soil feels dry to the touch. Pothos is forgiving and can tolerate occasional drought.\r\n  - Thrives in low to bright indirect light, making it a great choice for rooms with limited sunlight.\r\n  - Avoid direct sunlight, as it can scorch the leaves and cause them to lose their vibrant color.\r\n  - To promote bushy growth, trim the vines regularly. Cuttings can be propagated easily in water and transferred to soil once roots develop.\r\n  - Clean the leaves occasionally with a damp cloth to remove dust and allow better light absorption.\r\n\r\n𖹭  Replanting:  𖹭\r\n  - Pothos is one of the easiest plants to propagate. Simply cut a stem below a node, place it in water, and wait for roots to develop.\r\n  - When repotting, use well-draining soil and a pot with drainage holes to prevent water retention.\r\n  - Pothos can also be trained to grow along a trellis or wall for a decorative effect.', 'houseplant', 20.00, '2025-02-17 20:33:33', '2025-02-24 19:30:54', 55),
(8, 'Snake Plant', '/uploads/Snake Plant.jpg', 'A hardy, air-purifying plant that thrives on neglect, perfect for beginners.', 'The Snake Plant, also known as Sansevieria or Mother-in-Law’s Tongue, is a highly durable and resilient houseplant that can thrive under minimal care. Its upright, sword-like leaves feature striking green and yellow variegation, making it a stylish and modern addition to any space. This plant is renowned for its air-purifying abilities, as it efficiently filters toxins such as formaldehyde, benzene, and xylene from the air. Snake plants are particularly suited for bedrooms as they release oxygen at night, improving air quality. With its tolerance for neglect and low-light conditions, the Snake Plant is an excellent choice for busy individuals or those new to plant care.', '\r\n𖹭  Care Instructions:  𖹭\r\n  - Water only when the soil is completely dry, as the plant is highly susceptible to root rot.\r\n  - Prefers indirect sunlight but can also tolerate low-light environments, making it perfect for offices and dim rooms.\r\n  - Avoid overwatering; it is better to underwater than overwater.\r\n  - During winter months, reduce watering even further, as the plant enters a dormant phase.\r\n  - Wipe the leaves with a soft, damp cloth occasionally to remove dust and maintain their glossy appearance.\r\n  - Snake plants grow slowly but can be repotted every couple of years if the roots outgrow the pot.\r\n\r\n𖹭  Replanting:  𖹭\r\n  - Snake plants can be propagated through leaf cuttings or by dividing the root rhizomes.\r\n  - When repotting, use a well-draining potting mix, preferably a cactus or succulent blend.\r\n  - Choose a pot with drainage holes to prevent water accumulation.', 'houseplant', 35.00, '2025-02-17 20:33:33', '2025-02-24 19:31:04', 70),
(9, 'ZZ Plant', '/uploads/ZZ Plant.jpg', 'A low-maintenance, drought-resistant plant perfect for busy plant lovers.', 'The ZZ Plant (Zamioculcas zamiifolia) is a robust and virtually indestructible houseplant known for its waxy, deep green leaves and its ability to thrive in low-light conditions. It is a slow-growing plant that requires minimal attention, making it a popular choice for homes and offices. The ZZ Plant is highly drought-tolerant due to its rhizome-based root system, which stores water for extended periods. Additionally, it is known for its air-purifying properties, effectively removing airborne toxins. With its stylish, upright foliage and low-maintenance nature, the ZZ Plant is an excellent option for those seeking a hassle-free yet elegant houseplant.', '\r\n𖹭  Care Instructions:  𖹭\r\n  - Water sparingly, only when the soil is completely dry. Overwatering can lead to root rot.\r\n  - Tolerates low light but grows best in bright, indirect sunlight.\r\n  - Avoid placing in direct sunlight, as intense light can scorch the leaves.\r\n  - This plant thrives in average room humidity and does not require frequent misting.\r\n  - Clean the leaves occasionally with a damp cloth to maintain their shine and remove dust.\r\n  - If the plant starts leaning, rotate it occasionally to ensure even growth.\r\n\r\n𖹭  Replanting:  𖹭\r\n  - The ZZ Plant can be propagated by dividing the rhizomes or using leaf cuttings.\r\n  - When repotting, use a well-draining potting mix to prevent excess moisture retention.\r\n  - Since ZZ Plants grow slowly, repotting is only necessary every few years or when the roots have outgrown their container.', 'houseplant', 40.00, '2025-02-17 20:33:33', '2025-02-24 19:31:17', 5),
(11, 'Peperomia', '/uploads/1740454435624.jpg', 'A compact, low-maintenance plant with attractive foliage, perfect for indoor spaces.', 'Peperomia is a compact, low-maintenance houseplant known for its thick, waxy leaves and unique foliage patterns. Originating from tropical and subtropical regions, this plant is highly adaptable to indoor environments and thrives in moderate humidity. With its slow growth and non-invasive roots, Peperomia is an excellent choice for small spaces, tabletops, or office desks.', '𖹭  Care Instructions  𖹭\r\n- Water sparingly, allowing the top inch of soil to dry out before watering again. Overwatering can lead to root rot.\r\n- Thrives in bright, indirect light but can tolerate lower light conditions. Avoid prolonged exposure to direct sunlight, as it can scorch the leaves.\r\n- Prefers moderate to high humidity but adapts well to average indoor conditions. Misting is not necessary but can be done occasionally in dry environments.\r\n- Use well-draining soil, such as a mix containing peat and perlite, to prevent water retention.\r\n- Keep in a stable temperature range of 18-26°C (65-80°F) and away from cold drafts or sudden temperature fluctuations.\r\n- Wipe the leaves occasionally with a damp cloth to remove dust and maintain their glossy appearance.\r\n- If the plant starts growing unevenly, rotate it occasionally to promote balanced growth.\r\n\r\n𖹭  Replanting  𖹭 \r\n- Peperomia is slow-growing and does not require frequent repotting. Repot only when the roots outgrow the container, typically every 2-3 years.\r\n- When repotting, choose a pot with drainage holes and use a light, airy potting mix to prevent excessive moisture retention.\r\n- Can be propagated easily through leaf or stem cuttings placed in soil or water until roots develop.\r\n', 'houseplant', 24.00, '2025-02-25 03:33:55', '2025-02-25 04:44:12', 20);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('user','admin') NOT NULL DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `profile_picture` varchar(255) NOT NULL DEFAULT '/uploads/default_profile.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password_hash`, `role`, `created_at`, `updated_at`, `profile_picture`) VALUES
(2, 'Bob Smith', 'bobb', 'bob@example.com', '$2a$10$zHE46d9NrzijDouzow/cXeXprUXpljSPuEh/FT4.LFf9WIAe9DMSu', 'user', '2025-02-17 21:14:45', '2025-03-01 08:37:46', '/uploads/default_profile.jpg'),
(3, 'Charlie Brown', 'ccffhh', 'charlie@example.com', '$2a$10$1kkrhD4LhHeRSNdlVUSJg.nOfhGlEdPxwAsRu2zAahxYFIjWerqSG', 'user', '2025-02-17 21:14:45', '2025-03-01 08:37:35', '/uploads/default_profile.jpg'),
(4, 'David Lee', 'norttty', 'david@example.com', '$2a$10$Fj4DPHUBptP7UKkn6lV8rWTeG27cpQFx2UtgoRc.t6QLD4F45BQCa', 'user', '2025-02-17 21:14:45', '2025-03-01 08:37:26', '/uploads/default_profile.jpg'),
(10, 'punin', 'punini', 'punin@example.com', '$2b$10$CbWajV6OPLnvJ9Ykv9Uj0eoFlyMOmq6PBOIVHwF8cyiuhE4wFoc5.', 'user', '2025-03-01 04:42:21', '2025-03-01 08:36:56', '/uploads/default_profile.jpg'),
(12, 'Mimi', 'mimuna', 'alice@example.com', '$2b$10$fIDcb562xsF74CA/tkjBk.fU57/EEYqqP1VwVeuP49mcaZfE71B1q', 'admin', '2025-03-01 08:38:30', '2025-03-01 09:40:03', '/uploads/1740822003988.jpg'),
(13, 'punin', 'punpun', 'punini@example.com', '$2b$10$0aTvufgx/c4zhNGGZ7iF4utynaZoC2BXyPxXcHxz9MNooXFhhJmqW', 'user', '2025-03-01 11:39:50', '2025-03-01 11:39:50', '/uploads/default_profile.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
