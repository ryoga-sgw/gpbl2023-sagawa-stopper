radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showNumber(1)
        servos.P1.setAngle(55)
        basic.pause(300)
        servos.P1.setAngle(90)
    }
    if (receivedNumber == 2) {
        basic.showNumber(2)
        servos.P1.setAngle(125)
        basic.pause(300)
        servos.P1.setAngle(90)
    }
    if (receivedNumber == 3) {
        basic.showNumber(3)
        servos.P2.setAngle(55)
        basic.pause(300)
        servos.P2.setAngle(90)
    }
    if (receivedNumber == 4) {
        basic.showNumber(4)
        servos.P2.setAngle(125)
        basic.pause(300)
        servos.P2.setAngle(90)
    }
    OLED.writeStringNewLine("thank you!")
    basic.pause(5000)
    number = 1
    flag1 = 0
    flag2 = 1
})
let flag1 = 0
let flag2 = 0
let number = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
radio.setGroup(39)
number = 1
flag2 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Please select your")
OLED.writeStringNewLine("product Number.(1~4)")
OLED.writeStringNewLine(" ")
OLED.writeStringNewLine(" ")
OLED.writeStringNewLine("!!Press the button until you hear a sound!!")
