input.onButtonPressed(Button.A, function () {
    for (let value of trash_types) {
        basic.showString("" + (value))
        basic.showString("=")
        basic.showNumber(trash_count[trash_types.indexOf(value)])
    }
})
radio.onReceivedValue(function (name, value) {
    list_index = trash_types.indexOf(name)
    trash_count[list_index] = trash_count[list_index] + value
})
let list_index = 0
let trash_count: number[] = []
let trash_types: string[] = []
radio.setGroup(42)
trash_types = [
"plastic",
"glass",
"metal",
"paper",
"styrofoam",
"other"
]
trash_count = [
0,
0,
0,
0,
0,
0
]
