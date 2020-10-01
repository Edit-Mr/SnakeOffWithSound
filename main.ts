input.onButtonPressed(Button.A, function () {
    if (可否按鍵 == 1) {
        蛇頭.turn(Direction.Right, 90)
        可否按鍵 = 0
        music.playTone(523, music.beat(BeatFraction.Quarter))
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (可否按鍵 == 1) {
        蛇頭.turn(Direction.Right, 90)
        可否按鍵 = 0
        music.playTone(523, music.beat(BeatFraction.Quarter))
    }
})
input.onButtonPressed(Button.B, function () {
    if (可否按鍵 == 1) {
        蛇頭.turn(Direction.Left, 90)
        可否按鍵 = 0
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (可否按鍵 == 1) {
        蛇頭.turn(Direction.Left, 90)
        可否按鍵 = 0
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
})
let 移動後 = 0
let 移動前 = 0
let 可否按鍵 = 0
let 蛇頭: game.LedSprite = null
music.playMelody("G C E G - E G - ", 300)
蛇頭 = game.createSprite(2, 2)
蛇頭.set(LedSpriteProperty.Brightness, 100)
let 水果 = game.createSprite(randint(0, 1), randint(0, 4))
水果.set(LedSpriteProperty.Brightness, 255)
let 速度 = 1000
可否按鍵 = 1
let 失敗次數 = 0
game.setScore(0)
basic.forever(function () {
    移動前 = 蛇頭.get(LedSpriteProperty.X) + 蛇頭.get(LedSpriteProperty.Y)
    basic.pause(速度)
    蛇頭.move(1)
    可否按鍵 = 1
    移動後 = 蛇頭.get(LedSpriteProperty.X) + 蛇頭.get(LedSpriteProperty.Y)
    if (移動後 == 移動前) {
        basic.showIcon(IconNames.No)
        失敗次數 = 失敗次數 + 1
        if (失敗次數 == 3) {
            game.gameOver()
        }
        蛇頭.set(LedSpriteProperty.X, 2)
        蛇頭.set(LedSpriteProperty.Y, 2)
        蛇頭.set(LedSpriteProperty.Direction, 90)
    }
    if (蛇頭.isTouching(水果)) {
        game.addScore(1)
        水果.set(LedSpriteProperty.X, randint(0, 4))
        水果.set(LedSpriteProperty.Y, randint(0, 4))
    }
})
basic.forever(function () {
    basic.pause((randint(0, 2) + 1) * 1000)
    水果.set(LedSpriteProperty.X, randint(0, 4))
    水果.set(LedSpriteProperty.Y, randint(0, 4))
})
