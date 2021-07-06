INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('User', 'User', 'user@mapin.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Admin', 'Admin', 'admin@mapin.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_categoria (nome) VALUES ('Linha Pesada');
INSERT INTO tb_categoria (nome) VALUES ('Utilitários');

INSERT INTO tb_marca (nome) VALUES ('Chevrolet');
INSERT INTO tb_marca (nome) VALUES ('Ford');
INSERT INTO tb_marca (nome) VALUES ('Volkswagen');
INSERT INTO tb_marca (nome) VALUES ('Fiat');
INSERT INTO tb_marca (nome) VALUES ('Scania');
INSERT INTO tb_marca (nome) VALUES ('Volvo');

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Mola', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Mola para caminhão e utilitários');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (1,3);
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (1,2);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (1,1);
INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (1,2);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Bucha', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Bucha para caminhão');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (2,5);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (2,1);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Porta C', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Porta para utilitários');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (3,6);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (3,2);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Porta IX', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Porta para caminhão');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (4,6);
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (4,1);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (4,1);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Bateria', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Bateria para caminhão e utilitários');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (5,3);
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (5,2);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (5,1);
INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (5,2);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Bateria XX', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Bateria para caminhão');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (6,4);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (6,1);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Kit Molas', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Kit Molas para caminhão');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (7,4);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (7,1);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Kit Carburador', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Kit Carburador para caminhão e utilitários');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (8,3);
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (8,2);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (8,1);
INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (8,2);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Kit Parafusos', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Kit Carburador para caminhão e utilitários');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (9,3);
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (9,2);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (9,1);
INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (9,2);

INSERT INTO tb_peca (nome, img_url, descricao) VALUES 
('Kit Parafusos XX', 'https://mapin-tropical.s3.sa-east-1.amazonaws.com/Posto+de+Molas+Tropical.jpg', 'Kit Carburador para caminhão e utilitários');
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (10,3);
INSERT INTO tb_peca_marca (peca_id, marca_id) VALUES (10,2);

INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (10,1);
INSERT INTO tb_peca_categoria (peca_id, categoria_id) VALUES (10,2);
