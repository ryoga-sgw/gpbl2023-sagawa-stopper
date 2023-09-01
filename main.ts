radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showNumber(1)
        servos.P1.setAngle(55)
        basic.pause(300)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Heart)
        basic.showNumber(2)
        servos.P1.setAngle(110)
        basic.pause(280)
    }
    if (receivedNumber == 3) {
        basic.showNumber(3)
        servos.P2.setAngle(30)
        basic.pause(300)
    }
    if (receivedNumber == 4) {
        basic.showNumber(4)
        servos.P2.setAngle(130)
        basic.pause(320)
    }
    servos.P1.setAngle(90)
    servos.P2.setAngle(90)
    basic.pause(5000)
    number = 1
    flag1 = 0
    flag2 = 1
})
let flag1 = 0
let flag2 = 0
let number = 0
servos.P2.setAngle(90)
servos.P1.setAngle(90)
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
