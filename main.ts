namespace SpriteKind {
    export const Cursor = SpriteKind.create()
}
function ChooseCountryball () {
    scene.setBackgroundImage(assets.image`Yes`)
    BoliviaBall = sprites.create(assets.image`BoliviaBall`, SpriteKind.Player)
    PolandBall = sprites.create(assets.image`PolandBall`, SpriteKind.Player)
    USABall = sprites.create(assets.image`USABall`, SpriteKind.Player)
    BoliviaBall.setPosition(40, 60)
    PolandBall.setPosition(80, 60)
    USABall.setPosition(120, 60)
    MiniPoland = sprites.create(assets.image`MiniPoland`, SpriteKind.Cursor)
    controller.moveSprite(MiniPoland, 100, 100)
    MiniPoland.setPosition(10, 10)
}
function ClearSprites () {
    sprites.destroy(BoliviaBall)
    sprites.destroy(PolandBall)
    sprites.destroy(USABall)
}
function StartGame () {
    if (Domain == "bo") {
        BoliviaBall = sprites.create(assets.image`BoliviaBall`, SpriteKind.Player)
    } else if (Domain == "pl") {
        PolandBall = sprites.create(assets.image`PolandBall`, SpriteKind.Player)
    } else if (Domain == "us") {
        USABall = sprites.create(assets.image`USABall`, SpriteKind.Player)
    }
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Player, function (sprite, otherSprite) {
    level = 1
    if (Domain == "bo") {
        Domain = "bo"
        game.splash("You chose cannot into sea! (Bolivia)")
    } else if (Domain == "pl") {
        Domain = "pl"
        game.splash("You chose cannot into space! (Poland)")
    } else if (Domain == "us") {
        Domain = "us"
        game.splash("You chose cannot into socialism! (USA)")
    }
    ClearSprites()
})
let Domain = ""
let MiniPoland: Sprite = null
let USABall: Sprite = null
let PolandBall: Sprite = null
let BoliviaBall: Sprite = null
let level = 0
level = 0
scene.setBackgroundColor(1)
game.showLongText("\"Choose a Character\"", DialogLayout.Top)
ChooseCountryball()
