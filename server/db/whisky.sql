DROP TABLE whiskies;
DROP TABLE distilleries;
DROP TABLE regions;

CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE distilleries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    region_id INT REFERENCES regions(id) NOT NULL,
    lat DECIMAL(9,6) NOT NULL,
    long DECIMAL(9,6) NOT NULL,
    image_url VARCHAR(2083)
);

CREATE TABLE whiskies (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    distillery_id INT REFERENCES distilleries(id) NOT NULL,
    abv INT NOT NULL,
    image_url VARCHAR(2083)
);

INSERT INTO regions (name) VALUES ('Speyside');
INSERT INTO regions (name) VALUES ('Islay');
INSERT INTO regions (name) VALUES ('Lowland');
INSERT INTO regions (name) VALUES ('Highland');
INSERT INTO regions (name) VALUES ('Campbeltown');


INSERT INTO distilleries (name, region_id, lat, long) VALUES ('Glendronach', (SELECT id FROM regions WHERE name = 'Highland'), 57.485666, -2.625525);
INSERT INTO distilleries (name, region_id, lat, long) VALUES ('Auchentoshan', (SELECT id FROM regions WHERE name = 'Lowland'), 55.923093, -4.437519);
INSERT INTO distilleries (name, region_id, lat, long) VALUES ('Bowmore', (SELECT id FROM regions WHERE name = 'Islay'), 55.757033, -6.289624);

INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ('Glendronach Allardice 18yo', (SELECT id from distilleries WHERE name = 'Glendronach'), 46, 'https://img.thewhiskyexchange.com/900/grnob.18yov2.jpg');
INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ('Glendronach 12yo', (SELECT id from distilleries WHERE name = 'Glendronach'), 43, 'https://img.thewhiskyexchange.com/900/grnob.12yov4.jpg');
INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ('Glendronach Forgue 10yo', (SELECT id from distilleries WHERE name = 'Glendronach'), 43, 'https://media.nicks.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/l/glendronach-forgue-10yo.jpg');
INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ('Auchentoshan Three Wood', (SELECT id from distilleries WHERE name = 'Auchentoshan'), 43, 'https://images-na.ssl-images-amazon.com/images/I/71euv8keqlL._AC_SX466_.jpg');
INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ('Auchentoshan Virgin Oak', (SELECT id from distilleries WHERE name = 'Auchentoshan'), 46, 'https://img.thewhiskyexchange.com/900/aucob.non14.jpg');
INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ('Bowmore 12yo', (SELECT id from distilleries WHERE name = 'Bowmore'), 40, 'https://img.thewhiskyexchange.com/900/bowob.12yov10.jpg');
INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ('Bowmore 15yo', (SELECT id from distilleries WHERE name = 'Bowmore'), 43, 'https://img.thewhiskyexchange.com/900/bowob.15yov11.jpg');
INSERT INTO whiskies (name, distillery_id, abv, image_url) VALUES ('Bowmore No.1', (SELECT id from distilleries WHERE name = 'Bowmore'), 40, 'https://img.thewhiskyexchange.com/900/bowob.non68.jpg');