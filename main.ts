input.onButtonPressed(Button.A, function () {
    if (sprite1.get(LedSpriteProperty.X) == sprite2.get(LedSpriteProperty.X)) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    sprite1 = game.createSprite(2, 2)
    sprite2 = game.createSprite(2, randint(3, 4))
    game.setScore(0)
})
let sprite2: game.LedSprite = null
let sprite1: game.LedSprite = null
sprite1 = game.createSprite(2, 2)
sprite2 = game.createSprite(2, randint(3, 4))
game.setScore(0)
basic.forever(function () {
    sprite1.set(LedSpriteProperty.X, randint(0, 4))
    sprite1.set(LedSpriteProperty.Y, randint(0, 1))
    sprite2.set(LedSpriteProperty.X, randint(0, 4))
    sprite2.set(LedSpriteProperty.Y, randint(3, 4))
    sprite1.move(1)
    basic.pause(1000)
    sprite1.ifOnEdgeBounce()
    sprite2.ifOnEdgeBounce()
})
