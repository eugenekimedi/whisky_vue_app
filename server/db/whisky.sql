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
    abv INT NOT NULL
);

INSERT INTO regions (name) VALUES ('Speyside');
INSERT INTO regions (name) VALUES ('Islay');
INSERT INTO regions (name) VALUES ('Lowland');
INSERT INTO regions (name) VALUES ('Highland');
INSERT INTO regions (name) VALUES ('Campbeltown');


INSERT INTO distilleries (name, region_id, lat, long) VALUES ('Glendronach', (SELECT id FROM regions WHERE name = 'Highland'), 57.485666, -2.625525);
INSERT INTO distilleries (name, region_id, lat, long) VALUES ('Auchentoshan', (SELECT id FROM regions WHERE name = 'Lowland'), 55.923093, -4.437519);
INSERT INTO distilleries (name, region_id, lat, long) VALUES ('Bowmore', (SELECT id FROM regions WHERE name = 'Islay'), 55.757033, -6.289624);

INSERT INTO whiskies (name, distillery_id, abv) VALUES ('Glendronach Allardice 18yo', (SELECT id from distilleries WHERE name = 'Glendronach'), 46);
INSERT INTO whiskies (name, distillery_id, abv) VALUES ('Glendronach Revival 15yo', (SELECT id from distilleries WHERE name = 'Glendronach'), 46);
INSERT INTO whiskies (name, distillery_id, abv) VALUES ('Auchentoshan Three Wood', (SELECT id from distilleries WHERE name = 'Auchentoshan'), 43);
INSERT INTO whiskies (name, distillery_id, abv) VALUES ('Auchentoshan 18yo', (SELECT id from distilleries WHERE name = 'Auchentoshan'), 43);
INSERT INTO whiskies (name, distillery_id, abv) VALUES ('Bowmore 12yo', (SELECT id from distilleries WHERE name = 'Bowmore'), 40);
INSERT INTO whiskies (name, distillery_id, abv) VALUES ('Bowmore 15yo', (SELECT id from distilleries WHERE name = 'Bowmore'), 43);