# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tile.destroy_all
Tile.reset_pk_sequence
Level.destroy_all
Level.reset_pk_sequence
Score.destroy_all
Level.reset_pk_sequence

game = Level.create(name: "Game")

boo = Tile.create(name: "boo", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_boo.png", Level_id: 1)
coin = Tile.create(name: "coin", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_coin.png", Level_id: 1)
fire_flower = Tile.create(name: "fire_flower", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_fire_flower.png", Level_id: 1)

bowser = Tile.create(name: "bowser", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_bowser.png", Level_id: 1)
luigi = Tile.create(name: "coin", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_luigi.png", Level_id: 1)
bullet = Tile.create(name: "bullet", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_bullet.png", Level_id: 1)
red_mushroom = Tile.create(name: "red_mushroom", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_mushroom_red.png", Level_id: 1)
star = Tile.create(name: "star", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_star.png", Level_id: 1)
egg = Tile.create(name: "egg", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_yoshi_egg.png", Level_id: 1)

star_coin = Tile.create(name: "star_coin", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_star_coin.png", Level_id: 1)
propeller = Tile.create(name: "propeller", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_propeller_mushroom.png", Level_id: 1)
mario = Tile.create(name: "mario", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_mario.png", Level_id: 1)
ice_flower = Tile.create(name: "ice_flower", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_ice_flower.png", Level_id: 1)
peach = Tile.create(name: "peach", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_peach.png", Level_id: 1)
piranha = Tile.create(name: "piranha", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_piranha.png", Level_id: 1)
thwomp = Tile.create(name: "thwomp", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_thwomp.png", Level_id: 1)
green_mushroom = Tile.create(name: "green_mushroom", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_green_mushroom.png", Level_id: 1)
pow = Tile.create(name: "pow", image: "/Users/flatironschoolbrooklyn/MarioMemoryGame/mario_memory_api/tile_images/mario_pow_block.png", Level_id: 1)

Score.create(name: "Alina", number: 200, Level_id: 1)
Score.create(name: "Hope", number: 175, Level_id: 1)
Score.create(name: "Raq", number: 175, Level_id: 1)
