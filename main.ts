namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Player3 = SpriteKind.create()
    export const Player4 = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Player3, function (sprite) {
    myEnemy.follow(xxx, 25)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player2, function (sprite, otherSprite) {
    sprites.destroy(w)
})
sprites.onDestroyed(SpriteKind.Player4, function (sprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
})
info.onCountdownEnd(function () {
    if (info.player2.life() > 0) {
        game.gameOver(false)
    } else {
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player3, function (sprite, otherSprite) {
    sprites.destroy(ww)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player4, function (sprite, otherSprite) {
    sprites.destroy(xxx)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    myEnemy.follow(w, 25)
})
sprites.onDestroyed(SpriteKind.Player2, function (sprite) {
    myEnemy.follow(ww, 25)
})
let myEnemy: Sprite = null
let xxx: Sprite = null
let ww: Sprite = null
let w: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`niveau1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
w = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 8 8 8 8 8 8 e e f . . 
    . . f e 8 f f f f f f 8 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 8 8 8 8 8 8 f 4 e . . 
    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
    . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player2)
controller.player2.moveSprite(w)
tiles.placeOnRandomTile(w, assets.tile`myTile0`)
ww = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 5 5 f f f . . . . 
    . . . f f f 5 5 5 5 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 5 5 5 5 5 5 e e f . . 
    . . f e 5 f f f f f f 5 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 5 5 5 5 5 5 f 4 e . . 
    . . 4 d f 5 5 5 5 5 5 f d 4 . . 
    . . 4 4 f 5 5 5 5 5 5 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player3)
controller.player3.moveSprite(ww)
tiles.placeOnRandomTile(ww, assets.tile`myTile1`)
xxx = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 7 7 7 7 7 7 e e f . . 
    . . f e 7 f f f f f f 7 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 7 7 7 7 7 7 f 4 e . . 
    . . 4 d f 7 7 7 7 7 7 f d 4 . . 
    . . 4 4 f 7 7 7 7 7 7 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player4)
controller.player4.moveSprite(xxx)
tiles.placeOnRandomTile(xxx, assets.tile`myTile2`)
info.startCountdown(60)
myEnemy = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . f b 1 1 1 1 1 1 b f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . f d 1 1 1 1 1 1 1 1 d f . . 
    . . f d 1 1 1 1 1 1 1 1 d f . . 
    . . f d d d 1 1 1 1 d d d f . . 
    . . f b d b f d d f b d b f . . 
    . . f c d c f 1 1 f c d c f . . 
    . . . f b 1 1 1 1 1 1 b f . . . 
    . . f f f c d b 1 b d f f f f . 
    f c 1 1 1 c b f b f c 1 1 1 c f 
    f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
    f b f b f f f f f f b f b f b f 
    . . . . . f f f f f f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.follow(mySprite, 25)
