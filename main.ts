input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P4, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . # . .
        # # # # #
        `)
    pins.digitalWritePin(DigitalPin.P4, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P4, 0)
})
let Soil = 0
pins.digitalWritePin(DigitalPin.P0, 0)
led.setBrightness(70)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . . # . .
    # # # # #
    `)
basic.pause(2000)
basic.forever(function () {
    Soil = pins.analogReadPin(AnalogPin.P2)
    led.plotBarGraph(
    Soil,
    1023
    )
    basic.pause(2000)
    basic.showNumber(Soil)
    basic.pause(2000)
    if (Soil > 200) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P4, 0)
        basic.pause(4000)
    }
})
