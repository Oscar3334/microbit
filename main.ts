enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    radio.sendMessage(RadioMessage.message1)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    if (a == 0) {
        a = 0
        basic.showIcon(IconNames.Fabulous)
    } else {
        a = 1
        basic.showIcon(IconNames.Tortoise)
    }
})
let a = 0
music.play(music.stringPlayable("- - - A B C5 - - ", 120), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Yes)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOff()
basic.pause(500)
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("Hello", 0, 0)
I2C_LCD1602.ShowString("Hello", 3, 1)
I2C_LCD1602.BacklightOff()
basic.pause(500)
I2C_LCD1602.BacklightOn()
