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
